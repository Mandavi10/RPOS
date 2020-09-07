using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace FRD_Bal
{
    public class LoginBAL
    {
        FRD_DAL.LoginDAL LD = new  FRD_DAL.LoginDAL ();

        public string  Validate(string UserPin,string Password)
        {
            string result=  LD.Validate(UserPin, Password);
            return result;
        }
        


    }
}
