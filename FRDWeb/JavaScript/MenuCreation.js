    var Query = "";
var restroid = "";
var IsCurrent = 0;
var restrolevelid = 0;
var levelid = 0;
var levelname = "";
var level = "";

jquery_min_p(document).ready(function () {
    restroid = jquery_min_p("#lblrestroid").text();
    jquery_min_p("#btnsaveitem").css("display", "none");
    jquery_min_p("#divitemgrid").css("display", "block");

    BindMenu();
    defaultMenu();


    jquery_min_p('#addRestroPopup').on('shown.bs.modal', function () {
        jquery_min_p('#txtmenuname').focus();
    })

   

    jquery_min_p('#sublevel').on('shown.bs.modal', function () {
        jquery_min_p('#txtsublevel').focus();
    })

    jquery_min_p('#btnprintmenu').click(function () {

        
        ////var url = '/Reports/MenuReport.aspx';
        ////location.href = url;

        jquery_min_p('#divmenugrid').css('display', 'block');
       jquery_min_p('#dvmainprnt').css('display', 'block');
        jquery_min_p('#divprntmenucreation').css('display', 'block');

        PrintBindLevel();
        //PrintBindRestroImage();
        

       // var grid = jquery_min_p("#divmenugrid");
        
        kendo.drawing.drawDOM(jquery_min_p("#divprntmenucreation"))
        .then(function (group) {
            // Render the result as a PDF file
            return kendo.drawing.exportPDF(group, {
                paperSize: "auto",
                margin: { left: "10cm", top: "1cm", right: "10cm", bottom: "1cm" },
                scale: 50
               // sortable: false
            });
        })
        //            .then(function (group) {
        //    kendo.drawing.pdf.saveAs(group, "Exported.pdf")
        //});

        .done(function (data) {
            // Save the PDF file
            kendo.saveAs({
                dataURI: data,
                fileName: "Book1.pdf",
                
                proxyURL: "https://demos.telerik.com/kendo-ui/service/export"
            });

         });

    //    kendo.drawing
    //.drawDOM("#divprntmenucreation",
    //{
    //    paperSize: "A4",
    //    margin: { top: "1cm", bottom: "1cm" },
    //    scale: 0.8,
    //    height: 500
    //})
    //    .then(function (group) {
    //        kendo.drawing.pdf.saveAs(group, "Exported.pdf")
    //    });

       
        BindMenu();
        defaultMenu();
       // jquery_min_p('#divmenugrid').css('display', 'none');
        jquery_min_p('#dvmainprnt').css('display', 'none');
        // jquery_min_p('#divprntmenucreation').css('display', 'none');




    });

    jquery_min_p(document).keydown(function (event) {
        if (event.keyCode == 27) {
            bootstrap_min_p('#addRestroPopup').modal('hide');
            
            bootstrap_min_p('#Updatemenu').modal('hide');
            
            bootstrap_min_p('#addlevel').modal('hide');
            
            bootstrap_min_p('#sublevel').modal('hide');
            
            bootstrap_min_p('#editItem').modal('hide');
        }
    });


    jquery_min_p("#btnaddmenu").click(function () {

        if (jquery_min_p("#txtmenuname").val() == "") {
            jquery_min_p("#txtmenuname").addClass('validate');
        }
        else {
            SaveMenu();
        }

    });
    jquery_min_p("#chkall").click(function () {
        if (jquery_min_p("#chkall").prop("checked") == true) {
            jquery_min_p(".chk").prop("checked", true);
        }

        else {
            jquery_min_p(".chk").prop("checked", false);
        }

    });

    jquery_min_p("#btnaddlevel").click(function () {

        jquery_min_p('#addlevel').on('shown.bs.modal', function () {
            jquery_min_p('#txtlevel').focus();
        })

        jquery_min_p("#btnsavelevel").text('Save');
        jquery_min_p("#haddlevel").text('Add Level');
        jquery_min_p("#txtlevel").val("");
        bootstrap_min_p("#addlevel").modal('show');

    });





    jquery_min_p("#btnsaveitem").click(function () {
        Insertitemlevel3();

    });

    jquery_min_p("#btnedititem").click(function () {
        bootstrap_min_p("#editItem").modal('hide');
        jquery_min_p("#hconfirm").text('Are you sure to update Item Price?');
        bootstrap_min_p("#confirmationPopup").modal('show');
    });

    jquery_min_p("#yesBtn").click(function () {
        updateitemprice();
    });

    jquery_min_p("#noBtn").click(function () {
        bootstrap_min_p("#confirmationPopup").modal('hide');

    });
    jquery_min_p("#btnok").click(function () {
        bootstrap_min_p("#WarningPopup").modal('hide');
        window.location.reload(true);

    });




    jquery_min_p("#delsucess").click(function () {

        if (levelid == 1) {
            deletelevel();
        }
        else if (levelid == 2) {
            deletesublevel1();
        }
        else if (levelid == 3) {
            deletesublevel2();
        }
        else if (levelid == 4) {
            deleteitem();

        }
        else {
            Delete();
        }
        bootstrap_min_p("#deletePopup1").modal('hide');


    });
    jquery_min_p("#delcancel").click(function () {
        bootstrap_min_p("#deletePopup1").modal('hide');

    });

    jquery_min_p("#btnsaveclose").click(function () {
        bootstrap_min_p("#savePopup").modal('hide');
        window.location.reload(true);

    });

    //jquery_min_p(document).keydown(function (event) {
    //    if (event.keyCode == 27) {
    //        bootstrap_min_p('#savePopup').modal('hide');
    //        window.location.reload(true);
    //    }
    //    });

    jquery_min_p("#btnsavelevel").click(function () {
        bootstrap_min_p("#addlevel").modal('hide');
        if (jquery_min_p('#txtlevel').val() == "") {
            jquery_min_p('#txtlevel').addClass('validate');
        }
        else {
            Savelevel1();
        }

    });

    jquery_min_p("#btnsublevel").click(function () {
        bootstrap_min_p("#sublevel").modal('hide');
        if (jquery_min_p('#txtsublevel').val() == "") {
            jquery_min_p('#txtsublevel').addClass('validate');
        }
        else {
            Savelevel2();
            //BindLevel();
            //window.location.reload(true);
        }

    });

    jquery_min_p("#btncrosscloase").click(function () {
        bootstrap_min_p("#savePopup").modal('hide');
        window.location.reload(true);


    });

    jquery_min_p("#aedit").click(function () {

        EditMenu();
    });

    jquery_min_p("#btndone").click(function () {

        SaveMenu();



    });

});






function excelExport(rows) {
    var workbook = new kendo.ooxml.Workbook({
        sheets: [
        {
            columns: [
            { autoWidth: true },
            { autoWidth: true }
            ],
            title: "Orders",
            rows: rows
        }
        ]
    });
    kendo.saveAs({ dataURI: workbook.toDataURL(), fileName: "Book1.xlsx" });
}







function BindMenu() {
    restroid = jquery_min_p("#lblrestroid").text();
      jquery_min_p("#ddlselectmenu").html('');
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/MenuCreation/BindMenu",
        data: "{'restroid':'" + restroid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsondata = eval(result);


            for (var i = 0; i < result.length; i++) {
                var newOption = $('<option>');



                newOption.attr('value', result[i].RestroMenuId).text(result[i].Name);

                if (result[i].IsCurrent == 1) {
                    newOption.attr('selected', 'selected');
                    //$('option[value=' + result[i].RestroMenuId + ']', newOption).attr('selected', 'selected');
                }

                // Append that to the DropDownList.
                $('#ddlselectmenu').append(newOption);

                // $('option[value=valueToSelect]', newOption).attr('selected', 'selected');

            }

        }
    });
}


