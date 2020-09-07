var restroitemid = 0;
var restroid = 0;
var selitemid = 0;
var orderid = "";
var deletedata = "";
var updateorderdetails = [];
var dtorder = "";
var neworderid = "";
var Rownumber = "";
var IsHold = 0;
var itemId = 0;
var IsAddon = 0;
var tempaddonId = [];
var IsRemoveUnselectItems = 0;
jquery_min_p(document).ready(function () {
    jquery_min_p("#divbackbtn").css("display", "none");
    
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('orderId');        
   
    if (myParam != null) {
        getorderid(myParam);

    }

    const urlParams1 = new URLSearchParams(window.location.search);
    const myParam1 = urlParams.get('OrderId');
    //alert(myParam1)
    if (myParam1 != null)
    {
        gettemporderid(myParam1);
       // alert('inside')
      
    }
   // alert('outside')

    BindTable();
    

    //jquery_min_p("#btnconfirm").css("display", "inline-block");
   // jquery_min_p("#btnconfirm").css("display", "inline-block");

    if (neworderid != "") {
        BindMenu();
        BindItemTable();
        BindLevel();
       
        jquery_min_p("#btnsaveorder").css("display", "inline-block");
        jquery_min_p("#btnexitrunning").css("display", "inline-block");
        jquery_min_p("#seqExit").css("display", "none");
        jquery_min_p("#btnclrorder").css("display", "none");
        jquery_min_p("#btnhold").css("display", "none");

    }

    jquery_min_p("#btnexitrunning").click(function () {
        // RemoveUnselectItems();
       IsRemoveUnselectItems = 1;
       SaveOrder();
        window.location.href = '/SalesBilling/RunningOrder';
        
    });

    jquery_min_p("#ddlselectmenu").click(function () {
        if (jquery_min_p("#tblItemlist tbody").html() !="") {
           // alert(jquery_min_p("#tblItemlist tbody").html());
            jquery_min_p("#hwarning").text("Please clear the Order Items!!")
            bootstrap_min_p("#WarningPopup").modal('show');
            jquery_min_p("#ddlselectmenu").attr("disabled", true);
        }
        else {
            jquery_min_p("#ddlselectmenu").attr("disabled", false);
        }
        
    });

    jquery_min_p("#btnback").click(function () {
        jquery_min_p("#mainmenu").css("display", "block");
        jquery_min_p("#seconddiv").css("display", "none");
        jquery_min_p("#secondleveldiv").css("display", "none");
        jquery_min_p("#thirdleveldiv").css("display", "none");
        jquery_min_p("#divitems").css("display", "none");
        jquery_min_p("#divbackbtn").css("display", "none");
        jquery_min_p('#divsearch').css('display', 'block');


    });

   

  
      BindTable();

   
   
    

    jquery_min_p("#btnconfirm").click(function () {
        BindItem();
        jquery_min_p("#btnsaveorder").css("display", "inline-block");
    });

    jquery_min_p("#btnsaveorder").click(function () {
        SaveOrder();
        jquery_min_p("#btnclrorder").css("display", "none");
    });

    
    jquery_min_p("#delsucess").click(function () {

        
            Delete();
        
        bootstrap_min_p("#deletePopup1").modal('hide');


    });
    jquery_min_p("#delcancel").click(function () {
        bootstrap_min_p("#deletePopup1").modal('hide');

    });
    jquery_min_p("#btnaddonok").click(function () {
       // IsAddon = 1;
        SaveItemAddon();
        jquery_min_p("#btnsaveorder").css("display", "inline-block");

    });
    jquery_min_p("#btnsaveok").click(function () {
        window.location.href = '/SalesBilling/RunningOrder';
    });

    jquery_min_p("#btnclrorder").click(function () {
        jquery_min_p("#popconfirm").text('Are You Sure Want To Clear Order?')
        bootstrap_min_p("#confirmPopup").modal('show');

        //ClearOrder();
        //jquery_min_p("#btnsaveorder").css("display", "none");
    });
    jquery_min_p("#btnhold").click(function () {
        jquery_min_p("#hconfirm").text('Are You Sure Want To Hold Order?')
        bootstrap_min_p("#confirmationPopup").modal('show');
        jquery_min_p("#yesBtn").click(function () {

            HoldOrder();
            //jquery_min_p("#btnsaveorder").css("display", "none");
        });
        jquery_min_p("#noBtn").click(function () {

            bootstrap_min_p("#confirmationPopup").modal('hide');

            //jquery_min_p("#btnsaveorder").css("display", "none");
        });
        //HoldOrder();
        //jquery_min_p("#btnsaveorder").css("display", "none");
    });
    

    jquery_min_p("#noBtn").click(function () {

        bootstrap_min_p("#confirmationPopup").modal('hide');

        //jquery_min_p("#btnsaveorder").css("display", "none");
    });


    jquery_min_p("#btnconfyes").click(function () {

        ClearOrder();
        jquery_min_p("#btnsaveorder").css("display", "none");
    });
    jquery_min_p("#btnconfno").click(function () {

        bootstrap_min_p("#confirmPopup").modal('hide');

        //jquery_min_p("#btnsaveorder").css("display", "none");
    });

});

function getorderid(neworder) {
   

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/DineInTakeAway/BindOrderiddinein",
        data: "{'neworder':'" + neworder + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            neworder = result;
            neworderid = neworder;
            //alert(OrderType);
            // window.location.href = '/SalesBilling/TakeAway?OrderTypeId=' + OrderType;

        }

    });

}

function gettemporderid(order) {
    

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/DineInTakeAway/BindtempOrderiddinein",
        data: "{'order':'" + order + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            order = result;
            orderid = order;
            BindMember(orderid);
            
            BindHoldItems(orderid);
            BindMenu();
            defaultMenu();
            //alert(OrderType);
            // window.location.href = '/SalesBilling/TakeAway?OrderTypeId=' + OrderType;

        }

    });

}


//this function used to move the items





function BindMenu() {
    restroid = jquery_min_p("#lblrestroid").text();
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

                if (neworderid == 0) {
                    if (result[i].IsCurrent == 1) {
                        newOption.attr('selected', 'selected');
                        // BindLevel();
                        //$('option[value=' + result[i].RestroMenuId + ']', newOption).attr('selected', 'selected');
                    }
                }

                // Append that to the DropDownList.
                $('#ddlselectmenu').append(newOption);

                // $('option[value=valueToSelect]', newOption).attr('selected', 'selected');

            }

        }
    });
}



