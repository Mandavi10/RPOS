var Flag = 0;


jquery_min_p(document).ready(function () {
    ItemGroupDropdown();
    //BindGroupItemList();
    //BindItemList();
    
    //BindNewEmpCode();
    //ItemGroupDropdown();
    UOMDropdown();

    
    jquery_min_p(document).keydown(function (event) {
        if (event.keyCode == 27) {
            bootstrap_min_p('#newItemGroupPopup').modal('hide');


        }

    });

    jquery_min_p(document).ready(function () {
        jquery_min_p("#txtsearch").on("keyup", function () {
            var value = jquery_min_p(this).val().toLowerCase();
            if(Flag==0)
            {
                
                numericcheckitem();
        }
        else {
               
                numericcheck();
            }
            //Flag = "";
            //Flag1 = "";
        });

    });

    //jquery_min_p(document).ready(function () {
    //    jquery_min_p("#txtsearch").on("keyup", function () {
    //        var value = jquery_min_p(this).val().toLowerCase();
    //        jquery_min_p("#tblgrouplist   tr").filter(function () {
    //                jquery_min_p(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    //        });
    //    });
    //});

    function numericcheck() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("txtsearch");
        filter = input.value.toUpperCase();
        table = document.getElementById("tblsearchitem");
       var tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          var  td = tr[i].getElementsByTagName("td")[0];
           var td1 = tr[i].getElementsByTagName("td")[1];
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


    //jquery_min_p(document).ready(function () {
    //    jquery_min_p("#txtsearch").on("keyup", function () {
    //var value = jquery_min_p(this).val().toLowerCase();
    //        numericcheckitem();
    //    });
    //});
    
    //var value = jquery_min_p(this).val().toLowerCase();
    //jquery_min_p("#tblsearchitem   tr").filter(function () {
    //    jquery_min_p(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    //});
    

    function numericcheckitem() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("txtsearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("tblgrouplist");
    var tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      var td = tr[i].getElementsByTagName("td")[0];
      var td1 = tr[i].getElementsByTagName("td")[1];
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


    jquery_min_p('#divcreateItemGroupBtn').click(function () {
        Flag = 0;
        
        
        jquery_min_p('#createItemGroupBtn').css('display', 'block');
        jquery_min_p('#createItemBtn').css('display', 'none');
        jquery_min_p('#divcreateItemGroupBtn').css('display', 'none');
        jquery_min_p('#divcreateItemBtn').css('display', 'none');
        jquery_min_p('#divitemgroup').css('display', 'block');

        jquery_min_p('#itemExit').css('display', 'none');
        jquery_min_p('#txtItemName').text('Item Group Master');
        BindGroupItemList();
    });

    jquery_min_p('#divcreateItemBtn').click(function () {
        Flag = 1;
    

        //id = "createNewItem"
        jquery_min_p('#txtItemName').text('Item Master');
        jquery_min_p('#createItemGroupBtn').css('display', 'none');
        jquery_min_p('#createItemBtn').css('display', 'block');
        jquery_min_p('#createNewItem').css('display', 'none');

        jquery_min_p('#itemExit').css('display', 'none');
        jquery_min_p('#divitem').css('display', 'block');
        BindItemList();
        
    });


    jquery_min_p('#itemExit').click(function () {

        window.location = "/Master/Home";

    });
    
    jquery_min_p('#btnback').click(function () {
        Flag = 0;

        jquery_min_p('#btnback').css('display', 'none');
       jquery_min_p('#txtItemName').text("");
        jquery_min_p('#createItemGroupBtn').css('display', 'none');
        jquery_min_p('#createItemBtn').css('display', 'none');
        jquery_min_p('#createNewItem').css('display', 'block');

        jquery_min_p('#dvsearch').css('display', 'none');
        jquery_min_p('#divitem').css('display', 'none');


        jquery_min_p('#createItemGroupBtn').css('display', 'none');
        jquery_min_p('#createItemBtn').css('display', 'none');
        jquery_min_p('#divcreateItemGroupBtn').css('display', 'block');
        jquery_min_p('#divcreateItemBtn').css('display', 'block');
        jquery_min_p('#divitemgroup').css('display', 'none');

        //jquery_min_p('#newitem').css('display', 'none');

        jquery_min_p('#itemExit').css('display', 'flex');
        jquery_min_p('#txtItemName').text("");



    });



    jquery_min_p("#txtitemprice").keypress(function (e) {
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



    jquery_min_p("#txtmainaccount").keypress(function (e) {
        var key = e.keyCode;
        if (key >= 65 && key <= 90 || key >= 97 && key <= 122 || key >= 33 && key <= 47 || key >= 58 && key <= 64 || key >= 91 && key <= 96 || key >= 123 && key <= 126) {
            e.preventDefault();
        }
    });


    //jquery_min_p("#txtgrpcode").keypress(function (e) {
    //    var key = e.keyCode;
    //    if (key >= 65 && key <= 90 || key >= 97 && key <= 122 || key >= 33 && key <= 47 || key >= 58 && key <= 64 || key >= 91 && key <= 96 || key >= 123 && key <= 126) {
    //        e.preventDefault();
    //    }
    //});

    jquery_min_p("#txtgrpcode").keypress(function (e) {
        var key = e.keyCode;
        if ((key > 47 && key < 58) || (key > 64 && key < 91) || (key > 96 && key < 123)) {
            
        }
        else
        {
            e.preventDefault();
        }
    });


    jquery_min_p('#itemExit').click(function () {
        // window.location = "/Master/Home";
        //history.go(-1);
        //location.reload();
        //history.back();
        // document.location.replace(document.referrer);
        
        //jquery_min_p('#dvnewitemcard').css('display', 'block');
        window.history.back();
        Reset();


    });


    jquery_min_p('#btncloseitem').click(function () {
        
        //Reset();
        bootstrap_min_p('#newItemPopup').modal('hide');

    });
    jquery_min_p('#createItemBtn').click(function () {
        //jquery_min_p("#ddlUOM").html("");

        jquery_min_p('#newItemPopup').on('shown.bs.modal', function () {
            jquery_min_p('#txtname').focus();
        })
        jquery_min_p("#lblitem").text('Add New Item');
        bootstrap_min_p('#newItemPopup').modal('show');

        jquery_min_p('#btnnewitemsave').css('display', 'block');
        jquery_min_p('#btnnewitemupdate').css('display', 'none');

        Reset();
        BindItemList();
        BindNewItemid();
        ItemGroupDropdown();
        UOMDropdown();

       // Reset();
    })

    


    jquery_min_p('#createItemGroupBtn').click(function () {
        Reset();
        BindGroupItemList();

        jquery_min_p('#newItemGroupPopup').on('shown.bs.modal', function () {
            jquery_min_p('#txtgrpcode').focus();
        })
        jquery_min_p("#lblitemgroup").text('Add New Item Group');
        jquery_min_p("#txtgrpcode").removeAttr("disabled");
        bootstrap_min_p('#newItemGroupPopup').modal('show');
        jquery_min_p('#btnitemgroupsave').css('display', 'block');
        jquery_min_p('#btnitemgroupupdate').css('display', 'none');
       // Reset();
    })






    jquery_min_p("#btnitemgroupsave").click(function () {
        if (GroupValidation()) {
            saveitemgroup();
        }
        else
        {
            return false;
        }

    });

    


    jquery_min_p("#btnitemgroupupdate").click(function () {
        if (GroupValidation()) {
            saveitemgroup();
        }
        else {
            return false;
        }

    });



    //jquery_min_p('#btncloseitemgroup').click(function () {

    //    BindGroupItemList();

    //});
    


    //jquery_min_p('#btncloseitem').click(function () {

    //    BindItemList();

    //});


    
    //jquery_min_p("#createItemBtn").click(function () {


    //    //BindNewEmpCode();
    //    //ItemGroupDropdown();
    //    //UOMDropdown();

    //});
    
    jquery_min_p("#btnnewitemsave").click(function () {

        //saveitem();


        if (ItemValidation()) {


            saveitem();
            bootstrap_min_p('#newItemPopup').modal('hide');
        }
        else {
            return false;
        }
    });


    

    jquery_min_p("#btnnewitemupdate").click(function () {

        //saveitem();


        if (ItemValidation()) {


            saveitem();
            bootstrap_min_p('#newItemPopup').modal('hide');
        }
        else {
            return false;
        }
    });


});



//function pricecheck() {
//    var mobile = document.getElementById("txtitemprice").value;
//    var pattern = /^\d{10}$/;
//    if (pattern.test(mobile)) {
//        //alert("Your mobile number : " + mobile);
//        return true;
//    }





//    // alert("It is not valid mobile number.input 10 digits number!");
//    jquery_min_p('#txtmobile').attr("placeholder", "Mobile Number");
//    jquery_min_p('#txtmobile').val('');
//    jquery_min_p('#txtmobile').attr("placeholder", "Invalid number!!");
//    jquery_min_p('#txtmobile').addClass('validate');
//    return false;
//}





function ItemGroupDropdown() {

    

    //jquery_min_p("#ddlitemgroup").val(0);
    jquery_min_p("#ddlitemgroup").html('');

    
    //var Query = Query + "<option selected='selecte'>Select</option>";



    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Master/ItemGroupDropdown",
        data: "{}",
        dataType: "json",
        async: false,

        success: function (result) {
            var i = 0;
            var jsondata = eval(result);
           // var newOption1 = newOption1 + "<option value='0' selected='Select'>Select</option>";
            // jquery_min_p('#ddlitemgroup').append(newOption1);
            $("#ddlitemgroup").append('<option value="0">Select</option>');
           // $("#ddlitemgroup").append('<input type="button" value="Seleted option" id="but_read">');
            for (var i = 0; i < result.length; i++) {

              
                var newOption = $('<option>');

                newOption.attr('value', result[i].itemgroupId).text(result[i].itemgroupName);

              
                $('#ddlitemgroup').append(newOption);

            }

        },

        error: function (result) {
            //  alert("There is a Problem, Try Again!");
            jquery_min_p('#h6warning').text('There is a Problem, Try Again!');
            jquery_min_p('#dngwarn').modal('show');
        }




    });


}



function UOMDropdown() {

    jquery_min_p("#ddlUOM").html("");
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Master/UOMDropdown",
        data: "{}",
        dataType: "json",
        async: false,

        success: function (result) {
            var i = 0;
            var jsondata = eval(result);
            var newOption="";
            $("#ddlUOM").append('<option value="0">Select</option>');
            for (var i = 0; i < result.length; i++) {
                newOption =$('<option>');
                newOption.attr('value', result[i].UOMID).text(result[i].UOMName);
                
                $('#ddlUOM').append(newOption);
            }

        },

        error: function (result) {
            // alert("There is a Problem, Try Again!");
            jquery_min_p('#h6warning').text('There is a Problem, Try Again!');
            jquery_min_p('#dngwarn').modal('show');
        }




    });


}





