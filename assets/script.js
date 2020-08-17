$(document).ready(function () {

    // Click listener to validate field entries
    $("#submitButton").on("click", function () {
        event.preventDefault();
        let name = $(".name").val();
        let phone = $(".phone").val();
        let email = $(".email").val();
        let message = $(".message").val();
        let alert = $("#alertModal");
        let phoneModal = $("#phoneModal");

        if (name.length < 1 || email.length < 1 || message.length < 1) {
            alert.show();
            phoneModal.hide();
        } else if (phone.length !== 12) {
            phoneModal.show();
            alert.hide();
        } else {
            $("#successModal").show();
            phoneModal.hide();
            alert.hide();
        }
    });
    
});