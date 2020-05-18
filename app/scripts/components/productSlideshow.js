require('slick-carousel')

let
  slideshowSelector = '.js-slideshow',
  productSlideshow = '.js-product-slideshow',
  productSlideshowNav = '.js-slideshow-nav',
  productSlides = '.js-product-slides'
;

$(document).ready(function() {
  let productSlideshows = {
    setup: function($element) {
      let
        $slides = $element.find(productSlides),
        slideshowOptions = {
          slidesToShow: 1,
          fade: true,
          arrows: false,
          vertical: true,
          asNavFor: '.js-slideshow-nav .js-product-slides'
        },
        navOptions = {
          slidesToShow: 4,
          vertical: true,
          asNavFor: '.js-product-slideshow .js-product-slides'
        }
      ;
      
      if($element.hasClass('js-product-slideshow')) {
        $slides.slick(slideshowOptions)
      } else if($element.hasClass('js-slideshow-nav')) {
        $slides.slick(navOptions)
      }
      
    },
    init: function() {
      $(slideshowSelector).each(function() {
        productSlideshows.setup($(this))
      })
    }
  }

  productSlideshows.init()
})