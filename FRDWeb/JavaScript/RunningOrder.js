var restroid = "";
var checkOrderId = "";
var checkOrderTypeId = "";
var IsHoldItem = 0;
var date = '';
var IsCountSR = 0;
var Iscount = 0;
var IsActiveBill = 0;
var IsActiveFlag = 0;

jquery_min_p(document).ready(function () {



    restroid = jquery_min_p("#lblrestroid").text();
    //alert(restroid)
    BindRunningOrder();

    //setInterval(BindRunningOrder, 10000);
    jquery_min_p("#empDetails").css('display', 'block');

    //btncrosscloasesalesreturn  btnsalesreturncancel

    jquery_min_p('#btnsalesreturncancel').click(function () {

        jquery_min_p("#tblsalesafterreturn tbody").html('');
        jquery_min_p("#tblsalesafterreturn").css('display', 'none');


        BindReverseOrderclearSR();

    })

    
    jquery_min_p('#btnsaveclose').click(function () {

        //bootstrap_min_p('#salesreturn').modal('hide');
        jquery_min_p("#tblsalesafterreturn tbody").html('');
        jquery_min_p("#tblsalesafterreturn").css('display', 'none');
        jquery_min_p("#lblbitemprice").text(0);
        jquery_min_p("#lblbitemvat").text(0);
        jquery_min_p("#lblbtotal").text(0);

        jquery_min_p('#btnSalesReturn').addClass("disable");  //btnsalesreturnprint
       // jquery_min_p('#btnsalesreturnprint').addClass("disable");
        jquery_min_p('#btnsalesreturncancel').addClass("disable");

       // BindReverseOrderclearSR();
    })

    jquery_min_p('#manager').on('shown.bs.modal', function () {
        jquery_min_p('#textaccesscode').focus();
    })

    jquery_min_p('#btnsalesreturnexit').click(function () {


       // jquery_min_p("#dvsalesreturn").hide();
        //jquery_min_p("#salesreturn").css('display', 'none');
        bootstrap_min_p('#salesreturn').modal('hide');
       // jquery_min_p("#salesreturn").modal('hide');
        // bootstrap_min_p('#dvsalesreturn').modal('hide');

        jquery_min_p("#tblsalesafterreturn tbody").html('');
        jquery_min_p("#tblsalesafterreturn").css('display', 'none');


        BindReverseOrderclearSR();

    })

    jquery_min_p("#btncrosscloasesalesreturn").click(function () {

       // bootstrap_min_p("#salesreturn").modal('hide');
       // jquery_min_p("#salesreturn").css('display', 'none');
       // bootstrap_min_p("#salesreturn").modal('hide');
        //jquery_min_p("#salesreturn").modal('hide');
        // bootstrap_min_p('#dvsalesreturn').modal('hide');
        jquery_min_p("#tblsalesafterreturn tbody").html('');
        jquery_min_p("#tblsalesafterreturn").css('display', 'none');


        BindReverseOrderclearSR();


    })

    jquery_min_p('#btncrosscloasebpup').click(function () {
        
        //jquery_min_p("#billhistory").hide();
        bootstrap_min_p("#billhistory").modal('hide');

    })
    

    jquery_min_p('#btncrosscloasemngr').click(function () {

        //jquery_min_p("#manager").hide();
        bootstrap_min_p("#manager").modal('hide');
    })

    jquery_min_p('#btntableshift').click(function () {
        BtnTableShift_Click();
        jquery_min_p('#Tableshift').modal('show');
    });

    



    jquery_min_p('#btncrosscloase').click(function () {

        jquery_min_p("#billhistory").css('display', 'none');
    });

    

    jquery_min_p('#btncoupanapply').click(function () {

        jquery_min_p("#billhistory").css('display', 'none');
    });



    jquery_min_p('#btnSettle').click(function () {
        var flag = 0;
        var count = jquery_min_p("#tblrunningord tbody tr ").length;

        jquery_min_p("#tblrunningord tbody").find('tr').each(function () {
            var row = jquery_min_p(this).closest('tr');
            if (row.find('td:nth-child(4)').text().trim() == 'Delivered' || row.find('td:nth-child(4)').text().trim() == 'Ammended')
            {
                flag = flag + 1;
            }
        });
        //alert(count)
        //alert(flag)

        jquery_min_p('#divrunningorder .orderbrd').click(function () {
            jquery_min_p("#divrunningorder .orderbrd").each(function () {
                if (jquery_min_p(this).hasClass('active')) {
                    jquery_min_p(this).removeClass('active');
                }
                else { jquery_min_p(this).addClass('active'); }
            });
            //jquery_min_p(this).hasClass('active');
        });

        if (count == flag) {
            BindPaymentPage();
            
        }
        else {
            jquery_min_p('#h6warning').text('Some Items Are Not Delivered');
            jquery_min_p('#dngwarn').modal('show');
        }
    });


    jquery_min_p('#btnmshowbill').click(function () {
        if (jquery_min_p('#txtBillDate').val() == '') {
            jquery_min_p('#txtBillDate').addClass('validate');

        }
        else {
            var date = jquery_min_p("#txtBillDate").val();
            BillHistory(date);
        }
    });


    jquery_min_p('#btnBillHistory').click(function () {
        jquery_min_p('#billhst').modal('show');




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




        jquery_min_p('#txtBillDate').val(today);

        jquery_min_p('#tblbillhistoryDetail tbody').html('');

    });

    jquery_min_p('#btndeliver').click(function () {





        jquery_min_p('#htext').text('Are You Sure Want To Deliver All');
        jquery_min_p('#DeliverConfirmationPopup').modal('show');

    });





    jquery_min_p('#DeliverYes').click(function () {
        jquery_min_p('#DeliverConfirmationPopup').modal('hide');
        var OrderId = jquery_min_p("#lblorderid").val();
       // btndeliver_Click(id);
        btndeliver_Click(OrderId);
    });

    ///btnmangergobillhstry

    jquery_min_p('#btnmangergobillhstry').click(function () {


        
        //jquery_min_p('#salesOverlay').css('display', 'none');
        bootstrap_min_p("#billhst").modal('hide');
        bootstrap_min_p("#manager").modal('hide');

        var accesscode = jquery_min_p('#textaccesscode').val().trim();
        var restroId = jquery_min_p("#lblrestroid").text();


        if (accesscode == "") {
            jquery_min_p('#h6warning').text('Enter Access code!!');
            jquery_min_p('#dngwarn').modal('show');
            return false;
        }

        else {

            jquery_min_p.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/Payment/CheckAdmin",
                data: "{'restroId':'" + restroId + "','accesscode':'" + accesscode + "'}",
                dataType: "json",
                async: false,
                success: function (result) {


                    var ArrayCount = result.length;
                    if (result[0].result == "-1") {
                        jquery_min_p('#h6warning').text('Invalid Access Code!!');
                        jquery_min_p('#dngwarn').modal('show');
                        return false;
                    }
                    else {
                        
                       // jquery_min_p('#salesreturn').show();
                        bootstrap_min_p("#salesreturn").modal('show');
                        jquery_min_p("#billhst").hide();
                       // jquery_min_p("#manager").hide();
                        bootstrap_min_p("#salesreturn").modal('show');
                    }


                },
                error: function () {
                    //alert('error');
                }


            });
        }

    });







    jquery_min_p('#btndelete').click(function () {
        jquery_min_p("#hconfirmdel").text("Are You Sure Want To Delete Order??");
        bootstrap_min_p("#deletePopup1").modal('show');

        jquery_min_p("#delsucess").click(function () {
            var OrderId = jquery_min_p("#lblorderid").val();
            restroid = jquery_min_p("#lblrestroid").text();
            jquery_min_p.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/RunningOrder/deleteholdorder",
                data: "{'restroid':'" + restroid + "','OrderId':'" + OrderId + "'}",
                dataType: "json",
                async: false,
                success: function (result) {
                    bootstrap_min_p("#deletePopup1").modal('hide');
                    jquery_min_p("#popupsuccess").text("Order Deleted Successfully");
                    bootstrap_min_p("#savePopup").modal('show');
                    BindRunningOrder();

                }
            });

        });
        jquery_min_p("#delcancel").click(function () {

            bootstrap_min_p("#deletePopup1").modal('hide');
        });



    });



    jquery_min_p('#DeliverNo').click(function () {
        jquery_min_p('#DeliverConfirmationPopup').modal('hide');

    });


    jquery_min_p('#btnUpdate').click(function () {



        var TableDataX = "<dtXml>";
        var flag = 0;
        $('#sourceFields .sectionBox').each(function (e) {
            if ($(this).hasClass('active')) {
                flag = 1;
                TableDataX += "<dtXml ";
                var TableId = jquery_min_p(this)[0].id;
                TableDataX += 'TableId="' + TableId + '" ';

                TableDataX += " />";


            }

        });
        TableDataX += "</dtXml>";



        if (flag == 1) {

            jquery_min_p('#hconfirm').text('Are You Sure Want To Shift Table');
            jquery_min_p('#confirmationPopup').modal('show');




            jquery_min_p('#yesBtn').click(function () {
                jquery_min_p('#confirmationPopup').modal('hide');
                // jquery_min_p('#Tableshift').modal('hide');
                AssignNewTable();
            });



            jquery_min_p('#noBtn').click(function () {
                jquery_min_p('#confirmationPopup').modal('hide');
                jquery_min_p('#Tableshift').modal('hide');
            });

        }
        else {
            jquery_min_p('#h6warning').text('Please Select Table First');
            jquery_min_p('#dngwarn').modal('show');
        }






    });



    jquery_min_p('#btnsaveclose').click(function () {

        jquery_min_p('#savePopup').modal('hide');

        //BindRunningOrder();
    });


});



