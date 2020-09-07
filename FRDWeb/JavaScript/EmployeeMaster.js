var id = "";
var tag = 0;
var lempId = '';
var RestroId = '';
var IsimageCount = '0';

jquery_min_p(document).ready(function () {

    id = jquery_min_p("#lblrestroid").text();
    //alert(id);
    BindEmployeeDetails();
    RoleDropdown();
    jquery_min_p('#cardview').click(function () {
        jquery_min_p('#seconddiv').css('display', 'none');
        jquery_min_p('#maindiv').css('display', 'flex');
        bootstrap_min_p('#icard').modal('hide');
        BindEmployeeDetails();

    });

    jquery_min_p('#listview').click(function () {
        jquery_min_p('#seconddiv').css('display', 'block');
        jquery_min_p('#maindiv').css('display', 'none');
        bootstrap_min_p('#icard').modal('hide');
        BindEmployeeList();
        Reset();


    });

    //jquery_min_p(document).keydown(function (event) {
    //    if (event.keyCode == 27) {
    //        jquery_min_p('#icard').modal('hide');


    //    }
    //});


    //jquery_min_p("#divaddemp").click(function () {

    //    bootstrap_min_p('#icard').modal('show');
    //});


    jquery_min_p("#yesBtn").click(function () {


        saveemployee();
        jquery_min_p('#confirmationPopup').modal('hide');






    });



    jquery_min_p("#noBtn").click(function () {
        jquery_min_p('#confirmationPopup').modal('hide');
        //return false;

    });




    //$(document).keydown(function (e) {
    //    // ESCAPE key pressed
    //    if (e.keyCode == 27) {
    //        // window.close();
    //        //jquery_min_p('#icard').modal('hide');
    //        bootstrap_min_p('#icard').modal('hide');


    //    }
    //});

    jquery_min_p(document).keydown(function (event) {
        if (event.keyCode == 27) {
            //jquery_min_p("#icard").modal('hide');
            // bootstrap_min_p('#icard').hide();
            // bootstrap_min_p("#icard").hide();
            //jquery_min_p("#icard").css('display','none');



            jquery_min_p("#lblcode").css("display", "none");
            jquery_min_p("#lblname").css("display", "none");
            jquery_min_p("#lblmobile").css("display", "none");
            jquery_min_p("#lblemail").css("display", "none");
            jquery_min_p("#lblrest").css("display", "none");
            jquery_min_p("#lblroledisplay").css("display", "none");
            jquery_min_p("#lblkitchen").css("display", "none");



            jquery_min_p("#txtcode").css("display", "none");
            jquery_min_p("#txtname").css("display", "none");
            jquery_min_p("#txtmobile").css("display", "none");
            jquery_min_p("#txtemail").css("display", "none");
            jquery_min_p("#dvrest").css("display", "none");
            //jquery_min_p("#ddlselectroledisplay") ddlrole
            // jquery_min_p('#ddlselectroledisplay').selectpicker('hide');
            jquery_min_p("#ddlrole").css("display", "none");

            jquery_min_p("#dvkitchen").css("display", "none");
            jquery_min_p("#divuserpin").css("display", "none");
            jquery_min_p("#divpassword").css("display", "none");
            jquery_min_p("#divconpassword").css("display", "none");
            jquery_min_p("#divaccesscode").css("display", "none");
            jquery_min_p("#btnsaveemp").css("display", "none");
            jquery_min_p("#btncancelemp").css("display", "none");
            jquery_min_p("#dvimage").css("display", "none");
            bootstrap_min_p('#icard').modal('hide');



        }
    });

    //jquery_min_p(document).ready(function () {
    //    jquery_min_p("#txtinput").on("keyup", function () {
    //        var value = $(this).val().toLowerCase();
    //        jquery_min_p(".maindiv *").filter(function () {
    //            jquery_min_p(this).toggle(jquery_min_p(this).text().toLowerCase().indexOf(value) > -1)
    //        });
    //    });
    //});



    jquery_min_p("#btnsaveClose").click(function () {

        //alert('hello');


        jquery_min_p('#empsavePopup').modal('hide');



    });

    jquery_min_p("#listview").click(function () {

        //alert('hello');

        BindEmployeeList();
        jquery_min_p("#dvexit").css("display", "block");



    });



    jquery_min_p("#btnexit").click(function () {

        var url = "/Master/Home";
        window.location.href = url;
        Reset();
        //location.reload();


    });
    jquery_min_p("#btnmsaveclose").click(function () {

        var url = "/Master/EmployeeMaster";
        window.location.href = url;
        location.reload();


    });



    jquery_min_p("#btnclose").click(function () {

        Reset();
        jquery_min_p("#imagefiles").val(null);
        RemoveClass();


    });

    jquery_min_p("#btncancelemp").click(function () {

        Reset();
        jquery_min_p("#imagefiles").val(null);
        RemoveClass();


    });

    jquery_min_p("#btnsaveemp").click(function () {


        if (Validation()) {
            //Checkcode();


            jquery_min_p('#hconfirm').text('Are You Sure Want To Add Employee !');
            jquery_min_p('#confirmationPopup').modal('show');



            //location.reload();

        }
        else {
            // jquery_min_p("#divempselect").css("display", "block");
            return false;

        }




    });


    jquery_min_p("#maindiv").click(function () {



        jquery_min_p("#lblcode").css("display", "block");
        jquery_min_p("#lblname").css("display", "block");
        jquery_min_p("#lblmobile").css("display", "block");
        jquery_min_p("#lblemail").css("display", "block");
        jquery_min_p("#lblrest").css("display", "block");
        jquery_min_p("#lblroledisplay").css("display", "block");
        jquery_min_p("#lblkitchen").css("display", "block");



        jquery_min_p("#txtcode").css("display", "none");
        jquery_min_p("#txtname").css("display", "none");
        jquery_min_p("#txtmobile").css("display", "none");
        jquery_min_p("#txtemail").css("display", "none");
        jquery_min_p("#dvrest").css("display", "none");
        //jquery_min_p("#ddlselectroledisplay") ddlrole
        // jquery_min_p('#ddlselectroledisplay').selectpicker('hide');
        jquery_min_p("#ddlrole").css("display", "none");

        jquery_min_p("#dvkitchen").css("display", "none");
        jquery_min_p("#divuserpin").css("display", "none");
        jquery_min_p("#divpassword").css("display", "none");
        jquery_min_p("#divconpassword").css("display", "none");
        jquery_min_p("#divaccesscode").css("display", "none");
        jquery_min_p("#btnsaveemp").css("display", "none");
        jquery_min_p("#btncancelemp").css("display", "none");
        jquery_min_p("#dvimage").css("display", "none");
        bootstrap_min_p('#icard1').modal('hide');




    });





    jquery_min_p("#txtgridinput").on("keyup", function () {
        val = jquery_min_p(this).val().toLowerCase();
        jquery_min_p("#maindiv1 ").each(function () {
            jquery_min_p(this).toggle(jquery_min_p(this).text().toLowerCase().includes(val));
        });
    });

    jquery_min_p("#txtlistinput").on("keyup", function () {
        numericcheck();
    });



    //jquery_min_p("#txtlistinput").on("keyup", function () {
    //var txtlistinput = jquery_min_p("input#txtlistinput").val();
    //if (txtlistinput !== "" && !jquery_min_p.isNumeric(txtlistinput)) {
    //    textcheck();
    //}
    //else{
    //    numericcheck();
    //} 
    //});

    //parasssssssssssssss

    //function KitchenDropdown() {

    //    // alert('hi');
    //    //alert(jquery_min_p('option:selected', jquery_min_p(this)).text());
    //    var restroId = jquery_min_p("#ddlrerest option:selected").val();
    //    //var a=jquery_min_p('select[name="ddlrest"] option:selected').value();
    //    //alert(a);


    //    var restron = jquery_min_p('#ddlrest').val();
    //    jquery_min_p("#lblkitchen").html("");

    //    jquery_min_p.ajax({
    //        type: "POST",
    //        contentType: "application/json; charset=utf-8",
    //        url: "/Master/KitchenDropdown",
    //        data: "{'restroId':'" + restroId + "'}",
    //        dataType: "json",
    //        async: false,
    //        success: function (result) {
    //            var i = 0;
    //            var jsondata = eval(result);

    //            var newOption1 = newOption1 + "<option value='0' selected='Select'>Select</option>";
    //            jquery_min_p('#lblkitchen').append(newOption1);
    //            for (var i = 0; i < result.length; i++) {

    //                var newOption = jquery_min_p('<option>');
    //                newOption.attr('value', result[i].kitchensectionId).text(result[i].kitchenSection);


    //                jquery_min_p('#lblkitchen').append(newOption);

    //            }






    //        },
    //        error: function (result) {
    //            // alert("There is a Problem, Try Again!");
    //            jquery_min_p('#h6warning').text('There is a Problem, Try Again!');
    //            jquery_min_p('#dngwarn').modal('show');
    //        }
    //    });
    //}

    function numericcheck() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("txtlistinput");
        filter = input.value.toUpperCase();
        table = document.getElementById("tbllist");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];
            td1 = tr[i].getElementsByTagName("td")[2];
            if (td) {
                txtValue = td.textContent || td.innerText;
                txtValue1 = td1.textContent || td1.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1 || txtValue1.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    //function textcheck() {
    //    var input, filter, table, tr, td, i, txtValue;
    //    input = document.getElementById("txtlistinput");
    //    filter = input.value.toUpperCase();
    //    table = document.getElementById("tbllist");
    //    tr = table.getElementsByTagName("tr");
    //    for (i = 0; i < tr.length; i++) {
    //        td = tr[i].getElementsByTagName("td")[2];
    //        if (td) {
    //            txtValue = td.textContent || td.innerText;
    //            if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //                tr[i].style.display = "";
    //            } else {
    //                tr[i].style.display = "none";
    //            }
    //        }
    //    }
    //}

    //jquery_min_p("#txtgridinput").on("keyup", function () {
    //    val = jquery_min_p(this).val().toLowerCase();
    //    jquery_min_p("#maindiv1 ").each(function () {
    //        jquery_min_p(this).toggle(jquery_min_p(this).text().toLowerCase().includes(val));
    //    });
    //});



    ////paras
    //jquery_min_p("#txtlistinput").on("keyup", function () {
    //    var value = jquery_min_p(this).val().toLowerCase();
    //    jquery_min_p("#tbllist tr").filter(function () {
    //        jquery_min_p(this).toggle(jquery_min_p(this).text().toLowerCase().indexOf(value) > -1)
    //    });
    //});

    //jquery_min_p("#txtlistinput").on("keyup", function () {
    //    //BindEmployeeDetails();
    //     BindEmployeeList()

    //});




    //jquery_min_p("#txtlistinput").on("keyup", function (event) {
    //    var filter = event.target.value.toUpperCase();
    //    var rows = document.querySelector("#tbllist tbody").rows;

    //    for (var i = 0; i < rows.length; i++) {
    //        var firstCol = rows[i].cells[0].textContent.toUpperCase();
    //        var secondCol = rows[i].cells[1].textContent.toUpperCase();
    //        if (firstCol.indexOf(filter) > -1 || secondCol.indexOf(filter) > -1) {
    //            rows[i].style.display = "";
    //        } else {
    //            rows[i].style.display = "none";
    //        }
    //    }
    //});


    jquery_min_p("#btnresaveemp").click(function () {


        if (ValidationMaster()) {

            RestaurantsUpdateList();

        }
        else {

            return false;

        }

    });






    jquery_min_p("#divaddemp").click(function () {
        Reset();
        jquery_min_p('#ddlkitchen').html("");
        var newOption1 = newOption1 + "<option value='0' selected='Select'>Select</option>";

        jquery_min_p("#ddlkitchen").append(newOption1);
        RestroDropdown();
        bootstrap_min_p('#icard1').modal('show');
        //jquery_min_p('#ddlkitchen').css('display', 'none');
        jquery_min_p('#lblcode').css('display', 'none');
        jquery_min_p('#lblname').css('display', 'none');
        jquery_min_p('#lblmobile').css('display', 'none');
        jquery_min_p('#lblemail').css('display', 'none');
        jquery_min_p('#btnresaveemp').css('display', 'none');
        jquery_min_p('#btnsaveemp').css('display', 'flex');
        jquery_min_p('#divuserpin').css('display', 'flex');
        jquery_min_p('#divpassword').css('display', 'flex');
        jquery_min_p('#divconpassword').css('display', 'flex');
        jquery_min_p('#divaccesscode').css('display', 'flex');




        //RoleDropdown();
        jquery_min_p("#txtuserpin").keypress(function (e) {
            var key = e.keyCode;
            if (key >= 65 && key <= 90 || key >= 97 && key <= 122) {
                e.preventDefault();
            }
        });
        //jquery_min_p("#txtcode").keypress(function (e) {
        //    var key = e.keyCode;
        //    if (key >= 65 && key <= 90 || key >= 97 && key <= 122) {
        //        e.preventDefault();
        //    }
        //});

        //$("#txtcode").focus();
        jquery_min_p('#icard1').on('shown.bs.modal', function () {
            jquery_min_p('#txtcode').focus();
        })
        jquery_min_p("#txtcode").keypress(function (e) {
            var key = e.keyCode;
            if ((key > 47 && key < 58) || (key > 64 && key < 91) || (key > 96 && key < 123)) {

            }
            else {
                e.preventDefault();
            }
        });




        jquery_min_p("#txtname").keypress(function (e) {
            var key = e.keyCode;
            if (key > 47 && key < 58 || key > 64 && key < 91 || key > 96 && key < 123) {

            }
            else {
                e.preventDefault();
            }
        });

        jquery_min_p("#txtmobile").keypress(function (e) {
            var key = e.keyCode;
            if (key >= 65 && key <= 90 || key >= 97 && key <= 122) {
                e.preventDefault();
            }
        });




        //jquery_min_p(function () {
        //    jquery_min_p('input.alpha[$id=tb1]').keyup(function () {
        //        if (this.value.match(/[^a-zA-Z0-9 ]/g)) {
        //            this.value = this.value.replace(/[^a-zA-Z0-9 ]/g, '');
        //        }
        //    });
        //});

        //jquery_min_p.validator.addMethod("#txtname", function (value, element) {
        //    return this.optional(element) || /^\w+$/i.test(value);    
        //}, "Letters, numbers, and . only please");


        jquery_min_p("#ddlrole").css("display", "block");
        jquery_min_p("#txtcode").css("display", "block");
        jquery_min_p("#txtname").css("display", "block");
        jquery_min_p("#txtmobile").css("display", "block");
        jquery_min_p("#txtemail").css("display", "block");
        jquery_min_p("#dvrest").css("display", "block");
        //jquery_min_p("#ddlselectroledisplay").css("display", "block");
        //jquery_min_p('#ddlselectroledisplay')('show');
        //jquery_min_p("#ddlselectroledisplay").css("display", "none");
        jquery_min_p("#divuserpin").css("display", "flex");
        jquery_min_p("#divpassword").css("display", "flex");
        jquery_min_p("#divconpassword").css("display", "flex");
        jquery_min_p("#divaccesscode").css("display", "flex");
        jquery_min_p("#dvkitchen").css("display", "inline-block");
        jquery_min_p("#btnsaveemp").css("display", "block");
        jquery_min_p("#btncancelemp").css("display", "block");
        jquery_min_p("#dvimage").css("display", "flex");



        jquery_min_p("#lblcode").css("display", "none");
        jquery_min_p("#lblname").css("display", "none");
        jquery_min_p("#lblmobile").css("display", "none");
        jquery_min_p("#lblemail").css("display", "none");
        jquery_min_p("#lblrest").css("display", "none");
        jquery_min_p("#lblroledisplay").css("display", "none");
        jquery_min_p("#lblkitchen").css("display", "none");
        //jquery_min_p("#maindiv").css("display", "none");dvimage

        RestroDropdown();
        // KitchenDropdown();
        RoleDropdown();
        Reset();



    });



    jquery_min_p('#txtemail').change(function () {
        var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
        if (regex.test(document.getElementById("txtemail").value) == true) {

            jquery_min_p('#txtemail').removeClass('validate');

        }
        else {

            jquery_min_p('#txtemail').val('');
            jquery_min_p('#txtemail').attr("placeholder", "Invalid E-Mail!!");
            jquery_min_p('#txtemail').addClass('validate');
        }

    });


    //jquery_min_p("#txtmobile").keydown(function (event) {
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









    jquery_min_p("#dvexit").css("display", "block");




});




