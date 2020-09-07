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
using System.IO;
using System.Drawing;
using System.Drawing.Drawing2D;

namespace FRD_DAL
{
   public class MenuCreationDAL
    {
      //  FRD_POS_Rest_MBEntities FRDEntity = new FRD_POS_Rest_MBEntities();

        CommonManger objManager = new CommonManger();
        DataTable dt;
        DataSet ds;
        public DataTable SaveMenu(string menuname, string restroid,string restromenuid,string newname,string UserId) 
        {


            if (restromenuid.Trim() == "")
            {

                try
                {
                    dt = objManager.FillDatatableWithParam("Sp_RestroMenu", "@QueryType", "@Name", "@restroid", "@UserId", "SaveMenu", menuname, restroid, UserId);
                }
                catch
                {
                }
            }
            else
            {
                try
                {
                    dt = objManager.FillDatatableWithParam("Sp_RestroMenu", "@QueryType", "@Name", "@restroid", "@RestroMenuId","@UserId", "UpdateMenu", newname, restroid, restromenuid, UserId);
                }
                catch
                {
                }

            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }



        public DataTable BindMenu(string restroid)
        {


            try
            {
                dt = objManager.FillDatatableWithParam("Sp_RestroMenu", "@QueryType", "@restroid",
                                                 "BindMenu", restroid);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataTable DeleteMenu(string restroid, string restrolevelid)
        {


            try
            {
                dt = objManager.FillDatatableWithParam("Sp_RestroMenu", "@QueryType", "@restroid","@RestromenuId",
                                                 "DeleteMenu", restroid, restrolevelid);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataTable BindItem(string restroid,string RestromenuId)
        {


            try
            {
                dt = objManager.FillDatatableWithParam("Sp_RestroMenu", "@QueryType", "@restroId", "@RestroMenuId", "BindItem", restroid, RestromenuId);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataTable BindLevel1(string restroid, string restromenuid)
        {


            try
            {
                dt = objManager.FillDatatableWithParam("Sp_RestroMenu", "@QueryType", "@restroId","@RestroMenuId",
                                                 "bindLevel1", restroid, restromenuid);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataTable BindItemLevel1(string restroid, string restromenuid, string RestroMenuLevel1Id)
        {


            try
            {
                dt = objManager.FillDatatableWithParam("Sp_RestroMenu", "@QueryType", "@restroId","@RestroMenuId","@RestroMenuLevel1Id",
                                                 "bindItemLevel1",restroid,restromenuid,RestroMenuLevel1Id);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataTable BindLevel2(string restroid, string restromenuid, string RestroMenuLevel1Id)
        {


            try
            {
                dt = objManager.FillDatatableWithParam("Sp_RestroMenu", "@QueryType", "@restroId", "@RestroMenuId", "@RestroMenuLevel1Id",
                                                 "bindlevel2", restroid, restromenuid, RestroMenuLevel1Id);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataTable BindItemLevel2(string restroid, string restromenuid, string RestroMenuLevel2Id)
        {


            try
            {
                dt = objManager.FillDatatableWithParam("Sp_RestroMenu", "@QueryType", "@restroId", "@RestroMenuId", "@RestroMenuLevel2Id",
                                                 "bindItemlevel2", restroid, restromenuid, RestroMenuLevel2Id);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataTable BindLevel3(string restroid, string restromenuid, string RestroMenuLevel2Id)
        {


            try
            {
                dt = objManager.FillDatatableWithParam("Sp_RestroMenu", "@QueryType", "@restroId", "@RestroMenuId", "@RestroMenuLevel2Id",
                                                 "bindlevel3", restroid, restromenuid, RestroMenuLevel2Id);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataTable BindItemLevel3(string restroid, string restromenuid, string RestroMenuLevel3Id)
        {


            try
            {
                dt = objManager.FillDatatableWithParam("Sp_RestroMenu", "@QueryType", "@restroId", "@RestroMenuId", "@RestroMenuLevel3Id",
                                                 "BindItemLevel3", restroid, restromenuid, RestroMenuLevel3Id);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataTable InsertLevel1(string restroid, string restromenuid, string levelname,  string RestroMenulevel1id,string UserId)
        {
            if (RestroMenulevel1id.Trim() == "")
            {

                try
                {
                    dt = objManager.FillDatatableWithParam("Sp_RestroMenu", "@QueryType", "@restroId", "@RestroMenuId", "@levelname", "@UserId",
                                                     "InsertLevel1", restroid, restromenuid, levelname, UserId);
                }
                catch
                {
                }
            }
            else {
                try
                {
                    dt = objManager.FillDatatableWithParam("Sp_RestroMenu", "@QueryType", "@levelname", "@RestroMenulevel1id", "@UserId",
                                                     "UpdateLevel1", levelname, RestroMenulevel1id, UserId);
                }
                catch
                {
                }
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataTable InsertLevel2(string restroid, string restromenuid, string levelname,string menulevel1id, string RestroMenulevel1id,string UserId)
        {
            if (RestroMenulevel1id.Trim() == "")
            {

                try
                {
                    dt = objManager.FillDatatableWithParam("Sp_RestroMenu", "@QueryType", "@restroId", "@RestroMenuId", "@levelname", "@RestroMenuLevel1Id", "@UserId",
                                                     "InsertLevel2", restroid, restromenuid, levelname, menulevel1id, UserId);
                }
                catch
                {
                }
            }
            else {
                dt = objManager.FillDatatableWithParam("Sp_RestroMenu", "@QueryType", "@levelname", "@RestroMenulevel2id", "@UserId",
                                                     "UpdateLevel2", levelname,RestroMenulevel1id,UserId);
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataTable InsertLevel3(string restroid, string restromenuid, string levelname, string menulevel2id, string RestroMenulevel2id, string UserId)
        {
            if (RestroMenulevel2id.Trim() == "")
            {

                try
                {
                    dt = objManager.FillDatatableWithParam("Sp_RestroMenu", "@QueryType", "@restroId", "@RestroMenuId", "@levelname", "@RestroMenuLevel2Id", "@UserId", 
                                                     "InsertLevel3", restroid, restromenuid, levelname, menulevel2id, UserId);
                }
                catch
                {
                }
            }
            else {
                try
                {
                    dt = objManager.FillDatatableWithParam("Sp_RestroMenu", "@QueryType", "@levelname", "@RestroMenuLevel3Id", "@UserId",
                                                         "UpdateLevel3",levelname, RestroMenulevel2id,UserId);
                }
                catch { }
               
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataTable Insertitemlevel3(string restroid, string restromenuid, string restrolevelid, string dtitem,string level, string UserId)
         {


            try
            {
                dt = objManager.FillDatatableWithParam("Sp_RestroMenu", "@QueryType", "@restroId", "@RestroMenuId", "@RestroMenuLevel3Id", "@xmlitem","@level", "@UserId",
                                                 "InsertitemLevel3", restroid, restromenuid, restrolevelid, dtitem,level, UserId);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }


        public DataTable UpdateItemPrice(string RestroMenuItemId, string itemprice, string UserId)
        {


            try
            {
                dt = objManager.FillDatatableWithParam("Sp_RestroMenu", "@QueryType", "@RestroMenuItemId", "@itemprice","@UserId",
                                                 "UpdateItemPrice", RestroMenuItemId, itemprice,UserId);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataTable defaultMenu(string restroid)
        {


            try
            {
                dt = objManager.FillDatatableWithParam("Sp_RestroMenu", "@QueryType", "@restroid",
                                                 "DefaultMenu", restroid);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        //public DataTable Updatelevel(string restroid, string RestroMenulevelid, string updatedlevelname, string restromenuid, string UserId)
        //{


        //    try
        //    {
        //        dt = objManager.FillDatatableWithParam("Sp_RestroMenu", "@QueryType", "@restroid", "@RestroMenulevelid", "@levelname", "@RestroMenuId", "@UserId",
        //                                         "Updatelevel", restroid, RestroMenulevelid, updatedlevelname, restromenuid, UserId);
        //    }
        //    catch
        //    {
        //    }

        //    // return ClsJson.JsonMethods.ToJson(dt);
        //    return dt;
        //}
        public DataTable DeleteLevel1(string restroid, string restrolevelid, string restromenuid)
        {


            try
            {
                dt = objManager.FillDatatableWithParam("Sp_RestroMenu", "@QueryType", "@restroid", "@RestroMenuLevel1Id", "@RestroMenuId",
                                                 "DeleteLevel1", restroid, restrolevelid, restromenuid);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataTable DeleteLevel2(string restroid, string restrolevelid, string restromenuid)
        {


            try
            {
                dt = objManager.FillDatatableWithParam("Sp_RestroMenu", "@QueryType", "@restroid", "@RestroMenuLevel2Id", "@RestroMenuId",
                                                 "DeleteLevel2", restroid, restrolevelid, restromenuid);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataTable DeleteLevel3(string restroid, string restrolevelid, string restromenuid)
        {


            try
            {
                dt = objManager.FillDatatableWithParam("Sp_RestroMenu", "@QueryType", "@restroid", "@RestroMenuLevel3Id", "@RestroMenuId",
                                                 "DeleteLevel3", restroid, restrolevelid,restromenuid);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }

        public DataTable DeleteItem(string restrolevelid, string restromenuid, string restroid)
        {


            try
            {
                dt = objManager.FillDatatableWithParam("Sp_RestroMenu", "@QueryType", "@RestroMenuItemId", "@RestroMenuId", "@restroid",
                                                 "DeleteItem", restrolevelid, restromenuid, restroid);
            }
            catch
            {
            }

            // return ClsJson.JsonMethods.ToJson(dt);
            return dt;
        }
       

        
    }
}