function saveitemgroup() {

    var ItemGroupId = jquery_min_p("#lblgroupitemid").text();
    var ItemGroupCode = jquery_min_p('#txtgrpcode').val().replace('\'', '\\\'');
    var ItemGroupName = jquery_min_p('#txtgrpname').val().replace('\'', '\\\'');
    var Description = jquery_min_p('#txtdescription').val().replace('\'', '\\\'');

    var AccountNumber = jquery_min_p('#txtmainaccount').val().replace('\'', '\\\'');
   



    {

        // jquery_min_p('#divconpass').css('display', 'none');
        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/Master/SaveItemGroup",
            data: "{'ItemGroupCode':'" + ItemGroupCode + "','ItemGroupName':'" + ItemGroupName + "','Description':'" + Description + "','AccountNumber':'" + AccountNumber + "','ItemGroupId':'" + ItemGroupId + "'}",

            dataType: "json",
            async: false,
            success: function (result) {
                var i = 0;
                var jsondata = eval(result);

                BindGroupItemList();
                Reset();
                if (result == "0") {
                    jquery_min_p('#popupsuccess').text('Item Group Saved Successfully');
                    jquery_min_p('#savePopup').modal('show');
                }
                if (result == "1") {
                    jquery_min_p('#popupsuccess').text('Item Group Updated Successfully');
                    jquery_min_p('#savePopup').modal('show');
                }

                // jquery_min_p('#successPopup').modal('show');
                //jquery_min_p('#txtcode').val(jsondata[0].EmpCode);
                //jquery_min_p('#txtname').val(jsondata[0].EmpName);
                //jquery_min_p('#txtmobile').val(jsondata[0].mobileNo);
                //jquery_min_p('#txtemail').val(jsondata[0].emailId);

                //Reset();
                //jquery_min_p('#empsavePopup').modal('show');
                // BindEmployeeDetails();


            },
            error: function (result) {
                //alert("There is a Problem, Try Again!");
                jquery_min_p('#h6warning').text('There is a Problem, Try Again!');
                jquery_min_p('#dngwarn').modal('show');
            }
        });
    }

}

