$(document).ready(function () {
    $(".trial_buttons").click(function () {
        $("#dark_background").show();
    });

    $(".client_form").click(function () {
        event.stopPropagation();
    });

    $("#dark_background").click(function () {
        $("#dark_background").hide();
    });

    $("#submit_client").click(function(){
        $("#dark_background").fadeToggle(3000);
    });

    $("#small_button").click(function () {
            $('#dark_background').show("slide", { direction: "right" }, 1000);
    });

    $("#medium_button").click(function () {
        $("#login-form").slideToogle();
    });

    $("#enterprise_button").click(function () {
        $("#login-form").slideToogle();
    });

    //jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

});