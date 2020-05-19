import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

let slideshowOptions = function(loop) {
  return {
    loop: loop,
    slidesPerSlide: 1,
    direction: 'horizontal',
    effect: 'fade',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }
}

let productSlideshow = new Swiper ('.js-product-slideshow', slideshowOptions(true))


const filterImages = {
  // This will match the selected option to its corresponding images
  // based on which images have the value of the option in the src
  // eg: if user selects White, it will filter the slides to show only 
  // the images with "white" in the src
  changeImage: function(selectedVariant) {
    // Choose which option to filter by (option1, option2, or option3)
    let option = selectedVariant.option1

    $('.js-product-slide').each(function(index) {
      let 
        $img = $(this).find('img'),
        src = $img[0].src.toString()
      ;

      // First, reset all the filters (or all of the images will disappear)
      filterImages.unFilter()

      // If the image src contains the value of the option...
      if(src.indexOf(option.toLowerCase()) != -1) {
        $(this).attr('data-show', true)
        filterImages.filter()
      } else {
        $(this).attr('data-show', false)
        filterImages.filter()
      }
    })
  },
  filter: function() {
    $(".swiper-slide").not("[data-show='"+true+"']").addClass("non-swiper-slide").removeClass("swiper-slide").hide();
    $("[data-color='"+false+"']").removeClass("non-swiper-slide").addClass("swiper-slide").attr("style", null).show();
    productSlideshow.destroy();
    productSlideshow = new Swiper('.js-product-slideshow', slideshowOptions(false))
  },
  unFilter: function() {
    $("[data-show]").removeClass("non-swiper-slide").addClass("swiper-slide").show();
    productSlideshow.destroy()
    productSlideshow = new Swiper('.js-product-slideshow', slideshowOptions(false))
  }
}

export default filterImages