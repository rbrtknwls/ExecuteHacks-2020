let socket = io();

socket.on("connect", () => {
	let uri = "uristring";
	socket.emit("sendImageURI", uri);
});

socket.on("newImageURI", function(uri) {
	console.log(uri);
});
