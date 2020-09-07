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
    public class DineInTakeAwayController : Controller
    {
        // GET: DineInTakeAway
        FRD_Bal.DineInTakeAwayBAL ltyb = new FRD_Bal.DineInTakeAwayBAL();
       
        public ActionResult Index()
        {
            return View();
        }

        [System.Web.Mvc.HttpPost]
        public string BindItemList(string restroid, string orderid,string neworderid)
        {
            string UserId = CurrentUser.User.UserId.ToString();
            DataSet result = ltyb.BindItemList(restroid, orderid, neworderid);
            return JsonConvert.SerializeObject(result, Formatting.Indented);


            //List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
           // return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]
        public JsonResult DeleteItem(string restroitemid)
        {
           
            DataTable result = ltyb.DeleteItem(restroitemid);


            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]
        public JsonResult BindItemAddons(string restroid, string itemId,string orderid,string neworderid)
        {


            DataTable result = ltyb.BindItemAddons(restroid, itemId, orderid, neworderid);


            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]
        public JsonResult BindAddons(string restroid, string RestroMenuItemId, string orderid, string neworderid, string Itemid, string Rownumber)
        {

            DataTable result = ltyb.BindAddons(restroid, RestroMenuItemId, orderid, neworderid, Itemid, Rownumber);


            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }

        


        [System.Web.Mvc.HttpPost]
        public JsonResult BindTable(string orderid,string restroid,string neworderid)
        {

            DataTable result = ltyb.BindTable(orderid, restroid, neworderid);


            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }

     

        [System.Web.Mvc.HttpPost]
        public JsonResult SaveItemAddon(string addonlength, string tempaddonId, string TableDataX, string restroid, string orderid, string restromenuitemid, string neworderid, string Qty, string Member, string itemId)
        {
            string UserId = CurrentUser.User.UserId.ToString();
            DataTable result = ltyb.SaveItemAddon(addonlength, tempaddonId, TableDataX, restroid, orderid, restromenuitemid, Qty, neworderid, Member, itemId, UserId);

            //return JsonConvert.SerializeObject(result, Formatting.Indented);
            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]
        public JsonResult UpdateQty(string Qty, string restroid, string orderid, string restromenuitemid, string neworderid, string itemId, string Rownumber)
        {
            string UserId = CurrentUser.User.UserId.ToString();
            DataTable result = ltyb.UpdateQty(Qty, restroid, orderid, restromenuitemid,neworderid,itemId,Rownumber, UserId);


            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]
        public JsonResult UpdateMember(string member, string restroid, string orderid)
        {
            string UserId = CurrentUser.User.UserId.ToString();
            DataTable result = ltyb.UpdateMember(member, restroid, orderid,UserId);


            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]
        public JsonResult BindMember(string restroid, string orderid)
        {

            DataTable result = ltyb.BindMember(restroid, orderid);


            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]
        public JsonResult DeleteData(string restroid, string orderid, string restroitemid, string neworderid, string itemId, string Rownumber)
        {

            DataTable result = ltyb.DeleteData(restroid, orderid, restroitemid, neworderid, itemId, Rownumber);


            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]
        public string SaveOrder(string restroid, string orderid, string restromenuid,string neworderid,string OrderType)
        {
            string UserId = CurrentUser.User.UserId.ToString();
            DataSet result = ltyb.SaveOrder(restroid, orderid, restromenuid, neworderid, UserId, OrderType);
            return JsonConvert.SerializeObject(result, Formatting.Indented);

            //List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            //return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
        }
        [System.Web.Mvc.HttpPost]
        public ActionResult BindOrderType(string OrderType)
        {


            string orderType = DbSecurity.Decrypt(OrderType);
            return Json(orderType, JsonRequestBehavior.AllowGet);


        }
        [System.Web.Mvc.HttpPost]
        public ActionResult gettemporder(string OrderType, string restroid)
        {

            DataTable result = ltyb.gettemporder(OrderType, restroid);


            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
           


        }

        [System.Web.Mvc.HttpPost]
        public ActionResult BindOrderidtakeaway(string neworder)
        {


            string orderid = DbSecurity.Decrypt(neworder);
            return Json(orderid, JsonRequestBehavior.AllowGet);


        }
        [System.Web.Mvc.HttpPost]
        public ActionResult BindOrderiddinein(string neworder)
        {


            string orderid = DbSecurity.Decrypt(neworder);
            return Json(orderid, JsonRequestBehavior.AllowGet);


        }
        [System.Web.Mvc.HttpPost]
        public ActionResult BindtempOrderiddinein(string order)
        {


            string tempid = DbSecurity.Decrypt(order);
            return Json(tempid, JsonRequestBehavior.AllowGet);


        }
        [System.Web.Mvc.HttpPost]
        public ActionResult updateorderstatus(string IsRemoveUnselectItems,string restroid, string neworderid)
        {
            string UserId = CurrentUser.User.UserId.ToString();
            DataTable result = ltyb.updateorderstatus(IsRemoveUnselectItems,restroid, neworderid, UserId);


            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);
            


        }

        [System.Web.Mvc.HttpPost]
        public ActionResult clearorder(string restroid, string orderid,string neworderid)
        {

            string UserId = CurrentUser.User.UserId.ToString();
            DataTable result = ltyb.clearorder(restroid, orderid, neworderid,UserId);


            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);



        }

        [System.Web.Mvc.HttpPost]
        public ActionResult HoldOrder(string restroid, string orderid,string restromenuid)
        {

            DataTable result = ltyb.HoldOrder(restroid, orderid, restromenuid);


            List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstLoyalty, JsonRequestBehavior.AllowGet);



        }

        [System.Web.Mvc.HttpPost]
        public string BindHoldItems(string restroid, string orderid)
        {

            DataSet result = ltyb.BindHoldItems(restroid, orderid);
            return JsonConvert.SerializeObject(result, Formatting.Indented);

            //List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);
            //return Json(lstLoyalty, JsonRequestBehavior.AllowGet);



        }
    }
}