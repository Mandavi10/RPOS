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
    public partial class MenuReport : System.Web.UI.Page
    {

        CommonManger objManager = new CommonManger();
        DataTable dtG = new DataTable();
        DataTable dt,dt1,dt2;
        DataSet ds;
        string cellvalue;

        string restromenuid = "";
        string restroid = "";
        string RestroMenuLevel1Id = "";
       string RestroMenuLevel2Id = "";
        
        protected  void Page_Load(object sender, EventArgs e)
        {
             restromenuid = Convert.ToString(Session["restromenuid"]);
             restroid = Convert.ToString(Session["restroid"]);
             //RestroMenuLevel1Id = Convert.ToString(Session["RestroMenuLevel1Id"]); //RestroMenuLevel2Id datatable_Name.Rows.Count
             //RestroMenuLevel2Id = Convert.ToString(Session["itemlevel1"]);
            dt = objManager.FillDatatableWithParam("Sp_RestroMenu", "@QueryType", "@restroId", "@RestroMenuId", "bindLevel1", restroid, restromenuid);
            DataTable test = new DataTable();
           
            for(var i=0;i<dt.Rows.Count;i++){                                    
            if (dt.Rows.Count > 0)
            {
                // var a= dt.Rows.Count;    
               // string resultcol =(dt.AsEnumerable().Where( dr => dr.Field<int>( "ID" ) == i )).ToString();
                //DataRow[] dr = dt.Select(string.Format("ID ='{0}' ", i));
                //dtG.Columns.Add(resultcol, typeof(string));

               // dtG.ImportRow(dt.Rows[i]);
                 cellvalue=(dt.Rows[i][0]).ToString();
                 RestroMenuLevel2Id = (dt.Rows[i][1]).ToString();
                PrintBindLevel1();


            }
        }
                        //dt1 = objManager.FillDatatableWithParam("Sp_RestroMenu", "@QueryType", "@restroId", "@RestroMenuId", "@RestroMenuLevel1Id",
                        //                        "bindItemLevel1", restroid, restromenuid, RestroMenuLevel1Id);


            //dt2 = objManager.FillDatatableWithParam("Sp_RestroMenu", "@QueryType", "@restroId", "@RestroMenuId", "@RestroMenuLevel1Id",
            //                                 "bindlevel2", restroid, restromenuid, RestroMenuLevel2Id);
          
            ReportViewer.ProcessingMode = ProcessingMode.Local;
            ReportViewer.LocalReport.ReportPath = Server.MapPath("~/Reports/Menu.rdlc");
            ReportDataSource datasource = new ReportDataSource("Menu", dt);
            ReportDataSource datasource1 = new ReportDataSource("Menu", dt1);
            ReportDataSource datasource2 = new ReportDataSource("Menu", dt2);
           // ReportDataSource datasource2 = new ReportDataSource("GrossWeight", ds.Tables[2]);


            ReportViewer.LocalReport.DataSources.Clear();
            ReportViewer.LocalReport.DataSources.Add(datasource);
            ReportViewer.LocalReport.DataSources.Add(datasource1);
            ReportViewer.LocalReport.DataSources.Add(datasource2);
            Warning[] warnings;
            string[] streamIds;
            string mimeType = string.Empty;
            string encoding = string.Empty;
            string extension = string.Empty;

            byte[] bytes = ReportViewer.LocalReport.Render("PDF", null, out mimeType, out encoding, out extension, out streamIds, out warnings);
             Response.Buffer = true;
            Response.Clear();
            Response.ContentType = mimeType;
            //Response.AddHeader("content-disposition", "attachment; filename=" + FileName + "." + extension);
            Response.OutputStream.Write(bytes, 0, bytes.Length); // create the file  
            Response.Flush(); // send it to the client to download 
            
          
        }

        void PrintBindLevel1()
        {
           // DataRow dr = dt.NewRow();
            //dtG.Rows.Add(cellvalue);
              dtG.Columns.Add(cellvalue,typeof(string));
            dt1 = objManager.FillDatatableWithParam("Sp_RestroMenu", "@QueryType", "@restroId", "@RestroMenuId", "@RestroMenuLevel1Id",
                                    "bindItemLevel1", restroid, restromenuid, RestroMenuLevel2Id);
            dtG = dt1.Clone();
            foreach (DataRow dr in dt1.Rows)
            {
                
                dtG.ImportRow(dr);
               
            }

            

            //for (var i = 0; i < dt1.Rows.Count; i++)
            //{
            //    if (dt1.Rows.Count > 0) 
            //    {
            //        // var a= dt.Rows.Count;
            //       // string resultcol = (dtG.AsEnumerable().Where(dr => dr.Field<int>("ID") == i)).ToString();
            //        //dtG.Rows.Add(cellvalue);
            //        //dtG.Columns.Add(resultcol, typeof(string));
            //       // PrintBindLevel1();


            //    }
            //}


        }
    }
}