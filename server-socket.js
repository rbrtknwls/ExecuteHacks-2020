var atob = require("atob");
var tf = require("@tensorflow/tfjs");

exports.init = (io, socket) => {
	console.log("socket connected!");

	socket.on("sendImageURI", function(tensor) {
		console.log(tensor);
	});
};
