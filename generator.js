const fruitList = ['Orange','Apple', 'Mango'];

// create our looping generator
function* loop(arr) {
  for (const fruit of fruitList) {
    yield `I like to eat ${fruit}`;
  }
}


const fruitGenerator = loop(fruitList);
fruitGenerator.next();
// Object { value: "I like to eat Orange", done: false }
fruitGenerator.next();
// Object { value: "I like to eat Apple", done: false }
fruitGenerator.next().value;
// "I like to eat Mango"



// .return() for finishing the genarator
fruitGenerator.return();
// Object { value: undefined, done: true }


// catching errors
fruitGenerator.throw("ooops")
// Error: ooops
// Object { value: undefined, done: true }