function BindRunningOrder() {

    restroid = jquery_min_p("#lblrestroid").text();
    jquery_min_p("#divrunningorder").html("");
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/RunningOrder/BindRunningOrder",
        data: "{'restroid':'" + restroid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsonData = result;
            var ArrayCount = result.length;
            var Query = "";
            var Default_orderId = "";
            var Default_orderNo = "";
            var Default_orderType = "";
            jquery_min_p("#empDetails").css('display', 'block');

            if (ArrayCount == 0) {
                jquery_min_p("#lblnorecordfound").css('display', 'block');
                
                jquery_min_p("#exitrunningorder").css('display', 'block');
            }
            else {
                jquery_min_p("#lblnorecordfound").css('display', 'none');
                jquery_min_p("#exitrunningorder").css('display', 'none');
                jquery_min_p("#nodatafoundndiv").css('display', 'flex');
                
            for (var i = 0; i < ArrayCount; i++) {
                if (i == 0) {
                    Default_orderId = result[i].orderId;
                   // alert(Default_orderId)
                    Default_orderNo = result[i].OrderNo;
                    Default_orderType = result[i].ordertypeId
                }
                if (result[i].ordertypeId == '1') {
                    if (result[i].OrderNo == "") {
                        Query = Query + "<div class='width30 orderbrd ml-3 mt-1'>";
                        Query = Query + "<div class='col-md-12 hold height37 check' id='" + result[i].orderId + "' onclick='BindOrderDraft(" + result[i].orderId + "," + '"' + result[i].ordertypeId + '"' + ");'>";
                        Query = Query + "<div class='row'>";
                        Query = Query + "<label class='col-md-12 fontBold mt-2' style='text-align: center;'>" + result[i].TableNo + "</label>";
                        Query = Query + "</div>";
                        Query = Query + "</div>";
                        Query = Query + "<div class='col-md-12'>";
                        Query = Query + "<div class='row orderheadling'>";
                        Query = Query + "<label class='col-md-6 fontBold' style='color:#fff'>Order No.:</label>";
                        Query = Query + "<label class='col-md-6 p-0' style='color:#fff'>" + result[i].OrderNo + "</label>";
                        Query = Query + "</div>";
                        Query = Query + "</div>";
                        Query = Query + "</div>";

                    }
                    else {

                        Query = Query + "<div class='width30 orderbrd ml-3 mt-1' >";
                        Query = Query + "<div class='col-md-12 dinein height37 check' id='" + result[i].orderId + "' onclick='BindOrderDetail(" + result[i].orderId + "," + '"' + result[i].OrderNo + '"' + "," + '"' + result[i].ordertypeId + '"' + ");'>";
                        Query = Query + "<div class='row'>";
                        Query = Query + "<label class='col-md-12 fontBold mt-2' style='text-align: center;'>" + result[i].TableNo + "</label>";
                        Query = Query + "</div>";
                        Query = Query + "</div>";
                        Query = Query + "<div class='col-md-12'>";
                        Query = Query + "<div class='row orderheadling'>";
                        Query = Query + "<label class='col-md-6 fontBold' style='color:#fff'>Order No.:</label>";
                        Query = Query + "<label class='col-md-6 p-0' style='color:#fff'>" + result[i].OrderNo + "</label>";
                        Query = Query + "</div>";
                        Query = Query + "</div>";
                        Query = Query + "</div>";
                    }
                }
                else if (result[i].ordertypeId == '3') {
                    if (result[i].OrderNo == "") {
                        Query = Query + "<div class='width30 orderbrd ml-3 mt-1'>";
                        Query = Query + "<div class='col-md-12 hold height37 check' id='" + result[i].orderId + "' onclick='BindOrderDraft(" + result[i].orderId + "," + '"' + result[i].ordertypeId + '"' + ");'>";
                        Query = Query + "<div class='row'>";
                        Query = Query + "<label class='col-md-12 fontBold pl-0 mt-2' style='text-align: center;'>Take Away</label>";
                        Query = Query + "</div>";
                        Query = Query + "</div>";
                        Query = Query + "<div class='col-md-12'>";
                        Query = Query + "<div class='row orderheadling'>";
                        Query = Query + "<label class='col-md-6 fontBold' style='color:#fff'>Order No.:</label>";
                        Query = Query + "<label class='col-md-6 p-0' style='color:#fff'>" + result[i].OrderNo + "</label>";
                        Query = Query + "</div>";
                        Query = Query + "</div>";
                        Query = Query + "</div>";

                    }
                    else {

                        Query = Query + "<div class='width30 orderbrd ml-3 mt-1'>";
                        Query = Query + "<div class='col-md-12 kitchenordercard height37 check' id='" + result[i].orderId + "' onclick='BindOrderDetail(" + result[i].orderId + "," + '"' + result[i].OrderNo + '"' + "," + '"' + result[i].ordertypeId + '"' + ");'>";
                        Query = Query + "<div class='row'>";
                        Query = Query + "<label class='col-md-12 fontBold mt-2' style='text-align: center;'>Take Away</label>";
                        Query = Query + "</div>";
                        Query = Query + "</div>";
                        Query = Query + "<div class='col-md-12'>";
                        Query = Query + "<div class='row orderheadling'>";
                        Query = Query + "<label class='col-md-6 fontBold' style='color:#fff'>Order No.:</label>";
                        Query = Query + "<label class='col-md-6 p-0' style='color:#fff'>" + result[i].OrderNo + "</label>";
                        Query = Query + "</div>";
                        Query = Query + "</div>";
                        Query = Query + "</div>";
                    }
                }



                } //console.log(Query)
            jquery_min_p("#divrunningorder").append(Query);
            
            BindOrderDetail(Default_orderId, Default_orderNo, Default_orderType);
            }


            

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


function BindOrderDraft(Id, ordertypeId) {
   // alert(Id)
    jquery_min_p("#divrunningorder .orderbrd .check").each(function (e) {
        jquery_min_p(this).removeClass('active');
    });

    var oid = '#' + Id;
    //jquery_min_p(oid).removeClass('hold');
    jquery_min_p(oid).addClass('active');
    IsHoldItem = 1;
    jquery_min_p("#btndeliver").css('display', 'none');
    jquery_min_p("#btndelete").css('display', 'flex');
    checkOrderId = Id;
    jquery_min_p("#btntableshift").css('display', 'inline-block');
    checkOrderTypeId = ordertypeId;
    jquery_min_p("#lblOrderNo").text(" ");

    jquery_min_p("#divorderdeatil").css('display', 'block');
    var OrderId = Id;
    restroid = jquery_min_p("#lblrestroid").text();
    jquery_min_p("#lblorderid").val(Id);

    jquery_min_p("#tblrunningord tbody").html("");
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/RunningOrder/Bindholditems",
        data: "{'restroid':'" + restroid + "','OrderId':'" + OrderId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsonData = result.Table;
            var jsondata1 = result.Table1;
            var jsondata2 = result.Table2;

            var TotalSAR = 0;
            var Query = "";
            var NoofOrder = jsonData.length;
            var Bumped = 0;
            var cooked = 0;
            var dilivered = 0;


            for (var i = 0; i < jsonData.length; i++) {

                Query = Query + "<tr>";
                Query = Query + "<td style='display:none'>" + jsonData[i].orderitemsId + "</td>";
                Query = Query + "<td width='40%'>" + jsonData[i].ItemName + "</td>";
                Query = Query + "<td>" + jsonData[i].Qty + "</td>";
                Query = Query + "<td>" + jsonData[i].Status + "</td>";
                Query = Query + "<td>-</td>";
                //Query = Query + "<td class='ids' onclick='Action_Click(" + jsonData[i].orderitemsId + "," + '"' + jsonData[i].Status + '"' + ");'><i class='fa fa-paper-plane action' aria-hidden='true'></i></td>";
                Query = Query + "<td>-</td>";
                Query = Query + "</tr>";
                TotalSAR = TotalSAR + jsonData[i].Price;
                if (jsonData[i].Status == 'Preparing') {
                    cooked = cooked + 1;
                }
                if (jsonData[i].Status == 'Bumped') {
                    Bumped = Bumped + 1;
                }
                if (jsonData[i].Status == 'Delivered') {
                    dilivered = dilivered + 1;
                }
                if (jsonData[i].Status == 'Settled') {
                    dilivered = dilivered + 1;
                }
            }

            var ExistingTable = jsondata2[0].TableNo;
            jquery_min_p("#lblPreTable").text(ExistingTable);
            jquery_min_p("#lblorder").text(NoofOrder);
            jquery_min_p("#lblcooking").text(cooked);
            jquery_min_p("#lblBumped").text(Bumped);
            jquery_min_p("#lbldilivered").text(dilivered);

            jquery_min_p("#tblrunningord tbody").append(Query);



            jquery_min_p("#lblTotalSAR").text(TotalSAR);

            jquery_min_p("#tempbill").css("display", "none");
            jquery_min_p("#btnSettle").css("display", "none");

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


function BindOrderDetail(Id, OrderNo, ordertypeId) {
    jquery_min_p("#lblid").val("");
    jquery_min_p("#lblordernumber").val("");
    jquery_min_p("#lblordertypeid").val("");
    jquery_min_p("#btndeliver").css('display', 'flex');
    jquery_min_p("#btndelete").css('display', 'none');
    jquery_min_p("#divrunningorder .orderbrd .check").each(function (e) {
        jquery_min_p(this).removeClass('active');
    });
    jquery_min_p("#lblid").val(Id);
    jquery_min_p("#lblordernumber").val(OrderNo);
    jquery_min_p("#lblordertypeid").val(ordertypeId);



    jquery_min_p("#tempbill").css("display", "inline-block"); // changed
    jquery_min_p("#btnSettle").css("display", "none");
    var oid = '#' + Id;
    jquery_min_p(oid).addClass('active');
    var orderno = OrderNo;
    checkOrderId = Id
    IsHoldItem = 0;
    jquery_min_p("#lblOrderNo").text(orderno);
    if (ordertypeId == '3') {
        jquery_min_p("#btntableshift").css('display', 'none');
        checkOrderTypeId = ordertypeId
    }
    else {
        jquery_min_p("#btntableshift").css('display', 'inline-block');
        checkOrderTypeId = ordertypeId
    }

    jquery_min_p("#divorderdeatil").css('display', 'block');
    var OrderId = Id;
    //alert(OrderId)
    // alert(OrderId)
    restroid = jquery_min_p("#lblrestroid").text();

    jquery_min_p("#lblorderid").val(Id);


    jquery_min_p("#tblrunningord tbody").html("");
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/RunningOrder/BindOrderDetail",
        data: "{'restroid':'" + restroid + "','OrderId':'" + OrderId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsonData = result.Table;
            var jsondata1 = result.Table1;
            var jsondata2 = result.Table2;
            var jsondata3 = result.Table3;

            var TotalSAR = 0;
            var TaxAmount = 0;
            var NetPrise = 0;
            var Query = "";
            var NoofOrder = jsonData.length;
            var Bumped = 0;
            var cooked = 0;
            var dilivered = 0;
            if (jsonData.length > 0) {
                for (var i = 0; i < jsonData.length; i++) {


                    Query = Query + "<tr>";
                    Query = Query + "<td style='display:none'>" + jsonData[i].orderitemsId + "</td>";
                    Query = Query + "<td width='40%'>" + jsonData[i].ItemName + "</td>";
                    Query = Query + "<td>" + jsonData[i].Quantity + "</td>";
                    Query = Query + "<td>" + jsonData[i].Status + "</td>";
                    Query = Query + "<td>" + jsonData[i].KOTId + "</td>";
                    if (jsonData[i].Status == 'Bumped') {
                        Query = Query + "<td class='ids' onclick='Action_Click(" + jsonData[i].orderitemsId + "," + '"' + jsonData[i].Status + '"' + "," + '"' + jsonData[i].ItemName + '"' + ");'><i class='fa fa-paper-plane action' aria-hidden='true'></i></td>";
                    }
                    else {
                        Query = Query + "<td>-</td>";
                    }
                    Query = Query + "</tr>";

                    TaxAmount = TaxAmount + jsondata3[0].tax;
                    NetPrise = NetPrise + jsonData[i].Price;
                    TotalSAR = NetPrise + parseFloat(TaxAmount);
                    if (jsonData[i].Status == 'Preparing') {
                        cooked = cooked + 1;
                    }
                    if (jsonData[i].Status == 'Bumped') {
                        Bumped = Bumped + 1;
                    }
                    if (jsonData[i].Status == 'Delivered') {
                        dilivered = dilivered + 1;
                        jquery_min_p("#tempbill").css("display", "inline-block");
                        jquery_min_p("#btnSettle").css("display", "inline-block");
                    }
                    if (jsonData[i].Status == 'Settled') {
                        dilivered = dilivered + 1;
                    }

                }

                var ExistingTable = jsondata2[0].TableNo;
                var orderIdDineIn = jsondata2[0].OrderNo;

                jquery_min_p("#lblPreTable").text(ExistingTable);
                jquery_min_p("#lblorderIdDineIn").text(orderIdDineIn);
                jquery_min_p("#lblorder").text(NoofOrder);
                jquery_min_p("#lblcooking").text(cooked);
                jquery_min_p("#lblBumped").text(Bumped);
                jquery_min_p("#lbldilivered").text(dilivered);

                jquery_min_p("#tblrunningord tbody").append(Query);

                //jquery_min_p("#lblTotalSAR").css('display', 'inline-block');
                //jquery_min_p("#lbltaxamt").css('display', 'inline-block');
                //jquery_min_p("#lblnetamt").css('display', 'inline-block');
                jquery_min_p('#btndeliver').css('display', 'block');

               
            }
            else {
                jquery_min_p("#tblrunningord tbody tr").remove();
                var markup = "<tr><td colspan='6'>'Item Cleared..'</td></tr>";
                jquery_min_p("#tblrunningord tbody").append(markup);
                jquery_min_p('#btndeliver').css('display', 'none');

               
            }
            jquery_min_p("#lblTotalSAR").text(parseInt(TotalSAR).toFixed(3));
            jquery_min_p("#lbltaxamt").text(parseInt(TaxAmount).toFixed(3));
            jquery_min_p("#lblnetamt").text(parseInt(NetPrise).toFixed(3));

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


function BtnTableShift_Click() {

    var orderId = jquery_min_p("#lblorderid").val();
    restroid = jquery_min_p("#lblrestroid").text();



    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/RunningOrder/BtnTableShift_Click",
        data: "{'restroid':'" + restroid + "','orderId':'" + orderId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsonData = result;
            var ArrayCount = result.length;
            var Query = "";
            var jsondata1 = result.Table1;
            //console.log(result);
            var SittingSectionId = jsondata1[0].sittingsectionId;
            //alert(SittingSectionId);
            Bindtable(SittingSectionId);

        },

        error: function () {
        }
    });

}








