using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FRD_Bal
{
    public class DefineResturantBAL
    {
        FRD_DAL.DefineResturantDAL drb = new FRD_DAL.DefineResturantDAL();


        public DataTable BindSittingSection(string id)
        {

            //string result = ld.BindResturant();
            DataTable result = drb.BindSittingSection(id);
            return result;
        }


        public DataTable SaveSittingSection(string code, string name, string restroId, string UserId, string sittingsectionId)
        {

            //string result = ld.BindResturant();
            DataTable result = drb.SaveSittingSection(code, name, restroId, UserId, sittingsectionId);
            return result;
        }


        public DataTable BindTableList(string restroId)
        {

            //string result = ld.BindResturant();
            DataTable result = drb.BindTableList(restroId);
            return result;
        }



        public DataTable CreateTable(string restroId, string NoOftables, string UserId)
        {

            //string result = ld.BindResturant();
            DataTable result = drb.CreateTable(restroId, NoOftables, UserId);
            return result;
        }


        public DataTable BindKitchenSection(string RestroId)
        {

            //string result = ld.BindResturant();
            DataTable result = drb.BindKitchenSection(RestroId);
            return result;
        }

        public DataTable AddKitchenSection(string Kitchencode, string KitchenName, string restroId, string UserId, string kitchensectionId)
        {

            //string result = ld.BindResturant();
            DataTable result = drb.AddKitchenSection(Kitchencode, KitchenName, restroId, UserId, kitchensectionId);
            return result;
        }




        public DataTable ShowRestaurantDetails(string RestroId)
        {
            DataTable result = drb.ShowRestaurantDetails(RestroId);
            return result;
        
        }



        
        public DataTable updateRestroDetails(string code, string name, string location, string address, string arebicname, string vatno, string restroId,  string UserId)
        {

            //string result = ld.BindResturant();
            DataTable result = drb.updateRestroDetails(code, name, location, address, arebicname, vatno, restroId, UserId);
            return result;
        }




        public DataTable DeleteSittingSection(string restroId, string sittingsectionId)
        {
            DataTable result = drb.DeleteSittingSection(restroId, sittingsectionId);
            return result;
        }


        public DataTable DeleteTableSittingSection(string sittingsectionId)
        {
            DataTable result = drb.DeleteTableSittingSection(sittingsectionId);
            return result;
        }

        public DataTable DeleteKitchenCount(string restroId, string kitchensectionId)
        {
            DataTable result = drb.DeleteKitchenCount(restroId, kitchensectionId);
            return result;
        }


        public DataTable DeleteKitchenSection(string kitchensectionId)
        {
            DataTable result = drb.DeleteKitchenSection(kitchensectionId);
            return result;
        }


        public DataTable CheckDeleteTable(string restroId, string tableid)
        {
            DataTable result = drb.CheckDeleteTable(restroId, tableid);
            return result;
        }


        public DataTable DeleteTable(string restroId)
        {
            DataTable result = drb.DeleteTable(restroId);
            return result;
        }

    }
}
