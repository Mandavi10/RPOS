﻿var id = "";
var Update = 0;
jquery_min_p(document).ready(function () {

    Update = 0;
    jquery_min_p("#textvatno").keypress(function (event) {
        jquery_min_p(this).val(jquery_min_p(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });
    //   jquery_min_p("#btnAdd_sittingsection").text('Add')

    id = jquery_min_p("#lblrestroid").text();
    
    jquery_min_p('#btnCreate').click(function () {

        Reset();                                                                 
        jquery_min_p('#defineRestro').css('display', 'none');
        jquery_min_p('#sittingSection').css('display', 'block');
        jquery_min_p('#txtcodesitting').focus();
        jquery_min_p("#btnAdd_sittingsection").text('Add');
        jquery_min_p('#btnAdd_Table').text('Add');
        jquery_min_p('#btnAdd_KitchenSection').text('Add');
        jquery_min_p('#txtcodesitting').removeAttr("disabled");
        jquery_min_p('#txtkitchencode').removeAttr("disabled");


        Update = 0;
        //alert(Update);
        BindSittingSection();

        jquery_min_p("#yesBtn").click(function () {
            jquery_min_p('#confirmationPopup').modal('hide');
            BindSittingSection();
        });
        //textvatno
       

    });
   




    
    jquery_min_p('#btnCancel1').click(function () {
        window.location.href = "/Master/DefineRestaurant";

    });
    jquery_min_p('#btnCancel2').click(function () {
        window.location.href = "/Master/DefineRestaurant";

    });
    jquery_min_p('#btnCancel3').click(function () {
        window.location.href = "/Master/DefineRestaurant";

    });



    




    jquery_min_p('#btnUpdateRestaurant').click(function () {



        ShowRestaurantDetails();
        //jquery_min_p('#savePopup').modal('hide');

        jquery_min_p('#addRestroPopup').on('shown.bs.modal', function () {
            jquery_min_p('#textresturantname').focus();
        })
        bootstrap_min_p('#addRestroPopup').modal('show');

    });




    jquery_min_p("#btnRestroupdate").click(function () {



        //Validation();
        if (Validation() ) {
            updateRestroDetails();

            bootstrap_min_p('#addRestroPopup').modal('hide');

        }


    });

    jquery_min_p('#btnsaveclose').click(function () {

        jquery_min_p('#savePopup').modal('hide');


    });

    



    jquery_min_p('#btnrestroupdateclose').click(function () {

        // jquery_min_p('#savePopup').modal('hide');
        Reset();




    });

    jquery_min_p('#btnAdd_sittingsection').click(function () {
        //Validation();
        //alert(jquery_min_p('#lblrestroid').val());
        if (SittingValidation()) {
           
            SaveSittingSection();
            
           

        }
        else {

            return false;
        }

    });



    jquery_min_p('#btnAdd_KitchenSection').click(function () {

        var flag = 0;
        if (jquery_min_p('#txtkitchencode').val() == '') {
            jquery_min_p('#txtkitchencode').addClass('validate');
            flag = 1;
        }

        if (jquery_min_p('#txtkitchenname').val() == '') {
            jquery_min_p('#txtkitchenname').addClass('validate');
            flag = 1;
        }

        if (flag == "1") {
            return false;

        }
        else {


            AddKitchenSection();
        }

    });


    jquery_min_p('#btnAdd_Table').click(function () {

        var flag = 0;
        if (jquery_min_p('#txtnooftable').val() == '') {
            jquery_min_p('#txtnooftable').addClass('validate');
            flag = 1;
        }

        if (flag == "1") {
            return false;

        }
        else {


            CreateTable();
        }

    });




    jquery_min_p('#btnUpdate').click(function () {
        jquery_min_p('#defineRestro').css('display', 'none');
        jquery_min_p('#sittingSection').css('display', 'block');
        jquery_min_p("#btnAdd_sittingsection").text('Update');
        jquery_min_p('#btnAdd_Table').text('Update');
        jquery_min_p('#btnAdd_KitchenSection').text('Update');
        
        // jquery_min_p('#txtcodesitting').attr('disable');
        jquery_min_p('#txtcodesitting').attr("disabled", "disabled");
        jquery_min_p('#txtnamesitting').focus();
        BindSittingSection();
        Update = 1;

    })
    jquery_min_p('#btnBack1').click(function () {
       
        jquery_min_p('#defineRestro').css('display', 'block');
        jquery_min_p('#sittingSection').css('display', 'none');
        Update = 0;

        jquery_min_p('#txtcodesitting').val('');
        jquery_min_p('#txtcodesitting').removeClass('validate');
      
        jquery_min_p('#txtnamesitting').val('');
        jquery_min_p('#txtnamesitting').removeClass('validate');

        jquery_min_p(".deleteIcon").css("display", "none");
        jquery_min_p('#divsittingsection .sectionBox').removeClass('active');
           

    })
    jquery_min_p('#btnNext1').click(function () {
        jquery_min_p('#defineRestro').css('display', 'none');
        jquery_min_p('#sittingSection').css('display', 'none');
        jquery_min_p('#createTable').css('display', 'block');
        jquery_min_p('#txtnooftable').val('');
        jquery_min_p('#txtnooftable').removeClass('validate');

        jquery_min_p(".deleteIcon").css("display", "none");
        jquery_min_p('#divsittingsection .sectionBox').removeClass('active');
        jquery_min_p('#txtnooftable').focus();
        BindTableList();
    })



    

    jquery_min_p('#btnBack2').click(function () {
        // Reset();
        jquery_min_p('#defineRestro').css('display', 'none');
        jquery_min_p('#sittingSection').css('display', 'block');
        jquery_min_p('#createTable').css('display', 'none');


        jquery_min_p('#txtcodesitting').val('');
        jquery_min_p('#txtcodesitting').removeClass('validate');

        jquery_min_p('#txtnamesitting').val('');
        jquery_min_p('#txtnamesitting').removeClass('validate');

        jquery_min_p(".deleteIcon").css("display", "none");
        jquery_min_p('#divsittingsection .sectionBox').removeClass('active');
        jquery_min_p('#txtcodesitting').focus();
    })

    jquery_min_p('#btnNext2').click(function () {
        jquery_min_p('#defineRestro').css('display', 'none');
        jquery_min_p('#sittingSection').css('display', 'none');
        jquery_min_p('#createTable').css('display', 'none');
        jquery_min_p('#kitchenSection').css('display', 'block');


        jquery_min_p('#txtkitchencode').val('');
        jquery_min_p('#txtkitchencode').removeClass('validate');

        jquery_min_p('#txtkitchenname').val('');
        jquery_min_p('#txtkitchenname').removeClass('validate');
        
        BindKitchenSection();

        jquery_min_p(".deleteIcon").css("display", "none");
        jquery_min_p('#Divtable .sectionBox').removeClass('active');
        jquery_min_p('#txtkitchencode').focus();
        
        if (Update != 1) {
           // jquery_min_p('#txtkitchencode').attr("enabled", "enabled");
        }
        else {
            jquery_min_p('#txtkitchencode').attr("disabled", "disabled");
        }
    })
    jquery_min_p('#btnBack3').click(function () {
        jquery_min_p('#defineRestro').css('display', 'none');
        jquery_min_p('#sittingSection').css('display', 'none');
        jquery_min_p('#createTable').css('display', 'block');
        jquery_min_p('#kitchenSection').css('display', 'none');

        jquery_min_p('#txtnooftable').val('');
        jquery_min_p('#txtnooftable').removeClass('validate');

        jquery_min_p(".deleteIcon").css("display", "none");
        jquery_min_p('#divsittingsection .sectionBox').removeClass('active');
        jquery_min_p('#txtnooftable').focus();

    })
    jquery_min_p('#btnFinish').click(function () {
       


       
        window.location.href = "/Home/Index";
        Update = 0;



    });

});
function BindSittingSection() {

    //var url = window.location.pathname;
    //var id = url.substring(url.lastIndexOf('/') + 1);

    jquery_min_p("#divsittingsection").html("");
    jquery_min_p("#lblrestroid").text(id);

    //var restroid = jquery_min_p('#lblrestroid').val();
    //alert(id);

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/DefineResturant/BindSittingSection",


        data: "{'id':'" + id + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsonData = result;
            var ArrayCount = result.length;
            var Query = "";
            for (var i = 0; i < ArrayCount; i++) {


                Query = Query + "<div class='sectionBox'  onclick='EditSittingSetion(" + result[i].sittingsectionId + "," + '"' + result[i].code + '"' + "," + '"' + result[i].name + '"' + ")'>";
                //Query = Query + "<div class='sectionBox' id='dvsittingsection' >";

                Query = Query + "<img src='/Content/images/family-icon.png' />"
                Query = Query + "<h6>" + result[i].name + "</h6><i  id='delsettingsection'class='fa fa-trash deleteIcon' aria-hidden='true'  onclick='DeleteSitting(" + result[i].sittingsectionId + "," + '"' + result[i].code + '"' + "," + '"' + result[i].name + '"' + ")'></i></div>";
                //<i class='fa fa-trash deleteIcon' aria-hidden='true'></i>
            }


            jquery_min_p("#divsittingsection").append(Query);

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


function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function DeleteSitting(sittingsectionId, code, name)
{
    jquery_min_p('#hconfirm').text('Are You Sure Want To Delete !');
    jquery_min_p('#confirmationPopup').modal('show');


    jquery_min_p("#yesBtn").click(function () {
        jquery_min_p('#confirmationPopup').modal('hide');

        DeleteSittingSection(sittingsectionId, code, name);

    });


    jquery_min_p("#noBtn").click(function () {
        jquery_min_p('#confirmationPopup').modal('hide');
        return false;

    });



}

function DeleteSittingSection(sittingsectionId, code, name)
{

    //alert(a+" "+b+" "+c);
    var restroId = id;
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/DefineResturant/DeleteSittingSection",
        data: "{'sittingsectionId':'" + sittingsectionId + "','restroId':'" + restroId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsondata = eval(result);
           // alert(result[0].count);
            if (result[0].count == '0')
            {
                jquery_min_p.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    url: "/DefineResturant/DeleteTableSittingSection",
                    data: "{'sittingsectionId':'" + sittingsectionId + "'}",
                    dataType: "json",
                    async: false,
                    success: function (result) {
                        var i = 0;
                        var jsondata = eval(result);
                        // BindSittingSection();
                        


                        jquery_min_p('#popupsuccess').text('Sitting section deleted sucessfully');
                        jquery_min_p('#savePopup').modal('show');
                        jquery_min_p('#dngwarn').modal('hide');
                        BindSittingSection();




                       // alert('deleted');
                       
                    },
                    error: function (result) {

                      
                    }
                })



            }
            else
            {

                jquery_min_p('#h6warning').text('Please delete tables associated with this section!');
                jquery_min_p('#dngwarn').modal('show');
                jquery_min_p('#savePopup').modal('hide');

            }
            



        },
        error: function (result) {

            alert("Error");
        }
    })

}

function SaveSittingSection() {

    jquery_min_p("#divsittingsection").html("");
    var code = jquery_min_p('#txtcodesitting').val();
    var name = jquery_min_p('#txtnamesitting').val();
    var sittingsectionId = jquery_min_p("#lblsitiingId").text().trim();
    //var url = window.location.pathname;
    //var restroId = url.substring(url.lastIndexOf('/') + 1);
    var restroId = id;
    //var restroId = jquery_min_p('#lblrestroid').val();
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/DefineResturant/SaveSittingSection",
        data: "{'code':'" + code + "','name':'" + name + "','restroId':'" + restroId + "','sittingsectionId':'" + sittingsectionId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsondata = eval(result);
            if (jsondata[0].result == '1') {


               // alert('section added Successfully');
                jquery_min_p('#popupsuccess').text('section added Successfully');
                jquery_min_p('#savePopup').modal('show');


                
                jquery_min_p('#txtcodesitting').val("");
                jquery_min_p('#txtnamesitting').val("");
                BindSittingSection();

            }

            else if (jsondata[0].result == '2') {
                //alert('section Updated Successfully');

                jquery_min_p('#popupsuccess').text('section Updated Successfully');
                jquery_min_p('#savePopup').modal('show');

                jquery_min_p('#txtcodesitting').val("");
                jquery_min_p('#txtnamesitting').val("");
                BindSittingSection();

            }

            else// (jsondata[0].result != '')
            {


                //alert('Code Already Exist');
                jquery_min_p('#h6warning').text('Code Already Exist');
                jquery_min_p('#dngwarn').modal('show');
                Reset();



                //jquery_min_p("#warningpopup").modal('show');

                //jquery_min_p('#lblwarning').text('Addons added to this item name successfullyCode Already Exist');
                BindSittingSection();


            }

            



        },
        error: function (result) {

            alert("Error");
        }
    })


}




