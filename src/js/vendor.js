import '@babel/polyfill';
import svg4everybody from 'svg4everybody';
import $ from 'jquery';

svg4everybody();

window.$ = $;
window.jQuery = $;

require('ninelines-ua-parser');
require('./vendor/jquery.magnific-popup.min');
// require('./vendor/jquery.inputmask.min');
//require('./vendor/jquery.maskedinput.min');
require('../js/vendor/parallax.min');