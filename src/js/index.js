import 'bootstrap/scss/bootstrap.scss';
import '../css/main.scss';
import '../css/btn.scss';
import '../css/font.scss';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/esm/popper.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import '../img/phone.png'
import '../img/kast-logo.svg'
import '../img/kast-logo-white.svg'
import '../img/fb-logo.svg'
import '../img/twitter-logo.svg'
import '../img/linkedin-logo.png'
import '../img/div-green.svg'
import '../img/diy.png'
import '../img/envelope.png'
import '../img/create-message.png'
import '../img/organize-contact.png'
import '../img/monitor-broadcast.png'



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
            $('.bar1').css({ 'background-color': '#19ABFF' })
            $('.bar2').css({ 'background-color': '#19ABFF' })
            $('.bar3').css({ 'background-color': '#19ABFF' })
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
