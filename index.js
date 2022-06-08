function receivesAFunction(spy) {
  return spy();
}
// function returnsANamedFunction() {
//   var fn = returnsANamedFunction(fn);

//   return fn();
// }

function returnsAnAnonymousFunction() {
   var fn
   fn = returnsAnAnonymousFunction()
   return fn()
}

function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function myFunct() {
    console.log("returns a named function");
  };
}

function returnsAnAnonymousFunction() {
  return () => console.log("Returns an anonymous function");
}