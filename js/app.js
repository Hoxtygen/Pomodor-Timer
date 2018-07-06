document.addEventListener("DOMContentLoaded", function () {
	var minutes = document.getElementById("minutes").innerHTML;
	//console.log(minutes);
	var seconds = document.getElementById("seconds").innerHTML;
	//console.log(seconds);
	var tens = document.getElementById("tens").innerHTML;
	//console.log(tens);
	var appendMinutes = document.getElementById("minutes");
	var appendSeconds = document.getElementById("seconds");
	var appendTens = document.getElementById("tens");
	var start = document.getElementById("start");
	var reset = document.getElementById("reset");
	//var timer = document.getElementById("timer");
	//timer = timer.innerHTML;
	//console.log(timer);
	var interval;



	start.onclick = function () {
		clearInterval(interval);
		interval = setInterval(starTimer, 10);

	};

	reset.onclick = function () {
		clearInterval(interval);
	}

	function starTimer () {
		// body... 
		tens++;
		if (tens < 9) {
			appendTens.innerHTML = "0" + tens;
		}

		if (tens > 9) {
			appendTens = tens;
		}

		if (tens > 99) {
			seconds++;
			appendSeconds.innerHTML = "0" + seconds;
			tens = 0;
			appendTens.innerHTML = "0" + 0; 
		}

		if (seconds > 9) {
			appendSeconds.innerHTML = seconds;
		}

		if (seconds > 59) {
			minutes--;
			appendMinutes.innerHTML = "0" + minutes;
			seconds = 0;
			appendSeconds.innerHTML = "0" + 0;
		}

		if (minutes > 9) {
			appendMinutes.innerHTML = minutes;
		}
	}//startTimer ends
});


