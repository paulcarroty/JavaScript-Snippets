function collector() {
  var result = 0;
  for (var n = 0; n < arguments.length; n++) {
    result += arguments[n];
  }
  this.result = result;
}
let obj1 = {};
var obj2 = {};

collector.call(obj1, 1, 2, 3, 4, 5);
collector.apply(obj2, [6, 7, 8, 9, 10]);

console.log(obj1, obj2);

// { result: 15 } { result: 40 }
