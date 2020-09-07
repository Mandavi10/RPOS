using FRD_Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FRD_DAL.CommonUtility;



namespace FRD_DAL
{
    public class PaymentDAL
    {

       // FRD_POS_Rest_MBEntities FRDEntity = new FRD_POS_Rest_MBEntities();

        CommonManger objManager = new CommonManger();
        DataTable dt;

        public DataSet BindOrderDetails(string restroid, string OrderId, string UserId)
        {
            DataSet ds = new DataSet();

            try
            {

                ds = objManager.FillDatasetWithParam("Sp_Billing", "@QueryType", "@OrderID", "@restroid", "@UserId", "PayemtOrderDetails", OrderId, restroid, UserId);


            }
            catch
            {
            }


            return ds;


        }


        public DataSet BtnConfirm_Click(string restroid)
        {
            DataSet ds = new DataSet();

            try
            {

                ds = objManager.FillDatasetWithParam("Sp_NumberSequence", "@QueryType", "@restroid", "Checksequence", restroid);


            }
            catch
            {
            }


            return ds;


        }


        public DataTable btnsaveCash(string RestroId, string TableDataX, string UserId, string Orderid)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_Billing_Temp", "@QueryType", "@restroId", "@xmlcard", "@UserId", "@OrderID", "SavetempCashdata", RestroId, TableDataX, UserId, Orderid);

            }
            catch { }
            return dt;

        }




        public DataTable btnsaveCashSplit(string RestroId, string TableDataX, string UserId, string Orderid)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_Billing_Temp", "@QueryType", "@restroId", "@xmlcard", "@UserId", "@OrderID", "SavetempCashdataSplit", RestroId, TableDataX, UserId, Orderid);

            }
            catch { }
            return dt;

        }





        public DataTable btnsaveCradpayment(string RestroId, string TableDataX, string UserId, string Orderid, string tempcardid)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_Billing_Temp", "@QueryType", "@restroId", "@xmlcard", "@UserId", "@OrderID", "@tempcardid", "btnsaveCradpayment", RestroId, TableDataX, UserId, Orderid, tempcardid);

            }
            catch { }
            return dt;

        }

        public DataTable Stcpayment(string RestroId, string TableDataX, string UserId, string Orderid)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_Billing_Temp", "@QueryType", "@restroId", "@xmlcard", "@UserId", "@OrderID", "btnsaveCradpayment", RestroId, TableDataX, UserId, Orderid);

            }
            catch { }
            return dt;

        }

        public DataTable LoyalityCardChange(string restroid, string cardNo)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_LoyaltyCardNo", "@QueryType", "@restroid", "@CardNo", "ShowPoints", restroid, cardNo);

            }

            catch { }
            return dt;


        }


        public DataTable SaveLoyalityAmount(string restroid, string amount, string cardno)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_LoyaltyCardNo", "@QueryType", "@restroid", "@CardNo", "@TotalAmount", "RedeemPoints", restroid, cardno, amount);

            }
            catch { }
            return dt;

        }

        public DataTable SaveOtherPayment(string restroid, string TableDataX, string Orderid, string UserId, string OtherpaymentType)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_Billing_Temp", "@QueryType", "@restroId", "@xmlcard", "@OrderID", "@UserId", "@OtherpaymentType", "btnsaveCradpayment", restroid, TableDataX, Orderid, UserId, OtherpaymentType);

            }
            catch { }
            return dt;

        }

        public DataTable ClearTempTable(string restroid, string Orderid, string UserId)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_Billing_Temp", "@QueryType", "@restroId", "@OrderID", "@UserId", "ClearTempBillhistory", restroid, Orderid, UserId);

            }
            catch { }

            return dt;

        }

        public DataTable ConFirmBill(string splitType, string splitCount, string restroid, string SplitAmount, string Orderid, string ReasonId, string discountPercent, string discountAmount, string UserId, string TotalTax)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_Billing_Temp", "@QueryType", "@splitcount", "@restroId", "@SplitAmount", "@OrderID", "@ReasonId", "@discountPercent", "@discountAmount", "@UserId", "@splitType", "tempConfirmBill", splitCount, restroid, SplitAmount, Orderid, ReasonId, discountPercent, discountAmount, UserId, splitType);

            }
            catch { }
            return dt;

        }


        public DataTable SplitConFirmBill(string splitType,string duebalance,string restroid, string SplitAmount, string Orderid, string ReasonId, string discountPercent, string discountAmount, string UserId, string TotalTax)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_Billing_Temp", "@QueryType", "@billAmount", "@restroId", "@SplitAmount", "@OrderID", "@ReasonId", "@discountPercent", "@discountAmount", "@UserId", "@totalAmount", "@splitType", "tempSplitConfirmBill", duebalance, restroid, SplitAmount, Orderid, ReasonId, discountPercent, discountAmount, UserId, duebalance, splitType);

            }
            catch { }
            return dt;

        }





        public DataTable CheckAdmin(string restroId, string accesscode, string UserId)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_UserLogin", "@QueryType", "@RestroId", "@UserId", "CheckManagerAccessCode", restroId, UserId);

                 string  Accesscode="";

                 foreach (DataRow row in dt.Rows)
                 {
                     try
                     {
                         Accesscode = DbSecurity.Decrypt(row["AccessCode"].ToString(), row["AccessKey"].ToString());
                         //Accesscode = DbSecurity.Decrypt(row["AccessCode"].ToString(), row["AccessKey"].ToString());
                         if (Accesscode == accesscode)
                         {
                             dt.Columns.Add("result", typeof(string));
                             row["result"] = 1;  
                         }

                         else
                         {
                             dt.Columns.Add("result", typeof(string));
                             row["result"] = -1;  
                         }
                     }
                     catch { }
                 }

               
               

            }
            catch { }
            return dt;

        }

        public DataTable bindDiscountReason(string restroId, string UserId)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_Billing_Temp", "@QueryType", "@restroid", "@UserId", "bindDiscountReason", restroId, UserId);

            }
            catch { }
            return dt;

        }



        public DataTable BindBookletCoupon(string restroId)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_Billing_Temp", "@QueryType", "@restroid", "BindBookletCoupon", restroId);

            }
            catch { }
            return dt;

        }







        public DataTable FilterCouponNo(string restroId, string bookletNo)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_Billing_Temp", "@QueryType", "@restroid", "@bookletNo", "FilterCouponNo", restroId, bookletNo);

            }
            catch { }
            return dt;

        }



        public DataSet BindDropDown(string restroId, string UserId)
        {
            DataSet ds = new DataSet();

            try
            {

                ds = objManager.FillDatasetWithParam("sp_Report", "@QueryType", "@RestroId", "@UserId", "BindDropDown", restroId, UserId);


            }
            catch
            {
            }


            return ds;


        }


        public DataTable ManagerDiscount(string restroid, string TableDataX, string Orderid, string discountpersentage,string Amount,string discountreason,string UserId)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_Billing_Temp", "@QueryType", "@restroId", "@xmlcard", "@OrderID", "@discountPercent", "@discountAmount", "@ReasonId", "@UserId", "SaveManagerDiscount", restroid, TableDataX, Orderid, discountpersentage, Amount, discountreason, UserId);

            }
            catch { }
            return dt;

        }


         public DataTable AmmendedItem(string restroid, string Orderid, string TableDataX,string UserId)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("sp_Report", "@QueryType", "@RestroId", "@OrderID", "@Xmlitems", "@UserId", "AmendOrder", restroid, Orderid, TableDataX, UserId);

            }
            catch { }
            return dt;

        }

         public DataTable Shownumber(string CouponNo, string BookletNo)   // string restroid,
         {


             try
             {
                 dt = objManager.FillDatatableWithParam("Sp_Billing_Temp", "@QueryType", "@Noofcoupon", "@bookletNo",
                                                 "Shownumber", CouponNo, BookletNo); 
             }
             catch
             {
             }

             return dt;
         }


    }
}
