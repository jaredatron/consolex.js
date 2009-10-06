var __CONSOLE_METHOD_NAMES = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml", "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];
new Test.Unit.Runner({
  
  test_that_window_console_exists: function(){
    this.assert(window.console);
  },
  
  test_that_window_console_methods_exist: function(){
    __CONSOLE_METHOD_NAMES.each(function(name){
      this.assert(typeof window.console[name] === 'function');
    }, this);
  },
  
  test_that_no_console_methods_raise_errors: function(){
    __CONSOLE_METHOD_NAMES.each(function(name){
      this.assertNothingRaised(function(){
        window.console[name]();
      });
    }, this);
  }
  
});