function Bindtable(sectionID) {


    restroid = jquery_min_p("#lblrestroid").text();
    jquery_min_p("#sourceFields").html("");


    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/RunningOrder/Bindtable",
        data: "{'restroid':'" + restroid + "','sectionID':'" + sectionID + "'}",
        dataType: "json",
        async: false,
        success: function (result) {

            var i = 0;
            var jsonData = result;
            var ArrayCount = result.length;
            var Query = "";


            for (var i = 0; i < ArrayCount; i++) {
                Query = Query + "<div class='sectionBox'  id='table_" + result[i].tableId + "' onclick='UpdateTable(" + result[i].tableId + ");'>";
                Query = Query + "<img src='/Content/images/table-icon-sm.png' />"
                Query = Query + "<h6>" + result[i].name + "</h6></div>";
            }
            jquery_min_p("#sourceFields").append(Query);

        },

        error: function () {
        }
    });

}

function UpdateTable(TableId) {
    var divid = "#table_" + TableId;
    if (jquery_min_p(divid).hasClass('active')) {
        jquery_min_p(divid).removeClass('active');
    }
    else {
        jquery_min_p(divid).addClass('active');
    }


}

function AssignNewTable() {


    var Orderid = jquery_min_p("#lblorderid").val();
    restroid = jquery_min_p("#lblrestroid").text();
    //alert(Orderid);
    var TableDataX = "<dtXml>";
    var flag = 0;
    $('#sourceFields .sectionBox').each(function (e) {
        if ($(this).hasClass('active')) {
            flag = 1;
            TableDataX += "<dtXml ";
            var TableId = jquery_min_p(this)[0].id;
            TableDataX += 'TableId="' + TableId + '" ';

            TableDataX += " />";


        }

    });
    TableDataX += "</dtXml>";

    // alert(TableDataX)

    if (flag == 1) {
        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/RunningOrder/AssignNewTable",
            data: "{'restroid':'" + restroid + "','TableDataX':'" + TableDataX + "','Orderid':'" + Orderid + "'}",
            dataType: "json",
            async: false,
            success: function (result) {

                var i = 0;
                var jsonData = result;
                var ArrayCount = result.length;

                if (ArrayCount > 0) {

                    jquery_min_p('#Tableshift').modal('hide');

                }

                jquery_min_p('#popupsuccess').text('Table Shifted Successfully');
                jquery_min_p('#savePopup').modal('show');

            },

            error: function () {
            }
        });

    }
    else {
        //alert('please select table ');
        jquery_min_p('#h6warning').text('Please Select Table First');
        jquery_min_p('#dngwarn').modal('show');
    }
}


function Action_Click(orderitemsId, itemstatus, itemname) {
    var id = jquery_min_p("#lblid").val();
    var ordernumber = jquery_min_p("#lblordernumber").val();
    var ordertypeid = jquery_min_p("#lblordertypeid").val();


    var itemstatus = itemstatus;
    var orderitemsId = orderitemsId;
    //alert(itemstatus);



    if (itemstatus != 'Bumped') {
        jquery_min_p('#h6warning').text('Item Status Is not Bumped');
        jquery_min_p('#dngwarn').modal('show');
    }

    else {
        var check = '';
        jquery_min_p('#hconfirm').text('Would You Like To Delivered ' + itemname + '!');
        jquery_min_p('#confirmationPopup').modal('show');

        jquery_min_p('#yesBtn').click(function () {

            jquery_min_p('#confirmationPopup').modal('hide');



            jquery_min_p.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/RunningOrder/Action_Click",
                data: "{'restroid':'" + restroid + "','orderitemsId':'" + orderitemsId + "'}",
                dataType: "json",
                async: false,
                success: function (result) {

                    var i = 0;
                    var jsonData = result;
                    var ArrayCount = result.length;

                    if (ArrayCount > 0) {

                        jquery_min_p('#popupsuccess').text(itemname + 'Is Delivered');
                        jquery_min_p('#savePopup').modal('show');
                        //BindRunningOrder();
                        BindOrderDetail(id, ordernumber, ordertypeid);
                    }
                    else {
                        alert('Error');
                    }
                },

                error: function () {
                }
            });

        });


        jquery_min_p('#noBtn').click(function () {
            jquery_min_p('#confirmationPopup').modal('hide');

        });


    }


}

