/// IMPORTS AND PRE REQS
var express = require("express");
var AWS = require("aws-sdk");
var path = require("path");
var fs = require("fs");
var atob = require("atob");
var im = require("imagemagick");
var Promise = require("promise");
var Chart = require("chart.js");
const serverSocket = require("./server-socket");

// CONSTANTS AND API KEYS
const PORT = process.env.PORT || 3000;

const config = {
	accessKeyId: "",
	secretAccessKey: "",
	region: "us-east-2"
};

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

app.get("/home", function(req, res) {
	res.sendFile(path.join(__dirname + "/pages/home.html"));
});

app.get("/camera", function(req, res) {
	res.sendFile(path.join(__dirname + "/pages/camera.html"));
});

server.listen(PORT);
console.log("CHECKING PORT " + PORT);

io.on("connection", (socket) => {
	serverSocket.init(io, socket);
});
