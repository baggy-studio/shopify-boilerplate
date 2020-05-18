import currencyPicker from './currencyPicker';

$(document).ready(function() {
  let
    addToCartFormSelector = '.js-atc-form',
    variantPriceSelector = '.js-atc-price',
    // Find the input / select with a name including 'option'
    productOptionSelector = addToCartFormSelector + ' [name*=option]'
  ;

  let addToCartForm = {
    onProductOptionChanged: function(event) {
      let 
        $form = $(this).closest(addToCartFormSelector),
        selectedVariant = addToCartForm.getActiveVariant($form)
      ;

      // When the product option has been selected, trigger our form:change event
      $form.trigger('form:change', [selectedVariant])
      window.history.replaceState(null, null, '?variant=' + selectedVariant.id)
    },
    getActiveVariant: function($form) {
      let 
        variants = JSON.parse(decodeURIComponent($form.attr('data-variants'))),
        formData = $form.serializeArray(),
        // Our form has three options built into its data. We need to first reset these.
        formOptions = {
          option1: null,
          option2: null,
          option3: null
        },
        $id = $form.find('.js-atc-variant'),
        // If no variant is selected, use the default value (as specified in liquid file)
        selectedVariant = $id.val()
      ;

      // When an option in our form is selected, make the name of the option in the data match up with the label that our customers see.
      $.each(formData, function(index, item ) {
        if(item.name.indexOf('option') !== -1 ) {
          formOptions[item.name] = item.value
        }
      })

      // When all of the possible product variants have been selected, put this data into our selectedVariant object
      $.each(variants, function(index, variant) {
        if(variant.option1 === formOptions.option1 && variant.option2 === formOptions.option2 && variant.option3 === formOptions.option3) {
          selectedVariant = variant
          return false
        }
      })

      // Return our new selectedVariant object for use in our onProductChanged function
      return selectedVariant
    },
    validate: function(event, selectedVariant) {
        
      let 
        $form = $(this),
        hasVariant = selectedVariant !== null,
        canAddToCart = selectedVariant.inventory_quantity > 0,
        $id = $form.find('.js-atc-variant'),
        $addToCartButton = $form.find('.js-atc-button'),
        $price = $(variantPriceSelector),
        formattedVariantPrice,
        priceHtml;
      ;
      
      if (hasVariant) {
        formattedVariantPrice = '£' + (selectedVariant.price/100).toFixed(2);
        priceHtml = '<span class="money">'+formattedVariantPrice+'</span>';
      }
      else {
        priceHtml = $price.attr('data-default-price');
      }

      if(canAddToCart) {
        $id.val(selectedVariant.id)
        $addToCartButton.prop('disabled', false)
        $addToCartButton.removeClass('disabled')
        // // Change this if using different cart button copy
        $addToCartButton.text('Add to Cart')
        window.history.replaceState(null, null, '?variant=' + selectedVariant.id)
      }
      else {
        $id.val('')
        $addToCartButton.prop('disabled', true)
        $addToCartButton.addClass('disabled')
        $addToCartButton.text('Sold Out')
        window.history.replaceState(null, null, window.location.pathname)
      }

      $price.html(priceHtml)
      currencyPicker.onMoneySpanAdded()
    },
    init: function() {
      $(document).on('change', productOptionSelector, addToCartForm.onProductOptionChanged)
      $(document).on('form:change', addToCartFormSelector, addToCartForm.validate)
    }
  }

  addToCartForm.init()
})