function SaveMenu() {
    bootstrap_min_p("#addRestroPopup").modal('hide');
    bootstrap_min_p("#Updatemenu").modal('hide');

    var restromenuid = jquery_min_p("#lblrestromenuid").text();
    //  var id = '#' + 'textmenu_' + restromenuid;
    var newname = jquery_min_p('#txtmenu_' + restromenuid).val();
    //var newname1 = jquery_min_p('#txtmenu_' + restromenuid).text(); //txtmenu_20015
    var menuname = jquery_min_p("#txtmenuname").val();
    if (restromenuid == "") {
        restromenuid = 0;
    }
    restroid = jquery_min_p("#lblrestroid").text();
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/MenuCreation/SaveMenu",
        data: "{'menuname':'" + menuname + "','restroid':'" + restroid + "','restromenuid':'" + restromenuid + "','newname':'" + newname + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            if (result[i].result == "0") {
                
                    jquery_min_p("#hwarning").text("Menu Already Exists!!");
                    bootstrap_min_p("#WarningPopup").modal('show');
                }


            if (result[i].result == "1") {

                jquery_min_p("#popupsuccess").text("Menu Saved Successfully");
                bootstrap_min_p("#savePopup").modal('show');
            }
            if (result[i].result == "2") {
                jquery_min_p("#popupsuccess").text("Menu Updated Successfully");
                bootstrap_min_p("#savePopup").modal('show');
            }

            if (result[i].result == "3") {
                jquery_min_p("#hwarning").text("Menu can not be updated as running orders are using this menu!!");
                bootstrap_min_p("#WarningPopup").modal('show');
            }
           
            // BindMenu();

        }
    });

}
function EditMenu() {
    jquery_min_p("#diveditmenu").html("");
    restroid = jquery_min_p("#lblrestroid").text();
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/MenuCreation/BindMenu",
        data: "{'restroid':'" + restroid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {

            var ArrayCount = result.length;
            var Query = "";
            for (var i = 0; i < ArrayCount; i++) {
                //'txtmenu_" + '"' + result[i].name + '"' + "'
                Query = Query + "<span class='col-sm-4 col-md-10 col-4 col-form-label'>"
                Query = Query + "<input type='text' class='form-control' placeholder='MAL-Menu' id='txtmenu_" + '' + result[i].RestroMenuId + "' value='" + result[i].Name + "' disabled/>"
                Query = Query + "</span>"
                Query = Query + "<div class='col-sm-8 col-md-2 col-8'>"
                Query = Query + "<i class='fa fa-pencil-square-o pt-2 fa-2x' style='color:#2dc740' aria-hidden='true' id='btnedit' onclick='Update(" + result[i].RestroMenuId + ")'></i>"
                Query = Query + "<i class='fa fa-trash pt-2 fa-2x' style='color:#ef5656 !important' aria-hidden='true' id='btndelete' onclick='delconfirmpopup(" + result[i].RestroMenuId + "," + '"' + result[i].Name + '"' + "," + '5' + ")'></i>"
                Query = Query + "</div>"


            }
            jquery_min_p("#diveditmenu").append(Query);
            bootstrap_min_p("#Updatemenu").modal('show');
        }
    });
}

function Update(RestromenuId) {

    var id = '#' + 'txtmenu_' + RestromenuId;
    jquery_min_p(id).attr("disabled", false);

    jquery_min_p("#lblrestromenuid").text(RestromenuId);

}

function Delete() {
    bootstrap_min_p("#Updatemenu").modal('hide');
    restroid = jquery_min_p("#lblrestroid").text();
    var id = 'txtmenu_' + restrolevelid;
    jquery_min_p("#id").attr("disabled", false);


    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/MenuCreation/DeleteMenu",
        data: "{'restroid':'" + restroid + "','restrolevelid':'" + restrolevelid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            if (result[i].result == 1) {
                jquery_min_p("#hwarning").text("Menu Cannot Be Deleted!!");
                bootstrap_min_p("#WarningPopup").modal('show');
            }
            else {

                jquery_min_p("#popupsuccess").text("Menu Deleted Successfully");
                bootstrap_min_p("#savePopup").modal('show');
                BindMenu();
            }
            // window.location.reload(true);

        }
    });

}



function BindItem() {
    jquery_min_p(".noDataMsg").css("display", "none");
    //jquery_min_p("#divitemgrid").css("display", "block");

    restroid = jquery_min_p("#lblrestroid").text();
    var restromenuid = jquery_min_p("#ddlselectmenu").val();


    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/MenuCreation/BindItem",
        data: "{'restroid':'" + restroid + "','restromenuid':'" + restromenuid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            //var jsonData = result;
            jquery_min_p("#itemTable tbody").empty();
            var ArrayCount = result.length;
            for (var i = 0; i < ArrayCount; i++) {
                var row = row + "<tr>"
                row = row + "<td style='display:none'> " + result[i].ItemId + " </td>";
                row = row + "<td><input type='checkbox' class='chk' id='chk' /></td>";
                row = row + "<td> " + result[i].ItemName + " </td>";
                row = row + "<td> " + result[i].ItemSalePrice + " </td>";
                row = row + "</tr>"
                //onclick='BindCard(" + result[i].Length + ");'
            }
            jquery_min_p("#itemTable tbody").append(row);
            jquery_min_p("#divitemtbl").css("display", "block");
            jquery_min_p("#btnsaveitem").css("display", "inline-block");
            jquery_min_p("#divhlevel").css("display", "block");

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

function BindLevel() {
    //jquery_min_p("#divmenucreation").css("display", "block");

    jquery_min_p("#divmenugrid").css("display", "block");
    jquery_min_p(".noDataMsg").css("display", "block");
    jquery_min_p("#divhlevel").css("display", "none");
    jquery_min_p("#divitemtbl").css("display", "none");
    jquery_min_p("#divmenucreation").html("");
    Query = "";
    var restromenutext = jquery_min_p("#ddlselectmenu option:selected").text();


    var restromenuid = jquery_min_p("#ddlselectmenu").val();
    restroid = jquery_min_p("#lblrestroid").text();
    jquery_min_p("#hmenu").text(restromenutext);

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/MenuCreation/BindLevel1",
        data: "{'restroid':'" + restroid + "','restromenuid':'" + restromenuid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;

            jquery_min_p("#divlevel1").html("");
            var ArrayCount = result.length;

            for (var i = 0; i < ArrayCount; i++) {

                Query = Query + "<div class='panel panel-default mt-2'>"
                Query = Query + "<a data-toggle='collapse' href='#level1item_" + '' + result[i].RestroMenuLevel1Id + "' class='acolor'>"

                //Query = Query + "<a data-toggle='collapse' href='#level2item_" + '' + result[i].RestroMenuLevel2Id + "' class='acolor'>"

                Query = Query + "<div class='panel-heading' id='divlevel1_" + '' + result[i].RestroMenuLevel1Id + "' >"
                Query = Query + "<div class='row headcolor mt-1'>"
                //Query = Query + "<div class=''>"
                Query = Query + "<h4 class='h4mrgbtm'><i class='fa fa-cutlery' aria-hidden='true'></i>" + result[i].name + "</h4>"
                Query = Query + "<div class='menuList1'>"
                Query = Query + "<label class='menulbl mr-1' data-toggle='modal' data-target='#sublevel' onclick='bidnsublevel1id(" + result[i].RestroMenuLevel1Id + ")'>Sublevel</label><label id='test' class='menulbl mr-1' onclick='BindItemclick(" + result[i].RestroMenuLevel1Id + "," + '"' + result[i].name + '"' + "," + '"' + result[i].level + '"' + ")'>Add Item</label><label class='' id='level1edit_" + '' + result[i].RestroMenuLevel1Id + "' onclick='editlevel(" + result[i].RestroMenuLevel1Id + "," + '"' + result[i].name + '"' + ")'><img src='../../Content/images/edit2020.png' style='width: 74%;'/></label><label class='' id='level3delete_" + '' + result[i].RestroMenuLevel1Id + "' onclick='delconfirmpopup(" + result[i].RestroMenuLevel1Id + "," + '"' + result[i].name + '"' + "," + '1' + ")'><img src='../../Content/images/delete-icon-sm.png' /></label>"
                Query = Query + "</div></div></div> </a>"

                BindLevel1(result[i].RestroMenuLevel1Id);
                Query = Query + "</div>";




            }
            // jquery_min_p("#divlevel1").append(Query);
            jquery_min_p("#preloader").css('display', 'none');
            jquery_min_p("#Overlay_Load").css('visibility', 'hidden');
        },

        beforesend: function () {
            jquery_min_p("#preloader").css('display', 'block');
            jquery_min_p("#Overlay_Load").css('visibility', 'visible');
        }


    });
    jquery_min_p("#divmenucreation").append(Query);
    //console.log(Query);

}