function SittingValidation() {


    var flag = 0;
   
    if (jquery_min_p('#txtcodesitting').val() == '') {
        jquery_min_p('#txtcodesitting').addClass('validate');
        flag = 1;
    }
    if (jquery_min_p('#txtnamesitting').val() == '') {
        jquery_min_p('#txtnamesitting').addClass('validate');
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

    if (jquery_min_p('#txtcodesitting').val().trim() != '') {
        jquery_min_p('#txtcodesitting').removeClass('validate');
    }
    if (jquery_min_p('#txtnamesitting').val().trim() != '') {
        jquery_min_p('#txtnamesitting').removeClass('validate');
    }

    if (jquery_min_p('#txtnooftable').val().trim() != '') {
        jquery_min_p('#txtnooftable').removeClass('validate');
    }


    if (jquery_min_p('#txtkitchencode').val().trim() != '') {
        jquery_min_p('#txtkitchencode').removeClass('validate');
    }

    if (jquery_min_p('#txtkitchenname').val().trim() != '') {
        jquery_min_p('#txtkitchenname').removeClass('validate');
    }


    if (jquery_min_p('#textcode').val() != '') {
                jquery_min_p('#textcode').removeClass('validate');
            }
            if (jquery_min_p('#textresturantname').val() != '') {
                jquery_min_p('#textresturantname').removeClass('validate');
            }


            if (jquery_min_p('#textlocation').val() != '') {
                jquery_min_p('#textlocation').removeClass('validate');

            }
            if (jquery_min_p('#textarabicname').val() != '') {
                jquery_min_p('#textarabicname').removeClass('validate');

            }
            if (jquery_min_p('#textvatno').val() != '') {
                jquery_min_p('#textvatno').removeClass('validate');

            }
            if (jquery_min_p('#textaddress').val() != '') {
                jquery_min_p('#textaddress').removeClass('validate');

            }


}


function BindTableList() {



    //var url = window.location.pathname;
    //var restroId = url.substring(url.lastIndexOf('/') + 1);
    jquery_min_p("#Divtable").html("");
    var restroId = id;
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/DefineResturant/BindTableList",
        data: "{'restroId':'" + restroId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsonData = result;
            var ArrayCount = result.length;
            var Query = "";
            for (var i = 0; i < ArrayCount; i++) {


                Query = Query + "<div class='sectionBox'  onclick='EditTableCreation(" + result[i].tableId + "," + '"' + result[i].code + '"' + "," + '"' + result[i].name + '"' + ")'>";
               // Query = Query + "<div class='sectionBox'  >";
                Query = Query + "<img src='/Content/images/table-icon.png' />"
                Query = Query + "<h6>" + result[i].name + "</h6><i  id='DelCreateTable'class='fa fa-trash deleteIcon' aria-hidden='true'  onclick='DelTable(" + result[i].tableId + "," + '"' + result[i].code + '"' + "," + '"' + result[i].name + '"' + ")'></i></div>";
            }


            jquery_min_p("#Divtable").append(Query);

        },



        //<div class="sectionBox">
        //           <img src="~/Content/images/table-icon.png" />
        //           <h6>T24</h6>
        //       </div>


        error: function (result) {

            alert("Error");
        }
    })


}


function DelTable(tableid,code,name)
{
    jquery_min_p('#hconfirm').text('Are You Sure Want To Delete !');
    jquery_min_p('#confirmationPopup').modal('show');


    jquery_min_p("#yesBtn").click(function () {
        jquery_min_p('#confirmationPopup').modal('hide');

        DeleteTable(tableid, code, name);

    });


    jquery_min_p("#noBtn").click(function () {
        jquery_min_p('#confirmationPopup').modal('hide');
        return false;

    });

}



function DeleteTable(tableid, code, name)
{

    var restroId = id;
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/DefineResturant/CheckDeleteTable",
        data: "{'tableid':'" + tableid + "','restroId':'" + restroId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsondata = eval(result);
            // alert(result[0].count);
            if (result[0].sittingsectionid == null) {
                jquery_min_p.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    url: "/DefineResturant/DeleteTable",
                    data: "{'restroId':'" + restroId + "'}",
                    dataType: "json",
                    async: false,
                    success: function (result) {
                        var i = 0;
                        var jsondata = eval(result);
                        // BindSittingSection();



                        jquery_min_p('#popupsuccess').text('Table deleted sucessfully');
                        jquery_min_p('#savePopup').modal('show');
                        jquery_min_p('#dngwarn').modal('hide');
                        BindTableList();




                        // alert('deleted');

                    },
                    error: function (result) {


                    }
                })



            }
            else {

                jquery_min_p('#h6warning').text('Please delete tables associated with this section!');
                jquery_min_p('#dngwarn').modal('show');
                jquery_min_p('#savePopup').modal('hide');

            }




        },
        error: function (result) {

            alert("Error");
        }
    })



}

function EditTableCreation(tableId,code,name)
{
    //alert(tableId + " " + code + " " + name);

    jquery_min_p("#Divtable .sectionBox").click(function () {

        jquery_min_p('#Divtable .sectionBox').removeClass('active');
        //$('#divsittingsection .sectionBox').removeClass('fa fa-trash deleteIcon');
        //$('#divsittingsection .sectionBox i').css('display','none');

        jquery_min_p("#Divtable .sectionBox").removeClass('active');
        //jquery_min_p('#divsittingsection .sectionBox .deleteIcon').removeClass('fa fa-trash deleteIcon');
        jquery_min_p('#Divtable .sectionBox .deleteIcon').css('display', 'block');
        //jquery_min_p('#divsittingsection .sectionBox .deleteIcon').css('display', 'none');
        jquery_min_p(".deleteIcon").css("display", "none");



        if ($('#Divtable .sectionBox').hasClass('active')) {
            jquery_min_p('#Divtable .sectionBox').removeClass('active');
            //jquery_min_p('#divsittingsection .sectionBox .deleteIcon').removeClass('fa fa-trash deleteIcon');
        }
        jquery_min_p(this).addClass('active');
        jquery_min_p(".deleteIcon", this).css("display", "block");
        // jquery_min_p(this).addClass('fa fa-trash deleteIcon');
        //jquery_min_p(this).addClass('fa fa-trash deleteIcon');
    });

}



function CreateTable() {


    //var url = window.location.pathname;
    //var restroId = url.substring(url.lastIndexOf('/') + 1);
    var restroId = id;
    var NoOftables = jquery_min_p('#txtnooftable').val();

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/DefineResturant/CreateTable",
        data: "{'restroId':'" + restroId + "','NoOftables':'" + NoOftables + "'}",
        dataType: "json",
        async: false,
        success: function (result) {

            var i = 0;
            var jsondata = eval(result);
            if (jsondata[0].result != '') {

                //alert('Table Added Successfully');



                jquery_min_p('#popupsuccess').text('Table Added Successfully');
                jquery_min_p('#savePopup').modal('show');

                jquery_min_p('#txtnooftable').val("");
                BindTableList();

            }

        },

        error: function (result) {

            alert("Error");
        }
    })


}


function BindKitchenSection() {

    jquery_min_p("#DivKitchenSection").html("");

    //var url = window.location.pathname;
    //var RestroId = url.substring(url.lastIndexOf('/') + 1);
    var RestroId = id;

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/DefineResturant/BindKitchenSection",
        data: "{'RestroId':'" + RestroId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsonData = result;
            var ArrayCount = result.length;
            var Query = "";
            for (var i = 0; i < ArrayCount; i++) {


                Query = Query + "<div class='sectionBox' onclick='EditKitchenSection(" + result[i].kitchensectionId + "," + '"' + result[i].code + '"' + "," + '"' + result[i].name + '"' + ")'>";
                
                Query = Query + "<img src='/Content/images/hot-icon.png' />"
                Query = Query + "<h6>" + result[i].name + "</h6><i  id='delCreateTable' class='fa fa-trash deleteIcon' aria-hidden='true'  onclick='Delkitchensection(" + result[i].kitchensectionId + "," + '"' + result[i].code + '"' + "," + '"' + result[i].name + '"' + ")'></i></div>";
            }


            jquery_min_p("#DivKitchenSection").append(Query);

        },



        //<div class="sectionBox">

        //           <img src="~/Content/images/hot-icon.png" />
        //           <h6>Hot Section</h6>
        //       </div>


        error: function (result) {

            alert("Error");
        }
    })


}

function Delkitchensection(kitchensectionId,code,name)
{
    jquery_min_p('#hconfirm').text('Are You Sure Want To Delete !');
    jquery_min_p('#confirmationPopup').modal('show');


    jquery_min_p("#yesBtn").click(function () {
        jquery_min_p('#confirmationPopup').modal('hide');

        Deletekitchensection(kitchensectionId, code, name);

    });


    jquery_min_p("#noBtn").click(function () {
        jquery_min_p('#confirmationPopup').modal('hide');
        return false;

    });
}



function Deletekitchensection(kitchensectionId, code, name)
{


    var restroId = id;
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/DefineResturant/DeleteKitchenCount",
        data: "{'kitchensectionId':'" + kitchensectionId + "','restroId':'" + restroId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsondata = eval(result);
            // alert(result[0].count);
            if (result[0].Count == '0') {
                jquery_min_p.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    url: "/DefineResturant/DeleteKitchenSection",
                    data: "{'kitchensectionId':'" + kitchensectionId + "'}",
                    dataType: "json",
                    async: false,
                    success: function (result) {
                        var i = 0;
                        var jsondata = eval(result);
                        // BindSittingSection();



                        jquery_min_p('#popupsuccess').text('Kitchen section deleted sucessfully');
                        jquery_min_p('#savePopup').modal('show');
                        jquery_min_p('#dngwarn').modal('hide');
                        // BindSittingSection();
                        BindKitchenSection();




                        // alert('deleted');

                    },
                    error: function (result) {


                    }
                })



            }
            else {

                jquery_min_p('#h6warning').text('Please delete tables associated with this section!');
                jquery_min_p('#dngwarn').modal('show');
                jquery_min_p('#savePopup').modal('hide');

            }




        },
        error: function (result) {

            alert("Error");
        }
    })







}

function AddKitchenSection() {
    jquery_min_p("#DivKitchenSection").html("");
    //var url = window.location.pathname;
    //var restroId = url.substring(url.lastIndexOf('/') + 1);
    var restroId = id;
    var Kitchencode = jquery_min_p('#txtkitchencode').val();
    var KitchenName = jquery_min_p('#txtkitchenname').val();
    var kitchensectionId = jquery_min_p("#kitchensectionId").text().trim();

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/DefineResturant/AddKitchenSection",
        data: "{'restroId':'" + restroId + "','Kitchencode':'" + Kitchencode + "','KitchenName':'" + KitchenName + "','kitchensectionId':'" + kitchensectionId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {

            var i = 0;
            var jsondata = eval(result);
            if (jsondata.length == '0') {

               // alert('KitchenSection Added Successfully');

                jquery_min_p('#popupsuccess').text('KitchenSection Added Successfully');
                jquery_min_p('#savePopup').modal('show');

                jquery_min_p('#txtkitchencode').val("");
                jquery_min_p('#txtkitchenname').val("");
                jquery_min_p('#lblDispMessage').hide();
                BindKitchenSection();

            }
            else if (jsondata[0].result == '1') {

                // alert('KitchenSection Added Successfully');

                jquery_min_p('#popupsuccess').text('KitchenSection Updated Successfully');
                jquery_min_p('#savePopup').modal('show');

                jquery_min_p('#txtkitchencode').val("");
                jquery_min_p('#txtkitchenname').val("");
                jquery_min_p('#lblDispMessage').hide();
                BindKitchenSection();

            }
            else {
            //    jquery_min_p('#lblDispMessage').text('KitchenCode Already Exist !');
            jquery_min_p('#h6warning').text('KitchenCode or KitchenName Already Exist !');
            jquery_min_p('#dngwarn').modal('show');

            //    jquery_min_p('#lblDispMessage').show();
            //    jquery_min_p('#lblDispMessage').addClass('validate');
                jquery_min_p('#txtkitchencode').val("");
                jquery_min_p('#txtkitchenname').val("");
                BindKitchenSection();
                return false;

            }

        },

        error: function (result) {

            alert("Error");
        }
    })



}

function EditSittingSetion(sittingsectionId, code, name) {
   // alert(Update);




   
    if (Update == 1) {
        var sittingsectionId1 = sittingsectionId;
        jquery_min_p('#txtcodesitting').val(code);
        jquery_min_p('#txtnamesitting').val(name);
        jquery_min_p('#txtcodesitting').attr("disabled", "disabled");
    
        jquery_min_p("#lblsitiingId").text(sittingsectionId1);

        Removeclass();
    }


    

    jquery_min_p("#divsittingsection .sectionBox").click(function () {

        jquery_min_p('#divsittingsection .sectionBox').removeClass('active');
        //$('#divsittingsection .sectionBox').removeClass('fa fa-trash deleteIcon');
        //$('#divsittingsection .sectionBox i').css('display','none');

        jquery_min_p("#divsittingsection .sectionBox").removeClass('active');
       // jquery_min_p('#divsittingsection .sectionBox .deleteIcon').removeClass('fa fa-trash deleteIcon');
        //jquery_min_p('#divsittingsection .sectionBox .deleteIcon').css('display', 'block');
        //jquery_min_p('.fa fa-trash deleteIcon').show();
        //jquery_min_p('#delCreateTable').css('display', 'block');
        //jquery_min_p('#delCreateTable').css('display', 'none');
        //jquery_min_p('#divsittingsection .sectionBox .deleteIcon').css('display', 'none');
        //jquery_min_p('#divsittingsection .sectionBox .deleteIcon').addClass('deleteIcon');
        jquery_min_p(".deleteIcon").css("display", "none");
       


       
        if ($('#divsittingsection .sectionBox').hasClass('active')) {
            jquery_min_p('#divsittingsection .sectionBox').removeClass('active');
           // jquery_min_p(".deleteIcon").css("display", "none");
            //jquery_min_p('#delCreateTable').css('display', 'none');
           // jquery_min_p('#divsittingsection .sectionBox .deleteIcon').removeClass('fa fa-trash deleteIcon');
        }
        jquery_min_p(this).addClass('active');
        jquery_min_p(".deleteIcon", this).css("display", "block");
        /// jquery_min_p(this).find('#delCreateTable').show();
        //jquery_min_p(this).addClass('fa fa-trash deleteIcon');
        //jquery_min_p(this).addClass('fa fa-trash deleteIcon');
   });

  



}

