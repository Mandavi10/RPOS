using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FRD_Bal
{
    public class HomeBAL
    {
        FRD_DAL.HomeDAL ld = new FRD_DAL.HomeDAL();

        public DataTable BindResturant(string userid)
        {
            DataTable result = ld.BindResturant(userid);
            return result;
        }




        public DataSet AddResturant(string code, string name, string location, string address, string arebicname, string vatno, string restroId, string RestroImage, string UserId)
        {
            DataSet result = ld.AddResturant(code, name, location, address, arebicname, vatno, restroId, RestroImage, UserId);
            return result;
        }



        public DataTable BindResturantDetail(string id)
        {

            //string result = ld.BindResturantDetail();
            DataTable result = ld.BindResturantDetail(id);
            return result;
        }
    }
}
