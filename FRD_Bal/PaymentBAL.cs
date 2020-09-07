using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FRD_Bal
{


    public class PaymentBAL
    {
       
        FRD_DAL.PaymentDAL PB = new FRD_DAL.PaymentDAL();

        public DataSet BindOrderDetails(string restroid, string OrderId, string UserId)
        {

            //string result = ld.BindResturant();
            DataSet result = PB.BindOrderDetails(restroid, OrderId, UserId);
            return result;
        }


        public DataSet BtnConfirm_Click(string restroid)
        {


            DataSet result = PB.BtnConfirm_Click(restroid);
            return result;

        }
        public DataTable btnsaveCash(string RestroId, string TableDataX, string UserId, string Orderid)
        {
            DataTable result = PB.btnsaveCash(RestroId, TableDataX, UserId, Orderid);
            return result;
        }


        public DataTable btnsaveCashSplit(string RestroId, string TableDataX, string UserId, string Orderid)
        {
            DataTable result = PB.btnsaveCashSplit(RestroId, TableDataX, UserId, Orderid);
            return result;
        }


        public DataTable btnsaveCradpayment(string RestroId, string TableDataX, string UserId, string Orderid, string tempcardid)
        {
            DataTable result = PB.btnsaveCradpayment(RestroId, TableDataX, UserId, Orderid, tempcardid);
            return result;
        }
        public DataTable Stcpayment(string RestroId, string TableDataX, string UserId, string Orderid)
        {
            DataTable result = PB.Stcpayment(RestroId, TableDataX, UserId, Orderid);
            return result;
        }


        public DataTable LoyalityCardChange(string restroid, string cardNo)
        {
            DataTable result = PB.LoyalityCardChange(restroid,cardNo);
            return result;
        }

        public DataTable SaveLoyalityAmount(string restroid, string amount, string cardno)
        {
            DataTable result = PB.SaveLoyalityAmount(restroid, amount, cardno);
            return result;
        }

        public DataTable SaveOtherPayment(string restroid, string TableDataX, string Orderid, string UserId, string OtherpaymentType)
        {
            DataTable result = PB.SaveOtherPayment(restroid, TableDataX, Orderid, UserId, OtherpaymentType);
            return result;
        }

        public DataTable ClearTempTable(string restroid, string Orderid, string UserId)
        {
            DataTable result = PB.ClearTempTable(restroid, Orderid, UserId);
            return result;
        }

        public DataTable ConFirmBill(string splitType, string splitCount, string restroid, string SplitAmount, string Orderid, string ReasonId, string discountPercent, string discountAmount, string UserId, string TotalTax)
        {
            DataTable result = PB.ConFirmBill(splitType,splitCount, restroid, SplitAmount, Orderid, ReasonId, discountPercent, discountAmount, UserId, TotalTax);
            return result;
        }


        public DataTable SplitConFirmBill(string splitType,string duebalance,string restroid, string SplitAmount, string Orderid, string ReasonId, string discountPercent, string discountAmount, string UserId, string TotalTax)
        {
            DataTable result = PB.SplitConFirmBill(splitType,duebalance, restroid, SplitAmount, Orderid, ReasonId, discountPercent, discountAmount, UserId, TotalTax);
            return result;
        }


        public DataTable CheckAdmin(string restroId, string accesscode, string UserId)
        {
            DataTable result = PB.CheckAdmin(restroId, accesscode, UserId);
            return result;
        }

        public DataTable bindDiscountReason(string restroId, string UserId)
        {
            DataTable result = PB.bindDiscountReason(restroId, UserId);
            return result;
        }

        

          public DataTable BindBookletCoupon(string restroId)
        {
            DataTable result = PB.BindBookletCoupon(restroId);
            return result;
        }



          public DataTable FilterCouponNo(string restroId, string bookletNo)
        {
            DataTable result = PB.FilterCouponNo(restroId, bookletNo);
            return result;
        }



        public DataSet BindDropDown(string restroId, string UserId)
        {


            DataSet result = PB.BindDropDown(restroId, UserId);
            return result;
        }



        public DataTable ManagerDiscount(string restroid, string TableDataX, string Orderid, string discountpersentage, string Amount, string discountreason, string UserId)
        {
            DataTable result = PB.ManagerDiscount(restroid, TableDataX, Orderid, discountpersentage, Amount, discountreason, UserId);
            return result;
        }


        public DataTable AmmendedItem(string restroid, string Orderid, string TableDataX, string UserId)
        {
            DataTable result = PB.AmmendedItem(restroid,Orderid, TableDataX, UserId);
            return result;
        }
        public DataTable Shownumber(string CouponNo, string BookletNo)  //string restroid, 
        {

            //string result = ld.Edit();
            DataTable result = PB.Shownumber(CouponNo, BookletNo);   // restroid,
            return result;
        }

		
    }
}
