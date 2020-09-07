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
    public class CustomerLoyaltyController : Controller
    {



        CustomerLoyalityBAL CL = new CustomerLoyalityBAL();
        // GET: CustomerLoyality
        public ActionResult CustomerLoyalty()
        {
            ViewBag.Message = "";

            return View();

        }





        public JsonResult SaveCustomerLoyality(string name, string cardno, string mobile, string email, string address, string restroid)
        {

            string UserName = CurrentUser.User.UserName.ToString();
            string orderid = "0";

            string result = CL.SaveCustomerLoyality(name, cardno, mobile, email, address, orderid, restroid);
            // List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(result, JsonRequestBehavior.AllowGet);
        }


        public JsonResult Checkname(string name)
        {
            DataTable result = CL.Checkname(name);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }



        public JsonResult showccarddetails(string cardno)
        {
            DataTable result = CL.showccarddetails(cardno);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }

        public JsonResult showmbcarddetails(string mobno)
        {
            DataTable result = CL.showmbcarddetails(mobno);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }


        public JsonResult ReissueCustomerLoyality(string name, string cardno, string mobile, string email, string restroid, string ocardno)
        {

            string UserName = CurrentUser.User.UserName.ToString();
            string orderid = "0";

            string result = CL.ReissueCustomerLoyality(name, cardno, mobile, email, orderid, restroid, ocardno);
            // List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(result, JsonRequestBehavior.AllowGet);
        }



        public JsonResult CheckReissueCardno(string cardno,string restroid)
        {
            DataTable result = CL.CheckReissueCardno(cardno, restroid);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }


        public JsonResult CheckReissueMobileNo(string mobno, string restroid)
        {
            DataTable result = CL.CheckReissueMobileNo(mobno, restroid);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }



        public JsonResult FilterCardNo(string cardno, string restroid)
        {
            DataTable result = CL.FilterCardNo(cardno, restroid);
           
                List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
                return Json(EmpMasters, JsonRequestBehavior.AllowGet);
            
           
        }



        public ActionResult CardActivation()
        {
            ViewBag.Message = "";

            return View();
        }



        public string BindRestroData(string restroid)
        {
            DataSet result = CL.BindRestroData(restroid);
            return JsonConvert.SerializeObject(result, Formatting.Indented);
        }

        public JsonResult checkcardno(string cardno)
        {
            DataTable result = CL.checkcardno(cardno);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }


        public JsonResult saveCardActivation(string TableDataX, string restroId)
        {
            string UserId = CurrentUser.User.UserId.ToString();
            DataTable result = CL.saveCardActivation(TableDataX, restroId, UserId);
            List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstResturant, JsonRequestBehavior.AllowGet);
        }




    }
}