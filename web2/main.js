var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
// video.playbackRate = .8;

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause Video";
  } else {
    video.pause();
    btn.innerHTML = "Play Video";
  }
}

 $(function changevid(){
    $('#myBtn2').click(function() {
      var src = "assets/spacewalk.mp4";
       $("#myVideo").attr("src", "assets/this.mp4");;
    });
});

//  $(function changevid2(){
//     $('#myBtn2').click(function() {
//     	if(video.src="assets/spacewalk.mp4"){
//       var src = "assets/spacewalk.mp4";
//        $("#myVideo").attr("src", "assets/brain.mp4");;
//    		}
//    		else{
//        $("#myVideo").attr("src", "assets/this.mp4");;
//    		}

   		
//     });
// });