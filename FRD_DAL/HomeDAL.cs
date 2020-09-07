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
using System.Web.UI.WebControls;
using System.Configuration;
using System.Drawing.Imaging;
using System.Web.UI.WebControls;


namespace FRD_DAL
{
    public class HomeDAL
    {
        //FRD_POS_Rest_MBEntities FRDEntity = new FRD_POS_Rest_MBEntities();

        CommonManger objManager = new CommonManger();
        DataTable dt;
        DataSet ds;


        public DataTable BindResturant(string userid)
        {
            try
            {
                dt = objManager.FillDatatableWithParam("Sp_RestroMaster", "@QueryType", "@UserID", "BindRestroandlogo", userid);

                dt.Columns.Add("Base64Image", typeof(string));

                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    byte[] ImagemByte = (byte[])dt.Rows[i]["LogoImageData"];
                    string base64String = Convert.ToBase64String(ImagemByte, 0, ImagemByte.Length);

                    string URL = "data:image/jpg;base64,";
                    URL += base64String;
                    dt.Rows[i]["Base64Image"] = URL;
                }

            }
            catch
            {
            }
            return dt;
        }

        public DataSet AddResturant(string code, string name, string location, string address, string arebicname, string vatno, string restroId, string RestroImage, string UserId)
        {
            try
            {
                ds = objManager.FillDatasetWithParam("Sp_RestroMaster", "@QueryType", "@Code", "@Name", "@Location", "@Address", "@Arebicname", "@Vatno", "@id", "@RestroImage1", "@UserId", "InsertRestroInfo", code, name, location, address, arebicname, vatno, restroId, RestroImage, UserId);
            }
            catch
            {
            }
            return ds;
        }

      


        public DataTable BindResturantDetail(string id)
        {
            try
            {

                dt = objManager.FillDatatableWithParam("Sp_RestroMaster", "@QueryType", "@id", "BindResturantDetail", id);

                byte[] ImagemByte = (byte[])dt.Rows[0]["LogoImageData"];

                string base64String = Convert.ToBase64String(ImagemByte, 0, ImagemByte.Length);
                dt.Columns.Add("Base64Image", typeof(string));
                string URL = "data:image/jpg;base64,";
                URL += base64String;
                dt.Rows[0]["Base64Image"] = URL;
            }
            catch
            {
            }
            return dt;
        }

    }
}








