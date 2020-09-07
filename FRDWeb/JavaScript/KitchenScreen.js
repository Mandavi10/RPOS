var RestroId = '';
jquery_min_p(document).ready(function () {
    RestroId = jquery_min_p("#lblrestroid").text();
    BindkitchenName();
    BindKitchenScreen();
    setInterval(BindKitchenScreen, 5000);
});

function BindkitchenName() {
    RestroId = jquery_min_p("#lblrestroid").text();
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/KitchenScreen/BindkitchenName",
        data: "{}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsondata = result;
            for (var i = 0; i < result.length; i++) {
                var newOption = $('<option>');
                newOption.attr('value', result[i].kitchensectionId).text(result[i].name);
                $('#changesection').append(newOption);
            }

        },
        error: function ()
        { }
    });
}
/*
function BindKitchenScreen() {
    jquery_min_p("#test").html("");

    RestroId = jquery_min_p("#lblrestroid").text();
    var KitchenScreenId = jquery_min_p("#changesection").val();

    var KitchenScreenName = jquery_min_p("#changesection option:selected").text();
    jquery_min_p("#lblpagetitle").text('Kitchen Screen');
    //jquery_min_p("#lblpagetitle").text(KitchenScreenName + " " + ' Kitchen Screen');

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/KitchenScreen/BindKitchenScreen",
        data: "{'RestroId':'" + RestroId + "','KitchenScreenId':'" + KitchenScreenId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var Query = "";
            var jsonData1 = result.Table1;
            var jsonData2 = result.Table2;
            for (var i = 0; i < jsonData1.length; i++) {
                if (jsonData1[i].ordertypeId == 3) { //
                    Query = Query + " <div class='width32 orderbrd ml-3 mt-3'>";
                    Query = Query + "<div class='col-md-12 kitchenordercard'>";
                    Query = Query + "<div class='row'>";
                    Query = Query + "<label class='col-md-5 fontBold'>Take Away</label>";
                    Query = Query + "<label class='col-md-3 fontBold pl-0'>Time:</label>"
                    Query = Query + "<label class='col-md-3 p-0'>" + jsonData1[i].tim + "</label>";
                    Query = Query + "</div>";
                    Query = Query + "<div class='row'>";
                    Query = Query + "<label class='col-md-3 fontBold'>KOT No:</label>";
                    Query = Query + "<label class='col-md-2 p-0'>" + jsonData1[i].KOTId + "</label>";
                    Query = Query + "<label class='col-md-3 fontBold pl-0'>Order No:</label>";
                    Query = Query + "<label class='col-md-3 p-0'>" + jsonData1[i].OrderNo + "</label>";
                    Query = Query + "</div>";
                    Query = Query + "<div class='row'>";
                    Query = Query + "<label class='col-md-5 fontBold'>Waiter Name:</label>";

                    Query = Query + "<label class='col-md-6 p-0'>" + jsonData1[i].EmpName + "</label>";
                    Query = Query + "</div>";

                    Query = Query + "<div class='row'>";
                    Query = Query + "<label class='col-md-5 fontBold'>Table Number:</label>";

                    Query = Query + "<label class='col-md-6 p-0'></label>";
                    Query = Query + "</div>";
                    Query = Query + "</div>";


                    Query = Query + "<div class='col-md-12 orderscroll'>";

                    Query = Query + "<div class='row orderheadling'>";
                    Query = Query + "<label class='col-md-6 fontBold' style='color:#fff'>Item</label>";

                    Query = Query + "<label class='col-md-6 p-0' style='color:#fff'>Qty</label>";
                    Query = Query + "</div>";
                    for (var j = 0; j < jsonData2.length; j++) {
                        if (jsonData1[i].orderId == jsonData2[j].orderId) {
                            Query = Query + "<div class='row mt-1'>";

                            Query = Query + "<label class='col-md-6 fontBold'>" + jsonData2[j].itemname + "</label>";

                            Query = Query + "<label class='col-md-2 p-0'>" + jsonData2[j].Quantity + "</label>";
                            Query = Query + "<button type='button' class='btn btn-success btn-sm pull-right' id='" + jsonData2[j].orderitemsId + "' onclick='btnprepare_click( " + jsonData2[j].orderitemsId + " );'>Preparing</button>";
                            Query = Query + "</div>";
                        }
                    }
                    Query = Query + "</div>";
                    Query = Query + "</div>";
                }
                else {
                    Query = Query + " <div class='width32 orderbrd ml-3 mt-3'>";
                    Query = Query + "<div class='col-md-12 kitchenordercard dinein'>";
                    Query = Query + "<div class='row'>";
                    Query = Query + "<label class='col-md-5 fontBold'>Dine In</label>";

                    Query = Query + "<label class='col-md-3 fontBold pl-0'>Time:</label>"
                    Query = Query + "<label class='col-md-3 p-0'>" + jsonData1[i].tim + "</label>";
                    Query = Query + "</div>";
                    Query = Query + "<div class='row'>";
                    Query = Query + "<label class='col-md-3 fontBold'>KOT No:</label>";
                    Query = Query + "<label class='col-md-2 p-0'>" + jsonData1[i].KOTId + "</label>";
                    Query = Query + "<label class='col-md-3 fontBold pl-0'>Order No:</label>";
                    Query = Query + "<label class='col-md-3 p-0'>" + jsonData1[i].OrderNo + "</label>";
                    Query = Query + "</div>";
                    Query = Query + "<div class='row'>";
                    Query = Query + "<label class='col-md-5 fontBold'>Waiter Name:</label>";

                    Query = Query + "<label class='col-md-6 p-0'>" + jsonData1[i].EmpName + "</label>";
                    Query = Query + "</div>";

                    Query = Query + "<div class='row'>";
                    Query = Query + "<label class='col-md-5 fontBold'>Table Number:</label>";

                    Query = Query + "<label class='col-md-6 p-0'>" + jsonData1[i].TableNo + "</label>";
                    Query = Query + "</div>";
                    Query = Query + "</div>";


                    Query = Query + "<div class='col-md-12 orderscroll'>";

                    Query = Query + "<div class='row orderheadling'>";
                    Query = Query + "<label class='col-md-6 fontBold' style='color:#fff'>Item</label>";

                    Query = Query + "<label class='col-md-6 p-0' style='color:#fff'>Qty</label>";
                    Query = Query + "</div>";
                    for (var j = 0; j < jsonData2.length; j++) {
                        if (jsonData1[i].orderId == jsonData2[j].orderId) {
                            Query = Query + "<div class='row mt-1'>";

                            Query = Query + "<label class='col-md-6 fontBold'>" + jsonData2[j].itemname + "</label>";
                            if (jsonData2[j].itemstatus.trim() == 'O') {
                                var status = 'Preparing'
                            }
                            else if (jsonData2[j].itemstatus.trim() == 'CS') {
                                var status = 'Bumped'
                            }

                            Query = Query + "<label class='col-md-2 p-0'>" + jsonData2[j].Quantity + "</label>";
                            Query = Query + "<button type='button' class='btn btn-success btn-sm pull-right' id='" + jsonData2[j].orderitemsId + "' onclick='btnprepare_click( " + jsonData2[j].orderitemsId + "," + '"' + jsonData2[j].itemstatus.trim() + '"' + " );'>" + status + "</button>";
                            Query = Query + "</div>";
                        }
                    }


                    Query = Query + "</div>";


                    Query = Query + "</div>";
                }



            }
            jquery_min_p("#test").append(Query);
            jquery_min_p("#preloader").css('display', 'none');
            jquery_min_p("#Overlay_Load").css('visibility', 'hidden');
        },

        beforesend: function () {
            jquery_min_p("#preloader").css('display', 'block');
            jquery_min_p("#Overlay_Load").css('visibility', 'visible');

        },
        error: function ()
        { }
    });


}
*/


