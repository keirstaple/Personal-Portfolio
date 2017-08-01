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

  //When you scroll down the page, the popsicle stick svg stops bouncing
  $(window).scroll({ previousTop: 0 }, function() {
    var toggleStatus = $('.mobile-nav-toggle').hasClass('is-open');
    var currentTop = $(window).scrollTop();
    console.log('prev', this.previousTop);
    console.log('current', currentTop);
    if (currentTop < this.previousTop || currentTop <= 0) {
        $("nav").show();
    } else {
        $("nav").hide();
    }
    this.previousTop = currentTop;
    $('.animated, .bounce, .infinite').removeClass('animated bounce infinite');
    $('#Nose').addClass('animated pulse');
    if(toggleStatus) {
      $('.mobile-nav-toggle, .nav-links').removeClass('is-open');
    }
  });

  //When you scroll over an icon in the about section, it pulses
  $('.about-icon')
    .mouseover(function(){
      var status = $(this).hasClass('animated pulse');
      if(!status){ $(this).addClass('animated pulse'); }
    })
    .mouseout(function(){
      var status = $(this).hasClass('animated pulse');
      if(status){ $(this).removeClass('animated pulse'); }
    });

    $('.brand-icon')
      .mouseover(function(){
        var status = $(this).hasClass('animated pulse reddish');
        if(!status){ $(this).addClass('animated pulse reddish'); }
      })
      .mouseout(function(){
        var status = $(this).hasClass('animated pulse reddish');
        if(status){ $(this).removeClass('animated pulse reddish'); }
      });

  $(document).on('click', '.project-wrapper', function() {
    $(this).removeClass('project-wrapper').addClass('project-wrapper-fullscreen');
    $('body').css({'overflow': 'hidden'});
    $(this).css({'overflow': 'scroll'});
  });

  $(document).on('click', '.close-button', function() {
    $('.project-wrapper-fullscreen').removeClass('project-wrapper-fullscreen').addClass('project-wrapper');
    // $(this).parent().parent().addClass('project-wrapper');
    $('body').css({'overflow': 'auto'});
  });
});
