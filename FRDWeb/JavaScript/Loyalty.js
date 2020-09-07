jquery_min_p(document).ready(function () {
    
    jquery_min_p("#lblcardavailable").text("0");
    jquery_min_p("#lblrestroissuecards").text("0");
    jquery_min_p('#txtamount').focus();

    BindRule();
    //BindResturantMenu();
    //BindCardLength();


    







    jquery_min_p("input[name=rdogencard]:radio").click(function () {
        if (jquery_min_p('input[name=rdogencard]:checked').val() == "E") {


            jquery_min_p("#txtcardno").val("");
            //jquery_min_p("#txtstartfrom").val("");
            //jquery_min_p("#txtcardlength").val("");
            jquery_min_p("#divcard").html("");


            jquery_min_p('#txtcardno').removeClass('validate');
            //jquery_min_p('#txtstartfrom').removeClass('validate');
            //jquery_min_p('#txtcardlength').removeClass('validate');


        }
    });



    
    jquery_min_p("input[name=rdogencard]:radio").click(function () {
        if (jquery_min_p('input[name=rdogencard]:checked').val() == "N") {
            jquery_min_p("#txtcardno").val("");
            jquery_min_p("#txtstartfrom").val("");
            jquery_min_p("#txtcardlength").val("");
            jquery_min_p("#divcard").html("");


            jquery_min_p('#txtcardno').removeClass('validate');
            jquery_min_p('#txtstartfrom').removeClass('validate');
            jquery_min_p('#txtcardlength').removeClass('validate');


        }
    });


    jquery_min_p("#txtamount").keypress(function (e) {
        var key = e.keyCode;
        //if (key >= 65 && key <= 90 || key >= 97 && key <= 122 || key >=33 && key <=47 || key >=58 && key <=64 || key >=91 && key <=96 || key >=123 && key <=126) {
        //    e.preventDefault();
        //}

        if ((e.which != 46 || $(this).val().indexOf('.') != -1) && ((e.which < 48 || e.which > 57) && (e.which != 0 && e.which != 8))) {
            e.preventDefault();
        }

        var text = jquery_min_p(this).val();

        if ((text.indexOf('.') != -1) && (text.substring(text.indexOf('.')).length > 3) && (e.which != 0 && e.which != 8) && (jquery_min_p(this)[0].selectionStart >= text.length - 2)) {
            e.preventDefault();
        }
    });




    jquery_min_p("#txtearnedpoint").keypress(function (e) {
        var key = e.keyCode;
        //if (key >= 65 && key <= 90 || key >= 97 && key <= 122 || key >=33 && key <=47 || key >=58 && key <=64 || key >=91 && key <=96 || key >=123 && key <=126) {
        //    e.preventDefault();
        //}

        if ((e.which != 46 || $(this).val().indexOf('.') != -1) && ((e.which < 48 || e.which > 57) && (e.which != 0 && e.which != 8)))
        {
            e.preventDefault();
        }

        var text = jquery_min_p(this).val();

        if ((text.indexOf('.') != -1) && (text.substring(text.indexOf('.')).length > 3) && (e.which != 0 && e.which != 8) && (jquery_min_p(this)[0].selectionStart >= text.length - 2))
        {
            e.preventDefault();
        }
    });

    

    jquery_min_p("#txtredeemamount").keypress(function (e) {
        var key = e.keyCode;
        //if (key >= 65 && key <= 90 || key >= 97 && key <= 122 || key >=33 && key <=47 || key >=58 && key <=64 || key >=91 && key <=96 || key >=123 && key <=126) {
        //    e.preventDefault();
        //}

        if ((e.which != 46 || $(this).val().indexOf('.') != -1) && ((e.which < 48 || e.which > 57) && (e.which != 0 && e.which != 8))) {
            e.preventDefault();
        }

        var text = jquery_min_p(this).val();

        if ((text.indexOf('.') != -1) && (text.substring(text.indexOf('.')).length > 3) && (e.which != 0 && e.which != 8) && (jquery_min_p(this)[0].selectionStart >= text.length - 2)) {
            e.preventDefault();
        }
    });


    jquery_min_p("#txtcardno").keypress(function (e) {
        var key = e.keyCode;
        //if (key >= 65 && key <= 90 || key >= 97 && key <= 122 || key >=33 && key <=47 || key >=58 && key <=64 || key >=91 && key <=96 || key >=123 && key <=126) {
        //    e.preventDefault();
        //}

        if ((e.which != 46 || $(this).val().indexOf('.') != -1) && ((e.which < 48 || e.which > 57) && (e.which != 0 && e.which != 8))) {
            e.preventDefault();
        }

        var text = jquery_min_p(this).val();

        if ((text.indexOf('.') != -1) && (text.substring(text.indexOf('.')).length > 3) && (e.which != 0 && e.which != 8) && (jquery_min_p(this)[0].selectionStart >= text.length - 2)) {
            e.preventDefault();
        }
    });



    jquery_min_p("#txtstartfrom").keypress(function (e) {
        var key = e.keyCode;
        //if (key >= 65 && key <= 90 || key >= 97 && key <= 122 || key >=33 && key <=47 || key >=58 && key <=64 || key >=91 && key <=96 || key >=123 && key <=126) {
        //    e.preventDefault();
        //}

        if ((e.which != 46 || $(this).val().indexOf('.') != -1) && ((e.which < 48 || e.which > 57) && (e.which != 0 && e.which != 8))) {
            e.preventDefault();
        }

        var text = jquery_min_p(this).val();

        if ((text.indexOf('.') != -1) && (text.substring(text.indexOf('.')).length > 3) && (e.which != 0 && e.which != 8) && (jquery_min_p(this)[0].selectionStart >= text.length - 2)) {
            e.preventDefault();
        }
    });

    jquery_min_p("#txtcardlength").keypress(function (e) {
        var key = e.keyCode;
        //if (key >= 65 && key <= 90 || key >= 97 && key <= 122 || key >=33 && key <=47 || key >=58 && key <=64 || key >=91 && key <=96 || key >=123 && key <=126) {
        //    e.preventDefault();
        //}

        if ((e.which != 46 || $(this).val().indexOf('.') != -1) && ((e.which < 48 || e.which > 57) && (e.which != 0 && e.which != 8))) {
            e.preventDefault();
        }

        var text = jquery_min_p(this).val();

        if ((text.indexOf('.') != -1) && (text.substring(text.indexOf('.')).length > 3) && (e.which != 0 && e.which != 8) && (jquery_min_p(this)[0].selectionStart >= text.length - 2)) {
            e.preventDefault();
        }
    });

    jquery_min_p("#txtissuecard").keypress(function (e) {
        var key = e.keyCode;
        //if (key >= 65 && key <= 90 || key >= 97 && key <= 122 || key >=33 && key <=47 || key >=58 && key <=64 || key >=91 && key <=96 || key >=123 && key <=126) {
        //    e.preventDefault();
        //}

        if ((e.which != 46 || $(this).val().indexOf('.') != -1) && ((e.which < 48 || e.which > 57) && (e.which != 0 && e.which != 8))) {
            e.preventDefault();
        }

        var text = jquery_min_p(this).val();

        if ((text.indexOf('.') != -1) && (text.substring(text.indexOf('.')).length > 3) && (e.which != 0 && e.which != 8) && (jquery_min_p(this)[0].selectionStart >= text.length - 2)) {
            e.preventDefault();
        }
    });


    jquery_min_p("#GCard").click(function () {
        Reset();
        ResetIC();
        
        jquery_min_p("#divcardDetail").css('display', 'none');
        jquery_min_p("#divrestrodetail").css('display', 'none');
        
        jquery_min_p("#divrestrogrid").css('display', 'none');
    });


    jquery_min_p("#ICard").click(function () {
        Reset();
        ResetGC();

    });


    jquery_min_p("#DCard").click(function () {
        ResetGC();
        ResetIC();
        jquery_min_p("#divcardDetail").css('display', 'none');
        jquery_min_p("#divrestrodetail").css('display', 'none');
        jquery_min_p("#divrestrogrid").css('display', 'none');

    });

    

    




    jquery_min_p("#btnadd").click(function () {
        {
           // if (Validation()) {
                CheckData();
           // }
            //else {
            //    return false;
            //}
        }
       
    });

    jquery_min_p("#btnsaveclose").click(function () {
        bootstrap_min_p("#savePopup").modal('hide');

    });
    jquery_min_p("#btnIssue").click(function () {
        
        SaveIssueCards();

        
        

    });

    jquery_min_p("#btncrosscloase").click(function () {
        bootstrap_min_p("#WarningPopup").modal('hide');

    });

    jquery_min_p("#btnok").click(function () {
        bootstrap_min_p("#WarningPopup").modal('hide');

    });



    jquery_min_p("#btnaddrule").click(function () {

        if (validaterules() == true)
        {
            var d = new Date();

            var month = d.getMonth() + 1;
            var day = d.getDate();

            var output = d.getFullYear() + '-' +
                (month < 10 ? '0' : '') + month + '-' +
                (day < 10 ? '0' : '') + day;
            var date=jquery_min_p("#txtdate").val();
            if (date >= output) {
                SaveRule();
                Reset();
            }
            else {
                alert("Invalid Date");
            }
        }


    });
    jquery_min_p("#rdexisting").click(function () {
        if (jquery_min_p("#rdexisting").prop("checked") == true) {
            jquery_min_p("#txtcardno").val("");
            BindData();
        }
        else {

        }

    });

    jquery_min_p("#rdcreatenew").click(function () {
        if (jquery_min_p("#rdcreatenew").prop("checked") == true) {
            jquery_min_p("#txtcardno").val("");
            jquery_min_p("#divcard").html("");
            //BindData();
        }
        });

    //jquery_min_p("#txtamount").keypress(function (e) {
    //    var key = e.keyCode;
    //    if (key >= 65 && key <= 90 || key >= 97 && key <= 122) {
    //        e.preventDefault();
    //    }
    //});

    //jquery_min_p("#txtstartfrom").keypress(function (e) {
    //    var key = e.keyCode;
    //    if (key >= 65 && key <= 90 || key >= 97 && key <= 122) {
    //        e.preventDefault();
    //    }
    //});


    jquery_min_p("#txtissuecard").keypress(function (e) {
        var key = e.keyCode;
        if (key >= 65 && key <= 90 || key >= 97 && key <= 122) {
            e.preventDefault();
        }
    });

    //jquery_min_p("#txtissuecard").keyup(function (e) {
    //    var issuecard = jquery_min_p("#txtissuecard").val();
    //    var cardavailable = jquery_min_p("#lblcardavailable").text();
    //    if(issuecard > cardavailable)
    //    {
    //        alert('Issue cards must be less than cards available');
    //    }
       
    //});

    //jquery_min_p("#txtearnedpoint").keypress(function (e) {
    //    var key = e.keyCode;
    //    if (key >= 65 && key <= 90 || key >= 97 && key <= 122) {
    //        e.preventDefault();
    //    }
    //});
    jquery_min_p("#txtredeemamount").keypress(function (e) {
        var key = e.keyCode;
        if (key >= 65 && key <= 90 || key >= 97 && key <= 122) {
            e.preventDefault();
        }
    });

});


        function BindData()
        {
            jquery_min_p.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/Loyalty/BindLenCardNo",
                data: "{}",
                dataType: "json",
                async: false,
                success: function (result) {
                    var i = 0;
                    //var jsonData = result;
                    jquery_min_p("#cardDetailsTable tbody").empty();
                    var ArrayCount = result.length;
                    for (var i = 0; i < ArrayCount; i++) {
                        var row = row + "<tr onclick='BindCard(this," + result[i].Length + ");'>"
                        var row = row + "<td width='30%'> " + result[i].Length + " </td>"; 
                        row = row + "<td width='70%'> " + result[i].CardNo + "</td>";
                        row=row + "</tr>"
                        //onclick='BindCard(" + result[i].Length + ");'
                    }
                    jquery_min_p("#cardDetailsTable tbody").append(row);

                    jquery_min_p("#cardDetail").css('display', 'block');
                },
                error: function () {


                }
            });
        }

        function BindCard(data,Id) {
            jquery_min_p("#cardDetailsTable tbody tr").removeClass("selectedItem");
            row = jquery_min_p(data).closest("tr");
            row.addClass("selectedItem");
            
            jquery_min_p("#lbllength").text(Id);
            
            

        }

        function CheckData()
        {
            if (jquery_min_p("#rdcreatenew").prop("checked") == true) {
                if (Validation() == true) {
                    var isfound = 0;
                    var cardno = jquery_min_p("#txtcardno").val();
                    var startfrom = jquery_min_p("#txtstartfrom").val();
                    var cardlength = jquery_min_p("#txtcardlength").val();

                    if ((cardno != "") && (startfrom != "") && (cardlength.Text != "")) {
                        if (startfrom.length <= cardlength) {
                            jquery_min_p.ajax({
                                type: "POST",
                                contentType: "application/json; charset=utf-8",
                                url: "/Loyalty/CheckValidation",
                                data: "{}",
                                dataType: "json",
                                async: false,
                                success: function (result) {
                                    var ArrayCount = result.length;
                                    for (var i = 0; i < ArrayCount; i++) {
                                        if (result[i].Length == cardlength) {
                                            isfound = 1;
                                            jquery_min_p("#hwarning").text("Card Already Existed!!");
                                            bootstrap_min_p("#WarningPopup").modal('show');
                                            ResetGC();
                                        }
                                    }
                                    if (isfound == 0) {
                                        jquery_min_p("#divcard").html('');

                                        jquery_min_p.ajax({
                                            type: "POST",
                                            contentType: "application/json; charset=utf-8",
                                            url: "/Loyalty/CreateLoyaltyCard",
                                            data: "{'cardno':'" + cardno + "','startfrom':'" + startfrom + "','cardlength':'" + cardlength + "'}",
                                            dataType: "json",
                                            async: false,
                                            success: function (result) {
                                                
                                                    
                                                var ArrayCount = result.length;
                                                var Query = "";
                                                for (var i = 0; i < ArrayCount; i++) {




                                                    Query = Query + "<div class='loyaltyCard'>"
                                                    Query = Query + "<h4><img src='../Content/images/loyality-icon-white.png'/> Loyalty Card</h4>"
                                                    Query = Query + "<div class='loyaltycardDetail'><div class='logoImg'><img src='../Content/images/POS-logo-sm-1.png' /></div>"
                                                    Query = Query + "<div class='cardNoCon'><span>CARD NUMBER</span><span class='cardNo'>" + result[i].CardNo + "</span></div>"
                                                    Query = Query + "<div class='loyaltyFooter'><span>POS System</span></div>"
                                                    Query = Query + "</div></div>"
                                                }
                                                jquery_min_p("#divcard").append(Query);
                                                BindData();
                                                jquery_min_p("#txtcardno").val("");
                                                jquery_min_p("#txtstartfrom").val("");
                                                jquery_min_p("#txtcardlength").val("");
                                               

                                            },
                                            error: function () {
                                                //alert('error');
                                            }


                                        });

                                    }

                                },
                                error: function () {

                                }


                            });
                        }
                        else
                        {
                            
                jquery_min_p('#h6warning').text('Invalid Card Length');
                jquery_min_p('#dngwarn').modal('show');
                //jquery_min_p("#txtcardno").val("");
                //jquery_min_p("#txtstartfrom").val("");
                //jquery_min_p("#txtcardlength").val("");

                jquery_min_p('#txtcardlength').addClass('validate');

                        }
                    }
                }
            }

            else {
                
                var flag = 0;
                var cardlength = jquery_min_p("#lbllength").text();
                var startfrom = "";
                var cardno = jquery_min_p("#txtcardno").val();

                
                


                if(rowvalidate()==true)
                {

                   

                    jquery_min_p.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        url: "/Loyalty/CreateLoyaltyCard",
                        data: "{'cardno':'" + cardno + "','startfrom':'" + startfrom + "','cardlength':'" + cardlength + "'}",
                        dataType: "json",
                        async: false,
                        success: function (result) {
                            jquery_min_p("#divcard").html('');

                            var ArrayCount = result.length;
                            var Query = "";
                            for (var i = 0; i < ArrayCount; i++) {




                                Query = Query + "<div class='loyaltyCard'>"
                                Query = Query + "<h4><img src='../Content/images/loyality-icon-white.png'/> Loyalty Card</h4>"
                                Query = Query + "<div class='loyaltycardDetail'><div class='logoImg'><img src='../Content/images/POS-logo-sm-1.png' /></div>"
                                Query = Query + "<div class='cardNoCon'><span class='cardNo'>" + result[i].CardNo + "</span></div>"
                                Query = Query + "<div class='loyaltyFooter'><span>POS System</span></div>"
                                Query = Query + "</div></div>"
                            }
                            jquery_min_p("#divcard").append(Query);
                            BindData();

                        },
                        error: function () {
                            //alert('error');
                        }


                    });
                }
                    

            }
               
                

            }

        


        function RemoveClass()
        {
            var card = jquery_min_p("#txtcardno").val();
            if (card != "")
            {
                jquery_min_p("#txtcardno").removeClass('validate');
            }
            if (jquery_min_p("#txtstartfrom").val() != "") {
                jquery_min_p("#txtstartfrom").removeClass('validate');
                
            }
            if (jquery_min_p("#txtcardlength").val() != "") {
                jquery_min_p("#txtcardlength").removeClass('validate');
                
            }
            if (jquery_min_p("#txtissuecard").val() != "") {
                jquery_min_p("#txtissuecard").removeClass('validate');

            }
            if (jquery_min_p("#ddlcardlength").val() != "0") {
                jquery_min_p("#ddlcardlength").removeClass('validate');

            }
            if (jquery_min_p("#txtamount").val() != "") {
                jquery_min_p("#txtamount").removeClass('validate');
                
            }
            if (jquery_min_p("#txtearnedpoint").val() != "") {
                jquery_min_p("#txtearnedpoint").removeClass('validate');
                
            }
            if (jquery_min_p("#txtredeemamount").val() != "") {
                jquery_min_p("#txtredeemamount").removeClass('validate');
               
            }
            if (jquery_min_p("#txtdate").val() != "") {
                jquery_min_p("#txtdate").removeClass('validate');
                
            }

            if (jquery_min_p('#ddlcardlength').val() != '0') {
                jquery_min_p('#ddlcardlength').removeClass('validate');
            }

        }

        function Validation()

        {
            var maxlen = jquery_min_p("#hdnmaxlen").val();
            var flag = 0;
            if(jquery_min_p("#txtcardno").val()=="")
            {
                jquery_min_p("#txtcardno").addClass('validate');
                flag = 1;
            }
            if (jquery_min_p("#txtstartfrom").val() == "") {
                jquery_min_p("#txtstartfrom").addClass('validate');
                flag = 1;
            }
            if (jquery_min_p("#txtcardlength").val() == "") {
                jquery_min_p("#txtcardlength").addClass('validate');
                flag = 1;
            }
            if ((jquery_min_p("#txtcardlength").val() > 15) || (jquery_min_p("#txtcardlength").val() < 0)) {
                jquery_min_p("#hwarning").text("Card Length must be greater than 0 or less than 15 !!");
                bootstrap_min_p("#WarningPopup").modal('show');
                jquery_min_p('#txtcardlength').addClass('validate');
                flag = 1;
            }

            if (flag == 1) {
                return false;
            }
            else{
                return true;
            }
        }

