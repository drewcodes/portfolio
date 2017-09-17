$(document).ready(function(){

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
