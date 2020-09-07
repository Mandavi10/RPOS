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
   public class EmployeeMasterDAL
    {

        CommonManger objManager = new CommonManger();
        DataTable dt;
        DataSet ds;
        string result = "0";
        public DataTable validate()
       {
           try
           {
               dt = objManager.FillDatatableWithParam("Sp_GetEmployee", "@QueryType", "BindEmployeeGrid");
           
           }
           catch { }
           return dt;


       }
        public DataTable validateGrid(string restroId)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_GetEmployee", "@QueryType", "@restroId", "BindEmployeeGrid", restroId);
                //byte[] ImagemByte = (byte[])dt.Rows[0]["ImageData"];
                //string base64String = Convert.ToBase64String(ImagemByte, 0, ImagemByte.Length);
                //dt.Columns.Add("Base64Image", typeof(string));
                //string URL = "data:image/jpg;base64,";
                //URL += base64String;
                //dt.Rows[0]["Base64Image"] = URL;

                dt.Columns.Add("Base64Image", typeof(string));

                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    //byte[] ImagemByte = (byte[])dt.Rows.["LogoImageData"];
                    byte[] ImagemByte = (byte[])dt.Rows[i]["ImageData"];
                    string base64String = Convert.ToBase64String(ImagemByte, 0, ImagemByte.Length);

                    string URL = "data:image/jpg;base64,";
                    URL += base64String;
                    dt.Rows[i]["Base64Image"] = URL;
                }



            }
            catch { }
            return dt;

        }

       public DataTable validateID(string empid)
        {

            dt = objManager.FillDatatableWithParam("Sp_GetEmployee", "@QueryType", "@EmpID", "BindEmployeeID", empid);
           // dt = objManager.FillDatatableWithParam("Sp_UserLogin", "@QueryType", "@NewPassword", "@PasswordKey", "@UserID", "ChangePassword", NEWPassword, PasswordKey, UserId);

            return dt;


        }

       public DataSet SaveEmployee(string EmailId, string EmpCode, string EmpName, string mobileNo, string kitchensectionId, string restroId, string UserPin, string Password, string ConfirmPassword, string UserName, string AccessCode, string RoleId)

       {
           //ImageData = "00";
           string PasswordKey = string.Empty;
           string AccessKey = string.Empty;
            Password = DbSecurity.Encrypt(Password, ref PasswordKey);
            AccessCode = DbSecurity.Encrypt(AccessCode, ref AccessKey);
            ds = objManager.FillDatasetWithParam("Sp_GetEmployee", "@QueryType", "@emailId", "@EmpCode", "@EmpName", "@mobileNo", "@KitchenSectionId", "@restroId", "@userpin", "@password", "@passwordkey", "@username", "@accesscode", "@accesskey", "@RoleId ",  "SaveEmployee", EmailId, EmpCode, EmpName, mobileNo, kitchensectionId, restroId, UserPin, Password, PasswordKey, UserName, AccessCode, AccessKey, RoleId);
        
           return ds;
       
       }

       public DataTable restrodropdown()
       {
           try
           {
               dt = objManager.FillDatatableWithParam("Sp_GetEmployee", "@QueryType", "Bindrestrodropdown");

           }
           catch { }
           return dt;

       }
       public DataTable kitchendropdown(string restroId)
       {
           try
           {
               dt = objManager.FillDatatableWithParam("Sp_GetEmployee", "@QueryType", "@restroId", "Bindrkitchendropdown", restroId);

           }
           catch { }
           return dt;

       }

       public string RestaurantUpdateList(string EmpId, string EmailId, string EmpName, string mobileNo, string kitchensectionId, string restroId, string RoleId, string UserId)
       {
           dt = objManager.FillDatatableWithParam("Sp_GetEmployee", "@QueryType", "@EmpID", "@emailId", "@name", "@mobileNo", "@KitchenSectionId", "@restroId", "@RoleId ", "@UserId", "UpdateRestroEmployeeDetails", EmpId, EmailId, EmpName, mobileNo, kitchensectionId, restroId, RoleId, UserId);


           return result;

       }

        public DataTable Roledropdown()
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_GetEmployee", "@QueryType", "Roledropdown");

            }
            catch { }
            return dt;

        }


        public DataTable validateEmpCode(string EmpCode)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_GetEmployee", "@QueryType", "@EmpCode", "checkEmpCode", EmpCode);

            }
            catch { }
            return dt;

        }

      


    }
}
