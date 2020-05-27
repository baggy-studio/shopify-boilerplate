import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

let slideshowOptions =  {
  loop: false,
  slidesPerSlide: 1,
  direction: 'horizontal',
  effect: 'fade',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
}


let productSlideshow = new Swiper ('.js-product-slideshow', slideshowOptions)


// This will match the selected option to its corresponding product image,
// based on which product image.src contains the value of the option...
// eg: if user selects White, it will show the slides with images containing the word "white" in the src

// If you want some of the product photos to be visible for all the variants, include the word "gallery" in the filename

const filterImages = {
  changeImage: function(selectedVariant) {
    // Choose which option to filter by (option1, option2, or option3)
    let option = selectedVariant.option1

    $('.js-product-slide').each(function() {
      let 
        $img = $(this).find('img'),
        src = $img[0].src.toString()
      ;

      // First, reset all the filters (or all of the images will disappear)
      filterImages.unFilter()

      if(src.includes(option.toLowerCase()) || src.includes('gallery')) {
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
    productSlideshow.destroy()
    productSlideshow = new Swiper('.js-product-slideshow', slideshowOptions)

    if($('.swiper-slide').length === 1) {
      $('.js-slide-nav').hide()
    } else {
      $('.js-slide-nav').show()
    }
  },
  unFilter: function() {
    $("[data-show]").removeClass("non-swiper-slide").addClass("swiper-slide").show();
    productSlideshow.destroy()
    productSlideshow = new Swiper('.js-product-slideshow', slideshowOptions)
  }
}

export default filterImages