function bidnsublevel1id(RestroMenuLevel1Id) {
    jquery_min_p("#lblmenulevel1id").text(RestroMenuLevel1Id);
    jquery_min_p("#btnsublevel").text('Save');
    jquery_min_p("#txtsublevel").val("");

    // alert(jquery_min_p("#lblmenulevel1id").text());
}

function BindLevel1(RestroMenuLevel1Id) {
    var id = '#itemlevel1table_' + RestroMenuLevel1Id;
    jquery_min_p(id + 'tbody').empty();
    //jquery_min_p(id tbody").empty();
    var restromenuid = jquery_min_p("#ddlselectmenu").val();
    restroid = jquery_min_p("#lblrestroid").text();

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/MenuCreation/BindItemLevel1",
        data: "{'restroid':'" + restroid + "','restromenuid':'" + restromenuid + "','RestroMenuLevel1Id':'" + RestroMenuLevel1Id + "'}",
        dataType: "json",
        async: false,
        success: function (result) {

            var i = 0;

            var row = "";
            var row1 = "";
            var row2 = "";
            var ArrayCount = result.length;
            if (ArrayCount > 0) {

                Query = Query + "<div id='level1item_" + '' + RestroMenuLevel1Id + "' class='panel-collapse collapse show'>"
                Query = Query + "<div class='panel-body'>"
                Query = Query + "<div class='row'>"
                Query = Query + "<table class='tblscroll' id='itemlevel1table_" + '' + RestroMenuLevel1Id + "'>"
                Query = Query + "<thead><tr> <th>Item Name</th><th>Item Price</th><th>Edit</th><th>Delete</th></tr></thead>"
                Query = Query + "<tbody>"
                //var id = '#itemlevel1table_' + RestroMenuLevel1Id;
                //jquery_min_p(id).append(row1);
                for (var i = 0; i < ArrayCount; i++) {
                    Query = Query + "<tr>"
                    Query = Query + "<td>" + result[i].itemname + "</td>"
                    Query = Query + "<td>" + result[i].itemPrice + "</td>"
                    Query = Query + "<td><i class='fa fa-pencil-square-o' aria-hidden='true' id='itemlevel1edit_" + '' + RestroMenuLevel1Id + "' onclick='edititem(" + result[i].RestroMenuItemId + "," + '"' + result[i].itemname + '"' + "," + '"' + result[i].itemPrice + '"' + ")'></i></td>"
                    Query = Query + "<td><i class='fa fa-trash' aria-hidden='true' id='itemlevel1delete_" + '' + RestroMenuLevel1Id + "' onclick='delconfirmpopup(" + result[i].RestroMenuItemId + "," + '"' + result[i].itemname + '"' + "," + '4' + ")'></i></td>"
                    Query = Query + "</tr>"
                }
                Query = Query + "</tbody></table>";
                Query = Query + "</div></div></div></div>"
                //var id1 = 'level1item_' + RestroMenuLevel1Id;

                //jquery_min_p(id + 'tbody').append(row);
                //jquery_min_p(id).append(row2);
                //jquery_min_p(id1).append(id);

            }

            jquery_min_p.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/MenuCreation/BindLevel2",
                data: "{'restroid':'" + restroid + "','restromenuid':'" + restromenuid + "','RestroMenuLevel1Id':'" + RestroMenuLevel1Id + "'}",
                dataType: "json",
                async: false,
                success: function (result) {

                    if (result.length > 0) {
                        var ArrayCount = result.length;

                        for (var i = 0; i < ArrayCount; i++) {
                            Query = Query + "<div class='panel-group pt-1 pl-2'>"
                            Query = Query + "<div class='panel panel-default'>"
                            Query = Query + "<a data-toggle='collapse' href='#level2item_" + '' + result[i].RestroMenuLevel2Id + "' class='acolor'>"
                            Query = Query + "<div class='panel-heading divlevel2' id='divlevel2_" + '' + result[i].RestroMenuLevel2Id + "'>"
                            Query = Query + "<div class='row headcolor mt-1'>"
                            Query = Query + "<div class=''>"
                            Query = Query + "<h4 class='h4mrgbtm'><i class='fa fa-cutlery' aria-hidden='true'></i>" + result[i].name + "</h4>"
                            Query = Query + "<div class='menuList1'>"
                            Query = Query + "<label class='menulbl mr-1' data-toggle='modal' data-target='#sublevel'  onclick='bidnsublevel2id(" + result[i].RestroMenuLevel2Id + ")'>Sublevel</label><label class='menulbl mr-1' onclick='BindItemclick(" + result[i].RestroMenuLevel2Id + "," + '"' + result[i].name + '"' + "," + '"' + result[i].level + '"' + ")'>Add Item</label><label class='' id='level2edit_" + '' + result[i].RestroMenuLevel2Id + "' onclick='editsublevel(" + result[i].RestroMenuLevel2Id + "," + '"' + result[i].name + '"' + ")'><img src='../../Content/images/edit2020.png' style='width: 74%;' /></label><label class='' id='level3delete_" + '' + result[i].RestroMenuLevelId + "' onclick='delconfirmpopup(" + result[i].RestroMenuLevel2Id + "," + '"' + result[i].name + '"' + "," + '2' + ")'><img src='../../Content/images/delete-icon-sm.png' /></label>"
                            Query = Query + "</div></div></div></div></a>"
                            BindItemLevel2(result[i].RestroMenuLevel2Id);




                        }
                        // jquery_min_p("#divlevel2").append(Query);

                    }
                }
            });



        }
    });
}

function bidnsublevel2id(RestroMenuLevel2Id) {
    jquery_min_p("#lblmenulevel2id").text(RestroMenuLevel2Id);
    // alert(jquery_min_p("#lblmenulevel1id").text());
    jquery_min_p("#btnsublevel").text('Save');
    jquery_min_p("#txtsublevel").val("");
}


