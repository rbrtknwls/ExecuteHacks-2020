let socket = io();

socket.on("connect", () => {
	document.getElementById("btn-capture").addEventListener("click", function(e) {
		e.preventDefault();
		let uri = document.getElementById("image-uri").value;
		socket.emit("sendImageURI", uri);

		// convertURIToImageData(uri).then(function(imageData) {
		// 	// Here you can use imageData
		// 	console.log(imageData);
		// 	socket.emit("sendImageURI", imageData);
		// });
	});
});

socket.on("newImageURI", function(imageData) {
	//console.log(imageData);
});

function convertURIToImageData(URI) {
	return new Promise(function(resolve, reject) {
		if (URI == null) return reject();
		var canvas = document.createElement("canvas"),
			context = canvas.getContext("2d"),
			image = new Image();
		image.addEventListener(
			"load",
			function() {
				canvas.width = image.width;
				canvas.height = image.height;
				context.drawImage(image, 0, 0, canvas.width, canvas.height);
				resolve(context.getImageData(0, 0, canvas.width, canvas.height));
			},
			false
		);
		image.src = URI;
	});
}
