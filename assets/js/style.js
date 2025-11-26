var owl = $(".owl-carousel2");

owl.owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 2000,
    smartSpeed: 2000,
    dots: false,
    slideTransition: 'linear',
    nav: false,
    responsive: {
        0: { items: 1 },
        475: { items: 1 },
        600: { items: 1 },
        1000: { items: 1 }
    }
});

// Left button
$(document).on("click", ".btn-left-testimonials", function () {
    owl.trigger('prev.owl.carousel', [600]);
});

// Right button
$(document).on("click", ".btn-right-testimonials", function () {
    owl.trigger('next.owl.carousel', [600]);
});


var owl1 = $(".owl-carousel1");
owl1.owlCarousel({
loop: true,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 3000,
  dots: true,
 nav: true,                     // 👈 IMPORTANT
    navText: [
        '<i class="fa-solid fa-chevron-left"></i>',
        '<i class="fa-solid fa-chevron-right"></i>'
    ],
 responsive: {
    0: { items: 1 },
    575: { items: 1 },
    768: { items: 2 },
    992: { items: 3 },
    1200: { items: 4 }
  }
});


var owl = $(".owl-carousel");
owl.owlCarousel({
 loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 2000,
    smartSpeed: 2000,
    dots: false,
    slideTransition: 'linear',
  responsive: {
    0: {
      items: 2,
    },
    475: {
      items: 1,
    },
    600: {
      items: 5,
    },
    1000: {
      items: 6,
    },
  },
});
// class="owl-carousel owl-theme"
// class="item"

// var owl = $(".owl-carousel");
// owl.owlCarousel({
//   margin: 10,
//   loop: true,
//   autoplay: true,
//   dots : false,
//   autoplayTimeout: 1000,
//   responsive: {
//     0: {
//       items: 2,
//     },
//     475: {
//       items: 1,
//     },
//     600: {
//       items: 5,
//     },
//     1000: {
//       items: 6,
//     },
//   },
// });