function BindItemLevel2(RestroMenuLevel2Id) {

    var id = '#itemlevel2table_' + RestroMenuLevel2Id;
    jquery_min_p(id + 'tbody').empty();
    //jquery_min_p("#itemlevel2table tbody").empty();
    var restromenuid = jquery_min_p("#ddlselectmenu").val();
    restroid = jquery_min_p("#lblrestroid").text();

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/MenuCreation/BindItemLevel2",
        data: "{'restroid':'" + restroid + "','restromenuid':'" + restromenuid + "','RestroMenuLevel2Id':'" + RestroMenuLevel2Id + "'}",
        dataType: "json",
        async: false,
        success: function (result) {

            var i = 0;

            var row = "";
            var row1 = "";
            var row2 = "";
            var ArrayCount = result.length;
            if (result.length > 0) {
                Query = Query + "<div id='level2item_" + '' + RestroMenuLevel2Id + "' class='panel-collapse collapse show'>"
                Query = Query + "<div class='panel-body'>"
                Query = Query + "<div class='row'>"

                Query = Query + "<table class='itemlevel2table tblscroll' id='itemlevel2table_" + '' + RestroMenuLevel2Id + "'>"
                Query = Query + "<thead><tr> <th>Item Name</th><th>Item Price</th><th>Edit</th><th>Delete</th></tr></thead>"
                Query = Query + "<tbody>"
                //var id = '#itemlevel2table_' + RestroMenuLevel2Id;
                //jquery_min_p(id).append(row1);
                for (var i = 0; i < ArrayCount; i++) {
                    Query = Query + "<tr>";
                    Query = Query + "<td>" + result[i].itemname + "</td>";
                    Query = Query + "<td>" + result[i].itemPrice + "</td>";
                    Query = Query + "<td><i class='fa fa-pencil-square-o' aria-hidden='true' id='itemlevel2edit_" + '' + RestroMenuLevel2Id + "' onclick='edititem(" + result[i].RestroMenuItemId + "," + '"' + result[i].itemname + '"' + "," + '"' + result[i].itemPrice + '"' + ")'></i></td>"
                    Query = Query + "<td><i class='fa fa-trash' aria-hidden='true' id='itemlevel2delete_" + '' + RestroMenuLevel2Id + "' onclick='delconfirmpopup(" + result[i].RestroMenuItemId + "," + '"' + result[i].itemname + '"' + "," + '4' + ")'></i></td>"
                    Query = Query + "</tr>";
                }
                Query = Query + "</tbody></table>"
                Query = Query + "</div></div></div>"
                //jquery_min_p(id + 'tbody').append(row);
                //jquery_min_p(id).append(row2);
                //var id1 = 'level1item_' + RestroMenuLevel2Id;
                //jquery_min_p(id1).append(id);
            }

            jquery_min_p.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/MenuCreation/BindLevel3",
                data: "{'restroid':'" + restroid + "','restromenuid':'" + restromenuid + "','RestroMenuLevel2Id':'" + RestroMenuLevel2Id + "'}",
                dataType: "json",
                async: false,
                success: function (result) {
                    var ArrayCount = result.length;
                    if (result.length > 0) {


                        for (var i = 0; i < ArrayCount; i++) {

                            Query = Query + "<div class='panel-group pt-1 pl-3 pr-0'>"
                            Query = Query + "<div class='panel panel-default'>"
                            Query = Query + "<a data-toggle='collapse' href='#level3item_" + '' + result[i].RestroMenuLevel3Id + "' class='acolor'>"
                            Query = Query + "<div class='panel-heading divlevel3' id='divlevel3_" + '' + result[i].RestroMenuLevel3Id + "'>"
                            Query = Query + "<div class='row headcolor mt-1'>"
                            Query = Query + "<div class=''>"
                            Query = Query + "<h4 class='h4mrgbtm'><i class='fa fa-cutlery' aria-hidden='true'></i>" + result[i].name + "</h4>"
                            Query = Query + "<div class='menuList1'>"
                            Query = Query + "<label class='menulbl mr-1' onclick='BindItemclick(" + result[i].RestroMenuLevel3Id + "," + '"' + result[i].name + '"' + "," + '"' + result[i].level + '"' + ")'>Add Item</label><label class='' id='level3edit_" + '' + result[i].RestroMenuLevel3Id + "' onclick='editsublevel2(" + result[i].RestroMenuLevel3Id + "," + '"' + result[i].name + '"' + ")'><img src='../../Content/images/edit2020.png' style='width: 74%;' /></label><label class='' id='level3delete_" + '' + result[i].RestroMenuLevel3Id + "' onclick='delconfirmpopup(" + result[i].RestroMenuLevel3Id + "," + '"' + result[i].name + '"' + "," + '3' + ")'><img src='../../Content/images/delete-icon-sm.png' /></label>"
                            Query = Query + "</div></div></div></div></a>"
                            BindItemLevel3(result[i].RestroMenuLevel3Id);




                        }
                        //jquery_min_p("#divlevel3").append(Query);

                    }
                }
            });


            Query = Query + "</div></div>";
        }
    });
}

//function bidnsublevel3id(RestroMenuLevel3Id)
//{
//    jquery_min_p("#lblmenulevel3id").text(RestroMenuLevel3Id);
//}


function BindItemLevel3(RestroMenuLevel3Id) {

    var id = '#itemlevel3table_' + RestroMenuLevel3Id;
    jquery_min_p(id + 'tbody').empty();
    //jquery_min_p("#itemlevel3table tbody").empty();
    var restromenuid = jquery_min_p("#ddlselectmenu").val();
    restroid = jquery_min_p("#lblrestroid").text();

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/MenuCreation/BindItemLevel3",
        data: "{'restroid':'" + restroid + "','restromenuid':'" + restromenuid + "','RestroMenuLevel3Id':'" + RestroMenuLevel3Id + "'}",
        dataType: "json",
        async: false,
        success: function (result) {

            var i = 0;

            var row = "";
            var row1 = "";
            var row2 = "";
            var ArrayCount = result.length;
            if (result.length > 0) {
                Query = Query + "<div id='level3item_" + '' + RestroMenuLevel3Id + "' class='panel-collapse collapse show'>"
                Query = Query + "<div class='panel-body'>"
                Query = Query + "<div class='row'>"
                Query = Query + "<table class='itemlevel3table tblscroll' id='itemlevel3table_" + '' + RestroMenuLevel3Id + "'>"
                Query = Query + "<thead><tr> <th>Item Name</th><th>Item Price</th><th>Edit</th><th>Delete</th></tr></thead>"
                Query = Query + "<tbody>"
                //var id = '#itemlevel3table_' + RestroMenuLevel3Id;
                //jquery_min_p(id).empty();
                //jquery_min_p(id).append(row1);


                for (var i = 0; i < ArrayCount; i++) {



                    Query = Query + "<tr>"

                    Query = Query + "<td>" + result[i].itemname + "</td>"
                    Query = Query + "<td>" + result[i].itemPrice + "</td>"
                    Query = Query + "<td><i class='fa fa-pencil-square-o' aria-hidden='true' id='itemlevel3edit_" + '' + RestroMenuLevel3Id + "' onclick='edititem(" + result[i].RestroMenuItemId + "," + '"' + result[i].itemname + '"' + "," + '"' + result[i].itemPrice + '"' + ")'></i></td>"
                    Query = Query + "<td><i class='fa fa-trash' aria-hidden='true' id='itemlevel3delete_" + '' + RestroMenuLevel3Id + "' onclick='delconfirmpopup(" + result[i].RestroMenuItemId + "," + '"' + result[i].itemname + '"' + "," + '4' + ")'></i></td>"
                    Query = Query + "</tr>"

                }
                Query = Query + "</tbody></table>"
                Query = Query + "</div></div></div></div></div></div>"

                //console.log(Query);
                //jquery_min_p(id + 'tbody').append(row);
                //jquery_min_p(id).append(row2);

                //var id1 = 'level1item_' + RestroMenuLevel3Id;
                //jquery_min_p(id1).append(id);



            }
            Query = Query + "</div></div>";
        }
    });

}

function edititem(RestroMenuItemId, itemName, itemPrice) {

    jquery_min_p('#editItem').on('shown.bs.modal', function () {
        jquery_min_p('#txtedititemprice').focus();
    })

    bootstrap_min_p("#editItem").modal('show');
    jquery_min_p("#lbledititemid").text(RestroMenuItemId);

    jquery_min_p("#lbledititemname").text(itemName);

    jquery_min_p("#txtedititemprice").val(itemPrice);



}

