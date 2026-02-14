const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Push2Prod is LIVE, , and hi i am Push2Prod author Keshav :) and i welcome you to Push2Prod and this is a demo test well well well. and my co founder is Aditya Singh.");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
