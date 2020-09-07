var restroid = "";
jquery_min_p(document).ready(function () {

    jquery_min_p("#empDetails").css('display', 'block');

    restroid = jquery_min_p("#lblrestroid").text();



    BindAddOnList();
    BindItemWise();
      

    jquery_min_p(document).keydown(function (event) {
        if (event.keyCode == 27) {
            jquery_min_p('#Addonspopup').modal('hide');


        }

    });



    jquery_min_p(document).on("click", "#Itemtable tbody tr", function () {

        if (event.target.type !== 'checkbox') {
            jquery_min_p(':checkbox', this).trigger('click');
        }
    });



   
        jquery_min_p("#txtinputitem").on("keyup", function () {
            var value = jquery_min_p(this).val().toLowerCase();
            jquery_min_p("#tblitemlist   tr").filter(function () {
                jquery_min_p(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
   

    


    
    jquery_min_p("#txtinputaddon").on("keyup", function ()
    {
            var value = jquery_min_p(this).val().toLowerCase();
            jquery_min_p("#tbladdonlist  td").filter(function () {
                jquery_min_p(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
   




    jquery_min_p('#btnsaveclose').click(function () {

        jquery_min_p('#savePopup').modal('hide');
        BindAddOnList();
        BindItemWise();




    });

   

    jquery_min_p("#btndeladdon").click(function () {


        var check = 0;

        jquery_min_p('#divaddons .chkAddon').each(function (e) {


            if (jquery_min_p(this).prop("checked") == true) {
                check = 1;
            }
        });
        if (check == 1) {
            jquery_min_p("#DeleteAddonepopup").modal('show');
            
        }
        else {
            jquery_min_p('#lblwarning').text('Please Select Addons First');
            jquery_min_p("#warningpopup").modal('show');

           

            //alert('please select addons first');
            return false;
        }
       
    });
    
    jquery_min_p("#BtnDelete").click(function () {
        jquery_min_p("#DeleteAddonepopup").modal('hide');
        Deleteaddon();
     

    });

    jquery_min_p("#BtnNo").click(function () {

        jquery_min_p("#DeleteAddonepopup").modal('hide');
        return false;

    });




    jquery_min_p("#btnAdd").click(function () {
        if (validation()) {
            //CheckAddOnCode();
            //CheckAddOnName();
            //createAddOn();
            CheckDuplicate();

        }
        else {
            return false;
        }

    });




    //$('.chk').on('change', function () {
    //    $('.chk').not(this).prop('checked', false);
    //});

    jquery_min_p("#btnproceed").click(function () {

        var itemid = '';

        restroid = jquery_min_p("#lblrestroid").text();
        jquery_min_p("#Itemtable tbody").find('tr').each(function () {
            var row = jquery_min_p(this).closest('tr');
            if (row.find(".chk").prop("checked") == true) {
                itemid = row.find('td:nth-child(2)').text().trim();

            }
        });



        var dtotarr = [];
        var dtot = '';
        var TableDataX = "<dtXml>";


        //if (jquery_min_p("#checkitem").prop("checked") == true) {
        if (itemid != "") {
            var flag = 0;
            jquery_min_p('#divaddons .chkAddon').each(function (e) {


                if (jquery_min_p(this).prop("checked") == true) {
                    flag = 1;
                    TableDataX += "<dtXml ";
                    // var addonsId = this('#lbladdonsId').text().trim();
                    var addonsId = $(this).closest('tr td').find('#lbladdonsId').text();

                    TableDataX += 'addonsId="' + addonsId + '" ';
                    TableDataX += 'ItemsId="' + itemid + '" ';
                    TableDataX += " />";
                }


            });
            TableDataX += "</dtXml>";
             //alert(TableDataX);

            // jquery_min_p('#divaddonlist .chkAddon').each(function (e) {

            if (flag==1) {

                jquery_min_p.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    url: "/Master/itemaddonsbinding",
                    data: "{'TableDataX':'" + TableDataX + "','restroid':'" + restroid + "'}",
                    dataType: "json",
                    async: false,
                    success: function (result) {

                        if (result[0].result == '1') {

                            jquery_min_p('#popupsuccess').text('Addons Added To This Item Name Successfully');
                            jquery_min_p('#savePopup').modal('show');
                          

                            jquery_min_p('#checkitem').prop('checked', false);
                            jquery_min_p('#checkAddon').prop('checked', false);

                        }
                        else {
                            alert('Error');
                        }

                    },

                    error: function ()
                    { }
                });

            }
            else {

                //  alert('please select addon item');
                jquery_min_p('#lblwarning').text('Please Select Addon Item');

                jquery_min_p("#warningpopup").modal('show');

                

            }
            // });

        }


        else {
            //alert('please select item first');

            jquery_min_p('#lblwarning').text('Please Select Item First');

            jquery_min_p("#warningpopup").modal('show');
        }


    });


   
    jquery_min_p("#btnopenaddonpopup").click(function () {


        jquery_min_p('#Addonspopup').on('shown.bs.modal', function () {
            jquery_min_p('#txtaddoncode').focus();
        })
        jquery_min_p('#Addonspopup').modal('show');
        Reset();


    });

    //jquery_min_p("#btnsaveaddon").click(function () {

    //    bootstrap_min_p('#Addonspopup').modal('hide');


    //});

    jquery_min_p("#btnaddonClose").click(function () {

        jquery_min_p("#addonsavePopup").modal('hide');
        Reset();
    });

    //jquery_min_p("#btnaddonsave").click(function () {


    //    bootstrap_min_p("#addonsavePopup").modal('hide');
    //});



});

function createAddOn() {
    //restroid = jquery_min_p("#lblrestroid").text();
    var code = jquery_min_p("#txtaddoncode").val();
    var name = jquery_min_p("#txtaddonname").val();
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Master/createAddOn",
        data: "{'code':'" + code + "','name':'" + name + "','restroid':'" + restroid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            console.log(result);

            if (result[0].result == '1') {



                jquery_min_p('#popupsuccess').text('Added Successfully');
                jquery_min_p('#savePopup').modal('show');
                BindAddOnList();
            }
                //bootstrap_min_p("#Addons").modal('hide');

                //bootstrap_min_p("#addonsavePopup").modal('show');
                //bootstrap_min_p('#Addonspopup').modal('hide');
            else {
                alert('ERROr');
                return false;
            }
            //BindAddOnList();
            //Reset();

        }
    });

}


function CheckDuplicate() {
    var code = jquery_min_p("#txtaddoncode").val();
    var name = jquery_min_p("#txtaddonname").val();
    var restroId = jquery_min_p("#lblrestroid").text();
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Master/CheckDuplicate",
        data: "{'code':'" + code + "','name':'" + name + "','restroid':'" + restroId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsondata = eval(result);
            if (result.length > 0) {

                if (result[0].code == code) {
                    jquery_min_p('#txtaddoncode').val('');
                    jquery_min_p('#txtaddoncode').attr('placeholder', 'Code Already Exist.');
                    jquery_min_p('#txtaddoncode').addClass('validate');
                }
                if (result[0].name == name) {
                    jquery_min_p('#txtaddonname').val('');
                    jquery_min_p('#txtaddonname').attr('placeholder', 'Addons Name Already Exist.');
                    jquery_min_p('#txtaddonname').addClass('validate');

                }
            }
            else {
                createAddOn();
                jquery_min_p('#Addonspopup').modal('hide');
                //jquery_min_p('#divempcode').css('display', 'none');

            }


        }
    });


}

//function CheckAddOnCode()
//{
//    var code = jquery_min_p("#txtaddoncode").val();
//   // var name = jquery_min_p("#txtaddonname").val();
//    jquery_min_p.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "/Master/CheckAddOnCode",
//        data: "{'code':'" + code + "'}",
//        dataType: "json",
//        async: false,
//        success: function (result) {
//            var i = 0;
//            var jsondata = eval(result);
//            if (jsondata[0].result == '1') {
//                jquery_min_p('#txtaddoncode').val('');
//                jquery_min_p('#txtaddoncode').attr('placeholder', 'Code already exist.');
//                jquery_min_p('#txtaddoncode').addClass('validate');
//            }
//            else {

//                jquery_min_p('#divempcode').css('display', 'none');
//                // saveemployee();
//            }
//            //BindMenu();

//        }
//    });

//}



//function CheckAddOnName() {
//    //var code = jquery_min_p("#txtaddoncode").val();
//     var name = jquery_min_p("#txtaddonname").val();
//    jquery_min_p.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "/Master/CheckAddOnName",
//        data: "{'name':'" + name + "'}",
//        dataType: "json",
//        async: false,
//        success: function (result) {
//            var i = 0;
//            var jsondata = eval(result);
//            if (jsondata[0].result == '1') {
//                jquery_min_p('#txtaddonname').val('');
//                jquery_min_p('#txtaddonname').attr('placeholder', 'Name already exist.');
//                jquery_min_p('#txtaddonname').addClass('validate');
//            }
//            else {

//                jquery_min_p('#divempcode').css('display', 'none');

//                // saveemployee();
//            }
//            //BindMenu();

//        }
//    });

//}





function validation() {
    var flag = 0;
    if (jquery_min_p("#txtaddoncode").val() == "") {
        jquery_min_p("#txtaddoncode").addClass('validate');
        flag = 1;
    }
    if (jquery_min_p("#txtaddonname").val() == "") {
        jquery_min_p("#txtaddonname").addClass('validate');
        flag = 1;
    }

    if (flag == 1) {
        return false;

    }
    else {
        return true;
    }

}
function RemoveClass() {
    if (jquery_min_p("#txtaddoncode").val() != "") {
        jquery_min_p("#txtaddoncode").removeClass('validate');

    }
    if (jquery_min_p("#txtaddonname").val() != "") {
        jquery_min_p("#txtaddonname").removeClass('validate');

    }

}



function Reset() {

    jquery_min_p("#txtaddoncode").val('');
    jquery_min_p("#txtaddonname").val('');
    
    jquery_min_p("#txtinputaddon").val('');
    
    jquery_min_p("#txtinputitem").val('');

    jquery_min_p('#txtaddoncode').removeClass('validate');

    jquery_min_p('#txtaddonname').removeClass('validate');
}
function BindAddOnList() {
    jquery_min_p("#divaddons").html("");
    // restroid = jquery_min_p("#lblrestroid").text();
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Master/BindAddOnList",
        data: "{'restroid':'" + restroid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            
            var trcount = 0;
            var ArrayCount = result.length;
            if ((ArrayCount % 2) != 0) {
                trcount = ((ArrayCount + 1) / 2);
            }
            else { trcount = ArrayCount / 2; }

            var Query = ""; var j = 0; var z = 0;
            Query = Query + "<table >";
            Query = Query + "<tbody id='tbladdonlist' >";
            for (var i = 0; i < trcount; i++) {
                Query = Query + "<tr >";
                for (j = 0 ; j < 2; j++) {
                    Query = Query + "<td >";
                    if (ArrayCount>z ) {
                        Query = Query + " <input type='checkbox' name='value' value='other' id='checkAddon' class='chkAddon' />";
                        Query = Query + " <label class='ml-2 mb-0' id='test'>" + result[z].addonsname + "</label> ";
                        Query = Query + "<label class='ml-1' style='display:none' id='lbladdonsId'>" + result[z].addonsId + "</label>";
                    }
                    Query = Query + "</td>";
                    z++;
                }
                Query = Query + "</tr>";
            }
            Query = Query + "</table>";
                
            jquery_min_p("#divaddons").append(Query);

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

function BindItemWise() {

    jquery_min_p("#Itemtable tbody").html("");
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Master/BindItemWise",
        data: "{'restroid':'" + restroid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            //var jsonData = result;
            // jquery_min_p("#Itemtable tbody").empty();
            var ArrayCount = result.length;
            //var row = row+" <thead>";
            // row = row+"<tr>";
            // row = row+"<th>Select</th>";
            // row = row+"th>Item Name</th>";
            // row = row+"<th>Add-ons Qty</th>";

            // row = row+" </tr>";
            // row = row + " </thead>";



            // row = row +" <tbody>";
            // row = row +"<tr>";
            // row = row +" <td>";
            // row = row +" <span class=''>";
            // row = row +"<input type='checkbox' name='' value='other' />";
            // row = row +"</span>";
            // row = row +"</td>";
            // row = row +"<td>Contains</td>";
            // row = row +"<td>Equals</td>";


            // row = row + "</tr>";
            // row = row + "</tbody>";

            var row = '';
            for (var i = 0; i < ArrayCount; i++) {


                row = row + "<tr>";
                row = row + "<td>";
                row = row + " <span class=''>"
                row = row + "<input type='checkbox' name='' value='other' id='checkitem' class='chk' onclick='DeselectAlldata(this);' />";
                row = row + "</span>";
                row = row + "</td>";
                row = row + " <td style='display:none'>" + result[i].itemId + "</td>";
                row = row + " <td>" + result[i].itemname + "</td>";
                row = row + "<td>" + result[i].AddonsQuantity + "</td>";

                row = row + "</tr>";

                //row = row + "<tr>"
                // row = row + "<td> <span class=''><input type='checkbox, name='chkitem' id='chk_" + '' + result[i].itemId +"'/></span></td>";
                // row = row + "<td>"+ result[i].itemname +"</td>";
                // row = row + "<td>"+ result[i].AddonsQuantity +"</td>";
                //row = row + "</tr>"

            }
            jquery_min_p("#Itemtable tbody").append(row);

           
        },


       
        error: function () {


        }
    });
}





