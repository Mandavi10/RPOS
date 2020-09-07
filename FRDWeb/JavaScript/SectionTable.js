var id = "";
var statusarray=[];
jquery_min_p(document).ready(function () {
    id = jquery_min_p("#lblrestroid").text();
    
    BindSittingSection();
   
    BindvacantTable();
    //jquery_min_p('#sectionTable').css('display', 'block');
    

    jquery_min_p("#divsittingsection .sectionBox").click(function () {

        $('#divsittingsection .sectionBox').removeClass('active');

        jquery_min_p("#divsittingsection .sectionBox").removeClass('active');
        jquery_min_p("#chkall").prop('checked', false);


        jquery_min_p(this).addClass('active');
        if ($('#sourceFields .sectionBox').hasClass('active')) {
            jquery_min_p('#sourceFields .sectionBox').removeClass('active');
        }
    });


    jquery_min_p('#btnsaveclose').click(function () {

        jquery_min_p('#savePopup').modal('hide');

       
    });

    //jquery_min_p('#destinationFields .sectionBox').click(function () {
    //    if ($(this).hasClass('active')) {
    //        jquery_min_p(this).removeClass('active');
    //        jquery_min_p('#sourceFields .sectionBox').each(function () {
    //            jquery_min_p(this).removeClass('active');
    //        });

    //    }
    //    else {
    //        jquery_min_p(this).addClass('active');
    //        jquery_min_p('#sourceFields .sectionBox').each(function () {
    //            jquery_min_p(this).removeClass('active');
    //        });
    //    }
    //});

    //jquery_min_p('#sourceFields .sectionBox').click(function () {
    //    if ($(this).hasClass('active')) {
    //        jquery_min_p(this).removeClass('active');
    //    }
    //    else {
    //        jquery_min_p(this).addClass('active');
    //    }
    //});


    jquery_min_p('#btnrightarrow').click(function () {
        //alert('btnrightarrow');
        var dtotarr = [];
        var dtot = '';
        var TableDataX = "<dtXml>";
        var sittingsectionId = jquery_min_p('#lblsittingsectionid').text();
        var restroId = id;

        //if (sittingsectionId.trim() == '') {
        //    alert('please select sitting section first')
        //    return false;
        //}
        //else {
            //alert(SittingSetionId);
            $('#sourceFields .sectionBox').each(function (e) {
                if ($(this).hasClass('active')) {
                    TableDataX += "<dtXml ";
                    var tableId = jquery_min_p(this)[0].id;
                    TableDataX += 'tableId="' + tableId + '" ';
                    TableDataX += 'sittingsectionId="' + sittingsectionId + '" ';
                    TableDataX += " />";


                }

            });
            TableDataX += "</dtXml>";
           
                if ($('#sourceFields .sectionBox').hasClass('active')) {

            jquery_min_p.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/SectionTable/MoveTableInDestination",
                data: "{'TableDataX':'" + TableDataX + "','restroId':'" + restroId + "'}",
                dataType: "json",
                async: false,
                success: function (result) {
                    //console.log(result[0]);
                    if (result[0].result == '1') {
                        // alert('table added to this section successfully');
                        jquery_min_p('#popupsuccess').text('Table Added To This Section successfully');
                        jquery_min_p('#savePopup').modal('show');

                       

                            BindvacantTable();

                            BindTables(sittingsectionId);
                      

                    }
                    else {
                        alert('Error');
                    }

                },

                error: function ()
                { }
            });
                   
                }
                else
                {
                   
                    jquery_min_p('#lblwarning').text('Please Select Table First');
                    jquery_min_p('#warningpopup').modal('show');
                   
                }

           

    });



    jquery_min_p('#btnleftarrow').click(function () {

        var dtotarr = [];
        var dtot = '';
        var TableDataX = "<dtXml>";
        var sittingsectionId = jquery_min_p('#lblsittingsectionid').text();
        var restroId = id;

        //if (sittingsectionId.trim() == '') {
        //    alert('please select sitting section first')
        //    return false;
        //}
        //else {
            //alert(SittingSetionId);
            $('#destinationFields .sectionBox').each(function (e) {
                if ($(this).hasClass('active')) {
                    TableDataX += "<dtXml ";
                    var tableId = jquery_min_p(this)[0].id;
                    TableDataX += 'tableId="' + tableId + '" ';
                    TableDataX += 'sittingsectionId="' + sittingsectionId + '" ';
                    TableDataX += " />";


                }

            });
            TableDataX += "</dtXml>";

            if ($('#destinationFields .sectionBox').hasClass('active')) {

            jquery_min_p.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/SectionTable/MoveTableInSource",
                data: "{'TableDataX':'" + TableDataX + "','restroId':'" + restroId + "'}",
                dataType: "json",
                async: false,
                success: function (result) {
                    console.log(result[0]);
                    if (result[0].result == '1') {
                        // alert('table added to this section successfully');
                        jquery_min_p('#popupsuccess').text('Table Remove From This Section Successfully');
                        jquery_min_p('#savePopup').modal('show');

                        BindvacantTable();

                        BindTables(sittingsectionId);

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
                jquery_min_p('#lblwarning').text('Please Select Table First');
                jquery_min_p('#warningpopup').modal('show');

            }
      //  }


    });

    jquery_min_p(".checkall").click(function () {
        debugger;
        
        if (jquery_min_p("#checkall").prop('checked') == true) {

            //do something
            jquery_min_p("#chkall").prop("checked", false);

            jquery_min_p('#sourceFields .sectionBox').each(function () {

                jquery_min_p(this).removeClass('active');

            });

            jquery_min_p('#destinationFields .sectionBox').each(function () {

                jquery_min_p(this).addClass('active');

            });
        }
        else {
            jquery_min_p('#destinationFields .sectionBox').each(function () {

                jquery_min_p(this).removeClass('active');

            });
        }

    });

    jquery_min_p("#chkall").click(function () {
        if (jquery_min_p("#chkall").prop('checked') == true) {
            jquery_min_p("#checkall").prop("checked", false);


            jquery_min_p('#sourceFields .sectionBox').each(function () {

                jquery_min_p(this).addClass('active');

            });

            jquery_min_p('#destinationFields .sectionBox').each(function () {

                jquery_min_p(this).removeClass('active');

            });

        }
        else {
            jquery_min_p('#sourceFields .sectionBox').each(function () {

                jquery_min_p(this).removeClass('active');

            });
        }
        });
    
   
});