function BindLevel() {
    jquery_min_p("#divbackbtn").css("display", "none");
    jquery_min_p('#divsearch').css('display', 'block');
        jquery_min_p("#menoInfo").css("display", "block");
        jquery_min_p("#divlevel12").html("");
        jquery_min_p("#divlevel2").html("");
        jquery_min_p("#divlevel3").html("");

        jquery_min_p("#divitemlist").html("");
        var restromenutext = jquery_min_p("#ddlselectmenu option:selected").text();


        var restromenuid = jquery_min_p("#ddlselectmenu").val();
        restroid = jquery_min_p("#lblrestroid").text();
        // jquery_min_p("#hmenu").text(restromenutext);

        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/MenuCreation/BindLevel1",
            data: "{'restroid':'" + restroid + "','restromenuid':'" + restromenuid + "'}",
            dataType: "json",
            async: false,
            success: function (result) {

                var i = 0;


                var ArrayCount = result.length;
                var Query = "";

                //Query = Query + "<div class='MultiCarousel-inner'>"
                for (var i = 0; i < ArrayCount; i++) {

                    if (result[i].name == 'Chinese') {

                        Query = Query + "<div class='menuItemBox' id='level1_" + '' + result[i].RestroMenuLevel1Id + "' onclick='BindLevel1(" + result[i].RestroMenuLevel1Id + "," + '"' + result[i].name.trim() + '"' + ")'>"
                        Query = Query + "<div class='imgheight'><img src='../../Content/images/chinese.png' /></div>"
                        Query = Query + " <h6>" + result[i].name + "</h6>"
                        Query = Query + "</div>"
                    }
                    else if (result[i].name == 'Desserts') {
                        Query = Query + "<div class='menuItemBox' id='level1_" + '' + result[i].RestroMenuLevel1Id + "' onclick='BindLevel1(" + result[i].RestroMenuLevel1Id + "," + '"' + result[i].name.trim() + '"' + ")'>"
                        Query = Query + "<div class='imgheight'><img src='../../Content/images/dessert.png' /></div>"
                        Query = Query + " <h6>" + result[i].name + "</h6>"
                        Query = Query + "</div>"
                    }
                    else if (result[i].name == 'Beverages') {
                        Query = Query + "<div class='menuItemBox' id='level1_" + '' + result[i].RestroMenuLevel1Id + "' onclick='BindLevel1(" + result[i].RestroMenuLevel1Id + "," + '"' + result[i].name.trim() + '"' + ")'>"
                        Query = Query + "<div class='imgheight'><img src='../../Content/images/drink.png' /></div>"
                        Query = Query + " <h6>" + result[i].name + "</h6>"
                        Query = Query + "</div></div>"
                    }
                    else if (result[i].name == 'Main Course') {
                        Query = Query + "<div class='menuItemBox' id='level1_" + '' + result[i].RestroMenuLevel1Id + "' onclick='BindLevel1(" + result[i].RestroMenuLevel1Id + "," + '"' + result[i].name.trim() + '"' + ")'>"
                        Query = Query + "<div class='imgheight'><img src='../../Content/images/main-course.png' /></div>"
                        Query = Query + " <h6>" + result[i].name + "</h6>"
                        Query = Query + "</div></div>"
                    }
                    else if (result[i].name == 'Non-Veg') {
                        Query = Query + "<div class='menuItemBox' id='level1_" + '' + result[i].RestroMenuLevel1Id + "' onclick='BindLevel1(" + result[i].RestroMenuLevel1Id + "," + '"' + result[i].name.trim() + '"' + ")'>"
                        Query = Query + "<div class='imgheight'><img src='../../Content/images/non-veg.png' /></div>"
                        Query = Query + " <h6>" + result[i].name + "</h6>"
                        Query = Query + "</div></div>"
                    }
                    else if (result[i].name == 'Starters') {
                        Query = Query + "<div class='menuItemBox' id='level1_" + '' + result[i].RestroMenuLevel1Id + "' onclick='BindLevel1(" + result[i].RestroMenuLevel1Id + "," + '"' + result[i].name.trim() + '"' + ")'>"
                        Query = Query + "<div class='imgheight'><img src='../../Content/images/snacks.png' /></div>"
                        Query = Query + " <h6>" + result[i].name + "</h6>"
                        Query = Query + "</div></div>"
                    }
                    else if (result[i].name == 'South Indian') {
                        Query = Query + "<div class='menuItemBox' id='level1_" + '' + result[i].RestroMenuLevel1Id + "' onclick='BindLevel1(" + result[i].RestroMenuLevel1Id + "," + '"' + result[i].name.trim() + '"' + ")'>"
                        Query = Query + "<div class='imgheight'><img src='../../Content/images/southIndian.png' /></div>"
                        Query = Query + " <h6>" + result[i].name + "</h6>"
                        Query = Query + "</div></div>"
                    }
                    else if (result[i].name == 'Veg-Platter') {
                        Query = Query + "<div class='menuItemBox' id='level1_" + '' + result[i].RestroMenuLevel1Id + "' onclick='BindLevel1(" + result[i].RestroMenuLevel1Id + "," + '"' + result[i].name.trim() + '"' + ")'>"
                        Query = Query + "<div class='imgheight'><img src='../../Content/images/veg-platter.png' /></div>"
                        Query = Query + " <h6>" + result[i].name + "</h6>"
                        Query = Query + "</div></div>"
                    }
                    else {
                        Query = Query + "<div class='menuItemBox' id='level1_" + '' + result[i].RestroMenuLevel1Id + "' onclick='BindLevel1(" + result[i].RestroMenuLevel1Id + "," + '"' + result[i].name.trim() + '"' + ")'>"
                        Query = Query + "<div class='imgheight'><img src='../../Content/images/veg-platter.png' /></div>"
                        Query = Query + " <h6>" + result[i].name + "</h6>"
                        Query = Query + "</div></div>"
                    }

                }

                //Query = Query + "</div>"
                jquery_min_p("#divlevel12").append(Query);
                ResCarouselSize();

                jquery_min_p("#preloader").css('display', 'none');
                jquery_min_p("#Overlay_Load").css('visibility', 'hidden');

            },

            beforesend: function () {
                jquery_min_p("#preloader").css('display', 'block');
                jquery_min_p("#Overlay_Load").css('visibility', 'visible');
            }


        });
    
    //jquery_min_p("#divmenucreation").append(Query);
    //console.log(Query);

}

