/// IMPORTS AND PRE REQS

var express = require("express");
var AWS = require("aws-sdk");
var path = require("path");
var fs = require("fs");
var atob = require("atob");
var im = require("imagemagick");
var Promise = require("promise");
var Chart = require("chart.js");
var tf = require("@tensorflow/tfjs");
const serverSocket = require("./server-socket");
require("@tensorflow/tfjs-node");
tfnode = require('@tensorflow/tfjs-node')
const PORT = process.env.PORT || 3000;

const config = {
	accessKeyId: "",
	secretAccessKey: "",
	region: "us-east-2"
};

function _base64ToArrayBuffer(base64) {
	var binary_string = atob(base64);
	var len = binary_string.length;
	var bytes = new Uint8Array(len);
	for (var i = 0; i < len; i++) {
			bytes[i] = binary_string.charCodeAt(i);
	}
	return bytes.buffer;
}


async function getdata(tensor) {
	 const model = await tf.loadLayersModel("file://new/model.json");
	 console.log(model.summary())
		var out =  model.predict(tensor)
		console.log(await out)
}
async function translate(arbuff) {
	 	console.log(await arbuff)
		const t = await tfnode.node.decodeBmp(arbuff)
		console.log(t)
}
// Instancate OBJECTS
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);

app.use(express.static(__dirname + "/public"));

// PAGE BUILDING STUFF
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/debug", function(req, res) {
	res.sendFile(path.join(__dirname + "/pages/template.html"));
});

app.get("/capture", function(req, res) {
	res.sendFile(path.join(__dirname + "/pages/capture.html"));
});

app.get("/camera", function(req, res) {
	res.sendFile(path.join(__dirname + "/pages/camera.html"));
});

server.listen(PORT);
console.log("CHECKING PORT " + PORT);

io.on("connection", (socket) => {

	socket.on("sendImageURI", function(t) {

	});

});
