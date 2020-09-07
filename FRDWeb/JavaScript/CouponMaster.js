var ArrayBooklet = [];
var flag1 = 0;
jquery_min_p(document).ready(function () {

    BindCouponLength();
  
    BindAllResturantMenu();

    jquery_min_p("#btnsaveclose").click(function () {
        var restroId = jquery_min_p("#lblrestroid").text();
        BindResturantwisegrid(restroId);  //"restroId"
        Reset();
    });

    jquery_min_p("#GCard").click(function () {
        Reset();
        jquery_min_p("#divcardDetail").css('display', 'none');
        jquery_min_p("#divrestrodetail").css('display', 'none');

        jquery_min_p("#divrestrogrid").css('display', 'none');
        jquery_min_p(".restaurantList .sectionBox").removeClass("active");
    });
    jquery_min_p("#ICard").click(function () {
        jquery_min_p("#divcard").hide();
        BindCouponLength();
        Reset();

    });

    jquery_min_p("input[name=rdogencard]:radio").click(function () {
        if (jquery_min_p('input[name=rdogencard]:checked').val() == "E") {





            jquery_min_p("#txtbookletno").attr('disabled', true);
            jquery_min_p("#strtfromdiv").css('display', 'none');
            jquery_min_p("#cardLen").css('display', 'none');  
            jquery_min_p("#valueCou").css('display', 'none');
            BindCouponNo();

            jquery_min_p("#displayMsg").css('display', 'none');
            jquery_min_p("#cardDetail").css('display', 'block');


            jquery_min_p("#txtbookletno").val("");
            jquery_min_p("#txtnoofcoupon").val("");
            jquery_min_p("#divcard").html("")

            jquery_min_p('#txtbookletno').removeClass('validate');
            jquery_min_p('#txtnoofcoupon').removeClass('validate');

        }
    });

    jquery_min_p("input[name=rdogencard]:radio").click(function () {
        if (jquery_min_p('input[name=rdogencard]:checked').val() == "N") {

            jquery_min_p("#txtbookletno").attr('disabled', false);
            jquery_min_p("#strtfromdiv").css('display', 'flex');
            jquery_min_p("#valueCou").css('display', 'flex');

            jquery_min_p("#txtbookletno").val("");
            jquery_min_p("#txtnoofcoupon").val("");
            jquery_min_p("#txtstartfrom").val("");
            jquery_min_p("#txtcouponlength").val("");
            jquery_min_p("#txtvalue").val("");

            jquery_min_p('#txtbookletno').removeClass('validate');
            jquery_min_p('#txtnoofcoupon').removeClass('validate');
            jquery_min_p('#txtstartfrom').removeClass('validate');
            jquery_min_p('#txtcouponlength').removeClass('validate');
            jquery_min_p('#txtvalue').removeClass('validate');

            jquery_min_p("#cardDetailsTable tbody").empty();

            jquery_min_p("#cardDetailsTable").css('display', 'none');

            jquery_min_p("#displayMsg").css('display', 'flex');

        }
    });

    jquery_min_p("#btnadd").click(function () {
        
        if (jquery_min_p("#rdcreatenew").prop("checked") == false && jquery_min_p("#rdexisting").prop("checked") == false)
  
        {
            jquery_min_p("#h6warning").text("Please Select Create New Or Existing!!");
            jquery_min_p('#dngwarn').modal('show');
            //return false;
        }

        else {
            if (flag1 == 1) {


                if (jquery_min_p('#txtbookletno').val() == "") {
                    jquery_min_p('#txtnoofcoupon').val("");
                    jquery_min_p("#h6warning").text("Please Select CouponNo!!");
                    jquery_min_p('#dngwarn').modal('show');

                    return false;
                }
                if (jquery_min_p('#txtnoofcoupon').val() == "") {
                    jquery_min_p('#txtnoofcoupon').addClass('validate');
                    jquery_min_p('#txtnoofcoupon').val("");
                    return false;
                }

                else {
                    CheckData();
                }
            }

            else {
                CheckData();
              
            }
        }

    });
    jquery_min_p("#btnIssue").click(function () {
        SaveIssueCards();
        //jquery_min_p("#ddllength").html("");
        //var newOption1 = newOption1 + "<option value='0' selected='Select'>Select</option>";
        //jquery_min_p('#ddllength').append(newOption1);
        //Reset();
    });
    jquery_min_p("#btncrosscloase").click(function () {
        bootstrap_min_p("#WarningPopup").modal('hide');

    });
    jquery_min_p("#btnok").click(function () {
        bootstrap_min_p("#WarningPopup").modal('hide');
        jquery_min_p("#ddllength").html("");
        var newOption1 = newOption1 + "<option value='0' selected='Select'>Select</option>";
        jquery_min_p('#ddllength').append(newOption1);
        Reset();

    });


    jquery_min_p("#rdcreatenew").click(function () {
        flag1 = 0;
        if (jquery_min_p("#rdcreatenew").prop("checked") == true) {
            jquery_min_p("#txtnoofcoupon").val("");
            jquery_min_p("#divcard").html("");
        }
    });

    jquery_min_p("#rdexisting").click(function () {
        flag1 = 1;
        if (jquery_min_p("#rdexisting").prop("checked") == true) {
            jquery_min_p("#txtnoofcoupon").val("");
            jquery_min_p('#txtnoofcoupon').removeClass('validate')
            BindCouponNo();
        }
        else {

        }

    });

    jquery_min_p("#txtbookletno").keypress(function (event) {
        jquery_min_p(this).val(jquery_min_p(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });

    jquery_min_p("#txtnoofcoupon").keypress(function (event) {
        jquery_min_p(this).val(jquery_min_p(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });
    jquery_min_p("#txtissuecard").keypress(function (event) {
        jquery_min_p(this).val(jquery_min_p(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });
    jquery_min_p("#txtstartfrom").keypress(function (event) {
        jquery_min_p(this).val(jquery_min_p(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });

    jquery_min_p("#txtcouponlength").keypress(function (event) {
        jquery_min_p(this).val(jquery_min_p(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });
    jquery_min_p("#txtvalue").keypress(function (event) {
        jquery_min_p(this).val(jquery_min_p(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });

});

function Reset() {



    jquery_min_p("#lblrestroid").text("");
    jquery_min_p("#txtbookletno").val("");
    jquery_min_p("#txtnoofcoupon").val("");
    jquery_min_p("#txtstartfrom").val("");
    jquery_min_p("#txtcouponlength").val("");
    jquery_min_p("#txtissuecard").val("");
    jquery_min_p("#txtvalue").val("");
    jquery_min_p("#ddlcardlength").val("0");
    jquery_min_p("#ddllength").val("0");
    //jquery_min_p("#lbltotalcards").text("");
    //jquery_min_p("#lblcardavailable").text("");
    //lbltotalcards  //lblcardavailable
    jquery_min_p("#divcard").html("");


    jquery_min_p('#txtbookletno').removeClass('validate');
    jquery_min_p('#txtnoofcoupon').removeClass('validate');
    jquery_min_p('#txtstartfrom').removeClass('validate');
    jquery_min_p('#txtcouponlength').removeClass('validate');
    jquery_min_p('#txtissuecard').removeClass('validate');
    jquery_min_p('#ddlcardlength').removeClass('validate');
    jquery_min_p('#ddllength').removeClass('validate');
    jquery_min_p('#txtvalue').removeClass('validate');

}


function BindCouponNo() {
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/CouponMaster/BindCouponNo",
        data: "{ }",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            //var jsonData = result;
            jquery_min_p("#cardDetailsTable tbody").empty();
            var ArrayCount = result.length;

            for (var i = 0; i < ArrayCount; i++) {
                var row = row + "<tr onclick='BindData(this," + result[i].Length + ", " + '"' + result[i].BookletNo + '"' + ");'>";
                var row = row + "<td width='30%'> " + result[i].Length + " </td>";
                row = row + "<td width='70%'> " + result[i].CouponNo + "</td>";
                row = row + "<td width='70%' style='display: none'> " + result[i].BookletNo + "</td>";
                row = row + "</tr>"
                ArrayBooklet.push({ text: result[i].BookletNo });
            }
            jquery_min_p("#cardDetailsTable tbody").append(row);

            jquery_min_p("#cardDetail").css('display', 'block');
        },
        error: function () {
        }
    });
}

function BindData(data, CouponId, BookletNo) {
    jquery_min_p("#cardDetailsTable tbody tr").removeClass("selectedItem");
    row = jquery_min_p(data).closest("tr");
    row.addClass("selectedItem");

    jquery_min_p("#lbllength").text(CouponId);
    jquery_min_p("#txtbookletno").val(BookletNo);
}

function CheckData() {
    if (jquery_min_p("#rdcreatenew").prop("checked") == true) {
        if (Validation() == true) {
            var isfound = 0;
            var BookletNo = jquery_min_p("#txtbookletno").val();
            var noofcoupons = jquery_min_p("#txtnoofcoupon").val();
            var startfrom = jquery_min_p("#txtstartfrom").val();
            var couponlength = jquery_min_p("#txtcouponlength").val();
            var value = jquery_min_p("#txtvalue").val();

            jquery_min_p('#txtbookletno').removeClass('validate');
            jquery_min_p('#txtnoofcoupon').removeClass('validate');
            jquery_min_p('#txtstartfrom').removeClass('validate');
            jquery_min_p('#txtcouponlength').removeClass('validate');
            jquery_min_p('#txtvalue').removeClass('validate');

            if ((BookletNo != "") && (noofcoupons != "") && (startfrom != "") && (couponlength.Text != "") && (value.Text != "")) {
                if (startfrom.length <= couponlength) {
                    jquery_min_p.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        url: "/CouponMaster/CheckData",
                        data: "{}",
                        dataType: "json",
                        async: false,
                        success: function (result) {
                            BindCouponNo();
                            //var ArrayCount = result[0].value;
                            if (isfound == 0) {
                                jquery_min_p("#divcard").html('');

                                jquery_min_p.ajax({
                                    type: "POST",
                                    contentType: "application/json; charset=utf-8",
                                    url: "/CouponMaster/CreateLoyaltyCard",
                                    data: "{'BookletNo':'" + BookletNo + "','noofcoupons':'" + noofcoupons + "','startfrom':'" + startfrom + "','couponlength':'" + couponlength + "','value':'" + value + "'}",
                                    dataType: "json",
                                    async: false,
                                    success: function (result) {
                                        var ArrayCount = result.length;
                                        var Query = "";

                                        if (result[0].value == '-1') {
                                            jquery_min_p("#hwarning").text("BookletNo Already Existed!!");
                                            bootstrap_min_p("#WarningPopup").modal('show');
                                            Reset();
                                            return false;
                                        }
                                        for (var i = 0; i < ArrayCount; i++) {
                                            Query = Query + "<div class='loyaltyCard'>"
                                            Query = Query + "<h4><img src='../Content/images/loyality-icon-white.png'/> Coupon Card</h4>"
                                            Query = Query + "<div class='loyaltycardDetail'><div class='logoImg'><img src='../Content/images/POS-logo-sm-1.png' /></div>"
                                            Query = Query + "<div class='cardNoCon'><span>COUPON NUMBER</span><span class='cardNo'>" + result[i].CouponNo + "</span></div>"
                                            Query = Query + "<div class='loyaltyFooter'><span>POS System</span></div>"
                                            Query = Query + "</div></div>"
                                        }
                                        jquery_min_p("#divcard").append(Query);
                                        
                                        jquery_min_p("#divcard").show();
                                        BindCouponNo();
                                        jquery_min_p("#txtbookletno").val("");
                                        jquery_min_p("#txtnoofcoupon").val("");
                                        jquery_min_p("#txtstartfrom").val("");
                                        jquery_min_p("#txtcouponlength").val("");
                                        jquery_min_p("#txtvalue").val("");
                                    },
                                    error: function () {
                                        alert('error');
                                    }
                                });
                            }
                        },
                        error: function () {
                        }
                    });
                }
                else {

                    jquery_min_p('#h6warning').text('Invalid Card Length');
                    jquery_min_p('#dngwarn').modal('show');
                    jquery_min_p('#txtcardlength').addClass('validate');
                }
            }
        }
    }
    else {
        var flag = 0;
        var couponlength = jquery_min_p("#lbllength").text();
        var startfrom = "";
        var noofcoupons = jquery_min_p("#txtnoofcoupon").val();
        var BookletNo = jquery_min_p("#txtbookletno").val();
        var value = jquery_min_p("#txtvalue").val();

        if (rowvalidate() == true) {
            jquery_min_p.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CouponMaster/CreateLoyaltyCard",
                data: "{'BookletNo':'" + BookletNo + "','noofcoupons':'" + noofcoupons + "','startfrom':'" + startfrom + "','couponlength':'" + couponlength + "','value':'" + value + "'}",
                dataType: "json",
                async: false,
                success: function (result) {
                    jquery_min_p("#divcard").html('');
                    Reset();
                    var ArrayCount = result.length;
                    var Query = "";
                    for (var i = 0; i < ArrayCount; i++) {

                        Query = Query + "<div class='loyaltyCard' >"
                        Query = Query + "<h4><img src='../Content/images/loyality-icon-white.png'/> Coupon Card</h4>"
                        Query = Query + "<div class='loyaltycardDetail'><div class='logoImg'><img src='../Content/images/POS-logo-sm-1.png' /></div>"
                        Query = Query + "<div class='cardNoCon'><span>COUPON NUMBER</span><span class='cardNo'>" + result[i].CouponNo + "</span></div>"
                        Query = Query + "<div class='loyaltyFooter'><span>POS System</span></div>"
                        Query = Query + "</div></div>"
                    }
                    jquery_min_p("#divcard").append(Query);
                    BindCouponNo();
                   

                },
                error: function () {
                }
            });
        }
    }
}

function rowvalidate() {
    var flag = 1;
    jquery_min_p("#cardDetailsTable tbody tr").each(function () {

        if (this.className == "selectedItem") {

            flag = 0;

        }

    });

    if (jquery_min_p('#txtnoofcoupon').val() == "") {
        jquery_min_p('#txtnoofcoupon').addClass('validate');
        flag = 1;

    }

    if (flag == 1) {
        return false;
    }
    else {
        return true;
    }
}


function Removeclass() {

    if (jquery_min_p('#txtbookletno').val() != "") {
        jquery_min_p('#txtbookletno').removeClass('validate');
    }

    if (jquery_min_p('#txtnoofcoupon').val() != "") {
        jquery_min_p('#txtnoofcoupon').removeClass('validate');
    }
    if (jquery_min_p('#txtstartfrom').val() != "") {
        jquery_min_p('#txtstartfrom').removeClass('validate');
    }

    if (jquery_min_p('#txtcouponlength').val() != "") {
        jquery_min_p('#txtcouponlength').removeClass('validate');
    }
    if (jquery_min_p('#txtissuecard').val() != "") {
        jquery_min_p('#txtissuecard').removeClass('validate');
    }
    if (jquery_min_p('#ddlcardlength').val() != '0') {
        jquery_min_p('#ddlcardlength').removeClass('validate');
    }
    if (jquery_min_p('#ddllength').val() != '0') {
        jquery_min_p('#ddllength').removeClass('validate');
    }
    if (jquery_min_p('#txtvalue').val() != "") {
        jquery_min_p('#txtvalue').removeClass('validate');
    }

}

function Validation() {
    var maxlen = jquery_min_p("#hdnmaxlen").val();
    var Flag = 0;

    if (jquery_min_p('#txtnoofcoupon').val() == "") {
        jquery_min_p('#txtnoofcoupon').addClass('validate');
        Flag = 1;
    }

    if (jquery_min_p('#txtvalue').val() == "") {
        jquery_min_p('#txtvalue').addClass('validate');
        Flag = 1;
    }
    if (jquery_min_p('#txtstartfrom').val() == "") {
        jquery_min_p('#txtstartfrom').addClass('validate');
        Flag = 1;
    }
    if (jquery_min_p('#txtbookletno').val() == "") {
        jquery_min_p('#txtbookletno').addClass('validate');
        Flag = 1;
    }

    if (jquery_min_p('#txtcouponlength').val() == "") {
        jquery_min_p('#txtcouponlength').addClass('validate');
        Flag = 1;
    }
    if ((jquery_min_p("#txtcouponlength").val() > 15) || (jquery_min_p("#txtcouponlength").val() < 0)) {
        jquery_min_p("#hwarning").text("Coupon Length must be greater than 0 or less than 15 !!");
        bootstrap_min_p("#WarningPopup").modal('show');
        jquery_min_p('#txtcouponlength').addClass('validate');
        Flag = 1;
    }

    if (Flag == 1) {
        return false;

    }
    else {
        return true;
    }
}

function BindCouponAvailable() {
    jquery_min_p("#divcardDetail").css("display", "block");
    jquery_min_p("#divrestrodetail").css("display", "block");
    jquery_min_p("#lblrestroissuecards").text("");
    

    var restroid = jquery_min_p("#lblrestroid").text();
    if (restroid == "") {
        restroid = 0;
    }

    var len = jquery_min_p("#ddllength option:selected").val();
    var BookletNo = jquery_min_p("#ddlcardlength option:selected").val();
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/CouponMaster/BindBookletTotal",
        data: "{'len':'" + len + "','restroid':'" + restroid + "','BookletNo':'" + BookletNo + "'}",  //'restroid':'" + restroid + "',
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;

            var jsonData = result.Table;
            var Totalcoupon = jsonData[i].Totcards;
            jquery_min_p('#lbltotalcards').text(Totalcoupon);

            jsonData = result.Table1;

            var CouponQuantity = jsonData[i].Total;
            jquery_min_p('#lblcardavailable').text(CouponQuantity);
            jsonData = result.Table2;

            var noofissuecards = jsonData[i].coun;
            jquery_min_p("#lblrestroissuecards").text(noofissuecards);
        }
    });

}

function BindCouponLength() {

    jquery_min_p('#ddlcardlength').html("");

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/CouponMaster/BindCouponTotal",
        data: "{}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsondata = eval(result);

            var newOption1 = newOption1 + "<option value='0' selected='Select'>Select</option>";
            jquery_min_p('#ddlcardlength').append(newOption1);


            for (var i = 0; i < result.length; i++) {


                var newOption = jquery_min_p('<option>');
                newOption.attr('value', result[i].CouponId).text(result[i].BookletNo);

                // Append that to the DropDownList.
                jquery_min_p('#ddlcardlength').append(newOption);

            }
        }

    });
}

