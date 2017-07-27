// assert - print the output without interruption
var foo = undefined;
console.assert(foo, "Foo wasn't set!");
console.log(foo.toUpperCase());





// console.count - no need self-defined counters
for (var i = 0; i < 100; i++) {
 var num = Math.random() * 100;

 if (num > 50) {
    console.count('Number is greather than 50!');
} else
    console.count('Number is less than 50!');
   }




// grouping
for (var i = 0; i < 100; i++) {
   var num = Math.random() * 100;
   console.groupCollapsed('Picking a random number:');
      console.log('Is the number greater than 10?', num > 10);
      console.log('Is the number greater than 25?', num > 25);
      console.log('Is the number greater than 70?', num > 70);
   console.groupEnd();

}




// substitution
console.log('Hello, my name is %s, age - %d, color - %s', 'John', '34', 'white');
console.log('This is my %coutput!', "color: blue, font-size: 14px");

