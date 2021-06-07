let obj = {name: 1, age: 2, lenght: 3};

let filteredObj = Object.fromEntries(Object.entries(obj).filter(p => /am|ag/.test(p[0])));
// { name: 1, age: 2 }

let filteredObj2 = Object.keys(obj).filter(p => /am|ag/.test(p))
                         .reduce((res,i) => (res[i]=obj[i], res), {});
// { name: 1, age: 2 }