function saveitem() {

    var ItemId = jquery_min_p("#lblitemid").text();
   
    var ItemName = jquery_min_p('#txtname').val().replace('\'', '\\\'');
    var ItemGroupId = jquery_min_p('#ddlitemgroup').val();
   // alert(ItemGroupId);
    var UnitOfMeasure = jquery_min_p('#ddlUOM').val();
   // alert(UnitOfMeasure);

    var ItemSalePrice = jquery_min_p('#txtitemprice').val().replace('\'', '\\\'');




    {

        // jquery_min_p('#divconpass').css('display', 'none');
        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/Master/SaveItem",
            data: "{'ItemName':'" + ItemName + "','ItemGroupId':'" + ItemGroupId + "','UnitOfMeasure':'" + UnitOfMeasure + "','ItemSalePrice':'" + ItemSalePrice + "','ItemId':'" + ItemId + "'}",

            dataType: "json",
            async: false,
            success: function (result) {
                var i = 0;
                var jsondata = eval(result);

                //jquery_min_p('#divnewitem').modal('hide');
                if (result == "0") {
                    jquery_min_p('#popupsuccess').text('Item Saved Successfully');
                    jquery_min_p('#savePopup').modal('show');
                }
                if (result == "1") {
                    jquery_min_p('#popupsuccess').text('Item Updated Successfully');
                    jquery_min_p('#savePopup').modal('show');
                }
                BindItemList();
               // Reset();

                // jquery_min_p('#successPopup').modal('show');
                //jquery_min_p('#txtcode').val(jsondata[0].EmpCode);
                //jquery_min_p('#txtname').val(jsondata[0].EmpName);
                //jquery_min_p('#txtmobile').val(jsondata[0].mobileNo);
                //jquery_min_p('#txtemail').val(jsondata[0].emailId);

                //Reset();
                
                // BindEmployeeDetails();

            },
            error: function (result) {
                // alert("There is a Problem, Try Again!");
                jquery_min_p('#h6warning').text('There is a Problem, Try Again!');
                jquery_min_p('#dngwarn').modal('show');
            }
        });
    }

}


