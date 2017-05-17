$(document).ready(function() {
    $("#coupleInfo").submit(function(event) {
        event.preventDefault();
        $("#submitInfo").click(function() {
            $("#confirm").show();
            $("#confirm").fadeOut(5000);
            // declare an array that will store the user input
            var bride = $("#brideName").val();
            var groom = $("#groomName").val();
            var date = $("#Date").val();
            var time = $("#Time").val();
            var venue = $("#Venue").val();
            var message = $("#message").val();
            $("#bride").append(bride);
            $("#groom").append(groom);
            $("#Bride").append(bride);
            $("#brideGroom").append(groom);
            $("#date").append(date);
            $("#time").append(time);
            $("#venue").append(venue);
        });
    });
});
