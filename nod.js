
const http = require('http');

const hostname = '127.0.0.1';

const port = 1337;

http.createServer((req,res)=>{

res.writeHead(200,{'Content-Type':'text/plan'});
res.end("hello world");

}).listen(port,hostname,()=>{
console.log(`${hostname},${port}`);
});