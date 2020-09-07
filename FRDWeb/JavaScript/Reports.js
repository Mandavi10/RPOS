
var restroId = '';
jquery_min_p(document).ready(function () {
    
    BindDD1();

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    // today = mm + '/' + dd + '/' + yyyy;


    var day = ("0" + today.getDate()).slice(-2);
    var month = ("0" + (today.getMonth() + 1)).slice(-2);

    var today = today.getFullYear() + "-" + (month) + "-" + (day);

    //$('#datePicker').val(today);




    jquery_min_p('#rfdate').val(today);
    jquery_min_p('#rtdate').val(today);
    jquery_min_p('#rftime').val('0:0:0');
    jquery_min_p('#rttime').val('0:0:0');

    jquery_min_p('#fddrrdate').val(today);
    jquery_min_p('#todrrdate').val(today);
    jquery_min_p('#fddrrtime').val('0:0:0');
    jquery_min_p('#tofddrrtime').val('0:0:0');

    jquery_min_p('#frdateuwir').val(today);
    jquery_min_p('#todateuwir').val(today);
    jquery_min_p('#frtimeuwir').val('0:0:0');
    jquery_min_p('#totimeuwir').val('0:0:0');


    jquery_min_p('#frdatedr').val(today);
    jquery_min_p('#todatedr').val(today);
    jquery_min_p('#frtimedr').val('0:0:0');
    jquery_min_p('#totimedr').val('0:0:0');


    jquery_min_p('#frmdatepr').val(today);
    jquery_min_p('#todatepr').val(today);  
    jquery_min_p('#frmtimepr').val('0:0:0');
    jquery_min_p('#totimepr').val('0:0:0');



    jquery_min_p('#frmdatestr').val(today);
    jquery_min_p('#todatestr').val(today);
    jquery_min_p('#frmtimestr').val('0:0:0');
    jquery_min_p('#totimestr').val('0:0:0');

    jquery_min_p('#frmdateitr').val(today);
    jquery_min_p('#todateitr').val(today);
    jquery_min_p('#frmtimeitr').val('0:0:0');
    jquery_min_p('#totimeitr').val('0:0:0');


     restroId = jquery_min_p("#lblrestroid").text();
     jquery_min_p("#btnshowdata").click(function () {
        
         DailySalesReport();
         //jquery_min_p("#preloader").css('display', 'block');
         //jquery_min_p("#Overlay_Load").css('visibility', 'visible');
      //   window.open( '/Reports/DailySalesReport.aspx');
       //  location.href = url;
         //window.open('/Reports/DailyRevenueReport.aspx'); btndrrshow btnshowuwir btnshowdr
     });


     jquery_min_p("#btndrrshow").click(function () {

        DailyRevenueReport();
     })


     jquery_min_p("#btnshowuwir").click(function () {

         UserWiseItemReport();
     })

     jquery_min_p("#btnshowdr").click(function () {

         DiscountReport();
     })


     jquery_min_p("#btnshowpr").click(function () {

         PaymentTransactionReport();
     })


     

     jquery_min_p("#btnshowmorestr").click(function () {

         SalesReturnReport();
     })
     
     jquery_min_p("#btnshowmoreitr").click(function () {

         ItemAmendReport();
     })



     });

//});




