global.jQuery = require('jquery');

let Currency = {
  rates: {"USD":1.0,"EUR":1.08389,"GBP":1.24164,"CAD":0.718078,"ARS":0.0148706,"AUD":0.653528,"BRL":0.174439,"CLP":0.00121105,"CNY":0.14136,"CYP":0.397899,"CZK":0.0397629,"DKK":0.145314,"EEK":0.0706676,"HKD":0.129009,"HUF":0.00310218,"ISK":0.00683816,"INR":0.0132356,"JMD":0.00731284,"JPY":0.0093524,"LVL":1.57329,"LTL":0.320236,"MTL":0.293496,"MXN":0.0422971,"NZD":0.614135,"NOK":0.0978901,"PLN":0.238271,"SGD":0.707586,"SKK":21.5517,"SIT":175.439,"ZAR":0.0545576,"KRW":0.000819848,"SEK":0.102193,"CHF":1.02975,"TWD":0.033486,"UYU":0.0230745,"MYR":0.230721,"BSD":1.0,"CRC":0.00176159,"RON":0.224491,"PHP":0.0198097,"AED":0.272294,"VEB":0.000100125,"IDR":6.6949e-05,"TRY":0.140911,"THB":0.0310597,"TTD":0.148203,"ILS":0.285204,"SYP":0.00194822,"XCD":0.369937,"COP":0.000257002,"RUB":0.0136228,"HRK":0.143508,"KZT":0.00237033,"TZS":0.000432147,"XPT":773.778,"SAR":0.266667,"NIO":0.0290744,"LAK":0.000111488,"OMR":2.60078,"AMD":0.0020622,"CDF":0.000575725,"KPW":0.00111104,"SPL":6.0,"KES":0.00943183,"ZWD":0.00276319,"KHR":0.000243857,"MVR":0.0645877,"GTQ":0.129877,"BZD":0.496738,"BYR":4.10234e-05,"LYD":0.704533,"DZD":0.00775536,"BIF":0.0005249,"GIP":1.24164,"BOB":0.145215,"XOF":0.00165238,"STD":4.40377e-05,"NGN":0.00256428,"PGK":0.29,"ERN":0.0666667,"MWK":0.00135717,"CUP":0.0377358,"GMD":0.0195526,"CVE":0.00982944,"BTN":0.0132356,"XAF":0.00165238,"UGX":0.000263143,"MAD":0.101798,"MNT":0.000358371,"LSL":0.0545576,"XAG":15.5619,"TOP":0.430588,"SHP":1.24164,"RSD":0.00921986,"HTG":0.010121,"MGA":0.000263152,"MZN":0.0147724,"FKP":1.24164,"BWP":0.0825454,"HNL":0.0403356,"PYG":0.000153376,"JEP":1.24164,"EGP":0.063762,"LBP":0.00066335,"ANG":0.558861,"WST":0.361922,"TVD":0.653528,"GYD":0.00480356,"GGP":1.24164,"NPR":0.00823367,"KMF":0.00220318,"IRR":2.38562e-05,"XPD":1849.35,"SRD":0.134154,"TMM":5.71428e-05,"SZL":0.0545576,"MOP":0.125252,"BMD":1.0,"XPF":0.00908302,"ETB":0.0296746,"JOD":1.41044,"MDL":0.0562143,"MRO":0.00263767,"YER":0.00399693,"BAM":0.554186,"AWG":0.558659,"PEN":0.293408,"VEF":0.100125,"SLL":0.000101688,"KYD":1.21951,"AOA":0.00183003,"TND":0.345815,"TJS":0.0980709,"SCR":0.0556582,"LKR":0.00536134,"DJF":0.00562395,"GNF":0.000105037,"VUV":0.00830939,"SDG":0.0180821,"IMP":1.24164,"GEL":0.311089,"FJD":0.443695,"DOP":0.0181989,"XDR":1.36286,"MUR":0.0251621,"MMK":0.000718954,"LRD":0.00504374,"BBD":0.5,"ZMK":5.37714e-05,"XAU":1706.81,"VND":4.27837e-05,"UAH":0.0372409,"TMT":0.285714,"IQD":0.000843706,"BGN":0.554186,"KGS":0.0126742,"RWF":0.0010697,"BHD":2.65957,"UZS":9.88217e-05,"PKR":0.00626266,"MKD":0.0175402,"AFN":0.0131126,"NAD":0.0545576,"BDT":0.0117876,"AZN":0.588241,"SOS":0.00173753,"QAR":0.274725,"PAB":1.0,"CUC":1.0,"SVC":0.114286,"SBD":0.121,"ALL":0.00869713,"BND":0.707586,"KWD":3.23112,"GHS":0.173839,"ZMW":0.0537714,"XBT":8807.41,"NTD":0.0337206,"BYN":0.410234,"CNH":0.140962,"MRU":0.0263767,"STN":0.0440377,"VES":5.79423e-06,"MXV":0.268384},
  convert: function(amount, from, to) {
    return (amount * this.rates[from]) / this.rates[to];
  }
};

