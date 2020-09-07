
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;

namespace FRD_Model
{
    public class CurrentUser
    {
        
        #region User Properties
        public static User User
        {

            get
            {
                return

                    (User)System.Web.HttpContext.Current.Session["User"];
            }
            set
            {
                System.Web.HttpContext.Current.Session["User"] = value;
            }
       
        }

        public static string UserID
        {
            get { return getElement("UserId"); }
        }

        public static string UserName
        {
            get { return getElement("UserName"); }
        }
        public static string BranchId
        {
            get { return getElement("BranchId"); }
        }


        public static string RoleId
        {
            get { return getElement("RoleId"); }
        }

        public static string RoleName
        {
            get { return getElement("RoleName"); }
        }

        public static string Password
        {
            get { return getElement("Password"); }
        }

        public static string PasswordKey
        {
            get { return getElement("PasswordKey"); }
        }


        public static string ReferenceId
        {
            get { return getElement("ReferenceId"); }
        }

        public static string UserCode
        {
            get { return getElement("UserCode"); }
        }

        public static string OrgId
        {
            get { return getElement("OrgId"); }
        }


        public static string LegalId
        {
            get { return getElement("LegalId"); }
        }

        public static string ModuleId
        {
            get { return getElement("ModuleId"); }
        }

        public static string DisplayOrderNo
        {
            get { return getElement("DisplayOrderNo"); }
        }

        public static string Title
        {
            get { return getElement("Title"); }
        }

        public static string Description
        {
            get { return getElement("Description"); }
        }

        public static string MenuId
        {
            get { return getElement("MenuId"); }
        }



        public static string MenuName
        {
            get { return getElement("MenuName"); }
        }

        public static string TitleHead
        {
            get { return getElement("TitleHead"); }
        }

        public static string URL
        {
            get { return getElement("URL"); }
        }


        public static string RoleMenuId
        {
            get { return getElement("RoleMenuId"); }
        }
        public static string SubMenuId
        {
            get { return getElement("SubMenuId"); }
        }
        public static string IsEditable
        {
            get { return getElement("IsEditable"); }
        }
        public static string IsAddable
        {
            get { return getElement("IsAddable"); }
        }
        public static string IsViewable
        {
            get { return getElement("IsViewable"); }
        }


        public static string IsDeletable
        {
            get { return getElement("IsDeletable"); }
        }


        public static string IsDeleted
        {
            get { return getElement("IsDeleted"); }
        }

        public static string IsActive
        {
            get { return getElement("IsActive"); }
        }
        public static string CreatedBy
        {
            get { return getElement("CreatedBy"); }
        }
        public static string UpdatedBy
        {
            get { return getElement("UpdatedBy"); }
        }
        public static string CreatedOn
        {
            get { return getElement("CreatedOn"); }
        }
        public static string UpdatedOn
        {
            get { return getElement("UpdatedOn"); }
        }
        public static string IsLoginFirstTime
        {
            get { return getElement("IsLoginFirstTime"); }
        }
        public static string LastLogin
        {
            get { return getElement("LastLogin"); }
        }
        public static string UserType
        {
            get { return getElement("UserType"); }
        }
        public static string BranchName
        {
            get { return getElement("BranchName"); }
        }


         public static string RestroId
        {
            get { return getElement("RestroId"); }
        }


        #endregion User Properties


        // Private function to get the required element from User Object 
        private static string getElement(string ElementName)
        {
            string RetValue = "";
            User User = (User)System.Web.HttpContext.Current.Session["User"];

            switch (ElementName)
            {
                case "UserID":
                    if (User == null)
                    { return "0"; }
                    else { RetValue = Convert.ToString(User.UserId); }
                    break;
                case "UserName":
                    if (User == null)
                    { return ""; }
                    else { RetValue = Convert.ToString(User.UserName); }
                    break;

                case "RoleId":
                    if (User == null)
                    { return ""; }
                    else { RetValue = Convert.ToString(User.RoleId); }
                    break;
                case "RoleName":
                    if (User == null)
                    { return ""; }
                    else { RetValue = Convert.ToString(User.RoleName); }
                    break;
                case "Password":
                    if (User == null)
                    { return ""; }
                    else { RetValue = Convert.ToString(User.Password); }
                    break;
                case "PasswordKey":
                    if (User == null)
                    { return ""; }
                    else { RetValue = Convert.ToString(User.PasswordKey); }
                    break;
                

                case "IsViewable":
                    if (User == null)
                    { return ""; }
                    else { RetValue = Convert.ToString(User.IsViewable); }
                    break;
                case "IsEditable":
                    if (User == null)
                    { return ""; }
                    else { RetValue = Convert.ToString(User.IsEditable); }
                    break;
               
                case "IsAddable":
                    if (User == null)
                    { return ""; }
                    else { RetValue = Convert.ToString(User.IsAddable); }
                    break;
                case "IsDeleted":
                    if (User == null)
                    { return ""; }
                    else { RetValue = Convert.ToString(User.IsDeleted); }
                    break;
                case "IsActive":
                    if (User == null)
                    { return ""; }
                    else { RetValue = Convert.ToString(User.IsActive); }
                    break;
                case "CreatedBy":
                    if (User == null)
                    { return ""; }
                    else { RetValue = Convert.ToString(User.CreatedBy); }
                    break;
                
                case "UserType":
                    if (User == null)
                    { return ""; }
                    else { RetValue = Convert.ToString(User.UserType); }
                    break;

                case "RestroId":
                    if (User == null)
                    { return ""; }
                    else { RetValue = Convert.ToString(User.RestroId); }
                    break; 
            }
            User = null;
            return RetValue;
        }
   
    }
}