function BillHistory(date) {

    var date = date;

    restroid = jquery_min_p("#lblrestroid").text();

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/RunningOrder/BillHistory",
        data: "{'date':'" + date + "','restroid':'" + restroid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsonData = result;
            var ArrayCount = result.length;
            var Query = "";
            jquery_min_p("#tblbillhistoryDetail tbody tr").remove();
            if (jsonData.length > 0) {



                for (var i = 0; i < jsonData.length; i++) {
                    Query = Query + "<tr  onclick='BillHistoryCustDetails(" + jsonData[i].orderid + "); ManagerAccess();'>";
                    Query = Query + "<td>" + jsonData[i].orderno + "</td>";
                    Query = Query + "<td>" + jsonData[i].InvoiceNo + "</td>";
                    Query = Query + "<td>" + jsonData[i].BillAmount + "</td>";
                    Query = Query + "<td>" + jsonData[i].Billtime + "</td>";
                    Query = Query + "<td>" + jsonData[i].EmpName + "</td>";
                    Query = Query + "<td>" + jsonData[i].OrderType + "</td>";
                    Query = Query + "<td>" + jsonData[i].tableNo + "</td>";
                    Query = Query + "<td>   <button type='button' class='btn btn-success btn-sm'>Print</button> </td>";
                  
                    Query = Query + "</tr>";

                }
                jquery_min_p("#tblbillhistoryDetail tbody").append(Query);
            }
            else {

                var markup = "<tr><td colspan='7'>'No Record Found..'</td></tr>";
                jquery_min_p("#tblbillhistoryDetail tbody").append(markup);
            }


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


function ManagerAccess() {


    //jquery_min_p("#manager").show();
    bootstrap_min_p("#manager").modal('show');
    jquery_min_p('#textaccesscode').val('');

    //jquery_min_p("#billhst").hide();
}

function Removeclass() {
    if (jquery_min_p('#txtBillDate').val() != '') {
        jquery_min_p('#txtBillDate').removeClass('validate');
    }
}



function BindPaymentPage() {
    var OrderNo = jquery_min_p("#lblOrderNo").text();

    var orderId = jquery_min_p("#lblorderid").val();

    restroid = jquery_min_p("#lblrestroid").text();



    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/RunningOrder/BindPaymentPage",
        data: "{'restroid':'" + restroid + "','orderId':'" + orderId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {

            var i = 0;
            var jsonData = result;
            orderId = jsonData;
            //  alert(orderId);

            window.location.href = "/SalesBilling/Payment/?orderId=" + orderId;


            var Query = "";



        },


        error: function () {
        }
    });


}


function btnaddnewitem() {
    var orderId = jquery_min_p("#lblorderid").val();
   // alert(orderId)
    //var orderidhold = jquery_min_p("#lblorderidhold").val();
    restroid = jquery_min_p("#lblrestroid").text();

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/RunningOrder/BindPaymentPage",
        data: "{'restroid':'" + restroid + "','orderId':'" + orderId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsonData = result;
            orderId = jsonData;

            if (checkOrderTypeId == '3') {
                if (IsHoldItem == 0) {
                    window.location.href = "/SalesBilling/TakeAway/?orderId=" + orderId;
                }
                else { window.location.href = "/SalesBilling/TakeAway/?OrderId=" + orderId; }


            }
            else {
                if (IsHoldItem == 0) {
                    window.location.href = "/SalesBilling/DineInTakeAway/?orderId=" + orderId;
                }
                else { window.location.href = "/SalesBilling/DineInTakeAway/?OrderId=" + orderId; }
            }
        },
        error: function () {
        }
    });


}


function btndeliver_Click(id) {


    restroid = jquery_min_p("#lblrestroid").text();
    var orderid = id;



    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/RunningOrder/btndeliver_Click",
        data: "{'orderid':'" + orderid + "','restroid':'" + restroid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsonData = result;
            var ArrayCount = result.length;
            if (ArrayCount > 0) {
                var orderid = result[0].orderId;
                var orderNo = result[0].orderId;
                var orderTypeId = result[0].ordertypeId;

                jquery_min_p('#popupsuccess').text('Orders Delivered Successfully');
                jquery_min_p('#savePopup').modal('show');

                BindOrderDetail(orderid, orderNo, orderTypeId);


            }
            else {
                alert('Error')
            }


        },



        error: function () {
        }
    });


}



//function BillHistoryCustDetails1(OrderId) {


//    /// restroid
//    // date
//    var date = jquery_min_p("#txtBillDate").val();
//    //alert(restroid + "  " + OrderId + "  "+date + "  ")
//    jquery_min_p.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "/RunningOrder/BillHistoryCustDetails",
//        data: "{'restroid':'" + restroid + "','OrderId':'" + OrderId + "','date':'" + date + "'}",
//        dataType: "json",
//        async: false,
//        success: function (result) {
//             jquery_min_p("#billhistorytbl tbody").html(""); 
            
//            var i = 0;
//            var jsonData1 = result.Table;
//            var jsonData2 = result.Table1;
//            var jsonData3 = result.Table2;
//            var jsonData4 = result.Table3;
//            var jsonData5 = result.Table4;
//            var jsonData6 = result.Table5;

//            var Query = "";
//            for (var i = 0; i < jsonData1.length; i++) {

//                if (jsonData1[i].ISammend == "1") {


//                    Query = Query + "<tr class='grdactive strikeout'>";
//                    //Query = Query + "<tr class='strikeout'>";
//                }
//                else {
//                    Query = Query + "<tr>";
//                }
//                Query = Query + "<td style='display:none'>" + jsonData1[i].orderId + "</td>";
//                Query = Query + "<td style='display:none'>" + jsonData1[i].itemtax + "</td>";
//                Query = Query + "<td width='32%'>" + jsonData1[i].ItemName + "</td>";
//                Query = Query + "<td>" + jsonData1[i].Quantity + "</td>";
//                Query = Query + "<td>" + jsonData1[i].KOTId + "</td>";
              
//                Query = Query + "<td>" + jsonData1[i].itemPrice + "</td>";
//                //Query = Query + "<td><button type='button' class='btn btn-success btn-sm'>Return</button></td>";
//               // Query = Query + "<td><i class='fa fa-arrow-circle-right' aria-hidden='true' style='cursor: pointer;font-size: 15px;'></i></td>";

//                Query = Query + "</tr>";

//            }
//            var SubTotal = 0;
//            var taxAmount = jsonData2[0].tax;
//            // var OrderNo = jsonData4[0].OrderNo;
//            for (var j = 0; j < jsonData1.length; j++) {
//                SubTotal = SubTotal + jsonData1[j].itemPrice;
//            }

//            var balance = SubTotal + taxAmount;
//            var total = balance;





//            var billno = jsonData5[0].InvoiceNo;
//            var tableNo = jsonData5[0].tableNo;
//            var OrderType = jsonData5[0].OrderType;
//            var OrderNo = jsonData4[0].OrderNo;
//            var Memberno = jsonData1[0].MemberNo;
//            var date = jsonData5[0].DatePart;
//            var time = jsonData5[0].TimePart;
//            var vat = jsonData2[0].tax;
//            var discount = jsonData6[0].discountAmount;

//            //lblinvoicesalesreturn

//            jquery_min_p("#lblinvoicesalesreturn").text(billno);

//            jquery_min_p("#lblbillno").text(billno);
//            jquery_min_p("#lbltableno").text(tableNo);
//            jquery_min_p("#lbltype").text(OrderType);
//            jquery_min_p("#lblorderno").text(OrderNo);
//            jquery_min_p("#lblmemberno").text(Memberno);
//            jquery_min_p("#lbldate").text(date);
//            jquery_min_p("#lbltime").text(time);

//            jquery_min_p("#lblvat").text(vat);
//            jquery_min_p("#lbltotalamount").text(balance);
//            jquery_min_p("#lbldiscount").text(discount);




//            jquery_min_p("#txtvat").text(taxAmount);

//            jquery_min_p("#txttotal").text(balance);


//            jquery_min_p("#txtdue").val(balance);




//            jquery_min_p("#txtdue").attr("disabled", "disabled");
//            jquery_min_p("#txtbalance").val(parseInt(balance).toFixed(2));
//            jquery_min_p("#txtbalance").attr("disabled", "disabled");
//            jquery_min_p("#billhistorytbl tbody").append(Query); 
            
//            jquery_min_p("#preloader").css('display', 'none');
//            jquery_min_p("#Overlay_Load").css('visibility', 'hidden');

//            jquery_min_p("#billhistory").css('display', 'block');

            
//            var temptax = 0;
//            var tempprice = 0;
           

//            jquery_min_p("#spitempricesr").text(tempprice.toFixed(3));
//            jquery_min_p("#spitemvatsr").text(temptax.toFixed(3));
//            jquery_min_p("#sptotalsr").text(total.toFixed(3));

//        },

//        beforesend: function () {
//            // jquery_min_p("#preloader").css('display', 'block');
//            //jquery_min_p("#Overlay_Load").css('visibility', 'visible');

//        },


//        error: function () {
//        }
//    });



//}