/*
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

jQuery.cookie=function(b,j,m){if(typeof j!="undefined"){m=m||{};if(j===null){j="";m.expires=-1}var e="";if(m.expires&&(typeof m.expires=="number"||m.expires.toUTCString)){var f;if(typeof m.expires=="number"){f=new Date();f.setTime(f.getTime()+(m.expires*24*60*60*1000))}else{f=m.expires}e="; expires="+f.toUTCString()}var l=m.path?"; path="+(m.path):"";var g=m.domain?"; domain="+(m.domain):"";var a=m.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),e,l,g,a].join("")}else{var d=null;if(document.cookie&&document.cookie!=""){var k=document.cookie.split(";");for(var h=0;h<k.length;h++){var c=jQuery.trim(k[h]);if(c.substring(0,b.length+1)==(b+"=")){d=decodeURIComponent(c.substring(b.length+1));break}}}return d}};

/*
 * Currency tools
 *
 * Copyright (c) 2015 Caroline Schnapp (mllegeorgesand@gmail.com)
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */ 

if (typeof Currency === 'undefined') {
  let Currency = {};
}

Currency.cookie = {
  configuration: {
    expires: 365,
    path: '/',
    domain: window.location.hostname
  },
  name: 'currency',
  write: function(currency) {
    jQuery.cookie(this.name, currency, this.configuration);
  },
  read: function() {
    return jQuery.cookie(this.name);
  },
  destroy: function() {
    jQuery.cookie(this.name, null, this.configuration);
  }
};