function BindLength() {
    jquery_min_p('#ddllength').html("");
    var BookletNo = jquery_min_p('#ddlcardlength').val();


    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/CouponMaster/BindLength",
        data: "{'BookletNo':'" + BookletNo + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsondata = eval(result);
            var newOption1 = newOption1 + "<option value='0' selected='Select'>Select</option>";
            jquery_min_p('#ddllength').append(newOption1);


            for (var i = 0; i < result.length; i++) {


                var newOption = jquery_min_p('<option>');
                newOption.attr('value', result[i].Couponlength).text(result[i].Couponlength);

                jquery_min_p('#ddllength').append(newOption);
            }
        }


    });
}


function BindResturantwisegrid(restroId) {
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/CouponMaster/BindRestrogrid",
        data: "{'restroId':'" + restroId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;

            jquery_min_p("#tblrestrocards tbody").empty();
            var ArrayCount = result.length;
            if (result.length > 0) {
                for (var i = 0; i < ArrayCount; i++) {

                    var row = row + "<tr>"
                    var row = row + "<td width='30%'> " + result[i].CouponLength + " </td>";  //style='display: none'
                    row = row + "<td width='30%'> " + result[i].BookLetNo + "</td>";
                    row = row + "<td width='30%' > " + result[i].AssignToCustomer + "</td>";
                    row = row + "</tr>"
                }
                jquery_min_p("#tblrestrocards tbody").append(row);
            }
            else {

                var markup = "<tr><td colspan='6'>'No Record Found..'</td></tr>";
                jquery_min_p("#tblrestrocards tbody").append(markup);
            }



            jquery_min_p("#divrestrogrid").css('display', 'block');
        },
        error: function () {


        }
    });
}

