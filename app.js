'use strict';

///// Modules 
// const names = require('./module');
// const sayHi = require("./functions");



// sayHi(`${names.jason} I'am a export!`);
// sayHi("Teressa"); 

// require("./module");

// const os = require("os");


// //info of current user
// const user = os.userInfo();
// console.log(user);

// //system uptime 
// console.log(`The system uptime is ${os.uptime() / 60} minutes`);

// // OS you're running
// const currentOS = {
//   name: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem()
// };
// console.log(currentOS);



// <------------------------>

// const path = require('path');
// console.log(path.sep);


// const { readFileSync, writeFileSync } = require("fs");

// const first = readFileSync("./subfolder/hi.txt", "utf-8");
// const second = readFileSync("./subfolder/Bye.txt", "utf-8");
// console.log(first, second);

// writeFileSync("./subfolder/tryharding.txt", `Trying things! ${second} ${first}`, { flag: "a" });

// const { readFile, writeFile } = require("fs");

// readFile("./subfolder/hi.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   const first = result;
// });

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to my APAGE");
    return;
  }
  if (req.url === "/about") {
    res.end("Here is our short story");
    return;
  }
  res.end(`<h1> Ooops! WRONG PAGE DUDE</h1>`);
});

server.listen(3001);

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("Welcome to my APAGE");

//   } else if (req.url === "/about") {
//     res.end("Here is our short story");

//   } else res.end(`<h1> Ooops! WRONG PAGE DUDE</h1>`);
// });

// server.listen(3001);
