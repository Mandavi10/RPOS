var id = "";
var mob = 0;
var IsimageCount = 0;
jquery_min_p(document).ready(function () {

    id = jquery_min_p("#lblrestroid").text();
  


    BindEmployeeDetails();

   
    RoleDropdown();




   


    jquery_min_p(document).keydown(function (event) {
        if (event.keyCode == 27) {
            jquery_min_p('#icard').modal('hide');

        }
    });
    
    jquery_min_p("#btnsaveclose").click(function () {

       
        
        jquery_min_p("#savePopup").modal('hide');
    });
    jquery_min_p("#btnclose").click(function () {
        //paras
        jquery_min_p("#imagefiles").val(null);
        Reset();
    });

    jquery_min_p("#btnresaveemp").click(function () {


        if (Validation()) {
           
            RestaurantsUpdateList();

        }
        else {
           
            return false;

        }

    });

    //jquery_min_p("#txtemplistinput").on("keyup", function () {
    //    var value = jquery_min_p(this).val().toLowerCase();
    //    jquery_min_p("#tbllist   tr").filter(function () {
    //        jquery_min_p(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    //    });
    //});
    jquery_min_p("#txtemplistinput").on("keyup", function () {
       
            numericcheck();
    
    });

    function numericcheck() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("txtemplistinput");
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

    //function Textcheck() {
    //    var input, filter, table, tr, td, i, txtValue;
    //    input = document.getElementById("txtemplistinput");
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

    jquery_min_p("#txtempgridinput").on("keyup", function () {
        val = jquery_min_p(this).val().toLowerCase();
        jquery_min_p("#firstdiv1 ").each(function () {
            jquery_min_p(this).toggle(jquery_min_p(this).text().toLowerCase().includes(val));
        });
    });
    
    //jquery_min_p("#txtemplistinput").on("keyup", function () {
    //    var value = jquery_min_p(this).val().toLowerCase();
    //    jquery_min_p("#tbllist tr").filter(function () {
    //        jquery_min_p(this).toggle(jquery_min_p(this).text().toLowerCase().indexOf(value) > -1)
    //    });
    //    });
    

    //jquery_min_p("#txtempgridinput").on("keyup", function () {
    //       var val = jquery_min_p(this).val().toLowerCase();
    //        jquery_min_p("#firstdiv1 ").each(function () {
    //            jquery_min_p(this).toggle(jquery_min_p(this).text().toLowerCase().includes(val));
    //        });
    //    });
      
       
    


    jquery_min_p("#listview").click(function () {

       
        jquery_min_p('#seconddiv').css('display', 'block');
        jquery_min_p('#firstdiv').css('display', 'none');

        BindEmployeeList();



    });
    
    jquery_min_p("#cardview").click(function () {


        jquery_min_p('#seconddiv').css('display', 'none');
        jquery_min_p('#firstdiv').css('display', 'flex');
        BindEmployeeDetails();



    });  


    jquery_min_p("#firstdiv").click(function () {

        jquery_min_p('#icard').on('shown.bs.modal', function () {
            jquery_min_p('#txtrename').focus();
        })

      
        jquery_min_p("#txtRole").css("display", "block");
        jquery_min_p("#txtrecode").css("display", "block");
        jquery_min_p("#txtrename").css("display", "block");
        jquery_min_p("#txtremobile").css("display", "block");
        jquery_min_p("#txtreemail").css("display", "block");
        jquery_min_p("#ddlreselectroledisplay").css("display", "block");
        jquery_min_p("#ddlrekitchen").css("display", "block");
        jquery_min_p("#ddlrerest").css("display", "block");
        jquery_min_p("#btnresaveemp").css("display", "block ");




        jquery_min_p("#lblcode").css("display", "none");
        jquery_min_p("#lblname").css("display", "none");
        jquery_min_p("#lblmobile").css("display", "none");
        jquery_min_p("#lblemail").css("display", "none");
        jquery_min_p("#lblrest").css("display", "none");
        jquery_min_p("#lblroledisplay").css("display", "none");
        jquery_min_p("#lblkitchen").css("display", "none");


        




    });
   
   
    jquery_min_p("#btnexit").click(function () {

        var url = '/Home/Index';
        window.location.href = url;
     


    });



    jquery_min_p("#txtrename").keypress(function (e) {
        var key = e.keyCode;
        if (key > 47 && key < 58 || key > 64 && key < 91 || key > 96 && key < 123) {

        }
        else {
            e.preventDefault();
        }
    });

    jquery_min_p("#txtremobile").keypress(function (e) {
        var key = e.keyCode;
        if (key >= 65 && key <= 90 || key >= 97 && key <= 122) {
            e.preventDefault();
        }
    });

    jquery_min_p('#txtreemail').change(function () {
        var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
        if (regex.test(document.getElementById("txtreemail").value) == true) {

            jquery_min_p('#txtreemail').removeClass('validate');

        }
        else {

            jquery_min_p('#txtreemail').val('');
            jquery_min_p('#txtreemail').attr("placeholder", "Invalid E-Mail!!");
            jquery_min_p('#txtreemail').addClass('validate');
        }

    });


    jquery_min_p("#txtremobile").keydown(function (event) {
        k = event.which;
        if ((k >= 96 && k <= 105) || k == 8) {
            if (jquery_min_p(this).val().length == 10) {
                if (k == 8) {
                    return true;
                } else {
                    event.preventDefault();
                    return false;

                }
            }
        } else {
            event.preventDefault();
            return false;
        }

    });
   // myFunction();



});

