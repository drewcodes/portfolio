$(document).ready(function () {
    //Navbar
    TweenMax.from('.navbar', 2, {
        opacity: 0
        , delay: 7
    });
    TweenMax.from('#msg1', 2, {
        opacity: 0
        , scale: 1
    });
    TweenMax.from('#msg2', 2, {
        opacity: 0
        , scale: 1
        , delay: 1
    });
    TweenMax.from('#msg3', 2, {
        opacity: 0
        , scale: 1
        , delay: 2
    });
    TweenMax.from('#msg4', 2, {
        opacity: 0
        , scale: 1
        , delay: 3
    });
    TweenMax.from('#msg5', 2, {
        opacity: 0
        , scale: 1
        , delay: 3
    });
    TweenMax.from('#logo', 7, {
        rotation: '-45'
        , scale: 1
    });
    // scrollmagic
    var controller = new ScrollMagic.Controller();
    //navbar
    var grandmaster = new ScrollMagic.Scene({
        triggerElement: '.content-a'
    }).setClassToggle('.content-a', 'fade-in').addTo(controller);
    var willMoy = new ScrollMagic.Scene({
        triggerElement: '.content-b'
    }).setClassToggle('.content-b', 'fade-in').addTo(controller);
    var vingtsuninfo = new ScrollMagic.Scene({
        triggerElement: '.vingtsun'
    }).setClassToggle('.vingtsun', 'fade-in').addTo(controller);
    var classes = new ScrollMagic.Scene({
        triggerElement: '.classes'
    }).setClassToggle('.classes', 'fade-in').addTo(controller);
    // smooth scroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash
            , $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 70
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});