function EditKitchenSection(kitchensectionId, code, name)
{

    if (Update == 1) {
        var kitchensectionId1 = kitchensectionId;
        jquery_min_p('#txtkitchencode').val(code);
        jquery_min_p('#txtkitchenname').val(name);
        jquery_min_p('#txtkitchencode').attr("disabled", "disabled");

        jquery_min_p("#kitchensectionId").text(kitchensectionId1);
        //alert(jquery_min_p("#kitchensectionId").text());

        Removeclass();
    }



    jquery_min_p("#DivKitchenSection .sectionBox").click(function () {

        jquery_min_p('#DivKitchenSection .sectionBox').removeClass('active');
        //$('#divsittingsection .sectionBox').removeClass('fa fa-trash deleteIcon');
        //$('#divsittingsection .sectionBox i').css('display','none');

        jquery_min_p("#DivKitchenSection .sectionBox").removeClass('active');
        //jquery_min_p('#divsittingsection .sectionBox .deleteIcon').removeClass('fa fa-trash deleteIcon');
        jquery_min_p('#DivKitchenSection .sectionBox .deleteIcon').css('display', 'block');
        //jquery_min_p('#divsittingsection .sectionBox .deleteIcon').css('display', 'none');
        jquery_min_p(".deleteIcon").css("display", "none");
       // jquery_min_p('#divsittingsection .sectionBox').removeClass('active');



        if ($('#DivKitchenSection .sectionBox').hasClass('active')) {
            jquery_min_p('#divsittingsection .sectionBox').removeClass('active');
            //jquery_min_p('#divsittingsection .sectionBox .deleteIcon').removeClass('fa fa-trash deleteIcon');
        }
        jquery_min_p(this).addClass('active');
        jquery_min_p(".deleteIcon", this).css("display", "block");
        // jquery_min_p(this).addClass('fa fa-trash deleteIcon');
        //jquery_min_p(this).addClass('fa fa-trash deleteIcon');
    });




}




function ShowRestaurantDetails() {


    Reset();
    //alert(ItemId);
    var RestroId = id;
    //jquery_min_p("#lblitemid").text(a);

    //jquery_min_p("#lblitem").text('Update Item');
    //console.log(a);
    //alert(jquery_min_p("#lblitemid").text());


    //alert(id);
    jquery_min_p.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/DefineResturant/ShowRestaurantDetails", /// <reference path="../WebServices/HolidayList.asmx" />

        data: "{'RestroId':'" + RestroId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            // alert(result);
            console.log(result);
            var i = 0;
            var jsonData = eval(result);
            // var arraycount = result.length;


            // newItemPopup

            //jquery_min_p("#newItemPopup").css("display", "block");


            var code = result[i].code;
            var name = result[i].name;
            var location = result[i].location;
            var Address = result[i].Address;
            var VATNo = result[i].VATNo;
            var ArabicName = result[i].ArabicName;
            //var UOMID = result[i].UOMID;

            // alert(ItemGroupId);

            //var path = "../RestroImage/" + id + ".jpg";


           // var pa=jquery_min_p('#files').attr("src", path);



            ///jquery_min_p("#files").val(pa);

            jquery_min_p("#textcode").val(code);
            jquery_min_p("#textresturantname").val(name);
            jquery_min_p("#textlocation").val(location);


            jquery_min_p('#textcode').attr("disabled", "disabled");


            jquery_min_p("#textaddress ").val(Address);

            jquery_min_p("#textvatno").val(VATNo);
            jquery_min_p("#textarabicname").val(ArabicName);
           // jquery_min_p('#employee12').css('display', 'block');


           // jquery_min_p('#btnnewitemsave').css('display', 'none');
           // jquery_min_p('#btnnewitemupdate').css('display', 'block');

          //  bootstrap_min_p("#newItemPopup").modal('show');








        },

        error: function () {

        }
    });
}




