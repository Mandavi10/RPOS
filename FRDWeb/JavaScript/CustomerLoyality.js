var id = "";
//var List_Array = [];
//var dataCompany = [];
jquery_min_p(document).ready(function () {


    id = jquery_min_p("#lblrestroid").text();
  
    //  alert(id);

    //BindRestroData();

    
    //jquery_min_p("#dvreissue").css('display', 'none');

    jquery_min_p("#btnclissue").click(function () {

        if (Validation()) {
            // SaveCustomerLoyality();
            jquery_min_p('#hconfirm').text('Are You Sure Want To Activate !');
            jquery_min_p('#confirmationPopup').modal('show');
        }
        else {
            return false;

        }




    });

    
    
    jquery_min_p("#btnclreissue").click(function () {


        
        if (jquery_min_p('#txtissuenwcardno').val() == '') {
            jquery_min_p('#txtissuenwcardno').addClass('validate');
            
            return false;

           
        }
        else {
            ReissueCustomerLoyality();
        }
        
        


    });

    jquery_min_p("#btnok").click(function () {

        jquery_min_p("#txtclcardno").val('');

    });


    


    jquery_min_p("#btnwclose").click(function () {

        jquery_min_p("#txtclcardno").val('');

    });


    jquery_min_p("#yesBtn").click(function () {

        jquery_min_p('#confirmationPopup').modal('hide');
        //if (Validation()) {
        //    SaveCustomerLoyality();
        //}
        //else {
        //    return false;
        //}
        SaveCustomerLoyality();

    });

    //jquery_min_p("#txtcacardno").change(function () {


    //    checkcardno();
    //});




    jquery_min_p("#txtclmobile").keypress(function (e) {
        var key = e.keyCode;
        if (key >= 65 && key <= 90 || key >= 97 && key <= 122) {
            e.preventDefault();
        }
    });

    

    jquery_min_p("#txtissuemobno").keypress(function (e) {
        var key = e.keyCode;
        if (key >= 65 && key <= 90 || key >= 97 && key <= 122) {
            e.preventDefault();
        }
    });



    //$('.form-control col-md-8 pull-right.autocomplete').on('click', function () {
    //    //$('.college').trigger('click');
    //});


    jquery_min_p("#txtclcardno").keypress(function (e) {
        var key = e.keyCode;
        if (key >= 65 && key <= 90 || key >= 97 && key <= 122 || key >= 33 && key <= 47 || key >= 58 && key <= 64 || key >= 91 && key <= 96 || key >= 123 && key <= 126) {
            e.preventDefault();
        }
    });


    jquery_min_p("#txtissuecardno").keypress(function (e) {
        var key = e.keyCode;
        if (key >= 65 && key <= 90 || key >= 97 && key <= 122 || key >= 33 && key <= 47 || key >= 58 && key <= 64 || key >= 91 && key <= 96 || key >= 123 && key <= 126) {
            e.preventDefault();
        }
    });


    jquery_min_p("#txtissuenwcardno").keypress(function (e) {
        var key = e.keyCode;
        if (key >= 65 && key <= 90 || key >= 97 && key <= 122 || key >= 33 && key <= 47 || key >= 58 && key <= 64 || key >= 91 && key <= 96 || key >= 123 && key <= 126) {
            e.preventDefault();
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

    


    //jquery_min_p("#txtissuemobno").keydown(function (event) {
    //    k = event.which;
    //    if ((k >= 96 && k <= 105) || k == 8) {
    //        if (jquery_min_p(this).val().length == 10) {
    //            if (k == 8) {
    //                return true;
    //            } else {
    //                event.preventDefault();
    //                return false;

    //            }
    //        }
    //    } else {
    //        event.preventDefault();
    //        return false;
    //    }

    //});




    //jquery_min_p("#txtclmobile").keydown(function (event) {
    //    k = event.which;
    //    if ((k >= 96 && k <= 105) || k == 8) {
    //        if (jquery_min_p(this).val().length == 10) {
    //            if (k == 8) {
    //                return true;
    //            } else {
    //                event.preventDefault();
    //                return false;

    //            }
    //        }
    //    } else {
    //        event.preventDefault();
    //        return false;
    //    }

    //});







});












function SaveCustomerLoyality() {

    restroid = id;
    // alert(id);

    var name = jquery_min_p("#txtclname").val();

    var cardno = jquery_min_p('#txtclcardno').val().replace('\'', '\\\'');
    var mobile = jquery_min_p('#txtclmobile').val();
    // alert(ItemGroupId);
    var email = jquery_min_p('#txtclemail').val();
    // alert(UnitOfMeasure);

    var address = jquery_min_p('#txtcladdress').val().replace('\'', '\\\'');




    {

        // jquery_min_p('#divconpass').css('display', 'none');
        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/CustomerLoyalty/SaveCustomerLoyality",
            data: "{'name':'" + name + "','cardno':'" + cardno + "','mobile':'" + mobile + "','email':'" + email + "','address':'" + address + "','restroid':'" + restroid + "'}",

            dataType: "json",
            async: false,
            success: function (result) {
                var i = 0;
                var jsondata = eval(result);

                //jquery_min_p('#divnewitem').modal('hide');
                if (result == "0") {
                    jquery_min_p('#popupsuccess').text('Card Issued Successfully');
                    jquery_min_p('#savePopup').modal('show');
                }
                Reset();
                // Reset();

                // jquery_min_p('#successPopup').modal('show');
                //jquery_min_p('#txtcode').val(jsondata[0].EmpCode);
                //jquery_min_p('#txtname').val(jsondata[0].EmpName);
                //jquery_min_p('#txtmobile').val(jsondata[0].mobileNo);
                //jquery_min_p('#txtemail').val(jsondata[0].emailId);

                //Reset();

                // BindEmployeeDetails();

            },
            error: function (result) {
                // alert("There is a Problem, Try Again!");
                //jquery_min_p('#popupsuccess').text('There is a Problem, Try Again!');
                //jquery_min_p('#savePopup').modal('show');
                jquery_min_p('#hwarning').text('Their is problem,Try Again');
                jquery_min_p('#WarningPopup').modal('show');
            }
        });
    }

}






function Checkname() {
    var name = jquery_min_p('#txtclname').val().replace('\'', '\\\'');
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/CustomerLoyalty/Checkname",
        data: "{'name':'" + name + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsondata = eval(result);
            // alert(jsondata[0].result);
            // alert(result[0]);
            //jquery_min_p('#divempcode').css('display', 'none');
            if (jsondata[0].value == '1') {
                jquery_min_p('#txtclname').val('');
                jquery_min_p('#txtclname').attr('placeholder', 'Name already exist.');
                jquery_min_p('#txtclname').addClass('validate');
            }
            else {

                //jquery_min_p('#divempcode').css('display', 'none');
                // saveemployee();
                //Reset();
            }

        },

        error: function (result) {
            // alert("There is a Problem, Try Again!");
            //jquery_min_p('#popupsuccess').text('There is a Problem, Try Again!');
            //jquery_min_p('#savePopup').modal('show');
            jquery_min_p('#hwarning').text('Their is problem,Try Again');
            jquery_min_p('#WarningPopup').modal('show');
        }
    });
}


