using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FRD_DAL;

namespace FRD_Bal
{
  public  class LoyaltyBAL
    {
      FRD_DAL.LoyaltyDAL ltyd = new FRD_DAL.LoyaltyDAL();
      public DataTable CreateLoyaltyCard(string cardno, string startfrom, string cardlength, string UserId)
      {

          //string result = ld.Edit();
          DataTable result = ltyd.CreateLoyaltyCard(cardno, startfrom, cardlength,UserId);
          return result;
      }


      public DataSet BindCardTotal(string len,string restroid)
      {

          //string result = ld.Edit();
          DataSet result = ltyd.BindCardTotal(len, restroid);
          return result;
      }

      public DataTable SaveIssueCards(string IssueCards,string restroid,string length,string UserId)
      {

          //string result = ld.Edit();
          DataTable result = ltyd.SaveIssueCards(IssueCards, restroid,length,UserId);
          return result;
      }
      public DataTable SaveRule(string amount, string earnedpoints, string redeemamount,string date,string UserId)
      {

          //string result = ld.Edit();
          DataTable result = ltyd.SaveRule(amount, earnedpoints, redeemamount, date, UserId);
          return result;
      }

      public DataSet BindRestroData(string restroid)
      {

          //string result = ld.Edit();
          DataSet result = ltyd.BindRestroData(restroid);
          return result;
      }

      public DataTable CheckValidation()
      {

          //string result = ld.BindResturant();
          DataTable result = ltyd.CheckValidation();
          return result;
      }
      public DataTable BindLenCardNo()
      {

          //string result = ld.BindResturant();
          DataTable result = ltyd.BindLenCardNo();
          return result;
      }

      public DataTable BindCardLength()
      {

          //string result = ld.BindResturant();
          DataTable result = ltyd.BindCardLength();
          return result;
      }

      public DataTable BindPointsNew()
      {

          //string result = ld.BindResturant();
          DataTable result = ltyd.BindPointsNew();
          return result;
      }

      public DataTable BindRestrogrid(string restroid)
      {

          //string result = ld.BindResturant();
          DataTable result = ltyd.BindRestrogrid(restroid);
          return result;
      }

    }
}
