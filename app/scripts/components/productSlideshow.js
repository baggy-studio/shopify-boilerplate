import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

$(document).ready(function() {
  const productSlideshow = new Swiper ('.js-product-slideshow', {
    loop: true,
    slidesPerSlide: 1,
    direction: 'horizontal',
    effect: 'fade',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  })
})