function mobilecheck() {
    var mobile = document.getElementById("txtclmobile").value;
    var pattern = /^\d{10}$/;
    if (pattern.test(mobile)) {
        //alert("Your mobile number : " + mobile);
        return true;
    }





    // alert("It is not valid mobile number.input 10 digits number!");
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
        //alert("Your mobile number : " + mobile);
        return true;
    }





    // alert("It is not valid mobile number.input 10 digits number!");
    //jquery_min_p('#txtissuemobno').attr("placeholder", "Mobile Number");
    //jquery_min_p('#txtissuemobno').val('');
    //jquery_min_p('#txtissuemobno').attr("placeholder", "Invalid number!!");
    //jquery_min_p('#txtissuemobno').addClass('validate');
    return false;
}




function Validation() {
    var Flag = 0;




    if ($.trim(jquery_min_p('#txtclname').val()) == '') {
        jquery_min_p('#txtclname').addClass('validate');
        Flag = 1;
    }

    if ($.trim(jquery_min_p('#txtclmobile').val()) == '') {
        jquery_min_p('#txtclmobile').addClass('validate');
        Flag = 1;
    }

    //var length = jquery_min_p("#ddlitemgroup option:selected").val();
    //var length1 = jquery_min_p("#ddlUOM option:selected").val();


    if (jquery_min_p('#txtclcardno').val() == '') {
        jquery_min_p('#txtclcardno').addClass('validate');
        Flag = 1;
    }


    if ($.trim(jquery_min_p('#txtcladdress').val()) == '') {
        jquery_min_p('#txtcladdress').addClass('validate');
        Flag = 1;
    }


    if (jquery_min_p('#txtclemail').val() == '') {
        jquery_min_p('#txtclemail').addClass('validate');
        Flag = 1;
    }
   

    //if (jquery_min_p('#txtissuemobno').val() == '') {
    //    jquery_min_p('#txtissuemobno').addClass('validate');
    //    Flag = 1;
    //}

    //if (jquery_min_p('#txtissuecardno').val() == '') {
    //    jquery_min_p('#txtissuecardno').addClass('validate');
    //    Flag = 1;
    //}

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

    //if (jquery_min_p('#ddlitemgroup').val() != "0") {
    //    jquery_min_p('#ddlitemgroup').removeClass('validate');
    //}

    if (jquery_min_p("#txtcladdress").val() != '') {
        jquery_min_p("#txtcladdress").removeClass('validate');

    }

    if (jquery_min_p("#txtclcardno").val() != '') {
        jquery_min_p("#txtclcardno").removeClass('validate');

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

    jquery_min_p("#txtclcardno").val('');
    jquery_min_p("#txtcladdress").val('');
    jquery_min_p("#txtclname").val('');
    jquery_min_p("#txtclemail").val('');

    //jquery_min_p("#txtissuecardno").val('');
    //jquery_min_p("#txtissuemobno").val('');

    //jquery_min_p('#lblricardno').text('');
    //jquery_min_p('#lblriname').text('');
    //jquery_min_p('#lblrimobno').text('');
    //jquery_min_p('#lblriemail').text('');



    jquery_min_p('#txtclmobile').removeClass('validate');

    jquery_min_p('#txtclcardno').removeClass('validate');
    jquery_min_p('#txtcladdress').removeClass('validate');
    jquery_min_p('#txtclname').removeClass('validate');


    //jquery_min_p('#txtissuecardno').removeClass('validate');
    //jquery_min_p('#txtissuemobno').removeClass('validate');
    //jquery_min_p('#txtissuenwcardno').removeClass('validate');


}

function ReissueReset()
{
    jquery_min_p('#lblricardno').text('');
    jquery_min_p('#lblriname').text('');
    jquery_min_p('#lblrimobno').text('');
    jquery_min_p('#lblriemail').text('');
    jquery_min_p("#txtissuecardno").val('');
    jquery_min_p("#txtissuemobno").val('');

    jquery_min_p('#txtissuecardno').removeClass('validate');
    jquery_min_p('#txtissuemobno').removeClass('validate');
    jquery_min_p('#txtissuenwcardno').removeClass('validate');
}


function FilterCardNo() {
    var cardno = jquery_min_p('#txtclcardno').val().replace('\'', '\\\'');

    var restroid = id;
    var dataCompany = [];
    dataCompany = [];
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/CustomerLoyalty/FilterCardNo",
        data: "{'cardno':'" + cardno + "','restroid':'" + restroid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            
            
            jquery_min_p("#txtclcardno").html("");
            var jsondata = eval(result);
            //dataCompany.splice(0, dataCompany.length);

            if (result[i].value == '0') {
                //alert('no data');
                jquery_min_p('#hwarning').text('Card Already Issued');
                jquery_min_p('#WarningPopup').modal('show');
            }
            else {
                //var dataCompany = [];
                for (i = 0; i < result.length; i++) {
                    dataCompany.push(result[i].cardno);
                }


                // console.log(dataCompany);
                jquery_min_p("#txtclcardno").autocomplete({
                    source: dataCompany
                });
            }






        },

        error: function (result) {
            // alert("There is a Problem, Try Again!");
            //jquery_min_p('#popupsuccess').text('There is a Problem, Try Again!');
            //jquery_min_p('#savePopup').modal('show');
            jquery_min_p('#hwarning').text('Their is problem,Try Again');
            jquery_min_p('#WarningPopup').modal('show');
        }
    });
}