//function filterTable(event) {
//    var filter = event.target.value.toUpperCase();
//    var rows = document.querySelector("#tbllist tbody").rows;

//    for (var i = 0; i < rows.length; i++) {
//        var firstCol = rows[i].cells[0].textContent.toUpperCase();
//        var secondCol = rows[i].cells[1].textContent.toUpperCase();
//        if (firstCol.indexOf(filter) > -1 || secondCol.indexOf(filter) > -1) {
//            rows[i].style.display = "";
//        } else {
//            rows[i].style.display = "none";
//        }
//    }
//}











function mobilecheck() {
    var mobile = document.getElementById("txtmobile").value;
    var pattern = /^\d{10}$/;
    if (pattern.test(mobile)) {
        //alert("Your mobile number : " + mobile);
        return true;
    }



    // k = event.which;
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



    // alert("It is not valid mobile number.input 10 digits number!");
    jquery_min_p('#txtmobile').attr("placeholder", "Mobile Number");
    jquery_min_p('#txtmobile').val('');
    jquery_min_p('#txtmobile').attr("placeholder", "Invalid number!!");
    jquery_min_p('#txtmobile').addClass('validate');
    return false;
}








function BindEmployeeDetails() {
    var RestroId = jquery_min_p("#lblrestroid").val();
    var lempId = jquery_min_p("#lblLempid").val();
    jquery_min_p("#maindiv").html("");
    jquery_min_p("#firstdiv").html("");
    jquery_min_p.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Master/EmployeeMasterDetailsGrid", /// <reference path="../WebServices/HolidayList.asmx" />

        data: "{}",
        dataType: "json",
        async: false,
        success: function (result) {
            // alert(result);
            console.log(result);
            var i = 0;
            var jsonData = eval(result);
            var arraycount = result.length;



            var Query = "";

            for (var i = 0; i < arraycount; i++) {

                Query = Query + "<div class='col-4 col-md-4' data-toggle='modal' data-target='#icard'  >"; //id='maindiv1'
                Query = Query + " <div class='panel-group'>";
                Query = Query + " <div class='panel panel-default'>";
                Query = Query + " <div class='panel-heading'>";
                Query = Query + "<h4 class='panel-title'>";

                Query = Query + " <a data-toggle='collapse'><i class='fa fa-angle-double-right' aria-hidden='true'></i> Employee Code :" + result[i].EmpCode + "</a></h4> </div>";
                Query = Query + " <div id='employee1' class='panel-collapse collapse show'>";
                Query = Query + "<div class='panel-body' onclick='Check(" + result[i].EmpID + "," + result[i].restroId + ");'>";
                //  Query = Query + "<div class='panel-body' id='test123' ondblclick='BindResturantwisegrid();'>";

                //onclick='Check(" + result[i].EmpID + "," + result[i].restroId + ");'
                Query = Query + "<div class='row'>";
                Query = Query + "<div class='col-md-9 pr-0'>";


                Query = Query + "<div class='row'>";
                Query = Query + "<label class='col-md-7 fontBold'>Name:</label>";

                Query = Query + "<label class='col-md-5 p-0'>" + result[i].EmpName + "</label></div>";

                Query = Query + "<div class='row'>";
                Query = Query + " <label class='col-md-7 fontBold'>Mobile:</label>";

                Query = Query + "<label class='col-md-5 p-0'>" + result[i].mobileNo + "</label></div>";

                Query = Query + "<div class='row'>";
                Query = Query + "<label class='col-md-7 fontBold'>Email:</label>";

                Query = Query + "<label class='col-md-5 p-0'>" + result[i].EmailId + "</label></div>";

                Query = Query + "<div class='row'>";
                Query = Query + "<label class='col-md-7 fontBold'>Kitchen Section Name:</label>";

                Query = Query + " <label class='col-md-5 p-0'>" + result[i].kitchensectionname + "</label> </div>";


                Query = Query + "<div class='row'>";
                Query = Query + "<label class='col-md-7 fontBold'>Restro Name:</label>";

                Query = Query + " <label class='col-md-5 p-0'>" + result[i].Restroname + "</label> </div>";




                Query = Query + "<div class='row'>";
                Query = Query + "<label class='col-md-7 fontBold'>Role:</label>";

                Query = Query + " <label class='col-md-5 p-0'>" + result[i].RoleName + "</label> </div>";




                Query = Query + "<div class='col-md-4'></div></div>";

                Query = Query + " <div class='col-md-3 pl-0'>";
                Query = Query + "<div class='empProfile'>";

                var path1 = "/EmpImage/" + result[i].restroId + "/" + result[i].EmpID + ".jpg";
                pathcheck(path1);
                if (IsimageCount == 1) {
                    Query = Query + "<img src='../EmpImage/" + result[i].restroId + "/" + result[i].EmpID + ".jpg'/>";
                }
                else {
                    Query = Query + "<img src='/Content/images/user-icon.png'/>";
                }

                // Query = Query + "<img src='" + "../EmpImage/" + result[i].restroId + "/" + result[i].EmpID + ".jpg" + "'/>";
                Query = Query + " </div>";

                Query = Query + " </div>";
                Query = Query + "    </div>";

                Query = Query + "    </div>";
                Query = Query + "     </div>";
                Query = Query + "  </div>";
                Query = Query + " </div>";
                Query = Query + "</div>";







            }








            jquery_min_p("#maindiv").append(Query);
            //jquery_min_p("#firstdiv").append(Query);

            jquery_min_p("#dvexit").css("display", "block");


            jquery_min_p('#dvsearchgrid').css('display', 'block');
            jquery_min_p('#dvsearchlist').css('display', 'none');



        },

        error: function () {

        }
    });





}

