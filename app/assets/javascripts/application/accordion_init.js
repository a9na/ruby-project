$(document).ready(function () {
  const $accordionHeaders = $('.js-accordion__head');
  const $accordionBodies = $('.js-accordion__body');

  const $firstItem = $('.accordion__item').eq(0);
  $firstItem.addClass('open');
  $firstItem.find('.js-accordion__body').show();

  $accordionHeaders.on('click', function () {
    const $currentItem = $(this).closest('.accordion__item');
    const $currentBody = $currentItem.find('.js-accordion__body');

    if ($currentItem.hasClass('open')) {
      $currentBody.slideUp(300, function () {
        $currentItem.removeClass('open');
      });
    } else {
      $('.accordion__item.open').removeClass('open');
      $accordionBodies.slideUp(300);

      $currentItem.addClass('open');
      $currentBody.slideDown(300);
    }
  });
});
