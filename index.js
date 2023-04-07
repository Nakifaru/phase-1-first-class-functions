function receivesAFunction(sth) {
    return sth();
}
receivesAFunction(function() { return 4 + 5; });

function returnsANamedFunction() {
   function namedFunction() {
     console.log("Hello World!");
   }
   return namedFunction;
 }

function returnsAnAnonymousFunction() {
   return function() {
   console.log("Hello World!");
   };
}
  