function BindDD1()
{
    restroId = jquery_min_p("#lblrestroid").text();
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Reports/BindDD1",
        data: "{'restroId':'" + restroId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsonData = result.Table;
            var jsonData1 = result.Table1;
            var jsonData2 = result.Table2;
            var jsonData3 = result.Table3;


            
            var newOption = "";
           // jquery_min_p("#ddlritemgroup").append('<option value="0">Select</option>');
            // $("#ddlitemgroup").append('<input type="button" value="Seleted option" id="but_read">');
            for (var i = 0; i < jsonData2.length; i++) {


                 newOption = jquery_min_p('<option>');

                newOption.attr('value', jsonData2[i].ItemMenuGroupID).text(jsonData2[i].MenuName);


                jquery_min_p('#ddlritemgroup').append(newOption);
                jquery_min_p('#ddlitemgroupuwir').append(newOption);
                jquery_min_p('#tblitemgrpstr').append(newOption);
            }


            var newOption1 = "";
            // jquery_min_p("#ddlritemgroup").append('<option value="0">Select</option>');
            // $("#ddlitemgroup").append('<input type="button" value="Seleted option" id="but_read">');
            for (var i = 0; i < jsonData.length; i++) {


                newOption1 = jquery_min_p('<option>');

                newOption1.attr('value', jsonData[i].UserId).text(jsonData[i].EmpName);


                jquery_min_p('#ddldailyrruserid').append(newOption1);
                jquery_min_p('#ddluseruwir').append(newOption1);
                jquery_min_p('#ddluserpr').append(newOption1);
            }

            var newOption2 = "";
            // jquery_min_p("#ddlritemgroup").append('<option value="0">Select</option>');
            // $("#ddlitemgroup").append('<input type="button" value="Seleted option" id="but_read">');
            for (var i = 0; i < jsonData1.length; i++) {


                newOption2 = jquery_min_p('<option>');

                newOption2.attr('value', jsonData1[i].sittingsectionId).text(jsonData1[i].name);


                jquery_min_p('#ddldailyrrsection').append(newOption2);
                jquery_min_p('#ddlsectionpr').append(newOption2);

            }



            //var newOption3 = "";
            //// jquery_min_p("#ddlritemgroup").append('<option value="0">Select</option>');
            //// $("#ddlitemgroup").append('<input type="button" value="Seleted option" id="but_read">');
            //for (var i = 0; i < jsonData2.length; i++) {


            //    newOption3 = jquery_min_p('<option>');

            //    newOption3.attr('value', jsonData2[i].ItemMenuGroupID).text(jsonData2[i].MenuName);


            //    jquery_min_p('#ddlitemgroupuwir').append(newOption3);

            //}
                

           

        },
        error: function (result)
        {
            alert('error');
        }
    });
}




function DailySalesReport() {
    restroId = jquery_min_p("#lblrestroid").text();
    var date = jquery_min_p("#rfdate").val();
    var todate = jquery_min_p("#rtdate").val();
    var itemgroupid = jquery_min_p("#ddlritemgroup").val();
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Reports/DailySReport",
        data: "{'restroId':'" + restroId + "','date':'" + date + "','todate':'" + todate + "','itemgroupid':'" + itemgroupid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            //var i = 0;
            //var jsonData = result.Table;
            //var jsonData1 = result.Table1;
            //var jsonData2 = result.Table2;
            //var jsonData3 = result.Table3;
            window.open('/Reports/DailySalesReport.aspx');

            jquery_min_p("#preloader").css('display', 'none');
            jquery_min_p("#Overlay_Load").css('visibility', 'hidden');
        },

        beforesend: function () {
            jquery_min_p("#preloader").css('display', 'block');
            jquery_min_p("#Overlay_Load").css('visibility', 'visible');

        },

    });
}




function DailyRevenueReport()
{
    restroId = jquery_min_p("#lblrestroid").text();
    var date = jquery_min_p("#fddrrdate").val();
    var todate = jquery_min_p("#todrrdate").val();
    var userid = jquery_min_p("#ddldailyrruserid").val();
    var sectionid = jquery_min_p("#ddldailyrrsection").val();
    var sectionidtext = jquery_min_p("#ddldailyrrsection").text().trim();
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Reports/DailyRReport",
        data: "{'restroId':'" + restroId + "','date':'" + date + "','todate':'" + todate + "','userid':'" + userid + "','sectionid':'" + sectionid + "','sectionidtext':'" + sectionidtext + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            //var i = 0;
            //var jsonData = result.Table;
            //var jsonData1 = result.Table1;
            //var jsonData2 = result.Table2;
            //var jsonData3 = result.Table3;
            window.open('/Reports/DailyRevenueReport.aspx');

            jquery_min_p("#preloader").css('display', 'none');
            jquery_min_p("#Overlay_Load").css('visibility', 'hidden');
        },

        beforesend: function () {
            jquery_min_p("#preloader").css('display', 'block');
            jquery_min_p("#Overlay_Load").css('visibility', 'visible');

        },

    });


}





function UserWiseItemReport() {
    restroId = jquery_min_p("#lblrestroid").text();
    var date = jquery_min_p("#frdateuwir").val();
    var todate = jquery_min_p("#todateuwir").val();
    var userid = jquery_min_p("#ddluseruwir").val();
    var itemgroupid = jquery_min_p("#ddlitemgroupuwir").val();
    //var sectionidtext = jquery_min_p("#ddldailyrrsection").text().trim();
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Reports/UserWiseReport",
        data: "{'restroId':'" + restroId + "','date':'" + date + "','todate':'" + todate + "','userid':'" + userid + "','itemgroupid':'" + itemgroupid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            //var i = 0;
            //var jsonData = result.Table;
            //var jsonData1 = result.Table1;
            //var jsonData2 = result.Table2;
            //var jsonData3 = result.Table3;
            window.open('/Reports/UserWiseItemReport.aspx');

            jquery_min_p("#preloader").css('display', 'none');
            jquery_min_p("#Overlay_Load").css('visibility', 'hidden');
        },

        beforesend: function () {
            jquery_min_p("#preloader").css('display', 'block');
            jquery_min_p("#Overlay_Load").css('visibility', 'visible');

        },

    });


}

