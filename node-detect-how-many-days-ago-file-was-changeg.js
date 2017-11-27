const fs = require('fs');
const spawn = require('child_process').spawnSync;

let updateDB = async(file) => {
    await fs.stat(file, (err, stats) => {
        let days = (new Date().getTime() - stats.mtime) / (1000 * 60 * 60 * 24);
        let nodeFile = file.split('.')[0].split('-')[1] + '.js';
        //console.log(`File modified ${days} days ago`);
        if (parseFloat(days) < 6.9) {
            console.log("Let's update the database!");

            const runUpdate = spawn('nodejs', [nodeFile]);
            if (~runUpdate.stdout) { console.log(runUpdate.stdout.toString()); }
            if (~runUpdate.stderr) { console.log(runUpdate.stderr.toString()); }
        }
        else {
            console.log(`The database of ${nodeFile} still actually for this week.`)
        }
    });
}
