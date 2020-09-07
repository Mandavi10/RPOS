using System.Web.Mvc;
using System.Net.Http;
using System.Web.Http;
using FRD_Bal;
using System.Web.Services;
using FRD_Model;
using System.Data;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace FRDWeb.Controllers
{
    public class LoyaltyController : Controller
    {
        FRD_Bal.LoyaltyBAL ltyb = new FRD_Bal.LoyaltyBAL();
        //string UserId = CurrentUser.User.UserId.ToString();
       
        public ActionResult Index()
        {
            return View();

        }

        [System.Web.Mvc.HttpPost]
        public JsonResult CreateLoyaltyCard(string cardno, string startfrom, string cardlength)
        {
            string UserId = CurrentUser.User.UserId.ToString();
            DataTable result = ltyb.CreateLoyaltyCard(cardno, startfrom, cardlength, UserId);


            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]
        public string BindCardTotal(string len,string restroid)
        {

            DataSet result = ltyb.BindCardTotal(len, restroid);

            return JsonConvert.SerializeObject(result, Formatting.Indented);
            //List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            //return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]
        public JsonResult SaveIssueCards(string IssueCards,string restroid,string length)
        {
            string UserId = CurrentUser.User.UserId.ToString();
            DataTable result = ltyb.SaveIssueCards(IssueCards,restroid,length,UserId);


            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]
        public string BindRestroData(string restroid)
        {

            DataSet result = ltyb.BindRestroData(restroid);


            //List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.ToJson(result);
            return JsonConvert.SerializeObject(result, Formatting.Indented);
          //  return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]
        public JsonResult SaveRule(string amount, string earnedpoints, string redeemamount, string date)
        {
            string UserId = CurrentUser.User.UserId.ToString();
            DataTable result = ltyb.SaveRule(amount, earnedpoints, redeemamount, date,UserId);


            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]
        public JsonResult CheckValidation()
        {
            DataTable result = ltyb.CheckValidation();
            List<Dictionary<string, object>> lstvalidate = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstvalidate, JsonRequestBehavior.AllowGet);
            //return Json(result, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]
        public JsonResult BindLenCardNo()
        {
            DataTable result = ltyb.BindLenCardNo();
            List<Dictionary<string, object>> lstvalidate = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstvalidate, JsonRequestBehavior.AllowGet);
            //return Json(result, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]
        public JsonResult BindCardLength()
        {
            DataTable result = ltyb.BindCardLength();
            List<Dictionary<string, object>> lstvalidate = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstvalidate, JsonRequestBehavior.AllowGet);
            //return Json(result, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]
        public JsonResult BindPointsNew()
       {
            DataTable result = ltyb.BindPointsNew();
            List<Dictionary<string, object>> lstvalidate = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstvalidate, JsonRequestBehavior.AllowGet);
            //return Json(result, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]
        public JsonResult BindRestrogrid(string restroid)
        {
            DataTable result = ltyb.BindRestrogrid(restroid);
            List<Dictionary<string, object>> lstvalidate = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstvalidate, JsonRequestBehavior.AllowGet);
            //return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}