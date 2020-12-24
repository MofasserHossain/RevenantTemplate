(function ($) {
  "use strict";

  $(".menu li.icon span").on("click", function () {
    $(".menu .items").toggleClass("show");
    $(".menu li.icon span").toggleClass("show");
  });

  $(".mahfuj-1").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
  // owl js
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
})(jQuery);
