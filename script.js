$(document).ready(function () {
  $('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    prevArrow:
      '<button type="button" class="custom-prev-arrow"><img src="./images/prev-arrow.png"/></button>',
    nextArrow:
      '<button type="button" class="custom-next-arrow"><img src="./images/next-arrow.png"/></button>',
    css: {
      '.slick-prev': {
        top: '0', // change the left position to your desired value
      },
    },
  });
});

const menu = document.querySelector('.menu');
const navLinksWrapper = document.querySelector('.nav__links_wrapper');

menu.addEventListener('click', () => {
  if (navLinksWrapper.className.includes('menu_active'))
    navLinksWrapper.classList.remove('menu_active');
  else navLinksWrapper.classList.add('menu_active');
});
