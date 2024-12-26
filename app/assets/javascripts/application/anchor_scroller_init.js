$(function () {
  var $root = $('html, body');
  $('.js-anchor').click(function () {
    var target = $(this).data('target'); // Use the data-target attribute
    if (target) {
      $root.animate({
        scrollTop: $(target).offset().top
      }, 500);
    }
    return false;
  });
});
