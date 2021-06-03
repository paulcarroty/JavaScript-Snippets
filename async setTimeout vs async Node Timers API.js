// Browser 
const timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  await timeout(2000);
  console.log("timeout finished!");
})();


// Node.js Timers
const fs = require("fs");
const { setTimeout } = require("timers/promises");

(async () => {
  let file1 = "file 1 content";
  let file2 = "file 2 content";
  let file3 = "file 3 content";

  fs.writeFileSync("/tmp/1.txt", file1, { encoding: "utf8" });
  const res = await setTimeout(1000, "delay after writing 1st file");
  console.log(res);

  fs.writeFileSync("/tmp/2.txt", file2, { encoding: "utf8" });
  const res2 = await setTimeout(2000, "delay after writing 2nd file");
  console.log(res2);

  fs.writeFileSync("/tmp/3.txt", file2, { encoding: "utf8" });
  const res3 = await setTimeout(6000, "delay after writing 3rd file");
  console.log(res3);
})();