function BindKitchenScreen() {
    jquery_min_p("#test").html("");

    RestroId = jquery_min_p("#lblrestroid").text();
    var KitchenScreenId = jquery_min_p("#changesection").val();

    var KitchenScreenName = jquery_min_p("#changesection option:selected").text();
    jquery_min_p("#lblpagetitle").text('Kitchen Screen');
    //jquery_min_p("#lblpagetitle").text(KitchenScreenName + " " + ' Kitchen Screen');


    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/KitchenScreen/BindKitchenScreen",
        data: "{'RestroId':'" + RestroId + "','KitchenScreenId':'" + KitchenScreenId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var Query = "";
            var jsonData1 = result.Table1;
            var jsonData2 = result.Table2;
            for (i = 0; i < jsonData1.length; i++) {
                if (jsonData1[i].ordertypeId == 3) { //Take Away
                    Query = Query + " <div class='width21 orderbrd ml-3 mt-3' data-toggle='modal' onclick='OpenItemPopUp(" + jsonData1[i].orderId + "," + jsonData1[i].KOTId + "," + jsonData1[i].ordertypeId + ")'>";
                    Query = Query + "<div class='takeawaytop'>";
                    Query = Query + "<label class='col-md-5 fontBold textwhite'>KOT No:</label>";
                    Query = Query + "<label class='col-md-6 p-0 textwhite'>" + jsonData1[i].KOTId + "</label>";
                    Query = Query + "</div>";
                    Query = Query + "<div class='col-md-12 kitchenordercard'>";
                    Query = Query + "<div class='row'>";
                    Query = Query + "<label class='col-md-5 fontBold'>Order No:</label>";
                    Query = Query + "<label class='col-md-6 p-0'>" + jsonData1[i].OrderNo + "</label>";
                    Query = Query + "</div>";
                    Query = Query + "<div class='row'>";
                    Query = Query + "<label class='col-md-5 fontBold'>Time:</label>";
                    Query = Query + "<label class='col-md-6 p-0'>" + jsonData1[i].tim + "</label>";
                    Query = Query + "</div>";
                    Query = Query + "<div class='row'>";
                    Query = Query + "<label class='col-md-5 fontBold'>Waiter Name:</label>";
                    Query = Query + "<label class='col-md-6 p-0'>" + jsonData1[i].EmpName + "</label>";
                    Query = Query + "</div>";
                    Query = Query + "<div class='row'>";
                    Query = Query + "<label class='col-md-5 fontBold'>Table:</label>";

                    if (jsonData1[i].TableNo == null || jsonData1[i].TableNo == '') {
                        Query = Query + "<label class='col-md-6 p-0'></label>";
                    }
                    else {
                        Query = Query + "<label class='col-md-6 p-0'>" + jsonData1[i].TableNo + "</label>";
                    }
                    Query = Query + "</div>";
                    Query = Query + "</div>";
                    Query = Query + "</div>";
                }
                else if (jsonData1[i].ordertypeId == 1) {// DineIn
                    Query = Query + " <div class='width21 orderbrd ml-3 mt-3' data-toggle='modal' onclick='OpenItemPopUp(" + jsonData1[i].orderId + "," + jsonData1[i].KOTId + "," + jsonData1[i].ordertypeId + ")'>";
                    Query = Query + "<div class='dineintop'>";
                    Query = Query + "<label class='col-md-5 fontBold textwhite'>KOT No:</label>";
                    Query = Query + "<label class='col-md-6 p-0 textwhite'>" + jsonData1[i].KOTId + "</label>";
                    Query = Query + "</div>";
                    Query = Query + "<div class='col-md-12 dinein'>";
                    Query = Query + "<div class='row'>";
                    Query = Query + "<label class='col-md-5 fontBold'>Order No:</label>";
                    Query = Query + "<label class='col-md-6 p-0'>" + jsonData1[i].OrderNo + "</label>";
                    Query = Query + "</div>";
                    Query = Query + "<div class='row'>";
                    Query = Query + "<label class='col-md-5 fontBold'>Time:</label>";
                    Query = Query + "<label class='col-md-6 p-0'>" + jsonData1[i].tim + "</label>";
                    Query = Query + "</div>";
                    Query = Query + "<div class='row'>";
                    Query = Query + "<label class='col-md-5 fontBold'>Waiter Name:</label>";
                    Query = Query + "<label class='col-md-6 p-0'>" + jsonData1[i].EmpName + "</label>";
                    Query = Query + "</div>";
                    Query = Query + "<div class='row'>";
                    Query = Query + "<label class='col-md-5 fontBold'>Table:</label>";

                    Query = Query + "<label class='col-md-6 p-0'>" + jsonData1[i].TableNo + "</label>";
                   
                   
                    Query = Query + "</div>";
                    Query = Query + "</div>";
                    Query = Query + "</div>";
                }
            }
            jquery_min_p("#test").append(Query);
            jquery_min_p("#preloader").css('display', 'none');
            jquery_min_p("#Overlay_Load").css('visibility', 'hidden');
        },

        beforesend: function () {
            jquery_min_p("#preloader").css('display', 'block');
            jquery_min_p("#Overlay_Load").css('visibility', 'visible');

        },
        error: function ()
        { }
    });
}

