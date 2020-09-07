using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FRD_Bal;
using System.Web.SessionState;
using System.Web.Services;
using FRD_Model;
using System.Data;

namespace FRDWeb.Controllers
{
    public class ChangePasswordController : Controller
    {

        ChangePasswordBAL CB = new ChangePasswordBAL();
        // GET: ChangePassword
            //string UserName = CurrentUser.User.UserName.ToString();


        public ActionResult Validate(string oldPassword, string newPassword)
        {
            string UserId = CurrentUser.User.UserId.ToString();
            string PasswordKey = CurrentUser.User.PasswordKey.ToString();
            string result = CB.Validate(oldPassword, newPassword, UserId, PasswordKey);
            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}