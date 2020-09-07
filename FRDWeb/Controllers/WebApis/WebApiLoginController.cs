using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using FRD_Bal;
namespace FRDWeb.Controllers.WebApis
{
    public class WebApiLoginController : ApiController
    {
        FRD_Bal.LoginBAL LB = new FRD_Bal.LoginBAL();

        [HttpGet]
        public string Validate(string UserId, string Password)
        {
            return LB.Validate(UserId, Password);
        }

    }
}
