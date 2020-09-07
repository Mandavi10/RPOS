using FRD_DAL.CommonUtility;
using FRD_Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.IO;
using System.Text;
using System.Configuration;

using System.Net.Mail;
using System.Web.UI;

namespace FRD_DAL
{
   public class ForgotPasswordDAL
    {
       // FRD_POS_Rest_MBEntities FRDEntity = new FRD_POS_Rest_MBEntities();
        string Accessdate = "";
        CommonManger objManager = new CommonManger();
        DataTable dt;
        DataRow row;




       // public void Validate1(string EmailId)
       //{
       //   Boolean IsFoundAccessCode = false;
       //     try
       //     {
       //         if (EmailId != "")
       //         {
       //             dt = objManager.FillDatatableWithParam("Sp_UserLogin", "@QueryType", "@EmailId", "chkEmail", EmailId);
       //             if (dt != null && dt.Rows.Count > 0)
       //             {
       //                 foreach (DataRow row in dt.Rows)
       //                 {
       //                     try
       //                     {
       //                        // string Pass = (DbSecurity.Decrypt(row["AccessCode"].ToString()));
       //                         string Pass = DbSecurity.Decrypt(row["AccessCode"].ToString(), row["AccessKey"].ToString());
       //                         IsFoundAccessCode = true;
       //                         break;
       //                     }
       //                     catch { }
       //                 }
       //             }
       //             if (IsFoundAccessCode == true)
       //             {
       //                 EmailId = "";
                        
       //                 Console.WriteLine("Present");
       //             }
       //             else
       //             {
       //               //  MessageBox.Show("AccessCode is invalid", "Warning", MessageBoxButtons.OK, MessageBoxIcon.Warning);
       //               //  txtAccessCode.Focus();
       //                 Console.WriteLine("AccessCode is invalid");
       //             }
       //         }
       //         else
       //         {
       //           //  MessageBox.Show("Please enter AccessCode", "Warning", MessageBoxButtons.OK, MessageBoxIcon.Warning);
       //            // txtAccessCode.Focus();
       //           Console.WriteLine("Please enter AccessCode");

       //         }


       //     }
       //     catch (Exception ex)
       //     {
       //         //MessageBox.Show(ex.Message);
       //     }
       // }

