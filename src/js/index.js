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


$(document).scroll(function(){
    if($(this).scrollTop() > 10 ) {
        $('.navbar').addClass('scrolled'),
        $('#kast-logo-nav').attr("src", "img/kast-logo.svg"),
        $('#button1').addClass('btn-primary'),
        $('#button2').addClass('btn-primary2')
        $('#button1').removeClass('btn-nav1'),
        $('#button2').removeClass('btn-nav2')
    } else {
        $('.navbar').removeClass('scrolled'),
        $('#kast-logo-nav').attr("src", "img/kast-logo-white.svg")
        $('#button1').removeClass('btn-primary'),
        $('#button2').removeClass('btn-primary2')
        $('#button1').addClass('btn-nav1'),
        $('#button2').addClass('btn-nav2')
    }
})

$(document).ready(function(){
    
    $('.navbar-toggler').click(function(e) {
        $(this).toggleClass('change')
        $('#button1').toggleClass('btn-nav1 btn-primary')
        $('#button2').toggleClass('btn-nav2 btn-primary2')
        //$('.plugin-Navigation').toggleClass('hide-nav');
       // $('.plugin-Navigation-list').toggleClass('hide-nav');
       // $('.plugin-Navigation-item').toggleClass('hide-nav');
    })
})
