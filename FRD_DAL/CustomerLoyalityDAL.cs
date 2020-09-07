using FRD_Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FRD_DAL
{
    public class CustomerLoyalityDAL
    {


        CommonManger objManager = new CommonManger();
        DataTable dt;
        DataSet ds;
        string result = "0";


        public string SaveCustomerLoyality(string name, string cardno, string mobile, string email, string address, string orderid, string restroid)
        {
            dt = objManager.FillDatatableWithParam("Sp_LoyaltyCardNo", "@QueryType", "@Name", "@Mobile", "@Address", "@Email", "@CardNo", "@OrderId", "@restroid"
             , "InsertCustDetailLoyaltyCard", name, mobile, address, email, cardno, orderid, restroid);
            return result = "0";
        }



        public DataTable Checkname(string name)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_LoyaltyCardNo", "@QueryType", "@Name", "CheckName", name);

            }
            catch { }
            return dt;

        }


        public DataTable showccarddetails(string cardno)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_LoyaltyCardNo", "@QueryType", "@CardNo", "showccarddetails", cardno);

            }
            catch { }
            return dt;
        }



        public string ReissueCustomerLoyality(string name, string cardno, string mobile, string email, string orderid, string restroid, string ocardno)
        {
            dt = objManager.FillDatatableWithParam("Sp_LoyaltyCardNo", "@QueryType", "@Name", "@Mobile", "@Email", "@CardNo", "@OrderId", "@restroid", "@OCardNo"
             , "ReissueCustDetailLoyaltyCard", name, mobile, email, cardno, orderid, restroid, ocardno);
            return result = "0";
        }





        public DataTable CheckReissueCardno(string cardno, string restroid)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_LoyaltyCardNo", "@QueryType", "@CardNo", "@restroid", "CheckCardno", cardno, restroid);

            }
            catch { }
            return dt;

        }




        public DataTable CheckReissueMobileNo(string mobno, string restroid)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_LoyaltyCardNo", "@QueryType", "@Mobile", "@restroid", "CheckReissueMobileNo", mobno, restroid);

            }
            catch { }
            return dt;

        }



        public DataTable showmbcarddetails(string mobno)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_LoyaltyCardNo", "@QueryType", "@Mobile", "showmbcarddetails", mobno);

            }
            catch { }
            return dt;
        }


        public DataTable FilterCardNo(string cardno, string restroid)
       {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_LoyaltyCardNo", "@QueryType", "@CardNo", "@restroid", "FilterCardNo", cardno, restroid);

            }
            catch { }
            return dt;

        }



        public DataSet BindRestroData(string restroid)
        {
            try
            {
                ds = objManager.FillDatasetWithParam("Sp_LoyaltyCardNo", "@QueryType", "@restroid", "BindRestroData", restroid);

            }
            catch { }
            return ds;

        }

        public DataTable checkcardno(string cardno)
        {

            try
            {
                dt = objManager.FillDatatableWithParam("Sp_LoyaltyCardNo", "@QueryType", "@CardNo", "chkCardNo", cardno);

            }
            catch { }
            return dt;

        }




        public DataTable saveCardActivation(string TableDataX, string restroId, string UserId)
        {


            try
            {

                dt = objManager.FillDatatableWithParam("Sp_LoyaltyCardNo", "@QueryType", "@XmlCard", "@restroid", "@UserId"
                                      , "Save", TableDataX, restroId, UserId);

            }
            catch
            {
            }


            return dt;


        }








    }
}
