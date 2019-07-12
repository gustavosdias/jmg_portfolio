var page =  $('html,body');
var firstTimeScrolling = true;

$("#top-info-button").click(function() {

    page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
        page.stop();
    });

    if(firstTimeScrolling){
        page.animate({
            scrollTop: $("#about").offset().top - $("#nav").height() * 2},
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
        scrollTop: $("#about h2").offset().top - $("#nav").height() * 2},
            'slow');
});

$("#menu-skills").click(function() {

    page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
        page.stop();
    });

   page.animate({
        scrollTop: $("#skills h2").offset().top - $("#nav").height() * 2},
            'slow');
});

$("#menu-portfolio").click(function() {

    page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
        page.stop();
    });

   page.animate({
        scrollTop: $("#portfolio h2").offset().top - $("#nav").height() * 2},
            'slow');
});


$("#menu-contact").click(function() {

    page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
        page.stop();
    });

  page.animate({
        scrollTop: $("#form-div").offset().top - $("#nav").height() * 2},
            'slow');
});

$("#menu-services").click(function() {

    page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
        page.stop();
    });

  page.animate({
        scrollTop: $("#services h2").offset().top - $("#nav").height() * 2},
            'slow');
});



$(document).ready(function() {

    if ($(window).scrollTop() > $('#home').height()) {
        $('#nav').addClass('navbar-fixed');
        $('#nav-phantom').show();
    }
    else {
        $('#nav').removeClass('navbar-fixed');
        $('#nav-phantom').hide();
    }


    $(window).scroll(function () {

        //Sticky navbar
        if ($(window).scrollTop() > $('#home').height()) {
            $('#nav').addClass('navbar-fixed');
            $('#nav-phantom').show();
        }
        else {
            $('#nav').removeClass('navbar-fixed');
            $('#nav-phantom').hide();
        }

    });


    // Custom function which toggles between sticky class (is-sticky)
    var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
        var stickyHeight = sticky.outerHeight();
        var stickyTop = stickyWrapper.offset().top;
        if (scrollElement.scrollTop() >= stickyTop) {
            stickyWrapper.height(stickyHeight);
            sticky.addClass("is-sticky");
        }
        else {
            sticky.removeClass("is-sticky");
            stickyWrapper.height('auto');
        }
    };
});