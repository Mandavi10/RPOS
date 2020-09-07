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
    public class MenuCreationController : Controller
    {
        FRD_Bal.MenuCreationBAL mcb = new FRD_Bal.MenuCreationBAL();
        string UserId = CurrentUser.User.UserId.ToString();
        // GET: MenuCreation
        public ActionResult Index()
        {
            return View();
        }
        [System.Web.Mvc.HttpPost]
        public JsonResult SaveMenu(string menuname, string restroid,string restromenuid,string newname)
        {

            DataTable result = mcb.SaveMenu(menuname, restroid, restromenuid, newname,UserId);


            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);

        }

        [System.Web.Mvc.HttpPost]
        public JsonResult BindMenu(string restroid)
        {

            DataTable result = mcb.BindMenu(restroid);

            //return JsonConvert.SerializeObject(result, Formatting.Indented);
            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]
        public JsonResult DeleteMenu(string restroid, string restrolevelid)
        {

            DataTable result = mcb.DeleteMenu(restroid, restrolevelid);

            //return JsonConvert.SerializeObject(result, Formatting.Indented);
            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]
        public JsonResult BindItem(string restroid, string RestromenuId)
        {

            DataTable result = mcb.BindItem(restroid, RestromenuId);

            //return JsonConvert.SerializeObject(result, Formatting.Indented);
            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }
        [System.Web.Mvc.HttpPost]

        public JsonResult BindLevel1(string restroid, string restromenuid)
        {
            Session["restromenuid"] = restromenuid;
            Session["restroid"] = restroid;

            DataTable result = mcb.BindLevel1(restroid, restromenuid);

            //return JsonConvert.SerializeObject(result, Formatting.Indented);
            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }



        [System.Web.Mvc.HttpPost]
        public JsonResult BindItemLevel1(string restroid, string restromenuid, string RestroMenuLevel1Id)
        {
           // Session["itemlevel1"] = RestroMenuLevel1Id;
            DataTable result = mcb.BindItemLevel1(restroid, restromenuid, RestroMenuLevel1Id);

            //return JsonConvert.SerializeObject(result, Formatting.Indented);
            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]
        public JsonResult BindLevel2(string restroid, string restromenuid, string RestroMenuLevel1Id)
        {
            
            DataTable result = mcb.BindLevel2(restroid, restromenuid, RestroMenuLevel1Id);

            //return JsonConvert.SerializeObject(result, Formatting.Indented);
            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }
        [System.Web.Mvc.HttpPost]
        public JsonResult BindItemLevel2(string restroid, string restromenuid, string RestroMenuLevel2Id)
        {

            DataTable result = mcb.BindItemLevel2(restroid, restromenuid, RestroMenuLevel2Id);

            //return JsonConvert.SerializeObject(result, Formatting.Indented);
            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }
        [System.Web.Mvc.HttpPost]
        public JsonResult BindLevel3(string restroid, string restromenuid, string RestroMenuLevel2Id)
        {

            DataTable result = mcb.BindLevel3(restroid, restromenuid, RestroMenuLevel2Id);

            //return JsonConvert.SerializeObject(result, Formatting.Indented);
            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }
        [System.Web.Mvc.HttpPost]
        public JsonResult BindItemLevel3(string restroid, string restromenuid, string RestroMenuLevel3Id)
        {

            DataTable result = mcb.BindItemLevel3(restroid, restromenuid, RestroMenuLevel3Id);

            //return JsonConvert.SerializeObject(result, Formatting.Indented);
            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }


        [System.Web.Mvc.HttpPost]

        public JsonResult InsertLevel1(string restroid, string restromenuid, string levelname,string RestroMenulevel1id)
        {


            DataTable result = mcb.InsertLevel1(restroid, restromenuid, levelname,RestroMenulevel1id,UserId);
            
           
               
            

            //return JsonConvert.SerializeObject(result, Formatting.Indented);
            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]

        public JsonResult InsertLevel2(string restroid, string restromenuid, string levelname, string menulevel1id, string RestroMenulevel1id)
        {

            DataTable result = mcb.InsertLevel2(restroid, restromenuid, levelname, menulevel1id,RestroMenulevel1id, UserId);

            //return JsonConvert.SerializeObject(result, Formatting.Indented);
            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]

        public JsonResult InsertLevel3(string restroid, string restromenuid, string levelname, string menulevel2id,string RestroMenulevel2id)
        {

            DataTable result = mcb.InsertLevel3(restroid, restromenuid, levelname, menulevel2id,RestroMenulevel2id, UserId);

            //return JsonConvert.SerializeObject(result, Formatting.Indented);
            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]

        public JsonResult Insertitemlevel3(string restroid, string restromenuid,string restrolevelid, string dtitem,string level)
        {

            DataTable result = mcb.Insertitemlevel3(restroid, restromenuid, restrolevelid, dtitem, level,UserId);

            //return JsonConvert.SerializeObject(result, Formatting.Indented);
            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]

        public JsonResult UpdateItemPrice(string RestroMenuItemId, string itemprice)
        {

            DataTable result = mcb.UpdateItemPrice(RestroMenuItemId, itemprice, UserId);

            //return JsonConvert.SerializeObject(result, Formatting.Indented);
            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]

        public JsonResult defaultMenu(string restroid)
        {

            DataTable result = mcb.defaultMenu(restroid);

            //return JsonConvert.SerializeObject(result, Formatting.Indented);
            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }

        //[System.Web.Mvc.HttpPost]

        //public JsonResult Updatelevel(string restroid, string RestroMenulevelid, string updatedlevelname, string restromenuid)
        //{

        //    DataTable result = mcb.Updatelevel(restroid, RestroMenulevelid, updatedlevelname, restromenuid,UserId);

        //    //return JsonConvert.SerializeObject(result, Formatting.Indented);
        //    List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
        //    return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        //}

        public JsonResult DeleteLevel1(string restroid, string restrolevelid, string restromenuid)
        {

            DataTable result = mcb.DeleteLevel1(restroid, restrolevelid, restromenuid);

            //return JsonConvert.SerializeObject(result, Formatting.Indented);
            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }

        public JsonResult DeleteLevel2(string restroid, string restrolevelid, string restromenuid)
        {

            DataTable result = mcb.DeleteLevel2(restroid, restrolevelid, restromenuid);

            //return JsonConvert.SerializeObject(result, Formatting.Indented);
            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }

        public JsonResult DeleteLevel3(string restroid, string restrolevelid, string restromenuid)
        {

            DataTable result = mcb.DeleteLevel3(restroid, restrolevelid, restromenuid);

            //return JsonConvert.SerializeObject(result, Formatting.Indented);
            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }


        public JsonResult DeleteItem(string restrolevelid, string restromenuid, string restroid)
        {

            DataTable result = mcb.DeleteItem(restrolevelid, restromenuid, restroid);

            //return JsonConvert.SerializeObject(result, Formatting.Indented);
            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }

       

    }
}