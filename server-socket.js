var atob = require("atob");
var tf = require("@tensorflow/tfjs");

exports.init = (io, socket) => {
	console.log("socket connected!");

	socket.on("sendImageURI", function(uri) {
		const b = atob(uri);
		let byteNumbers = new Array(b.length);
		for (let i = 0; i < b.length; i++) {
			byteNumbers[i] = b.charCodeAt(i);
		}
		let tensor = tf.tensor(byteNumbers);
		console.log(tensor);

		//io.to(socket.id).emit("newImageURI", imageData);
	});
};
