using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FRD_DAL;

namespace FRD_Bal
{
    public class ForgotPasswordBAL
    {


        FRD_DAL.ForgotPasswordDAL RD = new FRD_DAL.ForgotPasswordDAL();       

        public string Validate(string Email)
        {
           string result= RD.Validate(Email);
           return result;
        }

    }
}
