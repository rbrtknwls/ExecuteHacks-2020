exports.init = (io, socket) => {
	console.log("socket connected!");

	socket.on("sendImageURI", function(imageData) {
		//console.log(imageData) dont do this unless u wanna break ur terminal
		console.log("imageData received!");

		//io.to(socket.id).emit("newImageURI", imageData);
	});
};