function SaveIssueCards() {
    var restroId = jquery_min_p("#lblrestroid").text();
    var length = jquery_min_p("#ddllength option:selected").val();
    var BookletNo = jquery_min_p("#ddlcardlength option:selected").val();
    var cardavailable = jquery_min_p("#lblcardavailable").text();
    var IssueCards = jquery_min_p('#txtissuecard').val();
    var CouponNo = jquery_min_p('#txtnoofcoupon').val();

    if (jquery_min_p('#ddlcardlength').val() == '0') {
        jquery_min_p('#ddlcardlength').addClass('validate');

    }
    if (jquery_min_p('#ddllength').val() == '0') {
        jquery_min_p('#ddllength').addClass('validate');

    }

    if (IssueCards.trim() == "") {
        jquery_min_p('#txtissuecard').addClass('validate');


    }
    else if (length == "0") {
        jquery_min_p("#ddllength").addClass('validate');
    }

    else if (parseInt(IssueCards) > parseInt(cardavailable)) {
        jquery_min_p("#hwarning").text("Issue cards must be less than cards available!!");
        bootstrap_min_p("#WarningPopup").modal('show');

    }

    else {

        if (restroId == 0) {
            var restroid = jquery_min_p("#lblrestroid").text();
            jquery_min_p("#hwarning").text("Please Select Restaurant!!");
            bootstrap_min_p("#WarningPopup").modal('show');
            jquery_min_p("#divrestrogrid").hide();
        }

        else {



            jquery_min_p.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CouponMaster/SaveIssueCards",
                data: "{'IssueCards':'" + IssueCards + "','restroId':'" + restroId + "','length':'" + length + "','BookletNo':'" + BookletNo + "','CouponNo':'" + CouponNo + "'}",
                dataType: "json",
                async: false,
                success: function (result) {
                    BindCouponAvailable();
                    jquery_min_p("#popupsuccess").text("Card Issued Successfully");
                    jquery_min_p("#savePopup").modal('show');
                    jquery_min_p("#ddllength").html("");
                    var newOption1 = newOption1 + "<option value='0' selected='Select'>Select</option>";
                    jquery_min_p('#ddllength').append(newOption1);
                }

            });
            jquery_min_p("#txtissuecard").val();
            jquery_min_p('#txtissuecard').removeClass('validate');

        }
    }
}

