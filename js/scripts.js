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
  $('.fa-bars').on('click', function(event) {
    event.preventDefault();
    $('.nav-links').toggle();
  });


  $('div.project[href^="#"]').on('click', function(event){
    var projectTarget = $($(this).attr('href'));
      event.preventDefault();
      // Set the effect type
      var effect = 'slide';
      // Set the options for the effect type chosen
      var options = { direction: 'right' };
      // Set the duration (default: 400 milliseconds)
      var duration = 500;
      $('html, body').animate({
        slideToggle: projectTarget.toggle(effect, options, duration)
      });

  });
});
