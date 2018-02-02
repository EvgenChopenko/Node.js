var express = require("express");
var bodyParser = require("body-parser");
 
var app = express();
// создаем парсер для данных в формате json
var jsonParser = bodyParser.json();
 
app.use(express.static(__dirname + "/public"));
 
app.post("/user", jsonParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.json(`${request.body.userName} - ${request.body.userAge}`);
});
 
// app.get("/", function(request, response){
     
//     response.send("<h1>Главная страница</h1>");
// });


app.post("/ws", jsonParser, function (request, response) {
    console.log((new Date).getHours());
    let src = '';
    if( ((new Date).getHours()>=6) && ((new Date).getHours()<18)){
src = 'sun.png';
    }else
    {
        src = 'resize.png';
    }
    response.json({wether:'26.6',info:'Днем будет дождь',background:'green',src:src});
   
});
 
app.listen(8080);