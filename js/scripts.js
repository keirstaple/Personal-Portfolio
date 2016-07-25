$(document).ready(function(){
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
  $('.fa-bars').on('click', function() {
    // console.log('clicked');

    $('.nav-links').toggle();
  });
});