function BindEmployeeList() {/// <reference path="../Web Services/job.asmx" />
    var wh = jquery_min_p(document).height();
    var gh = wh - 190;
    var dataCompany = [];
    var searchtx = jquery_min_p('#txtlistinput').val();
    jquery_min_p("#kendogridemployeemaster").html("");

    jquery_min_p.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Master/EmployeeMasterDetails", /// <reference path="../WebServices/HolidayList.asmx" />

        data: "{'searchtx':'" + searchtx + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            // alert(result);
            console.log(result);
            var i = 0;
            var jsonData = eval(result);
            var arraycount = result.length;



            var Query = "";
            Query = Query + "<thead>";
            Query = Query + "<tr>";
            Query = Query + "  <th width='10%'>Sr. No.</th>";
            Query = Query + "<th width='15%'>Code</th>";
            Query = Query + "<th width='20%'>Name</th>";
            Query = Query + "<th width='20%'>Mobile</th>";
            Query = Query + "<th width='20%'>Email</th>";
            Query = Query + "<th width='15%'>Type</th>";
            //Query = Query + "<th width='15%'>searchtx</th>";
            Query = Query + "</tr>";
            Query = Query + "</thead>";
            Query = Query + "<tbody id='tbllist'>";

            for (var i = 0; i < arraycount; i++) {





                Query = Query + "";


                Query = Query + "";
                Query = Query + "<tr data-toggle='modal' data-target='#icard'>";
                Query = Query + "  <td width='10%' onclick='CheckList(" + result[i].EmpID + "," + result[i].restroId + ");'>" + result[i].RowNumber + "</td>";
                Query = Query + "  <td onclick='CheckList(" + result[i].EmpID + "," + result[i].restroId + ");'>" + result[i].EmpCode + "</td>";
                Query = Query + "  <td onclick='CheckList(" + result[i].EmpID + "," + result[i].restroId + ");'>" + result[i].EmpName + "</td>";
                Query = Query + " <td onclick='CheckList(" + result[i].EmpID + "," + result[i].restroId + ");'>" + result[i].mobileNo + "</td>";
                Query = Query + " <td onclick='CheckList(" + result[i].EmpID + "," + result[i].restroId + ");'>" + result[i].EmailId + "</td>";

                Query = Query + "<td onclick='CheckList(" + result[i].EmpID + "," + result[i].restroId + ");'>" + result[i].Type + "</td>";
                //Query = Query + "<td onclick='CheckList(" + result[i].EmpID + "," + result[i].restroId + ");'>" + result[i].searchtx + "</td>";  //paras

                Query = Query + "</tr>";
                //Query = Query + "</tbody>";



            }
            Query = Query + "</tbody>";
            jquery_min_p("#kendogridemployeemaster").append(Query);


            jquery_min_p('#dvsearchgrid').css('display', 'none');
            jquery_min_p('#dvsearchlist').css('display', 'block');



            //for ( i = 0; i < arraycount; i++)
            //{
            //    dataCompany.push({ RowNumber: jsonData[i].RowNumber, EmpID: jsonData[i].EmpID, EmpCode: jsonData[i].EmpCode, EmpName: jsonData[i].EmpName, mobileNo: jsonData[i].mobileNo, emailId: jsonData[i].emailId, Type: jsonData[i].Type, restroId: jsonData[i].restroId, ArabicName: jsonData[i].ArabicName });
            //}


            //jQuery.each(jsonData.Table, function (rec) {

            //    dataCompany.push({ RowNumber: jsonData.Table[i].RowNumber,EmpID: jsonData.Table[i].EmpID, EmpCode: jsonData.Table[i].EmpCode, EmpName: jsonData.Table[i].EmpName, mobileNo: jsonData.Table[i].mobileNo, emailId: jsonData.Table[i].emailId, Type: jsonData.Table[i].Type, restroId: jsonData.Table[i].restroId, ArabicName: jsonData.Table[i].ArabicName });

            //    i++;
            //});




        },

        error: function () {

        }
    });
}


