var page =  $('html,body');
var firstTimeScrolling = true;

$("#top-info-button").click(function() {

    page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
        page.stop();
    });

    if(firstTimeScrolling){
        page.animate({
            scrollTop: $("#about").offset().top - $("#nav").height()  * 1.5},
            'slow');
    }else{
        page.animate({
            scrollTop: $("#about").offset().top},
            'slow');
    }
});

$("#menu-home").click(function() {

    page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
        page.stop();
    });

    page.animate({
        scrollTop: $("#home").offset().top},
        'slow');
});

$("#menu-about").click(function() {

    page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
        page.stop();
    });

    page.animate({
        scrollTop: $("#about h2").offset().top - $("#nav").height() * 1.5},
            'slow');
});

$("#menu-skills").click(function() {

    page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
        page.stop();
    });

   page.animate({
        scrollTop: $("#skills h2").offset().top - $("#nav").height() * 1.5},
            'slow');
});

$("#menu-portfolio").click(function() {

    page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
        page.stop();
    });

   page.animate({
        scrollTop: $("#portfolio h2").offset().top - $("#nav").height() * 1.5},
            'slow');
});


$("#menu-contact").click(function() {

    page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
        page.stop();
    });

  page.animate({
        scrollTop: $("#form-div").offset().top - $("#nav").height() * 1.5},
            'slow');
});

$("#menu-services").click(function() {

    page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
        page.stop();
    });

  page.animate({
        scrollTop: $("#services h2").offset().top - $("#nav").height() * 1.5},
            'slow');
});

$(document).ready(function() {

    // Custom function which toggles between sticky class (is-sticky)
    var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
        var stickyHeight = sticky.outerHeight();
        var stickyTop = stickyWrapper.offset().top + 50;
        if (scrollElement.scrollTop() >= stickyTop) {
            stickyWrapper.height(stickyHeight);
            sticky.addClass("is-sticky");
        }
        else {
            sticky.removeClass("is-sticky");
            stickyWrapper.height('auto');
        }
    };

    // Find all data-toggle="sticky-onscroll" elements
    $('[data-toggle="sticky-onscroll"]').each(function () {
        var sticky = $(this);
        var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
        sticky.before(stickyWrapper);
        sticky.addClass('sticky');

        // Scroll & resize events
        $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
            stickyToggle(sticky, stickyWrapper, $(this));
        });

        // On page load
        stickyToggle(sticky, stickyWrapper, $(window));
    });


});