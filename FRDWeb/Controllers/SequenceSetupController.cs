using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using System.Web.Mvc;
using System.Net.Http;
using System.Web.Http;
using FRD_Bal;
using System.Web.Services;
using FRD_Model;
using System.Data;
using Newtonsoft.Json;

namespace FRDWeb.Controllers
{
    public class SequenceSetupController : Controller
    {
        // GET: SequenceSetup

        //FRD_Bal.HomeBAL lb = new FRD_Bal.HomeBAL();
        FRD_Bal.SequenceSetupBAL lb = new FRD_Bal.SequenceSetupBAL();
        //string UserId = CurrentUser.User.UserId.ToString();
        
        public ActionResult Index()
        {
            
            return View();

        }




        [System.Web.Mvc.HttpPost]
        public JsonResult BindResturant()
        {
            DataTable result = lb.BindResturant();
            List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstResturant, JsonRequestBehavior.AllowGet);
            //return Json(result, JsonRequestBehavior.AllowGet);
        }



        // [System.Web.Mvc.HttpPost]
        //public JsonResult BindResturantinformation(string id)
        //{

        //    DataTable result = lb.BindResturantinformation(id);


        //    List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
        //    return Json(lstResturant, JsonRequestBehavior.AllowGet);
        //}

        [System.Web.Mvc.HttpPost]
        public string BindResturantinformation(string id)
        {
            string UserId = CurrentUser.User.UserId.ToString();


            DataSet result = lb.BindResturantinformation(id);

            return JsonConvert.SerializeObject(result, Formatting.Indented);




        }




         [System.Web.Mvc.HttpPost]
         public JsonResult Edit(string id)
         {

             DataTable result = lb.Edit(id);


             List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
             return Json(lstResturant, JsonRequestBehavior.AllowGet);
         }


         [System.Web.Mvc.HttpPost]
         public JsonResult UpdateorderSequence(string id, string Ordernumberlength, string ordernumberstart, string orderfixednumber, string type)
         {
             string UserId = CurrentUser.User.UserId.ToString();
             DataTable result = lb.UpdateorderSequence(id, Ordernumberlength, ordernumberstart, orderfixednumber, type, UserId);


             List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
             return Json(lstResturant, JsonRequestBehavior.AllowGet);
         }


         [System.Web.Mvc.HttpPost]
         public JsonResult UpdateInvoiceNoSequence(string id, string invoicenumberlength, string invoicenumberstart, string invoicefixednumber, string type)
         {
             string UserId = CurrentUser.User.UserId.ToString();
             DataTable result = lb.UpdateInvoiceNoSequence(id, invoicenumberlength, invoicenumberstart, invoicefixednumber, type, UserId);


             List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
             return Json(lstResturant, JsonRequestBehavior.AllowGet);
         }




         [System.Web.Mvc.HttpPost]
         public JsonResult UpdatesalesNoSequence(string id, string salesorderlength, string salesnumberstart, string salesfixednumber, string type)
         {
             string UserId = CurrentUser.User.UserId.ToString();
             DataTable result = lb.UpdatesalesNoSequence(id, salesorderlength, salesnumberstart, salesfixednumber, type, UserId);


             List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
             return Json(lstResturant, JsonRequestBehavior.AllowGet);
         }




         [System.Web.Mvc.HttpPost]
         public JsonResult UpdateReceiptNoSequence(string id, string receiptnumberlength, string receiptnumberstart, string receiptfixednumber, string type)
         {
             string UserId = CurrentUser.User.UserId.ToString();
             DataTable result = lb.UpdateReceiptNoSequence(id, receiptnumberlength, receiptnumberstart, receiptfixednumber, type, UserId);


             List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
             return Json(lstResturant, JsonRequestBehavior.AllowGet);
         }
    }
}