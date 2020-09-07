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
using Newtonsoft.Json;
using System.IO;

namespace FRDWeb.Controllers
{
    public class MasterController : Controller
    {
        EmployeeMasterBAL EL = new EmployeeMasterBAL();
        EmployeeDetailsBAL ED = new EmployeeDetailsBAL();
        FRD_Bal.NewItemBAL NB = new FRD_Bal.NewItemBAL();
        //AddOnBAL AB = new AddOnBAL();
        FRD_Bal.AddOnBAL AB = new FRD_Bal.AddOnBAL();
        //string UserId = CurrentUser.User.UserId.ToString();
        
       

        public ActionResult Home()
        {

            if (Session["UserId"] == null)
            {
                return RedirectToAction("Login", "Login");
            }
            if (Session["UserName"] == null)
            {
                return RedirectToAction("Login", "Login");
            }

            
            ViewBag.Message = "";

            return View();

           
        }

        public ActionResult SequenceSetup()
        {

          
        
            ViewBag.Message = "";

            return View();
        }
        public ActionResult EmployeeMaster()
        {

           
        
            return View();
        }



        public string checkurl(string url)
        {
            string savepath = url;
            string check="0";
            
            if(System.IO.File.Exists(Server.MapPath(url)))
            {
                check = "1";
            }
            else
            {
                check = "0";
            }
            return check;

        }






        public JsonResult EmployeeMasterDetails()
        {
            DataTable result = EL.validate();
            List<Dictionary<string, object>> EmpMaster = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMaster, JsonRequestBehavior.AllowGet);
        }

