/**Задача 1.
Создайте два файла с шаблонной разметкой en.html и ru.html.
a) Необходимо создать http сервер ( скрипт server.js ) который отдает страницу en.html в
случае старта сервера с дополнительным параметром en
>node server.js en
и страницу ru.html в случае вызова
>node server.js ru */

let http = require("http");
let fs = require("fs");
const port = 8081;
let lang ='';
const num_atr =2;
let fileName = "index.html"
process.argv.forEach((val,index,array)=>{
   
   if (num_atr ===index){
    lang = val; 
   }

});
console.log(lang);
if (lang === "ru"){
 fileName = "ru.html"
} else{
    fileName = "en.html"
}

http.createServer((req,res)=>{

      fs.readFile(fileName, function(err, data) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
        
      });
  
    res.end(data);
    });
}





).listen(port);