//issue cards
function BindResturantMenu()
{
    jquery_min_p("#restaurantList").html("");
   
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/SequenceSetup/BindResturant",
        data: "{}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsonData = result;
            var ArrayCount = result.length;
            var Query = "";
            for (var i = 0; i < ArrayCount; i++) {


                Query = Query + "<div class='sectionBox' onclick='BindResturantId(this," + result[i].restroId + ");' ondblclick='BindResturantwisegrid(" + result[i].restroId + ");'>";
             
                Query = Query + "<h6>" + result[i].name + "</h6></div>";

            }



            jquery_min_p("#restaurantList").append(Query);

        },

        error: function () {

        }
    });
}

function BindResturantId(data,Id)
{
    
    //jquery_min_p('#restaurantList .sectionBox').removeClass('active');
    //jquery_min_p(this).addClass("active");
  
        
       jquery_min_p(".restaurantList .sectionBox").removeClass("active");
        
    
       
    jquery_min_p("#lblrestroid").text(Id);
    jquery_min_p("#txtissuecard").val("");
    // jquery_min_p("#lblcardavailable").val("0");
  //     jquery_min_p("#lbltotalcards").text("");
    jquery_min_p("#lblrestroissuecards").text("");
    jquery_min_p(data).addClass('active');
    BindCardAvailable();
    
    //jquery_min_p("#lblcardavailable").text("");
    // BindCardTotal();
    jquery_min_p("#divrestrodetail").css("display", "none");
    jquery_min_p("#divcardDetail").css("display", "none");
    ResetIC();

   // BindResturantwisegrid(Id);
    jquery_min_p("#divrestrogrid").css('display', 'none');

}
