function mobilecheck() {
    var mobile = document.getElementById("txtremobile").value;
    var pattern = /^\d{10}$/;
    if (pattern.test(mobile)) {
        //alert("Your mobile number : " + mobile);
        return true;
    }


    jquery_min_p('#txtremobile').attr("placeholder", "Mobile Number");
    jquery_min_p('#txtremobile').val('');
    jquery_min_p('#txtremobile').attr("placeholder", "Invalid number!!");
    jquery_min_p('#txtremobile').addClass('validate');
    return false;
}   








function BindEmployeeDetails()
{
    //var url = window.location.pathname;
    var restroId = id;
    var empid = jquery_min_p('#lblLempid').text();


  
    
    jquery_min_p("#firstdiv").html("");
   
    jquery_min_p.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Master/RestaurantsEmployeeDetails", /// <reference path="../WebServices/HolidayList.asmx" />

        data: "{'restroId':'" + restroId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            // alert(result);
           // console.log(result);
            var i = 0;
            var jsonData = eval(result);
            var arraycount = result.length;


            var Query = "";
          
            for (var i = 0; i < arraycount; i++) {
                var Emplid = result[i].EmpID;
                var rid = result[i].restroId;
               

                Query = Query + "<div class='col-12 col-md-4' data-toggle='modal' data-target='#icard' id='firstdiv1'>";
                Query = Query + " <div class='panel-group'>";
                Query = Query + " <div class='panel panel-default'>";
                Query = Query + " <div class='panel-heading'>";
                Query = Query + "<h4 class='panel-title'>";
                // Query = Query + " <a data-toggle='collapse'><i class='fa fa-angle-double-right' aria-hidden='true'></i> Employee" + (i + 1) + "</a></h4> </div>";
                Query = Query + " <a data-toggle='collapse'><i class='fa fa-angle-double-right' aria-hidden='true'></i> Employee Code :" + result[i].EmpCode + "</a></h4> </div>";
                Query = Query + " <div id='employee1' class='panel-collapse collapse show'>";
                Query = Query + "<div class='panel-body'onclick='Check(" + result[i].EmpID + ");'>";
                //<a href='/Home/Index/" + result[i].restroId + "'>
                Query = Query + "<div class='row'>";
                Query = Query + "<div class='col-md-8'>";
                Query = Query + "<div class='row'>";
                Query = Query + "<label class='col-md-5 fontBold'>Employee Code:</label>";

                Query = Query + "<label class='col-md-7 p-0' >" + result[i].EmpCode + "</label></div>";

                //Query = Query + "  <div class='row'>";
                //Query = Query + "<label class='col-md-5 fontBold'>Code:</label>";

                //Query = Query + "<label class='col-md-7 p-0'>" + result[i].EmpCode + "</label></div>";

                Query = Query + "<div class='row'>";
                Query = Query + "<label class='col-md-5 col-6 fontBold'>Name:</label>";

                Query = Query + "<label class='col-md-7 col-6 p-0'>" + result[i].EmpName + "</label></div>";

                Query = Query + "<div class='row'>";
                Query = Query + " <label class='col-md-5 col-6 fontBold'>Mobile:</label>";

                Query = Query + "<label class='col-md-7 col-6 p-0'>" + result[i].mobileNo + "</label></div>";

                Query = Query + "<div class='row'>";
                Query = Query + "<label class='col-md-5 col-6 fontBold'>Email:</label>";

                Query = Query + "<label class='col-md-7 col-6 p-0'>" + result[i].EmailId + "</label></div>";

                Query = Query + "<div class='row'>";
                Query = Query + "<label class='col-md-5 col-6 fontBold'>kitchensectionname:</label>";

                Query = Query + " <label class='col-md-7 col-6 p-0'>" + result[i].kitchensectionname + "</label> </div>";


                Query = Query + "<div class='row'>";
                Query = Query + "<label class='col-md-5 col-6 fontBold'>Restroname:</label>";

                Query = Query + " <label class='col-md-7 col-6 p-0'>" + result[i].Restroname + "</label> </div>";


                Query = Query + "<div class='row'>";
                Query = Query + "<label class='col-md-5 col-6 fontBold'>UserPin:</label>";

                Query = Query + " <label class='col-md-7 col-6 p-0'>" + result[i].UserPin + "</label> </div>";


                Query = Query + "<div class='row'>";
                Query = Query + "<label class='col-md-5  col-6 fontBold'>Role:</label>";

                Query = Query + " <label class='col-md-7 col-6 p-0'>" + result[i].RoleName + "</label> </div>";
                Query = Query + "<div class='col-md-4'></div></div>";
                Query = Query + " <div class='col-md-4 pl-0'>";
                Query = Query + "<div class='empProfile'>";

                //var path1 = "../EmpImage/" + result[i].restroId + "/" + result[i].EmpID + ".jpg";
                var path1 = "/EmpImage/" + result[i].restroId + "/" + result[i].EmpID + ".jpg";
                pathcheck(path1);
                if(IsimageCount == 1)
                 {
                Query = Query + "<img src='../EmpImage/" + result[i].restroId + "/" + result[i].EmpID + ".jpg'/>";
                  }
                else{
                 Query = Query + "<img src='/Content/images/user-icon.png'/>";
                 }
                
                


                Query = Query + " </div>";

                Query = Query + " </div>";
                Query = Query + "    </div>";


                Query = Query + "    </div>";
                Query = Query + "     </div>";
                Query = Query + "  </div>";
                Query = Query + " </div>";
                Query = Query + "</div>";



               



            }

            
            jquery_min_p("#firstdiv").append(Query);
         


            jquery_min_p('#searchemplist').css('display', 'none');
            jquery_min_p('#searchempgrid').css('display', 'block');

        },

        error: function () {

        }
    });





}