function BindLevel1(RestroMenuLevel1Id, name) {
    jquery_min_p("#lblitems").text(name);
    jquery_min_p('#divbackbtn').css('display', 'block');
    jquery_min_p('#divsearch').css('display', 'none');
    jquery_min_p('#seconddiv').css('display', 'block');
    jquery_min_p('#mainmenu').css('display', 'none');
    jquery_min_p('#divlevel121 .menuItemBox').removeClass('active');
   
    level1id = "#level1_" + RestroMenuLevel1Id;
    jquery_min_p(level1id).removeClass('active');
    jquery_min_p(level1id).addClass('active');

    jquery_min_p("#divitemlist").html("");
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

            var Query = "";
            var ArrayCount = result.length;
            if (ArrayCount > 0) {

                for (var i = 0; i < ArrayCount; i++) {
                    Query = Query + "<div class='MenuBox fourthlevel' id='" + result[i].RestroMenuItemId + "' onclick='SelectedItem(" + result[i].RestroMenuItemId + "," + '"' + result[i].itemId + '"' + ")'>"
                    Query = Query + "<h6>" + result[i].itemname + "</h6>"
                    Query = Query + "</div>"
                    
                }
                jquery_min_p("#divitemlist").append(Query);
                jquery_min_p("#divitems").css("display", "block");
                jquery_min_p("#divpageHead").css("visibility", "visible");
                // MenuBox fourthlevel
                jquery_min_p("#divnodata").css("display", "none");

            }
            else {
                jquery_min_p("#divitems").css("display", "none");
                jquery_min_p("#divpageHead").css("visibility", "hidden");
                jquery_min_p("#divnodata").css("display", "block");

            }
                
                

            
            jquery_min_p("#divlevel2").html("");
            jquery_min_p("#divlevel3").html("");

            jquery_min_p.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/MenuCreation/BindLevel2",
                data: "{'restroid':'" + restroid + "','restromenuid':'" + restromenuid + "','RestroMenuLevel1Id':'" + RestroMenuLevel1Id + "'}",
                dataType: "json",
                async: false,
                success: function (result) {
                    var Query = "";
                    if (result.length > 0) {
                        var ArrayCount = result.length;

                       

                        for (var i = 0; i < ArrayCount; i++) {

                            Query = Query + "<div class='MenuBox secondlevel' id='level2_" + '' + result[i].RestroMenuLevel2Id + "' onclick='BindItemLevel2(" + result[i].RestroMenuLevel2Id + ")'>"
                            Query = Query + " <h6>" + result[i].name + "</h6>"
                            Query = Query + "</div>"
                        }

                        jquery_min_p("#divlevel2").append(Query);
                        jquery_min_p("#secondleveldiv").css("display", "block");
                        jquery_min_p("#btnconfirm").css("display", "none");
                        jquery_min_p("#divnodata").css("display", "none");
                        jquery_min_p("#divpageHead").css("visibility", "visible");

                     
                        //jquery_min_p('#seconddiv').css('display', 'block');

                    }
                    else {
                        jquery_min_p("#secondleveldiv").css("display", "none");
                        //jquery_min_p("#divnodata").css("display", "none");
                        
                    }
                   
                }

            });



        }
    });
}


function BindItemLevel2(RestroMenuLevel2Id) {
    jquery_min_p('#seconddiv').css('display', 'block');
    jquery_min_p('#divlevel2 .MenuBox').removeClass('active');
    //jquery_min_p('#divlevel2 .leveltwobox').removeClass('active');
    level2id = "#level2_" + RestroMenuLevel2Id;
    jquery_min_p(level2id).removeClass('active');
    jquery_min_p(level2id).addClass('active');
    jquery_min_p("#divitemlist").html("");
    
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

            var Query = "";
            var ArrayCount = result.length;
            if (ArrayCount > 0) {

                for (var i = 0; i < ArrayCount; i++) {
                    Query = Query + "<div class='MenuBox fourthlevel' id='" + result[i].RestroMenuItemId + "' onclick='SelectedItem(" + result[i].RestroMenuItemId + "," + '"' + result[i].itemId + '"' + ")'>"
                    Query = Query + "<h6>" + result[i].itemname + "</h6>"
                    Query = Query + "</div>"

                }
                jquery_min_p("#divitemlist").append(Query);
                jquery_min_p("#divitems").css("display", "block");
                //jquery_min_p('#seconddiv').css('display', 'block');


            }
            else {
                jquery_min_p("#divitems").css("display", "none");
            }

            jquery_min_p("#divlevel3").html("");

            jquery_min_p.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/MenuCreation/BindLevel3",
                data: "{'restroid':'" + restroid + "','restromenuid':'" + restromenuid + "','RestroMenuLevel2Id':'" + RestroMenuLevel2Id + "'}",
                dataType: "json",
                async: false,
                success: function (result) {
                    var Query = "";
                    if (result.length > 0) {
                        var ArrayCount = result.length;

                       

                        for (var i = 0; i < ArrayCount; i++) {


                            Query = Query + "<div class='MenuBox thirdlevel' id='level3_" + '' + result[i].RestroMenuLevel3Id + "' onclick='BindItemLevel3(" + result[i].RestroMenuLevel3Id + ")'>"
                            Query = Query + " <h6>" + result[i].name + "</h6>"
                            Query = Query + "</div>"
                        }

                        jquery_min_p("#divlevel3").append(Query);
                        jquery_min_p("#thirdleveldiv").css("display", "block");
                        jquery_min_p("#btnconfirm").css("display", "none");
                        //jquery_min_p('#seconddiv').css('display', 'block');

                    }
                    else {
                        jquery_min_p("#thirdleveldiv").css("display", "none");
                    }
                   // ResCarouselSize();
                }
            });


            
        }
    });
}

function BindItemLevel3(RestroMenuLevel3Id) {
    jquery_min_p('#seconddiv').css('display', 'block');
    jquery_min_p('#divlevel3 .MenuBox').removeClass('active');
    //jquery_min_p('#divlevel3 .levelthreebox').removeClass('active');
    level3id = "#level3_" + RestroMenuLevel3Id;
    jquery_min_p(level3id).removeClass('active');
    jquery_min_p(level3id).addClass('active');

    jquery_min_p("#divitemlist").html("");
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

            var Query = "";
            var ArrayCount = result.length;
            if (ArrayCount > 0) {

                for (var i = 0; i < ArrayCount; i++) {
                    Query = Query + "<div class='MenuBox fourthlevel' id='" + result[i].RestroMenuItemId + "' onclick='SelectedItem(" + result[i].RestroMenuItemId + "," + '"' + result[i].itemId + '"' + ")'>"
                    Query = Query + "<h6>" + result[i].itemname + "</h6>"
                    Query = Query + "</div>"

                }
                jquery_min_p("#divitemlist").append(Query);
                jquery_min_p("#divitems").css("display", "block");
                // jquery_min_p('#seconddiv').css('display', 'block');

            }
            else {
                jquery_min_p("#divitems").css("display", "none");
            }
        }
    });

}

