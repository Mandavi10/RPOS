using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using System.Web.Mvc;
using System.Net.Http;
using System.Web.Http;
using FRD_Bal;
using System.Web.Services;
using FRD_Model;
using System.Data;
using Newtonsoft.Json;
using FRD_DAL.CommonUtility;
using System.Drawing.Printing;
using System.IO;
using System.Drawing;
namespace FRDWeb.Controllers
{
    public class PaymentController : Controller
    {
        // GET: Payment

        CommonManger objManager = new CommonManger();
        FRD_Bal.PaymentBAL PB = new FRD_Bal.PaymentBAL();
        string temporderid, tempbillno, temprestroid;
        
        public ActionResult Index()
        {
            return View();

        }



        [System.Web.Mvc.HttpPost]
        public string BindOrderDetails(string restroid, string OrderId)
        {
            string UserId = CurrentUser.User.UserId.ToString();
            string orderId = DbSecurity.Decrypt(OrderId);


            DataSet result = PB.BindOrderDetails(restroid, orderId, UserId);

            return JsonConvert.SerializeObject(result, Formatting.Indented);




        }

        [System.Web.Mvc.HttpPost]
        public string BtnConfirm_Click(string restroid)
        {
            string UserId = CurrentUser.User.UserId.ToString();


            DataSet result = PB.BtnConfirm_Click(restroid);

            return JsonConvert.SerializeObject(result, Formatting.Indented);




        }

        [System.Web.Mvc.HttpPost]
        public ActionResult DecryptOrderID(string OrderId)
        {
           
          

            string orderId = DbSecurity.Decrypt(OrderId);
            
            return Json(orderId, JsonRequestBehavior.AllowGet);


        }

        [System.Web.Mvc.HttpPost]
        public JsonResult btnsaveCash(string RestroId, string TableDataX, string Orderid)
        {
            string UserId = CurrentUser.User.UserId.ToString();
            DataTable result = PB.btnsaveCash(RestroId, TableDataX, UserId, Orderid);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }


        

        [System.Web.Mvc.HttpPost]
        public JsonResult btnsaveCashSplit(string RestroId, string TableDataX, string Orderid)
        {
            string UserId = CurrentUser.User.UserId.ToString();
            DataTable result = PB.btnsaveCashSplit(RestroId, TableDataX, UserId, Orderid);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }




        [System.Web.Mvc.HttpPost]
        public JsonResult btnsaveCradpayment(string RestroId, string TableDataX, string Orderid, string tempcardid)
        {
            string UserId = CurrentUser.User.UserId.ToString();
            DataTable result = PB.btnsaveCradpayment(RestroId, TableDataX, UserId, Orderid, tempcardid);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]
        public JsonResult Stcpayment(string RestroId, string TableDataX, string Orderid)
        {
            string UserId = CurrentUser.User.UserId.ToString();
            DataTable result = PB.Stcpayment(RestroId, TableDataX, UserId, Orderid);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]
        public JsonResult LoyalityCardChange(string restroid, string cardNo)
        {
            string UserId = CurrentUser.User.UserId.ToString();
            DataTable result = PB.LoyalityCardChange(restroid,cardNo);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]
        public JsonResult SaveLoyalityAmount(string restroid, string amount, string cardno)
        {
            string UserId = CurrentUser.User.UserId.ToString();
            DataTable result = PB.SaveLoyalityAmount(restroid, amount, cardno);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]
        public JsonResult SaveOtherPayment(string restroid, string TableDataX, string Orderid, string OtherpaymentType)
        {
            string UserId = CurrentUser.User.UserId.ToString();
            DataTable result = PB.SaveOtherPayment(restroid, TableDataX, Orderid, UserId, OtherpaymentType);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }


        [System.Web.Mvc.HttpPost]
        public JsonResult ClearTempTable(string restroid, string Orderid)
        {
            string UserId = CurrentUser.User.UserId.ToString();
            DataTable result = PB.ClearTempTable(restroid, Orderid, UserId);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }


