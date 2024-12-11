// Define the menu toggle functionality
function handleMenuToggle() {
  const $body = $('.body');
  const $burgerButton = $('.burger-button');
  const $burgerIcon = $('.burger-button > .icon--burger');
  const $navUser = $('.js_nav_user');

  $body.toggleClass('burger-is-active');
  $burgerButton.toggleClass('is-active');
  $burgerIcon.toggleClass('is-active');
  $navUser.fadeToggle('fast');
}

$(document).ready(function () {
  $('.js_burger').on('click', function () {
    handleMenuToggle();
  });
});
