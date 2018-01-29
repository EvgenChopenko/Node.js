let http = require("http");
let url = require("url");

process.on('message', function(m) { console. log ( 'Child got message: ', m);});


console.log("runnig to child");

http.createServer((req,res)=>{

    var _get = url.parse(req.url, true).query;

console.log(_get);
process.send(_get) ;
}).listen(8080);