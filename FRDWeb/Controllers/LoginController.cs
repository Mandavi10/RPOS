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
    public class LoginController : Controller
    {
        FRD_Bal.LoginBAL LB = new FRD_Bal.LoginBAL();
        string UserId = string.Empty;
        string EmailId = string.Empty;
        // GET: Login
        public ActionResult Login()
        {
            return View();

        }

        [System.Web.Mvc.HttpPost]
        public ActionResult CheckLogin(string UserPin, string Password)
        {
            string result = LB.Validate(UserPin, Password);
            string UserId = CurrentUser.User.UserId.ToString();
            string UserName = CurrentUser.User.UserName.ToString();
            string RoleId = CurrentUser.User.RoleId.ToString();


            Session["UserId"] = UserId;
            Session["UserName"] = UserName;
            Session["RoleId"] = RoleId;
            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}