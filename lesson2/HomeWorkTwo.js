/**b) Переписать скрипт таким образом чтобы локаль (ru или en) бралась из переменной среды
окружения LANG. В случае ее отсутствия ее нужно установить из командной строки
Для Windows
set LANG=ru_RU
Для Linux
export LANG=ru_RU
 */


let http = require("http");
let fs = require("fs");
const port = 8081;
let lang =process.env.LANG;
const num_atr =2;
let fileName = "index.html";

if (lang ===undefined){
    process.env.LANG ="ru_RU";
    lang = process.env.LANG ;
}

if (lang.search( /US/i )>0){
 fileName = "en.html"
} else{
    fileName = "ru.html"
}

http.createServer((req,res)=>{

    console.log(req);
      fs.readFile(fileName, function(err, data) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
        
      });
  
    res.end(data);
    });
}





).listen(port);