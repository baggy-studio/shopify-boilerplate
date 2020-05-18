import Currency from '../vendor/currencies';
import '../vendor/jquery.currencies';

let
  shopCurrencyFormat = $('body').attr('data-currency-format'),
  shopCurrency = $('body').attr('data-shop-currency'),
  mwcFormat = $('body').attr('data-shop-mwc-format').replace(/['"]+/g, ''),
  moneyFormat = $('body').attr('data-money-format').replace(/['"]+/g, '')
;

/* Sometimes merchants change their shop currency, let's tell our JavaScript file */
Currency.moneyFormats[shopCurrency].money_with_currency_format = mwcFormat;
Currency.moneyFormats[shopCurrency].money_format = moneyFormat;


// Currency Global Variables
let
  defaultCurrency = $('body').attr('data-default-currency'),
  cookieCurrency = Currency.cookie.read(),
  moneySpanSelector = 'span.money',
  currencyPickerSelector = '[name=currencies]',
  activeCurrencySelector = '.js-currency-active',
  currencyNoteSelector = '.js-cart-currencyNote'
;

let currencyPicker = {
  loadCurrency: function() {
    /* Fix for customer account pages */
    $(moneySpanSelector + ' ' + moneySpanSelector).each(function() {
      $(this).parents(moneySpanSelector).removeClass('money');
    });

    /* Saving the current price */
    $(moneySpanSelector).each(function() {
      $(this).attr('data-currency-'+shopCurrency, $(this).html());
    });

    // If there's no cookie.
    if (cookieCurrency == null) {
      if (shopCurrency !== defaultCurrency) {
        Currency.convertAll(shopCurrency, defaultCurrency);
      }
      else {
        Currency.currentCurrency = defaultCurrency;
      }
    }
    // If the cookie value does not correspond to any value in the currency dropdown.
    else if ($(currencyPickerSelector).length && $(currencyPickerSelector + ' option[value=' + cookieCurrency + ']').length === 0) {
      Currency.currentCurrency = shopCurrency;
      Currency.cookie.write(shopCurrency);
    }
    else if (cookieCurrency === shopCurrency) {
      Currency.currentCurrency = shopCurrency;
    }
    else {
      $(currencyPickerSelector).val(cookieCurrency);
      Currency.convertAll(shopCurrency, cookieCurrency);
    }

    currencyPicker.setCurrencyText();
  },
  onCurrencyChanged: function(event) {
    let
      newCurrency = $(this).val(),
      $otherPickers = $(currencyPickerSelector).not($(this))
    ;

    Currency.convertAll(Currency.currentCurrency, newCurrency);
    currencyPicker.setCurrencyText(newCurrency);

    if ($otherPickers.length > 0) {
      $otherPickers.val(newCurrency);
    }
  },
  setCurrencyText: function(newCurrency = Currency.currentCurrency) {
    let
      $activeCurrency = $(activeCurrencySelector),
      $currencyNote = $(currencyNoteSelector);

    if ($activeCurrency.length > 0) {
      $activeCurrency.text(newCurrency);
    }

    if ($currencyNote.length > 0) {
      if (newCurrency !== shopCurrency) {
        $currencyNote.removeClass('hidden');
      }
      else {
        $currencyNote.addClass('hidden');
      }
    }
  },
  onMoneySpanAdded: function() {
    if(Currency.currentCurrency != defaultCurrency) {
      Currency.convertAll(shopCurrency, Currency.currentCurrency);
      currencyPicker.setCurrencyText();
    }
  },
  init: function() {
    currencyPicker.loadCurrency();

    $(document).on('change', currencyPickerSelector, currencyPicker.onCurrencyChanged);
  }
};


currencyPicker.init();

export default currencyPicker;