function BindResturantwisegrid(restroid)
{
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Loyalty/BindRestrogrid",
        data: "{'restroid':'" + restroid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;

            
            //var jsonData = result;
            jquery_min_p("#tblrestrocards tbody").empty();
            var ArrayCount = result.length;
            if (result.length > 0) {
                for (var i = 0; i < ArrayCount; i++) {

                    var row = row + "<tr>"
                    var row = row + "<td width='30%'> " + result[i].CardLength + " </td>";
                    row = row + "<td width='30%'> " + result[i].coun + "</td>";
                    row = row + "<td width='30%'> " + result[i].AssignToCustomer + "</td>";
                    row = row + "</tr>"
                    //onclick='BindCard(" + result[i].Length + ");'
                }
                jquery_min_p("#tblrestrocards tbody").append(row);
                //ResetIC();
            }
            else {

                var markup = "<tr><td colspan='6'>'No Record Found..'</td></tr>";
                jquery_min_p("#tblrestrocards tbody").append(markup);
               // ResetIC();
            }

            

            jquery_min_p("#divrestrogrid").css('display', 'block');
            ResetIC();
        },
        error: function () {


        }
    });
}

function BindCardLength()
{
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Loyalty/BindCardLength",
        data: "{}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsondata = eval(result);

            for (var i = 0; i < result.length; i++) {


                var newOption = $('<option>');
                newOption.attr('value', result[i].Length).text(result[i].Length);

                // Append that to the DropDownList.
                $('#ddlcardlength').append(newOption);

            }
        }
        });
}