function SelectedItem(RestroMenuItemId, itemId) {
    jquery_min_p("#btnconfirm").css("display", "inline-block");
    if (neworderid == "")
    {
        neworderid = 0;
    }
    
    selitemid = itemId;
    jquery_min_p('#divitemlist .MenuBox').removeClass('active');
        
    jquery_min_p("#txtQty").text(1);
   var itemid1 = "#" + RestroMenuItemId;
   jquery_min_p(itemid1).removeClass('active');
   jquery_min_p(itemid1).addClass('active');
   jquery_min_p("#lblrestromenuitemid").text(RestroMenuItemId);
   jquery_min_p("#lblitemid").text(selitemid);
    jquery_min_p("#destinationFields").html("");
    restroid = jquery_min_p("#lblrestroid").text();

    // alert(jquery_min_p("#lblrestromenuitemid").text());

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/DineInTakeAway/BindItemAddons",
        data: "{'restroid':'" + restroid + "','itemid':'" + selitemid + "','orderid':'" + orderid + "','neworderid':'" + neworderid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var Query = "";
            var Arraycount = result.length;
            if (Arraycount > 0) {
                
                for (i = 0; i < Arraycount; i++) {
                    Query = Query + "<div class='MenuBox' id='" + result[i].addonsId + "' onclick='GetSelectedAddons(" + result[i].addonsId + ")'>"

                    
                    Query = Query + "<h6>" + result[i].name + "</h6>"
                    Query = Query + "</div>"

                    

                   
                }

                bootstrap_min_p("#Addons").modal('show');
                jquery_min_p("#btnaddonok").css("display", "none");
                jquery_min_p("#btnconfirm").css("display", "inline-block");

                jquery_min_p("#destinationFields").append(Query);
                jquery_min_p("#destinationFields .MenuBox").each(function () {
                //for (i = 0; i < Arraycount; i++) {
                  
                //        if (result[i].seladdon != null) {
                //            var addonid = jquery_min_p(this).attr('id');
                //            // var id = '#' + addonid
                //            if (result[i].addonsId == addonid) {
                //                jquery_min_p('#'+addonid).addClass('selectedItem');
                //            }
                //        }


                         

                //}
                });


            }
           
            jquery_min_p("#preloader").css('display', 'none');
            jquery_min_p("#Overlay_Load").css('visibility', 'hidden');
           
        },

        beforesend: function () {
            jquery_min_p("#preloader").css('display', 'block');
            jquery_min_p("#Overlay_Load").css('visibility', 'visible');
        }



        
    });


}


function GetSelectedAddons(addonid) {
   // tempaddonId = addonid;
    //alert(tempaddonId)
    var Addon = '#' + addonid;
    if (jquery_min_p(Addon).hasClass('selectedItem')) {
        jquery_min_p(Addon).removeClass('selectedItem');
    }
    else {
        jquery_min_p(Addon).addClass('selectedItem');
    }
    jquery_min_p("#btnaddonok").css("display", "block");
    //jquery_min_p("#btnconfirm").css("display", "none");

}

function IncQty() {
    if (neworderid == "")
    {
        neworderid = 0;
    }
    Rownumber = 0;
    restroid = jquery_min_p("#lblrestroid").text();
    var RestroMenuItemId = jquery_min_p("#lblrestromenuitemid").text();
    var itemId = jquery_min_p("#lblitemid").text();
    var Qty = 0;
    Qty = parseInt(jquery_min_p("#txtQty").text());
    Qty = Qty + 1;
    jquery_min_p("#txtQty").text(Qty);
    //jquery_min_p.ajax({
    //    type: "POST",
    //    contentType: "application/json; charset=utf-8",
    //    url: "/DineInTakeAway/UpdateQty",
    //    data: "{'restroid':'" + restroid + "','RestroMenuItemId':'" + RestroMenuItemId + "','orderid':'" + orderid + "','Qty':'" + Qty + "','neworderid':'" + neworderid + "','itemId':'" + itemId + "','Rownumber':'"+ Rownumber +"'}",
    //    dataType: "json",
    //    async: false,
    //    success: function (result) {

    //        //jquery_min_p("#txtQty").text(Qty);
    //        //BindItemTable();
    //    }
    //});

}
function BindMember(orderid) {
    //orderid = jquery_min_p("#lblorderid").text();
    restroid = jquery_min_p("#lblrestroid").text();
    //var RestroMenuItemId = jquery_min_p("#lblrestromenuitemid").text();
    //var Qty = 0;
    //Qty = parseInt(jquery_min_p("#txtQty").text());
    //Qty = Qty + 1;
    //jquery_min_p("#txtQty").text(Qty);
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/DineInTakeAway/BindMember",
        data: "{'restroid':'" + restroid + "','orderid':'" + orderid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            jquery_min_p("#txtMember").text(result[i].MemberCount);
            //jquery_min_p("#txtQty").text(Qty);
           // BindItemTable();
        }
    });

}

function DecQty() {
    if (neworderid == "") {
        neworderid = 0;
    }
    Rownumber = 0;
    restroid = jquery_min_p("#lblrestroid").text();
    var RestroMenuItemId = jquery_min_p("#lblrestromenuitemid").text();
    var itemId = jquery_min_p("#lblitemid").text();
    var Qty = 0;
    Qty = parseInt(jquery_min_p("#txtQty").text());
    if (Qty > 1) {
        Qty = Qty - 1;
        jquery_min_p("#txtQty").text(Qty);
    }
    //jquery_min_p.ajax({
    //    type: "POST",
    //    contentType: "application/json; charset=utf-8",
    //    url: "/DineInTakeAway/UpdateQty",
    //    data: "{'restroid':'" + restroid + "','RestroMenuItemId':'" + RestroMenuItemId + "','orderid':'" + orderid + "','Qty':'" + Qty + "','neworderid':'" + neworderid + "','itemId':'" + itemId + "','Rownumber':'" + Rownumber + "'}",
    //    dataType: "json",
    //    async: false,
    //    success: function (result) {

    //        //jquery_min_p("#txtQty").text(Qty);
    //       // BindItemTable();
    //    }
    //});

}


