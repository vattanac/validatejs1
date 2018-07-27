$(document).ready(function () {


    var $regexname=/^([a-zA-Z]{3,16})$/;
    $('.name').on('keypress keydown keyup',function(){
             if (!$(this).val().match($regexname)) {
              // there is a mismatch, hence show the error message
                 $('.emsg').removeClass('hidden');
                 $('.emsg').show();
             }
           else{
                // else, do not display message
                $('.emsg').addClass('hidden');
               }
         });

        //Button Submit 
    // $('#first_form').submit(function (e) {
    //     e.preventDefault();
    //     var first_name = $('#first_name').val();
    //     var firstname = $('#first_name');
    //     var last_name = $('#last_name').val();
    //     var email = $('#email').val();
    //     var password = $('#password').val();
    //     var confirm_password = $('#confirm_password').val();

    //     $(".error").remove();
    //     $(".redspace").remove();



    //     if (first_name.length < 1) {
    //         $('#first_name').after('<span class="error">This field is required</span>');
    //         $('#first_name').html("This field is required");
    //     }


    //     if (first_name.trim() == "") {
    //         $('#first_name').after('<span class="redspace">This field Not Allow space</span>');
    //         $("#first_name").focus();
    //         $("#first_name").get(0).setSelectionRange(0, 0);
    //         $(".redspace").remove();
    //     }




    //     if (last_name.length < 1) {
    //         $('#last_name').after('<span class="error">This field is required</span>');
    //     }


    //     if (email.length < 1) {
    //         $('#email').after('<span class="error">This field is required</span>');
    //     } else {
    //         var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
    //         var validEmail = regEx.test(email);
    //         if (!validEmail) {
    //             $('#email').after('<span class="error">Enter a valid email</span>');
    //         }
    //     }


    //     if (password.length < 3) {
    //         $('#password').after('<span class="error">Password must be at least 3 characters long</span>');
    //     }
    //     if (confirm_password.length < 3) {
    //         $('#confirm_password').after('<span class="error">Password must be at least 3 characters long</span>');
    //     }

    //     validateName();
    // });
    //kra submit
    $('#password, #confirm_password').on('keyup', function () {
        if (password == confirm_password) {
            $('#message').html('Matching').css('color', 'green');
        } else
            $('#message').html('Not Matching').css('color', 'red');
    });
});

function isEmpty(str) {
    return str.replace(/^\s+|\s+$/g, '').length == 0;
}

function validateName() {
    var first_name = $('#first_name').val();
    var reg = new RegExp('/^[a-zA-Z]+$/');
    if (first_name.length <= 0) {
        alert(first_name);
        $("#validateName").innerHTML = "Name can not empty";
        return false;
    } else if (!reg.test(first_name)) {
        $("#validateName").innerHTML = "Must input only charactor with no space";
        return false;
    } else {
        $("validateName").innerHTML = "";
        return true;
    }
}

function myvalidate(id) {
    var regex = /^[a-zA-Z ]{2,30}$/;
    var ctrl = document.getElemetnById(id);

    if (regex.test(ctrl.value)) {
        return true;
    } else {
        return false;
    }
}