

const fetch = require('node-fetch');
let url = 'https://api.github.com';

// 1. Async function

let asyncFetch = async(u) => {
   let data = await fetch(url);
   let json = await data.json();
   return json;
}

asyncFetch(url)
   .then(jsn => console.log(jsn))
   .catch(reason => console.log(reason.message));

// 2. Promises

fetch(url)
    .then(res => res.json())
    .then(json => console.log(json));


// 3. AJAX

const http = new XMLHttpRequest();
http.open("GET", url);
http.send();
http.onload = () => console.log(http.responseText);
