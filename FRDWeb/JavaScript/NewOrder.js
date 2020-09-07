var id = "";
var count = 0;
var str = "";
var OrderTypeId = 0;
var temporderid = 0;
jquery_min_p(document).ready(function () {
   id = jquery_min_p("#lblrestroid").text();
    //alert(jquery_min_p("#lblrestroid").text());
   BindSittingSection();

    
   jquery_min_p("#btnproceed").click(function () {
       
       jquery_min_p('#ordermember').on('shown.bs.modal', function () {
           jquery_min_p('#txtmembercount').focus();
       })
       bootstrap_min_p('#ordermember').modal('show');

   });


   jquery_min_p("#sdinein").click(function () {
       OrderTypeId = 1;
       
       jquery_min_p("#createNewItem").css("display", "none");
       jquery_min_p("#dineInCon").css("display", "block");
       jquery_min_p("#divsittingsection").css("display", "block");
   });

   jquery_min_p("#txtmembercount").keypress(function (e) {
       var key = e.keyCode;
       if (key >= 65 && key <= 90 || key >= 97 && key <= 122)
       {
           e.preventDefault();
       }


   });

   jquery_min_p("#stakeaway").click(function () {
       
       var OrderTypeId = 3;
       jquery_min_p.ajax({
           type: "POST",
           contentType: "application/json; charset=utf-8",
           url: "/NewOrder/BindOrderTypeId",
           data: "{'OrderTypeId':'" + OrderTypeId + "'}",
           dataType: "json",
           async: false,
           success: function (result) {
               OrderTypeId = result;
               window.location.href = '/SalesBilling/TakeAway?OrderTypeId='+ OrderTypeId;
           }

       });
   });


   jquery_min_p("#btnok").click(function () {
       bootstrap_min_p("#WarningPopup").modal('hide');

   });

   jquery_min_p("#btnsaveorder").click(function () {
       var flag = 0;
       if ($('#destinationFields .sectionBox').hasClass('active')) {
           if (jquery_min_p("#txtmembercount").val() == "") {
               jquery_min_p("#txtmembercount").addClass('validate');
               flag = 1;
           }
           else {
               SaveTables();
               jquery_min_p.ajax({
                   type: "POST",
                   contentType: "application/json; charset=utf-8",
                   url: "/NewOrder/BindtempOrderId",
                   data: "{'temporderid':'" + temporderid + "'}",
                   dataType: "json",
                   async: false,
                   success: function (result) {
                       temporderid = result;
               window.location.href = '/SalesBilling/DineInTakeAway?OrderId=' + temporderid;
                   }

               });
              
           }

       }
       else {
           jquery_min_p('#hwarning').text('Please Select Table First');
           jquery_min_p('#WarningPopup').modal('show');
       }

   });


   jquery_min_p("#yesBtn").click(function () {

       bootstrap_min_p("#confirmationPopup").modal('hide');
       //count = 0;
       //jquery_min_p('#destinationFields .sectionBox').each(function () {

       //    if ($(this).hasClass('active')) {
       //        //jquery_min_p(this).removeClass('active');
       //        count = count + 1;
       //    }




       //});

       //if (count > 1) {
       //    jquery_min_p("#hconfirm").text("Do you want merge " + count + " tables!!");
       //    bootstrap_min_p("#confirmationPopup").modal('show');
       //    //count = 0;

       //}

   });

   jquery_min_p("#noBtn").click(function () {
       bootstrap_min_p("#confirmationPopup").modal('hide');
       jquery_min_p('#destinationFields .sectionBox').each(function () {

           if ($(this).hasClass('active')) {
               jquery_min_p(this).removeClass('active');
               jquery_min_p(this).addClass('tblVacant');
               //        count = count + 1;
           }
       });

   });
   
});

function BindSittingSection() {
   // id = jquery_min_p("#lblrestroid").text();
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/SectionTable/BindSittingSection",
        data: "{'id':'" + id + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsonData = result;
            var ArrayCount = result.length;
            var Query = "";
            
            for (var i = 0; i < ArrayCount; i++) {
                // Query = Query + "<div class='sectionBox'>";
               
               
                Query = Query + "<div class='sectionBox' id='sectable_" + result[i].sittingsectionId + "'  onclick='BindTables(" + result[i].sittingsectionId + ")'>";
                
                Query = Query + "<img src='/Content/images/family-icon-sm.png' />"
                Query = Query + "<h6>" + result[i].name + "</h6></div>";
            }
            jquery_min_p("#divsittingsection").append(Query);
            //BindTables(Default_sittingsectionId);

            jquery_min_p("#preloader").css('display', 'none');
            jquery_min_p("#Overlay_Load").css('visibility', 'hidden');
        },

        beforesend: function () {
            jquery_min_p("#preloader").css('display', 'block');
            jquery_min_p("#Overlay_Load").css('visibility', 'visible');

        },

        error: function () {
        }
    });



}

