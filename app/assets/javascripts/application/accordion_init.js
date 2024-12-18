$(document).ready(function () {
  const $head = $('.js-accordion__head');
  const $body = $('.js-accordion__body');

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


$(function () {

  const $head = $('.js-accordion__head');
  const $body = $('.js-accordion__body');

  // Prva stavka je otvorena pri učitavanju stranice
  $('.accordion__item').first().addClass('active');
  $body.first().slideDown();

  $head.on('click', toggleBody);

  function toggleBody() {
    var $item = $(this).closest('.accordion__item'); // Pronađi roditelja (accordion__item)
    var $currentBody = $item.find('.js-accordion__body'); // Pronađi odgovarajući sadržaj

    // Ako je kliknuto pitanje već otvoreno, zatvori ga
    if ($item.hasClass('active')) {
      $currentBody.stop(true, true).slideUp(); // Zatvori sadržaj
      $item.removeClass('active'); // Ukloni 'active' klasu
    } else {
      // Ako nije otvoreno, zatvori sve ostale i otvori trenutno
      $('.accordion__item').removeClass('active'); // Ukloni 'active' sa svih
      $('.js-accordion__body').slideUp(); // Sakrij sve odgovore

      $item.addClass('active'); // Dodaj 'active' trenutnoj stavci
      $currentBody.stop(true, true).slideDown(); // Prikazivanje odgovarajućeg sadržaja
    }
  }

});