function IncMember()
{
   
    restroid = jquery_min_p("#lblrestroid").text();
    
    var member = 0;
    member = parseInt(jquery_min_p("#txtMember").text());
    member = member + 1;
    jquery_min_p("#txtMember").text(member);

    if (neworderid == "") {
        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/DineInTakeAway/UpdateMember",
            data: "{'restroid':'" + restroid + "','orderid':'" + orderid + "','member':'" + member + "'}",
            dataType: "json",
            async: false,
            success: function (result) {

                //jquery_min_p("#txtQty").text(Qty);
                //BindItemTable();
            }

        });
    }


}

function DecMember() {
    if (neworderid == "") {
        neworderid = 0;
    }
    restroid = jquery_min_p("#lblrestroid").text();
    var RestroMenuItemId = jquery_min_p("#lblrestromenuitemid").text();
    var member = 0;
    member = parseInt(jquery_min_p("#txtMember").text());
    if (member > 1) {
        member = member - 1;
    }
    jquery_min_p("#txtMember").text(member);
    if (neworderid == "") {
        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/DineInTakeAway/UpdateMember",
            data: "{'restroid':'" + restroid + "','orderid':'" + orderid + "','member':'" + member + "','neworderid':'" + neworderid + "'}",
            dataType: "json",
            async: false,
            success: function (result) {

                //jquery_min_p("#txtQty").text(Qty);
                // BindItemTable();
            }

        });
    }


}


function IncQtyTable(data, RestroMenuItemId, itemId, Rownumber) {
    if (neworderid == "") {
        neworderid = 0;
    }
    restroid = jquery_min_p("#lblrestroid").text();
   // var RestroMenuItemId = jquery_min_p("#lblrestromenuitemid").text();
    var Qty = 0;
    var ItemPrice = 0;
    var row = jquery_min_p(data).closest('tr');//.attr("val");
        Qty = parseInt(row.find('td:nth-child(4)').text().trim());
        Qty = Qty + 1;
       // row.find('td:nth-child(3)').text(Qty);
        ItemPrice = parseInt(row.find('td:nth-child(3)').text().trim());
        ItemPrice = ItemPrice * Qty;
        alert(ItemPrice)
        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/DineInTakeAway/UpdateQty",
            data: "{'restroid':'" + restroid + "','RestroMenuItemId':'" + RestroMenuItemId + "','orderid':'" + orderid + "','Qty':'" + Qty + "','neworderid':'" + neworderid + "','itemId':'" + itemId + "','Rownumber':'" + Rownumber + "'}",
            dataType: "json",
            async: false,
            success: function (result) {
               
                BindItemTable();    



            }
        });


}

function DecQtyTable(data, RestroMenuItemId, itemId, Rownumber) {
    if (neworderid == "") {
        neworderid = 0;
    }
    restroid = jquery_min_p("#lblrestroid").text();
    //var RestroMenuItemId = jquery_min_p("#lblrestromenuitemid").text();
    var Qty = 0;
   // jquery_min_p('#tblItemlist tbody').find('tr').each(function (e) {
    var row = jquery_min_p(data).closest('tr');
        Qty = parseInt(row.find('td:nth-child(4)').text().trim());
        if (Qty > 1) {
            Qty = Qty - 1;
        }
        //row.find('td:nth-child(3)').text(Qty);

        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/DineInTakeAway/UpdateQty",
            data: "{'restroid':'" + restroid + "','RestroMenuItemId':'" + RestroMenuItemId + "','orderid':'" + orderid + "','Qty':'" + Qty + "','neworderid':'" + neworderid + "','itemId':'" + itemId + "','Rownumber':'" + Rownumber + "'}",
            dataType: "json",
            async: false,
            success: function (result) {

                var i = 0;
                BindItemTable();


            }
        });

   // });
   
    //BindItemTable();

}



    // });

    //BindItemTable();



function BindItem() {
    
        if (neworderid == "")
        {
            neworderid = 0;
        }
        //jquery_min_p("#tblItemlist tbody").html("");
        var restromenuitemid = jquery_min_p("#lblrestromenuitemid").text();
        var itemId = jquery_min_p("#lblitemid").text();
        restroid = jquery_min_p("#lblrestroid").text();
        var Qty=jquery_min_p("#txtQty").text();
        var Member = jquery_min_p("#txtMember").text();
        var TableDataX = "<dtXml>";
        // var orderid = jquery_min_p("#lblorderid").text();

        //alert(tempaddonId);


        jquery_min_p('#divitemlist .MenuBox').each(function (e) {
            if (jquery_min_p(this).hasClass('active')) {
                TableDataX += "<dtXml ";
                var addonId = jquery_min_p(this)[0].id;
                TableDataX += 'addonId="0" ';
                TableDataX += 'selitemid="' + selitemid + '" ';
                TableDataX += " />";

            
            
            }
            var a = jquery_min_p(this).hasClass('active').length;
           // alert(a)

        });
        TableDataX += "</dtXml>";
   
        jquery_min_p('#destinationFields .MenuBox').each(function (e) {
            if (jquery_min_p(this).hasClass('selectedItem')) {
                //var row = jquery_min_p(this).closest('tr');
                //orderid = row.find('td:nth-child(1)').text().trim();
                var a = jquery_min_p(this).attr('id')
                tempaddonId.push(a);
                // alert(a)
                //++scount;

                //TESTXML += "<dtXml ";
                //var addonId = jquery_min_p(this).attr('id')
                //TESTXML += 'addonId="' + addonId + '" ';
                //TESTXML += " />";
            }
        });
       // TESTXML += "</dtXml>";

    // alert(tempaddonId)
        var addonlength = tempaddonId.length;






    
   
        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/DineInTakeAway/SaveItemAddon",
            data: "{'addonlength':'" + addonlength + "','tempaddonId':'" + tempaddonId + "','TableDataX':'" + TableDataX + "','restroid':'" + restroid + "','orderid':'" + orderid + "','restromenuitemid':'" + restromenuitemid + "','Qty':'" + Qty + "','neworderid':'" + neworderid + "','Member':'" + Member + "','itemId':'" + itemId + "'}",
            dataType: "json",
            async: false,
            success: function (result) {
               
                BindItemTable();
                



            




            }
        });
       
        

        tempaddonId = [];
        

}
function BindTable() {
    if (neworderid == "")
    {
        neworderid = 0;
    }
    restroid = jquery_min_p("#lblrestroid").text();
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/DineInTakeAway/BindTable",
        data: "{'orderid':'" + orderid + "','restroid':'" + restroid + "','neworderid':'" + neworderid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            if (result.length > 0) {
                var tablno = result[i].tablename;
                jquery_min_p("#lbltableid").text(tablno);

            }

        }
    });

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
            //IsCurrent = result[i].IsCurrent;
            //if (IsCurrent == true) {
            //    IsCurrent = 1;
            //}
            //else {
            //    IsCurrent = 0;
            //}

        }
    });
    BindLevel();
    // window.location.reload(true);
}

