$(document).ready(function () {
    jQuery(".loader").fadeOut("slow");
    jQuery(document).on("load", function () {
        jQuery(".loader").fadeOut("slow");
    });
// animation start
    function animation() {
        var height = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var position = $(this).offset().top;
            var animation = $(this).attr('data-animate');
            var delay = $(this).attr('data-delay');
            if (position < scroll + height - 50) {
                $(this).css('animation-delay', delay);
                $(this).addClass(animation);
            }
        });
    }

    animation();
    $(window).scroll(function () {
        animation();
    });


//header animation
    $('.header-toggler').on('click', function () {
        $(this).toggleClass('active');
        $(this).parent().siblings('.header-menu').slideToggle('slow');
    });

//hero carousel

    if ($('.hero-slider').length > 0) {
        $('.hero-slider').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            animateOut: "fadeOut",
            dots: false,
            touchDrag: false,
            mouseDrag: false
        });
    }
    if ($('.additional-activity-slider').length > 0) {
        $('.additional-activity-slider').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2500,
            animateOut: "fadeOut",
            dots: false,
            touchDrag: false,
            mouseDrag: false,
            responsive: {
                320: {
                    items: 1,
                    margin: 0,
                    nav: false,
                    autoplay: true,
                    touchDrag: false,
                    mouseDrag: false,
                    loop: true
                },
                576: {
                    items: 2,
                    margin: 20,
                    nav: true,
                    autoplay: false,
                    touchDrag: true,
                    mouseDrag: true,
                    loop: false
                },
                992: {
                    items: 3,
                    margin: 25,
                    nav: true,
                    autoplay: false,
                    touchDrag: true,
                    mouseDrag: true,
                    loop: false
                }
            }
        });
    }


    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });

    var sectionIds = $('a.nav-link');

    $(document).scroll(function () {
        sectionIds.each(function () {
            var container = $(this).attr('href');
            var containerOffset = $(container).offset().top;
            var containerHeight = $(container).outerHeight();
            var containerBottom = containerOffset + containerHeight;
            var scrollPosition = $(document).scrollTop();

            if (scrollPosition < containerBottom - 150 && scrollPosition >= containerOffset - 150) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            } else {
                $(this).parent().removeClass('active');
            }


        });
    });

    $('.nav-link').on("click", function (e) {
        e.preventDefault();
        let sectionId = $(this).attr('href');
        if ($(window).width() < 992) {
            $('.header-menu').slideUp();
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
        }
        $('.header-toggler').removeClass('active');
        $('html, body').animate({
            scrollTop: $(sectionId).offset().top - 50
        }, 1500);
    });

    $('.logo').click(function () {
        $('.nav-item').removeClass('active');
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });
    $('.program-link').click(function (e) {
        e.preventDefault();
        let id = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(id).offset().top - 50
        }, 1000);
    });
    $('.footer-item a').click(function (e) {
        e.preventDefault();
        let id = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(id).offset().top - 50
        }, 1500);
    });

});