function deleteitem() {
    var restromenuid = jquery_min_p("#ddlselectmenu").val();
    restroid = jquery_min_p("#lblrestroid").text();

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/MenuCreation/DeleteItem",
        data: "{'restrolevelid':'" + restrolevelid + "','restromenuid':'" + restromenuid + "','restroid':'" + restroid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            if (result[i].result == 1) {
                jquery_min_p("#hwarning").text("Item Cannot Be Deleted!!");
                bootstrap_min_p("#WarningPopup").modal('show');
            }
            else {


                //bootstrap_min_p("#deletePopupconfirm").modal('hide');
                jquery_min_p("#popupsuccess").text("Item Deleted Successfully");
                bootstrap_min_p("#savePopup").modal('show');

                BindItem();
            }

        }
    });
    // BindLevel();
    // window.location.reload(true);

}


function Savelevel1() {
    var restromenuid = jquery_min_p("#ddlselectmenu").val();
    restroid = jquery_min_p("#lblrestroid").text();
    var levelname = jquery_min_p("#txtlevel").val();
    var RestroMenulevel1id = jquery_min_p("#lbleditlevelid").val();



    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/MenuCreation/InsertLevel1",
        data: "{'restroid':'" + restroid + "','restromenuid':'" + restromenuid + "','levelname':'" + levelname + "','RestroMenulevel1id':'" + RestroMenulevel1id + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            if (result.length > 0) {

                var i = 0;

                if (result[i].result == "1") {

                    jquery_min_p("#popupsuccess").text("Level Saved Successfully");
                }
                if (result[i].result == "2") {
                    jquery_min_p("#popupsuccess").text("Level Updated Successfully");
                }
                //jquery_min_p("#popupsuccess").text("Item Saved Successfully");
                bootstrap_min_p("#savePopup").modal('show');

                Reset();
            }
        }
    });
    // BindLevel();
    // window.location.reload(true);

}

function Savelevel2() {
    var menulevel1id = "";
    var menulevel2id = "";
    var menulevel3id = "";
    var restromenuid = jquery_min_p("#ddlselectmenu").val();
    restroid = jquery_min_p("#lblrestroid").text();
    var levelname = jquery_min_p("#txtsublevel").val();
    menulevel1id = jquery_min_p("#lblmenulevel1id").text().trim();
    menulevel2id = jquery_min_p("#lblmenulevel2id").text().trim();
    // menulevel3id = jquery_min_p("#lblmenulevel3id").text().trim();
    var RestroMenulevel1id = jquery_min_p("#lbleditlevel1id").val();
    var RestroMenulevel2id = jquery_min_p("#lbleditlevel2id").val();

    if (RestroMenulevel2id == "" && menulevel2id == "") {

        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/MenuCreation/InsertLevel2",
            data: "{'restroid':'" + restroid + "','restromenuid':'" + restromenuid + "','levelname':'" + levelname + "','menulevel1id':'" + menulevel1id + "','RestroMenulevel1id':'" + RestroMenulevel1id + "'}",
            dataType: "json",
            async: false,
            success: function (result) {
                if (result.length > 0) {
                    var i = 0;

                    if (result[i].result == "1") {

                        jquery_min_p("#popupsuccess").text("Level Saved Successfully");
                    }
                    if (result[i].result == "2") {
                        jquery_min_p("#popupsuccess").text("Level Updated Successfully");
                    }

                    //jquery_min_p("#popupsuccess").text("Item Saved Successfully");
                    bootstrap_min_p("#savePopup").modal('show');

                    Reset();
                }
            }
        });
        // BindLevel();
        // jquery_min_p("#btnsublevel").text('Save');
    }
    else {

        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/MenuCreation/InsertLevel3",
            data: "{'restroid':'" + restroid + "','restromenuid':'" + restromenuid + "','levelname':'" + levelname + "','menulevel2id':'" + menulevel2id + "','RestroMenulevel2id':'" + RestroMenulevel2id + "'}",
            dataType: "json",
            async: false,
            success: function (result) {
                if (result.length > 0) {


                    var i = 0;

                    if (result[i].result == "1") {

                        jquery_min_p("#popupsuccess").text("Level Saved Successfully");
                    }
                    if (result[i].result == "2") {
                        jquery_min_p("#popupsuccess").text("Level Updated Successfully");
                    }
                    // jquery_min_p("#popupsuccess").text("Item Saved Successfully");
                    bootstrap_min_p("#savePopup").modal('show');

                    Reset();

                }
            }
        });
        //BindLevel();
        //jquery_min_p("#btnsublevel").text('Save');
    }

}

function BindItemclick(RestrolevelId, name,level) {
    jquery_min_p("#lbllevelid").text(RestrolevelId);
    jquery_min_p("#hlevel").text(name);
    jquery_min_p("#lbllevel").val(level);

    BindItem();

}


function Insertitemlevel3() {
    var dtitem = "";
    dtitem = "<dtXml>";
    var restrolevelid = jquery_min_p("#lbllevelid").text();
    var restromenuid = jquery_min_p("#ddlselectmenu").val();
    var level = jquery_min_p("#lbllevel").val();

    restroid = jquery_min_p("#lblrestroid").text();


    //if (sittingsectionId.trim() == '') {
    //    alert('please select sitting section first')
    //    return false;
    //}
    //else {
    //alert(SittingSetionId);
    jquery_min_p('#itemTable tbody').find('tr').each(function (e) {
        var row = jquery_min_p(this).closest('tr');
        if (row.find("#chk").prop("checked") == true) {
            var itemid = row.find('td:nth-child(1)').text().trim();
            var itemprice = row.find('td:nth-child(4)').text().trim();
            dtitem += "<dtXml ";
            dtitem += 'itemprice="' + itemprice + '" ';
            dtitem += 'itemid="' + itemid + '" ';

            dtitem += " />";


        }

    });
    dtitem += "</dtXml>";

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/MenuCreation/Insertitemlevel3",
        data: "{'restroid':'" + restroid + "','restromenuid':'" + restromenuid + "','restrolevelid':'" + restrolevelid + "','dtitem':'" + dtitem + "','level':'" + level + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            if (result.length > 0) {
                jquery_min_p("#popupsuccess").text("Item Saved Successfully");
                bootstrap_min_p("#savePopup").modal('show');

            }
        }
    });
    //BindLevel();
    BindItem();
    // window.location.reload(true);



}


function updateitemprice() {
    bootstrap_min_p("#confirmationPopup").modal('hide');
    var RestroMenuItemId = jquery_min_p("#lbledititemid").text();
    var itemprice = jquery_min_p("#txtedititemprice").val();
    if (itemprice == "") {
        jquery_min_p("#txtedititemprice").addClass('validate');
    }
    else {

        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/MenuCreation/UpdateItemPrice",
            data: "{'RestroMenuItemId':'" + RestroMenuItemId + "','itemprice':'" + itemprice + "'}",
            dataType: "json",
            async: false,
            success: function (result) {
                if (result.length > 0) {
                    bootstrap_min_p("#editItem").modal('hide');
                    jquery_min_p("#popupsuccess").text("Item Updated Successfully");
                    bootstrap_min_p("#savePopup").modal('show');

                    BindItem();
                }
            }
        });
    }
    // BindLevel();
    // window.location.reload(true);
}

