$(document).ready(function(){
  
  $('.slick').slick({
    infinite: true,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-next arrow-prev"><img src="../../web/img/icons/icon-arrow.svg" alt="" srcset=""></button>',
    nextArrow: '<button type="button" class="slick-next arrow-next"><img src="../../web/img/icons/icon-arrow.svg" alt="" srcset=""></button>',
    slidesToShow: 6,
    slidesToScroll: 3
  });

  $('.slick-solar').slick({
    infinite: true,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-next arrow-prev"> <img src="../../web/img/icons/arrowPurple.svg" alt="" srcset=""></button>',
    nextArrow: '<button type="button" class="slick-next arrow-next"> <img src="../../web/img/icons/arrowPurple.svg" alt="" srcset=""></button>',
    slidesToShow: 4,
    slidesToScroll: 3
  });
  
  
  $('.slickBlock').slick({
    infinite: true,
    arrows: true,
    adaptiveHeight: true,
    prevArrow: $('.blockquote__controls__prev'),
    nextArrow: $('.blockquote__controls__next'),
    slidesToShow: 2,
    slidesToScroll: 3
  });
});


