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
   public class LoyaltyDAL
    {
       // FRD_POS_Rest_MBEntities FRDEntity = new FRD_POS_Rest_MBEntities();

        CommonManger objManager = new CommonManger();
        DataTable dt;
        DataSet ds;
        public DataTable CreateLoyaltyCard(string cardno, string startfrom, string cardlength, string UserId)
       {
           int Loop = 0;


           string Startingno = "";
           //Loop=Convert.ToInt32(txtCardTotalcount.Text)-Convert.ToInt32(txtStartFrom.Text.Length);
           Loop = Convert.ToInt32(cardlength) - 1;
           for (int i = 1; i <= Loop; i++)
           {
               Startingno = Startingno + "0";
           }
           
           try
           {
               dt = objManager.FillDatatableWithParam("Sp_LoyaltyCardNo", "@QueryType", "@Count", "@UserId", "@StartFrom", "@StartingNo", "@Length",
                                                "CreateLoyaltyCard", cardno, UserId, startfrom, Startingno, cardlength);
           }
           catch
           {
           }

           // return ClsJson.JsonMethods.ToJson(dt);
           return dt;
       }



        public DataSet BindCardTotal(string len,string restroid)
        {
           

            try
            {
                ds = objManager.FillDatasetWithParam("Sp_LoyaltyCardNo", "@QueryType", "@Len","@restroid",
                                                 "BindCardTotal", len,restroid);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return ds;
        }

        public DataTable SaveIssueCards(string IssueCards,string restroid,string length,string UserId)
        {


            try
            {
                dt = objManager.FillDatatableWithParam("Sp_LoyaltyCardNo", "@QueryType", "@restroid", "@Count", "@Len", "@UserId", "InsertIssueCards", restroid, IssueCards, length, UserId);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataTable SaveRule(string amount, string earnedpoints, string redeemamount,string date,string UserId)
        {


            try
            {
                dt = objManager.FillDatatableWithParam("Sp_LoyaltyCardNo", "@QueryType", "@Amount", "@UserId", "@Date", "@Points", "@ConvertAmount", "InsertPoints", amount, UserId, date, earnedpoints, redeemamount);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataSet BindRestroData(string restroid)
        {
           

            try
            {
                ds = objManager.FillDatasetWithParam("Sp_LoyaltyCardNo", "@QueryType", "@restroid", "BindRestroData", restroid);
            }
            catch
            {
            }

            
            return ds;
        }

        public DataTable CheckValidation()
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_LoyaltyCardNo", "@QueryType", "CheckValidation");
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataTable BindLenCardNo()
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_LoyaltyCardNo", "@QueryType", "BindLencardNo");
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

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataTable BindPointsNew()
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_LoyaltyCardNo", "@QueryType", "BindPointsNew");
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
                dt = objManager.FillDatatableWithParam("Sp_LoyaltyCardNo", "@QueryType","@restroid", "BindRestrogrid",restroid);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }
    }
}
