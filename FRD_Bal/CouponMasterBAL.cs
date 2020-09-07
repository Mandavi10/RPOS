using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FRD_DAL;

namespace FRD_Bal
{
    public class CouponMasterBAL
    {
        FRD_DAL.CouponMasterDAL ltyd = new FRD_DAL.CouponMasterDAL();
        public DataTable CreateLoyaltyCard(string BookletNo, string noofcoupons, string startfrom, string couponlength,string UserId,string value)
        {

            //string result = ld.Edit();
            DataTable result = ltyd.CreateLoyaltyCard(BookletNo, noofcoupons, startfrom, couponlength,UserId,value);
            return result;
        }

        public DataTable BindTotalCoupon(string Couponlength)
        {

            //string result = ld.Edit();
            DataTable result = ltyd.BindTotalCoupon(Couponlength);
            return result;
        }
        public DataTable BindLength(string BookletNo)
        {

            //string result = ld.Edit();
            DataTable result = ltyd.BindLength(BookletNo);
            return result;
        }

        public DataTable BindCardLength()
        {

            //string result = ld.BindResturant();
            DataTable result = ltyd.BindCardLength();
            return result;
        }
        public DataTable BindRestrogrid(string restroid)
        {

            //string result = ld.BindResturant();
            DataTable result = ltyd.BindRestrogrid(restroid);
            return result;
        }
      
        public DataTable BindCouponNo()
        {


            DataTable result = ltyd.BindCouponNo();
            return result;
        }

        public DataTable CheckData()
        {

            //string result = ld.BindResturant();
            DataTable result = ltyd.CheckData();
            return result;
        }

        public DataTable BindCouponTotal(string len, string BookletNo)     //, string BookletNo string restroid,
        {

            //string result = ld.Edit();
            DataTable result = ltyd.BindCouponTotal(len, BookletNo);      //,BookletNo restroid,
            return result;
        }



        public DataSet BindBookletTotal(string len, string restroid, string BookletNo)  //string restroid, 
        {

            //string result = ld.Edit();
            DataSet result = ltyd.BindBookletTotal(len, restroid, BookletNo);   // restroid,
            return result;
        }

        public DataTable SaveIssueCards(string IssueCards, string restroid, string length, string UserId,string BookletNo)
        {

            //string result = ld.Edit();
            DataTable result = ltyd.SaveIssueCards(IssueCards, restroid, length, UserId,BookletNo);
            return result;
        }
    }
}