function BindAllResturantMenu() {
    jquery_min_p("#restaurantList").html("");

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/SequenceSetup/BindResturant",
        data: "{}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsonData = result;
            var ArrayCount = result.length;
            var Query = "";
            for (var i = 0; i < ArrayCount; i++) {

                Query = Query + "<div class='sectionBox' onclick='SelectResturantId(this," + result[i].restroId + ");' ' ondblclick='BindResturantwisegrid(" + result[i].restroId + ");' >";
                jquery_min_p("#lblrestroid").text(result[i].restroId);
                Query = Query + "<h6>" + result[i].name + "</h6></div>"; 

            }
            jquery_min_p("#restaurantList").append(Query);
        },

        error: function () {
        }
    });
}
function SelectResturantId(data, Id) {

   jquery_min_p("#lblrestroid").text(Id);
    jquery_min_p("#txtissuecard").val("");
    jquery_min_p("#lblrestroissuecards").text("");
    jquery_min_p("#divrestrogrid").hide();
    jquery_min_p("#divcardDetail").hide();
    jquery_min_p("#divrestrodetail").hide();
   // BindCouponAvailable();   
    jquery_min_p(data).addClass('active');   //divrestrodetail
    jquery_min_p("#ddlcardlength").val("0");
    //jquery_min_p("#ddllength").val("0");
    jquery_min_p("#ddllength").html("");
    var newOption1 = newOption1 + "<option value='0' selected='Select'>Select</option>";
    jquery_min_p('#ddllength').append(newOption1);

    jquery_min_p('#ddlcardlength').removeClass('validate');
    jquery_min_p('#ddllength').removeClass('validate');
    jquery_min_p('#txtissuecard').removeClass('validate');
}



function issuecardvalidation() {
    var issuecards = jquery_min_p('#txtissuecard').val();
    var flag = 0;
    if (jquery_min_p('#ddlcardlength').val() == '0') {
        jquery_min_p('#ddlcardlength').addclass('validate');
        flag = 0
    }
    if (jquery_min_p('#ddllength').val() == '0') {
        jquery_min_p('#ddllength').addclass('validate');
        flag = 0
    }

    if (issuecards.trim() == "") {
        jquery_min_p('#txtissuecard').addclass('validate');
        flag = 0

    }
    if (flag == 0) {

        return false;
    }
    else {
        return true;
    }



}