function DiscountReport() {


    restroId = jquery_min_p("#lblrestroid").text();
    var date = jquery_min_p("#frdatedr").val();
    var todate = jquery_min_p("#todatedr").val();
     jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Reports/DiscReport",
        data: "{'date':'" + date + "','todate':'" + todate + "','restroId':'" + restroId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            //var i = 0;
            //var jsonData = result.Table;
            //var jsonData1 = result.Table1;
            //var jsonData2 = result.Table2;
            //var jsonData3 = result.Table3;
            window.open('/Reports/DiscountReport.aspx');

            jquery_min_p("#preloader").css('display', 'none');
            jquery_min_p("#Overlay_Load").css('visibility', 'hidden');
        },

        beforesend: function () {
            jquery_min_p("#preloader").css('display', 'block');
            jquery_min_p("#Overlay_Load").css('visibility', 'visible');

        },

    });






}



function PaymentTransactionReport()
{

   var restroid = jquery_min_p("#lblrestroid").text();
    var date = jquery_min_p("#frmdatepr").val();
    var todate = jquery_min_p("#todatepr").val();
    var userid = jquery_min_p("#ddluserpr").val();
    var sectionid = jquery_min_p("#ddlsectionpr").val();
    var sectionidtext = jquery_min_p("#ddlsectionpr").text().trim();
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Reports/PaymentTransactionReport",
        data: "{'restroid':'" + restroid + "','date':'" + date + "','todate':'" + todate + "','userid':'" + userid + "','sectionid':'" + sectionid + "','sectionidtext':'" + sectionidtext + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            //var i = 0;
            //var jsonData = result.Table;
            //var jsonData1 = result.Table1;
            //var jsonData2 = result.Table2;
            //var jsonData3 = result.Table3;
            window.open('/Reports/PaymentTransaction.aspx');

            jquery_min_p("#preloader").css('display', 'none');
            jquery_min_p("#Overlay_Load").css('visibility', 'hidden');
        },

        beforesend: function () {
            jquery_min_p("#preloader").css('display', 'block');
            jquery_min_p("#Overlay_Load").css('visibility', 'visible');

        },

    });


}




function SalesReturnReport() {
    restroId = jquery_min_p("#lblrestroid").text();
    var date = jquery_min_p("#frmdatestr").val();
    var todate = jquery_min_p("#todatestr").val();
    var itemgroupid = jquery_min_p("#tblitemgrpstr").val();
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Reports/SalesReturnReport",
        data: "{'restroId':'" + restroId + "','date':'" + date + "','todate':'" + todate + "','itemgroupid':'" + itemgroupid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            //var i = 0;
            //var jsonData = result.Table;
            //var jsonData1 = result.Table1;
            //var jsonData2 = result.Table2;
            //var jsonData3 = result.Table3;
            window.open('/Reports/SalesReturnReport.aspx');

            jquery_min_p("#preloader").css('display', 'none');
            jquery_min_p("#Overlay_Load").css('visibility', 'hidden');
        },

        beforesend: function () {
            jquery_min_p("#preloader").css('display', 'block');
            jquery_min_p("#Overlay_Load").css('visibility', 'visible');

        },

    });
}






function ItemAmendReport() {
    restroId = jquery_min_p("#lblrestroid").text();
    var date = jquery_min_p("#frmdateitr").val();
    var todate = jquery_min_p("#todateitr").val();
   // var itemgroupid = jquery_min_p("#tblitemgrpstr").val();
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Reports/ItemAmendReport",
        data: "{'restroId':'" + restroId + "','date':'" + date + "','todate':'" + todate + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            //var i = 0;
            //var jsonData = result.Table;
            //var jsonData1 = result.Table1;
            //var jsonData2 = result.Table2;
            //var jsonData3 = result.Table3;
            window.open('/Reports/ItemAmendReport.aspx');

            jquery_min_p("#preloader").css('display', 'none');
            jquery_min_p("#Overlay_Load").css('visibility', 'hidden');
        },

        beforesend: function () {
            jquery_min_p("#preloader").css('display', 'block');
            jquery_min_p("#Overlay_Load").css('visibility', 'visible');

        },

    });
}