function BillHistoryCustDetails(OrderId)
{
    

   /// restroid
    // date
    
    var date = jquery_min_p("#txtBillDate").val();
    //alert(restroid + "  " + OrderId + "  "+date + "  ")
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/RunningOrder/BillHistoryCustDetails",
        data: "{'restroid':'" + restroid + "','OrderId':'" + OrderId + "','date':'" + date + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
           // jquery_min_p("#billhistorytbl tbody").html(""); //tblsalesreturn
            jquery_min_p("#tblsalesreturn tbody").html("");
            var i = 0;
            var jsonData1 = result.Table;
            var jsonData2 = result.Table1;
            var jsonData3 = result.Table2;
            var jsonData4 = result.Table3;
            var jsonData5 = result.Table4;
            var jsonData6 = result.Table5;

            var Query = "";
            for (var i = 0; i < jsonData1.length; i++) {

                if (jsonData1[i].ISammend == "1") {


                    Query = Query + "<tr style='display:none' class='grdactive strikeout'>";
                    //Query = Query + "<tr class='strikeout'>";
                }
                else {
                    Query = Query + "<tr  onClick='AddClassSalesReturn(this," + i + ");'>";
                }
                Query = Query + "<td style='display:none'>" + jsonData1[i].orderId + "</td>";
                Query = Query + "<td style='display:none'>" + jsonData1[i].itemtax + "</td>";
                Query = Query + "<td width='32%'>" + jsonData1[i].ItemName + "</td>";
                Query = Query + "<td>" + jsonData1[i].Quantity + "</td>";
                //Query = Query + "<td>" + jsonData1[i].KOTId + "</td>";
                //Query = Query + "<td><div class='row'><i class='fa fa-plus-circle mr-1' style='cursor: pointer;'></i><span>2</span><i class='fa fa-minus-circle' style='cursor: pointer;'></i></div></td>";
                Query = Query + "<td ><i class='fa fa-plus-circle' aria-hidden='true' onClick='IncsalesTable(this," + jsonData1[i].Quantity + "," + i + ")'></i></td>";
                Query = Query + "<td><input type='text' class='form-control' value='0'  id='txtqnty" + i + "' onblur=BindText(this," + i + "," + jsonData1[i].Quantity + ")></td>";
                Query = Query + "<td><i class='fa fa-minus-circle' aria-hidden='true' onClick='DecsalesTable(this," + jsonData1[i].Quantity + "," + i + ")' ></i></td>";

                Query = Query + "<td>" + jsonData1[i].itemPrice + "</td>";
                Query = Query + "<td style='display:none'>" + jsonData1[i].Quantity + "</td>";
                Query = Query + "<td style='display:none'>" + jsonData1[i].itemPrice + "</td>";
                Query = Query + "<td style='display:none'>" + jsonData1[i].itemId + "</td>";
                Query = Query + "<td style='display:none'>" + jsonData6[i].billItemId + "</td>";
                Query = Query + "<td style='display:none'>" + jsonData1[i].itemtax + "</td>";
                //Query = Query + "<td style='display:none'>" + jsonData6[i].itemPrice + "</td>";
               // Query = Query + "<td style='display:none'>" + jsonData6[i].billItemId + "</td>";
                //Query = Query + "<td><button type='button' class='btn btn-success btn-sm'>Return</button></td>";
                Query = Query + "<td><i class='fa fa-arrow-circle-right' aria-hidden='true' style='cursor: pointer;font-size: 15px;'onclick='BindSalesAfterReturn(this," + i + ")' ></i></td>";

                Query = Query + "</tr>";

            }
            var SubTotal = 0;
            var taxAmount = jsonData2[0].tax;
           // var OrderNo = jsonData4[0].OrderNo;
            for (var j = 0; j < jsonData1.length; j++) {
                SubTotal = SubTotal + jsonData1[j].itemPrice;
            }
            
            var balance = SubTotal + taxAmount;
            var total = balance;





            var billno = jsonData5[0].InvoiceNo;
            //var tableNo = jsonData5[0].tableNo;
            //var OrderType = jsonData5[0].OrderType;
            //var OrderNo = jsonData4[0].OrderNo;
            //var Memberno = jsonData1[0].MemberNo;
            //var date = jsonData5[0].DatePart;
            //var time = jsonData5[0].TimePart;
            //var vat = jsonData2[0].tax;
            //var discount = jsonData6[0].discountAmount;
           
            //lblinvoicesalesreturn

            jquery_min_p("#lblinvoicesalesreturn").text(billno);

            //jquery_min_p("#lblbillno").text(billno);
            //jquery_min_p("#lbltableno").text(tableNo);
            //jquery_min_p("#lbltype").text(OrderType);
            //jquery_min_p("#lblorderno").text(OrderNo);
            //jquery_min_p("#lblmemberno").text(Memberno);
            //jquery_min_p("#lbldate").text(date);
            //jquery_min_p("#lbltime").text(time);

            //jquery_min_p("#lblvat").text(vat);
            //jquery_min_p("#lbltotalamount").text(balance);
            //jquery_min_p("#lbldiscount").text(discount);




            //jquery_min_p("#txtvat").text(taxAmount);
            
            //jquery_min_p("#txttotal").text(balance);
            

            //jquery_min_p("#txtdue").val(balance);




            jquery_min_p("#txtdue").attr("disabled", "disabled");
            jquery_min_p("#txtbalance").val(parseInt(balance).toFixed(2));
            jquery_min_p("#txtbalance").attr("disabled", "disabled");
            //jquery_min_p("#billhistorytbl tbody").append(Query); //tblsalesreturn
            jquery_min_p("#tblsalesreturn tbody").append(Query);
            jquery_min_p("#preloader").css('display', 'none');
            jquery_min_p("#Overlay_Load").css('visibility', 'hidden');
            
            
            jquery_min_p("#billhistory").css('display', 'block');

            // tblsalesreturn
            var temptax = 0;
            var tempprice = 0;
            jquery_min_p("#tblsalesreturn tbody tr").each(function () {


                rowB = jquery_min_p(this).closest('tr');
                itemtax = rowB.find('td:nth-child(2)').text().trim();
                itemprice = rowB.find('td:nth-child(8)').text().trim();
                var actqnty = rowB.find('td:nth-child(4)').text().trim();
                var qnty = rowB.find('input').val();
                if (actqnty == '0' && qnty == '0' && itemprice == '0') {

                    
                    jquery_min_p(this).removeClass("active");
                    jquery_min_p(this).addClass("disable");


                }
                
                temptax = parseFloat(temptax) + parseFloat(itemtax);
                tempprice = parseFloat(tempprice) + parseFloat(itemprice);
            })

            var total = temptax + tempprice;

            
            jquery_min_p('#btnSalesReturn').addClass("disable");  //btnsalesreturnprint
            jquery_min_p('#btnsalesreturnprint').addClass("disable");
            jquery_min_p('#btnsalesreturncancel').addClass("disable");
            jquery_min_p("#spitempricesr").text(tempprice.toFixed(3));
            jquery_min_p("#spitemvatsr").text(temptax.toFixed(3));
            jquery_min_p("#sptotalsr").text(total.toFixed(3));


            


            jquery_min_p("#tblsalesreturn tbody tr").each(function () {
                if (jquery_min_p(this).hasClass('grdactive')) {

                    row1 = jquery_min_p(this).closest('tr');
                    //alert(row);
                    row1.remove();
                }

            });








        },

        beforesend: function () {
           // jquery_min_p("#preloader").css('display', 'block');
            //jquery_min_p("#Overlay_Load").css('visibility', 'visible');

        },


        error: function () {
        }
    });



}

function IncsalesTable(data, qnty, i) {

    var row = jquery_min_p(data).closest('tr');
   // var qty = row.find('input').val();
    //++qty;
    //alert(qty)
   // var Qty = row.find('td:nth-child(6)').text().trim();
    var Qty = row.find('input').val();
    var ActQty = row.find('td:nth-child(4)').text().trim();
    var Actamount = row.find('td:nth-child(8)').text().trim();

    if (ActQty <= 0) {
        jquery_min_p('#h6warning').text('Cannot Increament More');
        jquery_min_p('#dngwarn').modal('show');
    }
    else {

        
        var Iamnt = ((parseFloat(1) / parseFloat(ActQty)) * (parseFloat(Actamount)));
        
        
        var Iactqty = parseFloat(Actamount) - parseFloat(Iamnt);
        //row.find('td:nth-child(5)').text(Iactqty);


        Qty = parseInt(Qty) + 1;
        ActQty = parseInt(ActQty) - 1;

        row.find('td:nth-child(8)').text(Iactqty);
        //row.find('td:nth-child(6)').text(Qty);
        // row.find('input').val(Qty);
        jquery_min_p('#txtqnty' + i + '').val(Qty);
        row.find('td:nth-child(4)').text(ActQty);




    }

    jquery_min_p("#tblsalesreturn tbody tr").each(function () {
        jquery_min_p(this).removeClass('active');

    })


}

function DecsalesTable(data, qnty, i) {

    var row = jquery_min_p(data).closest('tr');
    
   
    var Qty = row.find('input').val();
    var ActQty = row.find('td:nth-child(4)').text().trim();
    var Actamount = row.find('td:nth-child(8)').text().trim();
    var HActQty = row.find('td:nth-child(9)').text().trim();
    var HActamount = row.find('td:nth-child(10)').text().trim();
    var dec = ActQty;
    ++dec;

    if (Qty <= 0) {
        jquery_min_p('#h6warning').text('Cannot Increament More');
        jquery_min_p('#dngwarn').modal('show');
    }
    else {


        var Iamnt = ((parseFloat(dec) / parseFloat(HActQty)) * (parseFloat(HActamount)));


        //var Iactqty = parseFloat(ActAmount) - parseFloat(Iamnt);
        //row.find('td:nth-child(5)').text(Iactqty);


        Qty = parseInt(Qty) - 1;
        ActQty = parseInt(ActQty) + 1;

        row.find('td:nth-child(8)').text(Iamnt);
        //row.find('td:nth-child(6)').text(Qty);
        //row.find('input').val(Qty);
        jquery_min_p('#txtqnty' + i + '').val(Qty);
        row.find('td:nth-child(4)').text(ActQty);




    }



}

function AddClassSalesReturn(data,i)
{
    //qtyproc = jquery_min_p(data).closest('tr');
    var itmprice = jquery_min_p('#spitempricesr').text();
    if (IsActiveFlag == 0)
    {
    jquery_min_p("#tblsalesreturn tbody tr").each(function () {
        //jquery_min_p(this).removeClass('active');spitempricesr
        
        

            row1 = jquery_min_p(this).closest('tr');
            var actqnty = row1.find('td:nth-child(4)').text().trim();
            var qnty = row1.find('input').val();
            var amnt = row1.find('td:nth-child(8)').text().trim();

            if (actqnty == '0' && qnty == '0' && amnt == '0') {


                jquery_min_p(this).removeClass("active");
                jquery_min_p(this).addClass("disable");


    }
    else {
                jquery_min_p(this).removeClass('active');
                jquery_min_p(data).addClass('active');
                //alert('class added');
    }
            
    })
    }
    IsActiveFlag = 0;
   // jquery_min_p(data).addClass('active');
}