function DeleteItem(data, RestroMenuItemId,Id,rownumber) {
    
    // restroid = jquery_min_p("#lblrestroid").text();
    jquery_min_p("#hconfirmdel").text("Are You Sure to Delete Item ??");

bootstrap_min_p("#deletePopup1").modal('show');
deletedata = data;
restroitemid = RestroMenuItemId;
itemId = Id;
Rownumber = rownumber;
}

function Delete() {
    if (neworderid=="")
    {
        neworderid = 0;
    }
   // jquery_min_p(deletedata).closest('tr').remove();
    restroid = jquery_min_p("#lblrestroid").text();
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/DineInTakeAway/DeleteData",
        data: "{'restroitemid':'" + restroitemid + "','restroid':'" + restroid + "','orderid':'" + orderid + "','neworderid':'" + neworderid + "','itemId':'" + itemId + "','Rownumber':'" + Rownumber + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            if (result.length > 0) {
                // bootstrap_min_p("#deletePopupconfirm").modal('hide');
                jquery_min_p("#popupsuccess").text("Item Deleted Successfully");
                bootstrap_min_p("#savePopup").modal('show');

                BindItemTable();
            }
           

        }
    });

}
function SaveItemAddon() {
    if (neworderid == "")
    {
        neworderid = 0;
    }

    updateorderdetails = [];
        
    //jquery_min_p("#tblItemlist tbody").html("");
    // var selitemid = jquery_min_p("#txtmembercount").val();
    restroid = jquery_min_p("#lblrestroid").text();
    var restromenuitemid = jquery_min_p("#lblrestromenuitemid").text();
    var itemId = jquery_min_p("#lblitemid").text();
    var TableDataX = "<dtXml>";
   // var orderid = jquery_min_p("#lblorderid").text();
    var Member=jquery_min_p("#txtMember").text();
   
   // alert(tempaddonId)

    jquery_min_p('#destinationFields .MenuBox').each(function (e) {
        if (jquery_min_p(this).hasClass('selectedItem')) {
            TableDataX += "<dtXml ";
            var addonId = jquery_min_p(this)[0].id;
            TableDataX += 'addonId="' + addonId + '" ';
            TableDataX += 'selitemid="' + selitemid + '" ';
            TableDataX += " />";
            updateorderdetails.push(addonId);
            
        }
       

    });
    TableDataX += "</dtXml>";
    var scount = 0;

    var TESTXML= "<dtXml>";
    jquery_min_p('#destinationFields .MenuBox').each(function (e) {
        if (jquery_min_p(this).hasClass('selectedItem')) {
            //var row = jquery_min_p(this).closest('tr');
                //orderid = row.find('td:nth-child(1)').text().trim();
            var a = jquery_min_p(this).attr('id')
            tempaddonId.push(a);
           // alert(a)
            //++scount;

            TESTXML += "<dtXml ";
            var addonId = jquery_min_p(this).attr('id')
            TESTXML += 'addonId="' + addonId + '" ';
            TESTXML += " />";
        }
    });
    TESTXML += "</dtXml>";

   // alert(tempaddonId)
   var addonlength= tempaddonId.length;   
   //alert(addonlength)

    //jquery_min_p("#tblItemlist tbody tr").each(function () {
    //    row1 = jquery_min_p(this).closest('tr');
    //    var itemname = row1.find('td:nth-child(2)').text().trim();
    //    alert(itemname)
    //});
   
    var Qty = 1;
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/DineInTakeAway/SaveItemAddon",
        data: "{'addonlength':'" + addonlength + "','tempaddonId':'" + tempaddonId + "','TableDataX':'" + TableDataX + "','restroid':'" + restroid + "','orderid':'" + orderid + "','restromenuitemid':'" + restromenuitemid + "','Qty':'" + Qty + "','neworderid':'" + neworderid + "','Member':'" + Member + "','itemId':'" + itemId + "','TESTXML':'" + TESTXML + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            
           
           
                BindItemTable();

            
               
            
        }
        

    });
    tempaddonId = [];
   
}

function BindAddons(RestroMenuItemId,Itemid,Rownumber) {
    if (neworderid == "")
    {
        neworderid = 0;
    }
   

    updateorderdetails = [];
    jquery_min_p("#destinationFields").html("");
    restroid = jquery_min_p("#lblrestroid").text();
    //bootstrap_min_p("#Addons").modal("show");
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/DineInTakeAway/BindAddons",
        data: "{'restroid':'" + restroid + "','RestroMenuItemId':'" + RestroMenuItemId + "','orderid':'" + orderid + "','neworderid':'" + neworderid + "','Itemid':'" + Itemid + "','Rownumber':'" + Rownumber + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            if (result.length > 0) {
                var Query = "";
                var Arraycount = result.length;
                for (var i = 0; i < Arraycount; i++) {
                    Query = Query + "<div class='MenuBox' id='" + result[i].addonsId + "'>"
                    Query = Query + "<h6>" + result[i].name + "</h6>"
                    Query = Query + "</div>"

                    
                }

                bootstrap_min_p("#Addons").modal('show');
                jquery_min_p("#btnaddonok").css("display", "none");
                jquery_min_p("#destinationFields").append(Query);
            }
        }
    });

}


