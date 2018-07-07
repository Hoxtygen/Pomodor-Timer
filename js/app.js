	let startBtn = document.getElementById("start");
	let stopBtn = document.getElementById('stop');
	let resetBtn = document.getElementById('reset');
	let minSet = document.getElementById('minSet');
	let secSet = document.getElementById('secSet');
	let minToggle = document.getElementById("minsToggle");
	


	let beginTimer = function() 	{
		start = setInterval(countdown, 1000);
	}

	let stopTimer = function() 	{
		window.clearInterval(start);
	}

	let resetTimer = function () {
		window.clearInterval(start);
		secSet.innerText = 00;
		minSet.innerText = minToggle.innerText;
	}

	let countdown = function() 		{
		console.log(countdown);
		if (secSet.innerText <= 0) {
			secSet.innerText = 60;
			minSet.innerText-- 
		}
		secSet.innerText--
		if(secSet.innerText <= 0 && minSet <=0)	{
			window.clearInterval(start);
		}
	}

	let increaseTimer = function()	{
		minToggle.innerText++;
		minSet.innerText = minToggle.innerText;
	}

	let decreaseTimer = function () {
		minToggle.innerText--;
		if (minToggle.innerText <= 1) {
			minToggle.innerText = 1;
			minSet.innerText = minToggle.innerText;
		}
		minSet.innerText = minToggle.innerText;
	}
