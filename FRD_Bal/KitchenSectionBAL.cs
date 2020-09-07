using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FRD_Bal
{
    public class KitchenSectionBAL
    {
        //FRD_DAL.SequenceSetupDAL ld = new FRD_DAL.SequenceSetupDAL();
        FRD_DAL.KitchenSectionDAL kd = new FRD_DAL.KitchenSectionDAL();





        public DataTable BindKitchensection(string id)
        {



            DataTable result = kd.BindKitchensection(id);
            return result;
        }


        public DataTable ShowItems(string restroid)
        {


            DataTable result = kd.ShowItems(restroid);
            return result;
        }





        public DataTable Bindassgineditem(string restroid, string kitchensectionId)
        {


            DataTable result = kd.Bindassgineditem(restroid, kitchensectionId);
            return result;
        }


        public DataTable AddItem(string id, string kitchensectionid, string TableDataX,string UserId)
        {


            DataTable result = kd.AddItem(id, kitchensectionid, TableDataX, UserId);
            return result;
        }


        public DataTable RemoveItem(string TableDataX, string id,string UserId)
        {


            DataTable result = kd.RemoveItem(TableDataX, id, UserId);
            return result;
        }
    }
}
