using FRD_Model;
using Microsoft.Reporting.WebForms;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FRDWeb.Reports
{
    public partial class UserWiseItemReport : System.Web.UI.Page
    {

        CommonManger objManager = new CommonManger();

        //DataTable dt;
        DataSet ds;
        protected void Page_Load(object sender, EventArgs e)
        {

            //restroid, string date, string todate, string userid, string sectionid
            string restroid = Convert.ToString(Session["restroid"]);
            string date = Convert.ToString(Session["date"]);
            string todate = Convert.ToString(Session["todate"]);
           // string section = Convert.ToString(Session["sectionid"]);
            string userid = Convert.ToString(Session["userid"]);
            string UserIId = CurrentUser.User.UserId.ToString();
            string itemgroupid = Convert.ToString(Session["itemgroupid"]);    //sectionidtext
            // string itemgroupid = Convert.ToString(Session["sectionid"]); 

            ds = objManager.FillDatasetWithParam("sp_Report", "@QueryType", "@RestroId", "@FromDate", "@ToDate", "@UserId", "@ItemMenuGroupID"
                    , "@UserIdd", "UserWisePaymentMode", restroid, date, todate, userid, itemgroupid, UserIId);

            ReportViewer1.ProcessingMode = ProcessingMode.Local;
            ReportViewer1.LocalReport.ReportPath = Server.MapPath("~/Reports/UserWiseItemReport.rdlc");
            DateTime dat = DateTime.Parse(date);
            DateTime todat = DateTime.Parse(todate);
            ds.Tables[0].Columns.Add("Date", typeof(System.String));
            foreach (DataRow dr in ds.Tables[0].Rows)
            {
                //need to set value to MyRow column 
                //   dr["BranchName"] = "Daily Sales Report";   // or set it to some other value 
                dr["Date"] = dat.ToString("yyyy-MM-dd HH:mm:ss") + " - " + todat.ToString("yyyy-MM-dd HH:mm:ss");
            } 

            ReportDataSource datasource = new ReportDataSource("DataSet1", ds.Tables[0]);
            //ReportDataSource datasource1 = new ReportDataSource("DataSet2", ds.Tables[1]);
            //ReportDataSource datasource2 = new ReportDataSource("DataSet3", ds.Tables[2]);

            //ReportViewer1.LocalReport.EnableExternalImages = true;
            //var path = "~/RestroImage/" + restroid + ".jpg";
            //string imagePath = new Uri(Server.MapPath(path)).AbsoluteUri;
            //ReportParameter parameter = new ReportParameter("ImagePath", imagePath);//D:\Rproject\FRD_Web\FRDWeb\FRDWeb\RestroImage\1.jpg
            //ReportViewer1.LocalReport.SetParameters(parameter);
            //ReportViewer1.LocalReport.Refresh();

            ReportViewer1.LocalReport.DataSources.Clear();
            ReportViewer1.LocalReport.DataSources.Add(datasource);
            //ReportViewer1.LocalReport.DataSources.Add(datasource1);
            //ReportViewer1.LocalReport.DataSources.Add(datasource2);
            Warning[] warnings;
            string[] streamIds;
            string mimeType = string.Empty;
            string encoding = string.Empty;
            string extension = string.Empty;

            byte[] bytes = ReportViewer1.LocalReport.Render("PDF", null, out mimeType, out encoding, out extension, out streamIds, out warnings);
            Response.Buffer = true;
            Response.Clear();
            Response.ContentType = mimeType;
            //Response.AddHeader("content-disposition", "attachment; filename=" + FileName + "." + extension);
            Response.OutputStream.Write(bytes, 0, bytes.Length); // create the file  
            Response.Flush(); // send it to the client to download 

        }
    }
}