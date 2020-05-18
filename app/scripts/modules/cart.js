import currencyPicker from '../components/currencyPicker';

$(document).ready(function() {

  let miniCartContentsSelector = '.js-cart-miniCart'

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
        $miniCartFieldset = $(miniCartContentsSelector + '.js-cart-fieldset')
      ;

      $miniCartFieldset.prop('disabled', true)

      $.ajax({
        type: 'GET',
        url: '/cart',
        context: document.body,
        success: function(context) {
          let 
            $dataCartContents = $(context).find('.js-cart-contents'),
            dataCartHtml = $dataCartContents.html(),
            $dataCartItemCount = $dataCartContents.attr('data-cart-item-count'),
            $miniCartContents = $(miniCartContentsSelector),
            $cartItemCount = $('.js-cart-itemCount')
          ;
          
          $cartItemCount.text($dataCartItemCount)
          $miniCartContents.html(dataCartHtml)
          currencyPicker.onMoneySpanAdded();

          if (parseInt($dataCartItemCount) > 0) {
            miniCart.openCart()
            $('.js-cart-outline').addClass('visually-hidden')
            $('.js-cart-filled').removeClass('visually-hidden')
          }
          else {
            miniCart.closeCart()
            $('html').removeClass('miniCartOpen')
            $('.js-cart-outline').removeClass('visually-hidden')
            $('.js-cart-filled').addClass('visually-hidden')
          }
        }
      })
    },
    onError: function(XMLHttpRequest, textStatus) {
      let data = XMLHttpRequest.responseJSON
      alert(data.status + "–" + data.message + "; " + data.description)
    },
    init: function() {
      $(document).on('submit', '.js-atc-form', ajaxify.onAddToCart)
    }
  }

  ajaxify.init()

  let miniCart = {
    openCart: function() {
      $('html').addClass('miniCartOpen')
      $('.js-nav-hamburger').removeClass('is-active')
      $('.js-nav-mobile').addClass('hidden')
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
      $(document).on('click', '.js-cart-toggle', miniCart.onCartButtonClick)
      $(document).on('click', '.js-cart-return', miniCart.closeCart)
      $(document).on('click', '.js-nav-hamburger', miniCart.closeCart)
    }
  }

  miniCart.init()

  let 
    removeLineSelector = '.js-line-remove',
    lineQuantitySelector = '.js-line-quantity'
  ;

  let lineItem = {
    isInMiniCart: function(element) {
      let
        $element = $(element),
        $miniCart = $element.closest(miniCartContentsSelector),
        isInMiniCart = $miniCart.length !== 0
      ;
      return isInMiniCart
    },
    onLineQuantityChanged: function(event) {
      let
        quantity = this.value,
        id = $(this).attr('id').replace('updates_', ''),
        changes = {
          quantity: quantity,
          id: id
        },
        isInMiniCart = lineItem.isInMiniCart(this)
      ;
        
      if(isInMiniCart) {
        $.post('/cart/change.js', changes, ajaxify.onCartUpdated, 'json');
      }
    },
    onLineRemove: function(event) {
      let isInMiniCart = lineItem.isInMiniCart(this)

      if(isInMiniCart) {
        event.preventDefault()
        let 
          $removeLink = $(this),
          removeQuery = $removeLink.attr('href').split('change?')[1]
        ;
        $.post('/cart/change.js', removeQuery, ajaxify.onCartUpdated, 'json');
      }
    },
    init: function() {
      $(document).on('click', removeLineSelector, lineItem.onLineRemove)
      $(document).on('change', lineQuantitySelector, lineItem.onLineQuantityChanged)
    }
}

lineItem.init()
})