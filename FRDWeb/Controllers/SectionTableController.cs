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
    public class SectionTableController : Controller
    {
        // GET: SectionTable

        FRD_Bal.SectionTableBAL st = new FRD_Bal.SectionTableBAL();
        //string UserId = CurrentUser.User.UserId.ToString();
        public ActionResult Index()
        {
           
            return View();

        }


        [System.Web.Mvc.HttpPost]
        public JsonResult BindSittingSection(string id)
        {
            DataTable result = st.BindSittingSection(id);
            List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstResturant, JsonRequestBehavior.AllowGet);
            //return Json(result, JsonRequestBehavior.AllowGet);



        }

        [System.Web.Mvc.HttpPost]
        public JsonResult BindvacantTable(string restroId)
        {
            DataTable result = st.BindvacantTable(restroId);
            List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstResturant, JsonRequestBehavior.AllowGet);
            //return Json(result, JsonRequestBehavior.AllowGet);



        }






        [System.Web.Mvc.HttpPost]
        public JsonResult BindSittingTables(string Restroid, string sittingsectionId)
        {
            DataTable result = st.BindSittingTables(Restroid, sittingsectionId);
            List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstResturant, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]
        public JsonResult MoveTableInDestination(string TableDataX, string restroId)
        {
            string UserId = CurrentUser.User.UserId.ToString();
            DataTable result = st.MoveTableInDestination(TableDataX, restroId, UserId);
            List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstResturant, JsonRequestBehavior.AllowGet);




        }

        [System.Web.Mvc.HttpPost]
        public JsonResult MoveTableInSource(string TableDataX, string restroId)
        {
            string UserId = CurrentUser.User.UserId.ToString();
            DataTable result = st.MoveTableInSource(TableDataX, restroId, UserId);
            List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstResturant, JsonRequestBehavior.AllowGet);




        }
    }
}