function BindEmployeeList() {/// <reference path="../Web Services/job.asmx" />


    //var url = window.location.pathname;
    var restroId = id;
    var wh = jquery_min_p(document).height();
    var gh = wh - 190;
    var dataCompany = [];
   
    
    jquery_min_p("#tblemplist").html("");

    jquery_min_p.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Master/RestaurantsEmployeeDetails", /// <reference path="../WebServices/HolidayList.asmx" />

        data: "{'restroId':'" + restroId + "'}",
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
            Query = Query + " <th width='10%'>S.No.</th>";
            Query = Query + "<th width='15%'>Code</th>";
            Query = Query + "<th width='20%'>Name</th>";
            Query = Query + "<th width='20%'>Mobile</th>";
            Query = Query + "<th width='20%'>Email</th>";
            Query = Query + "<th width='15%'>Type</th>";
           // Query = Query + "<th width='15%'>Action</th>";
            Query = Query + "</tr>";
            Query = Query + "</thead>";
            Query = Query + "<tbody id='tbllist'>";
            

            for (var i = 0; i < arraycount; i++) {





                Query = Query + "";


                Query = Query + "";
           
                Query = Query + "<tr data-toggle='modal' data-target='#icard' id='tbllist'>";
                Query = Query + "  <td width='10%' onclick='CheckList(" + result[i].EmpID + ");'>" + result[i].RowNumber + "</td>";
                Query = Query + "  <td width='15%'  onclick='CheckList(" + result[i].EmpID + ");'>" + result[i].EmpCode + "</td>";
                Query = Query + "  <td width='20%' onclick='CheckList(" + result[i].EmpID + ");'>" + result[i].EmpName + "</td>";
                Query = Query + " <td width='20%' onclick='CheckList(" + result[i].EmpID + ");'>" + result[i].mobileNo + "</td>";
                Query = Query + " <td width='20%' onclick='CheckList(" + result[i].EmpID + ");'>" + result[i].EmailId + "</td>";

                Query = Query + "<td width='15%' onclick='CheckList(" + result[i].EmpID + ");'>" + result[i].RoleName + "</td>";
              //  Query = Query + "<td onclick='RestaurantsshowList(" + result[i].EmpID + ");' ><i class='fa fa-pencil-square-o' aria-hidden='true'></i></td>"

                Query = Query + "</tr>";
         



            }

            Query = Query + "</tbody>";
            jquery_min_p("#tblemplist").append(Query);
           
            jquery_min_p('#seconddiv').css('display', 'block');
            jquery_min_p('#firstdiv').css('display', 'none');
            jquery_min_p('#searchemplist').css('display', 'block');
            jquery_min_p('#searchempgrid').css('display', 'none');




           




        },

        error: function () {

        }
    });
}




