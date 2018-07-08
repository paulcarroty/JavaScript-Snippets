const fetch = require('node-fetch');

let multifetch = async() => {
  let urls = ["https://flathub.org/stats/52", "https://flathub.org/stats/2018/06/03.json", "https://flathub.org/stats/52", "https://flathub.org/stats/2018/06/03.json"]
    
// urls.map( e => fetch(e)
//    .then(response => response.json()) // parses response to JSON
//    .catch(error => console.error(`Fetch Error =\n`, error)))
    
  for(let e of urls){
   fetch(e)
    .then(response => response.ok ? response : response.status) // parses response to JSON
    //.then(res => console.log(res))
    .then(res => console.log(res))
    .catch(error => console.error(`Fetch Error =\n`, error))
   }
 }
multifetch();

// async/await version
let data = await fetch(url)
                        .then(res => res.ok ? res : res.status)
                        .catch(error => console.error(`Fetch Error =\n`, error));

// if response is OK - response will be returned in json format
// if 404 or any non-network issue error - the response code will be returned
// if any network issue - promise will be rejected and catched to (error => console.error(`Fetch Error =\n`, error)))