function FilterIssueCardNo() {
    var cardno = jquery_min_p('#txtclcardno').val().replace('\'', '\\\'');

    var restroid = id;
    var dataCompany = [];
    dataCompany = [];
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/CustomerLoyalty/FilterCardNo",
        data: "{'cardno':'" + cardno + "','restroid':'" + restroid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;


            jquery_min_p("#txtissuenwcardno").html("");
            var jsondata = eval(result);
            //dataCompany.splice(0, dataCompany.length);

            if (result[i].value == '0') {
                //alert('no data');
                jquery_min_p('#hwarning').text('Card Already Issued');
                jquery_min_p('#WarningPopup').modal('show');
            }
            else {
                //var dataCompany = [];
                for (i = 0; i < result.length; i++) {
                    dataCompany.push(result[i].cardno);
                }


                // console.log(dataCompany);
                //jquery_min_p("#txtissuenwcardno").autocomplete({
                //    source: dataCompany
                //});
            }






        },

        error: function (result) {
            // alert("There is a Problem, Try Again!");
            //jquery_min_p('#popupsuccess').text('There is a Problem, Try Again!');
            //jquery_min_p('#savePopup').modal('show');
            jquery_min_p('#hwarning').text('Their is problem,Try Again');
            jquery_min_p('#WarningPopup').modal('show');
        }
    });
}