function BindGroupItemList() {/// <reference path="../Web Services/job.asmx" />

    
    var wh = jquery_min_p(document).height();
    var gh = wh - 190;
    var dataCompany = [];
    jquery_min_p("#itemGroupGrid").html("");

    jquery_min_p.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Master/BindGroupItemList", /// <reference path="../WebServices/HolidayList.asmx" />

        data: "{}",
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
            Query = Query + "  <th>Item Group Code</th>";
            Query = Query + "<th>Item Group Name</th>";
            Query = Query + "<th>Description</th>";
            Query = Query + "<th>Main Account</th>";
            //Query = Query + "<th>Type</th>";
            Query = Query + "<th>Edit</th>";
            Query = Query + "</tr>";
            Query = Query + "</thead>";
            Query = Query + "<tbody id='tblgrouplist'>";

            for (var i = 0; i < arraycount; i++) {
                Query = Query + "";


                //Query = Query + "<tbody>";
                Query = Query + "<tr onclick='AddClassList(this)'>";
                Query = Query + "  <td id='tdgroupcode'>" + result[i].ItemGroupCode + "</td>";
                Query = Query + "  <td>" + result[i].ItemGroupName + "</td>";
                Query = Query + "  <td>" + result[i].Description + "</td>";
                Query = Query + " <td>" + result[i].AccountNumber + "</td>";
                Query = Query + " <td onclick='ShowGroupItemList(" + result[i].ItemGroupId + ");'><i class='fa fa-pencil-square-o' aria-hidden='true'></i></td>";

               // Query = Query + " <td onclick='CheckList(" + result[i].EmpID + ");'>" + result[i].EmailId + "</td>";

               // Query = Query + "<td onclick='CheckList(" + result[i].EmpID + ");'>" + result[i].Type + "</td>";


                Query = Query + "</tr>";

               // Query = Query + "</tbody>";



            }
            jquery_min_p("#itemGroupGrid").append(Query);
            
            jquery_min_p("#dvsearch").css('display', 'block');

             jquery_min_p("#btnback").css('display', 'block');

            




            //for ( i = 0; i < arraycount; i++)
            //{
            //    dataCompany.push({ RowNumber: jsonData[i].RowNumber, EmpID: jsonData[i].EmpID, EmpCode: jsonData[i].EmpCode, EmpName: jsonData[i].EmpName, mobileNo: jsonData[i].mobileNo, emailId: jsonData[i].emailId, Type: jsonData[i].Type, restroId: jsonData[i].restroId, ArabicName: jsonData[i].ArabicName });
            //}


            //jQuery.each(jsonData.Table, function (rec) {

            //    dataCompany.push({ RowNumber: jsonData.Table[i].RowNumber,EmpID: jsonData.Table[i].EmpID, EmpCode: jsonData.Table[i].EmpCode, EmpName: jsonData.Table[i].EmpName, mobileNo: jsonData.Table[i].mobileNo, emailId: jsonData.Table[i].emailId, Type: jsonData.Table[i].Type, restroId: jsonData.Table[i].restroId, ArabicName: jsonData.Table[i].ArabicName });

            //    i++;
            //});




        },

        error: function () {

        }
    });
}