function BindCardAvailable() {
    jquery_min_p("#divcardDetail").css("display", "block");
    jquery_min_p("#divrestrodetail").css("display", "block");
    jquery_min_p("#lblrestroissuecards").text("");

    

    var restroid = jquery_min_p("#lblrestroid").text();
    if (restroid == "") {
        restroid = 0;
    }
    
    
    var len = jquery_min_p("#ddlcardlength option:selected").val();
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Loyalty/BindCardTotal",
        data: "{'len':'" + len + "','restroid':'" + restroid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            
                    var jsonData = result.Table;
                    var Totalcards = jsonData[i].Totcards;
                    jquery_min_p('#lbltotalcards').text(Totalcards);
                  
                    jsonData = result.Table1;
           
                    var cardcount = jsonData[i].Total;
                    jquery_min_p('#lblcardavailable').text(cardcount);
                    //jquery_min_p("#lblrestroissuecards").text(noofissuecards);

                    jsonData = result.Table2;

                    var noofissuecards = jsonData[i].coun;
                    jquery_min_p("#lblrestroissuecards").text(noofissuecards);
                  
           
            

            
        }
    });

}

function SaveIssueCards()
{
    var restroId = jquery_min_p("#lblrestroid").text();
    var length = jquery_min_p("#ddlcardlength option:selected").val();
    
    var cardavailable = jquery_min_p("#lblcardavailable").text();
    var IssueCards = jquery_min_p('#txtissuecard').val();


    if (jquery_min_p('#ddlcardlength').val() == '0') {
        jquery_min_p('#ddlcardlength').addClass('validate');

    }

    if (IssueCards.trim()== "") {
        jquery_min_p('#txtissuecard').addClass('validate');
        
    }
    else if(length=="0")
    {
        jquery_min_p("#ddlcardlength").addClass('validate');
    }
    
    else if (parseInt(IssueCards) > parseInt(cardavailable)) {

        //alert('Issue cards must be less than cards available');
        jquery_min_p("#hwarning").text("Issue cards must be less than cards available!!");
        bootstrap_min_p("#WarningPopup").modal('show');

    }
    else {
        if (restroId == 0) {
            jquery_min_p("#hwarning").text("Please Select Restaurant!!");
           bootstrap_min_p("#WarningPopup").modal('show');
        }
        else {

            //jquery_min_p('#txtissuecard').removeClass('validate');
            //jquery_min_p("#ddlcardlength").removeClass('validate');

            jquery_min_p.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "/Loyalty/SaveIssueCards",
                data: "{'IssueCards':'" + IssueCards + "','restroId':'" + restroId + "','length':'" + length + "'}",
                dataType: "json",
                async: false,
                success: function (result) {
                    BindCardAvailable();
                    BindResturantwisegrid(restroId);


                    jquery_min_p("#popupsuccess").text("Card Issued Successfully");
                    jquery_min_p("#savePopup").modal('show');

                   
                    

                }
                
            });
            jquery_min_p("#txtissuecard").val();
        }
    }
}

