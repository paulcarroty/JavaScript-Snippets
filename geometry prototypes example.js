let figure = function(name, side) {
   this.side = side;
   this.name = name;
   this.desc = function() {
      return `The ${this.name} with side ${this.side}`
   };
}

let triangle = function(name, side) {
   this.name = name;
   this.side = side;
   this.perimeter = 3 * side;
   this.surface = Math.sqrt(3) * (side ** 2) / 4;
}
triangle.prototype = new figure();
let tri = new triangle('triangle 1', 31.589584);
console.log(tri);
console.log(tri.desc());


let quadrilateral = function(name, side1, side2) {
   this.name = name;
   this.side1 = side1;
   this.side2 = side2;
   this.perimeter = 2 * (side1 + side2);
   this.surface = side1 * side2;
}
quadrilateral.prototype = new figure();
let quad1 = new quadrilateral('quad1', 43.4545, 91.434335);
console.log(quad1);
console.log(quad1.desc());



let square = function(name, side) {
   this.name = name;
   this.side = side;
   this.perimeter = 4 * side;
   this.surface = side ** 2;
}
square.prototype = new figure();
let sq1 = new square('square 1', 83.44352);
console.log(sq1);
console.log(sq1.desc());
