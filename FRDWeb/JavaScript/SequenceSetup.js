jquery_min_p(document).ready(function () {

    BindResturantMenu();


    //jquery_min_p(document).ready(function () {
    //    jquery_min_p("#txtempgridinput").on("keyup", function () {
    //        var value = jquery_min_p(this).val().toLowerCase();
    //        jquery_min_p("#restaurantList *").filter(function () {
    //            jquery_min_p(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    //        });
    //    });
    //});

    jquery_min_p("#txtempgridinput").on("keyup", function () {
        val = jquery_min_p(this).val().toLowerCase();
        jquery_min_p("#restaurantList *").each(function () {
            jquery_min_p(this).toggle(jquery_min_p(this).text().toLowerCase().includes(val));
        });
    });




    jquery_min_p("#btnSubmitorder").click(function () {


        //validatorder();

        if(validatorder() )
        {
            UpdateOrderNoSequence();
        }

        else {
            return false;
        }

    });

    jquery_min_p("#btnSubmitinvoice").click(function () {
       // validatinvoice();
        if (validatinvoice() ) {
            UpdateInvoiceNoSequence();
        }
        else {
            return false;
        }

    });

    jquery_min_p("#btnSubmitsales").click(function () {

        //validatsales();
        if (validatsales() ) {
            UpdatesalesNoSequence();
        }
        else {
            return false;
        }

    });


    jquery_min_p("#btnSubmitreceipt").click(function () {
       // validatreceipt();
        if (validatreceipt() ) {
            UpdateReceiptNoSequence();
        }
        else {
            return false;
        }


    });


    jquery_min_p("#btnback").click(function () {
        
        var Id = jquery_min_p("#lblRestroId").text().trim();
        BindResturantinformation(Id)

    });



});

function BindResturantMenu()
{

   
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
           // var id = result[i].restroId;
            //Query = Query + "<div class='scrollable' >";
            for (var i = 0; i < ArrayCount; i++) {
                
                Query = Query + "<div class='sectionBox' onclick='BindResturantinformation(" + result[i].restroId + ");' ondblclick='Edit(" + result[i].restroId + ");'><a href='#'>";
             
                Query = Query + "<h6>" + result[i].name + "</h6></a></div>";
               
            }
           // Query = Query + "</div>";



            jquery_min_p("#restaurantList").append(Query);
            BindResturantinformation(result[0].restroId);

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




function BindResturantinformation(id) {
    jquery_min_p("#sequenceForm").css('display', 'none');
    jquery_min_p("#sequenceTable").css('display', 'block');
  
    jquery_min_p("#tbl tbody").html("");
  
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/SequenceSetup/BindResturantinformation",
        data: "{'id':'" + id + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsonData = result.Table;
            var jsonData1 = result.Table1;
           
            var ArrayCount = jsonData.length;
            if (jsonData.length > 0) {
                for (var i = 0; i < ArrayCount; i++) {
                    var row = row + '<tr><td> ' + jsonData[i].SequenceNo + ' </td> <td> ' + jsonData[i].Startfrom + ' </td> <td>' + jsonData[i].Fixedvalue + '</td> <td>' + jsonData[i].Type + '</td> <td>' + jsonData[i].CreatedOn + '</td> <td>' + jsonData[i].NextNo + '</td> </tr>'

                }
              


                jquery_min_p("#tbl tbody").append(row);
            }

            else {

                var markup = "<tr><td colspan='6'>'No Record Found..'</td></tr>";
                jquery_min_p("#tbl tbody").append(markup);
            }

          
            jquery_min_p("#sequenceTable").css('display', 'block');

            Reset();

        },

        error: function () {

        }
    });
}

