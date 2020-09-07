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
    public class DineInTakeAwayDAL
    {
       // FRD_POS_Rest_MBEntities FRDEntity = new FRD_POS_Rest_MBEntities();

        CommonManger objManager = new CommonManger();
        DataTable dt;
        DataSet ds;
        public DataSet BindItemList(string restroid, string orderid,string neworderid)
        {



            try
            {
                ds = objManager.FillDatasetWithParam("Sp_DineInTakeAway", "@QueryType", "@restroid", "@temporderid","@neworderid",
          "BindItemList", restroid, orderid, neworderid);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return ds;
        }

        public DataTable DeleteItem(string restroitemid)
        {


            try
            {
                dt = objManager.FillDatatableWithParam("Sp_DineInTakeAway", "@QueryType", "@restromenuitemid",
          "DeleteItem", restroitemid);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataTable BindItemAddons(string restroid, string itemId,string orderid,string neworderid)
        {


            try
            {
                dt = objManager.FillDatatableWithParam("Sp_DineInTakeAway", "@QueryType", "@restroid", "@itemId","@temporderid","@neworderid",
          "BindItemAddons", restroid, itemId,orderid,neworderid);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataTable BindAddons(string restroid, string RestroMenuItemId, string orderid, string neworderid, string Itemid, string Rownumber)
        {


            try
            {
                dt = objManager.FillDatatableWithParam("Sp_DineInTakeAway", "@QueryType", "@restroid", "@restromenuitemid", "@temporderid", "@neworderid", "@itemId","@rownumber",
          "BindAddons", restroid, RestroMenuItemId, orderid, neworderid, Itemid, Rownumber);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataTable BindTable(string orderid,string restroid,string neworderid)
        {


            try
            {
                dt = objManager.FillDatatableWithParam("Sp_DineInTakeAway", "@QueryType", "@temporderid","@restroid","@neworderid",
          "BindTable", orderid, restroid, neworderid);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataTable SaveItemAddon(string addonlength, string tempaddonId, string TableDataX, string restroid, string orderid, string restromenuitemid, string Qty, string neworderid, string Member, string itemId, string UserId)
        {

            if (tempaddonId == "") {
                tempaddonId = "0";
           }
            
                dt = objManager.FillDatatableWithParam("Sp_DineInTakeAway", "@QueryType", "@ItemDataX", "@restroid", "@temporderid", "@restromenuitemid", "@qty", "@neworderid", "@Member"
                    , "@itemId", "@UserId", "@addonsid", "@IsAddOnQuantity",
          "SaveItemAddons", TableDataX, restroid, orderid, restromenuitemid, Qty, neworderid, Member, itemId, UserId, tempaddonId, addonlength);
            
          
            

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataTable UpdateQty(string Qty, string restroid, string orderid, string restromenuitemid,string neworderid,string itemId,string Rownumber, string UserId)
        {


            try
            {
                dt = objManager.FillDatatableWithParam("Sp_DineInTakeAway", "@QueryType", "@qty", "@restroid", "@temporderid", "@restromenuitemid","@neworderid","@itemId","@rownumber", "@UserId",
          "UpdateQty", Qty, restroid, orderid, restromenuitemid,neworderid,itemId,Rownumber,UserId);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }


        public DataTable UpdateMember(string member, string restroid, string orderid, string UserId)
        {


            try
            {
                dt = objManager.FillDatatableWithParam("Sp_DineInTakeAway", "@QueryType", "@Member", "@restroid", "@temporderid", "@UserId",
          "UpdateMember", member, restroid, orderid, UserId);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataTable BindMember(string restroid, string orderid)
        {


            try
            {
                dt = objManager.FillDatatableWithParam("Sp_DineInTakeAway", "@QueryType","@restroid", "@temporderid",
          "BindMember",restroid, orderid);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataTable DeleteData(string restroid, string orderid, string restroitemid, string neworderid, string itemId, string Rownumber)
        {


            try
            {
                dt = objManager.FillDatatableWithParam("Sp_DineInTakeAway", "@QueryType", "@restroid", "@temporderid", "@restromenuitemid", "@neworderid", "@itemId","@rownumber",
          "DeleteData", restroid, orderid, restroitemid, neworderid, itemId, Rownumber);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataSet SaveOrder(string restroid, string orderid, string restromenuid,string neworderid, string UserId,string OrderType)
        {
            

                try
                {
                    ds = objManager.FillDatasetWithParam("Sp_DineInTakeAway", "@QueryType", "@restroid", "@temporderid", "@restromenuid", "@neworderId", "@UserId","@OrderType",
              "SaveOrder", restroid, orderid, restromenuid, neworderid, UserId, OrderType);
                }
                catch
                {
                }
            
            


            // return ClsJson.JsonMethods.ToJson(dt);
            return ds;
        }

        public DataTable gettemporder(string OrderType, string restroid)
        {


            try
            {
                dt = objManager.FillDatatableWithParam("Sp_DineInTakeAway", "@QueryType", "@OrderType", "@restroid",
          "gettemporder", OrderType, restroid);
            }
            catch
            {
            }




            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataTable updateorderstatus(string IsRemoveUnselectItems,string restroid, string neworderid,string UserId)
        {

            if (IsRemoveUnselectItems == "0")
            {

                dt = objManager.FillDatatableWithParam("Sp_DineInTakeAway", "@QueryType", "@restroid", "@neworderid", "@UserId",
          "updateorderstatus", restroid, neworderid, UserId);
            }
            else
            {
                dt = objManager.FillDatatableWithParam("Sp_DineInTakeAway", "@QueryType", "@restroid", "@neworderid", "@UserId",
                    "RemoveUnselectItems", restroid, neworderid, UserId);

            }
            



            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataTable clearorder(string restroid, string orderid,string neworderid,string UserId)
        {


            try
            {
                dt = objManager.FillDatatableWithParam("Sp_DineInTakeAway", "@QueryType", "@restroid", "@temporderid","@neworderid","@UserId",
          "clearorder", restroid, orderid,neworderid,UserId);
            }
            catch
            {
            }




            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataTable HoldOrder(string restroid, string orderid,string restromenuid)
        {


            try
            {
                dt = objManager.FillDatatableWithParam("Sp_DineInTakeAway", "@QueryType", "@restroid", "@temporderid","@restromenuid",
          "HoldOrder", restroid, orderid, restromenuid);
            }
            catch
            {
            }




            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataSet BindHoldItems(string restroid, string orderid)
        {


            try
            {
                ds = objManager.FillDatasetWithParam("Sp_DineInTakeAway", "@QueryType", "@restroid", "@temporderid",
          "BindHoldItems", restroid, orderid);
            }
            catch
            {
            }




            // return ClsJson.JsonMethods.ToJson(dt);
            return ds;
        }

    }
}


