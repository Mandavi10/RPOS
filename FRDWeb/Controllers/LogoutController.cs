using FRD_Bal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.SessionState;

namespace FRDWeb.Controllers
{
   
    public class LogoutController : Controller
    {
        
        // GET: Logout
        public ActionResult Logout()
        {
            string result = "0";

            System.Web.HttpContext.Current.Session["User"] = null;

            System.Web.HttpContext.Current.Session.Abandon();
            System.Web.HttpContext.Current.Session.Clear();

            return Json(result, JsonRequestBehavior.AllowGet);


        }
    }
}