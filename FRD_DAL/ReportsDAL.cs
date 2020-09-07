using FRD_Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FRD_DAL
{
    public class ReportsDAL
    {
       
        CommonManger objManager = new CommonManger();
        DataSet ds;
        DataTable dt;

        public DataSet BindDD1(string restroId)
       {
            try
            {
                ds = objManager.FillDatasetWithParam("sp_Report", "@QueryType", "@RestroId", "BindDDl", restroId);
            }
            catch
            {
            }
            return ds;
       }

         public DataTable DailySalesReport(string restroid, string date, string todate, string itemgroupid, string UserId)
        {


            try
            {
                ds = objManager.FillDatasetWithParam("sp_Report", "@QueryType", "@RestroId", "@FromDate", "@ToDate", "@ItemMenuGroupID"
                    , "@UserId", "DailySalesReport", restroid, date,todate,itemgroupid,UserId);
            }
            catch
            {
            }
            return dt;
        }
    }
}