function OpenItemPopUp(OrderID, KotId, ordertypeId) {
    jquery_min_p("#ordernumber").html("");

    var RestroId = jquery_min_p("#lblrestroid").text();
    var KitchenScreenId = jquery_min_p("#changesection").val();

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/KitchenScreen/BindKitchenScreen_Items",
        data: "{'RestroId':'" + RestroId + "','KitchenScreenId':'" + KitchenScreenId + "','OrderID':'" + OrderID + "','KotId':'" + KotId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var Query = "";
            Query = Query + "<div  class='modal-dialog modal-md'>";
            Query = Query + "<div  class='modal-content'>";
            Query = Query + "<div  class='modal-header'>";
            Query = Query + "<button type='button' class='close' onclick='Closepopup()'>";
            Query = Query + "<span class='cross'>&times;</span>";
            Query = Query + "</button>";
            Query = Query + "<h4 class='modal-title'>";
            Query = Query + "Item";
            Query = Query + "</h4>";
            Query = Query + "</div>";
            Query = Query + "<div  class='modal-body'>";
            Query = Query + "<div  class='col-sm-12 col-md-12 pl-0'>";
            Query = Query + "<div  class='row'>";
            Query = Query + "<div  class='width100 orderbrd ml-3'>";

            if (ordertypeId == 1) {
                Query = Query + "<div  class='col-md-12 dinein'>";
            }
            else if (ordertypeId == 3)
            { Query = Query + "<div  class='col-md-12 kitchenordercard'>"; }
            Query = Query + "<div  class='row'>";
            Query = Query + "<label class='col-md-3 fontBold'>KOT No:</label>";
            Query = Query + "<label class='col-md-2 p-0'>" + result[0].KOTId + "</label>";
            Query = Query + "<label class='col-md-3 fontBold pl-0'>Order No:</label>";
            Query = Query + "<label class='col-md-3 p-0'>" + result[0].OrderNo + "</label>";
            Query = Query + "</div>";
            Query = Query + "</div>";
            Query = Query + "<div  class='col-md-12 orderscroll'>";


            Query = Query + "<div  class='row orderheadling'>";
            Query = Query + "<label class='col-md-5 fontBold' style='color:#fff'>Item</label>";
            Query = Query + "<label class='col-md-3 p-0' style='color:#fff'>AddOn</label>";
            Query = Query + "<label class='col-md-3 p-0' style='color:#fff'>Qty</label>";
            Query = Query + "</div>";

            for (var i = 0; i < result.length; i++) {
                Query = Query + "<div  class='row mt-1'>";
                Query = Query + "<label class='col-md-5 fontBold'>" + result[i].ItemName + "</label>";
                Query = Query + "<label class='col-md-3 p-0'>" + result[i].AddOns + "</label>";
                Query = Query + "<label class='col-md-2 p-0'>" + result[i].Quantity + "</label>";

                if (result[i].itemstatus.trim() == 'O') {
                    var status = 'Preparing'
                }
                else if (result[i].itemstatus.trim() == 'CS') {
                    var status = 'Bump'
                }
                
                Query = Query + "<button type='button' class='btn btn-success btn-sm pull-right' onclick='btnprepare_click( " + OrderID + "," + KotId + "," + ordertypeId + "," + result[i].orderitemsId + "," + '"' + result[i].itemstatus.trim() + '"' + " )'>" + status + "</button>";
                Query = Query + "</div>";
            }

            Query = Query + "</div>";
            Query = Query + "</div>";
            Query = Query + "</div>";
            Query = Query + "</div>";
            Query = Query + "</div>";
            Query = Query + "</div>";
            Query = Query + "</div>";
            jquery_min_p("#ordernumber").append(Query);
            jquery_min_p("#ordernumber").show();

        },
        error: function ()
        { }
    });
}


