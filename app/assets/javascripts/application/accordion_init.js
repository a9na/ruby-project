$(function () {

  const $head = $('.js-accordion__head');
  const $body = $('.js-accordion__body');

  $('.accordion__item').first().addClass('active');
  $body.first().slideDown();

  $head.on('click', toggleBody);

  function toggleBody() {
    var $item = $(this).closest('.accordion__item'); 
    var $currentBody = $item.find('.js-accordion__body'); 

    if ($item.hasClass('active')) {
      $currentBody.stop(true, true).slideUp(); 
      $item.removeClass('active'); 
    } else {
      $('.accordion__item').removeClass('active'); 
      $('.js-accordion__body').slideUp(); 

      $item.addClass('active'); 
      $currentBody.stop(true, true).slideDown();
    }
  }

});
