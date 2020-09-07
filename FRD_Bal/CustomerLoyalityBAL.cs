using FRD_DAL;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FRD_Bal
{
    public class CustomerLoyalityBAL
    {
        CustomerLoyalityDAL CLD = new CustomerLoyalityDAL();

        public string SaveCustomerLoyality(string name, string cardno, string mobile, string email, string address, string orderid, string restroid)
        {

            return CLD.SaveCustomerLoyality(name, cardno, mobile, email, address, orderid, restroid);
        }




        public DataTable Checkname(string name)
        {
            DataTable result = CLD.Checkname(name);
            return result;
        }


        public DataTable showccarddetails(string cardno)
        {
            DataTable result = CLD.showccarddetails(cardno);
            return result;
        }

        public DataTable showmbcarddetails(string mobno)
        {
            DataTable result = CLD.showmbcarddetails(mobno);
            return result;
        }


        public string ReissueCustomerLoyality(string name, string cardno, string mobile, string email, string orderid, string restroid, string ocardno)
        {

            return CLD.ReissueCustomerLoyality(name, cardno, mobile, email, orderid, restroid, ocardno);
        }





        public DataTable CheckReissueCardno(string cardno, string restroid)
        {
            DataTable result = CLD.CheckReissueCardno(cardno, restroid);
            return result;
        }


        public DataTable CheckReissueMobileNo(string mobno, string restroid)
        {
            DataTable result = CLD.CheckReissueMobileNo(mobno, restroid);
            return result;
        }




        public DataTable FilterCardNo(string cardno, string restroid)
        {
            DataTable result = CLD.FilterCardNo(cardno, restroid);
            return result;
        }


        public DataSet BindRestroData(string restroid)
        {
            DataSet result = CLD.BindRestroData(restroid);
            return result;
        }

        public DataTable checkcardno(string cardno)
        {
            DataTable result = CLD.checkcardno(cardno);
            return result;
        }


        public DataTable saveCardActivation(string TableDataX, string restroId, string UserId)
        {

            DataTable result = CLD.saveCardActivation(TableDataX, restroId, UserId);
            return result;
        }






    }
}