        public string  Validate(string EmailId)
        {
            if ( EmailId != "")

               
            {
                //string Email = EmailId;


                DataSet ds = objManager.FillDatasetWithParam("Sp_UserLogin", "@QueryType", "@EmailId", "chkEmail", EmailId);
                if (ds != null && ds.Tables.Count > 0)
                {
                    if (ds.Tables[0].Rows.Count > 0 && ds.Tables[0] != null)
                    {
                        using (StringWriter sw = new StringWriter())
                        {
                            using (HtmlTextWriter hw = new HtmlTextWriter(sw))
                            {
                                StringBuilder sb = new StringBuilder();
                                string WebAppUrl = ConfigurationManager.AppSettings["WebAppUrl"].ToString();
                                string SMTPHost = ConfigurationManager.AppSettings["SMTPHost"].ToString();
                                string UserId = ConfigurationManager.AppSettings["UserId"].ToString();
                                string MailPassword = ConfigurationManager.AppSettings["MailPassword"].ToString();
                                string SMTPPort = ConfigurationManager.AppSettings["SMTPPort"].ToString();
                                string SMTPEnableSsl = ConfigurationManager.AppSettings["SMTPEnableSsl"].ToString();

                               // sb.Append("Dear " + ds.Tables[1].Rows[0]["UserName"].ToString() + ",<br> <br>");

                                string User = ds.Tables[1].Rows[0]["UserPin"].ToString();
                                string Pass = DbSecurity.Decrypt(ds.Tables[1].Rows[0]["Password"].ToString(), ds.Tables[1].Rows[0]["PasswordKey"].ToString());
                                string accesscode = DbSecurity.Decrypt(ds.Tables[1].Rows[0]["AccessCode"].ToString(), ds.Tables[1].Rows[0]["AccessKey"].ToString());
                                //    string User = DbSecurity.Encrypt(ds.Tables[1].Rows[0]["UserId"].ToString());
                                 sb.Append("Your UserPin = "+" "+User);
                                 sb.Append("<br>\nYour AccessCode = " + " " + Pass);

                                
                                //sb.Append("<a href='" + WebAppUrl + "ForgetPassword.aspx?Id=" + User + "' target='_blank'>");
                                //sb.Append("<input style='background-color: #3965a9;color: #fff;padding: 3px 10px 3px 10px;' type='button' value='Change Password' /></a> </div>");
                                SmtpClient smtpClient = new SmtpClient();

                                MailMessage mailmsg = new MailMessage();
                                MailAddress mailaddress = new MailAddress(UserId);

                                mailmsg.To.Add(EmailId);

                                mailmsg.From = mailaddress;

                                mailmsg.Subject = "Recover Password";
                                mailmsg.IsBodyHtml = true;
                                mailmsg.Body = sb.ToString();
                                smtpClient.Host = SMTPHost;
                                smtpClient.Port = Convert.ToInt32(SMTPPort);
                                smtpClient.EnableSsl = Convert.ToBoolean(SMTPEnableSsl);
                                smtpClient.UseDefaultCredentials = true;
                                smtpClient.Credentials = new System.Net.NetworkCredential(UserId, MailPassword);
                                smtpClient.Send(mailmsg);


                            }
                        }
                    }
                    EmailId = "";
                    //string result = "0";
                    //return result;

                    //ScriptManager.RegisterStartupScript(this, typeof(Page), "msg", "alert('E-Mail has been sent Successfuly !!')", true);

                }
                else if (ds.Tables[0].Rows.Count > 0 && ds.Tables[0] != null && Convert.ToInt32(ds.Tables[0].Rows[0]["value"]) == 2)
                {
                    if (ds.Tables[1].Rows.Count > 0 && ds.Tables[1] != null)
                    {
                        using (StringWriter sw = new StringWriter())
                        {
                            using (HtmlTextWriter hw = new HtmlTextWriter(sw))
                            {
                                string WebAppUrl = ConfigurationManager.AppSettings["WebAppUrl"];
                                string SMTPHost = ConfigurationManager.AppSettings["SMTPHost"];
                                string UserId = ConfigurationManager.AppSettings["UserId"];
                                string MailPassword = ConfigurationManager.AppSettings["Password"];
                                string SMTPPort = ConfigurationManager.AppSettings["SMTPPort"];
                                string SMTPEnableSsl = ConfigurationManager.AppSettings["SMTPEnableSsl"];
                                StringBuilder sb = new StringBuilder();


                                sb.Append("Dear Sir/Mam ,<br> <br>");
                                sb.Append(" " + ds.Tables[1].Rows[0]["Name"].ToString() + " has requested to set a new password. Please click on the below button to set a new Password. <br> <br>");

                                string User = DbSecurity.Encrypt(ds.Tables[1].Rows[0]["UserId"].ToString());
                                sb.Append("<a href='" + WebAppUrl + "ForgetPassword.aspx?Id=" + User + "' target='_blank'>");
                                sb.Append("<input style='background-color: #3965a9;color: #fff;padding: 3px 10px 3px 10px;' type='button' value='Change Password' /></a> </div>");
                                SmtpClient smtpClient = new SmtpClient();
                                MailMessage mailmsg = new MailMessage();
                                MailAddress mailaddress = new MailAddress(UserId);
                                mailmsg.To.Add(ds.Tables[2].Rows[0]["EmailId"].ToString());
                                mailmsg.From = mailaddress;

                                mailmsg.Subject = "Recover Password";
                                mailmsg.IsBodyHtml = true;
                                mailmsg.Body = sb.ToString();

                                smtpClient.Host = SMTPHost;
                                smtpClient.Port = Convert.ToInt32(SMTPPort);
                                smtpClient.EnableSsl = Convert.ToBoolean(SMTPEnableSsl);
                                smtpClient.UseDefaultCredentials = true;
                                smtpClient.Credentials = new System.Net.NetworkCredential(UserId, MailPassword);
                                smtpClient.Send(mailmsg);


                            }
                        }
                    }
                    //txtEmail.Value = "";
                    //ScriptManager.RegisterStartupScript(this, typeof(Page), "msg", "alert('Email has been sent to Admin !!')", true);
                }
                else if (ds.Tables[0].Rows.Count > 0 && ds.Tables[0] != null && Convert.ToInt32(ds.Tables[0].Rows[0]["value"]) == -1)
                {
                    //txtEmail.Value = "";
                    //ScriptManager.RegisterStartupScript(this, typeof(Page), "msg", "alert('Not exist!!!')", true);
                }

            }
                
            else
            {
                //  ScriptManager.RegisterStartupScript(this, typeof(Page), "msg", "alert('Enter the value!!!')", true);
            }

            string result = "0";
            return result;
        }


       }

    }

