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
            $cartItemCount = $('.js-cart--itemCount')
          ;

          $cartItemCount.text($dataCartItemCount)
          $miniCartContents.html(dataCartHtml)

          if (parseInt($dataCartItemCount) > 0) {
            miniCart.openCart()
            $('.js-cart--outline').addClass('visually-hidden')
            $('.js-cart--filled').removeClass('visually-hidden')
          }
          else {
            miniCart.closeCart()
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

  let miniCart = {
    openCart: function() {
      $('html').addClass('miniCartOpen')
      $('.js-nav--hamburger').removeClass('is-active')
      $('.js-nav--mobile').addClass('hidden')
    },
    closeCart: function() {
      $('html').removeClass('miniCartOpen')
    },
    onCartButtonClick: function(event) {
      let
        isCartOpen = $('html').hasClass('miniCartOpen'),
        isInCart = window.location.href.indexOf('/cart') !== -1
      ;

      event.preventDefault()

      if(!isInCart && !isCartOpen) {
        miniCart.openCart();
      }
      else {
        miniCart.closeCart();
      }
    },
    init: function() {
      $(document).on('click', '.js-cart--toggle', miniCart.onCartButtonClick)
      $(document).on('click', '.js-cart--return', miniCart.closeCart)
      $(document).on('click', '.js-nav--hamburger', miniCart.closeCart)
    }
  }

  miniCart.init()
})