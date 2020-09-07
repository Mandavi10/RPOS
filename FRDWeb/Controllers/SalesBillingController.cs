using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FRDWeb.Controllers
{
    public class SalesBillingController : Controller
    {
        // GET: SalesBilling
        public ActionResult NewOrder()
        {
            ViewBag.Message = "";

            return View();
        }
        public ActionResult DineInTakeAway()
        {
            ViewBag.Message = "";

            return View();
        }
         public ActionResult CustomerLoyalty()
        {
            ViewBag.Message = "";

            return View();

        }
         public ActionResult KitchenScreen()
         {
             ViewBag.Message = "";

             return View();
         }
         public ActionResult RunningOrder()
         {
             ViewBag.Message = "";

             return View();
         }
         public ActionResult Payment()
         {
             ViewBag.Message = "";

             return View();
         }
         public ActionResult CardActivation()
         {
             ViewBag.Message = "";

             return View();
         }
         public ActionResult TakeAway()
         {
             ViewBag.Message = "";

             return View();
         }

         public ActionResult CustomerCoupon()
         {
             ViewBag.Message = "";

             return View();
         }



    }
}