Currency.moneyFormats = {
  "USD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}} USD"
  },
  "EUR":{
    "money_format":"&euro;{{amount}}",
    "money_with_currency_format":"&euro;{{amount}} EUR"
  },
  "GBP":{
    "money_format":"&pound;{{amount}}",
    "money_with_currency_format":"&pound;{{amount}} GBP"
  },
  "CAD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}} CAD"
  },
  "ALL":{
    "money_format":"Lek {{amount}}",
    "money_with_currency_format":"Lek {{amount}} ALL"
  },
  "DZD":{
    "money_format":"DA {{amount}}",
    "money_with_currency_format":"DA {{amount}} DZD"
  },
  "AOA":{
    "money_format":"Kz{{amount}}",
    "money_with_currency_format":"Kz{{amount}} AOA"
  },
  "ARS":{
    "money_format":"${{amount_with_comma_separator}}",
    "money_with_currency_format":"${{amount_with_comma_separator}} ARS"
  },
  "AMD":{
    "money_format":"{{amount}} AMD",
    "money_with_currency_format":"{{amount}} AMD"
  },
  "AWG":{
    "money_format":"Afl{{amount}}",
    "money_with_currency_format":"Afl{{amount}} AWG"
  },
  "AUD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}} AUD"
  },
  "BBD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}} Bds"
  },
  "AZN":{
    "money_format":"m.{{amount}}",
    "money_with_currency_format":"m.{{amount}} AZN"
  },
  "BDT":{
    "money_format":"Tk {{amount}}",
    "money_with_currency_format":"Tk {{amount}} BDT"
  },
  "BSD":{
    "money_format":"BS${{amount}}",
    "money_with_currency_format":"BS${{amount}} BSD"
  },
  "BHD":{
    "money_format":"{{amount}}0 BD",
    "money_with_currency_format":"{{amount}}0 BHD"
  },
  "BYR":{
    "money_format":"Br {{amount}}",
    "money_with_currency_format":"Br {{amount}} BYR"
  },
  "BZD":{
    "money_format":"BZ${{amount}}",
    "money_with_currency_format":"BZ${{amount}} BZD"
  },
  "BTN":{
    "money_format":"Nu {{amount}}",
    "money_with_currency_format":"Nu {{amount}} BTN"
  },
  "BAM":{
    "money_format":"KM {{amount_with_comma_separator}}",
    "money_with_currency_format":"KM {{amount_with_comma_separator}} BAM"
  },
  "BRL":{
    "money_format":"R$ {{amount_with_comma_separator}}",
    "money_with_currency_format":"R$ {{amount_with_comma_separator}} BRL"
  },
  "BOB":{
    "money_format":"Bs{{amount_with_comma_separator}}",
    "money_with_currency_format":"Bs{{amount_with_comma_separator}} BOB"
  },
  "BWP":{
    "money_format":"P{{amount}}",
    "money_with_currency_format":"P{{amount}} BWP"
  },
  "BND":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}} BND"
  },
  "BGN":{
    "money_format":"{{amount}} лв",
    "money_with_currency_format":"{{amount}} лв BGN"
  },
  "MMK":{
    "money_format":"K{{amount}}",
    "money_with_currency_format":"K{{amount}} MMK"
  },
  "KHR":{
    "money_format":"KHR{{amount}}",
    "money_with_currency_format":"KHR{{amount}}"
  },
  "KYD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}} KYD"
  },
  "XAF":{
    "money_format":"FCFA{{amount}}",
    "money_with_currency_format":"FCFA{{amount}} XAF"
  },
  "CLP":{
    "money_format":"${{amount_no_decimals}}",
    "money_with_currency_format":"${{amount_no_decimals}} CLP"
  },
  "CNY":{
    "money_format":"&#165;{{amount}}",
    "money_with_currency_format":"&#165;{{amount}} CNY"
  },
  "COP":{
    "money_format":"${{amount_with_comma_separator}}",
    "money_with_currency_format":"${{amount_with_comma_separator}} COP"
  },
  "CRC":{
    "money_format":"&#8353; {{amount_with_comma_separator}}",
    "money_with_currency_format":"&#8353; {{amount_with_comma_separator}} CRC"
  },
  "HRK":{
    "money_format":"{{amount_with_comma_separator}} kn",
    "money_with_currency_format":"{{amount_with_comma_separator}} kn HRK"
  },
  "CZK":{
    "money_format":"{{amount_with_comma_separator}} K&#269;",
    "money_with_currency_format":"{{amount_with_comma_separator}} K&#269;"
  },
  "DKK":{
    "money_format":"{{amount_with_comma_separator}}",
    "money_with_currency_format":"kr.{{amount_with_comma_separator}}"
  },
  "DOP":{
    "money_format":"RD$ {{amount}}",
    "money_with_currency_format":"RD$ {{amount}}"
  },
  "XCD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"EC${{amount}}"
  },
  "EGP":{
    "money_format":"LE {{amount}}",
    "money_with_currency_format":"LE {{amount}} EGP"
  },
  "ETB":{
    "money_format":"Br{{amount}}",
    "money_with_currency_format":"Br{{amount}} ETB"
  },
  "XPF":{
    "money_format":"{{amount_no_decimals_with_comma_separator}} XPF",
    "money_with_currency_format":"{{amount_no_decimals_with_comma_separator}} XPF"
  },
  "FJD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"FJ${{amount}}"
  },
  "GMD":{
    "money_format":"D {{amount}}",
    "money_with_currency_format":"D {{amount}} GMD"
  },
  "GHS":{
    "money_format":"GH&#8373;{{amount}}",
    "money_with_currency_format":"GH&#8373;{{amount}}"
  },
  "GTQ":{
    "money_format":"Q{{amount}}",
    "money_with_currency_format":"{{amount}} GTQ"
  },
  "GYD":{
    "money_format":"G${{amount}}",
    "money_with_currency_format":"${{amount}} GYD"
  },
  "GEL":{
    "money_format":"{{amount}} GEL",
    "money_with_currency_format":"{{amount}} GEL"
  },
  "HNL":{
    "money_format":"L {{amount}}",
    "money_with_currency_format":"L {{amount}} HNL"
  },
  "HKD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"HK${{amount}}"
  },
  "HUF":{
    "money_format":"{{amount_no_decimals_with_comma_separator}}",
    "money_with_currency_format":"{{amount_no_decimals_with_comma_separator}} Ft"
  },
  "ISK":{
    "money_format":"{{amount_no_decimals}} kr",
    "money_with_currency_format":"{{amount_no_decimals}} kr ISK"
  },
  "INR":{
    "money_format":"Rs. {{amount}}",
    "money_with_currency_format":"Rs. {{amount}}"
  },
  "IDR":{
    "money_format":"{{amount_with_comma_separator}}",
    "money_with_currency_format":"Rp {{amount_with_comma_separator}}"
  },
  "ILS":{
    "money_format":"{{amount}} NIS",
    "money_with_currency_format":"{{amount}} NIS"
  },
  "JMD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}} JMD"
  },
  "JPY":{
    "money_format":"&#165;{{amount_no_decimals}}",
    "money_with_currency_format":"&#165;{{amount_no_decimals}} JPY"
  },
  "JEP":{
    "money_format":"&pound;{{amount}}",
    "money_with_currency_format":"&pound;{{amount}} JEP"
  },
  "JOD":{
    "money_format":"{{amount}}0 JD",
    "money_with_currency_format":"{{amount}}0 JOD"
  },
  "KZT":{
    "money_format":"{{amount}} KZT",
    "money_with_currency_format":"{{amount}} KZT"
  },
  "KES":{
    "money_format":"KSh{{amount}}",
    "money_with_currency_format":"KSh{{amount}}"
  },
  "KWD":{
    "money_format":"{{amount}}0 KD",
    "money_with_currency_format":"{{amount}}0 KWD"
  },
  "KGS":{
    "money_format":"лв{{amount}}",
    "money_with_currency_format":"лв{{amount}}"
  },
  "LVL":{
    "money_format":"Ls {{amount}}",
    "money_with_currency_format":"Ls {{amount}} LVL"
  },
  "LBP":{
    "money_format":"L&pound;{{amount}}",
    "money_with_currency_format":"L&pound;{{amount}} LBP"
  },
  "LTL":{
    "money_format":"{{amount}} Lt",
    "money_with_currency_format":"{{amount}} Lt"
  },
  "MGA":{
    "money_format":"Ar {{amount}}",
    "money_with_currency_format":"Ar {{amount}} MGA"
  },
  "MKD":{
    "money_format":"ден {{amount}}",
    "money_with_currency_format":"ден {{amount}} MKD"
  },
  "MOP":{
    "money_format":"MOP${{amount}}",
    "money_with_currency_format":"MOP${{amount}}"
  },
  "MVR":{
    "money_format":"Rf{{amount}}",
    "money_with_currency_format":"Rf{{amount}} MRf"
  },
  "MXN":{
    "money_format":"$ {{amount}}",
    "money_with_currency_format":"$ {{amount}} MXN"
  },
  "MYR":{
    "money_format":"RM{{amount}} MYR",
    "money_with_currency_format":"RM{{amount}} MYR"
  },
  "MUR":{
    "money_format":"Rs {{amount}}",
    "money_with_currency_format":"Rs {{amount}} MUR"
  },
  "MDL":{
    "money_format":"{{amount}} MDL",
    "money_with_currency_format":"{{amount}} MDL"
  },
  "MAD":{
    "money_format":"{{amount}} dh",
    "money_with_currency_format":"Dh {{amount}} MAD"
  },
  "MNT":{
    "money_format":"{{amount_no_decimals}} &#8366",
    "money_with_currency_format":"{{amount_no_decimals}} MNT"
  },
  "MZN":{
    "money_format":"{{amount}} Mt",
    "money_with_currency_format":"Mt {{amount}} MZN"
  },
  "NAD":{
    "money_format":"N${{amount}}",
    "money_with_currency_format":"N${{amount}} NAD"
  },
  "NPR":{
    "money_format":"Rs{{amount}}",
    "money_with_currency_format":"Rs{{amount}} NPR"
  },
  "ANG":{
    "money_format":"&fnof;{{amount}}",
    "money_with_currency_format":"{{amount}} NA&fnof;"
  },
  "NZD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}} NZD"
  },
  "NIO":{
    "money_format":"C${{amount}}",
    "money_with_currency_format":"C${{amount}} NIO"
  },
  "NGN":{
    "money_format":"&#8358;{{amount}}",
    "money_with_currency_format":"&#8358;{{amount}} NGN"
  },
  "NOK":{
    "money_format":"kr {{amount_with_comma_separator}}",
    "money_with_currency_format":"kr {{amount_with_comma_separator}} NOK"
  },
  "OMR":{
    "money_format":"{{amount_with_comma_separator}} OMR",
    "money_with_currency_format":"{{amount_with_comma_separator}} OMR"
  },
  "PKR":{
    "money_format":"Rs.{{amount}}",
    "money_with_currency_format":"Rs.{{amount}} PKR"
  },
  "PGK":{
    "money_format":"K {{amount}}",
    "money_with_currency_format":"K {{amount}} PGK"
  },
  "PYG":{
    "money_format":"Gs. {{amount_no_decimals_with_comma_separator}}",
    "money_with_currency_format":"Gs. {{amount_no_decimals_with_comma_separator}} PYG"
  },
  "PEN":{
    "money_format":"S/. {{amount}}",
    "money_with_currency_format":"S/. {{amount}} PEN"
  },
  "PHP":{
    "money_format":"&#8369;{{amount}}",
    "money_with_currency_format":"&#8369;{{amount}} PHP"
  },
  "PLN":{
    "money_format":"{{amount_with_comma_separator}} zl",
    "money_with_currency_format":"{{amount_with_comma_separator}} zl PLN"
  },
  "QAR":{
    "money_format":"QAR {{amount_with_comma_separator}}",
    "money_with_currency_format":"QAR {{amount_with_comma_separator}}"
  },
  "RON":{
    "money_format":"{{amount_with_comma_separator}} lei",
    "money_with_currency_format":"{{amount_with_comma_separator}} lei RON"
  },
  "RUB":{
    "money_format":"&#1088;&#1091;&#1073;{{amount_with_comma_separator}}",
    "money_with_currency_format":"&#1088;&#1091;&#1073;{{amount_with_comma_separator}} RUB"
  },
  "RWF":{
    "money_format":"{{amount_no_decimals}} RF",
    "money_with_currency_format":"{{amount_no_decimals}} RWF"
  },
  "WST":{
    "money_format":"WS$ {{amount}}",
    "money_with_currency_format":"WS$ {{amount}} WST"
  },
  "SAR":{
    "money_format":"{{amount}} SR",
    "money_with_currency_format":"{{amount}} SAR"
  },
  "STD":{
    "money_format":"Db {{amount}}",
    "money_with_currency_format":"Db {{amount}} STD"
  },
  "RSD":{
    "money_format":"{{amount}} RSD",
    "money_with_currency_format":"{{amount}} RSD"
  },
  "SCR":{
    "money_format":"Rs {{amount}}",
    "money_with_currency_format":"Rs {{amount}} SCR"
  },
  "SGD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}} SGD"
  },
  "SYP":{
    "money_format":"S&pound;{{amount}}",
    "money_with_currency_format":"S&pound;{{amount}} SYP"
  },
  "ZAR":{
    "money_format":"R {{amount}}",
    "money_with_currency_format":"R {{amount}} ZAR"
  },
  "KRW":{
    "money_format":"&#8361;{{amount_no_decimals}}",
    "money_with_currency_format":"&#8361;{{amount_no_decimals}} KRW"
  },
  "LKR":{
    "money_format":"Rs {{amount}}",
    "money_with_currency_format":"Rs {{amount}} LKR"
  },
  "SEK":{
    "money_format":"{{amount_no_decimals}} kr",
    "money_with_currency_format":"{{amount_no_decimals}} kr SEK"
  },
  "CHF":{
    "money_format":"SFr. {{amount}}",
    "money_with_currency_format":"SFr. {{amount}} CHF"
  },
  "TWD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}} TWD"
  },
  "THB":{
    "money_format":"{{amount}} &#xe3f;",
    "money_with_currency_format":"{{amount}} &#xe3f; THB"
  },
  "TZS":{
    "money_format":"{{amount}} TZS",
    "money_with_currency_format":"{{amount}} TZS"
  },
  "TTD":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}} TTD"
  },
  "TND":{
    "money_format":"{{amount}}",
    "money_with_currency_format":"{{amount}} DT"
  },
  "TRY":{
    "money_format":"{{amount}}TL",
    "money_with_currency_format":"{{amount}}TL"
  },
  "UGX":{
    "money_format":"Ush {{amount_no_decimals}}",
    "money_with_currency_format":"Ush {{amount_no_decimals}} UGX"
  },
  "UAH":{
    "money_format":"₴{{amount}}",
    "money_with_currency_format":"₴{{amount}} UAH"
  },
  "AED":{
    "money_format":"Dhs. {{amount}}",
    "money_with_currency_format":"Dhs. {{amount}} AED"
  },
  "UYU":{
    "money_format":"${{amount_with_comma_separator}}",
    "money_with_currency_format":"${{amount_with_comma_separator}} UYU"
  },
  "VUV":{
    "money_format":"${{amount}}",
    "money_with_currency_format":"${{amount}}VT"
  },
  "VEF":{
    "money_format":"Bs. {{amount_with_comma_separator}}",
    "money_with_currency_format":"Bs. {{amount_with_comma_separator}} VEF"
  },
  "VND":{
    "money_format":"{{amount_no_decimals_with_comma_separator}}&#8363;",
    "money_with_currency_format":"{{amount_no_decimals_with_comma_separator}} VND"
  },
  "XBT":{
    "money_format":"{{amount_no_decimals}} BTC",
    "money_with_currency_format":"{{amount_no_decimals}} BTC"
  },
  "XOF":{
    "money_format":"CFA{{amount}}",
    "money_with_currency_format":"CFA{{amount}} XOF"
  },
  "ZMW":{
    "money_format":"K{{amount_no_decimals_with_comma_separator}}",
    "money_with_currency_format":"ZMW{{amount_no_decimals_with_comma_separator}}"
  }
};