function showcncarddetails() {

    cardno = jquery_min_p("#txtissuecardno").val();
   // mobno = jquery_min_p("#txtissuemobno").val();
    // alert(empid);    
    if (cardno != '') {


        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/CustomerLoyalty/showccarddetails",
            data: "{'cardno':'" + cardno + "'}",
            dataType: "json",
            async: false,
            success: function (result) {
                var i = 0;
                var jsondata = eval(result);


                jquery_min_p('#lblricardno').text("");
                jquery_min_p('#lblriname').text("");
                jquery_min_p('#lblrimobno').text("");
                jquery_min_p('#lblriemail').text("");

                jquery_min_p("#txtissuecardno").val('');
                jquery_min_p("#txtissuemobno").val('');
                // jquery_min_p('#successPopup').modal('show');

                var cardNo = jsondata[0].cardNo;
                var CusName = jsondata[0].CusName;
                var MobileNo = jsondata[0].MobileNo;
                var EmailId = jsondata[0].EmailId;

                // alert(cardNo);


                jquery_min_p('#lblricardno').text(cardNo);
                jquery_min_p('#lblriname').text(CusName);
                jquery_min_p('#lblrimobno').text(MobileNo);
                jquery_min_p('#lblriemail').text(EmailId);

                jquery_min_p("#lblricardno").css("display", "block");
                jquery_min_p("#lblriname").css("display", "block");
                jquery_min_p("#lblrimobno").css("display", "block");
                jquery_min_p("#lblriemail").css("display", "block");



                //  jquery_min_p("#dvreissue").css('display', 'block');


                //jquery_min_p("#lblcode").css("display", "block");
                //jquery_min_p("#lblriname").css("display", "block");
                //jquery_min_p("#lblmobile").css("display", "block");
                //jquery_min_p("#lblriemail").css("display", "block");
                //jquery_min_p("#lblrest").css("display", "block");
                //jquery_min_p("#lblroledisplay").css("display", "block");
                //jquery_min_p("#lblkitchen").css("display", "block");



                //jquery_min_p("#txtcode").css("display", "none");
                //jquery_min_p("#txtname").css("display", "none");
                //jquery_min_p("#txtmobile").css("display", "none");
                //jquery_min_p("#txtemail").css("display", "none");
                //jquery_min_p("#ddlrest").css("display", "none");
                ////jquery_min_p("#ddlselectroledisplay")
                ////jquery_min_p('#ddlselectroledisplay').selectpicker('hide');
                //jquery_min_p("#ddlrole").css("display", "none");
                //jquery_min_p("#ddlkitchen").css("display", "none");
                //jquery_min_p("#divuserpin").css("display", "none");
                //jquery_min_p("#divpassword").css("display", "none");
                //jquery_min_p("#divconpassword").css("display", "none");
                //jquery_min_p("#divaccesscode").css("display", "none");
                //jquery_min_p("#btnsaveemp").css("display", "none");
                //jquery_min_p("#btncancelemp").css("display", "none");
                //jquery_min_p("#dvimage").css("display", "none");



            },
            error: function (result) {
                // alert("There is a Problem, Try Again!");
                jquery_min_p('#hwarning').text('Their is problem,Try Again');
                jquery_min_p('#WarningPopup').modal('show');
            }

        });
    }
    else
    {
       // Reset();
       // RemoveClass();
    }

}