function updateRestroDetails() {

    var code = jquery_min_p('#textcode').val();
    var name = jquery_min_p('#textresturantname').val();


    var location = jquery_min_p('#textlocation').val();
    var address = jquery_min_p('#textaddress').val();
    var arebicname = jquery_min_p('#textarabicname').val();
    var vatno = jquery_min_p('#textvatno').val();
    var restroId = id;

    //var files = jquery_1_11_3_min_p("#files").get(0).files;
    //var RestroImage = "0x89504E470D0A1A0A0000000D49484452000001F4000001F40806000000CBD6DF8A0000000467414D410000AFC837058AE90000001974455874536F6674776172650041646F626520496D616765526561647971C9653C000246804944415478DA62FCFFFF3FC3281805A360148C8251300A8636000820C6D10A7D148C8251300A46C12818FA002080462BF451300A46C1281805A360180080001AADD047C1281805A360148C826100000268B4421F05A360148C8251300A86010008A0D10A7D148C8251300A46C1281806002080462BF451300A46C1281805A360180080001AADD047C1281805A360148C826100000268B4421F05A360148C8251300A86010008A0D10A7D148C8251300A46C1281806002080462BF451300A46C1281805A360180080001AADD047C1281805A360148C826100000268B4421F05A360148C8251300A86010008A0D10A7D148C8251300A46C1281806002080462BF451300A46C1281805A360180080001AADD047C1281805A360148C826100000268B4421F05A360148C8251300A86010008A0D10A7D148C8251300A46C1281806002080462BF451300A46C1281805A360180080001AADD047C1281805A360148C826100000268B4421F05A360148C8251300A86010008A0D10A7D148C8251300A46C1281806002080462BF451300A46C1281805A360180080001AADD047C1281805A360148C826100000268B4421F05A360148C8251300A86010008A0D10A7D148C8251300A46C1281806002080462BF451300A46C1281805A360180080001AADD047C1281805A360148C826100000268B4421F05A360148C8251300A86010008A0D10A7D148C8251300A46C1281806002080462BF451300A46C1281805A360180080001AADD047C1281805A360148C826100000268B4421F05A360148C8251300A86010008A0D10A7D148C8251300A46C1281806002080462BF451300A46C1281805A360180080001AADD047C1281805A360148C826100000268B4421F05A360148C8251300A86010008A0D10A7D148C8251300A46C1281806002080462BF451300A46C1281805A360180080001AADD047C1281805A360148C826100000268B4421F05A360148C8251300A86010008A0D10A7D148C8251300A46C1281806002080462BF451300A46C1281805A360180080001AADD047C1281805A360148C826100000268B4421F05A360148C8251300A86010008A0D10A7D148C8251300A46C1281806002080462BF451300A46C1281805A360180080001AADD047C1281805A360148C826100000268B4421F05A360148C8251300A86010008A0D10A7D148C8251300A46C1281806002080462BF451300A46C1281805A360180080001AADD047C1281805A360148C8261000002B0572D394E0431D4F5EDEECC4841B0E2008825379883CF29E604B0454848A02493FAD855F3EC242B966C404A754AA9B86C3FFBF9A973FF43FF4FD7B7C3F77FB2AE9B9E7E1C7E51709E820F34F02C3E117947952BEDD246A75E28E38EC8D1C4E3F4143C7516D2140977AF5228E27B8B99780845E49379F1ADC2F49877F0156A38CB1C8647CE01137E63C026B0456C470DF113368F730CA869CC0B2E62B690A8480716E2817DE2023F6F3568DE2D64C350E0683593D5A331DA437481AC6BA71F67770B72EAEF73AFE491576BEEC04F8A2D020E16E414E0C31FC11E5BF064C43570B45F1EAD87DFEDA8360FDC78E6F601585F8AB43D023F57E6A72A752DC2A90FDBA18B3C007F436F0505889605FC1108DB39C931F51C22671FFB2EE5E2C93F7B17BE828323B87CC1FD4FF0384EBDF2435A8DBB433BD38A191C5B314E6E3C08381CE04749431EB307CC98651ACFBAB5EFE92EBA80BBDDEB7C0B775A53BCEA057ECA81EA45F981ED8C192C3E23765201870BF027B074FA5A9326E9AA89EB8C185C2D211AFF9AF186AFE7C2CDE2F1B2B3D9F86B8C0C467C82BE1269E6AE33360D1B67A637F0608614A3F5A21A035FC0EEA645469E7D5CA961760A365087EA2F22E7A1BED27BD5286286F5A93CA94483E1FDCDFAF4EEE3FD25785F7FAC3701D82F9B150442288CEA8C33F61F0CB508DAB7EA257AFF458FD0A28182280A9C7052EBF38E436F509BFB89A02EBC1737E7A8F809389C1F884E6FD0A2034D045148100368721F7CE5BC5F421C368FD62C8EE6BABDDB666D5ECFA2717686F3CAF8766501F508C10E48816429DE13924891A6BCFB8AF26BEE32CD3432DA47E1CA76501EEA0340BC409E4E5A2933CA35D643372D753D2906FBB91ED7A87928A53A437C6E500C202D4A9320D012B5057F0E389C7FE623003B66B082300C83E1D6BAD94D181E7AF22488277DFF577157C59B2832E6DCAA5D4C6227FA007ACA0F692939F4F8E58B005D22F9D5FA2BC29B3715B43D50818E02ED74757D74CB4BDBCCD17E37D5BD5D9FBA6A51FB6686BDF416BCF2648064C08CE89E0DF8E5F99A2D8FE8AC2343B5D6EFB181BAF406F88079BC7B086A58C80D7DFE81D94F8380763818388826093478602568BED6A4808580CF8FCE4EF7459A97D9D86E11F63BB4FB43964C4AB4F7B33123E47BF8FA572291FC274F01D833631D0461200CDF81A02826243A181EC2450707DF3F2E260E8E6E4E6A2406D042B0D4EBB5C80BE8D63F6968D294365DBEBBFF77407772FA21C28D55AF238301122A7D4980CCEBE73613C5FA5E15CB5B95AFB2AA9C8BA6F66AD9B0558CA818C2D8215B170134E708C092116DC7DD76E0B61E3F72ABCDB4E62F071296DA3DE881ED6640FF5B04D883CC68A1DFCBB7307184FD314829A194027310C1E5F5484FA0525ADF78A8411FC0D80F2119C5D7C52439CC86F19EBAF9E3348C7691179CE93DDE543B28ED2618CBDCC9C9E95FFA08A0D10A7D148C02B2AB6F0670BF19347C0EAA3C81FD5F0E60456DF6EADB07A797DF3E1ABDFBF945FEC3CFAF921F7E7D1305CDA5FF05F75C2173FC8CD0CA9F9D19566943E79BC1D52A23A2E20355C4FF11952D23CAC83623640EFA3FBC830E976484E98556EC302946C8B83BA4C2064FEB3231402D80ABFB0763FF8754EF4C503DCCE0C96958FB01D2B307AD2D00354CDEFEFA2276E7E37337A0CFDCB858D9187859B93E0A71703FE667E37E26C523784A8C53600F3B0BDB695666A66FFFFE81FCF1876174907E148C02EA0280001AADD047C12820B11A075576A05EF8DFFFFF587EFEFBADFAF6C71783B73F3E993EF9FAD6FBD5B78FCAEF7F7C61FEF1F717B8B202F5B2418BA85820F3D50CF04E3323237C0121B862FBFF1FBEB0EE3F940FE9B53332FC8356E7C82D097065CB08D3CB80D60C60448C7783CC852966402C5A44D4FA08C6FFFF48F6FC67403211342280E8DAFF8787030364811ACCFD8C10715005FFEDF77BFE675FDFF203F93A1CCC6C6E7CEC9C55E29CFC0F647845760973F01E616766BBCCC3C67603A8EDD71F90BDFFFF8D26AD51300A28040001345AA18F825140444F1C5471815647037BD52C5FFFFCD07BFAF96DC893AFEF6C1E7F7E6DFEEEC767B65FE0DE3764B5370B332303070B0BB4E665445A2F86A81061ABBAFF4317B52157A4B0FE38C37FD8C0376825FC5FF82A6B86FF881EF87FE85C3A780537A8EAFF07D92100330A3EBA8E6C3CB441C1C0802E88BC780FDA2EF8CF001FF2FFCF80DA28401ED287374CC03B079819D898A103F740CF837AF3EFBE7F627AFDFDA3D2D5770F3398985832F859B9FF28F38B5D90E4163A28C523B4868B99FD2C2B33F36F4660A3E7FFDFBFA3896E148C02320040008D56E8A36014E0ACC4A1C3CD0C8C1C5F7EFF307FF8F94D30B0176EFFE2EB078D0F3FBFB081B6A1314317BDB133B12086CDFFFF475D63FE1FA9578EE80F63568CF095EA0C70B318C02BDAFF308870F232FC0656749F7E7F836C1163604498C3C0005EEDCECDC2C6C0C5C2C1F0F6E757A0F05FF0C800B82A66FC8F5E9B23D5E0FFD12A6444650E5D2D0755066C2980B75FFD036FFD6203F9F73FE69039CC2FF05E3C88048D52FC073674A0A2A011870FBFBEB09C7EF5C904D8A83111E4E0C91365E7BD27C7277650995F62250F2BE7711626E6EFA0D10D504366148C8251401C0008A0D10A7D148C022400DB7F0EA4D9DEFFF8EAF9E4EB1BBFFB1F5F38BCFAFE51FECBEFEFA0456E0CCC200854C3019BFF66C0D6D9854C38C3EA6AF415DF8CFF1950969E213700E08D024646F0CA74765636066F0533866BEF1F311C7872998117586983460B205D7048DF19B427DB5C421D3477CDB0FEDE49602303B9718218A367FC8F3CCB0E1D8A87C921F5BEE1C30AD0DA1D5451FFFEF707E86F56061D61198637DF3F813168EB1B4A8304FD5C0BE45E3C94CDF41FBA479D89093C3AF1E1C767D637DF3FA8DFFCF854FDC40BAE64510EBE47F27CA207E479C5760A73F2EE646566F9C0043E836074587E148C027C002080462BF4513062016C009C117A180D2B2333E3E75FDFF5EF7D7AE9FDECEB3BEF7B1F5F5A7EFCF515D25B0756A0A0436A58C18BC219D1E6B4618BD3FEC3879DC1C7AD800EB68156EAFFD17BEAD0FA1276F809234A4508AD5C81B5DD2F60256A2AA4CA6025A9CE20CB2BCC006C6430DC7EFF94E1CFDF3F905E321080D48873F233B8C819303CF9FC067CB809130B23D27C3974D0FDFF7FE882F6FF280EFA0FAB8C1919A18BE1A083EB489531689F3B681B9D83B426838F9209C3C2EBFB191E7D79C3C00D6C5C208F2C8016DDFF031FE00239E88709ADB1025B2800EAA5FF011DEC020C531626167023097CA8CFEF9FCC9F7EBD54BCF7F1B9220F1B57A2029FF875691EA115C0CA7D1B372BDB39D04E3E46684368148C8251800A000268B4421F0523B8370E5ADC063E5D8CF3FD8F2F2E37DE3D2DBCFDE1A9ED9B1F5F584043CB6CCCCCE013D240B52FAC52FEC7F01F65A8991156F9422B4AD0C9613C6C1C0CD6129A0C57DF3D66B8FDF119033B232BF8843426788F9D11B5F7FA1FD163862F4263009D1CF70F7C629C8D9416B84101ACDC18F20C7C180E3EB9C2B0E7D105F0C96DFF19FF8217DEB9CA193188022BF5D7DF3E3270B0B2424E3D6386D6D368ABDF91ED809D6E076B8CC056D4C356C1C3D4FF0456D016C04645A0B23903371B2783938C2EC3F32FEF189E7D7BC7C0050E23D80EB87FE053F9B484E4C18DA45BEF9E201A15D09AFDD7BF5FE0C69138872068E81D7C380D68EA02D6D860873654BEFFF9C570F9ED434D206E1466E7AD53129038A821243D57949D77330B33F367500303DBB0FF28180523150004D068853E0A461C80F4C61919BEFCFE6978FFE3CB885B1F9E063FFEF24619741C2D13B01664036F43431C4BCA003F7D8D1165711923128B09BACD0BD4EBD41494610800567CE6C00A70FFE34B0C0F3EBD66F8F8FB2BC38F3F3FC147CE3220AF3A47318D9101DEFB041D09FBF72F830CB7108322BF38DCED5C2CEC0C9E0AC60C629C020C8BAEEF6378FBE33383B9841A83959406589E9F8D8B4108D80878F9ED3DA492FECFC480BE3F8C117D9802A9C70B5B6087AC1AE427292E01061F451370650E02BA220A0C095ACC4037EC07DAF501D83062054F0F7CFBF39BC1545C85215ADD9E610FD0EF57DEDC0786271BDC62D00A7801A0FB3CE40D19F4451419B6DC3FCD70E0E935F0F63D90EFD980E640160082F6E233828F8205C5C3875F9F984FBFFCE474EDDD4327492EA17BAA02529B65B98597F1B3739D62F8FF077C6ADE7F86D1C36C46C1C8060001345AA18F821101C07BC6C167853331037BE30E0F3EBD8AB9F6EE49F8EBEF1F38411527A892079FBFCE00A998E1C3C8485BB9FEC3ABF4FF582B0E5095023A8BDD4C5C95811548CBF18A324469D8835678333CFFFA8161CDDD630CCF80BD5AC85039B4C70CDB0ECEF01FA3C205ED6F7F09EC71DF7EFF9C414F5401C52EA0BBC13D5D9062691E61F079F720001A1D1062E76678F1F51D036C4C0132BE8F98CC878D05FC874F913362AE8267405D210F5A0807AA8C918186902C43BCA613C3CC2BBB183EFEFC02365347488E214ACD1E586983DCF0013C470E6B5080CCD0169667F0553061501792019BE1056C9C3CFCFC9AE1F1E7370C5EF2460CF2FCA20CEBEF9E6078F5ED13B861F51F3CC1016980B1801A047FFE32DCF9F042E9DEC797F9A29C7CE95A42722B65798597F3B172ED07C6E1AFFFFF46FBEBA360E40280001AADD047C1B0AFC86107BFBCFEF6D1FDEABB4775B73F3CB7F8F0F31B13686F38480E74A907A217CE80D90B67840D49FF47DDD60595FB8F54F9333331A1F4134143FAE2C05EF64F6065F6EDD70F24CD90055EA03DD83F813D4C90C1A0DE290BF48219B05E20FBCD8F4F0CEBEE1D6710E3E66790E012048B5F787D9F61F3FD530CBF413D59A09A2FA00B44E08D00160636D04526708B20A7C1FD079F48C7083BA706B2C79D11D16041D90B0FD70B696A80C2E805B00171EAF92D06453E09E8CA7FC8E1326FBF7F06F7A87F03D9EAFC520C49DA2E0CA25CFCE00B5D4017ACC086DA61D315B23C420CAA8252705BA4808D91242D676083E73D8309B0670F6A107D03FA67F9EDC390CB5718A07103DDEE079ABA6066846C897BF3E333C7DE2797E2795939E2550525CF188A28D58A70F0EEF8C780B6DF7E148C821102000268B4421F05C31630430E746103F68AC3AEBD7B9474F3FD33BB2F7F7E00AB6FC80D6B881EE97FA48561B0435A20951AB82AF98F3A308EBCBF9B01A912045534A095E06BEF1C6700DD54A626280DAFF84E3CBFC1F0E9F757E89C3DB422FFFB870158193118082982E7D76F7C7802ECE97E63E00056ECFF21DBE5C0A306F73EBE6038FDE23683AF9219C3A75FDF18F63FB90CAEC439585881BAFE327CF8F9093CDF0CEAA5832A74762666D44578FFFF2377D0E107D7C02A70D0E6B6FFD0636019FF23CFE3C334FD07CFD33FFCF29AE11DB08121C2C90FBEC16CC783730C3B1E9D03FB990D286F2DA5C920C6250069A800C57E837BF488A6052BD0A6034FAE022BFB1F0C812A960CC21CBCE0457C20B5A0F9792646C8AE0147593DF068C0E6FBA7C10BFE9819507713C05C086E90313381D5021B3926773E3CDFAACC2F715C4B586E911497E04A5626E68FBFFF8D6E7B1B0523070004D068853E0A865D9F1CB4729A91F12FCF83CF2FD3AEBF7D1C7FF7D32B3DD0FC35683B1AA8B264443BA50D42333220EF318355F08C387AFDFF611D7706E41A9E11B4529EE1FEE7D70CBB1F5F6450119004575217DF3C6038FAEC06F4E2140686EFFF7E31B031B232D8486A3258496A002B7E1970AF175821316CBE778AE1CABB470C1CA0510346C4852C7780953AA8E202AF36FFFB177E3529C8FCD7C05EF2879F9F8115BA30B8E205F572FFFF47F80EC5A7D04570E0FDE4C09E35A8E101EAE98386AA1951461FA09BEAA0A7D581E6E24115F13760450E02879E5E61D878FF24648700F8F638160641761E78187DF8F995E12B502DA492466C91032DD63BFCEC1AC3ABEF9F1854F9C5192EBD7DC8F0FCDB0786002573F0F03B483DA8D102F203686A027C6D2D1323543B740A016D9701E42C005660A3E637D38537F7ADAFBF7F6A2DCB2352A927ACB040915F6C2AB011F566746E7D148C04001040A315FA28183E891974CF350303DFD32F6F7C80956829B0823400F55CD940B785B1B0C317A3A10FC742EA62A4C353FFFF8757F088BDD98C48A7A5410F4881767C4167B4FF87F6184115301BB0527FF8F115C3932F6F18E478C5C0776A7FFB0B99EF06DDA10E5A8DEEA36006EC95AA027BE06C70776808C9308873F1332CB97988E1FCAB3B4077436C0535449E7D7D0B5E7C06ACA818247804C17BD2FF81F67303FBAFEF8195E7FB1F5F1824B9852187DC80B692C1DCCD885AF94156E243CE94B796D2006F2F3BF7FA0E7CBF39A233FF1FE56859B07FFFFD83735E7EFF085ED1CF0DAC78416680379E31217AD2A0ED7E20BF32211D3E0F9BFE004150E3E51668FBDDFF3FE095FC079F5E05EDD3631062E7633800643FFDFA061CAE9093F1A07B08A08E63C43CF60E2C08BA979E05D8F0002D3C049AAFF0E8F3AB06257E89681D21F91E053EB155CC4C8C1FFE8CF6D847C130060001345AA18F82210F98A027BA012B36EF33AF6EB75F7BF74417348C0BAA08C18BC5FE43E7C7611534742E19D66B6482567E2867A6A31C6ACE08AF3C502E2565841CE8A2C02F06BA5E1458893C03F71F41DBDDDE007BCC675EDE0157E84A7C620CFCAC5CE04A4A55400ABC904C19D87BC7060439781922D56C18DE022BCC07C09E3E2BF478D8373F3E333C06F2410BED44816AFE43DD0DEABDFEFCF39BE1CDB7CF0C0CC2103338409526F41636847FA05BE180951DA847EEA768CA602AAEC6B0E0FA7E48850CAC8C7FFDFD8B74390C64BF1B13F4F85AD01CF96FA4DBD298C10BD59811B7C33131A154E89F7FFF80F4D051430C3E55015AF0F615D8FB56179001FAD716A8F627C3D44BDBC05307A04A9F850972E31CA201067137A8C5C6063E139F0976491CCAA97AE00B64817A3918D9C0E700DC7CF744F5CEC7E73381F6149B89A9540B73F2AE01E902AD8A1F05A360B80180001AADD047C110AEC819C127977DFBFDC5F0F4CBDBCD57DF3DF1FCFAE7071364A11B646F34F2C524B0DA0465F11B74CE18B1821DAA10E52437F4B5DF10FA0F74AB948F8229031F3B0743FFF9CD0C3F80952BA8A2FB076C50DC06F64241BD73D0B036A8725405F6C0D3B5DD19A47984C03DEA17DFDE33F0B1718017CDB13032C36DE00156FEFCECDCC05AF135780E1D7C400B130BF4B63606065E762E704509730968F8FCF58F8F4817B640E560A30E600E13785BD98F7FBF19DCE58CC087D02CB8BE8FE10E789F3C0BB857AB2924CB20CB2BC2F0E9E7776005FB9DE11BB092050DB1FFFCFD9BE10BB082062D1E6486CE73FF871E9FF30F7A740CA8FD805C79BF0336304073E8A0A903C4F806EC42D67F0C5F80E61A892A31C46AD8C3E7DD415BD936DE3FC5C00EADB0FFFFFF0FD7F513E86E5560230834BC7E0BD87082AC8060428CA8800FEB614434DEC0F53C13B8A1053ADDEFEABB476AF73FBD58A92528BBD7585CB5899795E3C88FBF7F194677B18F82E104000268B4421F05430A406FF0042F2EFBF5EFB7D2CD774FF3CEBCBA93FAE2EB072E90183B333B78E816A54BC8807CA429F201688CF0E15CE4D9660646C85629D0F02C68CE1AD4D3473B1B0EDC9B07A906F6FA18B48565C12BB385D979191EFD7E0DEEED82F48086DC1F7C7AC9A0CC2F0E5E30A627A208AECC8F3DBBCEB0E5C15986D7C05E383FB072066DE3B293D6065740900AFA2F83AEB03CB0F72AC520CE2508DE8A06AAD84538F8C0F2ACD055FB902A8D89E12FD0BDCFBEBE0756C23F808D010EF8D5A68CFFA1951CA46503EE81ABF14B31F8027BE7F73FBC64B8F4FA01789E1AB4384F955F9A2141CB197C663CA8970CDACA071A9A07CD6183F89F4027E6018D014D1780C205349C0EBA780564F43FF0C13B4CF0456D20FB41F3E09091704678E388097A94ED0F60634743509A215ADD0E5E998380B39C3EC3C3CFAF182EBD7904AED42167DFFF67F8FEF71778857F8CBA3D786E7DDAE5EDE0D10AF8D5B3FFFFA36C24841FF5035DE0086A687030B181FCC474FAD55DD7079F5FDB031B13F314F9C5BA3958D9EF318E5EE43A0A86090008A0D10A7D140CAD040BDA4BCEC8C4FCE4F3EBA463CFAFB73FFEF2561854DD72B2B0C26BF07FC8053BCA59EAB0CA0DB1EC8B11ADB10053F7FBFF1FF0F0B634B730C3A997B7A0C79A32C17BECBF80151A680B57989A0DB8920189824E7203EDA906ADFA06556A6F7EFC60B8FEEE11B0C297630850B6049B7DFAC52D864DF74F837BE69A025A0C3CC09E3D68A53BE89C72166885083A3CC659561FE3363318008D02402E4B812C980335569E7E7D076C54FC009FDA061A9E875CBF8A186500B907B42ADE0DD80BE60336226EBC7F029103F6CC05D878187C954C8095351FDC7E063C25C33BA0F9A07DF5A00A1A3C470E753BEC2A5550650F1A4267829E35CF00EF99432A675D614586541D5770450BF20B070BA4BFCDCFC6CD602CAAC270F9CD63701C32FF67048F8270B1B2830FEA91E31303AB7391D1635876EB3030CC7E837732402A6DE4F113C4340923D275B4A0F8E36466068D8EB0ED7A7C2E43FA9D68A89DB456BD12BFF81CC6FFCC3F7F33FC19CD60A360480380001AADD047C190E895834F1103569C6FBE7F723AF3EA6EE3D5778F6D402BA6D91999A1A7B4C1C759E19532FADE6A46A4E172E493D1FE2355F220F0177A3889A79C318326B0F7FDE2DB0786BB1F5F007BB3D0060223E48296EFC05EF96B60C526C4C10B5E78A72E20C970F4F975F03033E8B4B68FBF21ABC241953FC8EDA04A558C8B9F215DC79D41925B003C1CCC80ADD26664C47BE2D92F7083017E872AD8882FBFBF837BD34FBEBC052F9803CD41FF470A09901E354139067D514570CF1BD483060DE183AA421DA01F35A05BEC88014F3EBF6578F1F52DBC02076F49439A4307ED4D7FF1FD3D031313133C9C2195F72F064DA01B12B49C18AEBE7DC4B0FCF651060B09558630151B70F8818020070FB882FFF5EF3778F401B4F0CE4FD694C15252036EBF16B08124C323C270EFE353F04972F074F21F71562DCABA3946040314CDACCC90C573CFBEBC135E7BE7E8145501E9743371B526712EFE35A01BEDFE308CCEAF8F82A109000268B4421F0583BE3607CD2FFF62F8277CF9CDC392E32F6EE5BEF8FA9E9B19BC708A89E117B0270DBABD8B057AFE37FCD852D8DC38A8706742BD9E14B6650BBCC58D0936548C187205F59641279E69002B3A1E364E608527CF70E7E373C835A4E0FBBD4137A1FD63B8F7F925C3AABBC718F2787CC073DEA08A2642CD1A3CF40E3A3005D41B05F59859A16E03D923CF274E7190BC07DD7286688D30C00E900155D2A08A1274810B68C402B198FF1FD86ED088033B74FFBD148F10782F3C0BD04FA0BDE02B6F1D6110E5E203620106692E2106091E01A47E2F028056BA5F7DFB10EC3756E88977FFA06E618656A3A0E1F0675F3E800F6F855C3EF38FE127B041C103EC69FB299A8187ED4FBFBC0336EBF8B39B0C5A82B20C4662CA60BDA0B97A50C3841171F43BC3EB9F9FC1E2A0E90410001D1D0BDA12780F1427D0ED6CB0261A28EE40ED3166C8C9F9688705FD475ADCC8085E130072DBE5B70F749F7C79B7C45A52DD4C5D40A61B98265E8F0EC08F82A108000268B4421F05831680B76C010BDDB73F3EB91E7E767DF2AD0F4FD441F3C2A06345C581150FA83206EFA3065616F73EBE64F80D3F0DED3F4A6F1756A0FF85DEF0C501ACD4F859B9C173C15FFEFC00EF8D8655BAA00A01D483B397D165E0859E5B0E9A233FF0F432C39B1F1FC117873031027BE01CFCC04A5F00BC5A1D76729A00B077E922674859FB057C53D95F708F1AB4EF1C74BE3CE8D43510FDF3CF1F8697DFDF319C7C791BDCC8811D1B0BA9B8FE326CBA778AE1D9D777E08A0A3C7F0E5D25076A8080FC0C3AC805066CA5B4C1E7C09F7A718BE1F1D7370CF7BFBC8254E040F5A2407F84AA5A83AF63055594A02D66BFFEFC6690E416627802547BE6F51D94BBD8C1A7C901DD031A85F8FEE727C3D117D7C19532B8C204B781FE839B06B6D2DA0C9AC290235F3DE48D184C809538E8285C112EC8503FC8BFC0461BB0F2FF055E5808EA4D83E2F8E0D32BE055FB311A8EE045792031314E1EF8823FC85AB87FE0F86701DAC90D8C3FD00531A095ECA0860CEAB63DCC3406BA43FEEBEF6FECDB1E9E2DBDF9FE49A8A5A46629B041B601E8E6D131F85130A4004000F6AE65A56128884EDAD407B605AD962C9428D6DA850B1F28224857FA0F7E423FC58FF00B44D722AEDC544157D2166B40E8C396549A36CAC5367D3833B9D1BA75A59081C025106EB88B9C939933677C40F7E34F06A56B0303259C6F968FB3B542A6DD114A4809E117B607690486037D83E184FE80AFAB39C8372BF2E3AD7C0D375186DF62B8AE6CB9DA8A2758A046E0D647102C5A2F70557E0053B42458BBCF14AD0AACCD2EB05A9E6AE3D46E261A0E6CCE2DE17D1DE623311E90E279A8FF26888810489398CD427035459BDF83FACAEDAE5499F73BF0E174F08FD8C1ABC7F56A12B2A95E3D5F71A7B81109A0C96EB4A6D4B7D7A60712F089A81049F082EAE847AB69D8D192507BB7D8A6D5E9532DDC3DBF29D9CB5EB24D38C95DB2335D6C22CAA97D72B323F31EAE8A4BE2406731A68EC3B99185C26B89A7D4B98634E48837841904E07D3C774F384724880471A3A2B89BFA23DC994F105627911C45C0C67D0497121CB8AD1BB0A7A56045960678E80C2F062CCAA3A130CB510D0EF575241ED36020C1BB78BE873747E05EC11F56BD5E2667341DEFBA0A0691189A8B55D13ADDD59267DBF144460D041B34AAD60F3FFE437C0AA0D10A7D140C1E009DFB04F7CABF7F0A39F4FC5AFBFD8F2F554043E49CC0421E24A9C12FC3E020AB0BEEA58300682118688117681E1B7441C83FE8F0326C8E19544183566C83E6787D94CC185C65F519D8912A61056025A0C42FC9B0F4FA4186475F5F832B4A50EF72F38333E0234E5D811504681B5CA88A3583B78209B0E2E267E0646527D96BA0F9EAF740F7812A6BD0EAF6975FDF03E94F60FCE1C757F09034A85709DAEAF517BAE00D76FF1A33F49E7276E82D70C887BDC07B9D4077B3427BD8C87BCF6187AE804ECABB0BEC6983E68859A1F3CEA0D5F21A8232608C0D8086F037DC3DC9F0F4CB5BF0EE81479FDF807BDAA0F06080EE4F071F1D0BB41BD438DA00ACCC8F3EBF06994B87CA4116E4FD071F80C38CB4350F1D8056DCAFBB7B9CE12BB00113AA64051E2179FCE50DC35560E3E0DEA7E740FC9AE1FABBC7E00A1D143E2FBF7F004F7BFC0356ECA09EB88DA406F8385971E879F78AC0387DFCF915F8443B2E5666E8853B88A917D81637C4A23D483881D20628AE0E3EB9127CEFE34B0B5B29AD3C710EFE754837C78F825130680140008D56E8A360D054E6900362FE73017BE58D275EDC287CF7E313332F1B37B86726CF2706AE2894801530E88AD06FC01E256898FCCCABBB0CAFBF7D6648D27466D8F1F01CC3B9377719B89839A0EBC518C12BABFF012B365B290D064F0523AC950A683ED642528DE1FEED17E04B4C4481BD4D455E5106110E1EE86A7146F08523B800A8C2BAF7E1057835B618171FC3DB1F5F8095DF6B862F3FBF3370B373807B9AA055E8A00B485E7D7B0F9E0F86CCF5427AB890235C21D7BA822A4B56061606941BD71919502E85F9CF805ABD303232A2DC0EF71FDC00F88F12B6A0835C6EBC7FCAB0FFC945062760A3065229E3061F810D8FB5C00AF6C29B07C0F064076F4B63C1B877157C882C98771DD8A8022FB203EF4767060F8133428F7D65656662F8006CCCEC78781E1C07C29CBCE0E17DD0FCF5F7DFBF182E01EDD870EF04B89123CF2B0EBE0E16B4380E84F54414C0530357DE3C6410E68034E240EAC0F6410F9CB101F6FC23356CC143E7C88D1C907E46985B1898E077BCFF47EAA1A30FC1832FD801CDC083CEAEFFFC52FAC3FDAF2BADC4D5266A09CB35027BFA9F472BF55130980140008D56E8A360C06B7250A10A5ED9CCF04FFDC8F3EB0B2FBCB9670E1A5A660416AAEA02D2E09E1717B4577C1358292DB9B11FBCA80D34EC0BEAC58972F0012B7C518608755B70AFF2DEA7970C9CA0FDE8E022FC2FF8AE6E05604581AF87F8E3EF2FB04B7C15CD184C445518247904E10BED08015025BDFAF661F0562DD03CF3EB6FC01EF88F4FE055DDA0D5DBBFFEFC650041F0D1B08C90E166F04132E015FA881A0852B933A25EAC827C62DD7F06F8A52DB07043DCD98E7A321CFCFE76E84A78664616F01C35A8927E0CEC719B8AA930C8F008837BA4203B41C3FF20F783B6A38186D9AFBC7DC8F0E0F34BF0C80668C81AF3B85C48430474200DA8B103EA513F04EA3BF5F236E4701BA473F199FE43CE8E071DEF0A3A935E8E57183CE4FFEDD72FF0BDED0F803DE95FC0F0072D9A039D6D2FC9238C6217687AC45E4607CC064D2DEC7D7C117CDD2AC84C2B0975864860BC83E20A343CCFC5CA89D4D282EE6CF8CF88B807F63F626B222C6C206B0DA0A7E63322EEB20135648066B2EC7C7CBEF8C9D777CE0ED23AF17C6C9C97FE8CDEE4360A06290008A0D10A7D140C2860061FC2C2C27EF0C9D5DA5D4F2E65FEFAF75B0874800AA897FD1F58C89B8AABC22B731038FBEA0EC3C9D7B7C10785404F4F61D0025D6E02EC71822AD3680D078699577630BC0156AAE0FDCDA0E3C719FE82B741E10352DCC20C89C05E3EA8B747A8F70AEA5DBF00F6124143D10F3EBE64B8FEEE2978B11868D4E0D6C7E7E08A1BB4750D7262DC3F700F958D0172380DA21241548CE05100E8D02FEC70557885089FEB451C1083BC5F9E115EE943CC6462644492FF8FB4B01BB2700D343C7DE4D90D86F3AFEF33F0B371002B514EF022BF6FA093E16073F5C08AFDEFDF7FC0CA9E05317D813C12001DD60735024073E3A0036940A31A20B3419533683D007CAF3FB4C1C1041E79600037C040A317C85B0DD9C037D0313248700933188929E10DFB2FBFBE33DC00863768685E4B508A2140C502983E38C0B7D96D7B700EEC16257EC84E02D0BCFF5F98EF11E70A01C3F82FF8C8DEBFFF2187DD800633FE81AF8965811C2B8BD428025D690BDAC676E9ED038337DF3FED7790D16D54E6979CF407BC1E61B4621F05830B000460EFEA591A86A2E87D266913433F942AA122AD505D8482E8ECE4E24FF26738889BE03F707071707710448A50170B22A8B5460BA19634F479EFCDD74B75D7216FCBF2F21242CEB9E7DE7B6E0EE8F9FAB35544C01D0793B5D3BB8BA3E3DBF37D8A10CB5685F3D4D44265176C6E81B20726B7499174DD759FA0AC5BE18CF3C87EF5952262CF8506FEC8493EA7BEE693EE2546C63E1386E9542613C6084C2CAD00CB7635E3FEB6E3B4E0B7EE6FF249EF60B44AF22D4667708F60422A0101D7DBE8137C39C1FD0503DF36928F6669096EFA3DCEF1CE0925C4561CEBB25239CC548C8B74284A04E4320272D51C4715DD854CF7930A09C8567787571A1BC09039CD980BDCA47413F77611B5F1917FBC61688A02003F8ACAE267292019282129A0E8BA5D6BB0331ED50870969D07ABA402039DCF24D5234E0B64888B0E43DF4350BEE69C3EB5D8D591A015678A0E9F472EFBC4D33DF756B7929C79ABE2703B5B6FF8C2804EA46480E710CA7B2110E68132BA091BD51570AC0536F6A17742857E9DF747F6D037E21A01112614886CCDE3B7DAFFFA583C7BB83ADCAD6FAEB76BCD034D082F08F2612FF9FA3FEB5B0031FE1F1D3E1A92E0FEE71783D25DB0F4F4EAF30748E5012C1C410BD5D8813D1DC84522A0B3CDB9A095EBABA0CED36B661F7C745E880154D0430B7BD0CA6570E503EC7989B3F230F070723308032B790960CF1D74542A7805366CABD2DF3FE04B4392B55C186CA4B5E1EED876FF0CC3BA7BC7C13D74166666F0DC3B68CE1DB4AD0BB480CA53C904DC33C407406E04CDDDCEBEBA1BD8DB67010FE383AEFD04897F87CEE18330A8A70ADAD79DADE70D1E25780B547313D8F0001FEFFAE303784E16A53244DE1C8D3AD50DAF982197C8C02A6248E5023EB7055669C3E6B0611D77942A1C8D8D7E50CD7FE45BE06166FC870E35FF07AF2380340C20DBC2FE635C230B6B54FC0737BE24B804C007E8801A64A0AD7DBFC1FBC821F3E7C87AD11B19E8FC7FD095F820F7801639824EE9039DDF0E3A635E9A4784E1F3AF6F0C8BAE1F6038FBFA0E83818822439E810F03270B62F406B41A1EE40ED08249D0F0FFD4CBDB199E7E79C3C0056CC081DC0A8A3F0B0975F04E07397E51C889784800B46870F18D030C8FBEBC86A48DFF0C0C883BF8206B29400D48D0748F96A0EC456B69CD64A09967B99841D3457F21C7E002E5C16B21800D80CFC04682101B17301861A31C90ED7B8CA0911B0A7BF7AA382EF71905231B000460EF6A561208A3E8F5CBC9CCCA3FA4028B6C1B64EB16B5AA27E931DA053D4BAB9641E40B44101129D4A250A390B029246A4667BEEEB9F38D633FEBDACC5DA98CC38C039EFB77CE892BF438FE10ED83C53750CD6AED8BBDFDD383DD5BBB45C4001F029716DE9892B2D3E33FE707E7494C4A12495482292A326096270B224E924B4F49CBB45A58A2D5524536ADD1F6051F1ADBE9B6D3A3A3E6B94888DEF53AB2210F67AF4A7E7EC83BFF2DD08A6D30909F766E44571C462A1697B5AEA7C5C37CB3BC42C77CDE867D4F8E115859E7CF01E688627A864A99ACB4E085D6A5A22A9A46405BEB48A456D4E7AC24292B29D4B48411BBC1D7D0FEF6073E794E9F7C77409A5F132C5B75981144357670B6AFDA78DF3B0023101ABCC79C9CEF0FBFB14A59A4C6C7C4B12CE0A52BB3D0AED16327CFED0FB5F271C40B8316AC545DB14A55A673A286681DEAA4277E242F5122110EFF41B983CD2D928057E79DBA1F4DBA7A6E53AD7549CBB9394906AFED47191DF8E1EC7B24C443DD08E7CC66F2E22877C6CFB0CEC9152E1FDCFA0D338B07E0A38A072571C27401A029B0BDB8C6A00E073A1DB00B28DA51D03AE870E03EEBDD76B5EBBE9D6C2D5477B2D3A54350FE74AC3017C73FC7A700EC5DCF4B0261109D4D73FD5D1B519A78080D2A823A444474E8D0AD3A45FF47FF42A7AE1DBB75EDD0A15387200922EC502164458461B11A26A9999A69EE3633BB8A9B9DEBB2031F88E0FAC12EDF9B3733FB9E09E866FC199A538F52511BFD3BB747DB5BE77BABE4990D368F5E22D6BA9BA0086D8C12BFB558746052D820849CC01EF3291091BD7B4437ABB3AD4FAE80179910E9A44771AD8DCC31B82E0DCFF0214C472D89A4847A7C1DFD7162D30446348845009B2AE5E00CAF1191AF205F7B873129080BC8FC4FD337205772E073F5F27F5249F80E01FD588EF36B73D94A91FDBD03781D3AF00F9331FC7D897BFD2CFCA2BD14AFC1A06E2A62B5D911C42D2DDBD6B7A70C1412691E062C3E67E1F55EC6A4A6015F08E49FE50F5C15A8E2226057094014B593F2B6A6E2DB99F10F8E6C70A043D688FB11AC16CCABEC20BA1DE070BB40C4CF34E96DF33AC13711E264C3E5EF03291C0001F7DCA51BB3D4AB35AE4038E8DEEA6E7082A134DFEC610BD0EE8CC38A7ECD897303D2AB2DDF74F258A724AD502FC36526C1ED002BEEB51B419B06F70E9217B08CF758D38237F27D12D2991F1A67361E7B49F06C003D03CD38495D432415679DFDD98111981E0C73799F9E11BF5362EB5A72F2FB2D29A520C5BD4C2927ED3F44771783539BA35260A34E2506B3AF6EC63FC6B700EC5DC14A025114BDA3CE4C56BAC830CA2212125C14D5CA08B7413F509FD2AEDFA87EA1AD447D4050208214089A34BA902C4A4A91A78D6FECDEFBB426D26D6DE6C26C8659CCF060CE3DE79D778F07E85EFD4991DBBBEBD8F1D3BBCBE3937C66977FDB2C793A8354303228A9ABE7F81408F5FD2E03B7A6044BDED7D440D80244BB017B4B9B08B0CB7C1EFDECFE1A0A6F3548CEC418D0497A3D40464E6C789CD1ED45B4E0A29AE39F3D9D5B26B3D8B37867700F0582909A4B70A0C92AB2FA9BC7121F9FA3A291B05B08160F082C05649134C3FDB6518118A5A3E941DE6737345DF1531F99FF024A42C706457EF4F89D5E4B55A8E7CBC8B8254BB5D6551EEA050B545EB7FC62A0D410988609A66980AE1B3081E0CAB2BC7FA4C03E1684460D881F1267D99160B75AD0AC35F0FB3BBC8D302C1EF2834F4E23A0C7D31B108A46C0C1779E8C846131B5C68D0035298141E429351A7DF7DEB2F69D6AE7CA3655CDC4D01CC7C7035DD1AC03899A4C6A613D0C4D5C6F52431CA9D8BE746CC854B26021F0A6E7930CC8A3D69806FF6C2F247FDDA7868C2AF7548622AE1F45DDEE2776600AD78EBC127DD708E11FBE01D727512321ECAE7E6E658FDAB688AECFAE1C6233D7F420DDABFFAA4F01D8BB9E9784C130FCCE4DD79266324D91F217061548418720A263A7BA457F437F467F4C872E1D3A4544B7202188C8532A4DA1DA5237FB81184B5DDFF7CEAD59E42DBAEC858FB1CBC70663CFDEE779F73C1EA07BF5E7C5A325A8B1B477B17F785439CF022B109460ADDED1459BF66DDA9819462194D4292AFACC0177EDA33C34444309F2125EC597AB42C03D294AB09D5B41F311FBFF713FFBFB234EA9F432015E6A58423DD0A9164FB70F10D0A5702672E3901900783E92C6CE9C52FAF6DE3408A5F054723CD55F3A6DD048A74E4F783F0F014120B76922581BAF1DD4A4D59B12DC1E17A0FFD1837AB9066F8DD6D035D1998348548270380C921481647206B2D90CA4526988C56210276B42149DECF11FE36F8C6D96324AB176CFC95B7B1886014D4D035551E0912C5996A12ADF81A2AAA0EB2DD09A1A3C3F34E0EAE0F40BE80988C7E7B230160AC2E4F414CC6FAD811009A16CC00579EAF4870C43AFDBB5BA70C61C3277B10E2E79602860C744E9837EC46DA41631C8E6B25E4186860EB6B1F85C71048079F281134030EFE14C45CF496F1B55F9681A726A1C8ACD2A6AFE67F745B4FADDCC2C5BA97A2E39C01136BECD12F43167C08F91B027B5EB5DFDBD3DBB9E58D8E11856F71A75AFFEA33E0560EF5A5A1288C2E8F151E33B27031F988CA6114520D4A26819B49076418B7E42BBFE44FF245AF517DA440F7A921042EACC48242A46A9A8A32676EF7566D0B05DB5F2AC6786E172F9CE3DDFFDBEF38D097D8C3F038D6956126C73D5D2F6E1D5F1D1593EE9329A2DAC48686874A9560D4E139646834A907D93929E417D52EBBFD69AB47B9F88B97D88BA03EC13C2940FFBCB097DE257B959459E102E25F7EFF6ACF9FA1BAE0B693C1235FE5A7FD7FFC3A2DEAB6BEE66D33627F38CD740FBCA4F32972CFDBFC48790AE14F0410E056C10883AE48512B98928E98ED2423925A1DB68E1E52E05F93CC9D2E4956219ED664B57BE1E8F070221EB682CC6883B2C08102211CC0683E0DD6ED8ED764C721C51E6133F8E53FD6D7409295282571405B55A15C54211B22C431225483919A228229BCD32E2CF3F65F4F79E4F6F60733960E59D98DF5A83CB3F0347C00357C8CB0AEDBA4A9BAC416FF0DA5CE5F5DE808A879E76A7EB4909FAA1246327BA8E83F82251EA0D7238ECB035B791BD455BD64CAAB2A769F4DB62167142D6ABDE98EE26380A3CE7C0EEDC06CBC2D09EFB46BBC18AED16783FEA9D567F8A3AF3C11F551438BC6DA9910E67622D959B15A57E9108AFEC39CD93F7E30830C67FE34B00F6AEE02561388CBE695496B958658866E5468605621DF2D4B5A05B9DFA27826E1DFA473A84A72EFD039DC50A3A2D71455A198499EE24952C9CB5F6FDE654ACAE91E077DF186CEC7BEFF7BDEFBD9ECABD4BAB1B54EE948E55D42A1B7BA78923F949E13130641DAB5A8BBF8DFEEC00674F918D0EE5145AB374723EFB341C4D4E09B3B92E7A4524D67659C8472711254FF49DE42142EE71ECC7B7D94E755ACDE3DC64D42490A34432672323DBC1B5CC5C6CEE4A2C900C4DC82A56328183E0F230DFF703E5049AFE0E4FBFDB6269F4432731599F93F5A4CA630965F916A5EB3CF2A94BD45E35E8756B079E4E0B843101215144341AC5422402499230150C22E0F783E7F99FE354FF51E9351D65B58C42A1C09A7C367703594E43C964CCC65FC25BB5DA042B149432110E425C8DC1333309DFD23C06875D0C30D0913D3E8C360BDBD67BB7818B3D5F27E53AF9C86F8A71ACF8E6BE091AC96CE6E2398BE3BB33362EA195B6D9112F4B708B7943CCF8E6B7405ACDBCB7ACDE2359BCC2C38B8A51F35A52EBD7EDA09F368061740C369ACFC9BE230B0412E80B0B81DCFAF4F29693E314B709267B2AF75EFD557D09A0D10A7DB442A77A850E2AE83E7FFFC670E2F9CD8AEE736B5BEEBC79C4CCC0C6C1001FF26584EC4C039587E03570D0794AC89AAE7F0CD0FB38512A74F8E027FCA0947FE0A1D6398E390CD15A8E98BD4C60219FB8B39F61F1E51D0C11DAEEE093C9B6DD3BC9F0E4FB07066160010FDA872CC525083E4E14544180B6D6FDFB0F331CD2E3FBF71F52A883AE22052DBA039D26073A1215EC6ED0A1A2EC2CE015E7BF3E7E65787DE321C3E3A397199E5CB8C5F0F6D173B83B44444418D4D4D418B48095B7A5A525838EB636839C9C3C8388A808030BCBF01820FBFCE913B0B7FE0CDC733F75F214C3D9B367196EDDBE0DE6FFFE0D69CCB0B0B13248EBA931C818AB3328D81B32708B0B31B0717230FC03CAFFFBF307D66C43F47DD116EE81B6B3814EFA03DD7C073AFC4709BAC011340A034C670CC75FDC046F2703ED8B071D26033A8F1FD450032D62341651613016576690E313855F0E830E40B7D9817AF7079F5D019F5E073AFF1FB911003D4C0EEE3E945E3BF2E8026824E7EF6FD0F5B9AF9D6574D355F925D683A672FE8E56E8A3800E002080462BF4D10A9DCA353A6401DCCE7B679B4B0FCDA97907AC401940D790FE875D70FD0FA9F7CD883AD3CB08E9A93342D5FE6764409B1EFE071587DE5F0E2C84CB4C23183AED93E06A40053968A5FA9E07E718FA2E6E62B8F1E61E64B21304402BE6C1950413B841C005ACA465794519E481BD39596E617003015C9183868721353A64FB1CC35FE8E1344C0CECECEC0CCC1C2CE0455FEFEF3E63B8B6F110C3A3E357183EBF790FEEBD8280A0A01083A1A12183AD8D0D83B985198301902D2931720A60D050FDED5BB7184E9E3CC170ECF8098613407CFBF62D702509023C827C0C927AAA0C5ABEB60CC2EA320C3C62C20C7F8015FBDF5FBF20D32EFF195156C9C3F6E5831A583FFFFD666067620357CEA0DBF1EE7F7E053E20075491B3A0DD32075A750FAAE481B1076CB8F13398027BECF6D2BAE033037081575F3F30CCBEBA0B7C442D3BFAD646F89E7FD4637611FBFA11C3F0A02D8B026CBC3FC3542C63E4F8C4D7802AF9D10A7D14D01A0004D068853E5AA1539680504A36606FEDC77786838F2FB5D41F5B54FDEEC75750D78C01654116F87C52D85C29137C9D14F2C1A7B06350FFA31C99C6807A200B74D8DD585A8761AD573903E8C4AE15B70F339C7C7E1D7C1CEB6D60F8FC0056F80CE0BBC1FF4336BE410F3B011BF90F7617D87F0656667606510E5E0639017106557E49063E562E70EFEE17F8BA526021CCC2081E5607F5C83F3C78C1F0E8D81586F70F9E33DC397C8EE1EBDB8F6027F1F3F131E8E8E8307879793158032B7250AF5C4242826EF3DE83157CFFFE9DE1C1FDFB0C67CE9C61D8B56B37C3912347181E3F79C2F01774F80C331383B8AA1C838A9D1183A4A92683B89E22788BFBBF5FD021F9FFFF910775E09526A8B70BDE05004C2F906B4F99E067CBC37ACCE8F3DEA0A37F41E33C12C0869B89A812F80A5D096ED48A1D7406FFA67B27192EBCB9CFF013DCC367425D95CF8074721EDAD1BCE04607DA95ACA01BF478D8D87F052B59A52809482C060DC78F56E8A38096002080462BF4A15AA17F7A3E183AE3E05E13ECAC6FD06AF64D774EB4361F5F5A053AFE938195037A4525E28C71F8B9E4E002F71FB436FF0F2D9019A1F3E9B0E15746A4860344E41FE2683450170CBC28CA5DDE107CE4E7A5D7F718FEFDFD05191B051D30C2C80CDFE30CE993A336451053F6FFC06631017BF0A0B9726560A50E3A70841F58C9B3B1B180576A7F7FF381E1E1D14B0CD7B71E657871F301B4C3CFCCA0A4A8C460636BC3E00DACC84143EA129292E0F9E3C1004095E2FFAF5F80F82BC3DFEFDF18FE831A28A0036380EE66E2E26160E6E56360E4E4A45BA3E3CB972F0C376EDC60D8B3670FB072DFC570FEFC79860F1F3E80E504244519142C741864AC803D68D0BE771E2EF00136203783161332202D8C844CEB40DB868C0CF074C5F81F716D0DD201BBF03BEE4122A01E3E488D0CAF08838DA416F83218D0EA76D091C26B6E1F65B8F9E1390307680B1E689B21D2F9EFB0B31160F3E5D09D760CB03A1FB98267841ED70BD2F1135889F37370FFF453B2C850E4135DF017BC1D70B4421F05B4010001345AA10FD50AFDC3B301EE9943168E814EF402CD2D83863BCFBDB8D35C737441CDBB9F5F1898D938C0152874EA1058C841AE0A8555E0E02AF63FEC484DD80EA1FFF013D218908A6470AF1ABECD09BA308E11321C0E1A86FF0F5A74061E496783980B59A10491875CB9052F98E1FDB8FF4C883BB119A1F39BFF215BCC805D76062E5E1E06791E490699177F195E6C3BC7F0E4DC4D860F2FDF800B744E6025686565C5E0E9E905C41E0CEAEAEAE0CA7DB0807FBF7E31FCBA7797E1E795CB0C8C4F9F3230BC79C7F0E7CB0786BFBF7F41C2839D8D8149409881514C9281595E8681454995815D469E81998B936E6EFC08ACC88F1C3DCAB075F316866D3BB7333C7CF0102CCECAC1CE202C27C1A0EC62CAA0E165C5C029C40B74F71F867FBF21C7C9FEC7384E961169AAFD3FE2501BB4397806247150031454B1834E82035DCF2ACD29C07016D82B071D0B0CDA11C104BFD10EB5578EDC538755DC3079E4E17694212B704FFD276881E8AF3055DB44795E9165A053E8FE8E56E8A380060020007BE7CFD2301884F1A74D1B4AD2A18B41ED20D6CD51082A7E025DA5CE0EFD1A82F8513A153F81A350D0510413F722BA880EB6C1347D73BE7F9397E2660787DC1292216478B9DFDDE5EE9E0AE815D0FF0C74E118C7AFD1D5E5DDF0E2239DF14CD7E5990BE9CCDD740A1B502BC00A494E55F5B667A2990432D975762AB5BDA90806969CABEE95578EB56CA493FFE4A95E7EB02D62929BB4DD04157AE73987B99B3238F13BD8FD046CF2894CCC90730B82350EF063F4FB6708C390DF07FFEA4CE4698AF4F101F3F12DE8ED05982570163AB8692C5425242FE225AD9DCEAFED366863134E78046FFF104DDF53EF630CD9F40B7992C8F5B00DCFE7D0F7E5FCF9AA4C8CC73DC7316E78C67E3D1AE1298AE433A941BFDD45B0DBC3DEF9093A5BEB984FBF79B6CE60EF97AB2D41D69C0BB2A15B94EEADB1C79A52CD13AA6BA23F4208B2B84E5D2FB5D1D5A202D880DD9849F8653FBDCD702A8F9B9164154D7D7EB3959DF60E063B9DEE50880D5540AF6CD5F623007B57CCD2301085BF4B9A546B6C4114D18215BBB856A808752DCE4E7670F56738E86FD1B10EF50708BAB84883E0A6A1504410EDD0D29808CDF9EE127349578B531E8464C8E5B80779DF7B1FEFBECB003D03F43F01FA3705D8BBD7A7D3B3FBCBF337A1B96ECC41F52585953857657A1C5453A4288B82A804EF20A6DB1525FE1B9035B93F3D342D3EC024A4F4794AD55C11EC347F10353145A77CA968CB15E52EB69DCDE750B8ED83DD38F0DF4752D65458B95C46B3D944AB758446631F9665FD9B9FA574ED9840753802F77C2AF75CD990A7E70C3001BCA6094E40EE7D0EE0DB36D8E303F4C187DC0BCF8D3C2651BA33914FC2B7BAF4A14E7E961E14DFA2CA3DA0EBCB2A81D5EA58A8EF42A777FCDE33BC5E0F7C38A6D299E62B2EC2A86C22BF5585BEB286FCD23234D398C93A0533E2BC38E85C77D0BE6AC3EE76E1BA6122B5B1B38DDAF101D6E92ED6253AE327A27B3E16C9D75445CED3EAF52C7D087A984F26697A209D044EFB3F9D0B4620CF63995DB02433901834FDBFD038D11857320BDE6175EFA4525CBD48AAF165809ED92CEC4700F6AE98A561200A7F97A6062D1604410C34901274101DB2D53F91A54EF90DE25F71F137C4BD9D85A07FC04550C4A5EDD20A9DAA246D72DEBBA4B934E052C4296FCA70B9CB5DE0BE77EFDEFBBE1AD06B40DFCA282C4942188F93979BEB87BBDBE9D71CB2342D51621650D173F14C8092CB52F212AF39E345763B52AD70163452ADD634F5BEDA3FA158C54A4E427E78E7855A5B2E0822DB9637FCCDCF93431AA4C9CE603C8D10DD3F0B20CFB2D52DCB82E779F07D1FAEEB4A7297FF3062565B4CC688DE5E81F70FF0D1186CFE8926654AB3BC0A8092F4DA7B6002501301F40B7192A62CF196007A9DD4E8348E98ADA4A00CF933AB823B3D5B97467E174CD3272D325AB2A53835C6626C123FA1CB0B46217A22F8C91057F421DAE8E2CF506DB569A1D93D45C3398161DBD83D3225DFFB5FD86C3AC3603840100408C35096BEE902C8EDDE398ECFBAE8F42E70E0985812E0A79BB4AC1995EC7A9E2A245E4DDEAC26BB953B29CBD8FC46ABBB3EF9170971C8EAD059355A507182BFD318ED9D5674E55CF63BFB87C384F3AD82EF24175B5B6D55FB1140A315FA1005773E3C1D50FB41A773DD78FF342277EFB40577DF3F666764E584F60091E71F614782417BCCA0B3D9A11D2AC4B19AB0DE34AC570EA978C0E7BB33219F010ED9BC0EAFA461252CF2702A03D2582774A112EA5935FFE18BE4C06673002B2E602789E3F67B867F871E307CBBF8187CAB998C8C2C4378783843646404839E9E1E5D2AF2DF5FBF307CBAFF88E1F9B9D30CEF8198E5F67D06E1272F18F83E7D017A1BB4E71DD8E810E66660949662F8CF2FC8C0C8CAC6C008DABF0D3A56958D99E1372B33C307503F9C8985811DB4BD0E743318F37FF0C96CA065018C4CA0B8F90BDEF2C7F48F057C721B13D31FF0FEFBEFC050F9015A8BF0EF2FB872E7038509F8A85DE84E03F095AA7FA173D80CE01E3203D834A03E560E869F62220C7F2464195864951978D5541878252418D8F905C08BEF28AAD85FBF66D8B96B07C3FCF90B198E1E39C2F0F327E4843D71557906BBB21806090315863F5FBF03E3EC3F4AA50EBFDC07A9C245DD21C18851E1FE47EF7D6354F4685BD3D0D80CC8153C9218B23B60C303A015F4125C02CFA334EC3CF9D8782EFEF947FA9DEACAA315FA28C0020002B077FD2E0D0361F45D9A1AAA692D2483F8030BDDDCA4B3AB8B203AD5D1CEFE3FF91BFC07320A822E5D042B459D8416290AAD88D09AA649FCBECBD99498454444E8419640EE72C971EFDE77EFBB3707F47F5AEE5EBA7FD636FB48B707DD839333E7F461D03184BEA8B46E6AD253616D29329B9DF9442284FB62D93D43C1A32C5EA472DBE2FD74917877471913E754862CA6823709469F76A5853CF28CE7AD2744171D8CDA3DA964B72D1BF5A33A8E1B0DD48891FFB6FA3B20801ADEDF6278738DE7F34BF45A6DBCF5FB5822E6B92674D85A0E86A60C4FA81FFA8605AD5281281358E60D8463D608F832CA10D0AB7A9CC9477DD6050173A8D2EE39B92BE4FFE0239042C1D8DE549327A18592C9BF13347B9C0A4695E87C8E00D5B7407DE7B3D23559393F37A177C8C57BCB0C40BC00882692B97B631FAF1C55308A10A5124CCB8259AD224797B159456165F547CAFF3E7D13D775E1380E9ACDA6BC67DA656CD777B175B803A368C21F795238C7632F61C9330B399184D6A32CC11C521E366A1F5EA4057119C09E66FA53531D215282BAA41116E5AD9BF6E35EA5B66F1796AFBE3BD43813635EE6255D3E0460EFEA591A0882E8BB4FE3450C16A638153162AB22694C61521B6CFC13E617F873C42E76D61622280614AC2C4DC080E914544C8EDCD73A7B9BBB5B4F0B4144846CB7CDDDB23BEC9B37FB66660CE8FF74DCFD1143E7E2A1C7C14B65FFE2E0F8AC7B53544D2B29DBCA209A9B402AA59ADE9089C52115276518104FA98A8BC028B2AA3D65DE4939CE98E8CB12A511C8CBDA27C94F00D355283962AFBD3768E75DF8AD7B0C1D372A1653ABD5D0D86BA05EDF86619ABFB073E962BC411F4FAD4BBC9E9CC2BBBA86F2D0833BF4F14C7B601A3AE6751D56AC3FF005986BB379182B73500B4530DE7086009247131C025A827402621593BCC2B92A7402510FF5A8BFBCC8D7E679DB5E1C1109C5FBB93272C23893579878DEF068EE10830C686AD1595BDC4108D5048B424DA41AAAA192345BE18E9B4FEBE833FA87CB9D892002335F37E0D90B30D6CB98A95491B7ED1FED60A7D326B67E88E651337A6F57C85E4A9BAB285537B0B8B58689E93C02C713A16F9921232B7A9727A98D3009E03F86EB33801EE7B967C2EE5F5CAE49EC29FE264B84A2747681CBDBF3DEEE2C9577A7CC5C3B60DFEFA7BE5CB0C797E0787C1AEF02B077F52C0D0441742677E6428C1F8845C4287E14163195A08DD642C0C236D88B62E39F3182D6B1142C055152CB156A676125567E44F4944BB2EBCCDC262E18451005E1B6499A4BF66EE1DEBCDD37EFC580FE4FC7D5C3DF1BCBB0D5A6D22ABB79BC7DB27F599D022F0376D72F1A955AFBBD64CEACD16C95EBF6F9A4BD15ABDA201F59BB2A031E094BF4646B90B445DAB5E94F37DDEB1AAD73732B779BFF2E45AC9C186DEAF406C2830B78BD8B3CC7F38569D8585F835269057A895DFEE6E07BBF3D3F83EBDD1DA81F5621735F934018ED3AF0E424A046534ED37D8FD067170B0E3986348990CC0D82333C04D847F373529115BE6AC0A30E253B3D49E08A04E02C3ED70E0A4B17D0A6DF4666E2C4A415B6D6489BD62DE9D096A430F61210B04E44CF5F183D170CB46E2EB1F36E74C12370D662E6A2A3709DA692222052832B11483EB3331B7D4FD3B55E93CFE0D9B9EF858A0E9A536E027A169760607E414C7A7E327CDF87AD7219F62A150882408A87D1D93CCCAD2E43B63029F9F10D0E8281F7AC34DD8931DB6B63EDF27C09D89F5C8F46C4D92A002C0D5E678B58231A0DEA2147BF1E15C7668A2E62F8DDF7F1787F0CE8F1F838DE0460EFEA591A86A2E8C94B6CD39A3A580A7E81E8E620E826B8081D45379DEA667F8A7B7E80086E2288E052B0531D9DC455878A8360A11DFC6A6BEDF5DEF7D2265107411484BE251012F2F208B9F7DC77EE398380FE4FC775E36F11BAD87AF22F2BB7737E78B27B595A1205382BE805A73E99CDA0438BC2BD48E3611E94BDE5E7A854482E374C2204503146298E8AC2524F4E2E06AC22EC3698A4014122601185AD6F091BE2A699BCB80795AED0BEA96B095251712B6C1550DC2E6A55B7DF1E2F8D3AAAFB7BA81D1CC3BBBDC338AFA7F89ACB6B35799A353E8AE7A6CB2726391866180977D309A8E91C1C41B6E91153FA9680E128B438103F889EBD3D84E46B57BF13E3646312236B204A6C4AD0B3A31134C410561E26A56F2121CAF59279296895BD4ED7E6C4C2240AC238EFF0BD6DD1E721D94F27A42C1BB6F638232DEE43F4A695D4CCB2F37C2C9E8F24067CCEE304C095B23E992D01EAB4D17A7EC493EB21B5B681ECEA3A1CD7FDD97A72203F2D97E1FB3E2A6715ADFC97C98D6261338F9995450C8F65B5EF3C0295C050883DDE5F167645C499ECD4AFF65831525D0FC5AB486B5C5404111127397CF21AFAE8076FBE6361BB2F4FCC1DE5A7E60BFCACE6776872B383803E185F8C7701D8BB7A9D048220FCED1EC79F88513C1324960AB1F2198EDAF7E031E8B032F1056CB43496F6D4DA5868046362AC3488464950416E9DD93DF68E6067284CD80BC9150B7BB74BE69B9F6F669C7ABD3EDF857F389E3FDF4277F3EC2FCD8A96D23DBE691EEC5F9CEC727096CB575ACB448DEFA4057923D4626D4FED6C96FFC164A1761933658488D955C20A3F6D898775B439C7DD84E965DCC4B2925484F3E192F5FAF18DCCD91D06A76495777A7A19BF5AC55EA3815AAD06CFF3660FE6DD2EAE68BDF7C323ACBDF4B09A4AEB423441D89C26C16E789AD757063CF2B4B5192F8FC4E6069CF512BD47CAA8301C2327A0E69CE62F565DC8D2553ADFDF28330CB79C7990A4B36197B88449EE333B13E8908629A76FF652B3DC95F99E4B20ECC2D18A11DBEB839040C7BF3262A6FBC83CA7D42D4525C375747E8AC13FC04099F5D242405AB223DDC904E97F49523C86E8B75B18661790DD2AE32F0C05262A562A15F8BEAFDBCBB65B2DBC76BA7838BFC6E3E52D4A3B652C155774C6800A2B159AB0D02483DD7A8644C456470CD80522B25C94571EF59217624CD814136E7711FBDF8BA9A08B7567D9D3B9EF3D6D2FA772C362AED0E44E6F5161E2DF3F85CCE25C08CEC7D4F81180BDAB59691808C2B36BFE34D0D61E8C200882272FD1E20BF83E254FE0D94B107C02F135BCF728B42F9022B420EDA196524BB549D799DD6DD8B5789382900D212474B3C96EC9B7F3EDCC7C15A0FFD3325D2D9406F70EF6D009E0F9B57B77DB796A7F511C38ADE18A0DB5AD1F882BEAB514AF28015658461137E875AE2D7A3029CDCDB9D03155A6C73CD3ED185FC752E2A534DDD7084B781E22B0E1C17FECC1BC9349A7B746A30E4992409AA670D56AED2C45EB7BAF0B6FF70F102D0A380E3C498D53847BA12DBE3D9DDE9E2083FB0CDC933A0467A7E03623B4C63DB59440D4396EE4973E45AB37E7AA3BA4131B82B78B75295B1F312905FD4A2845B8028136C73EA74CE62B46D7739DB14F3928CA7914B126BA9B1D8A5467E418E7A2A58E408DE3BDC4FAD457FB0E297F333DA44AE826C707FFC07B2EA97DBC6780E3E34A1666AD75EF29D52C8E35C7F7F670EA301BC3E764027E7C0DCE1FC4F393E42C81FA651C43D6CF603818CAFCFAF3C1088E2ECE218C0ED57B16A204600BB4B79645C0FE3F5A3C905D9F194B4126F56E25BBF9D1969C5898CE7502B49EBB80FE6C74131D34C651587B514A7FF0EBDE0C6AD547B02A5BE55B00F6AE5E2761280A9F7B2E508A089A68705016790763E288AFE033C803F8124EB2FA180E0E4E0EC6C1D1C5A483D140A2898912046C7BA1D7736E6F6B0546194CB84DB7A6BF49BFF37DE7BBDF5D02FA7F05F46094A69F2F7273730E3CBC778E4EAECF4FDF463DC9012349C39C0D5871DB5CA69277FCAF42FB538B2C605BB037D08B900D77C5845D271AA598E132A9AC29D2296956E247FD933B630D5E8225E732B1C14E1FF2171E0CEE9ECD313C8FBC7DD686E3566BE1BDF2E9110D87F0797905C55E1FDC428E409533F1D0BC13A9D1326962E56B0E38F50DC0FA368CABABC48A43901345601499420574003EBBCA096C4D046D8450C222B1F2D84CC870CFD6370661457B880A14A7BD71FC288BEEE6DD11E0D3F7E200B93161B21249AAF824658C48458161EC747E4DD5C7888EE72540A5EF830C0310541C714F9EED788A9E4549343685129DD311B1D48E3A560504151FC0012A139F2EF6655662D39B3558D93F2040FF1B96C920BBDB68C061B369E6AC7B9E07AF8F5D78BABD37EA4375A706F9B21B67D96B6B369C03E69011897EB5BAA795F38C849E38E14566419879ABA74F3BE2B30973E68EA8080AC60A5E861F7B8DCAD64DA5E07613A97FDEB65E5C32F4E5981DDF02B077ED2A0D0451F46CB21B35CA06135F81602042D4420BB113B4B015ACACEC62616D0ABFC0D48282FE48B452BFC2428822223E48117CA0C9C6EC8EF7CE4CCC2E46BB204206B69C65D88539E7BECEE9D6D0FFE9BAA8747E6C8DD3B78F6F4F8B9B277BC7E7E5523FAC285ABEA65AB845ABBCC1A7A9DDB249154A33DDAFBCCD37BDA7C55E0C57C7D7C697A2AB307CF5F300AE6B72D06C769308EFEA8B372CB5D0BC5E13E6878BE8D90D9CD3129C97AAD45DCFE53690CF6F2193C9FCC9BFE27AF5E5C1211E76F7294AAFC18EF4A8E895931004D65CE3B74606104E0E43D809026CD61A7715FDF138E34071B365A24A64E5990816CFD0C71B1E621C91D3BB4040C560500B73744D7B1A9ECE3EB03EBDA19BDF18475C2507C091357B74875C39CAA6045142B23B9D67D8D9BD4C8EB7799C451028D3B7ADD03992D333B0C74651BFBE82737F47185D45A8CE76A6821EFA07429114E964279AA6F74428E83C2E77DE5B1138E929C456563138370F74602A9001BD78544461A7207DD979A566B358DA5E4762721CF5D777DDB4F9ABAC5B701C5D08B4A199415DF7666BA8BF3BDE0812D2D6FCBBD18622A8BDECC896B6876ED7261696FBCC48E9A7CEF76C3CD5BD04BBEBDBFA1480BDF35769188AC2F89726FD93A0AD2956C15AA1A4E2E09F411047C5DD47C8E2E42CF601B4AFA18BA053459082AE2E3E8150157569A585EA206213D334D77B6FD2C492AE4584DE3D84E42439E777F39DEF8C12FA3F5D8F436E5B638227FA59570F6E4FAF4EEEAED7114F78DBB4BF1DB7DCA43AB04FCC65538F3D83A12C3DE19C2F56F214E97EEF2F097CD5B968C93783235E111018D630CE75FDDD69229105C43E6D4897F7306F9E386F6A5A01C5E23E745D87A2287F1A2FCB68E3E5F808ED8B0A62B50624C3E4B7455428954FAB90733310D5341F6A43383D476027285526C710994883A45200255B768C795541EAAD85288D0991044EE1061B372A32428E22DA85BB7BE210BF40E2463D8C9959A1203ADC398E09DBF87F7981CD7FA7146EBBB164BDEF8CB425AE6417F0E174509763C8EFEE616A7905D67B0B56B309B35E83FDFC00F2DA80687CC1F9B6388D136E0A4463C2447D097ADFC79388CCCE41D2E6216B0B88672631ECF96ED56A1587A512CECB659EE433851CD676B691DF5CA58588BBEB2108411B64A06A07FACD60FBAD6407117DEF1915427DE703AE92843D1602F31BF79D31BA1D6C6417CFB6B24BBA4358CF41F8BC9A3A4AE8A3155E3F02B077F53C094351F4B4B4520A315431BAB8E9D0BFC0D6383ABB3BB839A8A33B832C064C8CFFC1F817DC88BFC049891A170683887C594AFB7CEFBE27A5C8AAD1843B77E84BDA9C7BDE3DF79C39A0FF5740FF61957BCEB47055BF393DBCBE3862E45022D5D15FB357F5F5C4FEA9632C57EB633A536224A6D6D5520AE023393D67312B21FAA86B5349564A50C5A2B1F04E57A22EC10035C5DAC93D25632073D7022E6F31787AA1673CCF43A954A254B4BF530CEDFA239AB51A468D67E89C9A5B4E01E9E50216F20E07771B0607704A3DB33857164A700EF09AF05127F53AE03FDCA3775E81F1D622C00F44BC2B0774338860E9699A87D33F1D49FB5A1A880B96174A9732A6490522DD94844C89116504AE708BEBD35C5D08DB746499988B6BE8873E1ACE0AD6F6F6B1EABAC91371B";

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/DefineResturant/updateRestroDetails",
        data: "{'code':'" + code + "','name':'" + name + "','location':'" + location + "','address':'" + address + "','arebicname':'" + arebicname + "','vatno':'" + vatno + "','restroId':'" + restroId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
 {
           

             UpdateImage();
     // jquery_min_p('#addRestroPopup').css('display', 'none');


    //bootstrap_min_p('#addRestroPopup').modal('hide');

                jquery_min_p('#popupsuccess').text('Restaurant Updated Successfully');
                jquery_min_p('#savePopup').modal('show');


            }


        },
        error: function (result) {

            alert("Error");
        }
    })


}









