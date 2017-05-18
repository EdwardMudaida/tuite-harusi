$(document).ready(function() {
    $(window).scroll(function() {
        $(".slideanim").each(function() {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });
    $(".modals h2").click(function() {
        window.open("./Template/details.html", "_self")
    })
});