        [System.Web.Mvc.HttpPost]
        public JsonResult ConFirmBill(string splitType,string splitCount,string restroid, string SplitAmount, string Orderid, string ReasonId, string discountPercent, string discountAmount, string TotalTax)
        {

            string UserId = CurrentUser.User.UserId.ToString();
            DataTable result = PB.ConFirmBill(splitType,splitCount, restroid, SplitAmount, Orderid, ReasonId, discountPercent, discountAmount, UserId, TotalTax);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }

        




        

            [System.Web.Mvc.HttpPost]
        public JsonResult SplitConFirmBill(string splitType,string duebalance, string restroid, string SplitAmount, string Orderid, string ReasonId, string discountPercent, string discountAmount, string TotalTax)
        {

            string UserId = CurrentUser.User.UserId.ToString();
            DataTable result = PB.SplitConFirmBill(splitType,duebalance, restroid, SplitAmount, Orderid, ReasonId, discountPercent, discountAmount, UserId, TotalTax);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }





        [System.Web.Mvc.HttpPost]
        public JsonResult CheckAdmin(string restroId, string accesscode)
        {

            string UserId = CurrentUser.User.UserId.ToString();
            string Accesscode = accesscode;
           // Accesscode = DbSecurity.Encrypt(Accesscode);
            DataTable result = PB.CheckAdmin(restroId, Accesscode, UserId);
           
           
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }


        [System.Web.Mvc.HttpPost]
        public JsonResult bindDiscountReason(string restroId)
        {

            string UserId = CurrentUser.User.UserId.ToString();
            DataTable result = PB.bindDiscountReason(restroId, UserId);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }

        

        [System.Web.Mvc.HttpPost]
        public JsonResult BindBookletCoupon(string restroId)
        {

           // string UserId = CurrentUser.User.UserId.ToString();
            DataTable result = PB.BindBookletCoupon(restroId);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }


        

                  [System.Web.Mvc.HttpPost]
        public JsonResult FilterCouponNo(string restroId,string bookletNo)
        {

           // string UserId = CurrentUser.User.UserId.ToString();
            DataTable result = PB.FilterCouponNo(restroId, bookletNo);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }





        [System.Web.Mvc.HttpPost]
        public string BindDropDown(string restroId)
        {
            string UserId = CurrentUser.User.UserId.ToString();


            DataSet result = PB.BindDropDown(restroId, UserId);

            return JsonConvert.SerializeObject(result, Formatting.Indented);
        }


        [System.Web.Mvc.HttpPost]
        public JsonResult ManagerDiscount(string restroid, string TableDataX, string Orderid, string discountpersentage, string Amount, string discountreason)
        {
            string UserId = CurrentUser.User.UserId.ToString();
            DataTable result = PB.ManagerDiscount(restroid, TableDataX, Orderid, discountpersentage, Amount, discountreason, UserId);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }


        [System.Web.Mvc.HttpPost]
        public JsonResult AmmendedItem(string restroid, string Orderid, string TableDataX)
        {
            string UserId = CurrentUser.User.UserId.ToString();
            DataTable result = PB.AmmendedItem(restroid, Orderid, TableDataX, UserId);
            List<Dictionary<string, object>> EmpMasters = ClsJson.JsonMethods.RowsToDictionary(result);
            return Json(EmpMasters, JsonRequestBehavior.AllowGet);
        }

        [System.Web.Mvc.HttpPost]
        public string Shownumber(string CouponNo, string BookletNo)   // string restroid,
        {

            DataTable result = PB.Shownumber(CouponNo, BookletNo);    // restroid, 

            /// List<Dictionary<string, object>> lstLoyalty = ClsJson.JsonMethods.RowsToDictionary(result);

            return JsonConvert.SerializeObject(result, Formatting.Indented);
        }



         private Font printFont;
     private StreamReader streamToPrint;
     static string filePath;

     public void Paymentprint(string restroid, string OrderId, string billno) 
     {
         // Printing(); orderid, billno, restroid;
         string UserId = CurrentUser.User.UserId.ToString();
            string orderId = DbSecurity.Decrypt(OrderId);
         PrintDocument pd = new PrintDocument();
         temporderid=orderId;
         tempbillno=billno;
         temprestroid = restroid;


         pd.PrintPage += new PrintPageEventHandler(pd_PrintPage);
         // Print the document.
         pd.Print();
        
     }



