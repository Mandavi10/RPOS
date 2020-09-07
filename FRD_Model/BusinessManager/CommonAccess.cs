using BussinessLibrary.Common;
using System;
using System.Data;
using System.Data.SqlClient;


namespace FRD_Model
{
    public class CommonAccess : SqlHelper
    {
        public CommonAccess()
        {
            //
            // TODO: Add constructor logic here
            //
        }


        public DataTable GetTableWithParameter(string spName, params string[] parameter)
        {
            DataSet ds = null;
            int Length = parameter.Length / 2;
            SqlParameter[] tableParameter = new SqlParameter[Length + 1];
            //SqlHelper sqlHelper = new SqlHelper();
            try
            {
                for (int counter = 0; counter < Length; counter++)
                {
                    tableParameter[counter] = new SqlParameter(parameter[counter], parameter[counter + Length]);
                }
                ds = SqlHelper.ExecuteDataset(conn, CommandType.StoredProcedure, spName, tableParameter);
            }
            catch (Exception ex)
            {
                LogException.WriteToTable(ex);
            }
            if (ds.Tables.Count > 0)
                return ds.Tables[0];
            else
                return null;
        }

        public DataTable GetTableWithoutParameter(string spName)
        {
            DataSet ds = null;
            try
            {
                ds = SqlHelper.ExecuteDataset(conn, CommandType.StoredProcedure, spName);
            }
            catch (Exception ex)
            {
                LogException.WriteToTable(ex);
            }
            if (ds.Tables.Count > 0)
                return ds.Tables[0];
            else
                return null;
        }


        public DataSet GetTablesWithParameter(string spName, params string[] parameter)
        {
            DataSet ds = null;
            int Length = parameter.Length / 2;
            SqlParameter[] tableParameter = new SqlParameter[Length + 1];
            try
            {
                for (int counter = 0; counter < Length; counter++)
                {
                    tableParameter[counter] = new SqlParameter(parameter[counter], parameter[counter + Length]);
                }
                ds = SqlHelper.ExecuteDataset(conn, CommandType.StoredProcedure, spName, tableParameter);
            }
            catch (Exception ex)
            {
                LogException.WriteToTable(ex);
            }
            if (ds.Tables.Count > 0)
                return ds;
            else
                return null;
        }

        public int IntMethodWithParameter(string spName, params string[] parameter)
        {
            int Count = 0;
            int Length = parameter.Length / 2;
            SqlParameter[] tableParameter = new SqlParameter[Length + 1];
            try
            {
                for (int counter = 0; counter < Length; counter++)
                {
                    tableParameter[counter] = new SqlParameter(parameter[counter], parameter[counter + Length]);
                }
                Count = SqlHelper.ExecuteNonQuery(conn, CommandType.StoredProcedure, spName, tableParameter);
            }
            catch (Exception ex)
            {
                LogException.WriteToTable(ex);
                throw ex;
            }
            return Count;
        }
    }
}
