using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FRD_DAL;

namespace FRD_Bal
{
    public class DineInTakeAwayBAL
    {
        FRD_DAL.DineInTakeAwayDAL ltyd = new FRD_DAL.DineInTakeAwayDAL();
        public DataSet BindItemList(string restroid, string orderid,string neworderid)
        {

            //string result = ld.Edit();
            DataSet result = ltyd.BindItemList(restroid, orderid, neworderid);
            return result;
        }


        public DataTable DeleteItem(string restroitemid)
        {

            //string result = ld.Edit();
            DataTable result = ltyd.DeleteItem(restroitemid);
            return result;
        }

        public DataTable BindItemAddons(string restroid, string itemId,string orderid,string neworderid)
        {

            //string result = ld.Edit();
            DataTable result = ltyd.BindItemAddons(restroid, itemId, orderid, neworderid);
            return result;
        }

        public DataTable BindAddons(string restroid, string RestroMenuItemId, string orderid, string neworderid, string Itemid,string Rownumber)
        {

            //string result = ld.Edit();
            DataTable result = ltyd.BindAddons(restroid, RestroMenuItemId, orderid, neworderid, Itemid, Rownumber);
            return result;
        }


        public DataTable BindTable(string orderid,string restroid,string neworderid)
        {

            //string result = ld.Edit();
            DataTable result = ltyd.BindTable(orderid, restroid, neworderid);
            return result;
        }



        public DataTable SaveItemAddon(string addonlength, string tempaddonId, string TableDataX, string restroid, string orderid, string restromenuitemid, string Qty, string neworderid, string Member, string itemId, string UserId)
        {

            //string result = ld.Edit();
            DataTable result = ltyd.SaveItemAddon(addonlength, tempaddonId, TableDataX, restroid, orderid, restromenuitemid, Qty, neworderid, Member, itemId, UserId);
            return result;
        }

        public DataTable UpdateQty(string Qty, string restroid, string orderid, string restromenuitemid, string neworderid, string itemId,string Rownumber,string UserId)
        {

            //string result = ld.Edit();
            DataTable result = ltyd.UpdateQty(Qty, restroid, orderid, restromenuitemid,neworderid,itemId,Rownumber, UserId);
            return result;
        }

        public DataTable UpdateMember(string member, string restroid, string orderid,string UserId)
        {

            //string result = ld.Edit();
            DataTable result = ltyd.UpdateMember(member, restroid, orderid,UserId);
            return result;
        }


        public DataTable BindMember(string restroid, string orderid)
        {

            //string result = ld.Edit();
            DataTable result = ltyd.BindMember(restroid, orderid);
            return result;
        }

        public DataTable DeleteData(string restroid, string orderid, string restroitemid, string neworderid, string itemId, string Rownumber)
        {

            //string result = ld.Edit();
            DataTable result = ltyd.DeleteData(restroid, orderid, restroitemid, neworderid, itemId, Rownumber);
            return result;
        }

        public DataSet SaveOrder(string restroid, string orderid, string restromenuid,string neworderid, string UserId,string OrderType)
        {

            //string result = ld.Edit();
            DataSet result = ltyd.SaveOrder(restroid, orderid, restromenuid, neworderid, UserId, OrderType);
            return result;
        }

        public DataTable gettemporder(string OrderType, string restroid)
        {

            //string result = ld.Edit();
            DataTable result = ltyd.gettemporder(OrderType, restroid);
            return result;
        }

        public DataTable updateorderstatus(string IsRemoveUnselectItems,string restroid, string neworderid, string UserId)
        {

            //string result = ld.Edit();
            DataTable result = ltyd.updateorderstatus(IsRemoveUnselectItems,restroid, neworderid, UserId);
            return result;
        }

        public DataTable clearorder(string restroid, string orderid, string neworderid,string UserId)
        {

            //string result = ld.Edit();
            DataTable result = ltyd.clearorder(restroid, orderid, neworderid, UserId);
            return result;
        }

        public DataTable HoldOrder(string restroid, string orderid,string restromenuid)
        {

            //string result = ld.Edit();
            DataTable result = ltyd.HoldOrder(restroid, orderid, restromenuid);
            return result;
        }

        public DataSet BindHoldItems(string restroid, string orderid)
        {

            //string result = ld.Edit();
            DataSet result = ltyd.BindHoldItems(restroid, orderid);
            return result;
        }

    }
}