function Deleteaddon() {

    //var check = '';
    var restroId = jquery_min_p("#lblrestroid").text();
  
    var TableDataX = "<dtXml>";
    jquery_min_p('#divaddons .chkAddon').each(function (e) {


        if (jquery_min_p(this).prop("checked") == true) {
            //check = 1;
            TableDataX += "<dtXml ";
           
            var addonsId = $(this).closest('tr td').find('#lbladdonsId').text();

            TableDataX += 'addonsId="' + addonsId + '" ';
          
            TableDataX += " />";
        }


    });
    TableDataX += "</dtXml>";

    

        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/Master/itemaddonsUseCheck",
            data: "{'TableDataX':'" + TableDataX + "','restroId':'" + restroId + "'}",
            dataType: "json",
            async: false,
            success: function (result) {
                var i = 0;
                var jsondata = eval(result);



                if (result.length > 0) {
                    jquery_min_p('#lblwarning').text('item Already Assigned Cant Be Deleted');

                    jquery_min_p("#warningpopup").modal('show');

                    
                    //alert('addons can not deleted');
                    return false;

                }
                else
                {
                    jquery_min_p.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        url: "/Master/Deleteaddon",
                        data: "{'TableDataX':'" + TableDataX + "','restroId':'" + restroId + "'}",
                        dataType: "json",
                        async: false,
                        success: function (result) {
                            var i = 0;
                            var jsondata = eval(result);


                            if (jsondata[0].result == '1') {


                                jquery_min_p('#popupsuccess').text('Addons deleted  successfully');
                                jquery_min_p('#savePopup').modal('show');
                                            }

                        }
                    });

                }


            }
        });
    
   

}