function Reset()
{
    jquery_min_p("#txtamount").val("");
    jquery_min_p("#txtearnedpoint").val("");
    jquery_min_p("#txtredeemamount").val("");
    jquery_min_p("#txtdate").val("");
    jquery_min_p("#divcard").html("");


    jquery_min_p('#txtamount').removeClass('validate');
    jquery_min_p('#txtearnedpoint').removeClass('validate');
    jquery_min_p('#txtredeemamount').removeClass('validate');
    jquery_min_p('#txtdate').removeClass('validate');

}


   function ResetGC()
{

    jquery_min_p("#txtcardno").val("");
    jquery_min_p("#txtstartfrom").val("");
    jquery_min_p("#txtcardlength").val("");


    jquery_min_p('#txtcardno').removeClass('validate');
    jquery_min_p('#txtstartfrom').removeClass('validate');
    jquery_min_p('#txtcardlength').removeClass('validate');

}

function ResetIC()
{

    jquery_min_p("#ddlcardlength").val("0");
    jquery_min_p("#txtissuecard").val("");
    //divcard
    jquery_min_p("#divcard").html("");

    jquery_min_p('#ddlcardlength').removeClass('validate');
    jquery_min_p('#txtissuecard').removeClass('validate');
}

//Loyalty Rules
function validaterules()
{
    var flag = 0;
    if (jquery_min_p("#txtamount").val() == "") {
        jquery_min_p("#txtamount").addClass('validate');
        flag = 1;
    }
    if (jquery_min_p("#txtearnedpoint").val() == "") {
        jquery_min_p("#txtearnedpoint").addClass('validate');
        flag = 1;
    }
    if (jquery_min_p("#txtredeemamount").val() == "") {
        jquery_min_p("#txtredeemamount").addClass('validate');
        flag = 1;
    }
    if (jquery_min_p("#txtdate").val() == "") {
        jquery_min_p("#txtdate").addClass('validate');
        flag = 1;
    }
    if (flag == 1) {
        return false;
    }
    else {
        return true;
    }


}