function Edit(id)
{
    //removeclass();
    //alert('hello');

    jquery_min_p("#lblRestroId").text(id);

    jquery_min_p("#sequenceTable").css('display', 'none');
    jquery_min_p("#sequenceForm").css('display', 'block');

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/SequenceSetup/Edit",
        data: "{'id':'" + id + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            reset();
            var i = 0;
            var jsonData = result;          
            var ArrayCount = result.length;
            if (ArrayCount > 0)
                {
                for (var i = 0; i < ArrayCount; i++) {

                    if (result[i].Type == "Sales Return") {

                       
                        if (jsonData[i].Length == '')
                        {
                            jquery_min_p("#txtsalesreturnno").val('');
                        }

                        if (jsonData[i].Startfrom == '') {
                            jquery_min_p("#txtsalesreturnstart").val('');
                        }

                        if (jsonData[i].Fixedvalue == '') {
                            jquery_min_p("#txtsalesreturnfixed").val('');
                        }


                        jquery_min_p("#txtsalesreturnno").val(jsonData[i].Length);
                        jquery_min_p("#txtsalesreturnstart").val(jsonData[i].Startfrom);
                        jquery_min_p("#txtsalesreturnfixed").val(jsonData[i].Fixedvalue);


                    }

                    else if (result[i].Type == "Order") {


                        if (jsonData[i].Length == '') {
                            jquery_min_p("#txtorderno").val('');
                        }

                        if (jsonData[i].Startfrom == '') {
                            jquery_min_p("#txtorderstart").val('');
                        }

                        if (jsonData[i].Fixedvalue == '') {
                            jquery_min_p("#txtorderfixed").val('');
                        }


                        jquery_min_p("#txtorderno").val(jsonData[i].Length);
                        jquery_min_p("#txtorderstart").val(jsonData[i].Startfrom);
                        jquery_min_p("#txtorderfixed").val(jsonData[i].Fixedvalue);



                    }

                    else if (result[i].Type == "Invoice") {


                        if (jsonData[i].Length == '') {
                            jquery_min_p("#txtinvoiceno").val('');
                        }

                        if (jsonData[i].Startfrom == '') {
                            jquery_min_p("#txtinvoicestart").val('');
                        }

                        if (jsonData[i].Fixedvalue == '') {
                            jquery_min_p("#txtinvoicefixed").val('');
                        }



                        jquery_min_p("#txtinvoiceno").val(jsonData[i].Length);
                        jquery_min_p("#txtinvoicestart").val(jsonData[i].Startfrom);
                        jquery_min_p("#txtinvoicefixed").val(jsonData[i].Fixedvalue);


                    }

                    else if (result[i].Type == "Receipt") {

                        

                        if (jsonData[i].Length == '') {
                            jquery_min_p("#txtreceiptno").val('');
                        }

                        if (jsonData[i].Startfrom == '') {
                            jquery_min_p("#txtreceiptstart").val('');
                        }

                        if (jsonData[i].Fixedvalue == '') {
                            jquery_min_p("#txtreceiptfixed").val('');
                        }




                        jquery_min_p("#txtreceiptno").val(jsonData[i].Length);
                        jquery_min_p("#txtreceiptstart").val(jsonData[i].Startfrom);
                        jquery_min_p("#txtreceiptfixed").val(jsonData[i].Fixedvalue);





                    }


                }

            }



            else
            {

                jquery_min_p("#txtsalesreturnno").val(" ");
                jquery_min_p("#txtsalesreturnstart").val(" ");
                jquery_min_p("#txtsalesreturnfixed").val(" ");

                jquery_min_p("#txtorderno").val(" ");
                jquery_min_p("#txtorderstart").val(" ");
                jquery_min_p("#txtorderfixed").val(" ");

                jquery_min_p("#txtinvoiceno").val(" ");
                jquery_min_p("#txtinvoicestart").val(" ");
                jquery_min_p("#txtinvoicefixed").val(" ");

                jquery_min_p("#txtreceiptno").val(" ");
                jquery_min_p("#txtreceiptstart").val(" ");
                jquery_min_p("#txtreceiptfixed").val(" ");



            }
            
            Reset();
        },

        error: function () {

        }
    });

  
}

function UpdateOrderNoSequence()
{

    //var url = window.location.pathname;
    //var id = url.substring(url.lastIndexOf('/') + 1);

    jquery_min_p("#sequenceTable").css('display', 'none');
    jquery_min_p("#sequenceForm").css('display', 'block');

   

    var Ordernumberlength = jquery_min_p("#txtorderno").val();
    var ordernumberstart = jquery_min_p("#txtorderstart").val();
    var orderfixednumber = jquery_min_p("#txtorderfixed").val();
    var type = "O";
    var id = jquery_min_p('#lblRestroId').text();

  

    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/SequenceSetup/UpdateorderSequence",
        data: "{'id':'" + id + "','Ordernumberlength':'" + Ordernumberlength + "','ordernumberstart':'" + ordernumberstart + "','orderfixednumber':'" + orderfixednumber + "','type':'" + type + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsonData = result;          
            var ArrayCount = result.length;
            
            jquery_min_p('#popupsuccess').text('Updated Successfully');
            jquery_min_p('#savePopup').modal('show');
            BindResturantinformation(id);
        },

        error: function () {

        }
    });

  
}



function UpdateInvoiceNoSequence() {

   

    jquery_min_p("#sequenceTable").css('display', 'none');
    jquery_min_p("#sequenceForm").css('display', 'block');
  

   
   

    var invoicenumberlength = jquery_min_p("#txtinvoiceno").val();
    var invoicenumberstart = jquery_min_p("#txtinvoicestart").val();
    var invoicefixednumber = jquery_min_p("#txtinvoicefixed").val();
    var id = jquery_min_p('#lblRestroId').text();
    var type = "I";


    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/SequenceSetup/UpdateInvoiceNoSequence",
        data: "{'id':'" + id + "','invoicenumberlength':'" + invoicenumberlength + "','invoicenumberstart':'" + invoicenumberstart + "','invoicefixednumber':'" + invoicefixednumber + "','type':'" + type + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsonData = result;
            var ArrayCount = result.length;
            jquery_min_p('#popupsuccess').text('Updated Successfully');
            jquery_min_p('#savePopup').modal('show');

            BindResturantinformation(id);
        },

        error: function () {

        }
    });


}

