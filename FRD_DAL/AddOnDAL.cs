using FRD_Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FRD_DAL
{
   public  class AddOnDAL
    {


        CommonManger objManager = new CommonManger();
        DataTable dt;
        string result = "0";

        public DataTable createAddOn(string code, string name, string restroid,string addonsPrice, string UserId)
        {
            try
            {


                dt = objManager.FillDatatableWithParam("sp_AddOns", "@QueryType", "@Code", "@name", "@restroId", "@price", "@UserId", "CreateAddOns", code, name, restroid, addonsPrice, UserId);
            }
             catch { }
            return dt;

        }




        public DataTable BindAddOnList(string restroid)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("sp_AddOns", "@QueryType", "@restroId", "BindAddOnList", restroid);

            }
            catch { }
            return dt;

        }







        public DataTable CheckAddOnCode(string code)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("sp_AddOns", "@QueryType", "@code", "CheckAddOnCode", code);

            }
            catch { }
            return dt;

        }





        public DataTable CheckAddOnName(string name)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("sp_AddOns", "@QueryType", "@name", "CheckAddOnName", name);

            }
            catch { }
            return dt;

        }



        public DataTable CheckDuplicate(string code, string name, string restroid)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("sp_AddOns", "@QueryType", "@Code", "@name", "@restroid", "Duplicate", code, name,restroid);

            }
            catch { }
            return dt;

        }







        public DataTable itemaddonsbinding(string TableDataX, string restroid, string UserId)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_ItemsAddons", "@QueryType", "@UserId", "@restroId", "@xmlmap", "itemaddonsbinding", UserId, restroid, TableDataX);

            }
            catch { }
            return dt;

        }





        public DataTable itemaddonsUseCheck(string TableDataX, string restroId, string UserId)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_ItemsAddons", "@QueryType", "@UserId", "@restroId", "@xmlmap", "itemaddonsUseCheck", UserId, restroId, TableDataX);

            }
            catch { }
            return dt;

        }





        public DataTable Deleteaddon(string TableDataX, string restroId, string UserId)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_ItemsAddons", "@QueryType", "@UserId", "@restroId", "@xmlmap", "delAddon", UserId, restroId, TableDataX);

            }
            catch { }
            return dt;

        }







        public DataTable BindItemaddons(string itemId, string restroid, string UserId)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_ItemsAddons", "@QueryType", "@UserId", "@restroId", "@itemid", "addonsInfo", UserId, restroid, itemId);

            }
            catch { }
            return dt;

        }





        public DataTable BindItemWise(string restroid)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_ItemsAddons", "@QueryType", "@restroId", "BindItemWise", restroid);

            }
            catch { }
            return dt;

        }

    }
}