function AddClassList(data) {

    // alert('enter')

    var row = jquery_min_p(data).closest('tr');

    jquery_min_p("#itemGroupGrid tbody tr").each(function () {
       
        
            jquery_min_p(this).removeClass('active');
       
        
           
        
    });
    jquery_min_p(data).addClass('active');
    

}




function BindItemList() {/// <reference path="../Web Services/job.asmx" />
    var wh = jquery_min_p(document).height();
    var gh = wh - 190;
    var dataCompany = [];
    jquery_min_p("#newItemGrid").html("");

    jquery_min_p.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Master/BindItemList", /// <reference path="../WebServices/HolidayList.asmx" />

        data: "{}",
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
            Query = Query + "  <th>Item No.</th>";
            Query = Query + "<th>Item Name</th>";
            Query = Query + "<th>Item Group</th>";
            Query = Query + "<th>Unit Of Measure</th>";
            Query = Query + "<th>Item Price</th>";
            Query = Query + "<th>Edit</th>";
            
            
            Query = Query + "</tr>";
            Query = Query + "</thead>"; 
            Query = Query + "<tbody id='tblsearchitem'>";

            for (var i = 0; i < arraycount; i++) {





                Query = Query + "";


                Query = Query + "";
                Query = Query + "<tr data-toggle='modal' data-target='#icard' onclick='CheckList(" + result[i].EmpID + ");'>";
                Query = Query + "  <td>" + result[i].ItemCode + "</td>";
                Query = Query + "  <td>" + result[i].ItemName + "</td>";
                Query = Query + "  <td>" + result[i].ItemGroupName + "</td>";
                Query = Query + " <td>" + result[i].UOMName + "</td>";
                Query = Query + " <td>" + result[i].ItemSalePrice + "</td>";
                Query = Query + " <td onclick='ShowItemList(" + result[i].ItemId + ");'><i class='fa fa-pencil-square-o' aria-hidden='true'></i></td>";
                // Query = Query + " <td onclick='CheckList(" + result[i].EmpID + ");'>" + result[i].EmailId + "</td>";

                // Query = Query + "<td onclick='CheckList(" + result[i].EmpID + ");'>" + result[i].Type + "</td>";


                Query = Query + "</tr>";



            }
            jquery_min_p("#newItemGrid").append(Query);
            jquery_min_p("#dvsearch").css('display', 'block');
            jquery_min_p("#btnback").css('display', 'block');



            //for ( i = 0; i < arraycount; i++)
            //{
            //    dataCompany.push({ RowNumber: jsonData[i].RowNumber, EmpID: jsonData[i].EmpID, EmpCode: jsonData[i].EmpCode, EmpName: jsonData[i].EmpName, mobileNo: jsonData[i].mobileNo, emailId: jsonData[i].emailId, Type: jsonData[i].Type, restroId: jsonData[i].restroId, ArabicName: jsonData[i].ArabicName });
            //}


            //jQuery.each(jsonData.Table, function (rec) {

            //    dataCompany.push({ RowNumber: jsonData.Table[i].RowNumber,EmpID: jsonData.Table[i].EmpID, EmpCode: jsonData.Table[i].EmpCode, EmpName: jsonData.Table[i].EmpName, mobileNo: jsonData.Table[i].mobileNo, emailId: jsonData.Table[i].emailId, Type: jsonData.Table[i].Type, restroId: jsonData.Table[i].restroId, ArabicName: jsonData.Table[i].ArabicName });

            //    i++;
            //});




        },

        error: function () {

        }
    });
}



