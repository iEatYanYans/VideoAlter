/**
 * 
 */


function hasUserMedia() { 
   navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia 
      || navigator.mozGetUserMedia || navigator.msGetUserMedia; 
   return !!navigator.getUserMedia; 
}
 
if (hasUserMedia()) { 
   navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia
      || navigator.mozGetUserMedia || navigator.msGetUserMedia;
		
   //get both video and audio streams from user's camera 
   navigator.getUserMedia({ video: true, audio: true }, function (stream) { 
      var video = document.querySelector('video'); 
		
      //insert stream into the video tag 
      video.src = window.URL.createObjectURL(stream); 
   }, function (err) {}); 
	
}else {
   alert("Error. WebRTC is not supported!"); 
}

window.onload = function(){
	var mirrorButton= document.querySelector('button#mirror');
	var brightButton= document.querySelector('button#brightness');
	var video = window.video = document.querySelector('video');
	
	var mirror = 0;
	var brightness = 0;
	
	mirrorButton.onclick = function(){
		if (brightness == 1){
			$(video).addClass(brightButton.id);
		}
		if (mirror == 1){
			$(video).removeClass(mirrorButton.id);
			mirror = 0;
		}
		else{
			$(video).addClass(mirrorButton.id);
			mirror = 1;
		}
			
	}

	brightButton.onclick = function(){
		if(mirror == 1){
			$(video).addClass(mirrorButton.id);
		}
		if(brightness == 1){
			$(video).removeClass(brightButton.id);
			brightness = 0;
		}else{
			$(video).addClass(brightButton.id);
			brightness = 1;
		}
		
	}
	
}