//function Update() {
//    var full_url = document.URL; // Get current url
//    var url_array = full_url.split('/') // Split the string into an array with / as separator
//    var last_segment = url_array[url_array.length - 1];  // Get the last part of the array (-1)
//    alert(last_segment);
//    full_url = " ";
//    //bootstrap_min_p('#addRestroPopup').modal('show');
//   //    var t = jquery_min_p(this).attr('id');
//   // jquery_min_p('#maindiv').text("ID = " + t);

//}


function Check(empid, RestroId) {
    jquery_min_p('#icard1').modal('show');
    jquery_min_p('#btnresaveemp').css('display', 'flex');
    jquery_min_p('#btnsaveemp').css('display', 'none');
    jquery_min_p('#lblLempid').text(empid);
    var empLid = jquery_min_p('#lblLempid').text();

    var restroId = id;
    // alert(empid); RestroId
    // alert(RestroId)
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Master/EmployeeMasterIDDetails",
        data: "{'EmpId':'" + empid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsondata = eval(result);
            RestroDropdown()
            // jquery_min_p('#successPopup').modal('show');

            var EmpCode = jsondata[0].EmpCode;
            var EmpName = jsondata[0].EmpName;
            var mobileNo = jsondata[0].mobileNo;
            var EmailId = jsondata[0].EmailId;
            var RoleName = jsondata[0].RoleName;
            var kitchensectionname = jsondata[0].kitchensectionname;
            var RestroName = jsondata[0].RestroName;
            var roleid = jsondata[0].RoleId;
            var restroid = jsondata[0].restroId;
            var kitchensectionId = jsondata[0].kitchensectionId;




            // var path = "../EmpImage/" + RestroId + "/" + empid + ".jpg";


            var path = "../EmpImage/" + restroId + "/" + empLid + ".jpg";
            pathcheck(path);
            if (IsimageCount == 1) {
                //  Query = Query + "<img src='../EmpImage/" + result[i].restroId + "/" + result[i].EmpID + ".jpg'/>";
                path = "../EmpImage/" + restroId + "/" + empLid + ".jpg";
            }
            else {
                // Query = Query + "<img src='/Content/images/user-icon.png'/>";
                path = "/Content/images/user-icon.png";
            }

            jquery_min_p('#imgempdetails').attr("src", path);




            jquery_min_p('#lblcode').val(EmpCode);
            jquery_min_p('#lblcode').attr("disabled", "disabled");
            jquery_min_p('#lblname').val(EmpName);
            jquery_min_p('#lblmobile').val(mobileNo);
            jquery_min_p('#lblemail').val(EmailId);
            jquery_min_p('#ddlselectroledisplay').val(roleid);
            jquery_min_p('.selectpicker').selectpicker('refresh');
            jquery_min_p('#ddlrest').val(restroid);
            CheckRole();
            //jquery_min_p('.selectpicker').selectpicker('refresh');
            jquery_min_p('#ddlkitchen').val(kitchensectionId);

            jquery_min_p("#lblcode").css("display", "block");
            jquery_min_p("#lblname").css("display", "block");
            jquery_min_p("#lblmobile").css("display", "block");
            jquery_min_p("#lblemail").css("display", "block");
            jquery_min_p("#lblrest").css("display", "block");
            jquery_min_p("#lblroledisplay").css("display", "block");
            jquery_min_p("#lblkitchen").css("display", "block");



            jquery_min_p("#txtcode").css("display", "none");
            jquery_min_p("#txtname").css("display", "none");
            jquery_min_p("#txtmobile").css("display", "none");
            jquery_min_p("#txtemail").css("display", "none");
            jquery_min_p("#dvrest").css("display", "none");
            //jquery_min_p("#ddlselectroledisplay")
            //jquery_min_p('#ddlselectroledisplay').selectpicker('hide');
            jquery_min_p("#ddlrole").css("display", "none");
            jquery_min_p("#dvkitchen").css("display", "none");
            jquery_min_p("#divuserpin").css("display", "none");
            jquery_min_p("#divpassword").css("display", "none");
            jquery_min_p("#divconpassword").css("display", "none");
            jquery_min_p("#divaccesscode").css("display", "none");
            jquery_min_p("#btnsaveemp").css("display", "none");
            jquery_min_p("#btncancelemp").css("display", "none");
            jquery_min_p("#dvimage").css("display", "none");



        },
        error: function (result) {
            //  alert("There is a Problem, Try Again!");
            jquery_min_p('#h6warning').text('There is a Problem, Try Again!');
            jquery_min_p('#dngwarn').modal('show');
        }
    });


}






