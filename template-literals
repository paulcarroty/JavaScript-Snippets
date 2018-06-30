// src - https://github.com/AlbertoMontalesi/The-complete-guide-to-modern-JavaScript-from-es2015-to-es2018/blob/master/ebook/04_template_literals.md

const groceries = {
  meat: "pork chop",
  veggie: "salad",
  fruit: "apple",
  others: ['mushrooms', 'instant noodles', 'instant soup'],
}

// this function will map each individual value of our groceries
function groceryList(others) {
  return `
    <p> 
      ${others.map( other => ` <span> ${other}</span>`).join(' ')}
    </p>
  `;
}

// display all our groceries in a p tag, the last one will include all the one from the array **others**
const markup = `
  <div>
    <p> ${groceries.meat} </p>
    <p> ${groceries.veggie} </p>
    <p> ${groceries.fruit} </p>
    <p>${groceryList(groceries.others)} </p>
  <div>
`





let person = "Alberto";
let age = 25;

function myTag(strings,personName,personAge){
 let str = strings[1];
 let ageStr;

 personAge > 50 ? ageStr = "grandpa" : ageStr = "youngster";

 return personName + str + ageStr;
}

let sentence = myTag`${person} is a ${age}`;
console.log(sentence);
// Alberto is a youngster