function BindSittingSection() {
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/SectionTable/BindSittingSection",
        data: "{'id':'" + id + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsonData = result;
            var ArrayCount = result.length;
            var Query = "";
            var Default_sittingsectionId = "";
            for (var i = 0; i < ArrayCount; i++) {
                // Query = Query + "<div class='sectionBox'>";
                if (i == 0) {
                    Default_sittingsectionId = result[i].sittingsectionId;
                    Query = Query + "<div class='sectionBox active headtblbox' onclick='BindTables(" + result[i].sittingsectionId + ")'>";
                }
                else {
                    Query = Query + "<div class='sectionBox headtblbox' onclick='BindTables(" + result[i].sittingsectionId + ")'>";
                }
                Query = Query + "<img src='/Content/images/family-icon-sm.png' />"
                Query = Query + "<h6>" + result[i].name + "</h6></div>";
            }
            jquery_min_p("#divsittingsection").append(Query);
            BindTables(Default_sittingsectionId);

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

function BindvacantTable() {
    jquery_min_p("#sourceFields").html("");    
    var restroId = id;
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/SectionTable/BindvacantTable",
        data: "{'restroId':'" + restroId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsonData = result;
            var ArrayCount = result.length;
            var Query = "";
            for (var i = 0; i < ArrayCount; i++) {
                Query = Query + "<div class='sectionBox' id='" + result[i].tableId + "' onclick='SelectElement_Source(" + result[i].tableId + ")'>";
                Query = Query + "<img src='/Content/images/table-icon-sm.png' />"
                Query = Query + "<h6>" + result[i].name + "</h6></div>";
            }
            jquery_min_p("#sourceFields").append(Query);
        },

        error: function () {
        }
    });
}