Currency.formatMoney = function(cents, format) {
  if (typeof Shopify.formatMoney === 'function') {
    return Shopify.formatMoney(cents, format);
  }
  if (typeof cents == 'string') { cents = cents.replace('.',''); }
  var value = '';
  var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
  var formatString = format || '${{amount}}';
  function defaultOption(opt, def) {
     return (typeof opt == 'undefined' ? def : opt);
  }
  function formatWithDelimiters(number, precision, thousands, decimal) {
    precision = defaultOption(precision, 2);
    thousands = defaultOption(thousands, ',');
    decimal   = defaultOption(decimal, '.');
    if (isNaN(number) || number == null) { return 0; }
    number = (number/100.0).toFixed(precision);
    var parts   = number.split('.'),
        dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
        cents   = parts[1] ? (decimal + parts[1]) : '';
    return dollars + cents;
  }
  switch(formatString.match(placeholderRegex)[1]) {
    case 'amount':
      value = formatWithDelimiters(cents, 2);
      break;
    case 'amount_no_decimals':
      value = formatWithDelimiters(cents, 0);
      break;
    case 'amount_with_comma_separator':
      value = formatWithDelimiters(cents, 2, '.', ',');
      break;
    case 'amount_no_decimals_with_comma_separator':
      value = formatWithDelimiters(cents, 0, '.', ',');
      break;
  }
  return formatString.replace(placeholderRegex, value);
};
  
