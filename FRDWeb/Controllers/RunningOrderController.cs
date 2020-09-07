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
using FRD_DAL.CommonUtility;

namespace FRDWeb.Controllers
{
    public class RunningOrderController : Controller
    {
        // GET: RunningOrder

        FRD_Bal.RunningOrderBAL RO=new FRD_Bal.RunningOrderBAL();
        public ActionResult Index()
        {
            return View();

        }

         [System.Web.Mvc.HttpPost]
        public JsonResult BindRunningOrder(string restroid)
        {
            string UserId = CurrentUser.User.UserId.ToString();
            DataTable result = RO.BindRunningOrder(restroid);

            List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstResturant, JsonRequestBehavior.AllowGet);
           

        }
         [System.Web.Mvc.HttpPost]
         public string BindOrderDetail(string restroid, string OrderId)
         {
             string UserId = CurrentUser.User.UserId.ToString();


             DataSet result = RO.BindOrderDetail(restroid, OrderId);

             return JsonConvert.SerializeObject(result, Formatting.Indented);
            



         }
         [System.Web.Mvc.HttpPost]
         public string BtnTableShift_Click(string restroid, string orderId)
         {
             string UserId = CurrentUser.User.UserId.ToString();


             DataSet result = RO.BtnTableShift_Click(restroid, orderId);

             return JsonConvert.SerializeObject(result, Formatting.Indented);




         }



         [System.Web.Mvc.HttpPost]
         public string BillHistoryCustDetails(string restroid, string orderId,string date)
         {
             string UserId = CurrentUser.User.UserId.ToString();


             DataSet result = RO.BillHistoryCustDetails(restroid, orderId, date, UserId);

             return JsonConvert.SerializeObject(result, Formatting.Indented);




         }


         [System.Web.Mvc.HttpPost]
         public JsonResult Bindtable(string restroid, string sectionID)
         {
             string UserId = CurrentUser.User.UserId.ToString();
             DataTable result = RO.Bindtable(restroid, sectionID);

             List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
             return Json(lstResturant, JsonRequestBehavior.AllowGet);


         }

         [System.Web.Mvc.HttpPost]
         public JsonResult AssignNewTable(string restroid, string TableDataX, string Orderid)
         {
             string UserId = CurrentUser.User.UserId.ToString();
             DataTable result = RO.AssignNewTable(restroid, TableDataX, Orderid, UserId);

             List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
             return Json(lstResturant, JsonRequestBehavior.AllowGet);


         }


         [System.Web.Mvc.HttpPost]
         public JsonResult Action_Click(string restroid, string orderitemsId)
         {
             string UserId = CurrentUser.User.UserId.ToString();
             DataTable result = RO.Action_Click(restroid, orderitemsId);

             List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
             return Json(lstResturant, JsonRequestBehavior.AllowGet);


         }


         [System.Web.Mvc.HttpPost]
         public JsonResult BillHistory(string restroid, string date)
         {
             string UserId = CurrentUser.User.UserId.ToString();
             DataTable result = RO.BillHistory(restroid, date);

             List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
             return Json(lstResturant, JsonRequestBehavior.AllowGet);


         }


         [System.Web.Mvc.HttpPost]
          public ActionResult BindPaymentPage(string restroid, string orderId)
         {
             string UserId = CurrentUser.User.UserId.ToString();
             var  result = 0;

             string OrderId = DbSecurity.Encrypt(orderId);
             return Json(OrderId, JsonRequestBehavior.AllowGet);


         }

        




         [System.Web.Mvc.HttpPost]
         public string Bindholditems(string restroid, string OrderId)
         {
             string UserId = CurrentUser.User.UserId.ToString();
             DataSet result = RO.Bindholditems(restroid, OrderId);

             return JsonConvert.SerializeObject(result, Formatting.Indented);

             //List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
             //return Json(lstResturant, JsonRequestBehavior.AllowGet);


         }




         [System.Web.Mvc.HttpPost]
         public JsonResult btndeliver_Click(string OrderId, string restroId)
         {

             string UserId = CurrentUser.User.UserId.ToString();
             DataTable result = RO.btndeliver_Click(OrderId, restroId, UserId);
             List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
             return Json(EmpMasters, JsonRequestBehavior.AllowGet);
         }

         [System.Web.Mvc.HttpPost]
         public JsonResult deleteholdorder(string OrderId, string restroid)
         {

             string UserId = CurrentUser.User.UserId.ToString();
             DataTable result = RO.deleteholdorder(OrderId, restroid, UserId);
             List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
             return Json(EmpMasters, JsonRequestBehavior.AllowGet);
         }

         [System.Web.Mvc.HttpPost]
         public JsonResult SalesReturn(string Invoiceno, string TableXml, string restroid, string TableXml1)
         {
             string UserId = CurrentUser.User.UserId.ToString();
             DataTable result = RO.SalesReturn(Invoiceno, TableXml, restroid, UserId, TableXml1);

             List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
             return Json(lstResturant, JsonRequestBehavior.AllowGet);


         }

    }
}