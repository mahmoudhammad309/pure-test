$(document).ready(function(){
    $('.slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      prevArrow: '<button type="button" class="custom-prev-arrow"><img src="./images/prev-arrow.png"/></button>',
      nextArrow: '<button type="button" class="custom-next-arrow"><img src="./images/next-arrow.png"/></button>',
      css: {
        '.slick-prev': {
          top: '0' // change the left position to your desired value
        }
      }
    });
  });
