var fs = require('fs');
// var data = fs.readFileSync('index.html');

// console.log(data.toString());
// console.log('Progatram ended')

fs.readFile('index.html','utf-8',(err,data)=>{
if (err){
    return err;
}else {
    console.log(data.toString());
    console.log('Progatram ended')
}

})