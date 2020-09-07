using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FRD_Bal
{
    public class ChangePasswordBAL
    {


        FRD_DAL.ChangePasswordDAL CD = new FRD_DAL.ChangePasswordDAL();



        public string Validate(string oldPassword, string newPassword, string UserId, string PasswordKey)
        {
            string result = CD.Validate(oldPassword, newPassword, UserId, PasswordKey);
            return result;
        }


    }
}