function BindTables(sittingsectionId) {
    //menuListjquery_min_p("#divoccvac").css("display", "block");
    jquery_min_p("#divoccvac").css("display", "block");
    jquery_min_p('#divsittingsection .sectionBox').removeClass('active');
    var sectionid = "#sectable_" + sittingsectionId;
        if (jquery_min_p(sectionid).hasClass('active')) {
            jquery_min_p(sectionid).removeClass('active');
            jquery_min_p(sectionid).addClass('active');
        }
        else {
            jquery_min_p(sectionid).addClass('active');
        }

   




    //jquery_min_p("#destinationFields").html("");
    // jquery_min_p("#sourceFields").html("");
    jquery_min_p("#destinationFields").html("");

    //var url = window.location.pathname;
    //var Restroid = url.substring(url.lastIndexOf('/') + 1);
    var Restroid = id;
    var sittingsectionId = sittingsectionId;

    jquery_min_p('#lblsittingsectionid').text(sittingsectionId);
   // alert(jquery_min_p('#lblsittingsectionid').text());


    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/NewOrder/BindSittingTables",
        data: "{'sittingsectionId':'" + sittingsectionId + "','Restroid':'" + Restroid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            //var jsonData = result.Table;
            var Query = "";
            var jsonData = result.Table;
            var ArrayCount = jsonData.length;
           
            for (var i = 0; i < ArrayCount; i++) {
                if (jsonData[i].SeltableId != null) {
                    Query = Query + "<div class='sectionBox tblOccupied' id='" + jsonData[i].tableId + "' >";
                }
                else { Query = Query + "<div class='sectionBox tblVacant' id='" + jsonData[i].tableId + "' onclick='SelectElement_Dest(" + jsonData[i].tableId + ")'>"; }
                Query = Query + "<img src='/Content/images/table-icon-sm.png' />"
                Query = Query + "<h6>" + jsonData[i].name + "</h6></div>";
            }
            jquery_min_p("#destinationFields").append(Query);
            jquery_min_p("#destinationFields").css("display", "block");

            var i = 0;
            var jsonData = result.Table1;
            var ArrayCount = jsonData.length;

            jquery_min_p("#destinationFields .sectionBox").each(function () {
                var tableId = jquery_min_p(this).attr('id');
                for (i = 0; i < ArrayCount; i++) {
                    if (jsonData[i].TableId == tableId) {
                        jquery_min_p(this).removeClass('tblVacant');
                        jquery_min_p(this).addClass('tblOccupied');
                        jquery_min_p(this).addClass('disabled');
                    }
                }
            });
                //    for (i = 0; i < result.length; i++) {

                //        if (result[i].SeltableId != null) {
                //            var tableId = jquery_min_p(this).attr('id');
                //            // var id = '#' + addonid
                //            if (result[i].tableId == tableId) {
                //                jquery_min_p('#' + tableId).addClass('selectedItem');
                //                jquery_min_p('#' + tableId).prop("disabled", "disabled");
                //            }

                //        }
                       

                //    }
                //});

            
           



        },

        error: function () {
        }
    });

}

function SelectElement_Dest(tableid) {
    jquery_min_p("#btnproceed").css("display", "inline-block");
    tabid = "#" + tableid;
    jquery_min_p(tabid).removeClass('tblVacant');
    jquery_min_p(tabid).removeClass('active');
    jquery_min_p(tabid).addClass('active');
    count = 0;
    
    jquery_min_p('#destinationFields .sectionBox').each(function () {

        if ($(this).hasClass('active')) {
            //jquery_min_p(this).removeClass('active');
            count = count + 1;
            
        }

    });

    if (count > 1)
    {
        jquery_min_p("#hconfirm").text("Do you want merge " + count + " tables!!");
        bootstrap_min_p("#confirmationPopup").modal('show');
        //count = 0;

    }
}


function SaveTables() {
    var membercount=jquery_min_p("#txtmembercount").val();
    var TableDataX = "<dtXml>";
    var sittingsectionId = jquery_min_p('#lblsittingsectionid').text();
    

    var restroId = id;

    
    jquery_min_p('#destinationFields .sectionBox').each(function (e) {
        if (jquery_min_p(this).hasClass('active')) {
            TableDataX += "<dtXml ";
            var tableId = jquery_min_p(this)[0].id;
            TableDataX += 'tableId="' + tableId + '" ';
            TableDataX += 'sittingsectionId="' + sittingsectionId + '" ';
            TableDataX += " />";


        }

    });
    TableDataX += "</dtXml>";


    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/NewOrder/SaveOrderTable",
        data: "{'TableDataX':'" + TableDataX + "','restroId':'" + restroId + "','membercount':'" + membercount + "','OrderTypeId':'" + OrderTypeId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            //console.log(result[0]);
            var i = 0;
            if(result.length>0){

                temporderid = result[i].temporderno;
                // alert('table added to this section successfully');
               // jquery_min_p('#popupsuccess').text('Table Added To This Section successfully');
                //jquery_min_p('#savePopup').modal('show');
            }
        }

            });


}