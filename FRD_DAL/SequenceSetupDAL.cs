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
    public class SequenceSetupDAL
    {
       // FRD_POS_Rest_MBEntities FRDEntity = new FRD_POS_Rest_MBEntities();

        CommonManger objManager = new CommonManger();
        DataTable dt;
        public DataTable BindResturant()
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_RestroMaster", "@QueryType", "BindRestroandlogo"); 
            }
            catch
            {
            }


            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }




        //public DataTable BindResturantinformation(string id)
        //{
        //    try
        //    {
        //        dt = objManager.FillDatatableWithParam("Sp_NumberSequence", "@QueryType", "@restroid", "Bindgrid", id);
        //    }
        //    catch
        //    {
        //    }

        //    // return ClsJson.JsonMethods.ToJson(dt);
        //    return dt;
        //}



        public DataSet BindResturantinformation(string id)
        {
            DataSet ds = new DataSet();

            try
            {

                ds = objManager.FillDatasetWithParam("Sp_NumberSequence", "@QueryType", "@restroid", "Bindgrid", id);


            }
            catch
            {
            }


            return ds;


        }



        public DataTable Edit(string id)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_NumberSequence", "@QueryType", "@restroid", "BindgridTest", id);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }




        public DataTable UpdateorderSequence(string id, string Ordernumberlength, string ordernumberstart, string orderfixednumber, string type, string UserId)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_NumberSequence", "@QueryType", "@restroid", "@Length", "@OrderStartFrom", "@OrderFix", "@Type", "@UserId", "Createorder", id, Ordernumberlength, ordernumberstart, orderfixednumber, type, UserId);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }


        public DataTable UpdateInvoiceNoSequence(string id, string invoicenumberlength, string invoicenumberstart, string invoicefixednumber, string type, string UserId)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_NumberSequence", "@QueryType", "@restroid", "@Length", "@InvoiceStartFrom", "@invoiceFix", "@Type", "@UserId", "Createinvoice", id, invoicenumberlength, invoicenumberstart, invoicefixednumber, type, UserId);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }


        public DataTable UpdatesalesNoSequence(string id, string salesorderlength, string salesnumberstart, string salesfixednumber, string type, string UserId)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_NumberSequence", "@QueryType", "@restroid", "@Length", "@SalesStartFrom", "@SalesFix", "@Type", "CreatSales", id, salesorderlength, salesnumberstart, salesfixednumber, type, UserId);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }



        public DataTable UpdateReceiptNoSequence(string id, string receiptnumberlength, string receiptnumberstart, string receiptfixednumber, string type, string UserId)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_NumberSequence", "@QueryType", "@restroid", "@Length", "@ReceiptStartFrom", "@ReceiptFix", "@Type", "CreatReceipt", id, receiptnumberlength, receiptnumberstart, receiptfixednumber, type, UserId);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

    }
}
