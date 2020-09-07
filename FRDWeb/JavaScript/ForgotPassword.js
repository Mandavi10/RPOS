jquery_min_p(document).ready(function () {

    //Validate();
    jquery_min_p("#btnClose").click(function () {

        // show Modal
        jquery_min_p('#successPopup').modal('hide');
        var url = "/Login/Login";
        window.location.href = url;
        //window.location.replace("/Login/Login");
        
            
    });
    jquery_min_p("#btnsaveclose").click(function () {

        // show Modal
        jquery_min_p('#savePopup').modal('hide');
        var url = "/Login/Login";
        window.location.href = url;
        //window.location.replace("/Login/Login");
       

    });

    
    

});




function Validate()
{
   
    var Email = jquery_min_p('#txtEmailId').val();

    if (Email == "") {
        jquery_min_p('#diverror').css('display', 'block');
        return 0;
        
    }
    

    else {
        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/ForgotPassword/Validate",
            data: "{'EmailId':'" + Email + "'}",
            dataType: "json",
            async: false,
            success: function (result) {

                if (result == "0") {

                    //jquery_min_p('#popupsuccess').text('Password send sucessfully.Check your email');
                    //jquery_min_p('#savePopup').modal('show');
                    jquery_min_p('#popupsuccess').text('Password send sucessfully.Check your email');
                    jquery_min_p('#savePopup').modal('show');
                    
                }

            },
            error: function (result) {
                // alert("There is a Problem, Try Again!");
                jquery_min_p('#h6warning').text('There is a Problem, Try Again!');
                jquery_min_p('#dngwarn').modal('show');
            }
        });
    }

}
