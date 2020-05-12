global.$ = global.jQuery = require('jquery');

import 'lazysizes';
import 'lazysizes/plugins/rias/ls.rias';
import 'lazysizes/plugins/bgset/ls.bgset';

import './modules/navigation';

import './components/quantityPicker';
import './components/addToCartForm';

// TO DO: Add cart including removing currency note when value of picker == defaultCurrency