function Check(empid) {

    //    alert(empid);

    // jquery_min_p().val(empid);
    jquery_min_p('#lblLempid').text(empid);
   var empLid= jquery_min_p('#lblLempid').text();
    //var a = jquery_min_p('#lblLempid').text()
    //alert(a)

   var restroId = id;

   //alert(empLid + " " + restroId)
   //var empid = jquery_min_p('#lblLempid').text();

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
            RestroDropdown();
            // KitchenDropdown();

            var empcode = jsondata[0].EmpCode;
            var empname = jsondata[0].EmpName;
            var mobileno = jsondata[0].mobileNo;
            var emailid = jsondata[0].EmailId;
            var roleid = jsondata[0].RoleId;
            var restroid = jsondata[0].restroId;

            var kitchensectionId = jsondata[0].kitchensectionId;            
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





            jquery_min_p('#txtrecode').val(empcode);
            jquery_min_p('#txtrecode').attr("disabled", "disabled");
            jquery_min_p('#txtrename').val(empname);
            jquery_min_p('#txtremobile').val(mobileno);
            jquery_min_p('#txtreemail').val(emailid);
            jquery_min_p('#ddlreselectroledisplay').val(roleid);

            CheckRole();
            jquery_min_p('.selectpicker').selectpicker('refresh');
            // jquery_min_p('#ddlrekitchen').val(kitchensaectionid);

            jquery_min_p('#ddlrerest').val(restroid);
            KitchenDropdown();
            jquery_min_p("#ddlrekitchen").val(kitchensectionId);



            //jquery_min_p('#btnmsaveclose').css('display', 'none');
            jquery_min_p("#txtRole").css("display", "block");
            jquery_min_p("#txtrecode").css("display", "block");
            jquery_min_p("#txtrename").css("display", "block");
            jquery_min_p("#txtremobile").css("display", "block");
            jquery_min_p("#txtreemail").css("display", "block");
            jquery_min_p("#ddlreselectroledisplay").css("display", "block");
            jquery_min_p("#ddlrekitchen").css("display", "block");
            jquery_min_p("#ddlrerest").css("display", "block");
            jquery_min_p("#btnresaveemp").css("display", "block ");




            jquery_min_p("#lblcode").css("display", "none");
            jquery_min_p("#lblname").css("display", "none");
            jquery_min_p("#lblmobile").css("display", "none");
            jquery_min_p("#lblemail").css("display", "none");
            jquery_min_p("#lblrest").css("display", "none");
            jquery_min_p("#lblroledisplay").css("display", "none");
            jquery_min_p("#lblkitchen").css("display", "none");

          




        },
        error: function (result) {
          //  alert("There is a Problem, Try Again!");
            jquery_min_p('#h6warning').text('There is a Problem, Try Again!');
            jquery_min_p('#dngwarn').modal('show');
        }
    });


}


