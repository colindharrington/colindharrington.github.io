console.log("m");

var $ = jQuery;

$(function() {
	// Your interactions go here

	$(".hider").on("click", function() {
	    $(".hider")("opacity", "0");
	}); 
}); 
