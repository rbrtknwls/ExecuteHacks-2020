exports.init = (io, socket) => {
	console.log("socket connected!");

	socket.on("sendImageURI", function(uri) {
		let newuri = uri.concat("a");
		io.to(socket.id).emit("newImageURI", newuri);
	});
};
