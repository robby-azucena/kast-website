import 'bootstrap/scss/bootstrap.scss';
import '../css/main.scss';
import '../css/btn.scss';
import '../css/font.scss';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import '../img/Banner-01.jpg'
import '../img/globe-logo.png'
import '../img/go-bear-logo.png'
import '../img/golden-haven-logo.png'
import '../img/metro-logo.svg'
import '../img/powered-by-echo.png'
import '../img/primer-logo.png'
import '../img/UNICEF_Logo.svg'
import '../img/kast-logo.svg'
import '../img/kast-logo-white.svg'
import '../img/send-broadcast.jpg'
import '../img/contacts.jpg'
import '../img/dashboard.jpg'
import '../img/reminder.jpg'
import '../img/fb-logo.svg'
import '../img/twitter-logo.svg'
import '../img/linkedin-logo.png'


$(document).scroll(function () {
    if ($(this).scrollTop() > 10) {
        $('.navbar').addClass('scrolled')
        $('#kast-logo-nav').attr("src", "img/kast-logo.svg")
        $('#button1').addClass('btn-primary')
        $('#button1').removeClass('btn-nav1')
        $('.bar1').css('background-color', '#0A85AB')
        $('.bar2').css('background-color', '#0A85AB')
        $('.bar3').css('background-color', '#0A85AB')
    } else if (!$('.navbar-toggler').hasClass('change') || $('.navbar-toggler').hasClass('change') && $(window).width() > 993) {
        $('.navbar').removeClass('scrolled')
        $('#kast-logo-nav').attr("src", "img/kast-logo-white.svg")
        $('#button1').removeClass('btn-primary')
        $('#button1').addClass('btn-nav1')
        $('.bar1').css('background-color', 'white')
        $('.bar2').css('background-color', 'white')
        $('.bar3').css('background-color', 'white')
    }
})


$(window).resize(function () {
    if ($(window).width() > 993 && $('.navbar-toggler').hasClass('change') && $(document).scrollTop() < 10) {
        $('.navbar').removeClass('scrolled')
        $('#kast-logo-nav').attr("src", "img/kast-logo-white.svg")
        $('#button1').removeClass('btn-primary')
        $('#button1').addClass('btn-nav1')
    } else if ($(window).width() < 992.98 && $('.navbar-toggler').hasClass('change') && $(document).scrollTop() < 10) {
        $('.navbar').addClass('scrolled')
        $('#kast-logo-nav').attr("src", "img/kast-logo.svg")
        $('#button1').addClass('btn-primary')
        $('#button1').removeClass('btn-nav1')
        $('.bar1').css({ 'background-color': '#0A85AB' })
        $('.bar2').css({ 'background-color': '#0A85AB' })
        $('.bar3').css({ 'background-color': '#0A85AB' })
    } else if ($(window).width() > 993 && $('.navbar-toggler').hasClass('change') && $(document).scrollTop() > 10) {

    } else if ($(window).width() < 992.98 && $('.navbar-toggler').hasClass('change') && $(document).scrollTop() > 10) {

    }
})



$(document).ready(function () {
    $('.navbar-toggler').click(function (e) {
        $(this).toggleClass('change')
        if (!$('.navbar').hasClass('scrolled') && $('.navbar-toggler').hasClass('change')) {
            $(".navbar-toggler").css("pointer-events", "none");
            $('.navbar').addClass('scrolled')
            $('#kast-logo-nav').attr("src", "img/kast-logo.svg")
            $('#button1').addClass('btn-primary')
            $('#button1').removeClass('btn-nav1')
            $('.bar1').css({ 'background-color': '#0A85AB' })
            $('.bar2').css({ 'background-color': '#0A85AB' })
            $('.bar3').css({ 'background-color': '#0A85AB' })
            setTimeout(() => {
                $(".navbar-toggler").css("pointer-events", "auto");
            }, 500);
        } else if ($('.navbar').hasClass('scrolled') && $(document).scrollTop() < 10 && !$('.navbar-toggler').hasClass('change')) {
            $(".navbar-toggler").css("pointer-events", "none");
            $('.navbar').removeClass('scrolled')
            $('#kast-logo-nav').attr("src", "img/kast-logo-white.svg")
            $('#button1').removeClass('btn-primary')
            $('#button1').addClass('btn-nav1')
            $('.bar1').css({ 'background-color': 'white' })
            $('.bar2').css({ 'background-color': 'white' })
            $('.bar3').css({ 'background-color': 'white' })
            setTimeout(() => {
                $(".navbar-toggler").css("pointer-events", "auto");
            }, 500);
        }
    })
})
