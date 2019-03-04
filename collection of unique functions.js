let store = {
  nextId: 1,
  cache: {},
  add: function(fn) {
    if (!fn.id) {
      fn.id = this.nextId++;
      this.cache[fn.id] = fn;
      return true;
    }
  }
};
function ninja() {}

let res = store.add(ninja)
  ? "Function was safely added."
  : "But it was only added once.";
console.log(res);
// Function was safely added.

console.log(store);
// { nextId: 2,
//     cache: { '1': { [Function: ninja] id: 1 } },
//     add: [Function: add] }