function defaultMenu() {
    restroid = jquery_min_p("#lblrestroid").text();
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/MenuCreation/defaultMenu",
        data: "{'restroid':'" + restroid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            IsCurrent = result[i].IsCurrent;
            if (IsCurrent == true) {
                IsCurrent = 1;
            }
            else {
                IsCurrent = 0;
            }

        }
    });
    BindLevel();
    // window.location.reload(true);
}

function editlevel(RestroMenulevelId, name) {
    jquery_min_p("#lbleditlevelid").val("");
    jquery_min_p("#haddlevel").text('Update Level');
    jquery_min_p("#btnsavelevel").text('Update');
    bootstrap_min_p("#addlevel").modal('show');

    jquery_min_p("#lbleditlevelid").val(RestroMenulevelId);
    jquery_min_p("#txtlevel").val(name);
    //alert(jquery_min_p("#lbleditlevelid").val());

}

function editsublevel(RestroMenulevel1Id, name) {
    jquery_min_p("#btnsublevel").text("");
    jquery_min_p("#lbleditlevel1id").val("");
    jquery_min_p("#btnsublevel").text('Update');
    bootstrap_min_p("#sublevel").modal('show');
    jquery_min_p("#lbleditlevel1id").val(RestroMenulevel1Id);
    jquery_min_p("#txtsublevel").val(name);
    levelname = name;
    //alert(jquery_min_p("#lbleditlevel1id").val());

}

function editsublevel2(RestroMenulevel2Id, name) {
    jquery_min_p("#btnsublevel").text("");
    jquery_min_p("#lbleditlevel2id").val("");

    jquery_min_p("#lbleditlevel2id").val(RestroMenulevel2Id);
    jquery_min_p("#txtsublevel").val(name);
    //alert(jquery_min_p("#lbleditlevel2id").val());
    jquery_min_p("#btnsublevel").text('Update');
    bootstrap_min_p("#sublevel").modal('show');
    levelname = name;

}

function deletelevel() {
    //jquery_min_p("#hconfirmdel").text("Are You Sure you want to delete??");
    //bootstrap_min_p("#deletePopup1").modal('show');
    //jquery_min_p("#lbldellevelid").text(RestroMenulevel1Id);
    //var confirm=jquery_min_p("#hdnconfirm").val();
    var restromenuid = jquery_min_p("#ddlselectmenu").val();
    restroid = jquery_min_p("#lblrestroid").text();
    //if (confirm == 1) {
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/MenuCreation/DeleteLevel1",
        data: "{'restroid':'" + restroid + "','restrolevelid':'" + restrolevelid + "','restromenuid':'" + restromenuid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i=0;

            //if (result[i].result == 1) {
            //    jquery_min_p("#hwarning").text("Menu Level Cannot Be Deleted!!");
            //    bootstrap_min_p("#WarningPopup").modal('show');
            //}
            //else {
                if (result.length > 0) {
                    // bootstrap_min_p("#deletePopupconfirm").modal('hide');
                    jquery_min_p("#popupsuccess").text("MenuLevel Deleted Successfully");
                    bootstrap_min_p("#savePopup").modal('show');

                    BindItem();
                }
            

        }
    });
    //}
    //else {
    //    bootstrap_min_p("#deletePopup1").modal('hide');
    //}
    // BindLevel();
    // window.location.reload(true);
}

function deletesublevel1() {
    //jquery_min_p("#lbldellevel1id").text(RestroMenulevel2Id);
    var restromenuid = jquery_min_p("#ddlselectmenu").val();
    restroid = jquery_min_p("#lblrestroid").text();
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/MenuCreation/DeleteLevel2",
        data: "{'restroid':'" + restroid + "','restrolevelid':'" + restrolevelid + "','restromenuid':'" + restromenuid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            //if (result[i].result == 1) {
            //    jquery_min_p("#hwarning").text("Menu Level Cannot Be Deleted!!");
            //    bootstrap_min_p("#WarningPopup").modal('show');
            //}
            //else {

                if (result.length > 0) {
                    // bootstrap_min_p("#deletePopupconfirm").modal('hide');
                    jquery_min_p("#popupsuccess").text("MenuLevel Deleted Successfully");
                    bootstrap_min_p("#savePopup").modal('show');

                    BindItem();
                }
            
        }
    });
    //BindLevel();
    //window.location.reload(true);
}

function deletesublevel2() {
    var restromenuid = jquery_min_p("#ddlselectmenu").val();
    //jquery_min_p("#lbldellevel2id").text(RestroMenulevel3Id);
    restroid = jquery_min_p("#lblrestroid").text();
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/MenuCreation/DeleteLevel3",
        data: "{'restroid':'" + restroid + "','restrolevelid':'" + restrolevelid + "','restromenuid':'" + restromenuid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            //if (result[i].result == 1) {
            //    jquery_min_p("#hwarning").text("Menu Level Cannot Be Deleted!!");
            //    bootstrap_min_p("#WarningPopup").modal('show');
            //}
            //else {
                if (result.length > 0) {
                    // bootstrap_min_p("#deletePopupconfirm").modal('hide');
                    jquery_min_p("#popupsuccess").text("MenuLevel Deleted Successfully");
                    bootstrap_min_p("#savePopup").modal('show');

                    BindItem();
                }
            

        }
    });
    //BindLevel();
    //window.location.reload(true);
}

function delconfirmpopup(id, level, menulevelid) {
    if (menulevelid == 4)//Items
    { jquery_min_p("#hconfirmdel").text("Are You Sure to Delete " + level + " Item ??"); }
    else if (menulevelid == 5)//Menu
    { jquery_min_p("#hconfirmdel").text("Are You Sure to Delete " + level + " Menu ??"); }
    else
    {
        jquery_min_p("#hconfirmdel").text("Are You Sure to Delete " + level + "  (Level " + menulevelid + ") ??");
    }
    bootstrap_min_p("#deletePopup1").modal('show');
    //jquery_min_p("#lbldellevelid").text(id);
    //jquery_min_p("#lbllevelid").text(levelid);
    restrolevelid = id;
    levelid = menulevelid;

}

//function Updatelevel() {
//    restroid = jquery_min_p("#lblrestroid").text();

//    var RestroMenulevelid = jquery_min_p("#lbleditlevelid").text();
//    var updatedlevelname = jquery_min_p("#txtupdatelevel").val();
//    var restromenuid = jquery_min_p("#ddlselectmenu").val();

//    jquery_min_p.ajax({
//        type: "POST",
//        contentType: "application/json; charset=utf-8",
//        url: "/MenuCreation/Updatelevel",
//        data: "{'restroid':'" + restroid + "','RestroMenulevelid':'" + RestroMenulevelid + "','updatedlevelname':'" + updatedlevelname + "','restromenuid':'" + restromenuid + "'}",
//        dataType: "json",
//        async: false,
//        success: function (result) {
//           jquery_min_p("#popupsuccess").text("LevelName Updated Successfully");
//           bootstrap_min_p("#savePopup").modal('show');
//            BindLevel();
//        }
//    });

//}

function Reset() {
    jquery_min_p("#lblmenulevel1id").text("");
    jquery_min_p("#lblmenulevel2id").text("");
    jquery_min_p("#lblmenulevel3id").text("");
    jquery_min_p("#lbleditlevelid").val("");
    jquery_min_p("#lbleditlevel1id").val("");
    jquery_min_p("#lbleditlevel2id").val("");
    jquery_min_p("#txtlevel").val("");
    jquery_min_p("#txtsublevel").val("");
    jquery_min_p("#lbledititemid").text("");
    jquery_min_p("#txtedititemprice").val("");
    jquery_min_p("#lbllevelid").text("");
    IsCurrent = 0;

}

