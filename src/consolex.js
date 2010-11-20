/** Console X
  * http://github.com/deadlyicon/consolex.js
  *
  * By Jared Grippe <jared@jaredgrippe.com>
  *
  * Copyright (c) 2009 Jared Grippe
  * Licensed under the MIT license.
  *
  * consolex avoids ever having to see javascript bugs in browsers that do not implement the entire
  * firebug console suit
  *
  * it also makes the console functions in IE real functions to enable console.log.call(...) usage
  *
  */
(function(window) {
  window.console || (window.console = {});

  var names = "log debug info warn error assert dir dirxml group groupEnd time timeEnd count trace profile profileEnd".split(/\s+/);

  function emptyFunction(){}

  for (var i = 0; i < names.length; ++i){
    console[names[i]] || (console[names[i]] = emptyFunction);
    typeof console[names[i]] !== 'function' && console[names[i]] = (function(method) {
      return function(){ return Function.prototype.apply.apply(method, [console,arguments]); };
    })(console[names[i]]);
  }

})(this);