$(document).ready(function() {

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
      console.log('cart-updated!')
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