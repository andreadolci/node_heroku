const http = require("http");
const fs = require("fs");
require("dotenv").config();

const server = http.createServer((req, res) => {
  //res.writeHead(200, { 'Content-Type': 'application/json' });
  //res.end(JSON.stringify({ message: process.env.MESSAGE || "Default message"}));
  //res.end(JSON.stringify({ message: process.env.MESSAGE, timestamp: new Date() }));

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(
    fs
      .readFileSync("./index.html")
      .toString()
      .replace(/{{repl_title}}/gi, process.env.MESSAGE || "Default title")
      //.replace(/<!--clock-->/gi, new Date().toString())
  );
});

server.listen(process.env.PORT || 3000);

console.log("The app is listening on port " + (process.env.PORT || 3000));