function Reset()
{
    
    jquery_min_p("#txtgrpcode").val('');
    jquery_min_p("#lblgroupitemid").text('');
    
    jquery_min_p("#txtgrpname").val('');
    jquery_min_p("#txtdescription").val('');
    jquery_min_p("#txtmainaccount").val('');
    jquery_min_p("#txtname").val('');
    
    jquery_min_p("#txtitemprice").val('');
    
    jquery_min_p("#lblitemid").text('');
    jquery_min_p("#txtitemcode").val('');
    
    jquery_min_p("#txtsearch").val('');
    jquery_min_p('#txtgrpcode').removeClass('validate');

    jquery_min_p('#txtgrpname').removeClass('validate');
    jquery_min_p('#txtdescription').removeClass('validate');
    jquery_min_p('#txtmainaccount').removeClass('validate');


    jquery_min_p('#txtname').removeClass('validate');

    jquery_min_p('#ddlitemgroup').removeClass('validate');
    jquery_min_p('#ddlUOM').removeClass('validate');
    jquery_min_p('#txtitemprice').removeClass('validate');
    jquery_min_p('#txtitemcode').removeClass('validate');

}



function BindNewItemid()
{

      
       // jquery_min_p("#newItemGrid").html("");

        jquery_min_p.ajax({

            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/Master/BindNewItemNo", /// <reference path="../WebServices/HolidayList.asmx" />

            data: "{}",
            dataType: "json",
            async: false,
            success: function (result) {
               
                console.log(result);
                var i = 0;
                var jsonData = eval(result);
             
                var code = result[i].Itemname;
             

                jquery_min_p("#txtitemcode").val(code);

                
                

               




            },

            error: function () {

            }
        });
    }

function EditItemList()
{
    // alert(empid);
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Master/EditItemList",
        data: "{'ItemId':'" + ItemId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsondata = eval(result);

            // jquery_min_p('#successPopup').modal('show');

            //jquery_min_p('#lblcode').text(jsondata[0].EmpCode);
            //jquery_min_p('#lblname').text(jsondata[0].EmpName);
            //jquery_min_p('#lblmobile').text(jsondata[0].mobileNo);
            //jquery_min_p('#lblemail').text(jsondata[0].EmailId);
            //jquery_min_p('#lblroledisplay').text(jsondata[0].RoleName);
            //jquery_min_p('#lblkitchen').text(jsondata[0].kitchensectionname);
            //jquery_min_p('#lblrest').text(jsondata[0].Restroname);

            //jquery_min_p("#lblcode").css("display", "block");
            //jquery_min_p("#lblname").css("display", "block");
            //jquery_min_p("#lblmobile").css("display", "block");
            //jquery_min_p("#lblemail").css("display", "block");
            //jquery_min_p("#lblrest").css("display", "block");
            //jquery_min_p("#lblroledisplay").css("display", "block");
            //jquery_min_p("#lblkitchen").css("display", "block");



            //jquery_min_p("#txtcode").css("display", "none");
            //jquery_min_p("#txtname").css("display", "none");
            //jquery_min_p("#txtmobile").css("display", "none");
            //jquery_min_p("#txtemail").css("display", "none");
            //jquery_min_p("#ddlrest").css("display", "none");
            ////jquery_min_p("#ddlselectroledisplay")
            //jquery_min_p('#ddlselectroledisplay').selectpicker('hide');
            //jquery_min_p("#ddlkitchen").css("display", "none");
            //jquery_min_p("#divuserpin").css("display", "none");
            //jquery_min_p("#divpassword").css("display", "none");
            //jquery_min_p("#divconpassword").css("display", "none");
            //jquery_min_p("#divaccesscode").css("display", "none");
            //jquery_min_p("#btnsaveemp").css("display", "none");
            //jquery_min_p("#btncancelemp").css("display", "none");
            //jquery_min_p("#dvimage").css("display", "none");
            //jquery_min_p("#dvexit").css("display", "none");



        },
        error: function (result) {
            // alert("There is a Problem, Try Again!");
            jquery_min_p('#h6warning').text('There is a Problem, Try Again!');
            jquery_min_p('#dngwarn').modal('show');
        }
    });



}