function SelectElement_Source(id)
{
    jquery_min_p("#checkall").prop('checked', false);
    id = "#" + id;
    if (jquery_min_p(id).hasClass('active')) {
        jquery_min_p(id).removeClass('active');
    }
    else {
        jquery_min_p(id).addClass('active');
    }

    jquery_min_p('#destinationFields .sectionBox').each(function () {
        if ($(this).hasClass('active')) {
            jquery_min_p(this).removeClass('active');
        }
      
    });

}

function SelectElement_Dest(id) {
    id = "#" + id;
    jquery_min_p("#chkall").prop('checked', false);
    if (jquery_min_p(id).hasClass('active')) {

        jquery_min_p(id).removeClass('active');

    }
    else {
        jquery_min_p(id).addClass('active');
    }

    jquery_min_p('#sourceFields .sectionBox').each(function () {
        if ($(this).hasClass('active')) {
            jquery_min_p(this).removeClass('active');
        }

    });
}




function BindTables(sittingsectionId) {
    jquery_min_p("#destinationFields").html("");
    // jquery_min_p("#sourceFields").html("");
    jquery_min_p("#Sectionname").html("");

    //var url = window.location.pathname;
    //var Restroid = url.substring(url.lastIndexOf('/') + 1);
    var Restroid = id;
    var sittingsectionId = sittingsectionId;

    jquery_min_p('#lblsittingsectionid').text(sittingsectionId);


    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/SectionTable/BindSittingTables",
        data: "{'sittingsectionId':'" + sittingsectionId + "','Restroid':'" + Restroid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsonData = result;
            var ArrayCount = result.length;
            //for (var i = 0; i < ArrayCount; i++)
            //{ 
            //    statusarray.push(result[i].orderstatus.trim());
            //}

            //alert(statusarray);
            var Query = "";
            var Query1 = "";
            Query1 = Query1 + "<h5>" + result[i].sittingsectionname + "</h5>";
            Query1 = Query1 + " <div class='selectAll'><input type='checkbox' onClick='CheckboxClick();'  id='checkall' class='checkall' /> Select All</div>";

            jquery_min_p("#Sectionname").append(Query1);


            for (var i = 0; i < ArrayCount; i++) {

                if (result[i].orderstatus == 'P') {
                    Query = Query + "<div class='sectionBox tblOccupied' id='" + result[i].tableId + "'>";
                    Query = Query + "<img src='/Content/images/table-icon-sm.png' />"
                    Query = Query + "<h6>" + result[i].name + "</h6></div>";
                }
                else {
                    Query = Query + "<div class='sectionBox' id='" + result[i].tableId + "' onclick='SelectElement_Dest(" + result[i].tableId + ")'>";
                    Query = Query + "<img src='/Content/images/table-icon-sm.png' />"
                    Query = Query + "<h6>" + result[i].name + "</h6></div>";
                }
            }
            jquery_min_p("#destinationFields").append(Query);


        },

        error: function () {
        }
    });

}

function CheckboxClick()
{
    if (jquery_min_p("#checkall").prop('checked') == true) {

        //do something
        jquery_min_p("#chkall").prop("checked", false);

        jquery_min_p('#sourceFields .sectionBox').each(function () {

            jquery_min_p(this).removeClass('active');

        });

        jquery_min_p('#destinationFields .sectionBox').each(function () {


            jquery_min_p(this).addClass('active');

        });
    }
    else {
        jquery_min_p('#destinationFields .sectionBox').each(function () {

            jquery_min_p(this).removeClass('active');

        });
    }

    jquery_min_p('#destinationFields .tblOccupied').each(function () {

        jquery_min_p(this).removeClass('active');

    });

}


function AddTable(tableId) {
    var divid = "#" + tableId;
    if (jquery_min_p(divid).hasClass('active')) {
        jquery_min_p(divid).removeClass('active');
    }
    else {
        jquery_min_p(divid).addClass('active');
    }
}