function BindSalesAfterReturn(data,i)
{
    //jquery_min_p("#tblsalesafterreturn").css('display', 'none');
    jquery_min_p("#tblsalesafterreturn").css('display', 'block');

    IsActiveFlag = 1;
    var row = '';
    var n = '';
    var Qty = '';
    var HQty = '';
    var HAmount = '';
    var itemname = '';
    var itemtax = '';
    var itemid = '';
    var billitemid = '';
    var orderid = '';
    var Hitemtax = '';
    var amnt = '';
    var tax = '';




    jquery_min_p("#tblsalesreturn tbody tr").each(function () {
        if (jquery_min_p(this).hasClass('active')) {

            row = jquery_min_p(this).closest('tr');
            //alert(row); closest
             n = 0;
            Qty = row.find('input').val();
             HQty = row.find('td:nth-child(9)').text().trim();
             HAmount = row.find('td:nth-child(10)').text().trim();
             itemname = row.find('td:nth-child(3)').text().trim();//check
             itemtax = row.find('td:nth-child(2)').text().trim();
             itemid = row.find('td:nth-child(11)').text().trim();
             billitemid = row.find('td:nth-child(12)').text().trim();
             orderid = row.find('td:nth-child(1)').text().trim();
             Hitemtax = row.find('td:nth-child(13)').text().trim();
             amnt = ((parseFloat(Qty) / parseFloat(HQty)) * (parseFloat(HAmount))).toFixed(3);
             tax = ((parseFloat(Qty) / parseFloat(HQty)) * (parseFloat(itemtax))).toFixed(3);

        }




    });
    //var n = 0;
    //var Qty = row.find('input').val();
    //var HQty = row.find('td:nth-child(9)').text().trim();
    //var HAmount = row.find('td:nth-child(10)').text().trim();
    //var itemname = row.find('td:nth-child(3)').text().trim();//check
    //var itemtax = row.find('td:nth-child(2)').text().trim();
    //var itemid = row.find('td:nth-child(11)').text().trim();
    //var billitemid = row.find('td:nth-child(12)').text().trim();
    //var orderid = row.find('td:nth-child(1)').text().trim();
    //var Hitemtax = row.find('td:nth-child(13)').text().trim();
    //var amnt = ((parseFloat(Qty) / parseFloat(HQty)) * (parseFloat(HAmount))).toFixed(3);
    //var tax = ((parseFloat(Qty) / parseFloat(HQty)) * (parseFloat(itemtax))).toFixed(3);
   

    if ((jquery_min_p("#tblsalesafterreturn tbody tr").length > 0)) {


        var spiprice = jquery_min_p("#spitempricesr").text();
       // alert(spiprice)  //amntb

        //var stotalamntB = jquery_min_p("#lblbitemprice").text();
        //alert(amnt)
        var stprice = parseFloat(spiprice) - parseFloat(amnt);
        //alert(stprice)
        jquery_min_p("#spitempricesr").text(stprice.toFixed(3));


        var spitax = jquery_min_p("#spitemvatsr").text();
        var sttax = parseFloat(spitax) - parseFloat(tax);
        jquery_min_p("#spitemvatsr").text(sttax.toFixed(3));

        var stotalB = stprice + sttax;
        jquery_min_p("#sptotalsr").text(stotalB.toFixed(3));


        checkItemNameSR(i, itemname, Qty, amnt, tax);
        if (IsCountSR == '1') {

            //var q = parseInt(Qty) + parseInt(QtyB);

            //rowB.find('td:nth-child(2)').text(q);
            // countB = 1;

            jquery_min_p("#tblsalesreturn tbody tr").each(function () {

                if (jquery_min_p(this).hasClass('active')) {

                    row = jquery_min_p(this).closest('tr');
                   // row.find('td:nth-child(6)').text(0);
                    row.find('input').val(0);
                    jquery_min_p(this).removeClass('active');


                    // row1 = jquery_min_p(this).closest('tr');
                    var actqnty = row.find('td:nth-child(4)').text().trim();
                    //var qnty = row.find('input').val();
                    var qnty = row.find('input').val();
                    var amnt = row.find('td:nth-child(8)').text().trim();
                    // alert(actqnty + "" + qnty + "" + amnt)
                    if (actqnty == '0' && qnty == '0' && amnt == '0') {


                        jquery_min_p(this).removeClass("active");
                        jquery_min_p(this).addClass("disable");

                    }

                }

            });

        }


        else {
            if (IsCountSR == '0') {
                if (Qty == '0') {
                    

                        jquery_min_p('#hwarning').text('Please increament the Quantity');
                        jquery_min_p('#WarningPopup').modal('show');

                        jquery_min_p("#tblsalesafterreturn").css('display', 'block');
                        jquery_min_p('#btnSalesReturn').addClass("disable");  //btnsalesreturnprint
                        jquery_min_p('#btnsalesreturnprint').addClass("disable");
                        jquery_min_p('#btnsalesreturncancel').addClass("disable");
                    
                }

                else {

                    var Query = "";
                    // var amnt = ((parseFloat(Qty) / parseFloat(totalqty)) * (parseFloat(Amount))).toFixed(3);
                    var amnt = ((parseFloat(Qty) / parseFloat(HQty)) * (parseFloat(HAmount))).toFixed(3);
                    Query = Query + "<tr onClick='AddClassB(this," + i + ");' id='trshowitemsplit" + i + "'>";
                    Query = Query + "<td style='width:32%;'>" + itemname + "</td>";
                    Query = Query + "<td style='width:32%;' id='tdspbillitem" + i + "'>" + Qty + "</td>";
                    Query = Query + "<td style='width:32%;'>" + amnt + "</td>";
                    Query = Query + "<td   style='display:none'>" + tax + "</td>";
                    Query = Query + "<td   style='display:none'>" + itemid + "</td>";
                    Query = Query + "<td   style='display:none'>" + billitemid + "</td>";
                    Query = Query + "<td   style='display:none'>" + orderid + "</td>";
                    Query = Query + "<td   style='display:none'>" + HQty + "</td>";
                    Query = Query + "<td   style='display:none'>" + HAmount + "</td>";
                    Query = Query + "<td   style='display:none'>" + Hitemtax + "</td>";
                    Query = Query + "</tr>";
                    // var id = "#splitbilltable" + i;   dvsplititemwise orderid Hitemtax


                    jquery_min_p("#tblsalesafterreturn tbody").append(Query);
                    //jquery_min_p("#splitbilltable" + i + "").css('display', 'block');
                    jquery_min_p('#btnSalesReturn').removeClass("disable");  //btnsalesreturnprint
                    jquery_min_p('#btnsalesreturnprint').removeClass("disable");
                    jquery_min_p('#btnsalesreturncancel').removeClass("disable");
                    jquery_min_p("#tblsalesreturn tbody tr").each(function () {

                        if (jquery_min_p(this).hasClass('active')) {

                            row = jquery_min_p(this).closest('tr');
                            // row.find('td:nth-child(4)').text(0);
                            row.find('input').val(0);
                            //row.find('td:nth-child(6)').text(0);
                            jquery_min_p(this).removeClass('active');


                            var actqnty = row.find('td:nth-child(4)').text().trim();
                            //var qnty = row.find('input').val();
                            var qnty = row.find('input').val();
                            var amnt = row.find('td:nth-child(8)').text().trim();
                            //alert(actqnty + "" + qnty + "" + amnt)
                            if (actqnty == '0' && qnty == '0' && amnt == '0') {


                                jquery_min_p(this).removeClass("active");
                                jquery_min_p(this).addClass("disable");

                            }


                        }


                    });


                }

            }
        }




    }

    else {
        if (Qty == '0') {
            
                // row.remove();
            

                jquery_min_p('#hwarning').text('Please increament the Quantity');
                jquery_min_p('#WarningPopup').modal('show');
                jquery_min_p("#tblsalesafterreturn").css('display', 'none');

                jquery_min_p('#btnSalesReturn').addClass("disable");  //btnsalesreturnprint
                jquery_min_p('#btnsalesreturnprint').addClass("disable");
                jquery_min_p('#btnsalesreturncancel').addClass("disable");


        }


        else {

            var spiprice = jquery_min_p("#spitempricesr").text();
            //alert(spiprice)  //amntb

            //var stotalamntB = jquery_min_p("#lblbitemprice").text();
           // alert(amnt)
            var stprice = parseFloat(spiprice) - parseFloat(amnt);
           // alert(stprice)
            jquery_min_p("#spitempricesr").text(stprice.toFixed(3));


            var spitax = jquery_min_p("#spitemvatsr").text();
            var sttax = parseFloat(spitax) - parseFloat(tax);
            jquery_min_p("#spitemvatsr").text(sttax.toFixed(3));

            var stotalB = stprice + sttax;
            jquery_min_p("#sptotalsr").text(stotalB.toFixed(3));




            var Query = "";
            //var amnt = ((parseFloat(Qty) / parseFloat(totalqty)) * (parseFloat(Amount))).toFixed(3);
            var amnt = ((parseFloat(Qty) / parseFloat(HQty)) * (parseFloat(HAmount))).toFixed(3);
            Query = Query + "<tr onClick='AddClassB(this," + i + ");' id='trshowitemsplit" + i + "'>";
            Query = Query + "<td style='width:32%;' >" + itemname + "</td>";
            Query = Query + "<td style='width:32%;' id='tdspbillitem" + i + "'>" + Qty + "</td>";
            Query = Query + "<td style='width:32%;'>" + amnt + "</td>";
            Query = Query + "<td  style='display:none'>" + tax + "</td>";
            Query = Query + "<td   style='display:none'>" + itemid + "</td>";
            Query = Query + "<td   style='display:none'>" + billitemid + "</td>";
            Query = Query + "<td   style='display:none'>" + orderid + "</td>";
            Query = Query + "<td   style='display:none'>" + HQty + "</td>";
            Query = Query + "<td   style='display:none'>" + HAmount + "</td>";
            Query = Query + "<td   style='display:none'>" + Hitemtax + "</td>";
            Query = Query + "</tr>";
            // var id = "#splitbilltable" + i;   dvsplititemwise


            jquery_min_p("#tblsalesafterreturn tbody").append(Query);
            
            //jquery_min_p("#splitbilltable" + i + "").css('display', 'block');

            jquery_min_p('#btnSalesReturn').removeClass("disable");  //btnsalesreturnprint
            jquery_min_p('#btnsalesreturnprint').removeClass("disable");
            jquery_min_p('#btnsalesreturncancel').removeClass("disable");

            jquery_min_p("#tblsalesreturn tbody tr").each(function () {

                if (jquery_min_p(this).hasClass('active')) {

                    row = jquery_min_p(this).closest('tr');
                    row.find('input').val(0);
                    //row.find('td:nth-child(6)').text(0);
                    // row.find('td:nth-child(4)').text(0);
                    jquery_min_p(this).removeClass('active');


                    var actqnty = row.find('td:nth-child(4)').text().trim();
                  //  var qnty = row.find('input').val();
                    var qnty = row.find('input').val();
                    var amnt = row.find('td:nth-child(8)').text().trim();
                    // alert(actqnty + "" + qnty + "" + amnt)
                    if (actqnty == '0' && qnty == '0' && amnt == '0') {


                        jquery_min_p(this).removeClass("active");
                        jquery_min_p(this).addClass("disable");

                    }



                }

            });

        }

    }

    //RemoveRow();
    // totalqty--;



    var rowb = '';
    var totalamntB = 0;
    var BItemVat = 0;
    var totalvatB = 0;
    var totalB = 0;
    //var balamt = jquery_min_p("#txtsubtotal").text().trim();
    //var vat = jquery_min_p("#txtvat").text();


    var amntb = '';
    var itemtax = '';

    if (Qty != '0') {
        jquery_min_p("#tblsalesafterreturn tbody tr").each(function () {
           // if (jquery_min_p(this).hasClass('active')) 
                rowb = jquery_min_p(this).closest('tr');
                //row.find('td:nth-child(4)').text(0);




                // row1 = jquery_min_p(this).closest('tr');
                (amntb) = rowb.find('td:nth-child(3)').text().trim();

                itemtax = rowb.find('td:nth-child(4)').text().trim();

               // var tax = ((parseFloat(Qty) / parseFloat(HQty)) * (parseFloat(itemtax))).toFixed(3);

                totalamntB = parseFloat(totalamntB) + parseFloat(amntb);


                totalvatB = parseFloat(totalvatB) + parseFloat(itemtax);
                //alert(itemtax)
                // totalvatB = parseFloat(totalvatB) + parseFloat(BsplitItemVat);
                // alert(BsplitItemVat)
            
        });
        //alert(totalvatB)
        totalB = totalamntB + totalvatB;
        jquery_min_p("#lblbitemprice").text(totalamntB.toFixed(3)); 
        //alert(BsplitItemVat)
        jquery_min_p("#lblbitemvat").text((totalvatB).toFixed(3));
        jquery_min_p("#lblbtotal").text((totalB).toFixed(3));


        //var spiprice = jquery_min_p("#spitempricesr").text();
        //alert(spiprice)  //amntb
       
        ////var stotalamntB = jquery_min_p("#lblbitemprice").text();
        // alert(amntb)
        //var stprice = parseFloat(spiprice) - parseFloat(amntb);
        //alert(stprice)
        //jquery_min_p("#spitempricesr").text(stprice.toFixed(3));


        //var spitax = jquery_min_p("#spitemvatsr").text();
        //var sttax = parseFloat(spitax) - parseFloat(itemtax);
        //jquery_min_p("#spitemvatsr").text(sttax.toFixed(3));

        //var stotalB = stprice + sttax;
        //jquery_min_p("#sptotalsr").text(stotalB.toFixed(3));

    }
    
    

    //jquery_min_p("#tblsalesafterreturn").css('display', 'block');

    //jquery_min_p("#tblsalesreturn tbody tr").each(function () {
    //    jquery_min_p(this).removeClass('active');
       
    //})

    

    //jquery_min_p("#tblsalesreturn tbody tr").each(function () {

    //    // jquery_min_p(this).removeClass('active');
    //   // jquery_min_p("#tblsalesafterreturn").css('display', 'none');

    //    row1 = jquery_min_p(this).closest('tr');
    //    var actqnty = row1.find('td:nth-child(4)').text().trim();
    //    var qnty = row1.find('input').val();
    //    var amnt = row1.find('td:nth-child(8)').text().trim();

    //    if (actqnty == '0' && qnty == '0' && amnt == '0') {


    //        jquery_min_p(this).removeClass("active");
    //         jquery_min_p(this).addClass("disable");

    //    }
    //    else {
    //        jquery_min_p(this).removeClass('active');
    //        jquery_min_p(data).addClass('active');
    //    }
    //})
}


