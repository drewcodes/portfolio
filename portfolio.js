$(document).ready(function () {
    
    //GSAP
    
    TweenMax.from( '#msg1', 1, {x:-500});
    TweenMax.from( '#msg2', 1, {opacity:0, scale:0, ease:Bounce.easeOut, delay: 1});
    TweenMax.from( '#msg3', 1, {x:0, opacity:0, delay:2});
    TweenMax.staggerFrom('.dot', 0.5, {opacity:0, y:200, delay: 0.5}, 0.3);
    
    
    //smooth-scroll
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
    
    //collapse navbar menu after click
    $(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});
 });
