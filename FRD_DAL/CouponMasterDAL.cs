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
    public class CouponMasterDAL
    {
       // FRD_POS_Rest_MBEntities FRDEntity = new FRD_POS_Rest_MBEntities();

        CommonManger objManager = new CommonManger();
        DataTable dt;
        DataSet ds;
        public DataTable CreateLoyaltyCard(string BookletNo, string noofcoupons, string startfrom, string couponlength, string UserId,string value)
        {
            int Loop = 0;

            string Startingno = "";
            //Loop=Convert.ToInt32(txtCardTotalcount.Text)-Convert.ToInt32(txtStartFrom.Text.Length);
            Loop = Convert.ToInt32(couponlength) - 1;
            for (int i = 1; i <= Loop; i++)
            {
                Startingno = Startingno + "0";
            }

            try
            {
                dt = objManager.FillDatatableWithParam("Sp_CouponMaster", "@QueryType", "@BookletNo", "@Noofcoupon", "@StartFrom", "@Couponlength", "@UserId", "@StartingNo", "@ValueCoupon", "CreateLoyaltyCard", BookletNo, noofcoupons, startfrom, couponlength, UserId, Startingno,value);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataTable BindCardLength()
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_LoyaltyCardNo", "@QueryType", "BindCardLength");
            }
            catch
            {
            }

            return dt;
        }

        public DataTable BindCouponNo()
        {
            

            try
            {
                dt = objManager.FillDatatableWithParam("Sp_CouponMaster", "@QueryType", "BindCouponNo");
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }
   
        public DataTable Divbooklet()
        {


            try
            {
                dt = objManager.FillDatatableWithParam("Sp_CouponMaster", "@QueryType", "Divbooklet");
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataTable CheckData()
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_CouponMaster", "@QueryType", "CheckData");
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataTable BindCouponTotal(string len, string BookletNo)   //, string BookletNo string restroid,
        {


            try
            {
                dt = objManager.FillDatatableWithParam("Sp_CouponMaster", "@QueryType", "@Couponlength",  "@BookletNo",
                                                "BindCouponTotal", len, BookletNo);   //"@BookletNo",,BookletNo  restroid,"@restroid",
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }





        public DataSet BindBookletTotal(string len, string restroid, string BookletNo)   // string restroid,
        {


            try
            {
                ds = objManager.FillDatasetWithParam("Sp_CouponMaster", "@QueryType", "@Couponlength", "@restroid", "@BookletNo",
                                                "BindBookletTotal", len, restroid, BookletNo);   //"@restroid",restroid,
            }
            catch
            {
            }

            return ds;
        }



        public DataTable BindLength(string BookletNo)
        {
           

            try
            {
                dt = objManager.FillDatatableWithParam("Sp_CouponMaster", "@QueryType", "@BookletNo", "BindLength", BookletNo);
            }
            catch
            {
            }

            return dt;
        }
        public DataTable BindTotalCoupon(string Couponlength)
        {

            try
            {
                dt = objManager.FillDatatableWithParam("Sp_CouponMaster", "@QueryType", "@Noofcoupon", "BindTotalCoupon", Couponlength);
            }
            catch
            {
            }

            return dt;
        }

        public DataTable BindResturant()
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_RestroMaster", "@QueryType", "BindRestroandlogo");
            }
            catch
            {
            }

            return dt;
        }
        public DataTable SaveIssueCards(string IssueCards, string restroid, string length, string UserId,string BookletNo)
        {


            try
            {
                dt = objManager.FillDatatableWithParam("Sp_CouponMaster", "@QueryType", "@restroId", "@CouponQuantity", "@CouponLength", "@UserId", "@BookletNo", "InsertIssueCards", restroid, IssueCards, length, UserId, BookletNo);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }
        public DataTable BindRestrogrid(string restroid)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_CouponMaster", "@QueryType", "@restroid", "BindRestrogrid", restroid);
            }
            catch
            {
            }
            return dt;
        }
    }
}
