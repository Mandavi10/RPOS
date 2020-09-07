using FRD_Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FRD_DAL
{
   public class KitchenScreenDAL
    {

       // FRD_POS_Rest_MBEntities FRDEntity = new FRD_POS_Rest_MBEntities();

        CommonManger objManager = new CommonManger();
        DataTable dt;


        public DataTable BindkitchenName(string id)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_KitchenSection", "@QueryType", "@restroid", "BindKitchenSection", id);
                if (dt.Rows.Count > 0)
                {

                }

            }
            catch
            {
            }           
            return dt;
        }

        public DataSet bindKitchenScreen(string id, string KitchenScreenId)
        {
            DataSet ds = new DataSet();

            try
            {
                ds = objManager.FillDatasetWithParam("Sp_Kitchen_Screen", "@QueryType", "@kitchensectionId", "@restroId", "BindKitchenScreen", KitchenScreenId, id);
            }
            catch
            {
            }
            return ds ;
        }
       
        public DataTable prepare_click(string RestroId, string orderitemsId)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_Kitchen_Screen", "@QueryType", "@OrderItemId", "@restroid", "UpdateStatusCSSingleItem", orderitemsId, RestroId);
            }
            catch { }
            return dt;
        }


        public DataTable Bumped_click(string RestroId, string orderitemsId)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_Kitchen_Screen", "@QueryType", "@OrderItemId", "@restroid", "UpdateStatusSingleItem", orderitemsId, RestroId);

            }
            catch { }
            return dt;
        }

        public DataTable BindKitchenScreen_Items(string RestroId, string KitchenScreenId, string OrderID, string KotId)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_Kitchen_Screen", "@QueryType", "@RestroId", "@kitchensectionId", "@OrderID", "@KotId",
                    "BindKitchenScreen_Items", RestroId, KitchenScreenId,OrderID, KotId);
            }
            catch { }
            return dt;
        }
    }
}