function CheckList(empid) {

    //lblempid
    jquery_min_p('#lblLempid').text(empid);
    //var a = jquery_min_p('#lblLempid').text()
    //alert(a)



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
            RestroDropdown();
            // KitchenDropdown();

            var empcode = jsondata[0].EmpCode;
            var empname = jsondata[0].EmpName;
            var mobileno = jsondata[0].mobileNo;
            var emailid = jsondata[0].EmailId;
            var roleid = jsondata[0].RoleId;
            var restroid = jsondata[0].restroId;

            var kitchensectionId = jsondata[0].kitchensectionId;


           // var path = "../EmpImage/" + restroid + "/" + empid + ".jpg";

            
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


            jquery_min_p('#txtrecode').val(empcode);
            jquery_min_p('#txtrecode').attr("disabled", "disabled");
            jquery_min_p('#txtrename').val(empname);
            jquery_min_p('#txtremobile').val(mobileno);
            jquery_min_p('#txtreemail').val(emailid);
            jquery_min_p('#ddlreselectroledisplay').val(roleid);
            jquery_min_p('.selectpicker').selectpicker('refresh');
            // jquery_min_p('#ddlrekitchen').val(kitchensaectionid);

            jquery_min_p('#ddlrerest').val(restroid);
            KitchenDropdown();
            jquery_min_p("#ddlrekitchen").val(kitchensectionId);



            //jquery_min_p('#btnmsaveclose').css('display', 'none');
            jquery_min_p("#txtRole").css("display", "block");
            jquery_min_p("#txtrecode").css("display", "block");
            jquery_min_p("#txtrename").css("display", "block");
            jquery_min_p("#txtremobile").css("display", "block");
            jquery_min_p("#txtreemail").css("display", "block");
            jquery_min_p("#ddlreselectroledisplay").css("display", "block");
            jquery_min_p("#ddlrekitchen").css("display", "block");
            jquery_min_p("#ddlrerest").css("display", "block");
            jquery_min_p("#btnresaveemp").css("display", "block ");




            jquery_min_p("#lblcode").css("display", "none");
            jquery_min_p("#lblname").css("display", "none");
            jquery_min_p("#lblmobile").css("display", "none");
            jquery_min_p("#lblemail").css("display", "none");
            jquery_min_p("#lblrest").css("display", "none");
            jquery_min_p("#lblroledisplay").css("display", "none");
            jquery_min_p("#lblkitchen").css("display", "none");

           


        },
        error: function (result) {
            // alert("There is a Problem, Try Again!");
            jquery_min_p('#h6warning').text('There is a Problem, Try Again!');
            jquery_min_p('#dngwarn').modal('show');
        }
    });



}



