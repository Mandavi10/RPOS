
var id = "";
var List_Array = [];
var comp_Array = [];
var dataCompany = [];
jquery_min_p(document).ready(function () {


    id = jquery_min_p("#lblrestroid").text();
   

    //  alert(id);

    BindRestroData();
    jquery_min_p("#txtcacardno").keypress(function (event) {
        jquery_min_p(this).val(jquery_min_p(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }

    });

    //jquery_min_p('#icard').on('shown.bs.modal', function () {
    //    jquery_min_p('#txtcacardno').focus();
    
    //})

    jquery_min_p(function () {
        jquery_min_p("#txtcacardno").focus();
    });

    jquery_min_p("#txtcacardno").change(function () {


        checkcardno();
    });
    jquery_min_p("#txtcacardno").keypress(function (event) {
        jquery_min_p(this).val(jquery_min_p(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });





    //jquery_min_p(".btndelete").click(function () {
    //    var CardN = '';
    //    jquery_min_p('#divcardnodisplay tr').each(function (e) 
    //    {
    //        var row = jquery_min_p(this).closest('tr');

    //         CardN = row.find('td:nth-child(1)').text();
    //    });
    //    alert(CardN);
    //});



    jquery_min_p("#btncardsaveclose").click(function () {
        jquery_min_p('#cardsavePopup').modal('hide');
    });





    //jquery_min_p("#btnsaveclose").click(function () {

        
    //    List_Array.splice(0, List_Array.length);
        
    //    jquery_min_p("#divcardnodisplay").html("");
    //    BindRestroData();


    //});



    jquery_min_p("#btncardactivate").click(function () {


        var flag = 0;
        jquery_min_p('#divcardnodisplay tr').each(function (e) {
            var row = jquery_min_p(this).closest('tr');
            var CardNo = row.find('td:nth-child(1)').text();
            if (CardNo != "") {
                flag = 1;

            }

        });

        if (flag == 1) {



            jquery_min_p('#hconfirm').text('Are You Sure Want To Activate !');
            jquery_min_p('#confirmationPopup').modal('show');

        }
        else {

            jquery_min_p('#hwarning').text('Insert Card');
            jquery_min_p('#WarningPopup').modal('show');
        }



    });


    jquery_min_p("#yesBtn").click(function () {

        jquery_min_p('#confirmationPopup').modal('hide');
        saveCardActivation();
        List_Array.splice(0, List_Array.length);

        jquery_min_p("#divcardnodisplay").html("");
        BindRestroData();
    });

    
    jquery_min_p("#btnok").click(function () {
        jquery_min_p('#WarningPopup').css('none');

    });
});




















function BindRestroData() {

    var restroid = id;
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/CustomerLoyalty/BindRestroData",
        data: "{'restroid':'" + restroid + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsondata = eval(result);
            //var arraycount = result.length;
            var totalcount = result.Table1[0].coun;

            var cardcount = result.Table3[0].count;
            jquery_min_p("#lbltotalcount").text(totalcount);
            jquery_min_p("#lblcardcount").text(cardcount);
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

function checkcardno() {
    // var text = jquery_min_p('#txtcacardno').val();
    // alert()
    var cardno = jquery_min_p('#txtcacardno').val().replace('\'', '\\\'');
    //var restroid = id;

    //jquery_min_p("#divcardnodisplay").html("");

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/CustomerLoyalty/checkcardno",
        data: "{'cardno':'" + cardno + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var IsItem = 0;
            var i = 0;
            var jsondata = eval(result);
            var Query = '';

            Query = Query + "<table style='width: 98%;margin-left: 1%;'>";
            if (result[0].Column1 == "1") {
                jquery_min_p("#divcardnodisplay").html("");
                var ArrayLenght = List_Array.length;
                //if (List_Array == "") {
                //    List_Array.push(cardno);
                //}
                //else
                if (List_Array != "") {
                    for (var i = 0; i < ArrayLenght; i++) {
                        if (cardno == List_Array[i]) {
                            //alert("Card Already Selected");

                            jquery_min_p('#hwarning').text('Card Already Selected');
                            jquery_min_p('#WarningPopup').modal('show');
                            //jquery_min_p('#WarningPopup').css('block');
                             //jquery_min_p('#WarningPopup' + 'tbody').block();     
                            

                            IsItem = 1;
                        }
                        //else {

                        //}
                    }
                }
                // comp_Array.push(cardno);
                if (IsItem == 0)
                { List_Array.push(cardno); }


                for (var i = 0; i < List_Array.length; i++) {
                    Query = Query + "<tr>";
                    Query = Query + "<td>" + List_Array[i] + "</td>";
                    var test = List_Array[i];
                    //var x = 5;
                    //<i class='fa fa-trash fafadelete' aria-hidden='true' onclick='DeleteCard();'></i>
                    Query = Query + "<td onclick='Delete(this)'><i class='fa fa-trash fafadelete pull-right' aria-hidden='true'></i></td>";
                    Query = Query + "</tr>";
                }

                Query = Query + "</table>";
                jquery_min_p("#divcardnodisplay").append(Query);

               // console.log(List_Array);
                jquery_min_p('#txtcacardno').val('');

                //jquery_min_p("#lblcacardno").text(cardno);


            }

            else {
                // List_Array.splice(0, List_Array.length);

                // alert("Card already Exists");

                jquery_min_p('#hwarning').text('Card already Exists');
                jquery_min_p('#WarningPopup').modal('show');
                jquery_min_p('#txtcacardno').val('');
                // return false;
            }




        },

        error: function (result) {
            // alert("There is a Problem, Try Again!");

            jquery_min_p('#popupsuccess').text('There is a Problem, Try Again!');
            jquery_min_p('#savePopup').modal('show');
        }
    });
}









function saveCardActivation() {

    var flag = 0;
    jquery_min_p('#divcardnodisplay tr').each(function (e) {
        var row = jquery_min_p(this).closest('tr');
        var CardNo = row.find('td:nth-child(1)').text();
        if (CardNo != "") {
            flag = 1;
            // saveCardActivation();
        }

    });


    var dtotarr = [];
    var dtot = '';
    var TableDataX = "<dtXml>";
    var cardno = jquery_min_p('#txtcacardno').val();
    var restroId = id;

    jquery_min_p('#divcardnodisplay tr').each(function (e) {
        var row = jquery_min_p(this).closest('tr');
        TableDataX += "<dtXml ";
        var cardNo = row.find('td:nth-child(1)').text();
        // TableDataX += 'tableId="' + tableId + '" ';
        TableDataX += 'cardNo="' + cardNo + '" ';
        TableDataX += " />";


    });
    TableDataX += "</dtXml>";
    //alert(TableDataX);
    if (flag == 1) {

        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/CustomerLoyalty/saveCardActivation",
            data: "{'TableDataX':'" + TableDataX + "','restroId':'" + restroId + "'}",
            dataType: "json",
            async: false,
            success: function (result) {
                //console.log(result[0]);
                if (result[0].result == '1') {
                    // alert('table added to this section successfully');
                    jquery_min_p("#txtcacardno").val('');
                    jquery_min_p('#popupsuccess').text('Card Activated Successfully');
                    jquery_min_p('#savePopup').modal('show');




                    //BindvacantTable();

                    //BindTables(sittingsectionId);


                }
                else {
                    //alert('Error');
                    jquery_min_p('#popupsuccess').text('Error');
                    jquery_min_p('#savePopup').modal('show');
                }

            },

            error: function ()
            { }
        });


    }
    else {
        //alert('insert card');

        jquery_min_p('#hwarning').text('Insert Card');
        jquery_min_p('#WarningPopup').modal('show');
    }


    //});


}


function Delete(data) {
    var CardN = '';
    jquery_min_p('#divcardnodisplay tbody tr ').each(function (e) {
        CardN = jquery_min_p(data).closest('tr').text();
        jquery_min_p(data).closest('tr').remove();
    });
    console.log(CardN);
    //  List_Array.pop(CardN);

    var index = List_Array.indexOf(CardN);
    if (index > -1) {
        List_Array.splice(index, 1);
    }



}