function DeselectAlldata(data) {
    jquery_min_p(".chk").prop("checked", false);
    var row = jquery_min_p(data).closest('tr');
    var itemId = row.find('td:nth-child(2)').text().trim();
   // alert(itemId);
    jquery_min_p(data).prop("checked", true);

    restroid = jquery_min_p("#lblrestroid").text();

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Master/BindItemaddons",
        data: "{'itemId':'" + itemId + "','restroid':'" + restroid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var addonsId = '';
            var jsondata = result;
            jquery_min_p('.chkAddon').prop('checked', false);
            for (i = 0; i < result.length; i++)
            {
                jquery_min_p('#divaddons .chkAddon').each(function (e) {

                   addonsId = $(this).closest('tr td').find('#lbladdonsId').text();
                

                if (result[i].addonsId == addonsId)
                {
                    jquery_min_p(this).prop('checked', true);
                }
                });
            }
          
            
            
           }
    });



}



//function check() {
//    // foreach row in the table
//    // we create a new checkbox
//    // and wrap it with a td element
//    // then put that td at the beginning of the row

//    var $rows = $('#Itemtable tr');
//    for (var i = 0; i < $rows.length; i++) {
//        var $checkbox = $('<input />', {
//            type: 'checkbox',
//            id: 'id' + i,
//        });

//        $checkbox.wrap('<td></td>').parent().prependTo($rows[i]);
//    }


//    // First checkbox changes all the others
//    //$('#id0').change(function () {
//    //    var isChecked = $(this).is(':checked');
//    //    $('#excelDataTable input[type=checkbox]').prop('checked', isChecked);
//    //})

//}