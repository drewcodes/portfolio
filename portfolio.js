$(document).ready(function () {
    //GSAP
    TweenMax.to('.spinner', 5, {
        x: 0
        , rotation: 360
        , repeat: 100
    });
    TweenMax.from('#msg1', 1.5, {
        opacity: 0
    });
    TweenMax.from('#msg2', 3, {
        opacity: 0
        , delay: 1
    });
    TweenMax.from('#msg3', 1, {
        x: -500
        , opacity: 0
        , scale: 1
        , delay: 2
    });
    TweenMax.staggerFrom('.dot', 0.5, {
        opacity: 0
        , y: 150
        , delay: 0.5
    }, 0.3);
    //TweenMax.to('.dot', 0.5, {opacity:0, delay:2});
    //scrollmagic
    var controller = new ScrollMagic.Controller();
    //navbar
    var navbar = new ScrollMagic.Scene({
        triggerElement: '.portfolio'
    }).setClassToggle('.navbar', 'fade-in').addTo(controller);
    // portfolio scene
    var portfolio = new ScrollMagic.Scene({
        triggerElement: '.portfolio'
    }).setClassToggle('.portfolio', 'fade-in').addTo(controller);
    //about scene
    var about = new ScrollMagic.Scene({
        triggerElement: '.about'
    }).setClassToggle('.about', 'fade-in').addTo(controller);
    //smooth-scroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash
            , $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 50
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
    //collapse navbar menu after click
    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });
});
