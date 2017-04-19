var time = new Date();

var clock = document.getElementsByClassName("clock")[0];
var clockColor = document.getElementsByClassName("color")[0];

function hexClock() {
	var time = new Date();
	var hours = (time.getHours() % 12).toString();
	var minutes = time.getMinutes().toString();
	var seconds = time.getSeconds().toString();

	if (hours.length < 2) {
		hours = "0" + hours;
	}

	if (minutes.length < 2) {
		minutes = "0" + mintues;
	}

	if (seconds.length < 2) {
		seconds = "0" + seconds; 

	}

	var formattedTime = hours + " : " + minutes + " . " + seconds;
	var hexColorString = "#" + hours + minutes + seconds;

	console.log("time: ", formattedTime);
	console.log("hexColorString: ", hexColorString);

	clock.textContent = formattedTime;
	clockColor.textContent = hexColorString;

	document.body.style.backgroundColor = hexColorString;
}

hexClock();
setInterval(hexClock, 1000);

