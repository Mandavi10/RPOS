jquery_min_p(document).ready(function () {
 
    jquery_min_p('#btnupdateclose').click(function () {

       // alert('hello');
        bootstrap_min_p('#passwordUpdatePopup').modal('hide');
        Reset();
        var url = "/Login/Login";
        window.location.href = url;
    });

    jquery_min_p('#ChangePwdbtnsubmit').click(function () {
        var oldPassword = jquery_min_p('#txtoldPwd').val();
        var newPassword = jquery_min_p('#txtNewPwd').val();
        var confirmNewPassword = jquery_min_p('#txtConfNewPwd').val();

        Validationtext();

        if (Validationtext() == true)
        {

            Validate();

        }
        else
        {
            jquery_min_p('#lblDispMessageconf').text('please fill all details');
            jquery_min_p('#lblDispMessageconf').show();
        }

    });

   
   


});





function Validationtext() {


    var flag = 0;
    if (jquery_min_p('#txtoldPwd').val() == '') {
        jquery_min_p('#txtoldPwd').addClass('validate');
        flag = 1;
    }
    if (jquery_min_p('#txtNewPwd').val() == '') {
        jquery_min_p('#txtNewPwd').addClass('validate');
        flag = 1;
    }
    if (jquery_min_p('#txtConfNewPwd').val() == '') {
        jquery_min_p('#txtConfNewPwd').addClass('validate');
        flag = 1;
    }
    


    if (flag == 1) {
        return false;
    }
    else {
        return true;
    }

}



function Removeclasstext() {

    if (jquery_min_p('#txtoldPwd').val() != '') {
        jquery_min_p('#txtoldPwd').removeClass('validate');
    }
    if (jquery_min_p('#txtNewPwd').val() != '') {
        jquery_min_p('#txtNewPwd').removeClass('validate');
    }


    if (jquery_min_p('#txtConfNewPwd').val() != '') {
        jquery_min_p('#txtConfNewPwd').removeClass('validate');

    }
   

}




//onclick = ""
        



function Validate() {
    //alert('hello');

    var oldPassword = jquery_min_p('#txtoldPwd').val();
    var newPassword = jquery_min_p('#txtNewPwd').val();
    var confirmNewPassword = jquery_min_p('#txtConfNewPwd').val();

    //if (oldPassword == "") {
    //    jquery_min_p('#diverror1').css('display', 'block');
       
    //}

    //if(newPassword == "")
    //{
    //    jquery_min_p('#diverror2').css('display', 'block');
        
    //}
    //if (confirmNewPassword == "")
    //  {
    //    jquery_min_p('#diverror3').css('display', 'block');
    //    return 0;
    //   }
    if (newPassword != confirmNewPassword)
    {
        jquery_min_p('#divcnwpwd2').css('display', 'block');
        return false;
        
    }

    else
    {
        jquery_min_p.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/ChangePassword/Validate",
            data: "{'oldPassword':'" + oldPassword + "','newPassword':'" + newPassword + "'}",
            dataType: "json",
            async: false,
            success: function (result) {

                if (result == "0") {

                    jquery_min_p('#divoldpwd2').css('display', 'block');
                   // jquery_min_p('#divoldpwd1').css('display', 'none');
                        //jquery_min_p('#divnwpwd1').css('display', 'none');
                      // jquery_min_p('#divcnwpwd1').css('display', 'none');
                    return false;
                    
                }
                if (result=="1")
                {
                    jquery_min_p('#passwordUpdatePopup').modal('show');
                }

            },
            error: function (result) {
                alert("There is a Problem, Try Again!");
            }
        });
    }

}


function Reset() {
    jquery_min_p('#txtoldPwd').val('');
    jquery_min_p('#txtNewPwd').val('');
    jquery_min_p('#txtConfNewPwd').val('');

}