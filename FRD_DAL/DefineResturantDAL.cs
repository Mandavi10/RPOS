using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FRD_DAL;
using System.Web;
using System.Web.UI;
using System.Data;
using FRD_Model;
using FRD_DAL.CommonUtility;
using System.IO;
using System.Drawing;
using System.Drawing.Drawing2D;

namespace FRD_DAL
{
    public class DefineResturantDAL
    {

       // FRD_POS_Rest_MBEntities FRDEntity = new FRD_POS_Rest_MBEntities();

        CommonManger objManager = new CommonManger();
        DataTable dt;
        DataSet ds;



        public DataTable BindSittingSection(string id)
        {


            try
            {

                dt = objManager.FillDatatableWithParam("Sp_CreateUpDateSection", "@QueryType", "@restroid", "BindSection",id);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;


        }



        public DataTable SaveSittingSection(string code, string name, string restroId, string UserId, string sittingsectionId)
        {


            try
            {
                if(sittingsectionId=="")
                {
                dt = objManager.FillDatatableWithParam("Sp_CreateUpDateSection", "@QueryType", "@Code", "@Name", "@restroid", "Duplicate", code, name, restroId);
                int row_count = dt.Rows.Count;
                if (row_count <= 0)
                {

                    dt = objManager.FillDatatableWithParam("Sp_CreateUpDateSection", "@QueryType", "@Code", "@Name", "@restroid", "@UserId", "insert", code, name, restroId, UserId);
                }
                else
                {
                    return dt;
                }
                }

                else
                {
                    dt = objManager.FillDatatableWithParam("Sp_CreateUpDateSection", "@QueryType", "@Code", "@Name", "@restroid", "@UserId", "@sittingsectionId", "Update", code, name, restroId, UserId, sittingsectionId);
                }
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;


        }


        public DataTable BindTableList(string restroId)
        {


            try
            {

                dt = objManager.FillDatatableWithParam("Sp_TableMaster", "@QueryType", "@restroid", "BindTable", restroId);
            }
            catch
            {
            }
            return dt;


        }




        public DataTable CreateTable(string restroId, string NoOftables, string UserId)
        {
            dt = objManager.FillDatatableWithParam("Sp_TableMaster", "@QueryType", "@restroId", "MaxTableID", restroId);
            int count = 0;
            int tablecount = 0;
            try
            {
                if (dt.Rows.Count > 0)
                {
                    tablecount = Convert.ToInt32(dt.Rows[0][0]);
                }
            }
            catch { }

            for (int i = 0; i < Convert.ToInt32(NoOftables); i++)
            {
                tablecount++;
                count = objManager.IntMethodWithParam("Sp_TableMaster", "@QueryType", "@Code", "@restroid", "@name", "@UserId", "@TableNo",
                   "InsertTable", tablecount.ToString(), restroId, "T" + tablecount.ToString(), UserId, tablecount.ToString());
            }
            return dt;


        }


        public DataTable BindKitchenSection(string RestroId)
        {


            try
            {

                dt = objManager.FillDatatableWithParam("Sp_KitchenSection", "@QueryType", "@restroid", "BindKitchenSection", RestroId);
            }
            catch
            {
            }
            return dt;


        }




        
        public DataTable ShowRestaurantDetails(string RestroId)
        {


            try
            {

                dt = objManager.FillDatatableWithParam("Sp_RestroMaster", "@QueryType", "@restroid", "ShowRestroDetails", RestroId);
            }
            catch
            {
            }
            return dt;


        }

        public DataTable updateRestroDetails(string code, string name, string location, string address, string arebicname, string vatno, string restroId,  string UserId)
        {


            try
            {


                dt = objManager.FillDatatableWithParam("Sp_RestroMaster", "@QueryType", "@Code", "@Name", "@Location", "@Address", "@Arebicname", "@Vatno", "@restroId", "@UserId", "UpdateRestro", code, name, location, address, arebicname, vatno, restroId, UserId);

            }
            catch
            {

            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;


        }







        public DataTable AddKitchenSection(string Kitchencode, string KitchenName, string restroId, string UserId,string kitchensectionId)
        {


            try
            {
                if (kitchensectionId == "")
                {
                    dt = objManager.FillDatatableWithParam("Sp_KitchenSection", "@QueryType", "@Code", "@restroid", "@name", "Duplicate", Kitchencode, restroId, KitchenName);
                    if (dt.Rows.Count == 0)
                    {
                        int count = objManager.IntMethodWithParam("Sp_KitchenSection", "@QueryType", "@Code", "@restroid", "@name", "@UserId"
                            , "InsertKitchenSection", Kitchencode, restroId,
                           KitchenName, UserId);


                    }
                    else
                    {
                        return dt;
                    


                    }
                }
                else
                {
                    //dt = objManager.FillDatatableWithParam("Sp_KitchenSection", "@QueryType", "@Code", "@restroid", "@name", "Duplicate", Kitchencode, restroId, KitchenName);
                    //if (dt.Rows.Count == 0)
                    //{
                    dt = objManager.FillDatatableWithParam("Sp_KitchenSection", "@QueryType", "@Code", "@restroId", "@name", "@UserId", "@kitchensectionId", "UpdateKitchenSection", Kitchencode, restroId, KitchenName, UserId, kitchensectionId);


                    //}
                    //else
                    //{
                    //    return dt;
                       


                    //}

                }
                return dt;

            }
            catch
            {
            }

           
            return dt;


        }




        public DataTable DeleteSittingSection(string restroId, string sittingsectionId)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_CreateUpDateSection", "@QueryType", "@restroid", "@sittingsectionId", "DeleteCount", restroId, sittingsectionId);

            }
            catch { }
            return dt;

        }


        public DataTable DeleteTableSittingSection(string sittingsectionId)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_CreateUpDateSection", "@QueryType", "@sittingsectionId", "Delete", sittingsectionId);

            }
            catch { }
            return dt;

        }



        public DataTable DeleteKitchenCount(string restroId, string kitchensectionId)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_KitchenSection", "@QueryType", "@restroid", "@kitchensectionId", "DeleteKitchenCount", restroId, kitchensectionId);

            }
            catch { }
            return dt;

        }


        public DataTable DeleteKitchenSection(string kitchensectionId)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_KitchenSection", "@QueryType", "@kitchensectionId", "DeleteKitchenSection", kitchensectionId);

            }
            catch { }
            return dt;

        }



        public DataTable DeleteTable(string restroId)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_TableMaster", "@QueryType", "@restroId", "DeleteTable", restroId);

            }
            catch { }
            return dt;

        }

            public DataTable CheckDeleteTable(string restroId, string tableid)
           {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_TableMaster", "@QueryType", "@restroId", "@tableid", "CheckDeleteTable", restroId, tableid);

            }
            catch { }
            return dt;

        }


    }
}
