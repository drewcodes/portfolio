$(document).ready(function () {
    // GSAP
    TweenMax.from('.navbar', 1, {opacity:0, delay:4});
    TweenMax.from('#msg', 3, {opacity:0});
    TweenMax.staggerFrom('#msg2', 0.5, {opacity:0, y:200, delay: 2});
    
    // scrollmagic
    
    var controller = new ScrollMagic.Controller();
    //navbar
    var menuItems = new ScrollMagic.Scene({
        triggerElement: '.menu'
    })
    .setClassToggle('.menu', 'fade-in')
    .addTo(controller);
    
    // smoothscroll
     $('a[href^="#"]').on('click', function (e) {
         e.preventDefault();

         var target = this.hash,
             $target = $(target);

         $('html, body').stop().animate({
             'scrollTop': $target.offset().top - 50
         }, 900, 'swing', function () {
             window.location.hash = target;
         });
     });
    // collapse
    $(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});
    
    $('menu.btn'),onclick();
 });
