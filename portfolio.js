$(document).ready(function () {
    $('.simon-view, .calculator-view, .twitch-view, .wiki-view, .weather-view, .random-view, .moy-view, .tribute-view, .bakery-view,  .pomodoro-view').hide();
    // Simon Details View
    $('.simon-back').click(function () {
        $('.simon-view, .projects-view').fadeToggle('900', 'swing');
    });
    // Calculator Details View
    $('.calculator-back').click(function () {
        $('.calculator-view, .projects-view').fadeToggle('900', 'swing');
    });
    // Twitch Details View
    $('.twitch-back').click(function () {
        $('.twitch-view, .projects-view').fadeToggle('900', 'swing');
    });
    // Wikipedia Search Details View
    $('.wiki-back').click(function () {
        $('.wiki-view, .projects-view').fadeToggle('900', 'swing');
    });
    // Weather Details View
    $('.weather-back').click(function () {
        $('.weather-view, .projects-view').fadeToggle('900', 'swing');
    });
    // Random Quotes Details View
    $('.random-back').click(function () {
        $('.random-view, .projects-view').fadeToggle('900', 'swing');
    });
    // Moy Details View
    $('.moy-back').click(function () {
        $('.moy-view, .projects-view').fadeToggle('900', 'swing');
    });
    // Tribute Page Details View
    $('.tribute-back').click(function () {
        $('.tribute-view, .projects-view').fadeToggle('900', 'swing');
    });
    // Bakery Concept Details View
    $('.bakery-back').click(function () {
        $('.bakery-view, .projects-view').fadeToggle('900', 'swing');
    });
    // Pomodoro Clock Details View
    $('.pomodoro-back').click(function () {
        $('.pomodoro-view, .projects-view').fadeToggle('900', 'swing');
    });
    //GSAP
    TweenMax.to('.spinner', 5, {
        x: 0
        , rotation: 360
        , repeat: 100
    });
    //scrollmagic
    var controller = new ScrollMagic.Controller();
    //navbar
    var navbar = new ScrollMagic.Scene({
        triggerElement: '.about'
    }).setClassToggle('.navbar', 'fade-in').addTo(controller);
    
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
    }).setClassToggle('#design', 'design').addTo(controller);
    var guitar = new ScrollMagic.Scene({
        triggerElement: '.skills'
    }).setClassToggle('#guitar', 'guitar').addTo(controller);
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
