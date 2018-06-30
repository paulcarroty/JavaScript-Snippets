
const person = {
  name: "Alberto",
  last: "Montalesi",
  links:{
    social: {
      facebook: "https://www.facebook.com/alberto.montalesi",
    },
    website: "http://albertomontalesi.github.io/"
  }
}

const { facebook } = person.links.social;

We are not limited to name our variable the same as the property of the object, we can also rename it like this:

const { facebook:fb } = person.links.social;
// we rename the variable as *fb*




const person = ["Alberto", "Montalesi", "pizza", "ice cream", "cheese cake"];
// we use the **rest operator** to grab all the remaining values
const [name,surname,...food] = person ;
console.log(food);
// Array [ "pizza", "ice cream", "cheese cake" ]


// src - https://github.com/AlbertoMontalesi/The-complete-guide-to-modern-JavaScript-from-es2015-to-es2018/blob/master/ebook/06_destructuring.md
