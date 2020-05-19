global.$ = global.jQuery = require('jquery');
var jQueryBridget = require('jquery-bridget');

// var Flickity = require('flickity');
// require('flickity-imagesloaded');

// // make Flickity a jQuery plugin
// Flickity.setJQuery( $ );
// jQueryBridget( 'flickity', Flickity, $ );

import './modules/navigation';
import './modules/cart';

import './components/currencyPicker';
import './components/quantityPicker';
import './components/addToCartForm';
import './components/productSlideshow';