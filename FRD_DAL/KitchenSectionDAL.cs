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
    public class KitchenSectionDAL
    {
       // FRD_POS_Rest_MBEntities FRDEntity = new FRD_POS_Rest_MBEntities();

        CommonManger objManager = new CommonManger();
        DataTable dt;



        public DataTable BindKitchensection(string id)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_KitchenSectionBindWithItems", "@QueryType", "@restroid", "BindKitchenSection", id);
            }
            catch
            {
            }



            return dt;
        }

        public DataTable ShowItems(string restroid)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_KitchenSectionBindWithItems", "@QueryType", "@restroid", "BindNotasigneditem", restroid);
            }
            catch
            {
            }


            return dt;
        }


        public DataTable Bindassgineditem(string restroid, string kitchensectionId)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_KitchenSectionBindWithItems", "@QueryType", "@restroid", "@KitchenSectionId", "Bindasigneditem", restroid, kitchensectionId);
            }
            catch
            {
            }


            return dt;
        }

        public DataTable AddItem(string id, string kitchensectionid, string TableDataX, string UserId)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_KitchenSectionBindWithItems", "@QueryType", "@restroid", "@KitchenSectionId", "@XmlMappeddata", "@UserId", "InsertIntoKitchenItemNEW", id, kitchensectionid, TableDataX, UserId);
            }
            catch
            {
            }


            return dt;
        }


        public DataTable RemoveItem(string TableDataX, string id, string UserId)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_KitchenSectionBindWithItems", "@QueryType", "@XmlMappeddata", "@restroid", "@UserId", "DeleteDataNEW", TableDataX, id, UserId);
            }
            catch
            {
            }


            return dt;
        }
    }
}