function CheckList(empid) {
    // alert(empid);
    jquery_min_p('#lblLempid').text(empid);

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Master/EmployeeMasterIDDetails",
        data: "{'EmpId':'" + empid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsondata = eval(result);

            // jquery_min_p('#successPopup').modal('show');
            var empcode = jsondata[0].EmpCode;
            var empname = jsondata[0].EmpName;
            var mobileno = jsondata[0].mobileNo;
            var emailid = jsondata[0].EmailId;
            var roleid = jsondata[0].RoleId;
            var restroid = jsondata[0].restroId;


            jquery_min_p('#lblcode').text(jsondata[0].EmpCode);
            jquery_min_p('#lblname').text(jsondata[0].EmpName);
            jquery_min_p('#lblmobile').text(jsondata[0].mobileNo);
            jquery_min_p('#lblemail').text(jsondata[0].EmailId);
            jquery_min_p('#lblroledisplay').text(jsondata[0].RoleName);
            jquery_min_p('#lblkitchen').text(jsondata[0].kitchensectionname);
            jquery_min_p('#lblrest').text(jsondata[0].RestronNme);

            jquery_min_p('#lblkitchen').text(jsondata[0].kitchensectionId);



            // var path = "../EmpImage/" + RestroId + "/" + empid + ".jpg";


            var path = "../EmpImage/" + restroid + "/" + empid + ".jpg";
            pathcheck(path);
            if (IsimageCount == 1) {
                //  Query = Query + "<img src='../EmpImage/" + result[i].restroId + "/" + result[i].EmpID + ".jpg'/>";
                path = "../EmpImage/" + restroid + "/" + empid + ".jpg";
            }
            else {
                // Query = Query + "<img src='/Content/images/user-icon.png'/>";
                path = "/Content/images/user-icon.png";
            }


            jquery_min_p('#imgempdetails').attr("src", path);

            jquery_min_p('#lblcode').val(EmpCode);
            jquery_min_p('#lblcode').attr("disabled", "disabled");
            jquery_min_p('#lblname').val(EmpName);
            jquery_min_p('#lblmobile').val(mobileNo);
            jquery_min_p('#lblemail').val(EmailId);
            jquery_min_p('#ddlselectroledisplay').val(roleid);
            jquery_min_p('.selectpicker').selectpicker('refresh');
            jquery_min_p('#ddlrest').val(restroid);
            KitchenDropdown();
            jquery_min_p('#ddlkitchen').val(kitchensectionId);


            jquery_min_p("#lblcode").css("display", "block");
            jquery_min_p("#lblname").css("display", "block");
            jquery_min_p("#lblmobile").css("display", "block");
            jquery_min_p("#lblemail").css("display", "block");
            jquery_min_p("#lblrest").css("display", "block");
            jquery_min_p("#lblroledisplay").css("display", "block");
            jquery_min_p("#lblkitchen").css("display", "block");
            jquery_min_p("#dvexit").css("display", "block");

            jquery_min_p("#txtcode").css("display", "none");
            jquery_min_p("#txtname").css("display", "none");
            jquery_min_p("#txtmobile").css("display", "none");
            jquery_min_p("#txtemail").css("display", "none");
            jquery_min_p("#dvrest").css("display", "none");
            //jquery_min_p("#ddlselectroledisplay")
            //jquery_min_p('#ddlselectroledisplay').selectpicker('hide');
            jquery_min_p("#ddlrole").css("display", "none");
            jquery_min_p("#dvkitchen").css("display", "none");
            jquery_min_p("#divuserpin").css("display", "none");
            jquery_min_p("#divpassword").css("display", "none");
            jquery_min_p("#divconpassword").css("display", "none");
            jquery_min_p("#divaccesscode").css("display", "none");
            jquery_min_p("#btnsaveemp").css("display", "none");
            jquery_min_p("#btncancelemp").css("display", "none");
            jquery_min_p("#dvimage").css("display", "none");




        },
        error: function (result) {
            // alert("There is a Problem, Try Again!");
            jquery_min_p('#h6warning').text('There is a Problem, Try Again!');
            jquery_min_p('#dngwarn').modal('show');
        }
    });



}


function checkpassword() {
    var Password = jquery_min_p('#txtpass').val().replace('\'', '\\\'');
    var ConfirmPassword = jquery_min_p('#txtconfirmpass').val().replace('\'', '\\\'');

    if (Password != ConfirmPassword) {
        //alert('Password didnt match.');

        // jquery_min_p('#divconpass').css('display', 'block');
        jquery_min_p('#txtconfirmpass').val('');
        jquery_min_p('#txtconfirmpass').attr('placeholder', 'Password not match.');
        jquery_min_p('#txtconfirmpass').addClass('validate');
    }
    else {

        jquery_min_p('#divconpass').css('display', 'none');
    }


}