Currency.currentCurrency = '';

Currency.format = 'money_with_currency_format';

Currency.convertAll = function(oldCurrency, newCurrency, selector, format) {
  jQuery(selector || 'span.money').each(function() {
    // If the amount has already been converted, we leave it alone.
    if (jQuery(this).attr('data-currency') === newCurrency) return;
    // If we are converting to a currency that we have saved, we will use the saved amount.
    if (jQuery(this).attr('data-currency-'+newCurrency)) {
      jQuery(this).html(jQuery(this).attr('data-currency-'+newCurrency));
    }
    else {
      // Converting to Y for the first time? Let's get to it!
      var cents = 0.0;
      var oldFormat = Currency.moneyFormats[oldCurrency][format || Currency.format] || '{{amount}}';
      var newFormat = Currency.moneyFormats[newCurrency][format || Currency.format] || '{{amount}}';
      if (oldFormat.indexOf('amount_no_decimals') !== -1) {
        cents = Currency.convert(parseInt(jQuery(this).html().replace(/[^0-9]/g, ''), 10)*100, oldCurrency, newCurrency);
      }
      else if (oldCurrency === 'JOD' || oldCurrency == 'KWD' || oldCurrency == 'BHD') {
        cents = Currency.convert(parseInt(jQuery(this).html().replace(/[^0-9]/g, ''), 10)/10, oldCurrency, newCurrency);
      }
      else { 
        cents = Currency.convert(parseInt(jQuery(this).html().replace(/[^0-9]/g, ''), 10), oldCurrency, newCurrency);
      }
      var newFormattedAmount = Currency.formatMoney(cents, newFormat);
      jQuery(this).html(newFormattedAmount);
      jQuery(this).attr('data-currency-'+newCurrency, newFormattedAmount);
    }
    // We record the new currency locally.
    jQuery(this).attr('data-currency', newCurrency);
  });
  this.currentCurrency = newCurrency;
  this.cookie.write(newCurrency);
};

