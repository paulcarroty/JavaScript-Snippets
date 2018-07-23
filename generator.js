const fruitList = ['Banana', 'Orange'];

const fruitList2 = ['Cherry', 'Mango'];

// looping generator over two arrays
function* loop() {
    for (const fruit of fruitList) {
        yield `I like to eat ${fruit} from the first list`;
    }

    for (const fruit of fruitList2) {
        yield `I don't like to eat ${fruit} from the second list`;
    }
}

let generator = loop();
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())

// { value: 'I like to eat Banana from the first list',
  done: false }
// { value: 'I like to eat Orange from the first list',
  done: false }
// { value: 'I don\'t like to eat Cherry from the second list',
  done: false }
// { value: 'I don\'t like to eat Mango from the second list',
  done: false }


// .return() method will finish the generator
generator.return();
// Object { value: undefined, done: true }


// handle errors
fruitGenerator.throw("ooops")
// Error: ooops
// Object { value: undefined, done: true }
