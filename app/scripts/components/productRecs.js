import currencyPicker from '../components/currencyPicker';
import '../vendor/formatMoney';

window.moneyFormat = $('body').attr('data-money-format').replace(/['"]+/g, '')

$(document).ready(function() {
  let productRecsSelector = '.product-recommendations'

  let productRecommendations = {
    loadProducts: function($section) {
      let 
        productId = $section.attr('data-product-id'),
        baseUrl = $section.attr('data-base-url'),
        limit = $section.attr('data-limit'),
        request = baseUrl + '.json?product_id=' + productId + '&limit=' + limit
      ;

      $.ajax({
        type: 'GET',
        url: request,
        success: function(data) {
          const {products} = data
          productRecommendations.renderProduct($section, products)
          currencyPicker.init($section)
        },
        error: function() {
          productRecommendations.onError($section)
        }
      })
    },
    renderProduct: function($section, products) {
      let html = products.map(product => {
        return [
          '<div class="product-card">',
          '<a href="' + product.url + '"class="product-card__link group">',
          '<div class="relative overflow-y-hidden h-full">',
          '<div class="w-full h-full responsive-image__wrapper" data-image-id="' + product.media[0].id + '">',
          '<img class="responsive-image__image lazyload w-full h-full object-cover" src="' + product.media[0].src +'" data-src="' + product.media[0].src + '" data-widths="180 360 540 720 900 1080 1296 1512 1728 1944 2160 2376 2592 2808 3024" data-aspectratio="' + product.media[0].aspect_ratio + '" data-sizes="auto" tabindex="-1" alt="' + product.media[0].alt + '">',
          '</div>',
          '</div>',
          '<h2 class="mt-16 text-center">' + product.title + ' – <span class="money">' + window.formatMoney(product.price, window.moneyFormat)  + '</span></h2>',
          '</a>',
          '</div>'
        ].join('')
      })
      $section.append(html)
    },
    onError: function($section) {
      $section.addClass('hidden')
    },
    init: function() {
      let $section = $(productRecsSelector)
      if ($section === null) { return; } else { productRecommendations.loadProducts($section) }
    }
  }

  productRecommendations.init()
})

