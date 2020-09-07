using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FRD_DAL;
using System.Web;
using System.Web.UI;
using System.Data;
using FRD_Model;
using FRD_DAL.CommonUtility;
using System.IO;
using System.Drawing;
using System.Drawing.Drawing2D;

namespace FRD_DAL
{
    public class NewOrderDAL
    {
       // FRD_POS_Rest_MBEntities FRDEntity = new FRD_POS_Rest_MBEntities();

        CommonManger objManager = new CommonManger();
        DataTable dt;
        DataSet ds;
        public DataTable SaveOrderTable(string TableDataX, string restroId, string membercount,string OrderTypeId, string UserId)
        {
            


            try
            {
                dt = objManager.FillDatatableWithParam("Sp_OrderTaking", "@QueryType", "@TableDataX", "@restroId", "@MemberCount","@OrderTypeId", "@UserId",
                                                 "SaveOrderTable", TableDataX, restroId, membercount,OrderTypeId, UserId);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataSet BindSittingTables(string sittingsectionId, string Restroid)
        {


            try
            {

                ds = objManager.FillDatasetWithParam("Sp_DineInTakeAway", "@QueryType", "@sittingsectionId", "@restroid", "BindMappedTablenew1", sittingsectionId, Restroid);
            }
            catch
            {
            }
            return ds;


        }
    }
}
