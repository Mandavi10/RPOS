using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace FRD_Bal
{
   public class RunningOrderBAL
    {

       FRD_DAL.RunningOrderDAL RO = new FRD_DAL.RunningOrderDAL();
       public DataTable BindRunningOrder(string restroid)
       {

           //string result = ld.BindResturant();
           DataTable result = RO.BindRunningOrder(restroid);
           return result;
       }




       public DataSet BindOrderDetail(string id, string OrderId)
       {

           //string result = ld.BindResturant();
           DataSet result = RO.BindOrderDetail(id, OrderId);
           return result;
       }


       public DataSet BtnTableShift_Click(string id, string OrderId)
       {


           DataSet result = RO.BtnTableShift_Click(id, OrderId);
           return result;
       }



       public DataSet BillHistoryCustDetails(string restroid, string orderId, string date, string UserId)
       {


           DataSet result = RO.BillHistoryCustDetails(restroid, orderId, date, UserId);
           return result;
       }


       public DataTable Bindtable(string restroid, string sectionID)
       {


           DataTable result = RO.Bindtable(restroid, sectionID);
           return result;
       }

       public DataTable AssignNewTable(string restroid, string TableDataX, string Orderid, string UserId)
       {


           DataTable result = RO.AssignNewTable(restroid, TableDataX, Orderid, UserId);
           return result;
       }

       public DataTable Action_Click(string restroid, string orderitemsId)
       {


           DataTable result = RO.Action_Click(restroid, orderitemsId);
           return result;
       }


       public DataTable BillHistory(string restroid, string date)
       {


           DataTable result = RO.BillHistory(restroid, date);
           return result;
       }

       public DataSet Bindholditems(string restroid, string OrderId)
       {


           DataSet result = RO.Bindholditems(restroid, OrderId);
           return result;
       }

       public DataTable btndeliver_Click(string OrderId, string restroId, string UserId)
       {
           DataTable result = RO.btndeliver_Click(OrderId, restroId, UserId);
           return result;
       }

       public DataTable deleteholdorder(string OrderId, string restroid, string UserId)
       {
           DataTable result = RO.deleteholdorder(OrderId, restroid, UserId);
           return result;
       }


       public DataTable SalesReturn(string Invoiceno, string TableXml, string restroid, string userid, string TableXml1)
       {
           DataTable result = RO.SalesReturn(Invoiceno, TableXml, restroid, userid, TableXml1);
           return result;
       }
    }
}
