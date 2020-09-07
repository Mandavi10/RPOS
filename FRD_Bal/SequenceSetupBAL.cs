using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FRD_Bal
{
   public  class SequenceSetupBAL
    {
      // FRD_DAL.HomeDAL ld = new FRD_DAL.HomeDAL();
       FRD_DAL.SequenceSetupDAL ld = new FRD_DAL.SequenceSetupDAL();



        public DataTable BindResturant()
        {

            //string result = ld.BindResturant();
            DataTable result = ld.BindResturant();
            return result;
        }


        //public DataTable BindResturantinformation(string id)
        //{

        //    //string result = ld.BindResturant();
        //    DataTable result = ld.BindResturantinformation(id);
        //    return result;
        //}
        public DataSet BindResturantinformation(string id)
        {


            DataSet result = ld.BindResturantinformation(id);
            return result;
        }


        public DataTable Edit(string id)
        {

            //string result = ld.Edit();
            DataTable result = ld.Edit(id);
            return result;
        }




        public DataTable UpdateorderSequence(string id, string Ordernumberlength, string ordernumberstart, string orderfixednumber, string type, string UserId)
        {

            //string result = ld.Edit();
            DataTable result = ld.UpdateorderSequence(id, Ordernumberlength, ordernumberstart, orderfixednumber, type, UserId);
            return result;
        }


        public DataTable UpdateInvoiceNoSequence(string id, string invoicenumberlength, string invoicenumberstart, string invoicefixednumber, string type, string UserId)
        {

            //string result = ld.Edit();
            DataTable result = ld.UpdateInvoiceNoSequence(id, invoicenumberlength, invoicenumberstart, invoicefixednumber, type, UserId);
            return result;
        }


        public DataTable UpdatesalesNoSequence(string id, string salesorderlength, string salesnumberstart, string salesfixednumber, string type, string UserId)
        {

            //string result = ld.Edit();
            DataTable result = ld.UpdatesalesNoSequence(id, salesorderlength, salesnumberstart, salesfixednumber, type, UserId);
            return result;
        }

        public DataTable UpdateReceiptNoSequence(string id, string receiptnumberlength, string receiptnumberstart, string receiptfixednumber, string type, string UserId)
        {

            //string result = ld.Edit();
            DataTable result = ld.UpdateReceiptNoSequence(id, receiptnumberlength, receiptnumberstart, receiptfixednumber, type, UserId);
            return result;
        }
		
    }
}
