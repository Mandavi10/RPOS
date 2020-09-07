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
namespace FRDWeb.Controllers
{
    public class KitchenSectionController : Controller
    {
        // GET: KitchenSection
        //FRD_Bal.SequenceSetupBAL lb = new FRD_Bal.SequenceSetupBAL();
        FRD_Bal.KitchenSectionBAL kb = new FRD_Bal.KitchenSectionBAL();
        //string UserId = CurrentUser.User.UserId.ToString();
        public ActionResult Index()
        {
           
            return View();

        }



        [System.Web.Mvc.HttpPost]
        public JsonResult BindKitchensection(string id)
        {

            DataTable result = kb.BindKitchensection(id);


            List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstResturant, JsonRequestBehavior.AllowGet);
        }



        [System.Web.Mvc.HttpPost]
        public JsonResult ShowItems(string restroid)
        {

            DataTable result = kb.ShowItems(restroid);


            List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstResturant, JsonRequestBehavior.AllowGet);
        }


        [System.Web.Mvc.HttpPost]
        public JsonResult Bindassgineditem(string restroid, string kitchensectionId)
        {

            DataTable result = kb.Bindassgineditem(restroid, kitchensectionId);


            List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstResturant, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]
        public JsonResult AddItem(string id, string kitchensectionid, string TableDataX)
        {

            string UserId = CurrentUser.User.UserId.ToString();
            DataTable result = kb.AddItem(id, kitchensectionid, TableDataX, UserId);


            List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstResturant, JsonRequestBehavior.AllowGet);
        }


        [System.Web.Mvc.HttpPost]
        public JsonResult RemoveItem(string TableDataX, string id)
        {
            string UserId = CurrentUser.User.UserId.ToString();
            DataTable result = kb.RemoveItem(TableDataX, id, UserId);


            List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstResturant, JsonRequestBehavior.AllowGet);
        }
    }
}