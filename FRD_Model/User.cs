using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FRD_Model
{
    [Serializable]
    public class User
    {
        #region User Properties

        public int UserId { get; set; }
        public string UserType { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string PasswordKey { get; set; }
        public int RoleId { get; set; }
        public string RoleName { get; set; }
        public bool IsEditable { get; set; }
        public bool IsAddable { get; set; }
        public bool IsViewable { get; set; }
        public bool IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public int CreatedBy { get; set; }

        public int RestroId { get; set; }

        #endregion User Properties

        public static DataSet GetUser(string UserName)
        {
            DataSet dsUser = new DataSet();
            SqlHelper sqlHelper = new SqlHelper();
            SqlParameter[] param = new SqlParameter[2];
            param[0] = new SqlParameter("@UserName", UserName);
            param[1] = new SqlParameter("@QueryType", "GetUser");
            SqlHelper.FillDataset(sqlHelper.conn, CommandType.StoredProcedure, "sp_UserLogin", dsUser, null, param);
            return dsUser;
        }

        // Used to Save the given User to Current Session
        public static bool SaveUserToSession(DataSet dsUser)

        {
            if (dsUser == null)
                return false;
            if (dsUser.Tables[0].Rows.Count == 0)
                return false;

            User objNewUser = new User();
            objNewUser.UserId = Convert.ToInt32(dsUser.Tables[0].Rows[0]["UserId"]);
            objNewUser.UserName = Convert.ToString(dsUser.Tables[0].Rows[0]["UserName"]);
            objNewUser.Password = Convert.ToString(dsUser.Tables[0].Rows[0]["Password"]);
            objNewUser.PasswordKey = Convert.ToString(dsUser.Tables[0].Rows[0]["PasswordKey"]);
            objNewUser.RoleId = int.Parse(dsUser.Tables[0].Rows[0]["RoleId"].ToString()); 
            FRD_Model.CurrentUser.User = objNewUser;
            return true;
        }
    }
}
