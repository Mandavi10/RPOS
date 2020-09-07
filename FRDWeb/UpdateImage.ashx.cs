using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Script.Serialization;

namespace FRDWeb
{
    /// <summary>
    /// Summary description for UpdateImage
    /// </summary>
    public class UpdateImage : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {


            try
            {
                context.Response.Expires = -1;

                HttpFileCollection selectedfile = context.Request.Files;
                HttpPostedFile postedFile = selectedfile[0];
                context.Response.ContentType = "text/html";

                string RestroId = context.Request.QueryString["RestroId"];
                string savepath = context.Server.MapPath("RestroImage/");

                // context.Response.AddHeader("content-disposition", "attachment; filename=RestroId.jpg");
                //  string savepath = context.Server.MapPath("EmployeeImage/" + EmployeeNumber + "/");
                // string filename = postedFile.FileName;
                string filename = RestroId + ".jpg";

                if (!Directory.Exists(savepath))
                    Directory.CreateDirectory(savepath);
                int index = filename.LastIndexOf('.');
                string fileExtension = filename.Substring(index);
                filename = Path.GetFileNameWithoutExtension(filename);
                filename = filename + fileExtension;

                JavaScriptSerializer javaScriptSerializer = new JavaScriptSerializer();
                string serEmployee = javaScriptSerializer.Serialize("~/RestroImage/" + RestroId + "/" + filename);

                context.Response.ContentType = "text/html";
                context.Response.Write(serEmployee);
                if (File.Exists(savepath + filename))
                {
                    try
                    {
                        File.Delete(savepath + filename);
                    }
                    catch { }
                }
                postedFile.SaveAs(savepath + filename);

                context.Response.StatusCode = (int)HttpStatusCode.OK;
            }
            catch { }


        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}