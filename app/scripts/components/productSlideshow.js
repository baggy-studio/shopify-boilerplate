import Swiper from 'swiper'

let
  productSlideshow = '.js-product-slideshow',
  productSlides = '.js-product-slides'
;

$(document).ready(function() {
  // let productSlideshows = {
  //   setup: function($element) {
  //     // let
  //     //   $slides = $element.find(productSlides),
  //     //   slideshowOptions = {
  //     //     slidesToShow: 1,
  //     //     fade: true,
  //     //     arrows: false,
  //     //     rows: 0
  //     //   }
  //     // ;
      
  //     // $slides.slick(slideshowOptions)
  //   },
  //   init: function() {
  //     $(productSlideshow).each(function() {
  //       productSlideshows.setup($(this))
  //     })
  //   }
  // }

  // $('.js-product-slideshow').flickity({
  //   // options
  //   wrapAround: true,
  //   fade: true
  //   // setGallerySize: true,
  //   // contain: true
  // });

  // productSlideshows.init()

  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerSlide: 1,
    direction: 'horizontal',
    effect: 'fade'
  })
})