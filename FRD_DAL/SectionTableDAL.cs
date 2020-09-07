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
   public class SectionTableDAL
    {

       // FRD_POS_Rest_MBEntities FRDEntity = new FRD_POS_Rest_MBEntities();

        CommonManger objManager = new CommonManger();
        DataTable dt;

        public DataTable BindSittingSection(string id)
        {


            try
            {

                dt = objManager.FillDatatableWithParam("Sp_CreateUpDateSection", "@QueryType", "@restroid", "BindSection", id);
            }
            catch
            {
            }

           
            return dt;


        }



        public DataTable BindvacantTable(string restroId)
        {



            try
            {

                dt = objManager.FillDatatableWithParam("Sp_TableMaster", "@QueryType", "@restroId", "BindLeftTable", restroId);
            }
            catch
            {
            }


            return dt;


        }




        public DataTable BindSittingTables(string Restroid, string sittingsectionId)
        {


            try
            {

                dt = objManager.FillDatatableWithParam("Sp_TableMaster", "@QueryType", "@restroId", "@sittingsectionId", "BindMappedTablenew1", Restroid, sittingsectionId);
            }
            catch
            {
            }
            return dt;


        }


        public DataTable MoveTableInDestination(string TableDataX, string restroId, string UserId)
        {


            try
            {

                dt = objManager.FillDatatableWithParam("Sp_TableMaster", "@QueryType", "@XmlMappeddata", "@restroid", "MappingTableSection", TableDataX, restroId);
            }
            catch
            {
            }


            return dt;


        }
        public DataTable MoveTableInSource(string TableDataX, string restroId, string UserId)
        {


            try
            {

                dt = objManager.FillDatatableWithParam("Sp_TableMaster", "@QueryType", "@XmlTableId", "@restroid", "@UserId", "UpdateTableSection", TableDataX, restroId, UserId);
            }
            catch
            {
            }


            return dt;


        }

    }
}
