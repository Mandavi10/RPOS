using FRD_Bal;
using FRD_Model;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FRDWeb.Controllers
{
    public class ReportsController : Controller
    {

        ReportsBAL rb = new ReportsBAL();
        // GET: Reports
        public ActionResult Reports()
        {
            return View();
        }


        public ActionResult DailySalesReport()
        {
            return View();
        }
        public ActionResult DailyRevenueReport()
        {
            return View();
        }
        public ActionResult UserWiseItemReport()
        {
            return View();
        }
        public ActionResult DiscountReport()
        {
            return View();
        }
        public ActionResult PaymentReport()
        {
            return View();
        }

        public ActionResult more()
        {
            return View();
        }



        public string BindDD1(string restroId)
        {
          
            string UserId = CurrentUser.User.UserId.ToString();
            DataSet result = rb.BindDD1(restroId);
            return JsonConvert.SerializeObject(result, Formatting.Indented);


        }

        public JsonResult DailySReport(string restroid, string date, string todate, string itemgroupid)
        {
            Session["restroid"] = restroid;
            Session["date"] = date;
            Session["todate"] = todate;
            Session["itemgroupid"] = itemgroupid;
            string UserId = CurrentUser.User.UserId.ToString();
            // DataTable result = rb.DailySalesReport(restroid, date, todate, itemgroupid, UserId);
            //string temp =Convert.ToString(result.Rows[0]["Base64Image"]); DailyRReport
            //  List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            // return Json(lstResturant, JsonRequestBehavior.AllowGet);
            var result = 1;
            return Json(result, JsonRequestBehavior.AllowGet);
        }


        public JsonResult DailyRReport(string restroid, string date, string todate, string userid, string sectionid, string sectionidtext)
        {
            Session["restroid"] = restroid;
            Session["date"] = date;
            Session["todate"] = todate;
            Session["userid"] = userid;
            Session["sectionid"] = sectionid;
            Session["sectionidtext"] = sectionidtext;
            
            string UserId = CurrentUser.User.UserId.ToString();
            // DataTable result = rb.DailySalesReport(restroid, date, todate, itemgroupid, UserId);userid + "','sectionid
            //string temp =Convert.ToString(result.Rows[0]["Base64Image"]); DailyRReport
            //  List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            // return Json(lstResturant, JsonRequestBehavior.AllowGet);
            var result = 1;
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult UserWiseReport(string restroid, string date, string todate, string userid, string itemgroupid)
        {
            Session["restroid"] = restroid;
            Session["date"] = date;
            Session["todate"] = todate;
            Session["userid"] = userid;
            Session["itemgroupid"] = itemgroupid;
            //Session["sectionidtext"] = sectionidtext;

            string UserId = CurrentUser.User.UserId.ToString();
            // DataTable result = rb.DailySalesReport(restroid, date, todate, itemgroupid, UserId);userid + "','sectionid
            //string temp =Convert.ToString(result.Rows[0]["Base64Image"]); DailyRReport
            //  List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            // return Json(lstResturant, JsonRequestBehavior.AllowGet);
            var result = 1;
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        //DiscReport
        public JsonResult DiscReport(string date, string todate, string restroId)
        {
            //Session["restroid"] = restroid;
            Session["date"] = date;
            Session["todate"] = todate;
            Session["restroId"] = restroId;
           
            string UserId = CurrentUser.User.UserId.ToString();
            // DataTable result = rb.DailySalesReport(restroid, date, todate, itemgroupid, UserId);userid + "','sectionid
            //string temp =Convert.ToString(result.Rows[0]["Base64Image"]); DailyRReport
            //  List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            // return Json(lstResturant, JsonRequestBehavior.AllowGet);
            var result = 1;
            return Json(result, JsonRequestBehavior.AllowGet);
        }



        public JsonResult PaymentTransactionReport(string restroid, string date, string todate, string userid, string sectionid, string sectionidtext)
        {
            Session["restroid"] = restroid;
            Session["date"] = date;
            Session["todate"] = todate;
            Session["userid"] = userid;
            Session["sectionid"] = sectionid;
            Session["sectionidtext"] = sectionidtext;

            string UserId = CurrentUser.User.UserId.ToString();
            // DataTable result = rb.DailySalesReport(restroid, date, todate, itemgroupid, UserId);userid + "','sectionid
            //string temp =Convert.ToString(result.Rows[0]["Base64Image"]); DailyRReport
            //  List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            // return Json(lstResturant, JsonRequestBehavior.AllowGet);
            var result = 1;
            return Json(result, JsonRequestBehavior.AllowGet);
        }


        public JsonResult SalesReturnReport(string restroid, string date, string todate, string itemgroupid)
        {
            Session["restroid"] = restroid;
            Session["date"] = date;
            Session["todate"] = todate;
            Session["itemgroupid"] = itemgroupid;
            string UserId = CurrentUser.User.UserId.ToString();
            // DataTable result = rb.DailySalesReport(restroid, date, todate, itemgroupid, UserId);
            //string temp =Convert.ToString(result.Rows[0]["Base64Image"]); DailyRReport
            //  List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            // return Json(lstResturant, JsonRequestBehavior.AllowGet); ItemAmendReport
            var result = 1;
            return Json(result, JsonRequestBehavior.AllowGet);
        }


        public JsonResult ItemAmendReport(string restroid, string date, string todate)
        {
            Session["restroid"] = restroid;
            Session["date"] = date;
            Session["todate"] = todate;
            
            string UserId = CurrentUser.User.UserId.ToString();
            var result = 1;
            return Json(result, JsonRequestBehavior.AllowGet);
        }


    }
}