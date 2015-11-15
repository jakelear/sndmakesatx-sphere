$(function() {

  $('.promote').on('click', function(){
    var comment_headline = $(this).closest('.m-comments__item').find('h2').text();
    var comment_user = $(this).closest('.m-comments__item').find('.poster').text();

    $('#promoted-placement .quote').text(comment_headline);
    $('#promoted-placement .username').text(comment_user);

    $('#promoted-placement').addClass('active');
  });

  $('.feature').on('click', function(){
    var findThread = function(){

    }

  });

  $('.promote-feature').on('click', function(){

  });


  // Sort by Rank
  $('.sort.rank').on('click', function(){
    restoreAllComments();
    var $wrapper = $('.m-comments .columns');

    $wrapper.find('.m-comments__item').sort(function (a, b) {
        return +b.dataset.trophies - +a.dataset.trophies;
    })
    .appendTo( $wrapper );

    $wrapper.addClass('rank').removeClass('cron');
    $('dd').removeClass('active');
    $(this).parent('dd').addClass('active');

    $('#rank-slider').addClass('active');
  });

  // Sort by Cron
  $('.sort.cron').on('click', function(){
    var $wrapper = $('.m-comments .columns');

    $wrapper.find('.m-comments__item').sort(function (a, b) {
        return +a.dataset.cron - +b.dataset.cron;
    })
    .appendTo( $wrapper );

    $wrapper.addClass('cron').removeClass('rank');
    $('dd').removeClass('active');
    $(this).parent('dd').addClass('active');

    $('#rank-slider').removeClass('active');
  });


  var restoreAllComments = function(){
    $('.m-comments__item').css('visibility', 'visible');
  }

 // Threshold Filter
 $(document).foundation({
  slider: {
    on_change: function(){
      var threshold = $('#rank-threshold').val();
      console.log(threshold);
      $('.m-comments__item').each(function( index ) {
        if ( $(this).data('trophies') < threshold ){
          $(this).css('visibility', 'hidden');
        } else {
          $(this).css('visibility', 'visible');
        }
      });
    }
    }
  });

});


SPHERE = {};

SPHERE.filterThreshold = function() {

}