function RemoveClass() {
    if (jquery_min_p("#txtmenuname").val() != "") {
        jquery_min_p("#txtmenuname").removeClass('validate');

    }
    if (jquery_min_p("#txtlevel").val() != "") {
        jquery_min_p("#txtlevel").removeClass('validate');

    }
    if (jquery_min_p("#txtsublevel").val() != "") {
        jquery_min_p("#txtsublevel").removeClass('validate');

    }

    if (jquery_min_p("#txtedititemprice").val() != "") {
        jquery_min_p("#txtedititemprice").removeClass('validate');

    }



}



function printResult() {

    
//    var documentcontainer = document.getelementbyid('divprntmenucreation');
  
//    var windowobject = window.open('', "printwindow", "width=750,height=650,top=50,left=50");


//    windowobject.document.writeln(documentcontainer.innerhtml);

//    windowobject.document.getElementById('divprntmenucreation').style.display = 'block';

   
//    windowobject.document.close();
//    windowobject.focus();
//    windowobject.print();   
////postbutton.style.visibility = 'visible';
//        windowobject.close();



    


    var divContents = jquery_min_p("#divprntmenucreation").html();
    var printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Menu</title>');
    printWindow.document.write('</head><body >');
    printWindow.document.write(divContents);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();


    //var myPrintContent = document.getElementById('divprntmenucreation');
    ////window.open("pdfUrl", "windowName", myPrintContent);
    //var myPrintWindow = window.open('', "PrintWindow", 'left=300,top=100,width=400,height=400');
    //myPrintWindow.document.writeln(myPrintContent.innerHTML);
    //myPrintWindow.document.getElementById('divprntmenucreation').css('display', 'block');
    ////jquery_min_p('#divprntmenucreation').css('display', 'block');

    //myPrintWindow.document.close();
    //myPrintWindow.focus();
    //myPrintWindow.print();
    //myPrintWindow.close();
    //return false;


   // var printContent = document.getElementById('divprntmenucreation');

    
   // //var printWindow = window.open(windowUrl, windowName, 'left=500,top=500,width=0,height=0');
   // var printWindow = window.open('', "PrintWindow", 'left=300,top=100,width=400,height=400');
   // printWindow.document.write(printContent.innerHTML);

   // printWindow.document.getElementById('divprntmenucreation').style.display = 'block';
   //// printWindow.document.write(printContent.innerHTML);

   // printWindow.document.close();
   // printWindow.focus();
   // printWindow.print();

   // printWindow.close();

   // return false;




}




function PrintBindRestroImage() {
    var id = restroid

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Home/BindResturantDetail",
        data: "{'id':'" + id + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsonData = eval(result);
            //console.log(result);
            jquery_min_p('#prntimgPreview').attr("src", jsonData[0].Base64Image);
            //var path = "/RestroImage/" + id + ".jpg";


            //jquery_min_p('#prntimgPreview').attr("src", path);
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

function PrintBindLevel() {
    jquery_min_p("#divmenugrid").css("display", "block");
    jquery_min_p(".noDataMsg").css("display", "block");
    jquery_min_p("#divhlevel").css("display", "none");
    jquery_min_p("#divitemtbl").css("display", "none");
    jquery_min_p("#divmenucreation").html("");
    Query = "";
    var restromenutext = jquery_min_p("#ddlselectmenu option:selected").text();

    var restromenuid = jquery_min_p("#ddlselectmenu").val();
    restroid = jquery_min_p("#lblrestroid").text();
    jquery_min_p("#hmenu").text(restromenutext);
    
   jquery_min_p("#divprntmenucreation").html("");

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/MenuCreation/BindLevel1",
        data: "{'restroid':'" + restroid + "','restromenuid':'" + restromenuid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;

            jquery_min_p("#divlevel1").html("");
            var ArrayCount = result.length;

            Query = Query +"<div style='margin: 1px auto;padding: 1px;border-radius: 1px;border: 2px solid #cdcdcd;background-color: #fbfbfb'>";
            Query = Query +" <div style='position: relative;'>";
            Query = Query +"<h3 style='text-align:center;text-transform: uppercase;'>"+jquery_min_p("#lblRestroName").text()+"</h3>";
            Query = Query + "<div style='height:8px;overflow:hidden;position: absolute;top: -15px;'><span><img src='/RestroImage/"+restroid+".jpg' style='width: 100%;'/></span></div>";
            Query = Query + "</div>";
           
            for (var i = 0; i < ArrayCount; i++) {                
                Query = Query +"<h5 style='background-color: #607377;padding: 2px 1px 2px 2px;color:#ffffff;margin-bottom: 2px;margin-top: 1px;font-family: arial, sans-serif;'>"+result[i].name+"</h5>"
               
                PrintBindLevel1(result[i].RestroMenuLevel1Id);
            }

            
            jquery_min_p("#preloader").css('display', 'none');
            jquery_min_p("#Overlay_Load").css('visibility', 'hidden');
        },

        beforesend: function () {
            jquery_min_p("#preloader").css('display', 'block');
            jquery_min_p("#Overlay_Load").css('visibility', 'visible');
        }


    });
    Query = Query + "</div>";
    console.log(Query);
    jquery_min_p("#divprntmenucreation").append(Query);
    BindMenu();
    defaultMenu();

}




function PrintBindLevel1(RestroMenuLevel1Id) {
    var id = '#itemlevel1table_' + RestroMenuLevel1Id;
    jquery_min_p(id + 'tbody').empty();
    
    var restromenuid = jquery_min_p("#ddlselectmenu").val();
    restroid = jquery_min_p("#lblrestroid").text();

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/MenuCreation/BindItemLevel1",
        data: "{'restroid':'" + restroid + "','restromenuid':'" + restromenuid + "','RestroMenuLevel1Id':'" + RestroMenuLevel1Id + "'}",
        dataType: "json",
        async: false,
        success: function (result) {

            var i = 0;

            var row = "";
            var row1 = "";
            var row2 = "";
            var ArrayCount = result.length;
            if (ArrayCount > 0) {
                Query = Query + "<div style='margin-bottom: 1%;height:8px;' id='level1item_" + '' + RestroMenuLevel1Id + "'>"
                Query = Query + "<table style='border: 1px solid #cdcdcd;font-family: arial, sans-serif; id='itemlevel1table_" + '' + RestroMenuLevel1Id + "'>"
                    Query = Query +" <thead style='background: #90aaad;'>"
                     Query = Query +"<tr style='text-align: left;font-size: 12px;'>"
                      Query = Query +"<th style='padding: 5px 0px 5px 5px;'>Item Name</th>"
                      Query = Query + "<th style='padding: 5px 0px 5px 5px;'>Item Price</th>"
                      Query = Query + "</tr>"
                      Query = Query +"</thead>"
                      Query = Query + " <tbody>"
                      var count = 0;
                      for (var i = 0; i < ArrayCount; i++) {

                          if (count % 2 == 0) {
                              Query = Query + "<tr style='font-size: 12px;'>"
                              Query = Query + "<td style='padding: 5px 0px 5px 5px;'>" + result[i].itemname + "</td>"
                              Query = Query + "<td style='padding: 5px 0px 5px 5px;'>" + result[i].itemPrice + "</td>"
                              Query = Query + "</tr>"
                              count++;
                          }
                          else {
                              Query = Query + "<tr style='background-color: #d7dfe0;font-size: 12px;'>"
                              Query = Query + "<td style='padding: 5px 0px 5px 5px;'>" + result[i].itemname + "</td>"
                              Query = Query + "<td style='padding: 5px 0px 5px 5px;'>" + result[i].itemPrice + "</td>"
                              Query = Query + "</tr>"
                              count++;
                          }
                }
                      Query = Query + "</tbody> </table>  ";
                      Query = Query + "</div>";

            }

            jquery_min_p.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/MenuCreation/BindLevel2",
                data: "{'restroid':'" + restroid + "','restromenuid':'" + restromenuid + "','RestroMenuLevel1Id':'" + RestroMenuLevel1Id + "'}",
                dataType: "json",
                async: false,
                success: function (result) {

                    if (result.length > 0) {
                        var ArrayCount = result.length;

                        for (var i = 0; i < ArrayCount; i++) {
                          
                            Query = Query +" <div style='margin-left: 1%;'>";//99
                            Query = Query +"<h5 style='background-color: #71a4a4;padding: 6px 0px 6px 4px;color:#ffffff;margin-bottom: 5px;margin-top:0px;font-family: arial, sans-serif;'>" + result[i].name + "</h5>"
                            PrintBindItemLevel2(result[i].RestroMenuLevel2Id);

                        }
                        
                    }
                }
            });
        }
    });
}


