// var position = $(window).scrollTop(); 

// // should start at 0

// $(window).scroll(function() {
//     var scroll = $(window).scrollTop();

//     if (scroll > 50) {

   
//       if(scroll > position) {

//         if($('.sticky-header').hasClass("sticky-header--up")) {
//           $('.sticky-header').removeClass("sticky-header--up");
//           $('.sticky-header').addClass("sticky-header--down");
//         }
//         else {
//           $('.sticky-header').addClass("sticky-header--down");
//         }
//       }
//       else {
//         if($('.sticky-header').hasClass("sticky-header--down")) {
//           $('.sticky-header').removeClass("sticky-header--down");
//           $('.sticky-header').addClass("sticky-header--up");
//         }
//         else {
//           $('.sticky-header').addClass("sticky-header--up");
//         }
//       }

//       position = scroll;

//     }

//     else {
//       if($('.sticky-header').hasClass("sticky-header--up")) {
//           $('.sticky-header').removeClass("sticky-header--up");
//         }
//     }
// }); 


let lastScrollPosition = $(window).scrollTop(); 
$(window).on('scroll', function () {
  const currentScroll = $(window).scrollTop();

  if (currentScroll > 50) {
    if (currentScroll > lastScrollPosition) {
      if ($('.sticky-header').hasClass('sticky-header--up')) {
        $('.sticky-header').removeClass('sticky-header--up').addClass('sticky-header--down');
      } else {
        $('.sticky-header').addClass('sticky-header--down');
      }

      if ($('.burger-button').hasClass('is-active')) {
        toggleMenu();
      }
    } else {
      if ($('.sticky-header').hasClass('sticky-header--down')) {
        $('.sticky-header').removeClass('sticky-header--down').addClass('sticky-header--up');
      } else {
        $('.sticky-header').addClass('sticky-header--up');
      }
    }

    lastScrollPosition = currentScroll;
  } else {
    $('.sticky-header').removeClass('sticky-header--up');
  }
});

