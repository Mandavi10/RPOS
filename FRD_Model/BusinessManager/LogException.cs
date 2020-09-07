using System;
using System.Data;
using System.Configuration;
using System.Web;
using System.IO;

using BussinessLibrary.Common;

namespace BussinessLibrary.Common
{
    public class LogException
    {
        private LogException()
        {
            //
            // TODO: Add constructor logic here
            //
        }

        /// <summary>
        /// Write the details of the exception to log file.
        /// </summary>
        /// <param name="ex"></param>
        /// <returns>void</returns>
        public static void WriteToLog(Exception ex)
        {
            string logFilePath = string.Empty;
            DataSet LogDataSet = new DataSet();
            LogDataSet.DataSetName = "Exceptions";
            DataTable LogDataTable = new DataTable();
            LogDataTable.TableName = "Exception";
            string pathFolder = HttpContext.Current.Request.ServerVariables["PATH_INFO"];
            logFilePath = HttpContext.Current.Server.MapPath(@"~\Log\");

            string errorTime = DateTime.Now.ToString();
            string url = HttpContext.Current.Request.ServerVariables["REMOTE_ADDR"] + HttpContext.Current.Request.ServerVariables["PATH_INFO"];

            LogDataTable.Columns.Add("Error_URL", System.Type.GetType("System.String"));
            LogDataTable.Columns.Add("Error_Date", System.Type.GetType("System.String"));
            LogDataTable.Columns.Add("Error_Desc", System.Type.GetType("System.String"));
            LogDataTable.Columns.Add("Source_Desc", System.Type.GetType("System.String"));
            LogDataTable.Columns.Add("StackTrace_Desc", System.Type.GetType("System.String"));

            try
            {
                //If the Directory not exists then Create the directory First 
                if (!Directory.Exists(logFilePath))
                {
                    Directory.CreateDirectory(logFilePath);
                    //Create the Dataset to Create the XMl File
                    LogDataSet.Tables.Add(LogDataTable);
                    DataRow NewDataRow = LogDataTable.NewRow();

                    NewDataRow["Error_Date"] = errorTime;
                    NewDataRow["Error_Desc"] = ex.Message;
                    NewDataRow["Error_URL"] = url;
                    NewDataRow["Source_Desc"] = ex.Source;
                    NewDataRow["StackTrace_Desc"] = ex.StackTrace;
                    LogDataTable.Rows.Add(NewDataRow);
                }
                else
                {
                    //If the File not exists then Create the file. 
                    if (!File.Exists(logFilePath + "LogExceptionsNew.xml"))
                    {
                        LogDataSet.Tables.Add(LogDataTable);
                        DataRow NewDataRow = LogDataTable.NewRow();

                        NewDataRow["Error_Date"] = errorTime;
                        NewDataRow["Error_Desc"] = ex.Message;
                        NewDataRow["Error_URL"] = url;
                        NewDataRow["Source_Desc"] = ex.Source;
                        NewDataRow["StackTrace_Desc"] = ex.StackTrace;
                        LogDataTable.Rows.Add(NewDataRow);
                    }
                    else
                    {
                        LogDataSet.ReadXml(logFilePath + "LogExceptionsNew.xml");
                        DataRow NewDataRow = LogDataSet.Tables[0].NewRow();

                        NewDataRow["Error_Date"] = errorTime;
                        NewDataRow["Error_Desc"] = ex.Message;
                        NewDataRow["Error_URL"] = url;
                        NewDataRow["Source_Desc"] = ex.Source;
                        NewDataRow["StackTrace_Desc"] = ex.StackTrace;
                        LogDataSet.Tables[0].Rows.Add(NewDataRow);
                    }
                }
                if (File.Exists(logFilePath + "LogExceptionsNew.xml"))
                {
                    FileInfo fi = new FileInfo(logFilePath + "LogExceptionsNew.xml");
                    if (fi.IsReadOnly == true)
                    {
                        fi.IsReadOnly = false;
                    }
                }
                LogDataSet.WriteXml(logFilePath + "LogExceptionsNew.xml");
                HttpContext.Current.Cache["Error"] = ex.Message + "<br>" + ex.Source;
                //HttpContext.Current.Response.Redirect("~/Admin/Error.aspx");
            }
            catch
            {
            }
            finally
            {
                LogDataSet.Dispose();
            }
        }

        public static void WriteToTable(Exception ex)
        {
            string errorTime = DateTime.Now.ToString();
            string url = HttpContext.Current.Request.ServerVariables["PATH_INFO"];
            //CommonManger ObjManager = new CommonManger();
            //CommonAccess.IntMethodWithParam("[Sp_InsertException]", "@Error_URL", "@Error_Date", "@Error_Desc", "@Source_Desc", "@StackTrace_Desc", "@CreatedByID", url, errorTime, ex.Message, ex.Source, ex.StackTrace, "1");
            //HttpContext.Current.Response.Redirect("~/Admin/Error.aspx");
        }
    }
}
