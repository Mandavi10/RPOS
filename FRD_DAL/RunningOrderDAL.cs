using FRD_Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FRD_DAL
{
   public class RunningOrderDAL
    {

       // FRD_POS_Rest_MBEntities FRDEntity = new FRD_POS_Rest_MBEntities();

        CommonManger objManager = new CommonManger();
        DataTable dt;



        public DataTable BindRunningOrder(string restroid)
        {


            try
            {

                dt = objManager.FillDatatableWithParam("Sp_OngoingOrder", "@QueryType", "@restroid", "BindOrder", restroid);
                if (dt.Rows.Count > 0)
                {

                }
            }
            catch
            {
            }



            return dt;


        }



        public DataSet BindOrderDetail(string id, string OrderId)
        {
            DataSet ds = new DataSet();

            try
            {

                ds = objManager.FillDatasetWithParam("Sp_OngoingOrder", "@QueryType", "@OrderID", "@restroid", "BindOrderDetail", OrderId, id);


            }
            catch
            {
            }


            return ds;


        }

        public DataSet BtnTableShift_Click(string id, string OrderId)
        {
            DataSet ds = new DataSet();

            try
            {

                ds = objManager.FillDatasetWithParam("Sp_OngoingOrder", "@QueryType", "@OrderID", "@restroid", "BindOrderDetailForOrderTaking", OrderId, id);


            }
            catch
            {
            }


            return ds;


        }




        public DataSet BillHistoryCustDetails(string restroid, string orderId, string date, string UserId)
        {
            DataSet ds = new DataSet();

            try
            {

                ds = objManager.FillDatasetWithParam("Sp_Billing", "@QueryType", "@OrderID", "@restroid", "@Date", "@UserId", "BillHistoryCustDetails", orderId, restroid, date, UserId);


            }
            catch
            {
            }


            return ds;


        }




        public DataTable Bindtable(string restroid, string sectionID)
        {


            try
            {

                dt = objManager.FillDatatableWithParam("sp_OrderTaking", "@QueryType", "@restroid", "@SecId", "BindTableFortableShifting", restroid, sectionID);
                if (dt.Rows.Count > 0)
                {

                }
            }
            catch
            {
            }


            return dt;


        }
        public DataTable AssignNewTable(string restroid, string TableDataX, string Orderid, string UserId)
        {


            try
            {
                var count = 0;
                dt = objManager.FillDatatableWithParam("sp_OrderTaking", "@QueryType", "@OrderId", "@XmlTable", "@restroId", "@UserId",
                                         "UpdateOrderable", Orderid, TableDataX, restroid, UserId);
                if (dt.Rows.Count > 0)
                {
                    count = dt.Rows.Count;
                }
            }
            catch
            {
            }


            return dt;


        }

        public DataTable Action_Click(string restroid, string orderitemsId)
        {


            try
            {

                dt = objManager.FillDatatableWithParam("Sp_OngoingOrder", "@QueryType", "@restroid", "@orderitemsId", "UpdateOrderDetail", restroid,orderitemsId);
                if (dt.Rows.Count > 0)
                {

                }
            }
            catch
            {
            }


            return dt;


        }



        public DataTable BillHistory(string restroid, string date)
        {


            try
            {

                dt = objManager.FillDatatableWithParam("sp_Report", "@QueryType", "@restroid", "@Date", "BillHistory", restroid, date);
                if (dt.Rows.Count > 0)
                {

                }
            }
            catch
            {
            }


            return dt;


        }

        public DataSet Bindholditems(string restroid, string OrderId)
        {
            DataSet ds = new DataSet();

            try
            {

                ds = objManager.FillDatasetWithParam("Sp_OngoingOrder", "@QueryType", "@OrderID", "@restroid", "Bindholditems", OrderId, restroid);


            }
            catch
            {
            }


            return ds;


        }



        public DataTable btndeliver_Click(string OrderId, string restroId, string UserId)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_OngoingOrder", "@QueryType", "@OrderID", "@restroid", "@UserID", "DeliverAll", OrderId, restroId, UserId);

            }
            catch { }
            return dt;

        }

        public DataTable deleteholdorder(string OrderId, string restroid, string UserId)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_OngoingOrder", "@QueryType", "@OrderID", "@restroid", "@UserID", "Deleteholdorder", OrderId, restroid, UserId);

            }
            catch { }
            return dt;

        }

        public DataTable SalesReturn(string Invoiceno, string TableXml, string restroid, string userid, string TableXml1)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_OngoingOrder", "@QueryType", "@InvoiceNooo", "@xmlReturn", "@restroid", "@UserId", "@xmlReturn1", "InsertReturnData", Invoiceno, TableXml, restroid, userid, TableXml1);

            }
            catch { }
            return dt;

        }

    }
}
