// assert - print the output without interruption
var foo = undefined;
console.assert(foo, "Foo wasn't set!");
console.log(foo.toUpperCase());





// console.count - life without manual defined counters
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
console.log('This is my %coutput!', "color: blue; font-size: 14px");




// timing data
console.time('create objects');

var array = [];
for (var i = 0; i < 1000000; i++) {
   array.push({index: i});
}

console.timeEnd('create objects');




// log levels
console.log('this is a log!');
console.warn('this is a warning!');
console.error('this is an error!');
console.info('this is an info!');
console.debug('this is an debug!');




// prettyprinting
function Character(name, power){
   this.name = name;
   this.power = power;
}

var buffy = new Character('buffy', "slayer");
var willow = new Character("willow", "witch");
var spike = new Character("spike", "wampire");

var chars = [buffy, willow, spike];
console.log(chars);

var charsByName = {
   buffy: buffy,
   willow: willow,
   spike: spike
};
console.log(charsByName);




