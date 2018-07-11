class Id {
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  greet(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old` );
  } // no commas in between methods
  bye(){
    console.log("goodbye friend");
  }
 static definition(){
  console.log("I'm a human");
}
    
    set nicknames(value){
    this.nickname = value;
  }
    get nicknames(){
    return `Your nickname is ${this.nickname}`;
  }
}

// extension of Id class
class DevOps extends Id {
  constructor(name,age,department){
    super(name, age);
    this.department = department;
  }
}

let Jay = new Id('Jay', 25);
console.log(Jay.greet());
// Hello, my name is Jay and I am 25 years old

console.log(Jay.definition());
// TypeError: Jay.definition is not a function - static methods can be accessed only from class itself

console.log(Id.definition() );
// I'm a human

Jay.nicknames = 'JJ';
console.log(Jay.nicknames);
// Your nickname is JJ


// use the extended class
let Diana = new DevOps('Diana', 28, 'City Development');
console.log(Diana);
// DevOps { name: 'Diana', age: 28, department: 'City Development' }