function RestaurantsshowList(EmpID) {

    jquery_min_p('#lblempid').val(EmpID);

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Master/EmployeeMasterIDDetails",
        data: "{'EmpID':'" + EmpID + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsondata = eval(result);

            // jquery_min_p('#successPopup').modal('show');
            RestroDropdown();
            // KitchenDropdown();

            var empcode = jsondata[0].EmpCode;
            var empname = jsondata[0].EmpName;
            var mobileno = jsondata[0].mobileNo;
            var emailid = jsondata[0].EmailId;
            var roleid = jsondata[0].RoleId;
            var restroid = jsondata[0].restroId;
            
            var kitchensectionId = jsondata[0].kitchensectionId;
            



            jquery_min_p('#txtrecode').val(empcode);
            jquery_min_p('#txtrecode').attr("disabled", "disabled");
            jquery_min_p('#txtrename').val(empname);
            jquery_min_p('#txtremobile').val(mobileno);
            jquery_min_p('#txtreemail').val(emailid);
            jquery_min_p('#ddlreselectroledisplay').val(roleid);
            jquery_min_p('.selectpicker').selectpicker('refresh');
           // jquery_min_p('#ddlrekitchen').val(kitchensaectionid);
            
            jquery_min_p('#ddlrerest').val(restroid);
            KitchenDropdown();
            jquery_min_p("#ddlrekitchen").val(kitchensectionId);



            //jquery_min_p('#btnmsaveclose').css('display', 'none');
            jquery_min_p("#txtRole").css("display", "block");
            jquery_min_p("#txtrecode").css("display", "block");
            jquery_min_p("#txtrename").css("display", "block");
            jquery_min_p("#txtremobile").css("display", "block");
            jquery_min_p("#txtreemail").css("display", "block");
            jquery_min_p("#ddlreselectroledisplay").css("display", "block");
            jquery_min_p("#ddlrekitchen").css("display", "block");
            jquery_min_p("#ddlrerest").css("display", "block");
            jquery_min_p("#btnresaveemp").css("display", "block ");




            jquery_min_p("#lblcode").css("display", "none");
            jquery_min_p("#lblname").css("display", "none");
            jquery_min_p("#lblmobile").css("display", "none");
            jquery_min_p("#lblemail").css("display", "none");
            jquery_min_p("#lblrest").css("display", "none");
            jquery_min_p("#lblroledisplay").css("display", "none");
            jquery_min_p("#lblkitchen").css("display", "none");


        },
        error: function (result) {
            //alert("There is a Problem, Try Again!");
            jquery_min_p('#h6warning').text('There is a Problem, Try Again!');
            jquery_min_p('#dngwarn').modal('show');
        }
    });
}



