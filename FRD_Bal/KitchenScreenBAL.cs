using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FRD_Bal
{
    public class KitchenScreenBAL
    {      
        FRD_DAL.KitchenScreenDAL ks = new FRD_DAL.KitchenScreenDAL();

        public DataTable BindkitchenName(string id)
        {
            DataTable result = ks.BindkitchenName(id);
            return result;
        }

        public DataSet bindKitchenScreen(string id, string KitchenScreenId)
        {
            DataSet result = ks.bindKitchenScreen(id, KitchenScreenId);
            return result;
        }


        public DataTable prepare_click(string RestroId, string orderitemsId)
        {
            DataTable result = ks.prepare_click(RestroId, orderitemsId);
            return result;
        }

        public DataTable Bumped_click(string RestroId, string orderitemsId)
        {
            DataTable result = ks.Bumped_click(RestroId, orderitemsId);
            return result;
        }
        public DataTable BindKitchenScreen_Items(string RestroId, string KitchenScreenId, string OrderID, string KotId)
        {
            DataTable result = ks.BindKitchenScreen_Items(RestroId, KitchenScreenId, OrderID, KotId);
            return result;
        }


	   
    }
}