function PrintBindItemLevel2(RestroMenuLevel2Id) {

    var id = '#itemlevel2table_' + RestroMenuLevel2Id;
    jquery_min_p(id + 'tbody').empty();
    //jquery_min_p("#itemlevel2table tbody").empty();
    var restromenuid = jquery_min_p("#ddlselectmenu").val();
    restroid = jquery_min_p("#lblrestroid").text();

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/MenuCreation/BindItemLevel2",
        data: "{'restroid':'" + restroid + "','restromenuid':'" + restromenuid + "','RestroMenuLevel2Id':'" + RestroMenuLevel2Id + "'}",
        dataType: "json",
        async: false,
        success: function (result) {

            var i = 0;

            var row = "";
            var row1 = "";
            var row2 = "";
            var ArrayCount = result.length;
            if (result.length > 0) {
                Query = Query + " <div style='height:8px;margin-left: 1%;margin-bottom: 1%;'  id='level2item_" + '' + RestroMenuLevel2Id + "'>";
                Query = Query + "<table style='border: 1px solid #cdcdcd;font-family: arial, sans-serif;' id='itemlevel2table_" + '' + RestroMenuLevel2Id + "'>";
                Query = Query +" <thead style='background: #90aaad;'>";
                Query = Query +" <tr style='text-align: left;font-size: 12px;'>";
                    Query = Query +" <th style='padding: 5px 0px 5px 5px;'>Item Name</th>"
                    Query = Query +"<th style='padding: 5px 0px 5px 5px;'>Item Price</th>"
                    Query = Query + " </tr>"
                    Query = Query +  "</thead>"
              
                Query = Query + "<tbody>"
               
                 var count = 0;
                for (var i = 0; i < ArrayCount; i++) {
                    if (count % 2 == 0) {
                        Query = Query + "<tr style='font-size: 12px;'>"
                        Query = Query + "<td style='padding: 5px 0px 5px 5px;'>" + result[i].itemname + "</td>"
                        Query = Query + "<td style='padding: 5px 0px 5px 5px;'>" + result[i].itemPrice + "</td>"
                        Query = Query + "</tr>"
                        count++;
                    }
                    else {
                        Query = Query + "<tr style='background-color: #d7dfe0;font-size: 12px;'>"
                        Query = Query + "<td style='padding: 5px 0px 5px 5px;'>" + result[i].itemname + "</td>"
                        Query = Query + "<td style='padding: 5px 0px 5px 5px;'>" + result[i].itemPrice + "</td>"
                        
                        Query = Query + "</tr>"
                        count++;
                    }
                }
                Query = Query + "</tbody></table>"
                Query = Query +"</div></div>"
            }

            jquery_min_p.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/MenuCreation/BindLevel3",
                data: "{'restroid':'" + restroid + "','restromenuid':'" + restromenuid + "','RestroMenuLevel2Id':'" + RestroMenuLevel2Id + "'}",
                dataType: "json",
                async: false,
                success: function (result) {
                    var ArrayCount = result.length;
                    if (result.length > 0) {

                        for (var i = 0; i < ArrayCount; i++) {
 
                            Query = Query +" <div style='width: 98%;margin-left: 2%;'>"

                            Query = Query + "<h5 style='background-color: #8fa0a2;padding: 6px 0px 6px 4px;color:#ffffff;margin-bottom: 5px;margin-top: 0px;font-family: arial, sans-serif;'>" + result[i].name + "</h5>"

                            PrintBindItemLevel3(result[i].RestroMenuLevel3Id);

                        }
                        
                    }
                }
            });


        }
    });
}



function PrintBindItemLevel3(RestroMenuLevel3Id) {

    var id = '#itemlevel3table_' + RestroMenuLevel3Id;
    jquery_min_p(id + 'tbody').empty();
    //jquery_min_p("#itemlevel3table tbody").empty();
    var restromenuid = jquery_min_p("#ddlselectmenu").val();
    restroid = jquery_min_p("#lblrestroid").text();

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/MenuCreation/BindItemLevel3",
        data: "{'restroid':'" + restroid + "','restromenuid':'" + restromenuid + "','RestroMenuLevel3Id':'" + RestroMenuLevel3Id + "'}",
        dataType: "json",
        async: false,
        success: function (result) {

            var i = 0;

            var row = "";
            var row1 = "";
            var row2 = "";
            var ArrayCount = result.length;
            if (result.length > 0) {
                
                Query = Query + " <div style='margin-left: 2%;margin-bottom: 1%;' id='level3item_" + '' + RestroMenuLevel3Id + "'>"
                Query = Query + "  <table style='border: 1px solid #cdcdcd;font-family: arial, sans-serif;' id='itemlevel3table_" + '' + RestroMenuLevel3Id + "'>"
                Query = Query +"   <thead style='background: #90aaad;'>"
                Query = Query +"      <tr style='text-align: left;font-size: 12px;'>"
                Query = Query +"        <th style='padding: 5px 0px 5px 5px;'>Item Name</th>"
                Query = Query +"         <th style='padding: 5px 0px 5px 5px;'>Item Price</th>"
                Query = Query +"  </tr>"
                Query = Query +"    </thead>"
                Query = Query +"  <tbody>"

                var count = 0;
                for (var i = 0; i < ArrayCount; i++) {


                    if (count % 2 == 0) {
                        Query = Query + "<tr style='font-size: 12px;'>"
                        Query = Query + "<td style='padding: 5px 0px 5px 5px;'>" + result[i].itemname + "</td>"
                        Query = Query + "<td style='padding: 5px 0px 5px 5px;'>" + result[i].itemPrice + "</td>"
                        // Query = Query + "<td><i class='fa fa-pencil-square-o' aria-hidden='true' id='itemlevel1edit_" + '' + RestroMenuLevel1Id + "' onclick='edititem(" + result[i].RestroMenuItemId + "," + '"' + result[i].itemname + '"' + "," + '"' + result[i].itemPrice + '"' + ")'></i></td>"
                        // Query = Query + "<td><i class='fa fa-trash' aria-hidden='true' id='itemlevel1delete_" + '' + RestroMenuLevel1Id + "' onclick='delconfirmpopup(" + result[i].RestroMenuItemId + "," + '"' + result[i].itemname + '"' + "," + '4' + ")'></i></td>"
                        Query = Query + "</tr>"
                        count++;
                    }
                    else {
                        Query = Query + "<tr style='background-color: #d7dfe0;font-size: 12px;'>"
                        Query = Query + "<td style='padding: 5px 0px 5px 5px;'>" + result[i].itemname + "</td>"
                        Query = Query + "<td style='padding: 5px 0px 5px 5px;'>" + result[i].itemPrice + "</td>"
                        Query = Query + "</tr>"
                        count++;
                    }

                }
                Query = Query + "</tbody></table>"
                Query = Query + "</div></div>";
              
            }
          
        }
    });


   
}


