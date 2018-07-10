	let startBtn = document.getElementById("start");
	let stopBtn = document.getElementById('stop');
	let resetBtn = document.getElementById('reset');
	let minSet = document.getElementById('minSet');
	let secSet = document.getElementById('secSet');
	let minToggle = document.getElementById("minsToggle");
	
	


	let beginTimer = function() 	{
		start = setInterval(countdown, 1000);
		startBtn.disabled = true;
		stopBtn.disabled = false;
	}

	let stopTimer = function() 	{
		window.clearInterval(start);

		startBtn.disabled = false;
		stopBtn.disabled = true;
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

		if (secSet.innerText < 10) {
			secSet.innerText = "0" + secSet.innerText;
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
