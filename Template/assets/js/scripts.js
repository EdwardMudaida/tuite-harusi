$(document).ready(function() {
    $("#coupleInfo").submit(function(event) {
        event.preventDefault();
        $("#submitInfo").click(function() {
            $("#confirm").show();
            $("#confirm").fadeOut(5000);
            // input values are put into variables
            var bride = $("#brideName").val();
            var groom = $("#groomName").val();
            var date = $("#Date").val();
            var time = $("#Time").val();
            var venue = $("#Venue").val();
            var message = $("#message").val();
            // variables are appended into form
            $("#bride").append(bride);
            $("#groom").append(groom);
            $("#Bride").append(bride);
            $("#brideGroom").append(groom);
            $("#date").append(date);
            $("#time").append(time);
            $("#venue").append(venue);
            $("#message").append(message)
            // hide form and display template
            $("#coupleInfo").hide();
            $(".container h1").hide();
            $(".template").fadeIn();
        });
    });
});
