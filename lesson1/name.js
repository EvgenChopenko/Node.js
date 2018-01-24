let http =require('http');


/**Создадим скрипт в файл name.js Запустим через консоль командой
> node name.js
Убедимся что при вызове сервера через браузер localhost:8080 в консоль выводится
"HTTP works!" */
http.createServer((req,res)=>{
    console.log("Http works!");
    console.log(req.method);
    console.log(req.headers);
    console.log(req.url);
    res.write('NOT FOUND 404');
    res.end();
}).listen(8080);

/**
 * Вывести на отладку переменные request, response. 
*/