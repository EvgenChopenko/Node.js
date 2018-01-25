/**Задача 2.
Добавим в скрипт возврат ответа   */

const http = require('http');
const NotFound = 'lesson1/HomeWorkTwoLesson.html';
const fs = require('fs');
const header = 'lesson1/header.html';
const body = 'lesson1/body.html';
const footer = 'lesson1/footer.html';

http.createServer(function (request, response) {
    let fileName = '/';
if (request.url ==='/'){
fileName = 'lesson1/index.html';
}
else 
{
    fileName = request.url; 
}
    
    console.log("HTTP works!");
    fs.readFile(fileName, 'utf8', function(err, data) {
        
        if (err) {
            console.log('Could not find or open file for reading\n');
            fs.readFile(NotFound,'utf8',(err,data)=>{
                if(err){
                    console.error(err.message);
                    response.writeHead(404);
                    response.write('i am bad admin i am cry');
                    response.end();
                }else{
                    response.writeHead(404);
                    response.end(data);
                    console.log ('отправлена страница ошибки');
                }
                
                
            })
           
           
        
        
        }
            
            
            
            else {
                
                let text ='';
                fs.readFile(header ,'utf8',(err,data)=>{
                   
                       text=data;
                       fs.readFile(body,'utf8',(err,data)=>{
                   
                        text=data;
                        fs.readFile(footer ,'utf8',(err,data)=>{
                   
                            text=data;
                        
                  
                  
                 
                 
                 
             })
                    
              
              
             
             
             
         })
                   
             
             
            
            
            
        })
        
        response.writeHead(200);
        response.end(text);
                
                }   
    })
        }). listen (8080);