function checkItemNameSR(i, itemname, Qty, amnt,tax) {
    IsCountSR = 0;
    var itemnameB = '';
    var QtyB = '';
    var rowB = '';
    var countB = '0';
    var ScountB = '0';

    jquery_min_p("#tblsalesafterreturn tbody tr").each(function () {


        rowB = jquery_min_p(this).closest('tr');
        itemnameB = rowB.find('td:nth-child(1)').text().trim();
        QtyB = rowB.find('td:nth-child(2)').text().trim();
        amountB = rowB.find('td:nth-child(3)').text().trim();
        taxB = rowB.find('td:nth-child(4)').text().trim();

        if ((itemname == itemnameB) && Qty != 0) {



            var q = parseInt(Qty) + parseInt(QtyB);
            var am = parseInt(amnt) + parseInt(amountB);
            var tx = parseFloat(tax) + parseFloat(taxB);
           // alert(tax + '' + taxB)

            rowB.find('td:nth-child(2)').text(q);
            rowB.find('td:nth-child(3)').text(am);
            rowB.find('td:nth-child(4)').text(tx);
            IsCountSR = 1;

        }

    });


    jquery_min_p("#tblsalesafterreturn").css('display', 'block');
}

function AddClassB(data,i)
{
    

    jquery_min_p("#tblsalesafterreturn tbody tr").each(function () {


            jquery_min_p(this).removeClass('active');



        });
        jquery_min_p(data).addClass('active');

    }



function BindReverseOrderSR()
{
    var row1 = "";
    


    var i=1
   
    var j = 0;
    

    jquery_min_p("#tblsalesafterreturn tbody tr").each(function () {
        if (jquery_min_p(this).hasClass('active')) {
           
            row1 = jquery_min_p(this).closest('tr');
            
        }
       
    });



    var n = 0;
    var stvat = 0;
    var itemname = row1.find('td:nth-child(1)').text().trim();
    var Qty = row1.find('td:nth-child(2)').text().trim();
    var amount = row1.find('td:nth-child(3)').text().trim();
    var itemtax = row1.find('td:nth-child(4)').text().trim();
    
    
    //var balamt = jquery_min_p("#txtsubtotal").text().trim();
    //var vat = jquery_min_p("#txtvat").text();
    //var splitItemVat = ((vat * amount) / balamt).toFixed(3);
   


    checkMainItemName(itemname, Qty, amount);
    //var tempamnt = jquery_min_p("#lblspbillitem" + IsActiveBill + "").text();
    //var tempvat = jquery_min_p("#lblspbillitemvat" + IsActiveBill + "").text();
    //stamnt = tempamnt - amount;
    //stvat = tempvat - splitItemVat;
    //if (stamnt >= 0) {
    //    jquery_min_p("#lblspbillitem" + IsActiveBill + "").text(stamnt.toFixed(3));
    //}

    //if (stvat >= 0) {
    //    jquery_min_p("#lblspbillitemvat" + IsActiveBill + "").text(stvat.toFixed(3));
    //}
    var iprice = jquery_min_p("#lblbitemprice").text();
   // alert(iprice)
    var totalamntB = parseFloat(iprice) - parseFloat(amount);
   // alert(totalamntB)
    jquery_min_p("#lblbitemprice").text(totalamntB.toFixed(3));

    var itax = jquery_min_p("#lblbitemvat").text();
    var totalvatB = parseFloat(itax) - parseFloat(itemtax);
    jquery_min_p("#lblbitemvat").text((totalvatB).toFixed(3));


    var totalB = totalamntB + totalvatB;
    jquery_min_p("#lblbtotal").text((totalB).toFixed(3));



    var spiprice = jquery_min_p("#spitempricesr").text();
    var stprice = parseFloat(spiprice) + parseFloat(amount);
    jquery_min_p("#spitempricesr").text(stprice.toFixed(3));


    var spitax = jquery_min_p("#spitemvatsr").text();
    var sttax = parseFloat(spitax) + parseFloat(itemtax);
    jquery_min_p("#spitemvatsr").text(sttax.toFixed(3));

    var stotalB = stprice + sttax;
    jquery_min_p("#sptotalsr").text(stotalB.toFixed(3));

       row1.remove();
    // ++BrCount; thead
        
    jquery_min_p("#tblsalesafterreturn tbody").each(function () {

        var Rcount = jquery_min_p("#tblsalesafterreturn tbody tr").length;
            // alert(Rcount)
          //  ++j;
            if ((Rcount) <= 0) {
                //splitbilltable1
                //jquery_min_p("#splitbilltable" + i + "").css('display', 'none');
                jquery_min_p("#tblsalesafterreturn").css('display', 'none');
            }

            //if (j < scount) {
            //    ++i;
            //}
        });

    var amntb = '';
    var itemtax = '';
   
    if ((jquery_min_p("#tblsalesafterreturn tbody tr").length > 0)) {
        

        jquery_min_p('#btnSalesReturn').removeClass("disable");  //btnsalesreturnprint btnsalesreturncancel
        jquery_min_p('#btnsalesreturnprint').removeClass("disable");
        jquery_min_p('#btnsalesreturncancel').removeClass("disable");
    }
    else {

        jquery_min_p('#btnSalesReturn').addClass("disable");  //btnsalesreturnprint
        jquery_min_p('#btnsalesreturnprint').addClass("disable");
        jquery_min_p('#btnsalesreturncancel').addClass("disable");
    }



       
}