let showMultipleCurrencies = $('body').attr('data-show-currencies')

Currency.format = shopCurrencyFormat;

let
  shopCurrencyFormat = $('body').attr('data-currency-format'),
  shopCurrency = $('body').attr('data-shop-currency'),
  mwcFormat = $('body').attr('data-shop-mwc-format').replace(/['"]+/g, ''),
  moneyFormat = $('body').attr('data-money-format').replace(/['"]+/g, '')
;

/* Sometimes merchants change their shop currency, let's tell our JavaScript file */
Currency.moneyFormats[shopCurrency].money_with_currency_format = mwcFormat;
Currency.moneyFormats[shopCurrency].money_format = moneyFormat;

let defaultCurrency = $('body').attr('data-default-currency')

/* Cookie currency */
var cookieCurrency = Currency.cookie.read();



// Currency Global Variables

let
  moneySpanSelector = 'span.money',
  currencyPickerSelector = '[name=currencies]',
  activeCurrencySelector = '.js-active-currency',
  currencyNoteSelector = '.js-cart-currency-note'
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
      $otherPickers = $(currencyPickerSelector).not($(this));

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
        $currencyNote.show();
      }
      else {
        $currencyNote.hide();
      }
    }
  },
  onMoneySpanAdded: function() {
    Currency.convertAll(shopCurrency, Currency.currentCurrency);
    currencyPicker.setCurrencyText();
  },
  init: function() {
    if (showMultipleCurrencies !== true) {
      return false;
    }

    currencyPicker.loadCurrency();

    $(document).on('change', currencyPickerSelector, currencyPicker.onCurrencyChanged);
  }
};

currencyPicker.init();