function SaveRule()
{
    var amount = jquery_min_p("#txtamount").val();
    var earnedpoints = jquery_min_p("#txtearnedpoint").val();
    var redeemamount = jquery_min_p("#txtredeemamount").val();
    var date = jquery_min_p("#txtdate").val();

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Loyalty/SaveRule",
        data: "{'amount':'" + amount + "','earnedpoints':'" + earnedpoints + "','redeemamount':'" + redeemamount + "','date':'" + date + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            jquery_min_p("#popupsuccess").text("Rule Saved Successfully");
           jquery_min_p("#savePopup").modal('show');
           BindRule();


        }
    });

    
}

function BindRule()
    {
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Loyalty/BindPointsNew",
        data: "{}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            //var jsonData = result;
            jquery_min_p("#rulesTable tbody").empty();
            var ArrayCount = result.length;
            for (var i = 0; i < ArrayCount; i++) {
                var row = row + "<tr>"
                var row = row + "<td width='15%'> " + result[i].EffectiveFrom + " </td>";
                //row = row + "<td> " + result[i].EffectiveTo + "</td>";
                row = row + "<td width='15%'> " + result[i].BillAmount + "</td>";
                row = row + "<td width='25%'> " + result[i].ReedemableAmount + "</td>";
                row = row + "<td width='15%'> " + result[i].EarnedPoints + "</td>";
                row = row + "<td width='30%'> " + result[i].CreatedBy + "</td>";
                row = row + "</tr>"
                //onclick='BindCard(" + result[i].Length + ");'
            }
            jquery_min_p("#rulesTable tbody").append(row);

            
        },
        error: function () {


        }
    });
}



function rowvalidate()
{
    var flag = 1;
    jquery_min_p("#cardDetailsTable tbody tr").each(function () {
       
        if (this.className=="selectedItem") {
            
            flag = 0;
            
        }
       

    });
    

    if(flag==1)
    {
        // alert('please select row');
        jquery_min_p('#hwarning').text('Please select Create New or Existing');
        jquery_min_p('#WarningPopup').modal('show');
        return false;
        
        
    }
    else {
        if (jquery_min_p('#txtcardno').val() == "") {
            jquery_min_p('#txtcardno').addClass('validate');
            flag = 1;

        }
        return true;
    }

    
}

function ReadConfigSettings() {
    alert(test);
}


