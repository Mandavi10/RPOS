jquery_min_p(document).ready(function () {
    BindKitchensection();

    
        jquery_min_p("#txtsearchkitchensection").on("keyup", function () {
            var value = jquery_min_p(this).val().toLowerCase();
            jquery_min_p("#tblkslist   tr").filter(function () {
                jquery_min_p(this).toggle(jquery_min_p(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    

       
       





    jquery_min_p('#btnsaveclose').click(function () {
        jquery_min_p('#savePopup').modal('hide');
        BindKitchensection();
        jquery_min_p('#divitemdetail').css('display', 'none');
        jquery_min_p('#itemgrd').modal('hide');
        Reset();
    });
    
    jquery_min_p("#btnaddmenu").click(function () {
        var flag = 0;
        var TableDataX = "<dtXml>";       
        var id = jquery_min_p("#lblrestroid").text();
        var kitchensectionid = jquery_min_p("#lblkitchensectionid").text();        
        jquery_min_p("#itemtable tbody").find('tr').each(function () {
            var row = jquery_min_p(this).closest('tr');
            if (row.find("#chk").prop("checked") == true) {
                flag = 1;
                TableDataX += "<dtXml ";
                var itemId = row.find('td:nth-child(3)').text().trim();
                TableDataX += 'itemId="' + row.find('td:nth-child(3)').text().trim() + '" ';
                TableDataX += " />";
            }
        });
        TableDataX += "</dtXml>";

        //jquery_min_p("#itemtable tbody").find('tr').each(function () {
        //    var row1 = jquery_min_p(this).closest('tr');
            if (flag=="1") {
            jquery_min_p.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/KitchenSection/AddItem",
                data: "{'TableDataX':'" + TableDataX + "','id':'" + id + "','kitchensectionid':'" + kitchensectionid + "'}",
                dataType: "json",
                async: false,
                success: function (result) {                   
                    if (result[0].result == '1') {                      
                        jquery_min_p('#popupsuccess').text('Item added to kitchen section successfully');
                        jquery_min_p('#savePopup').modal('show');
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
               

                jquery_min_p('#h6warning').text('please select Item first');
                jquery_min_p('#dngwarn').modal('show');
            }
       // });     

    });

    jquery_min_p("#checkallnewitem").click(function () {
        if (jquery_min_p("#checkallnewitem").is(':checked')) {
            jquery_min_p("#itemtable input[type=checkbox]").each(function () {
                jquery_min_p(this).attr("checked", true);

            });
        }
        else
        {
            jquery_min_p("#itemtable input[type=checkbox]").each(function () {
                jquery_min_p(this).attr("checked", false);

            });
        }


    });
    //$(document).on("click", "#itemtable tbody tr", function () {
    //    var row = jquery_min_p(this).closest('tr');
    //    if (row.find('#chk').prop("checked") == true) {
    //        row.find('#chk').prop("checked", false);
    //    }
    //    else
    //    {
    //        row.find('#chk').prop("checked", true);
    //    }
       

    //});



    jquery_min_p(document).on("click", "#itemtable tbody tr", function () {
       
        if (event.target.type !== 'checkbox') {
            jquery_min_p(':checkbox', this).trigger('click');
        }
    });

    

    jquery_min_p(document).on("click", "#tblassigneditem tbody tr", function () {

        if (event.target.type !== 'checkbox') {
            jquery_min_p(':checkbox', this).trigger('click');
        }
    });






    jquery_min_p("#checkallOlditem").click(function () {
        if (jquery_min_p("#checkallOlditem").is(':checked')) {
            jquery_min_p("#tblassigneditem input[type=checkbox]").each(function () {
                jquery_min_p(this).attr("checked", true);

            });
        }
        else {
            jquery_min_p("#tblassigneditem input[type=checkbox]").each(function () {
                jquery_min_p(this).attr("checked", false);

            });
        }


    });




    jquery_min_p("#btnRemoveitem").click(function () {
        var TableDataX = "<dtXml>";
        var flag = 0;
        var id = jquery_min_p("#lblrestroid").text();
       // var kitchensectionid = jquery_min_p("#lblkitchensectionid").text();
        //alert(kitchensectionid);
        jquery_min_p("#tblassigneditem tbody").find('tr').each(function () {
            var row = jquery_min_p(this).closest('tr');


            if (row.find("#check").prop("checked") == true) {
                flag = 1;
                TableDataX += "<dtXml ";
                var itemId = row.find('td:nth-child(3)').text().trim();
                TableDataX += 'itemId="' + row.find('td:nth-child(3)').text().trim() + '" ';
                TableDataX += 'KitchenSectionId="' + row.find('td:nth-child(4)').text().trim() + '" ';
                TableDataX += 'itemName="' + row.find('td:nth-child(2)').text().trim() + '" ';
                TableDataX += " />";
            }

        });
        TableDataX += "</dtXml>";
//alert(TableDataX);

        //jquery_min_p("#tblassigneditem tbody").find('tr').each(function () {
        //    var row1 = jquery_min_p(this).closest('tr');


            if (flag=="1") {


                jquery_min_p.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    url: "/KitchenSection/RemoveItem",
                    data: "{'TableDataX':'" + TableDataX + "','id':'" + id + "'}",
                    dataType: "json",
                    async: false,
                    success: function (result) {

                        if (result[0].result == '1') {

                            jquery_min_p('#popupsuccess').text('Item Remove from kitchen section successfully');
                            jquery_min_p('#savePopup').modal('show');

                            BindKitchensection();
                            //location.reload();
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

                

                jquery_min_p('#h6warning').text('Please Select Item First !!');
                jquery_min_p('#dngwarn').modal('show');

            }
      //  });


    });





});



function BindKitchensection() {
    
    jquery_min_p('#divkitchensection').css('display', 'block');
    var restroid = jquery_min_p("#lblrestroid").text();
    var id = restroid;
    //alert(restroid);


    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/KitchenSection/BindKitchensection",
        data: "{'id':'" + id + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsonData = result;
            jquery_min_p("#tbl tbody").empty();
            var ArrayCount = result.length;
           
            for (var i = 0; i < ArrayCount; i++) {
                var row = row + "<tr onclick='Bindassgineditem(" + result[i].kitchensectionId + "," + '"' + result[i].name + '"' + ")''><td>" + result[i].code + "</td> <td> " + result[i].name + "</td> <td style='display:none'>" + result[i].kitchensectionId + "</td> <td onclick='ShowItems(" + result[i].kitchensectionId + "," + '"' + result[i].name + '"' + ");'><i class='fa fa-plus-circle' aria-hidden='true'></i></td> </tr>";
            }
            jquery_min_p("#tbl tbody").append(row);

            
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
function ShowItems(id,name)
  
{

    jquery_min_p('#divitemdetail').css('display', 'none');
    jquery_min_p("#checkallnewitem").prop('checked', false);
    jquery_min_p('#itemgrd').modal('show');
    var kitchenSectionid = id;
    jquery_min_p("#lblkitchensectionid").text(kitchenSectionid);
    var restroid = jquery_min_p("#lblrestroid").text();
    var kitchensectionname = name
    jquery_min_p("#divkitchensectionname").text(name);
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/KitchenSection/ShowItems",
        data: "{'restroid':'" + restroid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsonData = result;
            jquery_min_p("#itemtable tbody").empty();
            var ArrayCount = result.length;
            if (result.length > 0) {
                for (var i = 0; i < ArrayCount; i++) {
                    var row = row + "<tr><td><input type='checkbox' class='itemcheck' name='' value='other' id='chk'></td><td>" + result[i].ItemName + "</td><td style='display:none' id='" + result[i].ItemId + "'>" + result[i].ItemId + "</td></tr>";
                }
                jquery_min_p("#itemtable tbody").append(row);
                jquery_min_p('#btnaddmenu').css('display', 'block');

            }
            else {
                jquery_min_p("#itemtable tbody tr").remove();
                var markup = "<tr><td colspan='2'>'No Record Found..'</td></tr>";
                jquery_min_p("#itemtable tbody").append(markup);
                jquery_min_p('#btnaddmenu').css('display', 'none');
            }

        },

        error: function () {

        }
    });


}

function Bindassgineditem(kitchensectionId,name)
{
    jquery_min_p('#divitemdetail').css('display', 'block');
    jquery_min_p("#checkallOlditem").prop('checked', false);
    var kitchensectionId = kitchensectionId;
    var restroid = jquery_min_p("#lblrestroid").text();
    var Kitchensectionname = name;
    jquery_min_p('#divkitchenname').text(Kitchensectionname);

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/KitchenSection/Bindassgineditem",
        data: "{'restroid':'" + restroid + "','kitchensectionId':'" + kitchensectionId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsonData = result;
            jquery_min_p("#tblassigneditem tbody").empty();
            var ArrayCount = result.length;
            if (result.length > 0) {

                for (var i = 0; i < ArrayCount; i++) {
                    var row = row + "<tr><td><input type='checkbox' name='' value='other' id='check'></td><td>" + result[i].ItemName + "</td> <td style='display:none'>" + result[i].itemId + "</td><td style='display:none'>" + result[i].kitchensectionId + "</td></tr>";
                }
                jquery_min_p("#tblassigneditem tbody").append(row);
                jquery_min_p('#btnRemoveitem').css('display', 'block');
            }
            else {
                jquery_min_p("#tblassigneditem tbody tr").remove();
                var markup = "<tr><td colspan='2'>'No Record Found..'</td></tr>";
                jquery_min_p("#tblassigneditem tbody").append(markup);

                jquery_min_p('#btnRemoveitem').css('display', 'none');
            }

        },

        error: function () {

        }
    });



}
function Reset()
{

    jquery_min_p('#checkallOlditem').attr("checked", false);
    jquery_min_p('#checkallnewitem').attr("checked", false);
    jquery_min_p('#chk').attr("checked", false);
    jquery_min_p('#check').attr("checked", false);

    jquery_min_p('#txtsearchkitchensection').val('');
}

function Row_click(id)
{
    //$(this).closest('tr').attr("checked", true);
    var row = jquery_min_p('#itemtable tbody').closest('tr');
    //alert(jquery_min_p(this).parent('#itemtable tbody').closest('tr').html());
    //if (row.find('#chk').prop("checked") == true) {
          
    //    row.find('#chk').attr("checked", false);
    //    }
    //    else {
    //    row.find('#chk').attr("checked", true);
    //    }
    
    
}