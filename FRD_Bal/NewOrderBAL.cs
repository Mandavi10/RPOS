using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FRD_DAL;

namespace FRD_Bal
{
   public class NewOrderBAL
    {
        FRD_DAL.NewOrderDAL ltyd = new FRD_DAL.NewOrderDAL();

        public DataTable SaveOrderTable(string TableDataX, string restroId, string membercount,string OrderTypeId, string UserId)
        {

            //string result = ld.Edit();
            DataTable result = ltyd.SaveOrderTable(TableDataX, restroId, membercount,OrderTypeId, UserId);
            return result;
        }

        public DataSet BindSittingTables(string sittingsectionId, string Restroid)
        {

            //string result = ld.Edit();
            DataSet result = ltyd.BindSittingTables(sittingsectionId, Restroid);
            return result;
        }

    }
}
