let express = require('express');
let fs = require('fs');
let bodyParser = require('body-parser');
let server = require('http');
let app = express();
server.createServer(app);
let modelPath = __dirname + "/model";
let con = require('./config')
require('./route')(app);
fs.readdirSync(modelPath).forEach(function(file){
    if(~file.indexOf('.js'))
        require(modelPath+'/'+file)
})

app.listen(3000,function(){
    console.log("App start on 3000")
})