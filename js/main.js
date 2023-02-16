'use strict';
$(document).ready(function () {
    new WOW({ mobile: false }).init();

    $(document).on('scroll', onScroll);
    $('.scrollToSection').on('click', function (e) {
        e.preventDefault();

        if (!$(this).hasClass('home-down')) {
            $(this).addClass('active');
        }
        var link = $(this).attr('href');

        $('html, body').animate(
            {
                scrollTop: $(link).offset().top - 85,
            },
            500
        );
    });

    function onScroll(event) {
        var scrollPos = $(document).scrollTop();
        $('nav ul li a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr('href'));
            if (
                refElement.position().top - $('.nav').height() <= scrollPos &&
                refElement.position().top + refElement.height() > scrollPos
            ) {
                $('nav ul li a').removeClass('active');
                currLink.addClass('active');
            } else {
                currLink.removeClass('active');
            }
        });
    }

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var homeheight = $('.home').height() - 86;

        if (scroll > homeheight) {
            $('nav').slideDown(100);
        } else {
            $('nav').slideUp(100);
        }
    });

    $('.responsive').on('click', function (e) {
        $('.nav-menu').slideToggle();
    });

    $(function () {
        $('.element').typed({
            strings: ['Bartłomiej', 'Front-End Developerem'],
            typeSpeed: 10,
            loop: true,
            backDelay: 2000,
        });
    });
});

$(document).ready(function ($) {
    var jssor_1_options = {
        $AutoPlay: true,
        $Idle: 0,
        $AutoPlaySteps: 4,
        $SlideDuration: 1000,
        $SlideEasing: $Jease$.$Linear,
        $PauseOnHover: 4,
        $SlideWidth: 200,
        $Cols: 7,
    };

    var jssor_1_slider = new $JssorSlider$('jssor_1', jssor_1_options);

    function ScaleSlider() {
        var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
        if (refSize) {
            refSize = Math.min(refSize, 809);
            jssor_1_slider.$ScaleWidth(refSize);
        } else {
            window.setTimeout(ScaleSlider, 30);
        }
    }
    ScaleSlider();
    $(window).bind('load', ScaleSlider);
    $(window).bind('resize', ScaleSlider);
    $(window).bind('orientationchange', ScaleSlider);
});
