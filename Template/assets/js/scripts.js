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
            var customurl = $("#myCustomURL").val();
            // variables are appended into form
            $("#bride").append(bride);
            $("#groom").append(groom);
            $("#Bride").append(bride);
            $("#date").append(date);
            $("#time").append(time);
            $("#venue").append(venue);
            $("#brideGroom").append(groom);
            $("#messageIn").append(message);
            $("#urlInvite").append(customurl);
            // hide form and display template
            $("#coupleInfo").hide(1000);
            $(".container").hide(1000);
            $(".template").fadeIn(1000);
        });
    });
    $("button#next").click(function() {
        $(".share").fadeIn();
        $(".template").hide();
        $(".container").hide();
    });
    $("i.fa-hand-o-left").click(function() {
        $(".share").fadeOut();
        $(".container").fadeOut();
        $(".template").fadeIn();
    });
    $(".container img").click(function() {
        window.open("../index.html", "_self");
    });
    $("#shareInvite").click(function() {
        $("#sent").show();
        $("#sent").fadeOut(6000);
    });
    $("#g-signin2").click(function() {
        window.open("../Template/details.html", "_self")
    });
});
