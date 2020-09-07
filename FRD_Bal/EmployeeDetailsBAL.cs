using FRD_DAL;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FRD_Bal
{
    public class EmployeeDetailsBAL
    {


       EmployeeDetailsDAL EDT = new  EmployeeDetailsDAL();
       public DataTable RestroEmployeeDetails(string restroId)
        {
            DataTable result = EDT.RestroEmployeeDetails(restroId);
            return result;
        }
          public string RestaurantsUpdateList(string EmpId, string EmailId, string EmpName, string mobileNo, string kitchensectionId, string restroId, string RoleId, string UserId)
          {
              string result = EDT.RestaurantsUpdateList(EmpId, EmailId, EmpName, mobileNo, kitchensectionId, restroId, RoleId, UserId);
              return result;
          }

        
    }
}
