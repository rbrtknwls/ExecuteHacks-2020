/// IMPORTS AND PRE REQS
var express = require('express');
var AWS = require('aws-sdk')
var path = require('path');
var fs = require('fs');
var atob = require('atob')
var im = require('imagemagick');
var Promise = require('promise');
var Chart = require('chart.js');

// CONSTANTS AND API KEYS
const PORT = process.env.PORT || 3000;
// Create S3 service object
const config = {
    accessKeyId: "AKIAQJA33FRRIO3CBXJA",
    secretAccessKey: "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",
    region: "ca-central-1"

};
s3 = new AWS.S3(config);
rekognition = new AWS.Rekognition(config)

var bucketParams = {
  Bucket : 'facialrecognition34234018257012374',
};

// Call S3 to obtain a list of the objects in the bucket
s3.listObjects(bucketParams, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);

    var params = {
     Image: {
      S3Object: {
       Bucket: "facialrecognition34234018257012374",
       Name: "logo.png"
      }
     }
    };

    rekognition.detectFaces(params, function(err, data) {
       if (err) console.log(err, err.stack); // an error occurred
       else     console.log(data);
     });
  }
});

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