function showmbcarddetails() {

    mobno = jquery_min_p("#txtissuemobno").val();
    
    
    if (mobno != '') {


        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/CustomerLoyalty/showmbcarddetails",
            data: "{'mobno':'" + mobno + "'}",
            dataType: "json",
            async: false,
            success: function (result) {
                var i = 0;
                var jsondata = eval(result);


                jquery_min_p('#lblricardno').text('');
                jquery_min_p('#lblriname').text('');
                jquery_min_p('#lblrimobno').text('');
                jquery_min_p('#lblriemail').text('');

                jquery_min_p("#txtissuecardno").val('');
                jquery_min_p("#txtissuemobno").val('');
                // jquery_min_p('#successPopup').modal('show');

                var cardNo = jsondata[0].cardNo;
                var CusName = jsondata[0].CusName;
                var MobileNo = jsondata[0].MobileNo;
                var EmailId = jsondata[0].EmailId;


                jquery_min_p('#lblricardno').text(cardNo);
                jquery_min_p('#lblriname').text(CusName);
                jquery_min_p('#lblrimobno').text(MobileNo);
                jquery_min_p('#lblriemail').text(EmailId);



                jquery_min_p("#lblricardno").css("display", "block");
                jquery_min_p("#lblriname").css("display", "block");
                jquery_min_p("#lblrimobno").css("display", "block");
                jquery_min_p("#lblriemail").css("display", "block");



                // jquery_min_p("#dvreissue").css('display', 'block');

                //jquery_min_p("#lblrest").css("display", "block");
                //jquery_min_p("#lblroledisplay").css("display", "block");
                //jquery_min_p("#lblkitchen").css("display", "block");



                //jquery_min_p("#txtcode").css("display", "none");
                //jquery_min_p("#txtname").css("display", "none");
                //jquery_min_p("#txtmobile").css("display", "none");
                //jquery_min_p("#txtemail").css("display", "none");
                //jquery_min_p("#ddlrest").css("display", "none");
                ////jquery_min_p("#ddlselectroledisplay")
                ////jquery_min_p('#ddlselectroledisplay').selectpicker('hide');
                //jquery_min_p("#ddlrole").css("display", "none");
                //jquery_min_p("#ddlkitchen").css("display", "none");
                //jquery_min_p("#divuserpin").css("display", "none");
                //jquery_min_p("#divpassword").css("display", "none");
                //jquery_min_p("#divconpassword").css("display", "none");
                //jquery_min_p("#divaccesscode").css("display", "none");
                //jquery_min_p("#btnsaveemp").css("display", "none");
                //jquery_min_p("#btncancelemp").css("display", "none");
                //jquery_min_p("#dvimage").css("display", "none");



            },
            error: function (result) {
                //alert("There is a Problem, Try Again!");
                jquery_min_p('#hwarning').text('Their is problem,Try Again');
                jquery_min_p('#WarningPopup').modal('show');
            }
        });
    }
    else
    {
       // Reset();
       // RemoveClass();
    }

}


function ReissueCustomerLoyality() {

   // Reset();
    restroid = id;
   
    var name = jquery_min_p('#lblriname').text();

    var cardno = jquery_min_p('#txtissuenwcardno').val().replace('\'', '\\\'');
    var mobile = jquery_min_p('#lblrimobno').text();
    
    var email = jquery_min_p('#lblriemail').text();

    var ocardno = jquery_min_p('#lblricardno').text();
    
    {

        // jquery_min_p('#divconpass').css('display', 'none');
        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/CustomerLoyalty/ReissueCustomerLoyality",
            data: "{'name':'" + name + "','cardno':'" + cardno + "','mobile':'" + mobile + "','email':'" + email + "','restroid':'" + restroid + "','ocardno':'" + ocardno + "'}",

            dataType: "json",
            async: false,
            success: function (result) {
                var i = 0;
                var jsondata = eval(result);

                //jquery_min_p('#divnewitem').modal('hide');
                if (result == "0") {
                    jquery_min_p('#popupsuccess').text('Card ReIssued Successfully');
                    jquery_min_p('#savePopup').modal('show');
                }
                ReissueReset();
                jquery_min_p("#txtissuenwcardno").val('');

                jquery_min_p('#lblricardno').text('');
                jquery_min_p('#lblriname').text('');
                jquery_min_p('#lblrimobno').text('');
                jquery_min_p('#lblriemail').text('');
                jquery_min_p('#dvreissue').css('display', 'none');
                // Reset();

                // jquery_min_p('#successPopup').modal('show');
                //jquery_min_p('#txtcode').val(jsondata[0].EmpCode);
                //jquery_min_p('#txtname').val(jsondata[0].EmpName);
                //jquery_min_p('#txtmobile').val(jsondata[0].mobileNo);
                //jquery_min_p('#txtemail').val(jsondata[0].emailId);

                //Reset();

                // BindEmployeeDetails();

            },
            error: function (result) {
                // alert("There is a Problem, Try Again!");

                jquery_min_p('#hwarning').text('Their is problem,Try Again');
                jquery_min_p('#WarningPopup').modal('show');
            }
        });
    }

}



