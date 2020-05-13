$(document).ready(function() {

  let miniCartContentsSelector = '.js-cart--miniCart'

  let ajaxify = {
    onAddToCart: function(event) {
      event.preventDefault();
      $.ajax({
        type: 'POST',
        url: '/cart/add.js',
        data: $(this).serialize(),
        dataType: 'json',
        success: ajaxify.onCartUpdated,
        error: ajaxify.onError
      })
    },
    onCartUpdated: function() {
      let
        $miniCartFieldset = $(miniCartContentsSelector + '.js-cart--fieldset')
      ;

      $miniCartFieldset.prop('disabled', true)

      $.ajax({
        type: 'GET',
        url: '/cart',
        context: document.body,
        success: function(context) {
          let 
            $dataCartContents = $(context).find('.js-cart--contents'),
            dataCartHtml = $dataCartContents.html(),
            $dataCartItemCount = $dataCartContents.attr('data-cart-item-count'),
            $miniCartContents = $(miniCartContentsSelector)
            // $cartItemCount = $('.js-cart-item-count')
          ;

          $cartItemCount.text($dataCartItemCount)
          $miniCartContents.html(dataCartHtml)

          if (parseInt($dataCartItemCount) > 0) {
            // ajaxify.openCart();
            $('html').addClass('miniCartOpen')
            $('.js-cart--outline').addClass('visually-hidden')
            $('.js-cart--filled').removeClass('visually-hidden')
          }
          else {
            // ajaxify.closeCart();
            $('html').removeClass('miniCartOpen')
            $('.js-cart--outline').removeClass('visually-hidden')
            $('.js-cart--filled').addClass('visually-hidden')
          }
        }
      })
    },
    onError: function(XMLHttpRequest, textStatus) {
      let data = XMLHttpRequest.responseJSON
      alert(data.status + "–" + data.message + "; " + data.description)
    },
    init: function() {
      $(document).on('submit', '.js-atc--form', ajaxify.onAddToCart)
    }
  }

  ajaxify.init()
})