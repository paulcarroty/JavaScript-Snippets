function* IdGenerator() {
  let id = 0;
  while (true) {
    yield ++id;
  }
}

const iterator = IdGenerator();

const ninja1 = { id: iterator.next().value };
const ninja2 = { id: iterator.next().value };
const ninja3 = { id: iterator.next().value };

console.log(ninja1, ninja2, ninja3);
// { id: 1 } { id: 2 } { id: 3 }
