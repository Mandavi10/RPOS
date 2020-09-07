using FRD_DAL;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FRD_Bal
{
   public class AddOnBAL
    {

       //AddOnDAL AD = new AddOnDAL();
       FRD_DAL.AddOnDAL AD = new FRD_DAL.AddOnDAL();

       public DataTable createAddOn(string code, string name, string restroid, string addonsPrice, string UserId)
       {
           return AD.createAddOn(code, name, restroid, addonsPrice, UserId);

       }

       public DataTable BindAddOnList(string restroid)
        {
            DataTable result = AD.BindAddOnList(restroid);
            return result;
        }
       public DataTable CheckAddOnCode(string code)
       {
           DataTable result = AD.CheckAddOnCode(code);
           return result;
       }

       public DataTable CheckAddOnName(string name)
       {
           DataTable result = AD.CheckAddOnName(name);
           return result;
       }

       public DataTable CheckDuplicate(string code,string name,string restroid)
       {
           DataTable result = AD.CheckDuplicate(code,name,restroid);
           return result;
       }


       public DataTable itemaddonsbinding(string TableDataX, string restroid, string UserId)
       {
           DataTable result = AD.itemaddonsbinding(TableDataX, restroid, UserId);
           return result;
       }

       public DataTable BindItemaddons(string itemId, string restroid, string UserId)
       {
           DataTable result = AD.BindItemaddons(itemId, restroid, UserId);
           return result;
       }




       public DataTable itemaddonsUseCheck(string TableDataX, string restroId, string UserId)
       {
           DataTable result = AD.itemaddonsUseCheck(TableDataX, restroId, UserId);
           return result;
       }




       public DataTable Deleteaddon(string TableDataX, string restroId, string UserId)
       {
           DataTable result = AD.Deleteaddon(TableDataX, restroId, UserId);
           return result;
       }





       public DataTable BindItemWise(string restroid)
       {
           DataTable result = AD.BindItemWise(restroid);
           return result;
       }


    }
}
