var id = "";
jquery_min_p(document).ready(function () {

    id = jquery_min_p("#lblrestroid").text();
    BindBookletCoupon();

    jquery_min_p("#ddlbooklet").change(function () {
        FilterCouponNo();
    });

    jquery_min_p("#ddlbooklet1").change(function () {
        FilterCouponNo1();

    });

    jquery_min_p("#btnclissue").click(function () {

        if (Validation()) {
            jquery_min_p('#hconfirm').text('Are You Sure Want To Activate !');
            jquery_min_p('#confirmationPopup').modal('show');
        }
        else {
            return false;
        }
    });
    jquery_min_p("#btnclreissue").click(function () {

            if (jquery_min_p("#ddlbooklet1").val() == '0' || jquery_min_p('#ddlissuenwcardno').val() == '0')
            {
                jquery_min_p("#ddlbooklet1").addClass('validate');
                jquery_min_p('#ddlissuenwcardno').addClass('validate');

                return false;
            }
            else {
                ReissueCustomerLoyality();
                jquery_min_p("#ddlissuenwcardno").html("");
                var newOption1 = newOption1 + "<option value='0' selected='Select'>Select</option>";
                jquery_min_p('#ddlissuenwcardno').append(newOption1);
            }
        });

        jquery_min_p("#btnok").click(function () {

            jquery_min_p("#ddlcardno").val('');
        });

        jquery_min_p("#btnwclose").click(function () {

            jquery_min_p("#ddlcardno").val('');

        });

        jquery_min_p("#yesBtn").click(function () {

            jquery_min_p('#confirmationPopup').modal('hide');
            SaveCustomerLoyality();
            Reset();
            jquery_min_p("#ddlcardno").html("");
            var newOption1 = newOption1 + "<option value='0' selected='Select'>Select</option>";
            jquery_min_p('#ddlcardno').append(newOption1);
        });

        jquery_min_p("#txtclmobile").keypress(function (e) {
            jquery_min_p(this).val(jquery_min_p(this).val().replace(/[^\d].+/, ""));
            if ((event.which < 48 || event.which > 57)) {
                event.preventDefault();
            }
        });



        jquery_min_p("#txtissuemobno").keypress(function (e) {
            jquery_min_p(this).val(jquery_min_p(this).val().replace(/[^\d].+/, ""));
            if ((event.which < 48 || event.which > 57)) {
                event.preventDefault();
            }
        });

        jquery_min_p("#ddlcardno").keypress(function (e) {
            jquery_min_p(this).val(jquery_min_p(this).val().replace(/[^\d].+/, ""));
            if ((event.which < 48 || event.which > 57)) {
                event.preventDefault();
            }
        });

        jquery_min_p("#txtbookletNo").keypress(function (e) {
            jquery_min_p(this).val(jquery_min_p(this).val().replace(/[^\d].+/, ""));
            if ((event.which < 48 || event.which > 57)) {
                event.preventDefault();
            }
        });

        jquery_min_p("#txtissuecardno").keypress(function (e) {
            jquery_min_p(this).val(jquery_min_p(this).val().replace(/[^\d].+/, ""));
            if ((event.which < 48 || event.which > 57)) {
                event.preventDefault();
            }
        });


        jquery_min_p("#txtissuenwcardno").keypress(function (e) {
            jquery_min_p(this).val(jquery_min_p(this).val().replace(/[^\d].+/, ""));
            if ((event.which < 48 || event.which > 57)) {
                event.preventDefault();
            }
        });

        jquery_min_p('#txtclemail').change(function () {
            var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
            if (regex.test(document.getElementById("txtclemail").value) == true) {

                jquery_min_p('#txtclemail').removeClass('validate');

            }
            else {

                jquery_min_p('#txtclemail').val('');
                jquery_min_p('#txtclemail').attr("placeholder", "Invalid E-Mail!!");
                jquery_min_p('#txtclemail').addClass('validate');
            }

        });
    });

    function SaveCustomerLoyality() {
        restroid = id;
        var name = jquery_min_p("#txtclname").val();

        var cardno = jquery_min_p('#ddlcardno').val();
        var mobile = jquery_min_p('#txtclmobile').val();
        var email = jquery_min_p('#txtclemail').val();
        var address = jquery_min_p('#txtcladdress').val();
        var BookletNo = jquery_min_p("#ddlbooklet option:selected").val();
        if(name=="")
        {
        }
        else{
            {
                jquery_min_p.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    url: "/CustomerCoupon/SaveCustomerLoyality",
                    data: "{'name':'" + name + "','cardno':'" + cardno + "','mobile':'" + mobile + "','email':'" + email + "','address':'" + address + "','restroid':'" + restroid + "','BookletNo':'" + BookletNo + "'}",

                    dataType: "json",
                    async: false,
                    success: function (result) {
                        var i = 0;
                        var jsondata = eval(result);
                        if (result == "0") {
                            jquery_min_p('#popupsuccess').text('Card Issued Successfully');
                            jquery_min_p('#savePopup').modal('show');
                        }

                    },
                    error: function (result) {
                        jquery_min_p('#hwarning').text('Their is problem,Try Again');
                        jquery_min_p('#WarningPopup').modal('show');
                    }
                });
            }

        }
    }

    function Checkname() {
        var name = jquery_min_p('#txtclname').val().replace('\'', '\\\'');
        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/CustomerCoupon/Checkname",
            data: "{'name':'" + name + "'}",
            dataType: "json",
            async: false,
            success: function (result) {
                var i = 0;
                var jsondata = eval(result);
                if (jsondata[0].value == '1') {
                    jquery_min_p('#txtclname').val('');
                    jquery_min_p('#txtclname').attr('placeholder', 'Name already exist.');
                    jquery_min_p('#txtclname').addClass('validate');
                }
                else { }
            },

            error: function (result) {
                jquery_min_p('#hwarning').text('Their is problem,Try Again');
                jquery_min_p('#WarningPopup').modal('show');
            }
        });
    }

    function CheckMobile() {
        var Mobile = jquery_min_p('#txtclmobile').val().replace('\'', '\\\'');
        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/CustomerCoupon/CheckMobile",
            data: "{'Mobile':'" + Mobile + "'}",
            dataType: "json",
            async: false,
            success: function (result) {
                var i = 0;
                var jsondata = eval(result);
                if (jsondata[0].value == '1') {
                    jquery_min_p('#txtclmobile').val('');
                    jquery_min_p('#txtclmobile').attr('placeholder', 'Mobile No. already exist.');
                    jquery_min_p('#txtclmobile').addClass('validate');
                }
                else { }
            },

            error: function (result) {
                jquery_min_p('#hwarning').text('Their is problem,Try Again');
                jquery_min_p('#WarningPopup').modal('show');
            }
        });
    }

    function mobilecheck() {
        //jquery_min_p("#btnclreissue").css("display", "block");
        var mobile = document.getElementById("txtclmobile").value;
        var pattern = /^\d{10}$/;
        if (pattern.test(mobile)) {
            return true;
        }
        jquery_min_p('#txtclmobile').attr("placeholder", "Mobile Number");
        jquery_min_p('#txtclmobile').val('');
        jquery_min_p('#txtclmobile').attr("placeholder", "Invalid number!!");
        jquery_min_p('#txtclmobile').addClass('validate');
        return false;
    }


    function ReIssuemobilecheck() {
        var mobile = document.getElementById("txtissuemobno").value;
        var pattern = /^\d{10}$/;
        if (pattern.test(mobile)) {
            return true;
        }
        return false;
    }




    function Validation() {
        var Flag = 0;
        if (jquery_min_p('#txtclname').val() == '') {
            jquery_min_p('#txtclname').addClass('validate');
            Flag = 1;
        }

        if (jquery_min_p('#txtclname').val() == '') {
            jquery_min_p('#txtclmobile').addClass('validate');
            Flag = 1;
        }
        if (jquery_min_p('#txtclname').val() == '') {
            jquery_min_p('#txtcladdress').addClass('validate');
            Flag = 1;
        }


        if (jquery_min_p('#txtclemail').val() == '') {
            jquery_min_p('#txtclemail').addClass('validate');
            Flag = 1;
        }

        if (jquery_min_p('#ddlbooklet').val() == '0') {
            jquery_min_p('#ddlbooklet').addClass('validate');
            Flag = 1;
        }
        if (jquery_min_p('#ddlcardno').val() == '0') {
            jquery_min_p('#ddlcardno').addClass('validate');
            Flag = 1;
        }


        if (Flag == 1) {
            return false;
        }
        else {
            return true;
        }
    }

    function RemoveClass() {


        if (jquery_min_p('#txtclemail').val() != '') {
            jquery_min_p('#txtclemail').removeClass('validate');
        }
        if (jquery_min_p('#txtclname').val() != '') {
            jquery_min_p('#txtclname').removeClass('validate');
        }

        if (jquery_min_p("#txtcladdress").val() != '') {
            jquery_min_p("#txtcladdress").removeClass('validate');

        }

        if (jquery_min_p('#ddlbooklet').val() != '0') {
            jquery_min_p('#ddlbooklet').removeClass('validate');
        }
        if (jquery_min_p('#ddlbooklet1').val() != '0') {
            jquery_min_p('#ddlbooklet1').removeClass('validate');
        }
        if (jquery_min_p('#ddlcardno').val() != '0') {
            jquery_min_p('#ddlcardno').removeClass('validate');
        }

        if (jquery_min_p('#ddlissuenwcardno').val() != '0') {
            jquery_min_p('#ddlissuenwcardno').removeClass('validate');
        }

        if (jquery_min_p("#txtclmobile").val() != '') {
            jquery_min_p("#txtclmobile").removeClass('validate');

        }

        if (jquery_min_p("#txtissuemobno").val() != '') {
            jquery_min_p("#txtissuemobno").removeClass('validate');

        }
        if (jquery_min_p("#txtissuecardno").val() != '') {
            jquery_min_p("#txtissuecardno").removeClass('validate');
        }

        if (jquery_min_p("#txtissuenwcardno").val() != '') {
            jquery_min_p("#txtissuenwcardno").removeClass('validate');
        }



    }

    function Reset() {

        jquery_min_p("#txtclmobile").val('');
        jquery_min_p("#lblrestroid").text('');
        jquery_min_p("#txtcladdress").val('');
        jquery_min_p("#txtclname").val('');
        jquery_min_p("#ddlbooklet").val("0");
        jquery_min_p("#ddlcardno").val("0");
        jquery_min_p("#txtclemail").val('');

        jquery_min_p('#txtclmobile').removeClass('validate');
        jquery_min_p('#txtcladdress').removeClass('validate');
        jquery_min_p('#ddlbooklet').removeClass('validate');
        jquery_min_p('#ddlcardno').removeClass('validate');
        jquery_min_p('#txtclname').removeClass('validate');

    }

    function FilterCouponNo() {
        jquery_min_p("#ddlcardno").html("");
        var BookletNo = jquery_min_p('#ddlbooklet').val().replace('\'', '\\\'');      

        var restroid = id;
        var dataCompany = [];
        dataCompany = [];
        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/CustomerCoupon/FilterCouponNo",
            data: "{'BookletNo':'" + BookletNo + "','restroid':'" + restroid + "'}",
            dataType: "json",
            async: false,
            success: function (result) {
                var i = 0;
                var jsondata = eval(result);

                var newOption1 = newOption1 + "<option value='0' selected='Select'>Select</option>";
          
                jquery_min_p("#ddlcardno").append(newOption1);

                for (var i = 0; i < result.length; i++) {


                    var newOption = jquery_min_p('<option>');
                    newOption.attr('value', result[i].CouponNo).text(result[i].CouponNo);

                    jquery_min_p("#ddlcardno").append(newOption);
                    
                }

            }
        });
    }

    function FilterCouponNo1() {
        jquery_min_p("#ddlissuenwcardno").html("");
        var BookletNo = jquery_min_p('#ddlbooklet1').val().replace('\'', '\\\'');      
        var restroid = id;
        var dataCompany = [];
        dataCompany = [];
        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/CustomerCoupon/FilterCouponNo1",
            data: "{'BookletNo':'" + BookletNo + "','restroid':'" + restroid + "'}",
            dataType: "json",
            async: false,
            success: function (result) {
                var i = 0;
                var jsondata = eval(result);
                var newOption2 = newOption2 + "<option value='0' selected='Select'>Select</option>";
          
                jquery_min_p("#ddlissuenwcardno").append(newOption2);

                for (var i = 0; i < result.length; i++) {

                    var newOption3 = jquery_min_p('<option>');
                    newOption3.attr('value', result[i].CouponNo).text(result[i].CouponNo);

                    jquery_min_p("#ddlissuenwcardno").append(newOption3);
                }

            }
        });
    }
    function showmbcarddetails() {

        mobno = jquery_min_p("#txtissuemobno").val();


        if (mobno != '') {


            jquery_min_p.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CustomerCoupon/showmbcarddetails",
                data: "{'mobno':'" + mobno + "'}",
                dataType: "json",
                async: false,
                success: function (result) {
                    var i = 0;
                    var jsondata = eval(result);

                    jquery_min_p('#lblricardno').text('');
                    jquery_min_p('#lblricardno').text('');
                    jquery_min_p('#lblriname').text('');
                    jquery_min_p('#lblribookletno').text('');
                    jquery_min_p('#lblrimobno').text('');
                    jquery_min_p('#lblriemail').text('');
                    jquery_min_p('#lblriaddress').text('');

                    jquery_min_p("#txtissuecardno").val('');
                    jquery_min_p("#txtissuemobno").val('');

                    var CouponNo = jsondata[0].CouponNo;
                    var CusName = jsondata[0].CusName;
                    var BookletNo = jsondata[0].BookletNo
                    var MobileNo = jsondata[0].MobileNo;
                    var EmailId = jsondata[0].EmailId;
                    var Address = jsondata[0].Address;

                    jquery_min_p('#lblricardno').text(CouponNo);
                    jquery_min_p('#lblriname').text(CusName);
                    jquery_min_p('#lblribookletno').text(BookletNo);
                    jquery_min_p('#lblrimobno').text(MobileNo);
                    jquery_min_p('#lblriemail').text(EmailId);
                    jquery_min_p('#lblriaddress').text(Address);
                   
                    jquery_min_p("#lblricardno").css("display", "block");
                    jquery_min_p("#lblriname").css("display", "block");
                    jquery_min_p("#lblribookletno").css("display", "block");
                    jquery_min_p("#lblrimobno").css("display", "block");
                    jquery_min_p("#lblriemail").css("display", "block");
                    
                },
                error: function (result) {
                    jquery_min_p('#hwarning').text('Their is problem,Try Again');
                    jquery_min_p('#WarningPopup').modal('show');
                }
            });
        }
        else {
        }

    }

    function showbookcarddetails() {

        BookletNo = jquery_min_p("#txtbookletNo").val();
        if (BookletNo != '') {

            jquery_min_p.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CustomerCoupon/showbookcarddetails",
                data: "{'BookletNo':'" + BookletNo + "'}",
                dataType: "json",
                async: false,
                success: function (result) {
                    var i = 0;
                    var jsondata = eval(result);

                    jquery_min_p('#lblricardno').text('');
                    jquery_min_p('#lblriname').text('');
                    jquery_min_p('#lblribookletno').text('');
                    jquery_min_p('#lblrimobno').text('');
                    jquery_min_p('#lblriemail').text('');
                    jquery_min_p('#lblriaddress').text('');

                    jquery_min_p("#txtissuecardno").val('');
                    jquery_min_p("#txtissuemobno").val('');
          
                    var CouponNo = jsondata[0].CouponNo;
                    var CusName = jsondata[0].CusName;
                    var BookletNo = jsondata[0].BookletNo
                    var MobileNo = jsondata[0].MobileNo;
                    var EmailId = jsondata[0].EmailId;
                    var Address = jsondata[0].Address;

                    jquery_min_p('#lblricardno').text(CouponNo);
                    jquery_min_p('#lblriname').text(CusName);
                    jquery_min_p('#lblribookletno').text(BookletNo);
                    jquery_min_p('#lblrimobno').text(MobileNo);
                    jquery_min_p('#lblriemail').text(EmailId);
                    jquery_min_p('#lblriaddress').text(Address);

                    jquery_min_p("#lblricardno").css("display", "block");
                    jquery_min_p("#lblriname").css("display", "block");
                    jquery_min_p("#lblribookletno").css("display", "block");
                    jquery_min_p("#lblrimobno").css("display", "block");
                    jquery_min_p("#lblriemail").css("display", "block");

                },
                error: function (result) {                  
                    jquery_min_p('#hwarning').text('Their is problem,Try Again');
                    jquery_min_p('#WarningPopup').modal('show');
                }

            });
        }
        else {
        }

    }

    function showcncarddetails() {

        cardno = jquery_min_p("#txtissuecardno").val();
        if (cardno != '') {

            jquery_min_p.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CustomerCoupon/showccarddetails",
                data: "{'cardno':'" + cardno + "'}",
                dataType: "json",
                async: false,
                success: function (result) {
                    var i = 0;
                    var jsondata = eval(result);

                    jquery_min_p('#lblricardno').text('');
                    jquery_min_p('#lblriname').text('');
                    jquery_min_p('#lblribookletno').text('');
                    jquery_min_p('#lblrimobno').text('');
                    jquery_min_p('#lblriemail').text('');
                    jquery_min_p('#lblriaddress').text('');
                    jquery_min_p("#txtissuecardno").val('');
                    jquery_min_p("#txtissuemobno").val('');
                    jquery_min_p("#txtbookletNo").val('');
                    var CouponNo = jsondata[0].CouponNo;
                    var CusName = jsondata[0].CusName;
                    var BookletNo = jsondata[0].BookletNo
                    var MobileNo = jsondata[0].MobileNo;
                    var EmailId = jsondata[0].EmailId;
                    var Address = jsondata[0].Address;

                    jquery_min_p('#lblricardno').text(CouponNo);
                    jquery_min_p('#lblriname').text(CusName);
                    jquery_min_p('#lblribookletno').text(BookletNo);
                    jquery_min_p('#lblrimobno').text(MobileNo);
                    jquery_min_p('#lblriemail').text(EmailId);
                    jquery_min_p('#lblriaddress').text(Address);

                    jquery_min_p("#lblricardno").css("display", "block");
                    jquery_min_p("#lblriname").css("display", "block");
                    jquery_min_p("#lblribookletno").css("display", "block");
                    jquery_min_p("#lblrimobno").css("display", "block");
                    jquery_min_p("#lblriemail").css("display", "block");

                },
                error: function (result) {
                    jquery_min_p('#hwarning').text('Their is problem,Try Again');
                    jquery_min_p('#WarningPopup').modal('show');
                }

            });
        }
        else {
        }

    }



    function CheckReissueCardno() {
        var BookletNo = jquery_min_p("#txtbookletNo").val();
        if (BookletNo == "")
        {
            jquery_min_p("#txtissuecardno").val("");
            jquery_min_p('#h6warning').text('Insert Booklet No.');
            jquery_min_p('#dngwarn').modal('show');
        }
        else
        {
            var cardno = jquery_min_p("#txtissuecardno").val().replace('\'', '\\\'');
            var BookletNo = jquery_min_p("#txtbookletNo").val().replace('\'', '\\\'');
            var restroid = id;
            jquery_min_p.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CustomerCoupon/CheckReissueCardno",
                data: "{'BookletNo':'" + BookletNo + "','cardno':'" + cardno + "','restroid':'" + restroid + "'}",
                dataType: "json",
                async: false,
                success: function (result) {
                    var i = 0;
                    var jsondata = eval(result);
                    if (jsondata[0].value == '1') {
                        jquery_min_p("#txtbookletNo").val('');
                        jquery_min_p('#txtissuecardno').val('');
                        jquery_min_p('#txtissuemobno').val('');
                        jquery_min_p('#h6warning').text('Invalid Details!!');
                        jquery_min_p('#dngwarn').modal('show');
                        jquery_min_p('#dvreissue').css('display', 'none');
                        return false;
                    }
                    else {
                        jquery_min_p('#dvreissue').css('display', 'flex');
                        showcncarddetails();
                    }

                },

                error: function (result) {
                    jquery_min_p('#hwarning').text('Their is problem,Try Again');
                    jquery_min_p('#WarningPopup').modal('show');
                }
            });
        }
    
    }

    function CheckReissueBookletno() {

        var BookletNo = jquery_min_p("#txtbookletNo").val().replace('\'', '\\\'');                                 
        var restroid = id;
        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/CustomerCoupon/CheckReissueBookletno",
            data: "{'BookletNo':'" + BookletNo + "','restroid':'" + restroid + "'}", 
            dataType: "json",
            async: false,
            success: function (result) {
                var i = 0;
                var jsondata = eval(result);
                if (jsondata[0].value == '1') {
                    jquery_min_p("#txtbookletNo").val('');
                    jquery_min_p('#txtissuecardno').val('');
                    jquery_min_p('#txtissuemobno').val('');
                    jquery_min_p('#h6warning').text('Invalid Booklet Number');
                    jquery_min_p('#dngwarn').modal('show');
                    jquery_min_p('#dvreissue').css('display', 'none');
                }
                else {
                    jquery_min_p('#dvreissue').css('display', 'flex');
                    showbookcarddetails();
                }

            },

            error: function (result) {
                jquery_min_p('#hwarning').text('Their is problem,Try Again');
                jquery_min_p('#WarningPopup').modal('show');
            }
        });
    }


    function CheckReissueMobileNo() {
        jquery_min_p('#ddlbooklet1').removeClass('validate');
        jquery_min_p('#ddlissuenwcardno').removeClass('validate');
        var mobno = jquery_min_p('#txtissuemobno').val().replace('\'', '\\\'');
        var restroid = id;
        ReIssuemobilecheck();
        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/CustomerCoupon/CheckReissueMobileNo",
            data: "{'mobno':'" + mobno + "','restroid':'" + restroid + "'}",
            dataType: "json",
            async: false,
            success: function (result) {
                var i = 0;
                var jsondata = eval(result);

                if (jsondata[0].value == '1') {
                    jquery_min_p("#txtbookletNo").val('');
                    jquery_min_p('#txtissuecardno').val('');
                    jquery_min_p('#txtissuemobno').val('');
                    jquery_min_p('#h6warning').text('Mobile number does not exist.');
                    jquery_min_p('#dngwarn').modal('show');
                    jquery_min_p('#dvreissue').css('display', 'none');
                }
                else {
                    jquery_min_p('#dvreissue').css('display', 'flex');
                    showmbcarddetails();
                }

            },

            error: function (result) {
                jquery_min_p('#hwarning').text('Their is problem,Try Again');
                jquery_min_p('#WarningPopup').modal('show');
            }
        });
    }
    function BindBookletCoupon() {
        jquery_min_p('#ddlbooklet').html("");
        jquery_min_p('#ddlbooklet1').html("");
        var restroId = jquery_min_p("#lblrestroid").text();

        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/CouponMaster/BindRestrogrid",
            data: "{'restroId':'" + restroId + "'}",
            dataType: "json",
            async: false,
            success: function (result) {
                var i = 0;
                var jsondata = eval(result);

                var newOption1 = newOption1 + "<option value='0' selected='Select'>Select</option>";
                var newOption2 = newOption2 + "<option value='0' selected='Select'>Select</option>";
                jquery_min_p('#ddlbooklet').append(newOption1);
                jquery_min_p('#ddlbooklet1').append(newOption2);

                for (var i = 0; i < result.length; i++) {


                    var newOption = jquery_min_p('<option>');
                    newOption.attr('value', result[i].Couponlength).text(result[i].BookLetNo);

                    var newOption3 = jquery_min_p('<option>');
                    newOption3.attr('value', result[i].Couponlength).text(result[i].BookLetNo);
                    jquery_min_p('#ddlbooklet').append(newOption);
                    jquery_min_p('#ddlbooklet1').append(newOption3);

                }

            }
        });
    }


   
    function ReissueCustomerLoyality() {

        restroid = id;

        var name = jquery_min_p('#lblriname').text();

        var cardno = jquery_min_p('#ddlissuenwcardno').val();
        var BookletNo = jquery_min_p('#lblrimobno').text();
        var mobile =  jquery_min_p('#ddlbooklet1').val();
        var email = jquery_min_p('#lblriemail').text();
        var ocardno = jquery_min_p('#lblricardno').text();
        var OBookletNo = jquery_min_p('#lblribookletno').text();
        var Address = jquery_min_p('#lblriaddress').text();  
        var orderid = "";
        {
            jquery_min_p.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/CustomerCoupon/ReissueCustomerLoyality",
                data: "{'name':'" + name + "','cardno':'" + cardno + "','BookletNo':'" + BookletNo + "','mobile':'" + mobile + "','email':'" + email + "','orderid':'" + orderid + "','restroid':'" + restroid + "','ocardno':'" + ocardno + "','OBookletNo':'" + OBookletNo + "','Address':'" + Address + "'}",  //'CouponId':'" + CouponId + "','CustDetailId':'" + CustDetailId + "'
                dataType: "json",
                async: false,
                success: function (result) {
                    var i = 0;
                    var jsondata = eval(result);

                    if (result == "0") {
                        jquery_min_p('#popupsuccess').text('Card ReIssued Successfully');
                        jquery_min_p('#savePopup').modal('show');                       
                    }
                    ReissueReset();
                    jquery_min_p("#ddlbooklet1").val('0');
                    jquery_min_p('#ddlissuenwcardno').val('0');
                    jquery_min_p('#lblribookletno').text('');
                    jquery_min_p('#lblricardno').text('');
                    jquery_min_p('#lblriname').text('');
                    jquery_min_p('#lblrimobno').text('');
                    jquery_min_p('#lblriemail').text('');

                    jquery_min_p('#ddlbooklet1').removeClass('validate');
                    jquery_min_p('#ddlissuenwcardno').removeClass('validate');
                    jquery_min_p('#dvreissue').css('display', 'none');

                },
                error: function (result) {
                   
                    jquery_min_p('#hwarning').text('Their is problem,Try Again');
                    jquery_min_p('#WarningPopup').modal('show');
                }
            });
        }

    }

    function ReissueReset() {
        jquery_min_p('#lblribookletno').text('');
        jquery_min_p('#lblricardno').text('');
        jquery_min_p('#lblriname').text('');
        jquery_min_p('#lblrimobno').text('');
        jquery_min_p('#lblriemail').text('');
        jquery_min_p("#txtissuecardno").val('');
        jquery_min_p("#txtissuemobno").val('');
        jquery_min_p("#ddlbooklet1").val("0");
        jquery_min_p("#ddlissuenwcardno").val("0");

        jquery_min_p('#txtissuecardno').removeClass('validate');
        jquery_min_p('#txtissuemobno').removeClass('validate');
        jquery_min_p('#txtissuenwcardno').removeClass('validate');
        jquery_min_p('#ddlbooklet1').removeClass('validate');
        jquery_min_p('#ddlissuenwcardno').removeClass('validate');

    }
 