function UpdatesalesNoSequence() {

  

    jquery_min_p("#sequenceTable").css('display', 'none');
    jquery_min_p("#sequenceForm").css('display', 'block');

    var id = jquery_min_p('#lblRestroId').text();
   



    var salesorderlength = jquery_min_p("#txtsalesreturnno").val();
    var salesnumberstart = jquery_min_p("#txtsalesreturnstart").val();
    var salesfixednumber = jquery_min_p("#txtsalesreturnfixed").val();
    var type = "S";


    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/SequenceSetup/UpdatesalesNoSequence",
        data: "{'id':'" + id + "','salesorderlength':'" + salesorderlength + "','salesnumberstart':'" + salesnumberstart + "','salesfixednumber':'" + salesfixednumber + "','type':'" + type + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsonData = result;
            var ArrayCount = result.length;
            jquery_min_p('#popupsuccess').text('Updated Successfully');
            jquery_min_p('#savePopup').modal('show');

            BindResturantinformation(id);
        },

        error: function () {

        }
    });


}



function UpdateReceiptNoSequence() {

   
    jquery_min_p("#sequenceTable").css('display', 'none');
    jquery_min_p("#sequenceForm").css('display', 'block');





    var id = jquery_min_p('#lblRestroId').text();

    var receiptnumberlength = jquery_min_p("#txtreceiptno").val();
    var receiptnumberstart = jquery_min_p("#txtreceiptstart").val();
    var receiptfixednumber = jquery_min_p("#txtreceiptfixed").val();
    var type = "R";


    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/SequenceSetup/UpdateReceiptNoSequence",
        data: "{'id':'" + id + "','receiptnumberlength':'" + receiptnumberlength + "','receiptnumberstart':'" + receiptnumberstart + "','receiptfixednumber':'" + receiptfixednumber + "','type':'" + type + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsonData = result;
            var ArrayCount = result.length;
            jquery_min_p('#popupsuccess').text('Updated Successfully');
            jquery_min_p('#savePopup').modal('show');
            BindResturantinformation(id);

        },

        error: function () {

        }
    });


}











//function removeclass() {


//    jquery_min_p("#txtsalesreturnno").attr("disabled", "disabled");
//    jquery_min_p("#txtsalesreturnstart").attr("disabled", "disabled");
//    jquery_min_p("#txtsalesreturnfixed").attr("disabled", "disabled");

//    jquery_min_p("#txtorderno").attr("disabled", "disabled");
//    jquery_min_p("#txtorderstart").attr("disabled", "disabled");
//    jquery_min_p("#txtorderfixed").attr("disabled", "disabled");

   
//    jquery_min_p("#txtinvoiceno").attr("disabled", "disabled");
//    jquery_min_p("#txtinvoicestart").attr("disabled", "disabled");
//    jquery_min_p("#txtinvoicefixed").attr("disabled", "disabled");

//    jquery_min_p("#txtreceiptno").attr("disabled", "disabled");
//    jquery_min_p("#txtreceiptstart").attr("disabled", "disabled");
//    jquery_min_p("#txtreceiptfixed").attr("disabled", "disabled");
//}




//function Validate() {


//    jquery_min_p("#txtsalesreturnno").removeAttr("disabled");
//    jquery_min_p("#txtsalesreturnstart").removeAttr("disabled");
//    jquery_min_p("#txtsalesreturnfixed").removeAttr("disabled");

//    jquery_min_p("#txtorderno").removeAttr("disabled");
//    jquery_min_p("#txtorderstart").removeAttr("disabled");
//    jquery_min_p("#txtorderfixed").removeAttr("disabled");


//    jquery_min_p("#txtinvoiceno").removeAttr("disabled");
//    jquery_min_p("#txtinvoicestart").removeAttr("disabled");
//    jquery_min_p("#txtinvoicefixed").removeAttr("disabled");

//    jquery_min_p("#txtreceiptno").removeAttr("disabled");
//    jquery_min_p("#txtreceiptstart").removeAttr("disabled");
//    jquery_min_p("#txtreceiptfixed").removeAttr("disabled");
//}




