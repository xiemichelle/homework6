var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("Starting");
	console.log(video.volume);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol = document.querySelector("#volume").innerHTML = video.volume+ 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slow Down");
	video.playbackRate = video.playbackRate*.9
	console.log(video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed Up");
	video.playbackRate = video.playbackRate/.9
	console.log(video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function(){
	if(video.CurrentTime < video.duration - 5){
		video.CurrentTime += 5
	console.log("Skip Ahead"+ video.CurrentTime)
	}
	else{video.CurrentTime = 0
	console.log("Start from Beginning")}
	video.play()
});
document.querySelector("#volumeSlider").addEventListener("change", function(){
	console.log(this);
	console.log(this.value); 
	document.querySelector("#volume").innerHTML = this.value + "%"
	video.volume = this.value/100
});

document.querySelector("#mute").addEventListener("click", function(){
	console.log("Mute");
	video.muted = true; 


});