function UpdateImage() {
    var data = new FormData();
    var files = jquery_min_p("#files").get(0).files;
    // var files =  jquery_min_p("#files").get(0).files;
    //alert(id) 
    // alert(ImageSize);D:\Rproject\FRD_Web\FRDWeb\FRDWeb\AddImage.ashx
    if (files.length > 0) {//D:\Rproject\FRD_Web\FRDWeb\FRDWeb\UpdateImage.ashx
        data.append("imgInp", files[0]);
        // data.append("imgInp", lrestroId[0]);
        jquery_min_p.ajax({
            type: 'POST',
            url: "../UpdateImage.ashx?RestroId=" + id,
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




function Validation() {


    var flag = 0;
   
    if (jquery_min_p('#textcode').val().trim() == '') {
        jquery_min_p('#textcode').addClass('validate');
        flag = 1;
    }
    if ($.trim(jquery_min_p('#textresturantname').val()) == '') {
        jquery_min_p('#textresturantname').addClass('validate');
        flag = 1;
    }
    if ($.trim(jquery_min_p('#textlocation').val()) == '') {
        jquery_min_p('#textlocation').addClass('validate');
        flag = 1;
    }
    if ($.trim(jquery_min_p('#textarabicname').val()) == '') {
        jquery_min_p('#textarabicname').addClass('validate');
        flag = 1;
    }

    if ($.trim(jquery_min_p('#textvatno').val()) == '') {
        jquery_min_p('#textvatno').addClass('validate');
        flag = 1;
    }
    if ($.trim(jquery_min_p('#textaddress').val()) == '') {
        jquery_min_p('#textaddress').addClass('validate');
        flag = 1;
    }



    if (flag == 1) {
        return false;
    }
    else {
        return true;
    }

}



//function Removeclass() {

//    if (jquery_min_p('#textcode').val() != '') {
//        jquery_min_p('#textcode').removeClass('validate');
//    }
//    if (jquery_min_p('#textresturantname').val() != '') {
//        jquery_min_p('#textresturantname').removeClass('validate');
//    }


//    if (jquery_min_p('#textlocation').val() != '') {
//        jquery_min_p('#textlocation').removeClass('validate');

//    }
//    if (jquery_min_p('#textarabicname').val() != '') {
//        jquery_min_p('#textarabicname').removeClass('validate');

//    }
//    if (jquery_min_p('#textvatno').val() != '') {
//        jquery_min_p('#textvatno').removeClass('validate');

//    }
//    if (jquery_min_p('#textaddress').val() != '') {
//        jquery_min_p('#textaddress').removeClass('validate');

//    }


//}



function Reset() {


    

    jquery_min_p('#txtcodesitting').val('');


    

    jquery_min_p('#txtkitchencode').val('');
    
    jquery_min_p('#txtkitchenname').val('');
    
    
    jquery_min_p('#files').val('');

    jquery_min_p('#txtnamesitting').val('');

    jquery_min_p('#textaddress').removeClass('validate');

    jquery_min_p('#textvatno').removeClass('validate');

    jquery_min_p('#textarabicname').removeClass('validate');

    jquery_min_p('#textresturantname').removeClass('validate');

    jquery_min_p('#textcode').removeClass('validate');

    jquery_min_p('#textlocation').removeClass('validate');


}