function validatorder() {


    var flag = 0;
    
    if (jquery_min_p('#txtorderno').val().trim() == '') {
        jquery_min_p('#txtorderno').addClass('validate');
        flag = 1;
    }
    if (jquery_min_p('#txtorderstart').val().trim() == '') {
        jquery_min_p('#txtorderstart').addClass('validate');
        flag = 1;
    }
    if (jquery_min_p('#txtorderfixed').val().trim() == '') {
        jquery_min_p('#txtorderfixed').addClass('validate');
        flag = 1;
    }
   


    if (flag == 1) {
        return false;
    }
    else {
        return true;
    }

}
function validatinvoice() {


    var flag = 0;
    if (jquery_min_p('#txtinvoiceno').val().trim() == '') {
        jquery_min_p('#txtinvoiceno').addClass('validate');
        flag = 1;
    }
    if (jquery_min_p('#txtinvoicestart').val().trim() == '') {
        jquery_min_p('#txtinvoicestart').addClass('validate');
        flag = 1;
    }
    if (jquery_min_p('#txtinvoicefixed').val().trim() == '') {
        jquery_min_p('#txtinvoicefixed').addClass('validate');
        flag = 1;
    }



    if (flag == 1) {
        return false;
    }
    else {
        return true;
    }

}
function validatsales() {


    var flag = 0;
    if (jquery_min_p('#txtsalesreturnno').val().trim() == '') {
        jquery_min_p('#txtsalesreturnno').addClass('validate');
        flag = 1;
    }
    if (jquery_min_p('#txtsalesreturnstart').val().trim() == '') {
        jquery_min_p('#txtsalesreturnstart').addClass('validate');
        flag = 1;
    }
    if (jquery_min_p('#txtsalesreturnfixed').val().trim() == '') {
        jquery_min_p('#txtsalesreturnfixed').addClass('validate');
        flag = 1;
    }



    if (flag == 1) {
        return false;
    }
    else {
        return true;
    }

}
function validatreceipt() {


    var flag = 0;
    if (jquery_min_p('#txtreceiptno').val().trim() == '') {
        jquery_min_p('#txtreceiptno').addClass('validate');
        flag = 1;
    }
    if (jquery_min_p('#txtreceiptstart').val().trim() == '') {
        jquery_min_p('#txtreceiptstart').addClass('validate');
        flag = 1;
    }
    if (jquery_min_p('#txtreceiptfixed').val().trim() == '') {
        jquery_min_p('#txtreceiptfixed').addClass('validate');
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
    //-----------orderno-------//
    if (jquery_min_p('#txtorderno').val() != '') {
        jquery_min_p('#txtorderno').removeClass('validate');
    }
    if (jquery_min_p('#txtorderstart').val() != '') {
        jquery_min_p('#txtorderstart').removeClass('validate');
    }


    if (jquery_min_p('#txtorderfixed').val() != '') {
        jquery_min_p('#txtorderfixed').removeClass('validate');

    }

    //------------invoiceno-------------//
    if (jquery_min_p('#txtinvoiceno').val() != '') {
        jquery_min_p('#txtinvoiceno').removeClass('validate');

    }
    if (jquery_min_p('#txtinvoicestart').val() != '') {
        jquery_min_p('#txtinvoicestart').removeClass('validate');

    }
    if (jquery_min_p('#txtinvoicefixed').val() != '') {
        jquery_min_p('#txtinvoicefixed').removeClass('validate');

    }


    //-------------------salesno---------------------//
    if (jquery_min_p('#txtsalesreturnno').val() != '') {
        jquery_min_p('#txtsalesreturnno').removeClass('validate');

    }
    if (jquery_min_p('#txtsalesreturnstart').val() != '') {
        jquery_min_p('#txtsalesreturnstart').removeClass('validate');

    }
    if (jquery_min_p('#txtsalesreturnfixed').val() != '') {
        jquery_min_p('#txtsalesreturnfixed').removeClass('validate');

    }


    //------------------receiptno------------------------//

    if (jquery_min_p('#txtreceiptno').val() != '') {
        jquery_min_p('#txtreceiptno').removeClass('validate');

    }
    if (jquery_min_p('#txtreceiptstart').val() != '') {
        jquery_min_p('#txtreceiptstart').removeClass('validate');

    }
    if (jquery_min_p('#txtreceiptfixed').val() != '') {
        jquery_min_p('#txtreceiptfixed').removeClass('validate');

    }

}

function reset()
{
    jquery_min_p("#txtorderno").val("");
    jquery_min_p("#txtorderstart").val("");
    jquery_min_p("#txtorderfixed").val("");



    jquery_min_p("#txtinvoiceno").val("");
    jquery_min_p("#txtinvoicestart").val("");
    jquery_min_p("#txtinvoicefixed").val("");


    jquery_min_p("#txtreceiptno").val("");
    jquery_min_p("#txtreceiptstart").val("");
    jquery_min_p("#txtreceiptfixed").val("");



    jquery_min_p("#txtsalesreturnno").val("");
    jquery_min_p("#txtsalesreturnstart").val("");
    jquery_min_p("#txtsalesreturnfixed").val("");


}


