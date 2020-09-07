using System;
using System.Data;
using System.Collections.Generic;

using System.Web.UI.WebControls;
using BussinessLibrary.Common;

namespace FRD_Model
{
    public class CommonManger
    {
        CommonAccess objCommon = new CommonAccess();
        public CommonManger() { }
        //ILog logger = log4net.LogManager.GetLogger(typeof(CommonManger));

        public void FillDropDownList(DropDownList myDDLName, string spName, string DataValueField, string DataTextField, params string[] parameter)
        {
            DataTable myTable = new DataTable();
            try
            {
                myTable = objCommon.GetTableWithParameter(spName, parameter);
                myDDLName.Items.Clear();
                if (myTable != null && myTable.Rows.Count > 0)
                {
                    myDDLName.DataSource = myTable;
                    myDDLName.DataValueField = DataValueField; //myTable.Columns[0].ColumnName;
                    myDDLName.DataTextField = DataTextField; //myTable.Columns[1].ColumnName;
                    myDDLName.DataBind();
                }
                myDDLName.Items.Insert(0, new System.Web.UI.WebControls.ListItem("Select", "0"));
            }
            catch (Exception Ex)
            {
                LogException.WriteToTable(Ex);
                //logger.Error(Ex.ToString());
            }
        }

        public void FillDropDownListWithoutParam(System.Web.UI.WebControls.DropDownList myDDLName, string spName, string DataValueField, string DataTextField)
        {
            DataTable myTable = new DataTable();
            try
            {
                myTable = objCommon.GetTableWithoutParameter(spName);
                myDDLName.Items.Clear();
                if (myTable != null && myTable.Rows.Count > 0)
                {
                    myDDLName.DataSource = myTable;
                    myDDLName.DataValueField = DataValueField; //myTable.Columns[0].ColumnName;
                    myDDLName.DataTextField = DataTextField; //myTable.Columns[1].ColumnName;
                    myDDLName.DataBind();
                }
                myDDLName.Items.Insert(0, new System.Web.UI.WebControls.ListItem("Select", "0"));
            }
            catch (Exception Ex)
            {
                LogException.WriteToTable(Ex);
            }
        }

        public DataTable FillDatatableWithParam(string spName, params string[] parameter)
        {
            DataTable myTable = new DataTable();
            try
            {
                myTable = objCommon.GetTableWithParameter(spName, parameter);
            }
            catch (Exception Ex)
            {
                LogException.WriteToTable(Ex);
            }
            return myTable;
        }

        public DataSet FillDatasetWithParam(string spName, params string[] parameter)
        {
            DataSet ds = new DataSet();
            try
            {
                ds = objCommon.GetTablesWithParameter(spName, parameter);
            }
            catch (Exception Ex)
            {
                LogException.WriteToTable(Ex);
            }
            return ds;
        }



        public DataTable FillDatatableWithoutParam(string spName, params string[] parameter)
        {
            DataTable myTable = new DataTable();
            try
            {
                myTable = objCommon.GetTableWithoutParameter(spName);
            }
            catch (Exception Ex)
            {
                LogException.WriteToTable(Ex);
            }
            return myTable;
        }

        public int IntMethodWithParam(string spName, params string[] parameter)
        {
            int Count = 0;
            try
            {
                Count = objCommon.IntMethodWithParameter(spName, parameter);
            }
            catch (Exception Ex)
            {
                LogException.WriteToTable(Ex);
                throw Ex;
            }
            return Count;
        }

        public int IntMethodWithParamXML(string spName, params string[] parameter)
        {
            int Count = 0;
            try
            {
                Count = objCommon.IntMethodWithParameter(spName, parameter);
            }
            catch (Exception Ex)
            {
                LogException.WriteToTable(Ex);
                throw Ex;
            }
            return Count;
        }

    }
}
