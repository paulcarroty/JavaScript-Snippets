let obj1 = {k1: 134, k2: 19};
let obj2 = {k1: 14, k2: 219, k3: 7};


let mergeObjs= (o1, o2) => {
    let uniqueKeys = [...  new Set( [...Object.keys(o1), ...Object.keys(o2) ] )];
    let res = uniqueKeys.reduce( (a,c) => ({...a, [c] : ( (o1[c]||0) + (o2[c]||0) ) }),  {} );
    return res;
}

console.log(mergeObjs(obj1, obj2));
// { k1: 148, k2: 238, k3: 7 }
