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

  //
  $('div.project#pARTicipate').on('click', function(event){
    event.preventDefault();
    var projectTarget = $('#pARTicipate-page');
    var main = $('.main');

    //Set the effect type
    var effect = 'slide';

    //Set the options for the effect type chosen
    var options = { direction: 'right' };
    var options2 = { direction: 'left' };

    //Set the duration (default: 400milliseconds)
    var duration1 = 100;
    var duration2 = 100;
    $('html, body').animate({
      projectToggle: projectTarget.toggle(effect, options, duration1)
    });
    $('.main').animate({
      mainToggle: main.toggle()
    });
  });

  //
  $('#back-pARTicipate').on('click', function(event){
    event.preventDefault();
    var projectTarget = $('#pARTicipate-page');
    var main = $('.main');

    //Set the effect type
    var effect = 'slide';

    //Set the options for the effect type chosen
    var options = { direction: 'right' };
    var options2 = { direction: 'left' };

    //Set the duration (default: 400milliseconds)
    var duration1 = 1;

    $('.main').animate({
      mainToggle: main.toggle(effect, options2, duration1)
    });
    $('html, body').animate({
      projectToggle: projectTarget.toggle(effect, options, duration1)
    });
  });

  // $('div.project[href^="#"]').on('click', function(event){
  //   event.preventDefault();
  //   var projectTarget = $($(this).attr('href'));
  //   var main = $('.main');
  //
  //   // Set the effect type
  //   var effect = 'slide';
  //   // Set the options for the effect type chosen
  //   var options = { direction: 'right' };
  //   var options2 = { direction: 'left' };
  //   // Set the duration (default: 400 milliseconds)
  //   var duration = 500;
  //   $('.main').animate({
  //     mainToggle: main.toggle(effect, options2, duration)
  //   });
  //   $('html, body').animate({
  //     slideToggle: projectTarget.toggle(effect, options, duration)
  //   });
  //   console.log('click1')
  //   $('.back').on('click', function(event){
  //     event.preventDefault();
  //     console.log('click2')
  //     $('.main').animate({
  //       mainToggle: main.toggle(effect, options2, duration)
  //     });
  //     $('html, body').animate({
  //       slideToggle: projectTarget.toggle(effect, options, duration)
  //     });
  //   });
  // });

  // $('.back[href^="#"]').on('click', function(event) {
  //   var sectionTarget = $($(this).attr('href'));
  //   var main = $('.main');
  //
  //   // Set the effect type
  //   var effect = 'slide';
  //   // Set the options for the effect type chosen
  //   var options = { direction: 'right' };
  //   var options2 = { direction: 'left' };
  //   // Set the duration (default: 400 milliseconds)
  //   var duration = 500;
  //   $('html, body').animate({
  //     slideToggle: projectTarget.toggle(effect, options, duration)
  //   });
  //   $('.main').animate({
  //     mainToggle: main.toggle(effect, options2, duration)
  //   });
  // });
});