function saveemployee() {

    //var =jquery_min_p(' select[name=selValue]').val();
    var RoleId = jquery_min_p('#ddlselectroledisplay').val();
    //alert(RoleId);

    var kitchensectionId = jquery_min_p("#ddlkitchen option:selected").val();
 
    var EmpID = jquery_min_p('#lblempid').text();
    //alert(empid);
    var EmailId = jquery_min_p('#txtemail').val().replace('\'', '\\\'');
    var EmpCode = jquery_min_p('#txtcode').val().replace('\'', '\\\'');
    var EmpName = jquery_min_p('#txtname').val().replace('\'', '\\\'');

    var mobileNo = jquery_min_p('#txtmobile').val().replace('\'', '\\\'');
    // var RoleId = jquery_min_p('#txtmobile').val().replace('\'', '\\\'');
    // var kitchensectionname = jquery_min_p('#ddlkitchen').val();
    //var Restroname = jquery_min_p('#ddlrest').val();
    var restroId = jquery_min_p("#ddlrest option:selected").val();

    jquery_min_p("#lblrestroid").val(restroId);

    var UserPin = jquery_min_p('#txtuserpin').val().replace('\'', '\\\'');
    var Password = jquery_min_p('#txtpass').val().replace('\'', '\\\'');
    var ConfirmPassword = jquery_min_p('#txtconfirmpass').val().replace('\'', '\\\'');
    var AccessCode = jquery_min_p('#txtaccesscode').val().replace('\'', '\\\'');
    // var RoleName = jquery_min_p('#ddlselectroledisplay').val();
    //var ImageData = $("#imagefiles").get(0).files;
    //if (ImageData.length > 0) {
    //    data.append("imagefiles", files[0]);
    //}



    {

        // jquery_min_p('#divconpass').css('display', 'none');
        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/Master/SaveEmployeeMasterDetails",
            data: "{'EmailId':'" + EmailId + "','EmpCode':'" + EmpCode + "','EmpName':'" + EmpName + "','mobileNo':'" + mobileNo + "','kitchensectionId':'" + kitchensectionId + "','restroId':'" + restroId + "','UserPin':'" + UserPin + "','Password':'" + Password + "','ConfirmPassword':'" + ConfirmPassword + "','AccessCode':'" + AccessCode + "','RoleId':'" + RoleId + "'}",

            dataType: "json",
            async: false,
            success: function (result) {
                var i = 0;
                var jsondata = eval(result);


                var jsonData = result.Table;
                // alert(jsonData[0].lrestroId);
                // lrestroId = jsonData[0].lrestroId;
                var jsonData1 = result.Table1;
                var jsonData2 = result.Table2;
                lempId = jsonData1[0].EmpId;
                //lblLempid

                jquery_min_p("#lblLempid").val(lempId);
                // alert(lempId)

                AddEmpImage();

                bootstrap_min_p('#icard').modal('hide');
                jquery_min_p('#popupsuccess').text('Employee Added sucessfully');
                jquery_min_p('#savePopup').modal('show');
                BindEmployeeDetails();

                //Reset();
                //jquery_min_p('#empsavePopup').modal('show');

                // BindEmployeeDetails();
                //return false;

            },
            error: function (result) {
                // alert("There is a Problem, Try Again!");
                jquery_min_p('#h6warning').text('There is a Problem, Try Again!');
                jquery_min_p('#dngwarn').modal('show');
            }
        });
    }

}


function ValidateSize(file) {
    // var FileSize = file.files[0].size / 1024 / 1024; // in MB
    var FileSize = file.files[0].size / 1024;
    if (FileSize > 12) {
        jquery_min_p('#h6warning').text(' Image size should be less than 12kb');
        jquery_min_p('#dngwarn').modal('show');
        jquery_min_p(file).val(''); //for clearing with Jquery
    } else {

    }
}



function AddEmpImage() {
    var data = new FormData();
    var RestroId = jquery_min_p("#lblrestroid").val();

    //alert(RestroId + " " + lempId);
    var files = jquery_min_p("#imagefiles").get(0).files;
    // var files =  jquery_min_p("#files").get(0).files;
    // alert(lrestroId)
    // alert(ImageSize);D:\Rproject\FRD_Web\FRDWeb\FRDWeb\AddImage.ashx
    if (files.length > 0) {
        data.append("imgInp", files[0]);
        // data.append("imgInp", lrestroId[0]);
        jquery_min_p.ajax({
            type: 'POST',
            url: "../AddEmpImage.ashx?RestroId=" + RestroId + "&lempId=" + lempId,
            processData: false,
            contentType: false,
            data: data,
            async: false,
            success: function (e) {
            },
            error: function (result) {
                //alert('undone');
            }
        });
    }
}














//function KitchenDropdown() {




//    var restron = jquery_min_p('#ddlrest').val();

//        jquery_min_p.ajax({
//            type: "POST",
//            contentType: "application/json; charset=utf-8",
//            url: "/Master/KitchenDropdown",
//            data: "{'restron':'" + restron + "'}",
//            dataType: "json",
//            async: false,
//            success: function (result) {
//                var i = 0;
//                var jsondata = eval(result);
//                for (var i = 0; i < result.length; i++) {
//                    var opt = new Option(result[i].kitchenSection);
//                    jquery_min_p("#ddlkitchen").append(opt);



//                }

//                // jquery_min_p('#successPopup').modal('show');



//            },
//            error: function (result) {
//                alert("There is a Problem, Try Again!");
//            }
//        });
//    }

function RestroDropdown() {
    jquery_min_p("#ddlrest").html("");

    var Query = Query + "<option selected='selecte'>Select</option>";



    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Master/RestroDropdown",
        data: "{}",
        dataType: "json",
        async: false,

        success: function (result) {
            var i = 0;
            var jsondata = eval(result);
            var newOption1 = newOption1 + "<option value='0' selected='Select'>Select</option>";
            jquery_min_p('#ddlrest').append(newOption1);


            for (var i = 0; i < result.length; i++) {

                // var newOption = newOption + "<option selected='selecte'>Select</option>";
                var newOption = jquery_min_p('<option>');
                newOption.attr('value', result[i].restroId).text(result[i].RestroName);

                // Append that to the DropDownList.
                jquery_min_p('#ddlrest').append(newOption);

            }

        },

        error: function (result) {
            //alert("There is a Problem, Try Again!");
            jquery_min_p('#h6warning').text('There is a Problem, Try Again!');
            jquery_min_p('#dngwarn').modal('show');
        }




    });


}
function RoleDropdown() {

    jquery_min_p("#ddlselectroledisplay").html("");

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Master/RoleDropdown",
        data: "{}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsondata = eval(result);


            //var newOption1 = newOption1 + "<option value='0' selected='Select'>Select</option>";
            //jquery_min_p('#ddlselectroledisplay').append(newOption1);
            //jquery_min_p('.selectpicker').selectpicker('refresh');
            for (var i = 0; i < result.length; i++) {
                //var opt = new Option.text(result[i].RoleName);
                //jquery_min_p("#ddlselectroledisplay").append(opt);
                //jquery_min_p('select[name=selValue]').val(result[i].RoleId);
                ////jquery_min_p('#ddlselectroledisplay option[value=' + result[i].RoleId + ']').prop('selected', true);
                //jquery_min_p('.selectpicker').selectpicker('refresh');


                var newOption = jquery_min_p('<option>');
                newOption.attr('value', result[i].RoleId).text(result[i].RoleName);


                jquery_min_p('#ddlselectroledisplay').append(newOption);
                jquery_min_p('.selectpicker').selectpicker('refresh');

            }

            // jquery_min_p('#successPopup').modal('show');



        },




        error: function (result) {
            // alert("There is a Problem, Try Again!");
            jquery_min_p('#h6warning').text('There is a Problem, Try Again!');
            jquery_min_p('#dngwarn').modal('show');
        }
    });
}




//function RoleDropdown() {

//    jquery_min_p("#ddlselectroledisplay").html("");

//    jquery_min_p.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "/Master/RoleDropdown",
//        data: "{}",
//        dataType: "json",
//        async: false,
//        success: function (result) {
//            var i = 0;
//            var jsondata = eval(result);


//            var newOption1 = newOption1 + "<option value='0' selected='Select'>Select</option>";
//            jquery_min_p('#ddlselectroledisplay').append(newOption1);
//            jquery_min_p('.selectpicker').selectpicker('refresh');
//            for (var i = 0; i < result.length; i++) {
//                //var opt = new Option.text(result[i].RoleName);
//                //jquery_min_p("#ddlselectroledisplay").append(opt);
//                //jquery_min_p('select[name=selValue]').val(result[i].RoleId);
//                ////jquery_min_p('#ddlselectroledisplay option[value=' + result[i].RoleId + ']').prop('selected', true);
//                //jquery_min_p('.selectpicker').selectpicker('refresh');


//                var newOption = jquery_min_p('<option>');
//                newOption.attr('value', result[i].RoleId).text(result[i].RoleName);


