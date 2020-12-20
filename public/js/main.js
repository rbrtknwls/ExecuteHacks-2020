var tab = document.getElementById("tab");
var bars = document.getElementById("bars");
var emotion = document.getElementById("emotion");
var feelingTitle = document.getElementById("feeling-title");
var state = 0;

var health = 50;
var health_state;

if (health >= 75) {
	health_state = "greenbar";
	emotion.style.backgroundImage = "url(/images/healthy.png)";
	feelingTitle.innerText = "Healthy & Safe!";
}
else if (health >= 25 && health < 75) {
	health_state = "yellowbar";
	emotion.style.backgroundImage = "url(/images/neutral.png)";
	feelingTitle.innerText = "Neutral, Be Careful!";
}
else {
	health_state = "redbar";
	emotion.style.backgroundImage = "url(/images/sick.png)";
	feelingTitle.innerText = "Stay Away! Very Sick!";
}

for (i = 0; i < 12; i++) {
	var img = document.createElement("div");
	console.log(health_state);
	if (health >= 0) {
		img.classList.add(health_state);
		health -= 8;
	}
	else {
		img.classList.add("greybar");
		health -= 8;
	}

	bars.appendChild(img);
}

document.getElementById("person1").addEventListener("click", function() {
	if (state == 0) {
		tab.style.transform = "translateY(-150px)";
		state = 1;
	}
	else {
		tab.style.transform = "translateY(150px)";
		state = 0;
	}
});
