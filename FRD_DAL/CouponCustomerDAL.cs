using FRD_Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FRD_DAL
{
    public class CouponCustomerDAL
    {
        CommonManger objManager = new CommonManger();
        DataTable dt;
        //DataSet ds;
        string result = "0";

        public string SaveCustomerLoyality(string name, string cardno, string mobile, string email, string address, string orderid, string restroid, string BookletNo,string Cardno)
        {
            dt = objManager.FillDatatableWithParam("Sp_CouponMaster", "@QueryType", "@Name", "@Mobile", "@Address", "@Email", "@CardNo", "@OrderId", "@restroid", "@BookletNo",
              "InsertCustDetailCouponCard", name, mobile, address, email, cardno, orderid, restroid, BookletNo);
            return result = "0";
        }



        public DataTable Checkname(string name)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_CouponMaster", "@QueryType", "@Name", "CheckName", name);

            }
            catch { }
            return dt;

        }

        public DataTable CheckMobile(string mobile)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_CouponMaster", "@QueryType", "@Mobile", "CheckMobile", mobile);

            }
            catch { }
            return dt;

        }

        public DataTable CheckReissueBookletno(string BookletNo, string restroid)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_CouponMaster", "@QueryType", "@BookletNo", "@restroid", "CheckBookletNo", BookletNo, restroid);

            }
            catch { }
            return dt;

        }
        public DataTable CheckReissueCardno(string BookletNo, string cardno, string restroid)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_CouponMaster", "@QueryType","@BookletNo", "@CardNo", "@restroid", "CheckCardno", BookletNo, cardno, restroid);

            }
            catch { }
            return dt;

        }

        public DataTable CheckReissueMobileNo(string mobno, string restroid)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_CouponMaster", "@QueryType", "@Mobile", "@restroid", "CheckReissueMobileNo", mobno, restroid);

            }
            catch { }
            return dt;

        }



        public DataTable showmbcarddetails(string mobno)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_CouponMaster", "@QueryType", "@Mobile", "showmbcarddetails", mobno);

            }
            catch { }
            return dt;
        }


        public DataTable FilterCouponNo(string BookletNo, string restroid)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_CouponMaster", "@QueryType", "@BookletNo", "@restroid", "FilterCouponNo", BookletNo, restroid);

            }
            catch { }
            return dt;

        }

        public DataTable FilterCouponNo1(string BookletNo, string restroid)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_CouponMaster", "@QueryType", "@BookletNo", "@restroid", "FilterCouponNo1", BookletNo, restroid);

            }
            catch { }
            return dt;

        }
        public DataTable showccarddetails(string cardno)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_CouponMaster", "@QueryType", "@CardNo", "showccarddetails", cardno);

            }
            catch { }
            return dt;
        }
        public DataTable showbookcarddetails(string BookletNo)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_CouponMaster", "@QueryType", "@BookletNo", "showbookcarddetails", BookletNo);

            }
            catch { }
            return dt;
        }

        public string ReissueCustomerLoyality(string name, string cardno, string BookletNo, string mobile, string email, string orderid, string restroid, string ocardno, string OBookletNo, string Address)
        {
            dt = objManager.FillDatatableWithParam("Sp_CouponMaster", "@QueryType", "@Name", "@Mobile", "@Email", "@CardNo", "@OrderId", "@BookletNo", "@restroid", "@OCardNo", "@OBookletNo","@Address"
             , "ReissueCustDetailLoyaltyCard", name, mobile, email, cardno, orderid, BookletNo, restroid, ocardno, OBookletNo, Address);
            return result = "0";
        }
    }
}