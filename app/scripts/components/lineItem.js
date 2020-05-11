// TO DO: Add rest of the cart functionality and rename this file

$(document).ready(function() {
  let 
    removeLineSelector = '.js-remove-line',
    lineQuantitySelector = '.js-line-quantity',
    lineItem = {
      onLineQuantityChanged: function(event) {
        let
          quantity = this.value,
          id = $(this).attr('id').replace('updates_', ''),
          changes = {
            quantity: quantity,
            id: id
          }
        ;
        $.post('/cart/change.js', changes, ajaxify.onCartUpdated, 'json');
      },
      onLineRemove: function(event) {
        event.preventDefault()
        let
          $removeLink = $(this),
          removeQuery = $removeLink.attr('href').split('change?')[1]
        ;
        $.post('/cart/change.js', removeQuery, ajaxify.onCartUpdated, 'json');
      },
      init: function() {
          $(document).on('click', removeLineSelector, lineItem.onLineRemove)
          $(document).on('change', lineQuantitySelector, lineItem.onLineQuantityChanged)
      }
    }
  ;
  
  lineItem.init()
})