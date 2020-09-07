using FRD_DAL;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FRD_Bal
{
    public class CouponCustomerBAL
    {
        CouponCustomerDAL CCD = new CouponCustomerDAL();

        public string SaveCustomerLoyality(string name, string cardno, string mobile, string email, string address, string orderid, string restroid, string BookletNo,string CardNo)
        {

            return CCD.SaveCustomerLoyality(name, cardno, mobile, email, address, orderid, restroid, BookletNo,CardNo);
        }

        public DataTable Checkname(string name)
        {
            DataTable result = CCD.Checkname(name);
            return result;
        }

        public DataTable CheckMobile(string mobile)
        {
            DataTable result = CCD.CheckMobile(mobile);
            return result;
        }

        public DataTable showmbcarddetails(string mobno)
        {
            DataTable result = CCD.showmbcarddetails(mobno);
            return result;
        }

        public DataTable CheckReissueBookletno(string BookletNo, string restroid)
        {
            DataTable result = CCD.CheckReissueBookletno(BookletNo, restroid);
            return result;
        }
        public DataTable CheckReissueCardno(string BookletNo, string cardno, string restroid)
        {
            DataTable result = CCD.CheckReissueCardno(BookletNo, cardno, restroid);
            return result;
        }

        public DataTable CheckReissueMobileNo(string mobno, string restroid)
        {
            DataTable result = CCD.CheckReissueMobileNo(mobno, restroid);
            return result;
        }

        public DataTable FilterCouponNo(string BookletNo, string restroid)
        {
            DataTable result = CCD.FilterCouponNo(BookletNo, restroid);
            return result;
        }

        public DataTable FilterCouponNo1(string BookletNo, string restroid)
        {
            DataTable result = CCD.FilterCouponNo1(BookletNo, restroid);
            return result;
        }
        public DataTable showccarddetails(string cardno)
        {
            DataTable result = CCD.showccarddetails(cardno);
            return result;
        }

        public DataTable showbookcarddetails(string BookletNo)
        {
            DataTable result = CCD.showbookcarddetails(BookletNo);
            return result;
        }

        public string ReissueCustomerLoyality(string name, string cardno, string BookletNo, string mobile, string email, string orderid, string restroid, string ocardno, string OBookletNo,string Address)
        {

            return CCD.ReissueCustomerLoyality(name, cardno, mobile,BookletNo, email, orderid, restroid, ocardno, OBookletNo,Address);
        }
    }
}
