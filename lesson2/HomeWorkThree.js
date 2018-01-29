/**Запустите в качестве дочернего процесса http сервер door.js который после получения
данных через url браузера передает данные родительскому процессу и заканчивает свою
работу.
Строка передачи данных через URL:
localhost:8080?id=1&code='delete from user '

{ id: '1', code: '\'delete from user \'' }

Разбор параметров.
var _get = url.parse(request.url, true).query; */

var cp = require('child_process');
var child = cp.fork(__dirname +'/door.js');



child.on ( 'message',  function (data) {
    console.log ( 'Main got message: ', data.code);
   
    if (data.id === '1'&& data.code === '\'delete from user \''){
        console.log("finish");
         child.kill(); 
    }
    });

    console.log("runnin main");

    