function RestaurantsUpdateList() {

    //var =jquery_min_p(' select[name=selValue]').val();
    var RoleId = jquery_min_p('#ddlreselectroledisplay').val();
    //var EmpId = jquery_min_p('#lblempid').text();
    var EmpId= jquery_min_p('#lblLempid').text();
    //alert(EmpId)
    //alert(RoleId);  lblempid
    //jquery_min_p('#txtcode').val(EmpCode);
    //jquery_min_p('#txtcode').attr('display');

   
    var kitchensectionId = jquery_min_p("#ddlrekitchen option:selected").val();
    if (kitchensectionId=="" || kitchensectionId==undefined )
    {
        kitchensectionId=0;
    }
    
  
   
    var EmailId = jquery_min_p('#txtreemail').val().replace('\'', '\\\'');
  
    var EmpName = jquery_min_p('#txtrename').val().replace('\'', '\\\'');

    var mobileNo = jquery_min_p('#txtremobile').val().replace('\'', '\\\'');
  
    var restroId = jquery_min_p("#ddlrerest option:selected").val();


  



    {

        // jquery_min_p('#divconpass').css('display', 'none');
        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/Master/RestaurantsUpdateList",
            data: "{'EmailId':'" + EmailId + "','EmpId':'" + EmpId + "','EmpName':'" + EmpName + "','mobileNo':'" + mobileNo + "','kitchensectionId':'" + kitchensectionId + "','restroId':'" + restroId + "','RoleId':'" + RoleId + "'}",

            dataType: "json",
            async: false,
            success: function (result) {
                var i = 0;
                var jsondata = eval(result);

              
                UpdateEmpImage();

                Reset();
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





function ValidateSize(file) {
    // var FileSize = file.files[0].size / 1024 / 1024; // in MB
    var FileSize = file.files[0].size / 1024 ;
    if (FileSize > 12) {
        jquery_min_p('#h6warning').text(' Image size should be less than 12kb');
        jquery_min_p('#dngwarn').modal('show');
        jquery_min_p(file).val(''); //for clearing with Jquery
    } else {

    }
}










function UpdateEmpImage() {
    var data = new FormData();
    //var empid = jquery_min_p('#lblLempid').val();
    var empid = jquery_min_p('#lblLempid').text()
   // alert(empid)
    var RestroId = id;

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






function RestroDropdown() {
    jquery_min_p("#ddlrerest").html("");

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
            jquery_min_p('#ddlrerest').append(newOption1);


            for (var i = 0; i < result.length; i++) {

                // var newOption = newOption + "<option selected='selecte'>Select</option>";
                var newOption = jquery_min_p('<option>');
                newOption.attr('value', result[i].restroId).text(result[i].RestroName);

                // Append that to the DropDownList.
                jquery_min_p('#ddlrerest').append(newOption);

            }

        },

        error: function (result) {
            //alert("There is a Problem, Try Again!");
            jquery_min_p('#h6warning').text('There is a Problem, Try Again!');
            jquery_min_p('#dngwarn').modal('show');
        }




    });


}




function KitchenDropdown() {

    // alert('hi');
    //alert(jquery_min_p('option:selected', jquery_min_p(this)).text());
    var restroId = jquery_min_p("#ddlrerest option:selected").val();
    //var a=jquery_min_p('select[name="ddlrest"] option:selected').value();
    //alert(a);


    var restron = jquery_min_p('#ddlrest').val();
    jquery_min_p("#ddlrekitchen").html("");

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
            jquery_min_p('#ddlrekitchen').append(newOption1);
            for (var i = 0; i < result.length; i++) {
                
                var newOption = jquery_min_p('<option>');
                newOption.attr('value', result[i].kitchensectionId).text(result[i].kitchenSection);

                
                jquery_min_p('#ddlrekitchen').append(newOption);

            }

           




        },
        error: function (result) {
            // alert("There is a Problem, Try Again!");
            jquery_min_p('#h6warning').text('There is a Problem, Try Again!');
            jquery_min_p('#dngwarn').modal('show');
        }
    });
}




