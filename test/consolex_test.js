test("window.console is an obejct", function() {
  equals( "object", typeof window.console, "expected typeof window.console === 'object'" );
});

$.each("log debug info warn error assert dir dirxml group groupEnd time timeEnd count trace profile profileEnd".split(/\s+/), function(i, name){

  test("window.console."+name+"() should not throw an error", function() {
    var error;
    try{
      window.console[name]();
    }catch(e){
      error = e;
    }
    equals(undefined, error, "expected window.console."+name+"() not to throw an error");
  });

});
