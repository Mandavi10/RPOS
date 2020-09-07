using FRD_DAL;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FRD_Bal
{
   public class ReportsBAL
    {
       ReportsDAL rd = new ReportsDAL();
       public DataSet BindDD1(string restroId)
       {
           DataSet result = rd.BindDD1(restroId);
           return result;
       }

       public DataTable DailySalesReport(string restroid, string date, string todate, string itemgroupid, string UserId)
       {
           DataTable result = rd.DailySalesReport(restroid, date, todate, itemgroupid, UserId);

           return result;
       }

       
    }
}
