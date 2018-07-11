// basic idea - every symbol is unique

Symbol('You') === Symbol('You')
//false

const office = {
  [Symbol("Greg")] : "CEO",
  [Symbol("Alex")] : "CTO",
  [Symbol("Elon")] : "CIO",
  [Symbol("Alex")] : "CIO",
}

// lets get the properties
let staff = Object.getOwnPropertySymbols(office);
console.log(staff);
// [ Symbol(Greg), Symbol(Alex), Symbol(Elon), Symbol(Alex) ]

// get their values
const positions = staff.map(symbol => office[symbol]);
console.log(positions);
// [ 'CEO', 'CTO', 'CIO', 'CIO' ]

// symbol also can be easily convert to string
> Symbol('Yahoo').toString()
// 'Symbol(Yahoo)'
