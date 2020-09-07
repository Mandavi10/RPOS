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
    public class KitchenScreenController : Controller
    {      
        FRD_Bal.KitchenScreenBAL ks = new FRD_Bal.KitchenScreenBAL();     
        // GET: KitchenScreen        
        public ActionResult Index()
        {
            return View();

        }


        [System.Web.Mvc.HttpPost]
        public JsonResult BindkitchenName()
        {
            string UserId = CurrentUser.User.UserId.ToString();
            string RestroId = Session["CurrentRestroId"].ToString();

            DataTable result = ks.BindkitchenName(RestroId);
            Session["KitchenScreenId"] = Convert.ToInt32(result.Rows[0]["kitchensectionId"].ToString());

           
            List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstResturant, JsonRequestBehavior.AllowGet);


        }
      
        [System.Web.Mvc.HttpPost]
        public string bindKitchenScreen(string RestroId, string KitchenScreenId)
        {
            string UserId = CurrentUser.User.UserId.ToString();
            DataSet result = ks.bindKitchenScreen(RestroId,KitchenScreenId);
            return JsonConvert.SerializeObject(result, Formatting.Indented);
        }


        [System.Web.Mvc.HttpPost]
        public JsonResult prepare_click(string RestroId, string orderitemsId)
        {
            DataTable result = ks.prepare_click(RestroId, orderitemsId);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]
        public JsonResult Bumped_click(string RestroId, string orderitemsId)
        {
            DataTable result = ks.Bumped_click(RestroId, orderitemsId);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]
        public JsonResult BindKitchenScreen_Items(string RestroId, string KitchenScreenId, string OrderID, string KotId)
        {
            DataTable result = ks.BindKitchenScreen_Items(RestroId, KitchenScreenId, OrderID, KotId);
            List<Dictionary<string, object>> BindKitchenScreen_Items = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(BindKitchenScreen_Items, JsonRequestBehavior.AllowGet);
        }



    }




}