function checkMainItemName(itemname, Qty, amnt) {
    // Iscount = 0;
    var itemnameB = '';
    var QtyB = '';
    var rowB = '';
    var countB = '0';
    var ScountB = '0';

    jquery_min_p("#tblsalesreturn tbody tr").each(function () { 


        rowB = jquery_min_p(this).closest('tr');
        itemnameB = rowB.find('td:nth-child(3)').text().trim();
        QtyB = rowB.find('td:nth-child(4)').text().trim();
        amountB = rowB.find('td:nth-child(8)').text().trim();




        if ((itemname == itemnameB)) {

            var q = parseInt(Qty) + parseInt(QtyB);
            var am = parseInt(amnt) + parseInt(amountB);

            rowB.find('td:nth-child(4)').text(q);
            rowB.find('td:nth-child(8)').text(am);
            Iscount = 1;




        }



        jquery_min_p("#tblsalesreturn tbody tr").each(function () {


            rowB = jquery_min_p(this).closest('tr');
           // itemnameB = rowB.find('td:nth-child(2)').text().trim();
            QtyB = rowB.find('td:nth-child(4)').text().trim();
            amountB = rowB.find('td:nth-child(8)').text().trim();
            //alert(QtyB)
            if (QtyB != 0 || amountB != 0) {
                jquery_min_p(this).removeClass("disable");
            }
        });


    });



    //jquery_min_p("#splittable tbody tr").each(function () {


    //    rowB = jquery_min_p(this).closest('tr');
    //    itemnameB = rowB.find('td:nth-child(2)').text().trim();
    //    QtyB = rowB.find('td:nth-child(3)').text().trim();
    //    amountB = rowB.find('td:nth-child(5)').text().trim();
    //    //alert(QtyB)
    //    if (QtyB != 0 || amountB != 0) {
    //        jquery_min_p(this).removeClass("disable");
    //    }
    //});
    // jquery_min_p(this).removeClass("disable");
}


function BindText(data, i, rrqty) {
    //alert(rrqty)
    totalqty = rrqty;
    var row = jquery_min_p(data).closest('tr');

    var ActQty = row.find('td:nth-child(4)').text().trim();
    var ActAmount = row.find('td:nth-child(8)').text().trim();
    var qty = row.find('input').val();
    var HAmount = row.find('td:nth-child(10)').text().trim();
    var HQuanty = row.find('td:nth-child(9)').text().trim();
    var itemtax = row.find('td:nth-child(2)').text().trim();
    //alert(ActQty + " " + qty + " " + ActAmount)
    if (parseInt(ActQty) >= parseInt(qty)) {
        var actqty = ActQty - qty;
        row.find('td:nth-child(4)').text(actqty);


        var Bamnt = ((parseFloat(qty) / parseFloat(HQuanty)) * (parseFloat(HAmount))).toFixed(3);
        
        var Bactqty = parseFloat(ActAmount) - parseFloat(Bamnt);
        row.find('td:nth-child(8)').text(Bactqty);

        var Iamnt = ((parseFloat(1) / parseFloat(ActQty)) * (parseFloat(ActAmount))).toFixed(3);
        
    }
    else {
        jquery_min_p('#hwarning').text('Cannot be more than actual quantity');
        jquery_min_p('#WarningPopup').modal('show');
        
        row.find('input').val(0);
        return false;

    }

}


function SalesReturn() {

    var Invoiceno = jquery_min_p('#lblinvoicesalesreturn').text();
   // restroid;
    restroid = jquery_min_p("#lblrestroid").text();
    //alert(restroid)

    var TableXml = "<dtXml>";
    
    var flag = 0;
    //$('#sourceFields .sectionBox').each(function (e) {
    //    if ($(this).hasClass('active')) {
    //        flag = 1;
    //        TableXml += "<dtXml ";
    //        var TableId = jquery_min_p(this)[0].id;
    //        TableXml += 'TableId="' + TableId + '" ';

    //        TableXml += " />"; 


    //    }

    //});
    var rowB = "";
    jquery_min_p("#tblsalesafterreturn tbody tr").each(function () {
        rowB = jquery_min_p(this).closest('tr');
        itemname = rowB.find('td:nth-child(1)').text().trim();
        qty = rowB.find('td:nth-child(2)').text().trim();
        itemprice = rowB.find('td:nth-child(3)').text().trim();
        tax = rowB.find('td:nth-child(4)').text().trim();
        itemid = rowB.find('td:nth-child(5)').text().trim();
        billitemid = rowB.find('td:nth-child(6)').text().trim();
        orderid = rowB.find('td:nth-child(7)').text().trim();


        TableXml += "<dtXml ";
               // var TableId = jquery_min_p(this)[0].id;
        TableXml += 'itemname="' + itemname + '" ';
        TableXml += 'qty="' + qty + '" ';
        TableXml += 'itemprice="' + itemprice + '" ';
        TableXml += 'tax="' + tax + '" ';
        TableXml += 'itemid="' + itemid + '" ';
        TableXml += 'billitemid="' + billitemid + '" ';
        //TableXml += 'orderid="' + orderid + '" ';

        TableXml += " />";
    })

       


    TableXml += "</dtXml>";


    var TableXml1 = "<dtXml>";

    jquery_min_p("#tblsalesafterreturn tbody tr").each(function () {
        rowB = jquery_min_p(this).closest('tr');
        itemname = rowB.find('td:nth-child(1)').text().trim();
        qty1 = rowB.find('td:nth-child(2)').text().trim();
        itemprice1 = rowB.find('td:nth-child(3)').text().trim();
        tax1 = rowB.find('td:nth-child(4)').text().trim();
        itemid = rowB.find('td:nth-child(5)').text().trim();
        billitemid = rowB.find('td:nth-child(6)').text().trim();
        orderid = rowB.find('td:nth-child(7)').text().trim();
        Hqty = rowB.find('td:nth-child(8)').text().trim();
        Hprice = rowB.find('td:nth-child(9)').text().trim();
        Hitemtax = rowB.find('td:nth-child(10)').text().trim();

        //alert(Hitemtax)
        //alert(tax1)
        var qty = parseFloat(Hqty) - parseFloat(qty1);
        var itemprice = parseFloat(Hprice) - parseFloat(itemprice1);
        var tax = parseFloat(Hitemtax) - parseFloat(tax1);

        TableXml1 += "<dtXml ";
        // var TableId = jquery_min_p(this)[0].id; 8 9
        TableXml1 += 'itemname="' + itemname + '" ';
        TableXml1 += 'qty="' + qty + '" ';
        TableXml1 += 'itemprice="' + itemprice + '" ';
        TableXml1 += 'tax="' + tax + '" ';
        TableXml1 += 'itemid="' + itemid + '" ';
        TableXml1 += 'billitemid="' + billitemid + '" ';
        TableXml1 += 'orderid="' + orderid + '" ';

        TableXml1 += " />";
    })




    TableXml1 += "</dtXml>";





    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/RunningOrder/SalesReturn",
        data: "{'restroid':'" + restroid + "','Invoiceno':'" + Invoiceno + "','TableXml':'" + TableXml + "','TableXml1':'" + TableXml1 + "'}",
        dataType: "json",
        async: false,
        success: function (result) {

            var i = 0;
            var jsonData = result;
            var ArrayCount = result.length;

            if (ArrayCount > 0) {

                //BindRunningOrder(); tblsalesreturn tblsalesafterreturn
                //  BindOrderDetail(id, ordernumber, ordertypeid);
                
                
               
                
                jquery_min_p("#tblsalesafterreturn tbody tr").each(function () {
                    //rowB = jquery_min_p(this).closest('tr');
                    jquery_min_p(this).removeClass('active');
                });
               // jquery_min_p('#salesreturn').addClass('disable'); //$("#MenuBoxConfirm").addClass("disable");

                jquery_min_p("#tblsalesreturn tbody tr").each(function () {
                    //rowB = jquery_min_p(this).closest('tr');
                    jquery_min_p(this).removeClass('active');
                });
              //  jquery_min_p('#salesOverlay').css('display', 'block');


                jquery_min_p('#savePopup').modal('show');
                jquery_min_p('#popupsuccess').text('Return successfully');
               
            }
            else {
                alert('Error');
            }
        },

        error: function () {
        }
    });

}
    

function BindReverseOrderclearSR()
{
    var tempprice = 0;
    var tempvat = 0;
    jquery_min_p("#tblsalesreturn tbody tr").each(function () {

        rowB = jquery_min_p(this).closest('tr');
        
        qty = rowB.find('td:nth-child(9)').text().trim();
        price = rowB.find('td:nth-child(10)').text().trim();
        vat = rowB.find('td:nth-child(2)').text().trim();

        tempprice = parseFloat(tempprice) + parseFloat(price);
        tempvat = parseFloat(tempvat) + parseFloat(vat)

        rowB.find('td:nth-child(4)').text(qty);
        rowB.find('td:nth-child(8)').text(price);

    })

    jquery_min_p("#lblbitemprice").text(0);
    jquery_min_p("#lblbitemvat").text(0);
    jquery_min_p("#lblbtotal").text(0);

    //checkMainItemName(itemname, qty, price); lblbitemprice lblbitemvat lblbtotal

    var spiprice = jquery_min_p("#spitempricesr").text();
    // alert(spiprice)  //amntb

    //var stotalamntB = jquery_min_p("#lblbitemprice").text();
     //alert(price)
     //var stprice = parseFloat(spiprice) + parseFloat(tempprice);
    // alert(stprice)
    jquery_min_p("#spitempricesr").text(tempprice.toFixed(3));
    jquery_min_p("#spitemvatsr").text(tempvat.toFixed(3));

    var stotalB = tempprice + tempvat;
    jquery_min_p("#sptotalsr").text(stotalB.toFixed(3));


    jquery_min_p("#tblsalesreturn tbody tr").each(function () {


        rowB = jquery_min_p(this).closest('tr');
        // itemnameB = rowB.find('td:nth-child(2)').text().trim();
        QtyB = rowB.find('td:nth-child(4)').text().trim();
        amountB = rowB.find('td:nth-child(8)').text().trim();
        //alert(QtyB)
        if (QtyB != 0 || amountB != 0) {
            jquery_min_p(this).removeClass("disable");
        }
    });




}