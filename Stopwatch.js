/*
The stopwatch counts to maximum 60 mins
*/

function Stopwatch(){

var mins = 0;
var secs = 0;
var msecs = 0;

var self = this;

var running = false;

function padZeros(value){

var temp = value.toString();
return (temp.length == 1 ?'0':'')+temp;

}


function updateTime(){

	msecs = msecs < 99 ? ++msecs : 0;
	secs = msecs === 99 ? (secs < 59 ? ++secs : 0) : secs;
	mins = msecs === 99 && secs ===  0 ? (mins < 59 ? ++mins : 0) : mins;

	(self.onTimeUpdated || function(){}).apply(self);


	if(running)
		setTimeout(updateTime, 10);
}

self.start = function(){
	running = true;
	updateTime();

};

self.stop = function(){
	running = false;
};

self.reset = function(){
	mins = 0;
	secs = 0;
	msecs = 0;
	(self.onTimeUpdated || function(){}).apply(self);
}

self.getCurrentTime = function(){
	return {
		mins : padZeros(mins),
		secs : padZeros(secs),
		msecs : padZeros(msecs)
	};
}

self.onTimeUpdated = null;


}