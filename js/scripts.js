$(document).ready(function () {
    $("#addressbook").submit(function (event) {
        event.preventDefault();


        const name1 = $("#name1").val();
        const name2 = $("#name2").val();
        const name3 = $("#name3").val();
        const comp = $("#comp").val();
        const mail = $("#mail").val();
        const number = $("#number").val();
        const fax = $("#fax").val();


        $(".firstName").append(name1);
        $(".middleName").append(name2);
        $(".lastName").append(name3);
        $(".company").append(comp);
        $(".email").append(mail);
        $(".mobileNumber").append(number);
        $(".faxNumber").append(fax);

        $(".firstName").click(function() {
            $(".contact-details").show();
        })
        
        $(".form").hide()

    });
});