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
    public class CustomerCouponController : Controller
    {
        CouponCustomerBAL CC = new CouponCustomerBAL();
        public ActionResult CustomerCoupon()
        {
            ViewBag.Message = "";
            return View();
        }
        public JsonResult SaveCustomerLoyality(string name, string cardno, string mobile, string email, string address, string restroid, string BookletNo, string CardNo)
        {

            string UserName = CurrentUser.User.UserName.ToString();
            string orderid = "0";

            string result = CC.SaveCustomerLoyality(name, cardno, mobile, email, address, orderid, restroid, BookletNo,CardNo);
            return Json(result, JsonRequestBehavior.AllowGet);
        }


        public JsonResult Checkname(string name)
        {
            DataTable result = CC.Checkname(name);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }

        public JsonResult CheckMobile(string mobile)
        {
            DataTable result = CC.CheckMobile(mobile);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }

        public JsonResult showmbcarddetails(string mobno)
        {
            DataTable result = CC.showmbcarddetails(mobno);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }

        public JsonResult CheckReissueBookletno(string BookletNo, string restroid)
        {
            DataTable result = CC.CheckReissueBookletno(BookletNo,restroid);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }

        public JsonResult CheckReissueCardno(string BookletNo, string cardno, string restroid)
        {
            DataTable result = CC.CheckReissueCardno(BookletNo,cardno, restroid);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }


        public JsonResult CheckReissueMobileNo(string mobno, string restroid)
        {
            DataTable result = CC.CheckReissueMobileNo(mobno, restroid);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }

        public JsonResult FilterCouponNo(string BookletNo, string restroid)
        {
            DataTable result = CC.FilterCouponNo(BookletNo, restroid);

            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);


        }

        public JsonResult FilterCouponNo1(string BookletNo, string restroid)
        {
            DataTable result = CC.FilterCouponNo1(BookletNo, restroid);

            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);


        }
        //showbookcarddetails


        public JsonResult showbookcarddetails(string BookletNo)
        {
            DataTable result = CC.showbookcarddetails(BookletNo);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }

        public JsonResult showccarddetails(string cardno)
        {
            DataTable result = CC.showccarddetails(cardno);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ReissueCustomerLoyality(string name, string cardno, string BookletNo, string mobile, string email, string orderid, string restroid, string ocardno, string OBookletNo,string Address)   //
        {

            string UserName = CurrentUser.User.UserName.ToString();
            orderid = "0";

            string result = CC.ReissueCustomerLoyality(name, cardno, BookletNo, mobile, email, orderid, restroid, ocardno, OBookletNo, Address);
            // List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

    }
}
