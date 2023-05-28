$(document).ready(function () {
    $('.course-slider').owlCarousel({
      loop: true,
      margin: 50,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 2
        }
      }
    });
  
    var owl = $('.course-slider');
    owl.owlCarousel();
    // Go to the next item
    $('#carouse-next-button').click(function () {
      owl.trigger('next.owl.carousel');
    })
    $('#carouse-prev-button').click(function () {
      owl.trigger('prev.owl.carousel');
    })
  })