function ShowItemList(ItemId) {

    BindItemList();
    Reset();
    //alert(ItemId);
    var a = ItemId;
    jquery_min_p("#lblitemid").text(a);

    jquery_min_p("#lblitem").text('Update Item');
    //console.log(a);
     //alert(jquery_min_p("#lblitemid").text());



    jquery_min_p.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Master/ShowItemList", /// <reference path="../WebServices/HolidayList.asmx" />

        data: "{'ItemId':'" + ItemId + "'}",
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


            var code = result[i].ItemCode;
            var ItemName = result[i].ItemName;
            var ItemGroupName = result[i].ItemGroupName;
            var UOMName = result[i].UOMName;
            var ItemSalePrice = result[i].ItemSalePrice;
            var ItemGroupId = result[i].ItemGroupId;
            var UOMID = result[i].UOMID;
        
           // alert(ItemGroupId);


            jquery_min_p("#txtitemcode").val(code);
            jquery_min_p("#txtname").val(ItemName);
            jquery_min_p("#ddlitemgroup").val(ItemGroupId);

           

            jquery_min_p("#ddlUOM ").val(UOMID);
         
            jquery_min_p("#txtitemprice").val(ItemSalePrice);
           // jquery_min_p('#createNewItem').css('display', 'none');
           

            jquery_min_p('#btnnewitemsave').css('display', 'none');
            jquery_min_p('#btnnewitemupdate').css('display', 'block');

            bootstrap_min_p("#newItemPopup").modal('show');


            





        },

        error: function () {

        }
    });
}


function ItemValidation() {
    var Flag = 0;



   
    if ($.trim(jquery_min_p('#txtitemprice').val()) == '') {
        jquery_min_p('#txtitemprice').addClass('validate');
        Flag = 1;
    }

    if ($.trim(jquery_min_p('#txtname').val()) == '') {
        jquery_min_p('#txtname').addClass('validate');
        Flag = 1;
    }
   
    //var length = jquery_min_p("#ddlitemgroup option:selected").val();
    //var length1 = jquery_min_p("#ddlUOM option:selected").val();
   

    if (jquery_min_p('#ddlitemgroup').val() == '0') {
        jquery_min_p('#ddlitemgroup').addClass('validate');
        Flag = 1;
    }
  

    if (jquery_min_p('#ddlUOM').val() == '0') {
        jquery_min_p('#ddlUOM').addClass('validate');
        Flag = 1;
    }

    if (Flag == 1)
    {
        return false;
    }
    else {
        return true;
    }

   
    


}




function ItemRemoveClass()
{
    if (jquery_min_p('#txtitemprice').val() != '') {
        jquery_min_p('#txtitemprice').removeClass('validate');
    }
    if (jquery_min_p('#txtname').val() != '') {
        jquery_min_p('#txtname').removeClass('validate');
    }

    //if (jquery_min_p('#ddlitemgroup').val() != "0") {
    //    jquery_min_p('#ddlitemgroup').removeClass('validate');
    //}

    if (jquery_min_p("#ddlitemgroup").val() != "0") {
        jquery_min_p("#ddlitemgroup").removeClass('validate');

    }

    if (jquery_min_p("#ddlUOM").val() != "0") {
        jquery_min_p("#ddlUOM").removeClass('validate');

    }



    //if (!jquery_min_p('#ddlitemgroup').val()) {
    
    ////if (jquery_min_p('#ddlitemgroup').has('option').length > 0)
    ////{
    //    jquery_min_p('#ddlitemgroup').removeClass('validate');
    //    }


    //if (jquery_min_p('#ddlUOM').val() != "0") {
    //    jquery_min_p('#ddlUOM').removeClass('validate');
    //}
}


function GroupValidation()
{
    var Flag = 0;

    if ($.trim(jquery_min_p('#txtgrpcode').val()) == '') {
        jquery_min_p('#txtgrpcode').addClass('validate');
        Flag = 1;
    }

    if ($.trim(jquery_min_p('#txtgrpname').val()) == '') {
        jquery_min_p('#txtgrpname').addClass('validate');
        Flag = 1;
    }
    if ($.trim(jquery_min_p('#txtdescription').val()) == '') {
        jquery_min_p('#txtdescription').addClass('validate');
        Flag = 1;
    }
    if ($.trim(jquery_min_p('#txtmainaccount').val()) == '') {
        jquery_min_p('#txtmainaccount').addClass('validate');
        Flag = 1;
    }
    if (Flag == 1) {
        return false;
    }
    else {
        return true;
    }
   
}






