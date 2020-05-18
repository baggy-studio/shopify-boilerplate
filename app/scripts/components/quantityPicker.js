// This script will update the value of the quantity picker
// and enable / disable the buttons when the quantity is changed

$(document).ready(function() {
  let
  quantityFieldSelector = '.js-quantity-field',
  quantityButtonSelector = '.js-quantity-button',
  quantityPickerSelector = '.js-quantity-picker',
  quantityPicker = {
    onButtonClick: function(event) {
      let
        $button = $(this),
        $picker = $button.closest(quantityPickerSelector),
        $quantity = $picker.find(quantityFieldSelector),
        quantityValue = parseInt($quantity.val()),
        max = $quantity.attr('max') ? parseInt($quantity.attr('max')) : null
      ;

      if ($button.hasClass('plus') && (max === null || quantityValue+1 <= max)) {
        // if there's no max, or if the current quantity is less than the max, change the value
        $quantity.val(quantityValue + 1).change();
      }
      else if ($button.hasClass('minus')) {
        $quantity.val(quantityValue - 1).change();
      }
    },
    onChange: function(event) {
      let
        $field = $(this),
        $picker = $field.closest(quantityPickerSelector),
        $quantityText = $picker.find('.js-quantity-text'),
        // check if should disable based on the 'min' and 'max' attr of the input
        shouldDisableMinus = parseInt(this.value) === parseInt($field.attr('min')),
        shouldDisablePlus = parseInt(this.value) === parseInt($field.attr('max')),
        $minusButton = $picker.find('.js-quantity-button.minus'),
        $plusButton = $picker.find('.js-quantity-button.plus')
      ;

      $quantityText.text(this.value);

      if (shouldDisableMinus) {
        $minusButton.prop('disabled', true);
      }
      else if ($minusButton.prop('disabled') === true) {
        $minusButton.prop('disabled', false);
      }

      if (shouldDisablePlus) {
        $plusButton.prop('disabled', true);
      }
      else if ($plusButton.prop('disabled') === true) {
        $plusButton.prop('disabled', false);
      }
    },
    init: function() {
      $(document).on('click', quantityButtonSelector, quantityPicker.onButtonClick);
      $(document).on('change', quantityFieldSelector, quantityPicker.onChange);
    }
  };

  quantityPicker.init()
})