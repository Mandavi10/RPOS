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
    public class CouponMasterController : Controller
    {
        FRD_Bal.CouponMasterBAL ltyb= new FRD_Bal.CouponMasterBAL();




        // GET: CouponMaster
        public ActionResult Index()
        {
            return View();
        }


       [System.Web.Mvc.HttpPost]
        public JsonResult CreateLoyaltyCard(string BookletNo, string noofcoupons, string startfrom, string couponlength,string value)
        {
            string UserId = CurrentUser.User.UserId.ToString();
            //string RestroId = CurrentUser.User.RestroId.ToString();
            DataTable result = ltyb.CreateLoyaltyCard(BookletNo, noofcoupons, startfrom, couponlength, UserId,value);


            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }
     

      

       
       

       [System.Web.Mvc.HttpPost]
       public JsonResult CheckData()
       {
           DataTable result = ltyb.CheckData();
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
       
       [System.Web.Mvc.HttpPost]
       public JsonResult BindCouponNo()
       {
           DataTable result = ltyb.BindCouponNo();
           List<Dictionary<string, object>> lstvalidate = ClsJson.JsonMethods.RowsToDictionary(result);
           return Json(lstvalidate, JsonRequestBehavior.AllowGet);
           //return Json(result, JsonRequestBehavior.AllowGet);
       }



        


            [System.Web.Mvc.HttpPost]
       public string BindBookletTotal(string len, string restroid, string BookletNo)   // string restroid,
       {

           DataSet result = ltyb.BindBookletTotal(len, restroid, BookletNo);    // restroid, 

          /// List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);

           return JsonConvert.SerializeObject(result, Formatting.Indented);
       }

           




       [System.Web.Mvc.HttpPost]
            public JsonResult BindCouponTotal(string len, string BookletNo)     //, string BookletNo  string restroid, 
       {

           DataTable result = ltyb.BindCouponTotal(len, BookletNo);    //,BookletNo   restroid,

           List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);

           return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
       }
       [System.Web.Mvc.HttpPost]
       public JsonResult BindTotalCoupon(string Couponlength)
       {
           string UserId = CurrentUser.User.UserId.ToString();
           //string RestroId = CurrentUser.User.RestroId.ToString();
           DataTable result = ltyb.BindTotalCoupon(Couponlength);


           List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);

           return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
       }
       [System.Web.Mvc.HttpPost]
       public JsonResult BindLength(string BookletNo)
       {
           string UserId = CurrentUser.User.UserId.ToString();
           //string RestroId = CurrentUser.User.RestroId.ToString();
           DataTable result = ltyb.BindLength(BookletNo);


           List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);

           return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
       }

       [System.Web.Mvc.HttpPost]
       public JsonResult SaveIssueCards(string IssueCards, string restroid, string length,string BookletNo)
       {
           string UserId = CurrentUser.User.UserId.ToString();
           DataTable result = ltyb.SaveIssueCards(IssueCards, restroid, length, UserId,BookletNo);


           List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
           return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
       }


    }
}