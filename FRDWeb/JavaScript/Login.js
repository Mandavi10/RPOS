
$(document).ready(function () {
   

    
    $("#btnlogin").click(function () {
        Validate();

                                                     
    });


    $("#txtUserId").keyup(function (event) {
        if (event.keyCode === 13) {
            $("#btnlogin").click();
        }
    });



    $("#txtPassWord").keyup(function (event) {
        if (event.keyCode === 13) {
            $("#btnlogin").click();
        }   
    });
});



function Validate() {
    var UserId = $('#txtUserId').val();
    var Password = $('#txtPassWord').val();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/Login/CheckLogin",
        data: "{'UserPin':'" + UserId + "','Password':'" + Password + "'}",
        dataType: "json",
        async: false,
        success: function (result) {
            if (result == "4") {
                var url = "/Master/Home";
                 window.location.href = url;
            }

            else if (result == "0") {
                $('#lblDispMessage').text('Please enter Password');
                $('#lblDispMessage').show();
                return false;
            }
            else if (result == "1") {
                $('#lblDispMessage').text('Password is invalid');
                $('#lblDispMessage').show();
                return false;
            }
            else if (result == "2") {
                $('#lblDispMessage').text('Please contact to administrator');
                $('#lblDispMessage').show();
                return false;
            }
            else if (result == "3") {              
                $('#lblDispMessage').text('access code is invalid');
                $('#lblDispMessage').show();
                return false;
            }
            
        },
        error: function (result) {
          
            alert("Error");
        }
    })
    
}
