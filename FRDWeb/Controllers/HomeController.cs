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
using System.IO;
using Newtonsoft.Json;
using System.Web.Script.Serialization;
using System.Net;



namespace FRDWeb.Controllers
{
    public class HomeController : Controller
    {
        FRD_Bal.HomeBAL lb = new FRD_Bal.HomeBAL();
        public ActionResult Index()
        {
           
            return View();

        }

        [System.Web.Mvc.HttpPost]
        public JsonResult BindResturant()
        {       
            Session["CurrentRestroName"] = null;
            Session["CurrentRestroId"] = null;

            DataTable result = lb.BindResturant(CurrentUser.User.UserId.ToString());
            List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstResturant, JsonRequestBehavior.AllowGet);
            
        }


        public string AddResturant(string code, string name, string location, string address, string arebicname, string vatno, string restroId, string RestroImage)
        {
            string UserId = CurrentUser.User.UserId.ToString();
            DataSet result = lb.AddResturant(code, name, location, address, arebicname, vatno, restroId, RestroImage, UserId);
            return JsonConvert.SerializeObject(result, Formatting.Indented);
            
        }



        //public string AddImage(string lrestroId, string files)
        //{

        //    string restroid = CurrentUser.User.RestroId.ToString();
        //    string result = lb.AddImage(lrestroId, files, restroid);
        //    //string temp =Convert.ToString(result.Rows[0]["Base64Image"]);
        //    //List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
        //    //return Json(lstResturant, JsonRequestBehavior.AllowGet);
        //    return JsonConvert.SerializeObject(result, Formatting.Indented);
        //    //return Json(result, JsonRequestBehavior.AllowGet);
        //}







         

        public JsonResult BindResturantDetail(string id)
        {

            DataTable result = lb.BindResturantDetail(id);
            //string temp =Convert.ToString(result.Rows[0]["Base64Image"]);
            List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(lstResturant, JsonRequestBehavior.AllowGet);
            //return Json(result, JsonRequestBehavior.AllowGet);
        }




        public JsonResult SaveRestroId(string RestroId, string name)
        {
            //System.Web.HttpContext.Current.Session["CurrentRestroId"] = RestroId.ToString();
            Session["CurrentRestroId"] = RestroId;
            Session["CurrentRestroName"] = name;
          
            string RId =Convert.ToString(Session["CurrentRestroId"]);

            // CurrentUser.User.RestroId.ToString();
          
            var result = RId;
           // List<Dictionary<string, object>> lstResturant = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(result, JsonRequestBehavior.AllowGet);
        }



        //[HttpPost]
        //public ActionResult Index(FormCollection fc, HttpPostedFileBase file)   
        //{
            
        //    var allowedExtensions = new[] {  
        //    ".Jpg", ".png", ".jpg", "jpeg"  
        //};
            
        //    var fileName = Path.GetFileName(file.FileName); //getting only file name(ex-ganesh.jpg)  
        //    var ext = Path.GetExtension(file.FileName); //getting the extension(ex-.jpg)  
        //    if (allowedExtensions.Contains(ext)) //check what type of extension  
        //    {
        //        string name = Path.GetFileNameWithoutExtension(fileName); //getting file name without extension  
        //        string myfile = name + "_" + 1 + ext; //appending the name with id  
        //        // store the file inside ~/project folder(Img) 
        //        var path = Path.Combine(Server.MapPath("~/images"), myfile);
        //       // tbl.Image_url = path;
        //        //obj.tbl_details.Add(tbl);
        //       // obj.SaveChanges();
        //        file.SaveAs(path);
        //    }
        //    else
        //    {
        //       // ViewBag.message = "Please choose only Image file";
        //    }
        //    return View();
        //}  
    }
}