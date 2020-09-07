using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FRD_DAL;

namespace FRD_Bal
{
   public class MenuCreationBAL
    {
       FRD_DAL.MenuCreationDAL mcd = new FRD_DAL.MenuCreationDAL();
       public DataTable SaveMenu(string menuname, string restroid, string restromenuid,string newname,string UserId)
        {

            //string result = ld.Edit();
            DataTable result = mcd.SaveMenu(menuname, restroid, restromenuid, newname,UserId);
            return result;
        }


       public DataTable BindMenu(string restroid)
        {

            //string result = ld.Edit();
            DataTable result = mcd.BindMenu(restroid);
            return result;
        }
       public DataTable DeleteMenu(string restroid, string restrolevelid)
       {

           //string result = ld.Edit();
           DataTable result = mcd.DeleteMenu(restroid, restrolevelid);
           return result;
       }

       public DataTable BindItem(string restroid, string RestromenuId)
       {

           //string result = ld.Edit();
           DataTable result = mcd.BindItem(restroid, RestromenuId);
           return result;
       }

       public DataTable BindLevel1(string restroid, string restromenuid)
       {

           //string result = ld.Edit();
           DataTable result = mcd.BindLevel1(restroid, restromenuid);
           return result;
       }
       public DataTable BindItemLevel1(string restroid, string restromenuid, string RestroMenuLevel1Id)
       {

           //string result = ld.Edit();
           DataTable result = mcd.BindItemLevel1(restroid, restromenuid, RestroMenuLevel1Id);
           return result;
       }
       public DataTable BindLevel2(string restroid, string restromenuid, string RestroMenuLevel1Id)
       {

           //string result = ld.Edit();
           DataTable result = mcd.BindLevel2(restroid, restromenuid, RestroMenuLevel1Id);
           return result;
       }
       public DataTable BindItemLevel2(string restroid, string restromenuid, string RestroMenuLevel2Id)
       {

           //string result = ld.Edit();
           DataTable result = mcd.BindItemLevel2(restroid, restromenuid, RestroMenuLevel2Id);
           return result;
       }
       public DataTable BindLevel3(string restroid, string restromenuid, string RestroMenuLevel2Id)
       {

           //string result = ld.Edit();
           DataTable result = mcd.BindLevel3(restroid, restromenuid, RestroMenuLevel2Id);
           return result;
       }
       public DataTable BindItemLevel3(string restroid, string restromenuid, string RestroMenuLevel3Id)
       {

           //string result = ld.Edit();
           DataTable result = mcd.BindItemLevel3(restroid, restromenuid, RestroMenuLevel3Id);
           return result;
       }

       public DataTable InsertLevel1(string restroid, string restromenuid, string levelname, string RestroMenulevel1id,string UserId)
       {

           //string result = ld.Edit();
           DataTable result = mcd.InsertLevel1(restroid, restromenuid, levelname,RestroMenulevel1id,UserId);
           return result;
       }

       public DataTable InsertLevel2(string restroid, string restromenuid, string levelname, string menulevel1id, string RestroMenulevel1id, string UserId)
       {

           //string result = ld.Edit();
           DataTable result = mcd.InsertLevel2(restroid, restromenuid, levelname, menulevel1id, RestroMenulevel1id, UserId);
           return result;
       }

       public DataTable InsertLevel3(string restroid, string restromenuid, string levelname, string menulevel2id,string RestroMenulevel2id,string UserId)
       {

           //string result = ld.Edit();
           DataTable result = mcd.InsertLevel3(restroid, restromenuid, levelname, menulevel2id, RestroMenulevel2id,UserId);
           return result;
       }

       public DataTable Insertitemlevel3(string restroid, string restromenuid, string restrolevelid, string dtitem,string level, string UserId)
       {

           //string result = ld.Edit();
           DataTable result = mcd.Insertitemlevel3(restroid, restromenuid, restrolevelid, dtitem,level, UserId);
           return result;
       }

       public DataTable UpdateItemPrice(string RestroMenuItemId, string itemprice, string UserId)
       {

           //string result = ld.Edit();
           DataTable result = mcd.UpdateItemPrice(RestroMenuItemId, itemprice,UserId);
           return result;
       }

       public DataTable defaultMenu(string restroid)
       {

           //string result = ld.Edit();
           DataTable result = mcd.defaultMenu(restroid);
           return result;
       }



       //public DataTable Updatelevel(string restroid, string RestroMenulevelid, string updatedlevelname, string restromenuid, string UserId)
       //{

       //    //string result = ld.Edit();
       //    DataTable result = mcd.Updatelevel(restroid, RestroMenulevelid, updatedlevelname, restromenuid, UserId);
       //    return result;
       //}

       public DataTable DeleteLevel1(string restroid, string restrolevelid, string restromenuid)
       {

           //string result = ld.Edit();
           DataTable result = mcd.DeleteLevel1(restroid, restrolevelid, restromenuid);
           return result;
       }

       public DataTable DeleteLevel2(string restroid, string restrolevelid, string restromenuid)
       {

           //string result = ld.Edit();
           DataTable result = mcd.DeleteLevel2(restroid, restrolevelid, restromenuid);
           return result;
       }

       public DataTable DeleteLevel3(string restroid, string restrolevelid, string restromenuid)
       {

           //string result = ld.Edit();
           DataTable result = mcd.DeleteLevel3(restroid, restrolevelid, restromenuid);
           return result;
       }

       public DataTable DeleteItem(string restrolevelid, string restromenuid, string restroid)
       {

           //string result = ld.Edit();
           DataTable result = mcd.DeleteItem(restrolevelid, restromenuid, restroid);
           return result;
       }


      

    }
}
