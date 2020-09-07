using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FRD_Bal
{
   public  class SectionTableBAL
    {
       //FRD_DAL.SectionTableDAL st = new FRD_DAL.SectionTableDAL();
       FRD_DAL.SectionTableDAL st = new FRD_DAL.SectionTableDAL();




       public DataTable BindSittingSection(string id)
       {

           //string result = ld.BindResturant();
           DataTable result = st.BindSittingSection(id);
           return result;
       }



       public DataTable BindvacantTable(string restroId)
       {

           //string result = ld.BindResturant();
           DataTable result = st.BindvacantTable(restroId);
           return result;
       }







       public DataTable BindSittingTables(string Restroid, string sittingsectionId)
       {

           //string result = ld.BindResturant();
           DataTable result = st.BindSittingTables(Restroid, sittingsectionId);
           return result;
       }


       public DataTable MoveTableInDestination(string TableDataX, string restroId, string UserId)
       {

           DataTable result = st.MoveTableInDestination(TableDataX,restroId, UserId);
           return result;
       }

       public DataTable MoveTableInSource(string TableDataX, string restroId, string UserId)
       {

           DataTable result = st.MoveTableInSource(TableDataX, restroId, UserId);
           return result;
       }
    }
}