        public JsonResult EmployeeMasterDetailsGrid(string restroId)
        {
            DataTable result = EL.validateGrid(restroId);
            List<Dictionary<string, object>> EmpMaster = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMaster, JsonRequestBehavior.AllowGet);
        }
        public JsonResult EmployeeMasterIDDetails(string empid)
        {
            DataTable result = EL.validateID(empid);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }

        public JsonResult CheckEmpCode(string EmpCode)
        {
            DataTable result = EL.validateEmpCode(EmpCode);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }


        public string SaveEmployeeMasterDetails(string EmailId, string EmpCode, string EmpName, string mobileNo, string kitchensectionId, string restroId, string UserPin, string Password, string ConfirmPassword, string AccessCode, string RoleId)
        {
           
             string UserName = CurrentUser.User.UserName.ToString();

             DataSet result = EL.SaveEmployee(EmailId, EmpCode, EmpName, mobileNo, kitchensectionId, restroId, UserPin, Password, ConfirmPassword, UserName, AccessCode, RoleId);
           // List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
             return JsonConvert.SerializeObject(result, Formatting.Indented);
        }

        public JsonResult RestroDropdown()
        {
            DataTable result = EL.restrodropdown();
            List<Dictionary<string, object>> EmpMaster = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMaster, JsonRequestBehavior.AllowGet);
        }

        public JsonResult KitchenDropdown(string restroId)
        {
            DataTable result = EL.kitchendropdown(restroId);
            List<Dictionary<string, object>> EmpMaster = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMaster, JsonRequestBehavior.AllowGet);
        }


        public JsonResult RoleDropdown()
        {
            DataTable result = EL.RoleDropdown();
            List<Dictionary<string, object>> EmpMaster = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMaster, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Loyalty()
        {
            ViewBag.Message = "";

            return View();
        }
        public ActionResult NewItem()
        {
            ViewBag.Message = "";

            return View();
        }
        public ActionResult DefineRestaurant()
        {
            ViewBag.Message = "";

            return View();
        }
        //public ActionResult CouponMaster()
        //{
        //    ViewBag.Message = "";

        //    return View();
        //}
        public ActionResult SectionTable()
        {
            ViewBag.Message = "";

            return View();
        }
        public ActionResult EmployeeDetails()
        {
            ViewBag.Message = "";

            return View();
        }

        public JsonResult RestaurantsEmployeeDetails(string restroId)  //, string searchgridtxt
        {

            DataTable result = ED.RestroEmployeeDetails(restroId);  //, searchgridtxt
            List<Dictionary<string, object>> EmpMaster = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMaster, JsonRequestBehavior.AllowGet);
        }




        public JsonResult RestaurantsUpdateList(string EmpId, string EmailId, string EmpName, string mobileNo, string kitchensectionId, string restroId, string RoleId)
        {
            string UserId = CurrentUser.User.UserId.ToString();

            string result = ED.RestaurantsUpdateList(EmpId, EmailId, EmpName, mobileNo, kitchensectionId, restroId, RoleId, UserId);

           // List<Dictionary<string, object>> EmpMaster = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult RestaurantUpdateList(string EmpId, string EmailId, string EmpName, string mobileNo, string kitchensectionId, string restroId, string RoleId)
        {
            string UserId = CurrentUser.User.UserId.ToString();

            string result = EL.RestaurantUpdateList(EmpId, EmailId, EmpName, mobileNo, kitchensectionId, restroId, RoleId, UserId);
            // List<Dictionary<string, object>> EmpMaster = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public ActionResult AddOn()
        {
            ViewBag.Message = "";

            return View();
        }


        //public JsonResult createAddOn(string code, string name, string restroid)
        //{

        //    string UserId = CurrentUser.User.UserId.ToString();
        //    string addonsPrice = "0.00";

        //    string result = AB.createAddOn(code, name, restroid, addonsPrice, UserId);
        //    // List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
        //    return Json(result, JsonRequestBehavior.AllowGet);
        //}


        public JsonResult createAddOn(string code, string name, string restroid)
        {
            string UserId = CurrentUser.User.UserId.ToString();
            string addonsPrice = "0.00";
            DataTable result = AB.createAddOn(code, name, restroid, addonsPrice, UserId);
            List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstResturant, JsonRequestBehavior.AllowGet);

        }



        public JsonResult BindAddOnList(string restroid)
        {
            DataTable result = AB.BindAddOnList(restroid);
            List<Dictionary<string, object>> EmpMaster = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMaster, JsonRequestBehavior.AllowGet);
        }




        public JsonResult CheckAddOnCode(string code )
        {
            DataTable result = AB.CheckAddOnCode(code);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }

        public JsonResult CheckAddOnName( string name)
        {
            DataTable result = AB.CheckAddOnName(name);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }



        public JsonResult CheckDuplicate(string code,string name,string restroid)
        {
            DataTable result = AB.CheckDuplicate(code,name,restroid);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }



        public JsonResult BindItemWise(string restroid)
        {
            DataTable result = AB.BindItemWise(restroid);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }



         public JsonResult itemaddonsbinding(string TableDataX,string restroid)
        {

            string UserId = CurrentUser.User.UserId.ToString();
            DataTable result = AB.itemaddonsbinding(TableDataX,restroid,UserId);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }


         public JsonResult BindItemaddons(string itemId, string restroid)
         {
             string UserId = CurrentUser.User.UserId.ToString();
             DataTable result = AB.BindItemaddons(itemId, restroid, UserId);
             List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
             return Json(EmpMasters, JsonRequestBehavior.AllowGet);
         }





         public JsonResult itemaddonsUseCheck(string TableDataX, string restroId)
         {
             string UserId = CurrentUser.User.UserId.ToString();
             DataTable result = AB.itemaddonsUseCheck(TableDataX, restroId, UserId);
             List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
             return Json(EmpMasters, JsonRequestBehavior.AllowGet);
         }




         public JsonResult Deleteaddon(string TableDataX, string restroId)
         {
             string UserId = CurrentUser.User.UserId.ToString();
             DataTable result = AB.Deleteaddon(TableDataX, restroId, UserId);
             List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
             return Json(EmpMasters, JsonRequestBehavior.AllowGet);
         }




        public ActionResult KitchenSection()
        {
            ViewBag.Message = "";

            return View();
        }
        public ActionResult MenuCreation()
        {
            ViewBag.Message = "";

            return View();
        }



        public ActionResult CouponMaster()
        {
            ViewBag.Message = "";

            return View();
        }


        public JsonResult ItemGroupDropdown()
        {
            DataTable result = NB.ItemGroupDropdown();
            List<Dictionary<string, object>> EmpMaster = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMaster, JsonRequestBehavior.AllowGet);
        }


        public JsonResult UOMDropdown()
        {
            DataTable result = NB.UOMDropdown();
            List<Dictionary<string, object>> EmpMaster = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMaster, JsonRequestBehavior.AllowGet);
        }

        public JsonResult SaveItemGroup(string ItemGroupName, string ItemGroupCode, string AccountNumber, string Description, string ItemGroupId)
             
             {
           
             string UserId = CurrentUser.User.UserId.ToString();

             string result = NB.SaveItemGroup(ItemGroupName, ItemGroupCode, AccountNumber, Description, UserId, ItemGroupId);
           // List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public JsonResult SaveItem(string ItemName, string ItemGroupId, string UnitOfMeasure, string ItemSalePrice, string ItemId)
        {

            string UserId = CurrentUser.User.UserId.ToString();

            string result = NB.SaveItem(ItemName, ItemGroupId, UnitOfMeasure, UserId, ItemSalePrice, ItemId);
            // List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(result, JsonRequestBehavior.AllowGet);
        }


        public JsonResult BindGroupItemList()
        {
            DataTable result = NB.BindGroupItemList();
            List<Dictionary<string, object>> EmpMaster = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMaster, JsonRequestBehavior.AllowGet);
        }



        public JsonResult BindItemList()
        {
            DataTable result = NB.BindItemList();
            List<Dictionary<string, object>> EmpMaster = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMaster, JsonRequestBehavior.AllowGet);
        }


        //public JsonResult BindNewItemCode()
        //{
        //    DataTable result = NB.BindNewItemCode();
        //    List<Dictionary<string, object>> EmpMaster = ClsJson.JsonMethods.RowsToDictionary(result);
        //    return Json(EmpMaster, JsonRequestBehavior.AllowGet);
        //}


        public JsonResult ShowItemList(string ItemId)
        {

            DataTable result = NB.ShowItemList(ItemId);
            List<Dictionary<string, object>> EmpMaster = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMaster, JsonRequestBehavior.AllowGet);
        }



        public JsonResult ShowGroupItemList(string ItemGroupId)
        {

            DataTable result = NB.ShowGroupItemList(ItemGroupId);
            List<Dictionary<string, object>> EmpMaster = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMaster, JsonRequestBehavior.AllowGet);
        }







        public JsonResult CheckGroupcode(string GroupCode)
        {
            DataTable result = NB.CheckGroupcode(GroupCode);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }


        public JsonResult BindNewItemNo()
        {
            DataTable result = NB.BindNewItemNo();
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }

    }
}
