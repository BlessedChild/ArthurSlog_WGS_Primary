var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('./ssl.key', 'utf8');
var certificate = fs.readFileSync('./ssl.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();
app.use(express.json());

app.get('/inti', function (req, res) {
    res.send({'res': 'ArthurSlog', 'country': 'Shenzhen', 'userId': 'building', 'video': 'https://space.bilibili.com/57386850', 'wechart': 'xiaowang_dalai'})
    console.log("GET")
})

var x = 0;
var y = 0;
var tag = 0;
var message = 0;
var scene = 0;
var temp1 = 0;
var temp2 = 0;
var temp3 = 0;
var temp4 = 0;
var temp5 = 0;
app.post('/inti', function (req, res) {
    console.log(req.body)
    if(req.body.tag == "login"){
        console.log(Date.now())
        res.send({'res': 'ArthurSlog', 'country': 'Shenzhen', 'userId': 'building', 'video': 'https://space.bilibili.com/57386850', 'wechart': 'xiaowang_dalai','tag': Date.now()})
    }else{
        temp1 = req.body.x
        temp2 = req.body.y
        temp3 = req.body.tag
        temp4 = req.body.message
        temp5 = req.body.scene
        res.send({'res': 'ArthurSlog', 'country': 'Shenzhen', 'userId': 'building', 'video': 'https://space.bilibili.com/57386850', 'wechart': 'xiaowang_dalai', 'x': x, 'y': y,'tag': tag,'message': message, "scene": scene})
        x = temp1
        y = temp2
        tag = temp3
        message = temp4
        scene = temp5
        console.log("SEND" + "x: " + x + "｜ y: " + y + "｜message: " + message)
    }
    console.log("POST")
})

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(80);
httpsServer.listen(443);
