using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FRD_DAL;
using System.Data;

namespace FRD_Bal
{
   public class EmployeeMasterBAL
    { 
       EmployeeMasterDAL ED = new EmployeeMasterDAL();
       public DataTable validate()
           {
               DataTable result = ED.validate();
               return result;
           }

       public DataTable validateGrid(string restroId)
       {
           DataTable result = ED.validateGrid(restroId);
           return result;
       }
       public DataTable validateID(string empid)
       {
           DataTable result = ED.validateID(empid);
           return result;
       }

       public DataSet SaveEmployee(string EmailId, string EmpCode, string EmpName, string mobileNo, string kitchensectionId, string restroId, string UserPin, string Password, string ConfirmPassword, string UserName, string AccessCode, string RoleId)

       {
           return ED.SaveEmployee(EmailId, EmpCode, EmpName, mobileNo, kitchensectionId, restroId, UserPin, Password, ConfirmPassword, UserName, AccessCode, RoleId );
       }
       public DataTable restrodropdown()
       {
           DataTable result = ED.restrodropdown();
           return result;
       }
       public DataTable kitchendropdown(string restroId)
       {
           DataTable result = ED.kitchendropdown(restroId);
           return result;
       }

       public DataTable RoleDropdown()
       {
           DataTable result = ED.Roledropdown();
           return result;
       }


       public string RestaurantUpdateList(string EmpId, string EmailId, string EmpName, string mobileNo, string kitchensectionId, string restroId, string RoleId, string UserId)
       {
           string result = ED.RestaurantUpdateList(EmpId, EmailId, EmpName, mobileNo, kitchensectionId, restroId, RoleId, UserId);
           return result;
       }

            public DataTable validateEmpCode(string EmpCode)
       {
           DataTable result = ED.validateEmpCode(EmpCode);
           return result;
       }



      

       
    }
}