function GroupRemoveClass()
{
    if (jquery_min_p('#txtgrpcode').val() != '') {
        jquery_min_p('#txtgrpcode').removeClass('validate');
    }
    if (jquery_min_p('#txtgrpname').val() != '') {
        jquery_min_p('#txtgrpname').removeClass('validate');
    }
    if (jquery_min_p('#txtdescription').val() != '') {
        jquery_min_p('#txtdescription').removeClass('validate');
    }
    if (jquery_min_p('#txtmainaccount').val() != '') {
        jquery_min_p('#txtmainaccount').removeClass('validate');
    }
    

}



function ShowGroupItemList(ItemGroupId)
{
    BindGroupItemList();
    Reset();
    var a = ItemGroupId;
    jquery_min_p("#lblgroupitemid").text(a);
    jquery_min_p("#lblitemgroup").text('Update Item Group');
    //console.log(a);
    //alert(jquery_min_p("#lblitemid").text());
    

    jquery_min_p.ajax({

        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Master/ShowGroupItemList", /// <reference path="../WebServices/HolidayList.asmx" />

        data: "{'ItemGroupId':'" + ItemGroupId + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            // alert(result);
            console.log(result);
            var i = 0;
            var jsonData = eval(result);
            // var arraycount = result.length;

            jquery_min_p('#newItemGroupPopup').on('shown.bs.modal', function () {
                jquery_min_p('#txtgrpname').focus();
            })


            // newItemPopup

            //jquery_min_p("#newItemPopup").css("display", "block");

            var GroupName = result[i].ItemGroupName;
            var GroupCode = result[i].ItemGroupCode;
            var AccountNo = result[i].AccountNumber;
            var Descriptions = result[i].Description;
            //var ItemSalePrice = result[i].ItemSalePrice;


           // alert(GroupName);


            jquery_min_p("#txtgrpcode").val(GroupCode);
            jquery_min_p("#txtgrpname").val(GroupName);
           
            jquery_min_p("#txtdescription").val(Descriptions);
            jquery_min_p("#txtmainaccount").val(AccountNo);

            jquery_min_p('#txtgrpcode').attr("disabled", "disabled");

            jquery_min_p('#btnitemgroupsave').css('display', 'none');
            jquery_min_p('#btnitemgroupupdate').css('display', 'block');

            bootstrap_min_p("#newItemGroupPopup").modal('show');








        },

        error: function () {

        }
    });
}





function CheckGroupcode() {
    var GroupCode = jquery_min_p('#txtgrpcode').val().replace('\'', '\\\'');
    jquery_min_p.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Master/CheckGroupcode",
        data: "{'GroupCode':'" + GroupCode + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            var i = 0;
            var jsondata = eval(result);
            // alert(jsondata[0].result);
            console.log(result);
            //jquery_min_p('#divempcode').css('display', 'none');
            if (jsondata[0].result == '1') {
                jquery_min_p('#txtgrpcode').val('');
                jquery_min_p('#txtgrpcode').attr('placeholder', 'Group Code already exist.');
                jquery_min_p('#txtgrpcode').addClass('validate');
            }
            else {

                jquery_min_p('#divempcode').css('display', 'none');
                // saveemployee();
            }

        },

        error: function (result) {
            //  alert("There is a Problem, Try Again!");
            jquery_min_p('#h6warning').text('There is a Problem, Try Again!');
            jquery_min_p('#dngwarn').modal('show');
        }
    });
}




//function filter() {
//    var keyword = document.getElementById("test").value;
//    var fleet = document.getElementById("select");
//    for (var i = 0; i < fleet.length; i++) {
//        var txt = fleet.options[i].text;
//        if (txt.substring(0, keyword.length).toLowerCase() !== keyword.toLowerCase() && keyword.trim() !== "") {
//            fleet.options[i].style.display = 'none';
//        } else {
//            fleet.options[i].style.display = 'list-item';
//        }
//    }
//}


function filterText() {
    var rex = new RegExp($('#ddlitemgroup').val());
    if (rex == "/all/") { clearFilter() } else {
        $('#ddlitemgroup').hide();
        $('#ddlitemgroup').filter(function () {
            return rex.test($(this).text());
        }).show();
    }
}