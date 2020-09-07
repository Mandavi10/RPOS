using FRD_Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FRD_DAL
{
    public class EmployeeDetailsDAL
    {

        CommonManger objManager = new CommonManger();
        DataTable dt;
        string result="0";
        public DataTable RestroEmployeeDetails(string restroId)
       {

            try
            {
               
                    dt = objManager.FillDatatableWithParam("Sp_GetEmployee", "@QueryType", "@restroId", "BindRestroEmployeeDetailsGrid", restroId);
                
               
                

                dt.Columns.Add("Base64Image", typeof(string));

                for (   int i = 0; i < dt.Rows.Count; i++)
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

        public string RestaurantsUpdateList(string EmpId, string EmailId, string EmpName, string mobileNo, string kitchensectionId, string restroId, string RoleId, string UserId)
        {
            dt = objManager.FillDatatableWithParam("Sp_GetEmployee", "@QueryType", "@EmpID", "@emailId", "@name", "@mobileNo", "@KitchenSectionId", "@restroId", "@RoleId ", "@UserId", "UpdateRestroEmployeeDetails", EmpId, EmailId, EmpName, mobileNo, kitchensectionId, restroId, RoleId, UserId);

            
            return result;

        }


    }
}