function Closepopup()
{ jquery_min_p("#ordernumber").hide(); }

function btnprepare_click(OrderID, KotId, ordertypeId, id, status) {
    var orderitemsId = id;
    //--when itemstatus is ordered//---
    if (status.trim() == 'O') {
        RestroId = jquery_min_p("#lblrestroid").text();
        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/KitchenScreen/prepare_click",
            data: "{'RestroId':'" + RestroId + "','orderitemsId':'" + orderitemsId + "'}",
            dataType: "json",
            async: false,
            success: function (result) {
                var i = 0;
                var jsondata = result;
                if (jsondata[0].result == '1') {
                    BindKitchenScreen();
                    jquery_min_p("#ordernumber").hide();
                    OpenItemPopUp(OrderID, KotId, ordertypeId);
                }
            },
            error: function ()
            { }
        });
    }

    // when itemstatus is CS //---
    if (status.trim() == 'CS') {
        RestroId = jquery_min_p("#lblrestroid").text();
        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/KitchenScreen/Bumped_click",
            data: "{'RestroId':'" + RestroId + "','orderitemsId':'" + orderitemsId + "'}",
            dataType: "json",
            async: false,
            success: function (result) {
                var i = 0;
                var jsondata = result;
                if (jsondata[0].result == '1') {
                    BindKitchenScreen();
                    jquery_min_p("#ordernumber").hide();
                    OpenItemPopUp(OrderID, KotId, ordertypeId);
                }
                else { BindKitchenScreen(); jquery_min_p("#ordernumber").hide(); }
            },
            error: function ()
            { }
        });
    }
}
