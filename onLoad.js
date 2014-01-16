(function(){

	var sw = new Stopwatch();
	var isStarted = false;

	var btnStartStop = document.getElementById('startStop');
	var btnReset = document.getElementById('reset');
	
	var mins = document.getElementById('mins');
	var secs = document.getElementById('secs');
	var msecs = document.getElementById('msecs');

	sw.onTimeUpdated = function(){
		var time = this.getCurrentTime();
		msecs.innerHTML = time.msecs;
		secs.innerHTML = time.secs;
		mins.innerHTML = time.mins;
	}
	
	btnStartStop.addEventListener('click',function(){
		sw[isStarted?'stop':'start']();
		this.value = isStarted?'Start':'Stop';
		isStarted = !isStarted;
	})
	
	btnReset.addEventListener('click',function(){
		sw.reset();
	});

})();