function RoleDropdown() {

    jquery_min_p("#ddlreselectroledisplay").html("");

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


            var newOption1 = newOption1 + "<option value='0' selected='Select'>Select</option>";
            jquery_min_p('#ddlreselectroledisplay').append(newOption1);
            jquery_min_p('.selectpicker').selectpicker('refresh');
            for (var i = 0; i < result.length; i++) {
              

                var newOption = jquery_min_p('<option>');
                newOption.attr('value', result[i].RoleId).text(result[i].RoleName);


                jquery_min_p('#ddlreselectroledisplay').append(newOption);
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


function Reset() {

    //jquery_min_p("#txtcode").val('');
    //jquery_min_p('#txtcode').attr('placeholder', 'Emp Code');
    jquery_min_p("#txtrename").val('');
    jquery_min_p("#txtremobile").val('');
    jquery_min_p("#txtreemail").val('');
    
    jquery_min_p("#txtempgridinput").val('');
    

    jquery_min_p("#txtemplistinput").val('');
   

    jquery_min_p('#txtrename').removeClass('validate');
    jquery_min_p('#txtremobile').removeClass('validate');
    jquery_min_p('#txtreemail').removeClass('validate');
    jquery_min_p('#ddlrerest').removeClass('validate');
    jquery_min_p('#ddlreselectroledisplay').removeClass('validate');
   
    jquery_min_p('#ddlrekitchen').removeClass('validate');
 





}




function RemoveClass() {
    
    if (jquery_min_p('#txtrename').val() != '') {
        jquery_min_p('#txtrename').removeClass('validate');
    }
    if (jquery_min_p('#txtremobile').val() != '') {
        jquery_min_p('#txtremobile').removeClass('validate');
    }
    if (jquery_min_p('#txtreemail').val() != '') {
        jquery_min_p('#txtreemail').removeClass('validate');
    }
    //if (jquery_min_p('#ddlrest').val() != '') {
    //    jquery_min_p('#ddlrest').removeClass('validate');
    //}

    if (jquery_min_p('#ddlrerest').val() != "0") {
        jquery_min_p('#ddlrerest').removeClass('validate');
    }

   

    if (jquery_min_p('#txtreemail').val() != '') {
        jquery_min_p('#txtreemail').removeClass('validate');
    }
    if (jquery_min_p('#ddlreselectroledisplay').val() != 'Nothing selected') {
        jquery_min_p('#ddlreselectroledisplay').removeClass('validate');
    }
   
  
    
    if (jquery_min_p('#ddlrekitchen').val() != "0") {
        jquery_min_p('#ddlrekitchen').removeClass('validate');
    }







}






function Validation() {
    var Flag = 0;

  

    if ($.trim(jquery_min_p('#txtrename').val()) == '') {
        jquery_min_p('#txtrename').addClass('validate');
        Flag = 1;
    }

    if (jquery_min_p('#txtremobile').val() == '') {
        jquery_min_p('#txtremobile').addClass('validate');
        Flag = 1;
    }
    if (jquery_min_p('#txtreemail').val() == '') {
        jquery_min_p('#txtreemail').addClass('validate');
        Flag = 1;
    }
 
    

    if (jquery_min_p('#ddlrerest').val() == '0') {
        jquery_min_p('#ddlrerest').addClass('validate');
        Flag = 1;
    }

    if (jquery_min_p('#ddlreselectroledisplay').text() == 'Nothing selected') {

        jquery_min_p('.selectpicker').on('hide.bs.select', function () {
            jquery_min_p(this).trigger("focusout");
        });



       
        Flag = 1;
    }



    if (jquery_min_p('#ddlrekitchen').val() == '0') {
        jquery_min_p('#ddlrekitchen').addClass('validate');
        Flag = 1;
    }
    if (Flag == 1) {
        return false;
    }
    else {
        return true;
    }






}



function CheckRole() {


   
    var flag = 0;
    $('#ddlreselectroledisplay option:selected').each(function () {
        if ($(this).text() == "Kitchen User") {
            flag = 1;

        }


    });
    if (flag == 1) {
        jquery_min_p("#divrekitchen").css('display', 'flex');
        // jquery_min_p("#lblkitchen").css('display', 'inline-block');
    }
    else {
        jquery_min_p("#divrekitchen").css('display', 'none');
        // jquery_min_p("#lblkitchen").css('display', 'none');
    }




}


function imageExists(url, callback) {
    var img = new Image();
    img.onload = function () {
        IsimageCount = 1;
        callback("true");
    };
    img.onerror = function () {
        IsimageCount = 0;
        callback("false");
    };
    img.src = url;
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