//                jquery_min_p('#ddlselectroledisplay').append(newOption);
//                jquery_min_p('.selectpicker').selectpicker('refresh');

//            }

//            // jquery_min_p('#successPopup').modal('show');



//        },




//        error: function (result) {
//            // alert("There is a Problem, Try Again!");
//            jquery_min_p('#h6warning').text('There is a Problem, Try Again!');
//            jquery_min_p('#dngwarn').modal('show');
//        }
//    });
//}

function Reset() {

    jquery_min_p("#txtcode").val('');
    jquery_min_p('#txtcode').attr('placeholder', 'Emp Code');
    jquery_min_p("#txtname").val('');
    jquery_min_p("#txtmobile").val('');
    jquery_min_p("#txtemail").val('');

    jquery_min_p("#txtgridinput").val('');
    jquery_min_p("#txtlistinput").val('');
    jquery_min_p("#ddlrest").val('0');
    // jquery_min_p("#ddlselectroledisplay").val('');
    jquery_min_p("#txtuserpin").val('');
    jquery_min_p("#txtpass").val('');
    jquery_min_p("#txtconfirmpass").val('');
    jquery_min_p("#txtaccesscode").val('');
    jquery_min_p("#ddlkitchen").val('0');
    //paras

    jquery_min_p("#lblname").val('');
    jquery_min_p("#lblmobile").val('');
    jquery_min_p("#lblemail").val('');

    jquery_min_p("#txtgridinput").val('');


    jquery_min_p("#txtlistinput").val('');



    jquery_min_p('#lblname').removeClass('validate');
    jquery_min_p('#lblmobile').removeClass('validate');
    jquery_min_p('#lblemail').removeClass('validate');
    jquery_min_p('#ddlrest').removeClass('validate');
    jquery_min_p('#ddlreselectroledisplay').removeClass('validate');

    //paras
    jquery_min_p('#txtcode').removeClass('validate');

    jquery_min_p('#txtname').removeClass('validate');
    jquery_min_p('#txtmobile').removeClass('validate');
    jquery_min_p('#txtemail').removeClass('validate');
    jquery_min_p('#ddlrest').removeClass('validate');
    jquery_min_p('#ddlselectroledisplay').removeClass('validate');
    jquery_min_p('#txtuserpin').removeClass('validate');
    jquery_min_p('#txtpass').removeClass('validate');
    jquery_min_p('#txtconfirmpass').removeClass('validate');
    jquery_min_p('#ddlkitchen').removeClass('validate');
    jquery_min_p('#txtaccesscode').removeClass('validate');





}




function RemoveClass() {
    //if (jquery_min_p('#txtlpn').val() != '') {
    //    jquery_min_p('#txtlpn').removeClass('validate');
    //}
    if (jquery_min_p('#txtcode').val() != '') {
        jquery_min_p('#txtcode').removeClass('validate');
    }
    if (jquery_min_p('#txtname').val() != '') {
        jquery_min_p('#txtname').removeClass('validate');
    }
    if (jquery_min_p('#txtmobile').val() != '') {
        jquery_min_p('#txtmobile').removeClass('validate');
    }
    if (jquery_min_p('#txtemail').val() != '') {
        jquery_min_p('#txtemail').removeClass('validate');
    }
    //if (jquery_min_p('#ddlrest').val() != '') {
    //    jquery_min_p('#ddlrest').removeClass('validate');
    //}

    if (jquery_min_p('#ddlrest').val() != "0") {
        jquery_min_p('#ddlrest').removeClass('validate');
    }

    //if (jquery_min_p("#ddlitemgroup").val() != "0") {
    //    jquery_min_p("#ddlitemgroup").removeClass('validate');

    //}
    //if (jquery_min_p('#txtlpn').val() != '') {
    //    jquery_min_p('#txtlpn').removeClass('validate');
    //}

    if (jquery_min_p('#txtemail').val() != '') {
        jquery_min_p('#txtemail').removeClass('validate');
    }
    if (jquery_min_p('#ddlselectroledisplay').val() != 'Nothing selected') {
        jquery_min_p('#ddlselectroledisplay').removeClass('validate');
    }
    if (jquery_min_p("#txtuserpin").val() != '') {
        jquery_min_p("#txtuserpin").removeClass('validate');
    }
    if (jquery_min_p('#txtpass').val() != '') {
        jquery_min_p('#txtpass').removeClass('validate');
    }
    if (jquery_min_p('#txtconfirmpass').val() != '') {
        jquery_min_p('#txtconfirmpass').removeClass('validate');
    }
    if (jquery_min_p('#txtaccesscode').val() != '') {
        jquery_min_p('#txtaccesscode').removeClass('validate');
    }

    if (jquery_min_p('#ddlkitchen').val() != "0") {
        jquery_min_p('#ddlkitchen').removeClass('validate');
    }







}


function ValidationMaster() {
    var Flag = 0;

    if (jquery_min_p('#lblcode').val() == '0') {
        jquery_min_p('#lblcode').addClass('validate');
        Flag = 1;
    }

    if (jquery_min_p('#lblname').val() == '0') {
        jquery_min_p('#lblname').addClass('validate');
        Flag = 1;
    }
    if (jquery_min_p('#lblmobile').val() == '0') {
        jquery_min_p('#lblmobile').addClass('validate');
        Flag = 1;
    }
    if (jquery_min_p('#lblemail').val() == '0') {
        jquery_min_p('#lblemail').addClass('validate');
        Flag = 1;
    }

    if (jquery_min_p('#ddlrest').val() == '0') {
        jquery_min_p('#ddlrest').addClass('validate');
        Flag = 1;
    }

    if (jquery_min_p('#ddlselectroledisplay').val() == '0') {
        jquery_min_p('#ddlselectroledisplay').addClass('validate');
        Flag = 1;
    }

    if (Flag == 1) {
        return false;
    }
    else {
        return true;
    }

}



function Validation() {
    var Flag = 0;

    if ($.trim(jquery_min_p('#txtcode').val()) == '') {
        jquery_min_p('#txtcode').addClass('validate');
        Flag = 1;
    }

    if ($.trim(jquery_min_p('#txtname').val()) == '') {
        jquery_min_p('#txtname').addClass('validate');
        Flag = 1;
    }

    if (jquery_min_p('#txtmobile').val() == '') {
        jquery_min_p('#txtmobile').addClass('validate');
        Flag = 1;
    }
    if (jquery_min_p('#txtemail').val() == '') {
        jquery_min_p('#txtemail').addClass('validate');
        Flag = 1;
    }
    if (jquery_min_p('#txtuserpin').val() == '') {
        jquery_min_p('#txtuserpin').addClass('validate');
        Flag = 1;
    }
    if (jquery_min_p('#txtpass').val() == '') {
        jquery_min_p('#txtpass').addClass('validate');
        Flag = 1;
    }
    if (jquery_min_p('#txtconfirmpass').val() == '') {
        jquery_min_p('#txtconfirmpass').addClass('validate');
        Flag = 1;
    }
    if ($.trim(jquery_min_p('#txtaccesscode').val()) == '') {
        jquery_min_p('#txtaccesscode').addClass('validate');
        Flag = 1;
    }

    //if (jquery_min_p('#ddlrest').val() == 'Select') {
    //    jquery_min_p('#ddlrest').addClass('validate');
    //    Flag = false;
    //}

    if (jquery_min_p('#ddlrest').val() == '0') {
        jquery_min_p('#ddlrest').addClass('validate');
        Flag = 1;
    }


    //if (jquery_min_p('#ddlrest option:selected').text() == '') {
    //    jquery_min_p('#ddlrest').addClass('validate');
    //    flag = false;
    //}
    if (jquery_min_p('#ddlselectroledisplay').text() == 'Nothing selected') {

        jquery_min_p('.selectpicker').on('hide.bs.select', function () {
            jquery_min_p(this).trigger("focusout");
        });



        //jquery_min_p("#ddlselectroledisplay").validate({
        //    ignore: ":show:not(.selectpicker)" });
        // jquery_min_p('.selectpicker').on('change', function () {
        // jquery_min_p(this).valid();
        // jquery_min_p('#ddlselectroledisplay').addClass('validate');
        // });
        // jquery_min_p('#ddlselectroledisplay').addClass('validate');
        Flag = 1;
    }

    if (tag == 1) {

        if (jquery_min_p('#ddlkitchen').val() == '0') {
            jquery_min_p('#ddlkitchen').addClass('validate');
            Flag = 1;
        }
    }
    if (Flag == 1) {
        return false;
    }
    else {
        return true;
    }






}