function CheckReissueCardno() {
    //Reset();
    var cardno = jquery_min_p('#txtissuecardno').val().replace('\'', '\\\'');
    var restroid = id;
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/CustomerLoyalty/CheckReissueCardno",
        data: "{'cardno':'" + cardno + "','restroid':'" + restroid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsondata = eval(result);
            // alert(jsondata[0].result);
            // alert(result[0]);
            //jquery_min_p('#divempcode').css('display', 'none');
            if (jsondata[0].value == '1') {
                jquery_min_p('#txtissuecardno').val('');
                jquery_min_p('#txtissuemobno').val('');
                //jquery_min_p('#txtissuecardno').attr('placeholder', 'Name doesnot exist.');
                //jquery_min_p('#txtissuecardno').addClass('validate');
                //jquery_min_p('#hwarning').text('Invalid Card Number');
                //jquery_min_p('#WarningPopup').modal('show');

                jquery_min_p('#h6warning').text('Invalid Card Number');
                jquery_min_p('#dngwarn').modal('show');
                jquery_min_p('#dvreissue').css('display', 'none');
                ReissueReset();
            }
            else {
                jquery_min_p('#dvreissue').css('display', 'flex');
               // jquery_min_p('#txtissuecardno').attr('placeholder', 'Name');
                showcncarddetails();
                //jquery_min_p('#divempcode').css('display', 'none');
                // saveemployee();
                //Reset();
            }

        },

        error: function (result) {
            // alert("There is a Problem, Try Again!");
            //jquery_min_p('#popupsuccess').text('There is a Problem, Try Again!');
            //jquery_min_p('#savePopup').modal('show');
            jquery_min_p('#hwarning').text('Their is problem,Try Again');
            jquery_min_p('#WarningPopup').modal('show');
        }
    });
}



function CheckReissueMobileNo() {
    var mobno = jquery_min_p('#txtissuemobno').val().replace('\'', '\\\'');
    var restroid = id;  
    ReIssuemobilecheck();
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/CustomerLoyalty/CheckReissueMobileNo",
        data: "{'mobno':'" + mobno + "','restroid':'" + restroid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsondata = eval(result);
            
            if (jsondata[0].value == '1') {
                jquery_min_p('#txtissuecardno').val('');
                jquery_min_p('#txtissuemobno').val('');
                //jquery_min_p('#txtissuecardno').attr('placeholder', 'Mobile Number doesnot exist.');
                //jquery_min_p('#txtissuecardno').addClass('validate');
                //jquery_min_p('#hwarning').text('Mobile number does not exist.');
                //jquery_min_p('#WarningPopup').modal('show');

                jquery_min_p('#h6warning').text('Mobile number does not exist.');
                jquery_min_p('#dngwarn').modal('show');
                jquery_min_p('#dvreissue').css('display', 'none');
            }
            else {
                jquery_min_p('#dvreissue').css('display', 'flex');
                showmbcarddetails();
                //jquery_min_p('#divempcode').css('display', 'none');
                // saveemployee();
                //Reset();
            }

        },

        error: function (result) {
            // alert("There is a Problem, Try Again!");
            //jquery_min_p('#popupsuccess').text('There is a Problem, Try Again!');
            //jquery_min_p('#savePopup').modal('show');
            jquery_min_p('#hwarning').text('Their is problem,Try Again');
            jquery_min_p('#WarningPopup').modal('show');
        }
    });
}