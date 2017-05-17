$(document).ready(function() {
    $("#coupleInfo").submit(function(event) {
        event.preventDefault();
        $("#submitInfo").click(function() {
            $("#confirm").show();
            $("#confirm").fadeOut(5000);
            // declare an array that will store the user input
            var details = [];
            var bride = document.getElementById("brideName").value;
            var groom = document.getElementById("groomName").value;
            var date = document.getElementById("Date").value;
            var time = document.getElementById("Time").value;
            var venue = document.getElementById("Venue").value;
            var message = document.getElementById("message").value;
            details.push(bride, groom, date, time, venue, message);
            window.open('../Template/template.html');
        });
    });
});
