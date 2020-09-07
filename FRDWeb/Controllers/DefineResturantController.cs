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
    public class DefineResturantController : Controller
    {
        // GET: DefineResturant

       // FRD_Bal.DefineResturantBAL drb = new FRD_Bal.DefineResturantBAL();
        FRD_Bal.DefineResturantBAL drb = new FRD_Bal.DefineResturantBAL();
        string UserId = CurrentUser.User.UserId.ToString();
        public ActionResult Index()
        {
           
            return View();

        }

        [System.Web.Mvc.HttpPost]
        public JsonResult BindSittingSection(string id)
        {
            DataTable result = drb.BindSittingSection(id);
            List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstResturant, JsonRequestBehavior.AllowGet);
            //return Json(result, JsonRequestBehavior.AllowGet);


          
        }

        public JsonResult SaveSittingSection(string code, string name, string restroId, string sittingsectionId)
        {

            DataTable result = drb.SaveSittingSection(code, name, restroId, UserId, sittingsectionId);
            List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstResturant, JsonRequestBehavior.AllowGet);
            //return Json(result, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]
        public JsonResult BindTableList(string restroId)
        {
            DataTable result = drb.BindTableList(restroId);
            List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstResturant, JsonRequestBehavior.AllowGet);
        }


        public JsonResult CreateTable(string restroId, string NoOftables)
        {

            DataTable result = drb.CreateTable(restroId, NoOftables, UserId);
            List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstResturant, JsonRequestBehavior.AllowGet);
            //return Json(result, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]
        public JsonResult BindKitchenSection(string RestroId)
        {
            DataTable result = drb.BindKitchenSection(RestroId);
            List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstResturant, JsonRequestBehavior.AllowGet);
        }


        public JsonResult AddKitchenSection(string Kitchencode, string KitchenName, string restroId, string kitchensectionId)
        {

            DataTable result = drb.AddKitchenSection(Kitchencode, KitchenName, restroId, UserId, kitchensectionId);
            List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstResturant, JsonRequestBehavior.AllowGet);
            //return Json(result, JsonRequestBehavior.AllowGet);
        }




        public JsonResult ShowRestaurantDetails(string RestroId)
        {
            DataTable result = drb.ShowRestaurantDetails(RestroId);
            List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstResturant, JsonRequestBehavior.AllowGet);
        }

        public JsonResult updateRestroDetails(string code, string name, string location, string address, string arebicname, string vatno, string restroId)
        {
            string UserId = CurrentUser.User.UserId.ToString();
            DataTable result = drb.updateRestroDetails(code, name, location, address, arebicname, vatno, restroId, UserId);
            List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstResturant, JsonRequestBehavior.AllowGet);
            //return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult DeleteSittingSection(string restroId, string sittingsectionId)
        {
            DataTable result = drb.DeleteSittingSection(restroId, sittingsectionId);
            List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstResturant, JsonRequestBehavior.AllowGet);
        }


        public JsonResult DeleteTableSittingSection( string sittingsectionId)
        {
            DataTable result = drb.DeleteTableSittingSection(sittingsectionId);
            List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstResturant, JsonRequestBehavior.AllowGet);
        }


        public JsonResult DeleteKitchenCount(string restroId, string kitchensectionId)
        {
            DataTable result = drb.DeleteKitchenCount(restroId, kitchensectionId);
            List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstResturant, JsonRequestBehavior.AllowGet);
        }


        public JsonResult DeleteKitchenSection(string kitchensectionId)
        {
            DataTable result = drb.DeleteKitchenSection(kitchensectionId);
            List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstResturant, JsonRequestBehavior.AllowGet);
        }


        public JsonResult CheckDeleteTable(string restroId, string tableid)
        {
            DataTable result = drb.CheckDeleteTable(restroId, tableid);
            List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstResturant, JsonRequestBehavior.AllowGet);
        }


        public JsonResult DeleteTable(string restroId)
        {
            DataTable result = drb.DeleteTable(restroId);
            List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstResturant, JsonRequestBehavior.AllowGet);
        }
        
    }
}