function BindItemTable() {
    jquery_min_p("#ddlselectmenu").attr("disabled", false);
    if (neworderid == "")
    {
        neworderid = 0;
    }
    jquery_min_p("#tblItemlist tbody").html("");
    restroid = jquery_min_p("#lblrestroid").text();
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/DineInTakeAway/BindItemList",
        data: "{'restroid':'" + restroid + "','orderid':'" + orderid + "','neworderid':'" + neworderid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsondata = result.Table;
            if (jsondata.length > 0) {
                //console.log(result[0]);

                var ArrayCount = jsondata.length;
                for (var i = 0; i < ArrayCount; i++) {
                    var row = row + "<tr>"
                    var row = row + "<td style='display:none'> " + jsondata[i].itemId + " </td>";
                    var row = row + "<td width='25%' class='fontBold'> " + jsondata[i].itemname + "<span class='addonList'>" + jsondata[i].Addonsid + "</span></td>";
                    row = row + "<td> " + jsondata[i].itemPrice + "</td>";
                    row = row + "<td> " + jsondata[i].Qty + "</td>";
                    row = row + "<td>" + jsondata[i].KOTId + "</td>";
                    row = row + "<td ><i class='fa fa-plus-circle' aria-hidden='true' onclick='IncQtyTable(this," + jsondata[i].RestroMenuItemId + "," + '"' + jsondata[i].itemId + '"' + "," + '"' + jsondata[i].rownumber + '"' + ")'></i></td>";
                    row = row + "<td><i class='fa fa-minus-circle' aria-hidden='true' onclick='DecQtyTable(this," + jsondata[i].RestroMenuItemId + "," + '"' + jsondata[i].itemId + '"' + "," + '"' + jsondata[i].rownumber + '"' + ")'></i></td>";
                    row = row + "<td><i class='fa fa-trash-o' onclick='DeleteItem(this," + jsondata[i].RestroMenuItemId + "," + '"' + jsondata[i].itemId + '"' + "," + '"' + jsondata[i].rownumber + '"' + ")'></i></td>";
                    
                    //if (jsondata[i].AddonsId != null) {
                    //    row = row + "<td ><i class='fa fa-plus' aria-hidden='true' onclick='BindAddons(" + jsondata[i].RestroMenuItemId + "," + '"' + jsondata[i].itemId + '"' + "," + '"' + jsondata[i].rownumber + '"' + ")'></i></td>"

                    //}

                    //else {
                    //   // row = row + "<td ><i class='fa fa-plus' aria-hidden='true' onclick='BindAddons(" + jsondata[i].RestroMenuItemId + "," + '"' + jsondata[i].itemId + '"' + ")'></i></td>"
                    //    row = row + "<td ></td>";

                    //}
                    row = row + "</tr>"
                    //onclick='BindCard(" + result[i].Length + ");'
                }
                jquery_min_p("#tblItemlist tbody").append(row);

                jquery_min_p("#btnconfirm").css("display", "inline-block");

            }

            var i = 0;
            jsondata = result.Table1;
            jquery_min_p("#lblSAR").text(jsondata[i].SAR);
            jquery_min_p("#lblbill").text(jsondata[i].TotalAmount);
            jquery_min_p("#lbltax").text(jsondata[i].TaxAmount);

           
            if (neworderid != 0) {
                var i = 0;
                jsondata = result.Table2;
                if (jsondata.length > 0) {
                    jquery_min_p("#ddlselectmenu").val(jsondata[i].RestroMenuId);
                    //alert(jquery_min_p("#ddlselectmenu").text());
                    jquery_min_p("#lblorderno").text(jsondata[i].orderno);
                    jquery_min_p("#txtMember").text(jsondata[i].MemberNo);
                   // BindLevel();
                }

            }
            jquery_min_p("#preloader").css('display', 'none');
            jquery_min_p("#Overlay_Load").css('visibility', 'hidden');
           
        },

        beforesend: function () {
            jquery_min_p("#preloader").css('display', 'block');
            jquery_min_p("#Overlay_Load").css('visibility', 'visible');
        }

        
    });
   // UpdateOrder();
}





function ResCarouselSize() {

        var itemsMainDiv = ('.MultiCarousel');
    var itemsDiv = ('.MultiCarousel-inner');
    var itemWidth = "";

    var incno = 0;
    var dataItems = ("data-items");
    var itemClass = ('.item');
    var id = 0;
    var btnParentSb = '';
    var itemsSplit = '';
    var sampwidth = $(itemsMainDiv).width();
    var bodyWidth = $('body').width();
    $(itemsDiv).each(function () {
        id = id + 1;
        var itemNumbers = $(this).find(itemClass).length;
        btnParentSb = $(this).parent().attr(dataItems);
        itemsSplit = btnParentSb.split(',');
        $(this).parent().attr("id", "MultiCarousel" + id);
        $(this).parent().attr("id", "MultiCarousel1" + id);
        $(this).parent().attr("id", "MultiCarousel2" + id);
        if (bodyWidth >= 1200) {
            incno = itemsSplit[3];
            itemWidth = sampwidth / incno;
        }
        else if (bodyWidth >= 992) {
            incno = itemsSplit[2];
            itemWidth = sampwidth / incno;
        }
        else if (bodyWidth >= 768) {
            incno = itemsSplit[1];
            itemWidth = sampwidth / incno;
        }
        else {
            incno = itemsSplit[0];
            itemWidth = sampwidth / incno;
        }
        $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
        $(this).find(itemClass).each(function () {
            $(this).outerWidth(itemWidth);
        });

        $(".leftLst").addClass("over");
        $(".rightLst").removeClass("over");

    });
}

function SaveOrder()
{
    var OrderType = 1;
   // var neworderid ="";// jquery_min_p("#lblorderidaftersave").text();
    if (neworderid == "") {

        neworderid = 0;
        var restromenuid = jquery_min_p("#ddlselectmenu option:selected").val();
        restroid = jquery_min_p("#lblrestroid").text();

        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/DineInTakeAway/SaveOrder",
            data: "{'restromenuid':'" + restromenuid + "','restroid':'" + restroid + "','orderid':'" + orderid + "','neworderid':'" + neworderid + "','OrderType':'" + OrderType + "'}",
            dataType: "json",
            async: false,
            success: function (result) {
                var i = 0;
                var jsonData = result.Table;
                jquery_min_p("#lblorderno").text(jsonData[i].orderno);
                BindItemTable();
                // bootstrap_min_p("#deletePopupconfirm").modal('hide');
                jquery_min_p("#popupsuccess1").text("Order Saved Successfully");
                bootstrap_min_p("#savesuccessPopup").modal('show');

                //jsonData = result.Table1;

                //jquery_min_p("#lblorderidaftersave").text(jsonData[i].orderid);




            }
        });
    }
    else
    {
        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/DineInTakeAway/updateorderstatus",
            data: "{'IsRemoveUnselectItems':'" + IsRemoveUnselectItems + "','restroid':'" + restroid + "','neworderid':'" + neworderid + "'}",
            dataType: "json",
            async: false,
            success: function (result) {
                var i = 0;
                var jsonData = result.Table;
               // jquery_min_p("#lblorderno").text(jsonData[i].orderno);
               // BindItemTable();
                // bootstrap_min_p("#deletePopupconfirm").modal('hide');
                jquery_min_p("#popupsuccess1").text("Order Saved Successfully");
                bootstrap_min_p("#savesuccessPopup").modal('show');

                //jsonData = result.Table1;

                //jquery_min_p("#lblorderidaftersave").text(jsonData[i].orderid);




            }
        });
        

    }

}

