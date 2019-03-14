console.log("m");

var $ = jQuery;

$(function() {
	// Your interactions go here

	$(".title").on("click", function() {
		var randomNumber = Math.floor(Math.random() * 5);;
	    $(".box").eq(randomNumber).css("background", "blue");
	}); 
}); 
