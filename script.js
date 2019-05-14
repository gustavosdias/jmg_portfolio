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
        scrollTop: $("#about").offset().top},
        'slow');
});

$("#menu-skills").click(function() {

    page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
        page.stop();
    });

    page.animate({
        scrollTop: $("#skills").offset().top},
        'slow');
});

$("#menu-portfolio").click(function() {

    page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
        page.stop();
    });

    page.animate({
        scrollTop: $("#portfolio").offset().top},
        'slow');
});

$("#menu-home").click(function() {

    page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
        page.stop();
    });

    page.animate({
        scrollTop: $("#home").offset().top},
        'slow');
});

$("#menu-home").click(function() {

    page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
        page.stop();
    });

    page.animate({
        scrollTop: $("#home").offset().top},
        'slow');
});

$("#menu-contact").click(function() {

    page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
        page.stop();
    });

    page.animate({
        scrollTop: $("#contact").offset().top},
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

        var aboutIconTop = $('#about-icon-row').offset().top - 100,
        aboutHeight = $('#about-icon-row').outerHeight(),
        skillTop = $('#skills-row').offset().top - 300,
        skillHeight = $('#skills-row').outerHeight(),
        windowHeight = $(window).height(),
        scroll = $(this).scrollTop();
        if (scroll < skillTop && scroll > (aboutIconTop + aboutHeight - windowHeight)){
            $('.wrapper-about-icon').addClass('wrapper-about-icon-rotated');
        }else if(scroll > (skillTop + skillHeight - windowHeight)){
            $('.progress-bar').addClass('progress-bar-active');
            $('.progress-bar').removeClass('progress-bar-zeroed');
            $('.progress-value').removeClass('progress-value-hidden');
        }
    });
});