using FRD_Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FRD_DAL
{
    public class NewItemDAL
    {


        CommonManger objManager = new CommonManger();
        DataTable dt;
        string result = "0";


        public DataTable ItemGroupDropdown()
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_GroupItemMaster", "@QueryType", "BindItemGroupDropdown");

            }
            catch { }
            return dt;


        }



        public DataTable UOMDropdown()
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_GroupItemMaster", "@QueryType", "BindUOMDropdown");

            }
            catch { }
            return dt;

        }

        public string SaveItemGroup(string ItemGroupName, string ItemGroupCode, string AccountNumber, string Description, string UserId, string ItemGroupId)
        {
            if (ItemGroupId.Trim() == "")
            {

                dt = objManager.FillDatatableWithParam("Sp_GroupItemMaster", "@QueryType", "@ItemGroupName", "@ItemGroupCode", "@AccountNumber", "@Description", "@UserId", "ItemGroupSave", ItemGroupName, ItemGroupCode, AccountNumber, Description, UserId);
                result = "0";
            }
            else
            {
                dt = objManager.FillDatatableWithParam("Sp_GroupItemMaster", "@QueryType", "@ItemGroupName", "@ItemGroupCode", "@AccountNumber", "@Description", "@ItemGroupId", "UpdateItemGroupList", ItemGroupName, ItemGroupCode, AccountNumber, Description, ItemGroupId);
                result = "1";

            }

            return result;

        }




        public string SaveItem(string ItemName, string ItemGroupId, string UnitOfMeasure, string UserId, string ItemSalePrice, string ItemId)
        {
            if (ItemId.Trim() == "")
            {
                dt = objManager.FillDatatableWithParam("Sp_GroupItemMaster", "@QueryType", "@ItemName", "@ItemGroupId", "@UnitOfMeasure", "@UserId", "@ItemSalePrice", "ItemSave", ItemName, ItemGroupId, UnitOfMeasure, UserId, ItemSalePrice);

                result = "0";
            }

            else
            {
                dt = objManager.FillDatatableWithParam("Sp_GroupItemMaster", "@QueryType", "@ItemName", "@ItemGroupId", "@UnitOfMeasure", "@UserId", "@ItemSalePrice", "@ItemId", "UpdateItemList", ItemName, ItemGroupId, UnitOfMeasure, UserId, ItemSalePrice, ItemId);
                result = "1";

            }
            return result;

        }
        public DataTable BindGroupItemList()
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_GroupItemMaster", "@QueryType", "BindGroupItemList");

            }
            catch { }
            return dt;

        }



        public DataTable BindItemList()
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_GroupItemMaster", "@QueryType", "BindItemList");

            }
            catch { }
            return dt;

        }



        public DataTable BindNewEmpCode()
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_GroupItemMaster", "@QueryType", "BindNewEmpCode");

            }
            catch { }
            return dt;

        }









        public DataTable ShowItemList(string ItemId)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_GroupItemMaster", "@QueryType", "@ItemId", "ShowItemList", ItemId);

            }
            catch { }
            return dt;

        }



        public DataTable ShowGroupItemList(string ItemGroupId)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_GroupItemMaster", "@QueryType", "@ItemGroupId", "ShowGroupItemList", ItemGroupId);

            }
            catch { }
            return dt;

        }

        public DataTable CheckGroupcode(string Groupcode)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_GroupItemMaster", "@QueryType", "@ItemGroupCode", "checkGroupCode", Groupcode);

            }
            catch { }
            return dt;

        }


        public DataTable BindNewItemNo()
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_GroupItemMaster", "@QueryType", "BindNewItemNo");

            }
            catch { }
            return dt;

        }
    }
}
