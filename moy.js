$(document).ready(function () {
    //Navbar
    TweenMax.from('.navbar', 2, {opacity:0, delay: 7});
    TweenMax.from('#msg1', 2, {opacity: 0, scale: 1});
    TweenMax.from('#msg2', 2, {opacity: 0, scale: 1, delay: 1});
    TweenMax.from('#msg3', 2, {opacity: 0, scale: 1, delay:2});
    TweenMax.from('#msg4', 2, {opacity: 0, scale: 1, delay:3});
    TweenMax.from('#msg5', 2, {opacity: 0, scale: 1, delay:3});
    TweenMax.from('#logo', 7, {rotation:'-45', scale:1});
    
    var controller = new ScrollMagic.Controller();
    //navbar
    var moyCollage = new ScrollMagic.Scene({
        triggerElement: '#moy-collage'
    }).setClassToggle('#moy-collage', 'fade-in').addTo(controller);
    
    var willMoy = new ScrollMagic.Scene({
        triggerElement: '#bio-william'
    }).setClassToggle('#bio-william', 'fade-in').addTo(controller);
    
    var school = new ScrollMagic.Scene({
        triggerElement: '#school'
    }).setClassToggle('#school', 'fade-in').addTo(controller);
    
     $('a[href^="#"]').on('click', function (e) {
         e.preventDefault();

         var target = this.hash,
             $target = $(target);

         $('html, body').stop().animate({
             'scrollTop': $target.offset().top - 70
         }, 900, 'swing', function () {
             window.location.hash = target;
         });
     });
 });
