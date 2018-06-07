// partially grabbed from src: https://stackoverflow.com/a/50618281


const list = {
  "you": 100,
  "me": 75,
  "foo": 116,
  "bar": 15,
  "baz": 100,
  "faz": 116
};

let sortedByKeys = Object.keys(list).sort().reduce((obj, key) => ({ ...obj, [key]: list[key] }), {});
console.log('sortedByKeys: ', sortedByKeys);


let sortedByKeysReversed = Object.keys(list).sort( (a,b) =>{
	let A = a.toUpperCase();
	let B = b.toUpperCase();
	if(A < B) return 1;
	if(A > B) return -1;
	return 0;
	} ).reduce((obj, key) => ({ ...obj, [key]: list[key] }), {});
console.log('sortedByKeysReversed: ', sortedByKeysReversed);


let sortedBySmallest = Object.keys(list).sort((a, b) => list[a] - list[b]).reduce((obj, key) => ({ ...obj, [key]: list[key] }), {});
console.log('sortedBySmallest: ', sortedBySmallest);

let sortedByLargest = Object.keys(list).sort((a, b) => list[b] - list[a]).reduce((obj, key) => ({ ...obj, [key]: list[key] }), {});
console.log('sortedByLargest ', sortedByLargest);

let sortedByLargestAndAlphabetical = Object.keys(list).sort((a, b) => list[a] === list[b] ? a.localeCompare(b) : list[b] - list[a]).reduce((obj, key) => ({ ...obj, [key]: list[key] }), {});

console.log('sortedByLargestAndAlphabetical: ', sortedByLargestAndAlphabetical);
