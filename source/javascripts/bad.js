$(function() {

  $('.promote').on('click', function(){
    var comment_headline = $(this).closest('.m-comments__item').find('h2').text();
    var comment_user = $(this).closest('.m-comments__item').find('.poster').text();

    $('#promoted-placement .quote').text(comment_headline);
    $('#promoted-placement .username').text(comment_user);
  });

  $('.feature').on('click', function(){
    var findThread = function(){

    }

  });

  $('.promote-feature').on('click', function(){

  });


  // Sort by Rank
  $('.sort.rank').on('click', function(){
    var $wrapper = $('.m-comments .columns');

    $wrapper.find('.m-comments__item').sort(function (a, b) {
        return +b.dataset.trophies - +a.dataset.trophies;
    })
    .appendTo( $wrapper );

    $wrapper.addClass('rank').removeClass('cron');
  });

  // Sort by Cron
  $('.sort.cron').on('click', function(){
    var $wrapper = $('.m-comments .columns');

    $wrapper.find('.m-comments__item').sort(function (a, b) {
        return +a.dataset.cron - +b.dataset.cron;
    })
    .appendTo( $wrapper );

    $wrapper.addClass('cron').removeClass('rank');
  });

});