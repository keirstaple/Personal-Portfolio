$(document).ready(function(){
  event.preventDefault();
  //This snippet will watch for a click on an a tag and smoothly scroll down to its anchor
  $('a[href^="#"]').on('click', function(event) {
    var target = $($(this).attr('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }
  });

  //Toggle the menu icon when in mobile view
  $('.mobile-nav-toggle').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){
      $('.mobile-nav-toggle, .nav-links').removeClass('is-open');
    } else {
        $('.mobile-nav-toggle, .nav-links').addClass('is-open');
      }
  });

  $(document).on('scroll', function(){
    // $('.eyesNears').addClass('animated pulse');
    $('.animated, .bounce, .infinite').removeClass('animated bounce infinite');
  });
});