function ClearOrder()
{
    restroid = jquery_min_p("#lblrestroid").text();
    if (neworderid == "")
    {
        neworderid = 0;
    }
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/DineInTakeAway/clearorder",
        data: "{'restroid':'" + restroid + "','orderid':'" + orderid + "','neworderid':'" + neworderid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            //var jsonData = result.Table;
            BindItemTable();
            bootstrap_min_p("#confirmPopup").modal('hide');
            jquery_min_p("#popupsuccess").text("Order Cleared Successfully");
            bootstrap_min_p("#savePopup").modal('show');

           



        }
    });

}

function HoldOrder() {
    IsHold = 1;
    var restromenuid = jquery_min_p("#ddlselectmenu").val();
    restroid = jquery_min_p("#lblrestroid").text();
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/DineInTakeAway/HoldOrder",
        data: "{'restroid':'" + restroid + "','orderid':'" + orderid + "','restromenuid':'" + restromenuid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            //var jsonData = result.Table;
           // BindItemTable();
            bootstrap_min_p("#confirmationPopup").modal('hide');
            jquery_min_p("#popupsuccess1").text("Order Hold Successfully");
            bootstrap_min_p("#savesuccessPopup").modal('show');





        }
    });

}

function BindHoldItems(orderid) {
    jquery_min_p("#btnsaveorder").css("display", "inline-block");
    jquery_min_p("#ddlselectmenu").attr("disabled", false);
   
    jquery_min_p("#tblItemlist tbody").html("");
    restroid = jquery_min_p("#lblrestroid").text();
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/DineInTakeAway/BindHoldItems",
        data: "{'restroid':'" + restroid + "','orderid':'" + orderid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            
            if (result.Table.length > 0) {
                //console.log(result[0]);
                var jsonData = result.Table;
                var ArrayCount = jsonData.length;
                for (var i = 0; i < ArrayCount; i++) {
                    var row = row + "<tr>"
                    var row = row + "<td style='display:none'> " + jsonData[i].itemId + " </td>";
                    var row = row + "<td width='25%' class='fontBold'> " + jsonData[i].itemname + "<span class='addonList'>" + jsonData[i].Addonsid + "</span></td>";
                    row = row + "<td> " + jsonData[i].itemPrice + "</td>";
                    row = row + "<td> " + jsonData[i].Qty + "</td>";
                    row = row + "<td>" + jsonData[i].KOTId + "</td>";
                    row = row + "<td ><i class='fa fa-plus-circle' aria-hidden='true' onclick='IncQtyTable(this," + jsonData[i].RestroMenuItemId + "," + '"' + jsonData[i].itemId + '"' + "," + '"' + jsonData[i].rownumber + '"' + ")'></i></td>";
                    row = row + "<td><i class='fa fa-minus-circle' aria-hidden='true' onclick='DecQtyTable(this," + jsonData[i].RestroMenuItemId + "," + '"' + jsonData[i].itemId + '"' + "," + '"' + jsonData[i].rownumber + '"' + ")'></i></td>";
                    row = row + "<td><i class='fa fa-trash-o' onclick='DeleteItem(this," + jsonData[i].RestroMenuItemId + "," + '"' + jsonData[i].itemId + '"' + "," + '"' + jsonData[i].rownumber + '"' + ")'></i></td>";

                    //if (jsonData[i].AddonsId != null) {
                    //    row = row + "<td ><i class='fa fa-plus' aria-hidden='true' onclick='BindAddons(" + jsonData[i].RestroMenuItemId + "," + '"' + jsonData[i].itemId + '"' + "," + '"' + jsonData[i].rownumber + '"' + ")'></i></td>"

                    //}

                    //else {
                    //    // row = row + "<td ><i class='fa fa-plus' aria-hidden='true' onclick='BindAddons(" + jsondata[i].RestroMenuItemId + "," + '"' + jsondata[i].itemId + '"' + ")'></i></td>"
                    //    row = row + "<td ></td>";

                    //}
                    row = row + "</tr>"
                    //onclick='BindCard(" + result[i].Length + ");'
                }
                jquery_min_p("#tblItemlist tbody").append(row);

                jquery_min_p("#btnconfirm").css("display", "inline-block");

            }

            var i = 0;
            jsondata = result.Table1;
            jquery_min_p("#lblSAR").text(jsondata[i].SAR);
            jquery_min_p("#lblbill").text(jsondata[i].TotalAmount);
            jquery_min_p("#lbltax").text(jsondata[i].TaxAmount);


           
                var i = 0;
                jsonData = result.Table2;
                if (jsonData.length > 0) {
                    jquery_min_p("#ddlselectmenu").val(jsonData[i].RestroMenuId);
                   
                    BindLevel();
                }

            //}


        }
    });
    // UpdateOrder();
}

function BindTable() {
    if (neworderid == "") {
        neworderid = 0;
    }
    restroid = jquery_min_p("#lblrestroid").text();
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/DineInTakeAway/BindTable",
        data: "{'orderid':'" + orderid + "','restroid':'" + restroid + "','neworderid':'" + neworderid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            if (result.length > 0) {
                var tablno = result[i].tablename;
                jquery_min_p("#lbltableid").text(tablno);

            }

        }
    });

}

function Ordertable()
{
    //jquery_min_p("#tblItemlist tbody tr").each(function () {
    //    row1 = jquery_min_p(this).closest('tr');
    //    var itemname = row1.find('td:nth-child(2)').text().trim();
    //    alert(itemname)
    //});


    jquery_min_p('#destinationFields .MenuBox').each(function (e) {
        if (jquery_min_p(this).hasClass('selectedItem')) {
            //var row = jquery_min_p(this).closest('tr');
            //orderid = row.find('td:nth-child(1)').text().trim();
            var a = jquery_min_p(this).attr('id')
            tempaddonId.push(a);
            // alert(a)
            //++scount;
        }
    });




}

function RemoveUnselectItems()
{
    

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/DineInTakeAway/updateorderstatus",
        data: "{'restroid':'" + restroid + "','neworderid':'" + neworderid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsonData = result.Table;
            // jquery_min_p("#lblorderno").text(jsonData[i].orderno);
            // BindItemTable();
            // bootstrap_min_p("#deletePopupconfirm").modal('hide');
            jquery_min_p("#popupsuccess1").text("Order Saved Successfully");
            bootstrap_min_p("#savesuccessPopup").modal('show');

            //jsonData = result.Table1;

            //jquery_min_p("#lblorderidaftersave").text(jsonData[i].orderid);




        }
    });



    tempaddonId = [];


}