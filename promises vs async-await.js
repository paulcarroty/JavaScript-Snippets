// simple exmaple with promise
var request = require('request-promise');

var options = {  
    url: 'https://api.github.com/repos/scottwrobinson/camo',
    headers: {
        'User-Agent': 'YOUR-GITHUB-USERNAME'
    }
};

request.get(options).then(function(body) {  
    var json = JSON.parse(body);
    console.log('Camo has', json.stargazers_count, 'stars!');
});
// $ node index.js
// Camo has 1,000,000 stars!  


// extended example with promise - print the latest issue in many projects

"use strict";
var request = require('request-promise');
var headers = {  
    'User-Agent': 'YOUR-GITHUB-USERNAME'
};

var repos = [  
    'scottwrobinson/camo',
    'facebook/react',
    'scottwrobinson/twentyjs',
    'moment/moment',
    'nodejs/node',
    'lodash/lodash'
];

var issueTitles = [];
var reqs = Promise.resolve();

repos.forEach(function(r) {  
    var options = { url: 'https://api.github.com/repos/' + r, headers: headers };

    reqs = reqs.then(function() {
        return request.get(options);
    }).then(function(body) {
        var json = JSON.parse(body)
        var p = Promise.resolve();

        // Only make request if it has open issues
        if (json.has_issues) {
            var issuesOptions = { url: 'https://api.github.com/repos/' + r + '/issues', headers: headers };
            p = request.get(issuesOptions).then(function(ibody) {
                var issuesJson = JSON.parse(ibody);
                if (issuesJson[0]) {
                    issueTitles.push(issuesJson[0].title);
                }
            });
        }

        return p;
    });
});

reqs.then(function() {  
    console.log('Issue titles:');
    issueTitles.forEach(function(t) {
        console.log(t);
    });
});
// $ node index.js
// Issue titles:  
// feature request: bulk create/save support  
// Made renderIntoDocument tests asynchronous.  
// moment issue template  
// test: robust handling of env for npm-test-install 


// PROMISES
var request = require('request-promise');

request.get('https://api.github.com/repos/scottwrobinson/camo').then(function(body) {  
    console.log('Body:', body);
});

// ASYNC&AWAIT
var request = require('request-promise');

async function main() {  
    var body = await request.get('https://api.github.com/repos/scottwrobinson/camo');
    console.log('Body:', body);
}
main();  



// simple async/await example


async function getCamoJson() {  
    var options = {
        url: 'https://api.github.com/repos/scottwrobinson/camo',
        headers: {
            'User-Agent': 'YOUR-GITHUB-USERNAME'
        }
    };
    return await request.get(options);
}

var body = await getCamoJson(); 



// complex async/await example
"use strict";

var request = require('request-promise');

var headers = {  
    'User-Agent': 'scottwrobinson'
};

var repos = [  
    'scottwrobinson/camo',
    'facebook/react',
    'scottwrobinson/twentyjs',
    'moment/moment',
    'nodejs/node',
    'lodash/lodash'
];

var issueTitles = [];

async function main() {  
    for (let i = 0; i < repos.length; i++) {
        let options = { url: 'https://api.github.com/repos/' + repos[i], headers: headers };
        let body = await request.get(options);
        let json = JSON.parse(body);

        if (json.has_issues) {
            let issuesOptions = { url: 'https://api.github.com/repos/' + repos[i] + '/issues', headers: headers };
            let ibody = await request.get(issuesOptions);
            let issuesJson = JSON.parse(ibody);

            if (issuesJson[0]) {
                issueTitles.push(issuesJson[0].title);
            }
        }
    }

    console.log('Issue titles:');
    issueTitles.forEach(function(t) {
        console.log(t);
    });
}

main();  



// parallell requests with map()

async function main() {  
    let reqs = repos.map(async function(r) {
        let options = { url: 'https://api.github.com/repos/' + r, headers: headers };
        let body = await request.get(options);
        let json = JSON.parse(body);

        if (json.has_issues) {
            let issuesOptions = { url: 'https://api.github.com/repos/' + r + '/issues', headers: headers };
            let ibody = await request.get(issuesOptions);
            let issuesJson = JSON.parse(ibody);

            if (issuesJson[0]) {
                issueTitles.push(issuesJson[0].title);
            }
        }
    });

    await Promise.all(reqs);
}

main();  


// catching errors

// Promises
request.get('https://api.github.com/repos/scottwrobinson/camo').then(function(body) {  
    console.log(body);
}).catch(function(err) {
    console.log('Got an error:', err.message);
});

// Async/await
try {  
    var body = await request.get('https://api.github.com/repos/scottwrobinson/camo');
    console.log(body);
} catch(err) {
    console.log('Got an error:', err.message)
}
