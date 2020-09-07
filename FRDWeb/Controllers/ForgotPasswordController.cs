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
    public class ForgotPasswordController : Controller
    {

        FRD_Bal.ForgotPasswordBAL RB = new FRD_Bal.ForgotPasswordBAL();
        // GET: ResetPassword
        public ActionResult ForgotPassword()
        {

            string UserId = string.Empty;


            //UserId = CurrentUser.User.UserId.ToString();
            //string UserName = CurrentUser.User.UserName.ToString();
            return View();

        }

        public ActionResult Validate(string EmailId)
        {
            string result = RB.Validate(EmailId);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        
    }
}