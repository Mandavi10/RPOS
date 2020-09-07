using System.Web.Mvc;
using System.Net.Http;
using System.Web.Http;
using FRD_Bal;
using System.Web.Services;
using FRD_Model;
using System.Data;
using System.Collections.Generic;
using Newtonsoft.Json;
using FRD_DAL.CommonUtility;


namespace FRDWeb.Controllers
{
    public class NewOrderController : Controller
    {

        FRD_Bal.NewOrderBAL ltyb = new FRD_Bal.NewOrderBAL();
        // GET: NewOrder
        public ActionResult Index()
        {
            return View();
        }

        [System.Web.Mvc.HttpPost]
        public JsonResult SaveOrderTable(string TableDataX, string restroId, string membercount, string OrderTypeId)
        {
            string UserId = CurrentUser.User.UserId.ToString();
            DataTable result = ltyb.SaveOrderTable(TableDataX, restroId, membercount,OrderTypeId, UserId);


            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);

        }

        [System.Web.Mvc.HttpPost]
        public string BindSittingTables(string sittingsectionId, string Restroid)
        {
            
            DataSet result = ltyb.BindSittingTables(sittingsectionId, Restroid);

            return JsonConvert.SerializeObject(result, Formatting.Indented);

            //List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            //return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]
        public ActionResult BindOrderTypeId(string OrderTypeId)
        {


            string OrderType = DbSecurity.Encrypt(OrderTypeId);
            return Json(OrderType, JsonRequestBehavior.AllowGet);


        }

        [System.Web.Mvc.HttpPost]
        public ActionResult BindtempOrderId(string temporderid)
        {


            string temprder = DbSecurity.Encrypt(temporderid);
            return Json(temprder, JsonRequestBehavior.AllowGet);


        }

       


    }
}