     // The PrintPage event is raised for each page to be printed.
     private void pd_PrintPage(object sender, PrintPageEventArgs e) 
     {
         //float linesPerPage = 0;
         //float yPos =  0;
         //int count = 0;
         //float leftMargin = ev.MarginBounds.Left;
         //float topMargin = ev.MarginBounds.Top;
         //String line=null;
             
         //// Calculate the number of lines per page.
         //linesPerPage = ev.MarginBounds.Height  / 
         //   printFont.GetHeight(ev.Graphics) ;
 
         //// Iterate over the file, printing each line.
         //while (count < linesPerPage && 
         //   ((line=streamToPrint.ReadLine()) != null)) 
         //{
         //   yPos = topMargin + (count * printFont.GetHeight(ev.Graphics));
         //   ev.Graphics.DrawString (line, printFont, Brushes.Black, 
         //      leftMargin, yPos, new StringFormat());
         //   count++;
         //}
 
         //// If more lines exist, print another page.
         //if (line != null) 
         //   ev.HasMorePages = true;
         //else 
         //   ev.HasMorePages = false;

//         List<string> itemList = new List<string>()
//{
//    "201", //fill from somewhere in your code
//    "202"
//};

//         Graphics graphics = ev.Graphics;

//         Font regular = new Font(FontFamily.GenericSansSerif, 10.0f, FontStyle.Regular);
//         Font bold = new Font(FontFamily.GenericSansSerif, 10.0f, FontStyle.Bold);

//         //print header
//         graphics.DrawString("FERREIRA MATERIALS PARA CONSTRUCAO LTDA", bold, Brushes.Black, 20, 10);
//         graphics.DrawString("EST ENGENHEIRO MARCILAC, 116, SAO PAOLO - SP", regular, Brushes.Black, 30, 30);
//         graphics.DrawString("Telefone: (11)5921-3826", regular, Brushes.Black, 110, 50);
//         graphics.DrawLine(Pens.Black, 80, 70, 320, 70);
//         graphics.DrawString("CUPOM NAO FISCAL", bold, Brushes.Black, 110, 80);
//         graphics.DrawLine(Pens.Black, 80, 100, 320, 100);

//         //print items
//         graphics.DrawString("COD | DESCRICAO                      | QTY | X | Vir Unit | Vir Total |", bold, Brushes.Black, 10, 120);
//         graphics.DrawLine(Pens.Black, 10, 140, 430, 140);

//         for (int i = 0; i < itemList.Count; i++)
//         {
//             graphics.DrawString(itemList[i].ToString(), regular, Brushes.Black, 20, 150 + i * 20);
//         }

//         //print footer
//         //...

//         regular.Dispose();
//         bold.Dispose();

//         // Check to see if more pages are to be printed.
//         ev.HasMorePages = (itemList.Count > 20);



         DataSet dset = objManager.FillDatasetWithParam("sp_Report", "@QueryType", "@RestroId", "@OrderID", "@billNo", "tempBillPrint"
             , temprestroid, temporderid, tempbillno);





         Graphics graphics = e.Graphics;
                Font font = new Font("Courier New", 10);
                float fontHeight = font.GetHeight();
                int startX = 0;
                int startY = 0;
                int Offset = 0;
                decimal total = 0;
                decimal vat = 0;
                string Temp = "";
                float x = 0.0F;
                float y = 0.0F;
                float width = 200.0F;
                float height = 50.0F;
                Font drawFont = new Font("Arial", 9);
                Font HeadFont = new Font("Arial", 11);
                SolidBrush drawBrush = new SolidBrush(Color.Black);
                Font drawFontitem = new Font("Arial", 8);

                Pen blackPen = new Pen(Color.White, 0);
                StringFormat drawFormat = new StringFormat();
                drawFormat.Alignment = StringAlignment.Near;
                StringFormat drawFormatCenter = new StringFormat();
                drawFormat.Alignment = StringAlignment.Center;
                StringFormat drawFormatleft = new StringFormat();
                drawFormatleft.Alignment = StringAlignment.Far;

                RectangleF drawRectheader = new RectangleF(x, y, 250, 15);
                e.Graphics.DrawRectangle(blackPen, x, y, 250, 15);
                e.Graphics.DrawString("                     Invoice Detail", HeadFont, drawBrush, drawRectheader, drawFormatCenter);

                RectangleF drawReceiptline = new RectangleF(x, y + 10, 270, height);
                e.Graphics.DrawRectangle(blackPen, x, y, 270, height);
                e.Graphics.DrawString("-----------------------------------------------------------------", drawFontitem, drawBrush, drawReceiptline, drawFormatleft);
                // Company Name
                RectangleF drawReceiptCOmp = new RectangleF(x - 80, y + 25, 270, height);
                e.Graphics.DrawRectangle(blackPen, x - 80, y + 25, 270, height);
                e.Graphics.DrawString("شركة تنمية الموارد الغذائية", drawFontitem, drawBrush, drawReceiptCOmp, drawFormatleft);
                // Vat
                RectangleF drawRectvat = new RectangleF(x, y + 40, 260, 20);
                e.Graphics.DrawRectangle(blackPen, x, y + 40, 260, 20);
                e.Graphics.DrawString("" + Convert.ToString(dset.Tables[0].Rows[0][2]) + "    " + Convert.ToString(dset.Tables[12].Rows[0][1]), drawFont, drawBrush, drawRectvat, drawFormatCenter);
                // BranchName
                RectangleF drawRectRest = new RectangleF(15, y + 60, 250, 15);
                e.Graphics.DrawRectangle(blackPen, x + 15, y + 60, 250, 15);
                e.Graphics.DrawString("" + Convert.ToString(dset.Tables[3].Rows[0][1]) + "        " + Convert.ToString(dset.Tables[0].Rows[0][12]), drawFont, drawBrush, drawRectRest, drawFormatCenter);

                //Bitmap image = new Bitmap(System.Web.Http.WebHost.Properties.Resources.Comments_Suggestions_Black_1252);
                //int h = image.Height;
                //int w = image.Width;
                //RectangleF drawQRCode = new RectangleF(x + 200, y + 60, 70, 70);
                //e.Graphics.DrawRectangle(blackPen, x + 200, y + 60, 70, 70);
                //e.Graphics.DrawImage(image, drawQRCode);
                //DateTime
                RectangleF drawRectDateTime = new RectangleF(x - 45, y + 80, 250, 15);
                e.Graphics.DrawRectangle(blackPen, x - 45, y + 80, 250, 15);
                e.Graphics.DrawString(Convert.ToString(dset.Tables[0].Rows[0][15]), drawFont, drawBrush, drawRectDateTime, drawFormat);
                //Order

                // InVoice
                RectangleF drawRectInVoice = new RectangleF(x + 15, y + 100, 250, 15);
                e.Graphics.DrawRectangle(blackPen, x + 15, y + 100, 140, height);
                e.Graphics.DrawString("" + Convert.ToString(dset.Tables[0].Rows[0][4]) + "       " + Convert.ToString(dset.Tables[4].Rows[0][1]), drawFont, drawBrush, drawRectInVoice, drawFormatCenter);

                //Dine
                RectangleF drawRectDine = new RectangleF(x + 15, y + 120, 250, 15);
                e.Graphics.DrawRectangle(blackPen, x + 15, y + 120, 250, 15);
                e.Graphics.DrawString("" + Convert.ToString(dset.Tables[6].Rows[0][1]) + "           " + Convert.ToString(dset.Tables[0].Rows[0][11]), drawFont, drawBrush, drawRectDine, drawFormatCenter);

                RectangleF drawRectTable = new RectangleF(x, y + 135, 250, 15);
                e.Graphics.DrawRectangle(blackPen, x, y + 135, 250, 15);
                e.Graphics.DrawString("         Table      " + Convert.ToString(dset.Tables[0].Rows[0][17]) + "         Guest          " + Convert.ToString(dset.Tables[0].Rows[0][16]), drawFont, drawBrush, drawRectTable, drawFormatCenter);



                RectangleF drawReceiptline1 = new RectangleF(x, y + 145, 270, height);
                e.Graphics.DrawRectangle(blackPen, x, y, 130, height);
                e.Graphics.DrawString("-----------------------------------------------------------------", drawFontitem, drawBrush, drawReceiptline1, drawFormatleft);

                //Item
                RectangleF drawRectitem = new RectangleF(x, y + 155, 70, height);
                e.Graphics.DrawRectangle(blackPen, x, y + 155, 70, height);
                e.Graphics.DrawString(Convert.ToString(dset.Tables[9].Rows[0][1]), drawFont, drawBrush, drawRectitem, drawFormatCenter);

                RectangleF drawRectQty = new RectangleF(x + 70, y + 155, 30, height);
                e.Graphics.DrawRectangle(blackPen, x + 70, y + 155, 30, height);
                e.Graphics.DrawString(Convert.ToString(dset.Tables[8].Rows[0][1]), drawFont, drawBrush, drawRectQty, drawFormatCenter);



                RectangleF drawRectPrice = new RectangleF(x + 215, y + 155, 140, height);
                e.Graphics.DrawRectangle(blackPen, x + 215, y + 155, 155, height);
                e.Graphics.DrawString(Convert.ToString(dset.Tables[7].Rows[0][1]), drawFont, drawBrush, drawRectPrice, drawFormatCenter);

                RectangleF drawReceiptline2 = new RectangleF(x - 5, y + 165, 270, height);
                e.Graphics.DrawRectangle(blackPen, x - 5, y + 165, 150, height);
                e.Graphics.DrawString("-----------------------------------------------------------------", drawFontitem, drawBrush, drawReceiptline2, drawFormatleft);
                y = 175;
                float heightitem = 40;
                foreach (DataRow row in dset.Tables[0].Rows)
                {
                    total = total + Convert.ToDecimal(row[7]);
                    vat = vat + Convert.ToDecimal(row[0]);
                    Offset = Offset + 20;
                    Temp = Convert.ToString(row[2]);
                    float height1 = 50.0F;
                    if (Convert.ToString(row[6]).Length > 88 && Convert.ToString(row[6]).Length <= 130)
                    {
                        height1 = 100.0F;
                    }
                    if (Convert.ToString(row[6]).Length > 130)
                    {
                        height1 = 150.0F;
                    }
                    RectangleF drawRect = new RectangleF(x, y, 60, height1);
                    e.Graphics.DrawRectangle(blackPen, x, y, 60, height1);
                    e.Graphics.DrawString(Convert.ToString(row[7]) == "0" ? "" : Convert.ToString(row[7]), drawFontitem, drawBrush, drawRect, drawFormatCenter);


                    RectangleF drawRect1 = new RectangleF(x + 60, y, 45, height1);
                    e.Graphics.DrawRectangle(blackPen, x + 60, y, 45, height1);
                    e.Graphics.DrawString(Convert.ToString(row[8]) == "0" ? "" : Convert.ToString(row[8]), drawFontitem, drawBrush, drawRect1, drawFormat);



                    string Tempp = Convert.ToString(row[6]) + " " + Convert.ToString(row[1]);

                    int len = Convert.ToString(row[6]).Length;
                    if (Convert.ToDecimal(row[7]) == 0)
                    {
                        RectangleF drawRect2 = new RectangleF(x + 100, y, 170, height1);
                        e.Graphics.DrawRectangle(blackPen, x + 100, y, 170, height1);
                        e.Graphics.DrawString(Convert.ToString(row[6]) + "   " + Convert.ToString(row[1]), drawFontitem, drawBrush, drawRect2, drawFormatleft);
                        if (Convert.ToString(row[6]).Length < 25)
                        {
                            y = y + 15;
                        }
                        if (Convert.ToString(row[6]).Length > 25 && Convert.ToString(row[6]).Length <= 40)
                        {
                            y = y + 30;
                        }
                        if (Convert.ToString(row[6]).Length > 40 && Convert.ToString(row[6]).Length <= 55)
                        {
                            y = y + 40;
                        }
                        if (Convert.ToString(row[6]).Length > 55 && Convert.ToString(row[6]).Length <= 70)
                        {
                            y = y + 45;
                        }
                        if (Convert.ToString(row[6]).Length > 70 && Convert.ToString(row[6]).Length <= 100)
                        {
                            y = y + 55;
                        }
                        if (Convert.ToString(row[6]).Length > 100)
                        {
                            y = y + 65;
                        }

                    }
                    else
                    {
                        RectangleF drawRect2 = new RectangleF(x + 100, y, 180, height1);
                        e.Graphics.DrawRectangle(blackPen, x + 100, y, 180, height1);
                        e.Graphics.DrawString(Convert.ToString(row[6]) + " " + Convert.ToString(row[1]), drawFontitem, drawBrush, drawRect2, drawFormatleft);
                        y = y + 30;

                    }
                    x = 0;

                }
                RectangleF drawReceiptline3 = new RectangleF(x, y - 10, 270, height);
                e.Graphics.DrawRectangle(blackPen, x, y - 10, 150, height);
                e.Graphics.DrawString("-----------------------------------------------------------------", drawFontitem, drawBrush, drawReceiptline3, drawFormatleft);
                //GrossTotal
                RectangleF drawRectGrossTotal = new RectangleF(x, y, 200, 15);
                e.Graphics.DrawRectangle(blackPen, x, y + 40, 200, 15);
                e.Graphics.DrawString(Convert.ToString(String.Format("{0:N" + 3 + "}", total)) + "       " + Convert.ToString(dset.Tables[10].Rows[0][1]), drawFontitem, drawBrush, drawRectGrossTotal, drawFormatCenter);
                y = y + 20;
                //Discount
                RectangleF drawRectDiscount = new RectangleF(x, y, 200, 15);
                e.Graphics.DrawRectangle(blackPen, x, y, 200, 15);
                e.Graphics.DrawString(Convert.ToString(dset.Tables[0].Rows[0][10]) + "       " + Convert.ToString(dset.Tables[11].Rows[0][1]), drawFontitem, drawBrush, drawRectDiscount, drawFormatCenter);
                //Total
                y = y + 20;
                RectangleF drawRectTotal = new RectangleF(x, y, 200, 15);
                e.Graphics.DrawRectangle(blackPen, x, y, 200, 15);
                e.Graphics.DrawString(Convert.ToString(String.Format("{0:N" + 3 + "}", (total - Convert.ToDecimal(dset.Tables[0].Rows[0][10])))) + "       " + "الإجمالى", drawFontitem, drawBrush, drawRectTotal, drawFormatCenter);
                y = y + 20;
                RectangleF drawRectVat = new RectangleF(x, y, 200, 15);
                e.Graphics.DrawRectangle(blackPen, x, y, 200, 15);
                e.Graphics.DrawString(Convert.ToString(String.Format("{0:N" + 3 + "}", vat.ToString())) + "       " + Convert.ToString(dset.Tables[20].Rows[0][1]), drawFontitem, drawBrush, drawRectVat, drawFormatCenter);
                //net Toatl
                y = y + 20;
                RectangleF drawRectNetTotal = new RectangleF(x, y, 200, 15);
                e.Graphics.DrawRectangle(blackPen, x, y, 200, 15);
                e.Graphics.DrawString(Convert.ToString(String.Format("{0:N" + 3 + "}", dset.Tables[0].Rows[0][5])) + "       " + Convert.ToString(dset.Tables[13].Rows[0][1]), drawFontitem, drawBrush, drawRectNetTotal, drawFormatCenter);
                //Payment Receipt
                RectangleF drawReceiptline4 = new RectangleF(x, y + 20, 270, height);
                e.Graphics.DrawRectangle(blackPen, x, y + 20, 150, height);
                e.Graphics.DrawString("-----------------------------------------------------------------", drawFontitem, drawBrush, drawReceiptline4, drawFormatleft);
                y = y + 40;
                RectangleF drawRectReceipt = new RectangleF(x, y, 200, 30);
                e.Graphics.DrawRectangle(blackPen, x, y, 200, 15);
                e.Graphics.DrawString("Payment Receipt", HeadFont, drawBrush, drawRectReceipt, drawFormatleft);


                y = y + 40;
                // float heightitem = 40;
                string temp = "";
                decimal ReciptTotal = 0;
                //bool isFound = false;
                foreach (DataRow row in dset.Tables[1].Rows)
                {

                    ReciptTotal = ReciptTotal + Convert.ToDecimal(row[3]);
                    if (temp != Convert.ToString(row[4]))
                    {
                        RectangleF drawRect = new RectangleF(x, y, 200, height);
                        e.Graphics.DrawRectangle(blackPen, x, y, 200, height);
                        e.Graphics.DrawString("Receipt No.  " + Convert.ToString(row[4]), drawFontitem, drawBrush, drawRect, drawFormatleft);
                        y = y + 20;
                        RectangleF drawRect1 = new RectangleF(x, y, 100, height);
                        e.Graphics.DrawRectangle(blackPen, x, y, 100, height);
                        e.Graphics.DrawString("Payment Mode", drawFontitem, drawBrush, drawRect1, drawFormat);



                        RectangleF drawRect2 = new RectangleF(x + 130, y, 100, height);
                        e.Graphics.DrawRectangle(blackPen, x + 130, y, 100, height);
                        e.Graphics.DrawString("Amount", drawFontitem, drawBrush, drawRect2, drawFormatleft);
                        y = y + 20;
                    }

                    temp = Convert.ToString(row[4]);

                    RectangleF drawRectPay = new RectangleF(x - 13, y, 150, height);
                    e.Graphics.DrawRectangle(blackPen, x - 13, y, 150, height);
                    e.Graphics.DrawString(Convert.ToString(row[1]), drawFontitem, drawBrush, drawRectPay, drawFormat);

                    RectangleF drawAmount = new RectangleF(x + 130, y, 100, height);
                    e.Graphics.DrawRectangle(blackPen, x + 130, y, 100, height);
                    e.Graphics.DrawString(Convert.ToString(row[2]), drawFontitem, drawBrush, drawAmount, drawFormatleft);
                    y = y + 20;
                    x = 0;
                }
                RectangleF ReciptTotallabe = new RectangleF(x, y, 270, 30);
                e.Graphics.DrawRectangle(blackPen, x, y, 270, height);
                e.Graphics.DrawString(Convert.ToString(dset.Tables[15].Rows[0][1]), drawFontitem, drawBrush, ReciptTotallabe, drawFormat);
                y = y + 20;
                RectangleF drawReceiptTotal = new RectangleF(x, y, 270, height);
                e.Graphics.DrawRectangle(blackPen, x, y, 270, height);
                e.Graphics.DrawString("-----------------------------------------------------------------", drawFontitem, drawBrush, drawReceiptTotal, drawFormatleft);

                //y = y + 20;
                //RectangleF drawScanMe = new RectangleF(x, y + 20, 1000, 30);
                //e.Graphics.DrawRectangle(blackPen, x, y + 20, 100, 30);
                //e.Graphics.DrawString(ConfigurationManager.AppSettings["Scan"], drawFontitem, drawBrush, drawScanMe, drawFormatleft);


                //RectangleF drawScanMe1 = new RectangleF(x + 180, y + 20, 80, 30);
                //e.Graphics.DrawRectangle(blackPen, x + 180, y + 20, 80, 30);
                //e.Graphics.DrawString("Scan Me", drawFontitem, drawBrush, drawScanMe1, drawFormatleft);


            }
           // catch { }




     }
 
     // Print the file.
     //public void Printing()
     //{
     //    try 
     //    {
     //       // filePath = "D:/13mar.pdf";
     //      // streamToPrint = new StreamReader (filePath);
     //       try 
     //       {
     //          printFont = new Font("Arial", 10);
     //          PrintDocument pd = new PrintDocument(); 
     //          pd.PrintPage += new PrintPageEventHandler(pd_PrintPage);
     //          // Print the document.
     //          pd.Print();
     //       } 
     //       finally 
     //       {
     //          streamToPrint.Close() ;
     //       }
     //   } 
     //   catch(Exception ex) 
     //   { 
     //       //MessageBox.Show(ex.Message);
     //   }
     //}
   
     //// This is the main entry point for the application.
     //public static void Main(string[] args) 
     //{
     //   string sampleName = Environment.GetCommandLineArgs()[0];
     //   if(args.Length != 1)
     //   {
     //      Console.WriteLine("Usage: " + sampleName +" <file path>");
     //      return;
     //   }
     //   filePath = args[0];
     //   new PaymentController();
     //}


    
}