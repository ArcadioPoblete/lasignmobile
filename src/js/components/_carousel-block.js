$('.slick').slick({
    infinite: true,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-next arrow-prev"></button>',
    nextArrow: '<button type="button" class="slick-next arrow-next"></button>',
    slidesToShow: 6,
    slidesToScroll: 3
  });



$(document).ready(function(){
  $('.slickBlock').slick({
    infinite: true,
    arrows: false,
    adaptiveHeight: true,
    slidesToShow: 2,
    slidesToScroll: 3
  });
});