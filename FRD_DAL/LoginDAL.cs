using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FRD_DAL;
using System.Web;
using System.Web.UI;
using System.Data;
using FRD_Model;
using FRD_DAL.CommonUtility;

namespace FRD_DAL
{
    public class LoginDAL
    {
       // FRD_POS_Rest_MBEntities FRDEntity = new FRD_POS_Rest_MBEntities();
        string Accessdate = "";
        CommonManger objManager = new CommonManger();

        DataTable dt;


        public string Validate(string UserPin, string Password)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_UserLogin", "@QueryType", "getAccessDate");
                if (dt != null && dt.Rows.Count > 0)
                {
                    Accessdate = DbSecurity.Decrypt(dt.Rows[0][0].ToString());
                }

            }
            catch { }

            string Username = "";
            string matchedUserID = "";
            string Accessscode = "";
            //string RoleId = dt.Rows[0][9].ToString();
            Boolean IsFoundAccessCode = false;
            var result = " ";

            if (Password != "")
            {
                DataSet ds = objManager.FillDatasetWithParam
                     ("Sp_UserLogin", "@QueryType", "@AccessDate", "@UserPin", "CheckUserDetails", Accessdate, UserPin);
                dt = ds.Tables[0];

                foreach (DataRow row in dt.Rows)
                {
                    try
                    {

                        string pass = DbSecurity.Decrypt(row["Password"].ToString(), row["PasswordKey"].ToString());
                        if (pass == Password)
                        {
                            matchedUserID = DbSecurity.Decrypt(row["AccessCode"].ToString(), row["AccessKey"].ToString());
                            Username = Convert.ToString(row["UserName"]);
                            IsFoundAccessCode = true;
                            User.SaveUserToSession(ds);
                            break;
                        }
                        else
                        {
                            result = "1";
                            return result;
                        }
                    }
                    catch { }
                }

                if (IsFoundAccessCode == true)
                {
                    int count = objManager.IntMethodWithParam("Sp_UserLogin", "@QueryType", "@UserId", "LogIn", CurrentUser.User.UserId.ToString());
                    try
                    {
                        result = "4";

                    }
                    catch { }

                }
                else
                {
                    if (Convert.ToDateTime(DateTime.Now.ToString("yyyy/MM/dd")) >= Convert.ToDateTime(Accessdate))
                    {
                        result = "2";
                        return result;
                    }
                    else
                    {
                        result = "3";
                        return result;
                    }
                }
            }
            else
            {
                result = "0";
                return result;
            }
            return result;
        }
    }
}
