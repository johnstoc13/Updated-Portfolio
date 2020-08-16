$(document).ready(function () {

    // Click listener on submit button to call function
    $("#submitButton").on("click", function () {
        event.preventDefault();
        let name = $(".name").val();
        let phone = $(".phone").val();
        let email = $(".email").val();
        let message = $(".message").val();
        if (name.length < 1 || phone.length < 12 || email.length < 1 || message.length < 1) {
            $("alertModal").show();
        } else $("#successModal").show();


        // if (name.length < 1) {
        //     $("#nameModal").show();
        // } else if (phone.length < 12) {
        //     $("nameModal").hide();
        //     $("#phoneModal").show();
        // } else if (email.length < 1) {
        //     $("#emailModal").show();
        // } else if (message.length < 1) {
        //     $("#messageModal").show();
        // } else $("#successModal").show();

        console.log(name.length);
        console.log(phone.length);
        console.log(email.length);
        console.log(message.length);
    
    });

});