function Checkcode() {
    var EmpCode = jquery_min_p('#txtcode').val().replace('\'', '\\\'');
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Master/CheckEmpCode",
        data: "{'EmpCode':'" + EmpCode + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsondata = eval(result);
            // alert(jsondata[0].result);
            console.log(result);
            jquery_min_p('#divempcode').css('display', 'none');
            if (jsondata[0].result == '1') {
                jquery_min_p('#txtcode').val('');
                jquery_min_p('#txtcode').attr('placeholder', 'Emp Code already exist.');
                jquery_min_p('#txtcode').addClass('validate');
            }
            else {

                jquery_min_p('#divempcode').css('display', 'none');
                // saveemployee();
            }

        },

        error: function (result) {
            // alert("There is a Problem, Try Again!");
            jquery_min_p('#h6warning').text('There is a Problem, Try Again!');
            jquery_min_p('#dngwarn').modal('show');
        }
    });
}


function KitchenDropdown() {


    var restroId = jquery_min_p("#ddlrest option:selected").val();


    var restron = jquery_min_p('#ddlrest').val();
    //jquery_min_p("#ddlkitchen").html("");
    jquery_min_p("#ddlkitchen").html("");
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Master/KitchenDropdown",
        data: "{'restroId':'" + restroId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsondata = eval(result);

            var newOption1 = newOption1 + "<option value='0' selected='Select'>Select</option>";
            jquery_min_p('#ddlkitchen').append(newOption1);
            for (var i = 0; i < result.length; i++) {

                var newOption = jquery_min_p('<option>');
                newOption.attr('value', result[i].kitchensectionId).text(result[i].kitchenSection);


                jquery_min_p('#ddlkitchen').append(newOption);

            }





        },
        error: function (result) {
            // alert("There is a Problem, Try Again!");
            jquery_min_p('#h6warning').text('There is a Problem, Try Again!');
            jquery_min_p('#dngwarn').modal('show');
        }
    });
}

//function test()
//{
//    alert(jquery_min_p("#ddlselectroledisplay").val());
//}


function CheckRole() {


    //  var a = $('.selectpicker option:selected').text();
    // alert($("#ddlselectroledisplay option:selected").val());
    //if (a.text() == "Kitchen User")
    tag = 0;
    $('#ddlselectroledisplay option:selected').each(function () {
        if ($(this).text() == "Kitchen User") {
            tag = 1;

        }


    });
    if (tag == 1) {
        KitchenDropdown();
        jquery_min_p("#divkitchen").css('display', 'flex');
        if (jquery_min_p('#ddlkitchen').val() == "0") {
            jquery_min_p('#ddlkitchen').removeClass('validate');
        }

        // Validation();

        //if (jquery_min_p('#ddlkitchen').val() == '0') {
        //    jquery_min_p('#ddlkitchen').addClass('validate');
        //    Flag = 1;
        //}
        // jquery_min_p("#lblkitchen").css('display', 'inline-block');
    }
    else {
        jquery_min_p("#divkitchen").css('display', 'none');
        // jquery_min_p("#lblkitchen").css('display', 'none');
    }




}




function pathcheck(url) {

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Master/checkurl",
        data: "{'url':'" + url + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsondata = eval(result);
            if (jsondata == "1") {
                IsimageCount = 1;

            }
            else {
                IsimageCount = 0;
            }
        }
    });

}

function UpdateEmpImage(restroId) {
    var data = new FormData();
    //var empid = jquery_min_p('#lblLempid').val();
    var empid = jquery_min_p('#lblLempid').text();
    // alert(empid)
    var RestroId = restroId;

    //alert(RestroId + " " + lempId);
    var files = jquery_min_p("#imagefiles").get(0).files;


    //var im = document.getElementById('imagefiles'); // or select based on classes
    //im.onerror = function () {
    //    // image not found or change src like this as default image:

    //    im.src = 'new path';
    //};


    if (files.length > 0) {
        data.append("imgInp", files[0]);
        // data.append("imgInp", lrestroId[0]);
        jquery_min_p.ajax({
            type: 'POST',
            url: "../UpdateEmpImage.ashx?RestroId=" + RestroId + "&empid=" + empid,
            processData: false,
            contentType: false,
            data: data,
            async: false,
            success: function (e) {
            },
            error: function (result) {
                //alert('undone');
            }
        });
    }
}

function RestaurantsUpdateList() {

    //var =jquery_min_p(' select[name=selValue]').val();
    var RoleId = jquery_min_p('#ddlselectroledisplay').val();
    //var EmpId = jquery_min_p('#lblempid').text();
    var EmpId = jquery_min_p('#lblLempid').text();
    //alert(EmpId)
    //alert(RoleId);  lblempid
    //jquery_min_p('#txtcode').val(EmpCode);
    //jquery_min_p('#txtcode').attr('display');


    var kitchensectionId = jquery_min_p("#ddlkitchen option:selected").val();
    if (kitchensectionId == "" || kitchensectionId == undefined) {
        kitchensectionId = 0;
    }



    var EmailId = jquery_min_p('#lblemail').val().replace('\'', '\\\'');

    var EmpName = jquery_min_p('#lblname').val().replace('\'', '\\\'');

    var mobileNo = jquery_min_p('#lblmobile').val().replace('\'', '\\\'');

    var restroId = jquery_min_p("#ddlrest option:selected").val();

    {

        // jquery_min_p('#divconpass').css('display', 'none');
        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/Master/RestaurantUpdateList",
            data: "{'EmailId':'" + EmailId + "','EmpId':'" + EmpId + "','EmpName':'" + EmpName + "','mobileNo':'" + mobileNo + "','kitchensectionId':'" + kitchensectionId + "','restroId':'" + restroId + "','RoleId':'" + RoleId + "'}",

            dataType: "json",
            async: false,
            success: function (result) {
                var i = 0;
                var jsondata = eval(result);


                UpdateEmpImage(restroId);

                //Reset();
                // jquery_min_p('#empsavePopup').modal('show');
                jquery_min_p('#popupsuccess').text('Employee Updated Successfully');
                jquery_min_p('#savePopup').modal('show');
                BindEmployeeDetails();
                ///BindEmployeeList();

            },
            error: function (result) {
                // alert("There is a Problem, Try Again!");
                jquery_min_p('#h6warning').text('There is a Problem, Try Again!');
                jquery_min_p('#dngwarn').modal('show');
            }
        });
    }

}
