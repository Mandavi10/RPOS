using FRD_DAL.CommonUtility;
using FRD_Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FRD_DAL
{
   public class ChangePasswordDAL
    {

       CommonManger objManager = new CommonManger();
       DataTable dt;
       string result = "";
       public string Validate(string oldPassword, string newPassword, string UserId, string PasswordKey)
       {
           try
           {


            

               // password = DbSecurity.Encrypt(oldPassword, ref passwordKey);
               //  UserId = CurrentUser.User.UserId.ToString();
               //  int count = objManager.IntMethodWithParam("Sp_UserCreation", "@QueryType", "@User", "@Password","@PasswordKey", "UpdatePassword", UserId, password, passwordKey);
               dt = objManager.FillDatatableWithParam("Sp_UserLogin", "@QueryType", "@UserID", "CheckOldPassword", UserId);
               string Pass = (DbSecurity.Decrypt(dt.Rows[0]["Password"].ToString(), dt.Rows[0]["PasswordKey"].ToString()));
               if (Pass.Trim() == oldPassword.Trim())
               {
                   string NEWPassword = DbSecurity.Encrypt(newPassword, ref PasswordKey);
                   dt = objManager.FillDatatableWithParam("Sp_UserLogin", "@QueryType", "@NewPassword", "@PasswordKey", "@UserID", "ChangePassword", NEWPassword, PasswordKey, UserId);

                   result= "1";
               
               }
               else
               {
                   result = "0";
                  
               }

               return result;
           }
               
           catch (Exception ex)
           {
               return "NotSccess";
           }
       }
    }
}
