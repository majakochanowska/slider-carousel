$('.content').slick({
    dots: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  $(window).on('load', function() {
      $('.slider-content').jQueryEqualHeight('.us-container');
      $('.slider-content').jQueryEqualHeight('.them-container');
  });
  
  $(window).resize(function() {
      $('.slider-content').jQueryEqualHeight('.us-container');
      $('.slider-content').jQueryEqualHeight('.them-container');
  });