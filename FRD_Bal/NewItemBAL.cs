using FRD_DAL;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FRD_Bal
{
   public class NewItemBAL
    {
       //NewItemDAL ND = new NewItemDAL();

       FRD_DAL.NewItemDAL ND = new FRD_DAL.NewItemDAL();
        public DataTable ItemGroupDropdown()
        {
            DataTable result = ND.ItemGroupDropdown();
            return result;
        }

        public DataTable UOMDropdown()
        {
            DataTable result = ND.UOMDropdown();
            return result;
        }


        public string SaveItemGroup(string ItemGroupName, string ItemGroupCode, string AccountNumber, string Description, string UserId, string ItemGroupId)
        {
            return ND.SaveItemGroup(ItemGroupName, ItemGroupCode, AccountNumber, Description, UserId, ItemGroupId);

        }


        public string SaveItem(string ItemName, string ItemGroupId, string UnitOfMeasure, string UserId, string ItemSalePrice, string ItemId)
        {
            return ND.SaveItem(ItemName, ItemGroupId, UnitOfMeasure, UserId, ItemSalePrice, ItemId);

        }

        public DataTable BindGroupItemList()
        {
            DataTable result = ND.BindGroupItemList();
            return result;
        }
        public DataTable BindItemList()
        {
            DataTable result = ND.BindItemList();
            return result;
        }
        //public DataTable BindNewItemCode()
        //{
        //    DataTable result = ND.BindNewItemCode();
        //    return result;
        //}


        public DataTable ShowItemList(string ItemId)
        {
            DataTable result = ND.ShowItemList(ItemId);
            return result;
        }


        public DataTable ShowGroupItemList(string ItemGroupId)
        {
            DataTable result = ND.ShowGroupItemList(ItemGroupId);
            return result;
        }


        public DataTable CheckGroupcode(string Groupcode)
        {
            DataTable result = ND.CheckGroupcode(Groupcode);
            return result;
        }

        public DataTable BindNewItemNo()
        {
            DataTable result = ND.BindNewItemNo();
            return result;
        }
    }
}
