$(document).ready(function () {
    
    
    $('.moy-view, .twitch-view').hide();
    
    // Moy Details View
    $('.moy-back').click(function(){
        $('.moy-view, .projects-view').fadeToggle('900', 'swing');
    });
    
    // Twitch Details View
    $('.twitch-back').click(function(){
        $('.twitch-view, .projects-view').fadeToggle('900', 'swing');
    });
    
    
    //GSAP
    TweenMax.to('.spinner', 5, {
        x: 0
        , rotation: 360
        , repeat: 100
    });
    TweenMax.from('#msg1', 1.5, {
        opacity: 0
    });
    TweenMax.from('#msg2', 1, {
        opacity: 0
        , delay: 1
    });
    TweenMax.from('#msg3', 1, {
        y: -20
        , opacity: 0
        , scale: 1
        , delay: 2
    });

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
    /*testing bar graph*/
    var codeskills = new ScrollMagic.Scene({
        triggerElement: '.skills'
    }).setClassToggle('#code-skills', 'code-skills').addTo(controller);
    var coffee = new ScrollMagic.Scene({
        triggerElement: '.skills'
    }).setClassToggle('#coffee', 'coffee').addTo(controller);
    var dancing = new ScrollMagic.Scene({
        triggerElement: '.skills'
    }).setClassToggle('#dancing', 'dancing').addTo(controller);
    var scifigeek = new ScrollMagic.Scene({
        triggerElement: '.skills'
    }).setClassToggle('#sci-fi', 'sci-fi').addTo(controller);
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
