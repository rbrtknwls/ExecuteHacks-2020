/// IMPORTS AND PRE REQS
var express = require('express');
var AWS = require('aws-sdk')
var path = require('path');
var fs = require('fs');
var atob = require('atob')
var im = require('imagemagick');
var Promise = require('promise');
var Chart = require('chart.js');
var tf = require('@tensorflow/tfjs');
require("@tensorflow/tfjs-node");
// CONSTANTS AND API KEYS
const PORT = process.env.PORT || 3000;


const config = {
    accessKeyId: "",
    secretAccessKey: "",
    region: "us-east-2"

};



n = tf.tensor([[[[1, 2, 3, 4],[1,2,3,4]],[[1, 2, 3, 4],[1,2,3,4]]],[[1, 2, 3, 4],[1,2,3,4]],[[1, 2, 3, 4],[1,2,3,4]]])
async function start() {
    const model = await tf.loadLayersModel('file://new/model.json');
    console.log(model.summary())
    console.log(model.predict(n))




}

start()







// Instancate OBJECTS
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);


app.use(express.static(__dirname + '/public'));

// PAGE BUILDING STUFF
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})
app.get('/debug', function (req, res) {
  res.sendFile(path.join(__dirname + '/pages/template.html'));
});


server.listen(PORT);
console.log("CHECKING PORT " + PORT)


io.on('connection', function(socket){


});
