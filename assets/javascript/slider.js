/* ===================================== */
/*         PROJECT SLIDER JS             */
/* ===================================== */

$(".projects_slider").slick({
  slidesToShow: 4,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  rows: 2,
  dots: true,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 578,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

/* ===================================== */
/*           CLIENT SLIDER JS            */
/* ===================================== */

$(".client_slider").slick({
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 4000,
  pauseOnHover: false,
  cssEase: "linear",
});
