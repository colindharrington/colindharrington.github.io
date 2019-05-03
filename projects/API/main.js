$(function() {

	var hasInitialized = false;
	var Lz = 0;
	var La = 0;

	var doRequest = function() {
			$.get('http://api.open-notify.org/iss-now.json', function(data) {
				console.log(data);
				console.log(data.iss_position.longitude);
				console.log(data.iss_position.latitude);

				Lz = (data.iss_position.longitude);
				La = (data.iss_position.latitude);

				document.getElementById("long").innerHTML = Lz;
				document.getElementById("lat").innerHTML = La;
			});
	};

	doRequest();

	setInterval(function() {
		doRequest();
	}, 4000);



	if (typeof(Humble) == 'undefined') window.Humble = {};
	Humble.Trig = {};
	Humble.Trig.init = init;

	var unit = 50,
	    canvas, context, canvas2, context2,
	    height, width, xAxis, yAxis,
	    draw;

	/**
	 * Init function.
	 * 
	 * Initialize variables and begin the animation.
	 */
	function init() {
	    
	    canvas = document.getElementById("sineCanvas");
	    
	    canvas.width = 600;
	    canvas.height = 200;
	    
	    context = canvas.getContext("2d");
	    context.font = '18px sans-serif';
	    context.strokeStyle = 'red';
	    context.lineJoin = 'round';
	    
	    height = canvas.height;
	    width = canvas.width;
	    
	    xAxis = Math.floor(height/2);
	    yAxis = Math.floor(width/4);

	    context.save();
	    draw();
	}

	/**
	 * Draw animation function.
	 * 
	 * This function draws one frame of the animation, waits 20ms, and then calls
	 * itself again.
	 */
	draw = function () {
	    
	    // Clear the canvas
	    context.clearRect(0, 0, width, height);

	    // Draw the axes in their own path
	    context.beginPath();
	    drawAxes();
	    context.stroke();
	    
	    // Set styles for animated graphics
	    context.save();
	    context.strokeStyle = 'red';
	    context.fillStyle = '#fff';
	    context.lineWidth = 3;

	    // Draw the sine curve at time draw.t, as well as the circle.
	    context.beginPath();
	    drawSine(draw.t);
	    context.stroke();
	    
	    // Draw the arrow at time t in its own path.
	    drawArrow(draw.t);
	    
	    // Restore original styles
	    context.restore();
	    
	    // Draw the xAxis PI tick and the time
	    // context.fillText("Ï�", xAxis + 59+3*unit, 18+xAxis);
	    context.fillText("t = "+Math.floor(Math.abs(draw.seconds)), 10, 20);
	    
	    // Update the time and draw again
	    draw.seconds = draw.seconds - .011;
	    draw.t = draw.seconds*Math.PI;

	    setTimeout(draw, 100);
	};
	draw.seconds = 0;
	draw.t = 0;

	/**
	 * Function to draw axes
	 */
	function drawAxes() {
	    
	    // Draw X and Y axes
	    context.moveTo(0, xAxis);
	    context.lineTo(width, xAxis);
	    context.moveTo(yAxis, 0);
	    context.lineTo(yAxis, height);
	    
	    // Draw X axis tick at PI
	    context.moveTo(yAxis+Math.PI*unit, xAxis+5);
	    context.lineTo(yAxis+Math.PI*unit, xAxis-5);
	}

	/**
	 * Function to draw sine
	 * 
	 * The sine curve is drawn in 10px segments starting at the origin. 
	 */
	function drawSine(t) {

	    // Set the initial x and y, starting at 0,0 and translating to the origin on
	    // the canvas.
	    var x = t;
	    var y = Math.sin(x);
	    context.moveTo(yAxis, unit*y+xAxis);
	    

	    // Loop to draw segments
	    for (i = yAxis; i <= width; i += 10) {
	        x = t+(-yAxis+i)/unit;
	        y = Math.sin(x*(Lz*.01));
	        context.lineTo(i, unit*y+xAxis);

	    }
	    console.log('drawSine');
	}

	/*
	 * Function to draw circle
	 */
	// function drawCircle() {
	//     context.moveTo(yAxis+unit, xAxis);
	//     context.arc(yAxis, xAxis, unit, 0, 2*Math.PI, false);
	// }

	/**
	 * Function to draw arrow
	 */
	function drawArrow(t) {
	    
	    // Cache position of arrow on the circle
	    var x = yAxis+unit*Math.cos(t);
	    var y = xAxis+unit*Math.sin(t);
	    
	    // // Draw the arrow line
	    // context.beginPath();
	    // context.moveTo(yAxis, xAxis);
	    // context.lineTo(x, y);
	    // context.stroke();
	    
	    // Draw the arrow bead
	    context.beginPath();
	    // context.arc(x, y, 5, 0, 2*Math.PI, false);
	    context.fill();
	    context.stroke();
	    
	    // // Draw dashed line to yAxis
	    // context.beginPath();
	    // var direction = (Math.cos(t) < 0) ? 1 : -1;
	    // var start = (direction==-1) ? -5 : 0;
	    // for (var i = x;  direction*i < direction*yAxis-5; i = i+direction*10) {
	    //     context.moveTo(i+direction*5, y);
	    //     context.lineTo(i+direction*10, y);
	    // }
	    // context.stroke();
	    
	    // Draw yAxis bead
	    context.beginPath();
	    // context.arc(yAxis, y, 5, 0, 2*Math.PI, false);
	    context.fill();
	    context.stroke();
	}

    Humble.Trig.init();

	// y=sin x(Lz*.01)
	// y=cos x(La*.1)

});






// https://jsfiddle.net/7c9ekpsv/
// line 141 is where graph is

// (function () {

// // if (typeof(Humble) == 'undefined') window.Humble = {};
// // Humble.Trig = {};
// // Humble.Trig.init = init;

// // var unit = 100,
// //     canvas, context, canvas2, context2,
// //     height, width, xAxis, yAxis,
// //     draw;

// // /**
// //  * Init function.
// //  * 
// //  * Initialize variables and begin the animation.
// //  */
// // function init() {
    
// //     canvas = document.getElementById("sineCanvas");
    
// //     canvas.width = 800;
// //     canvas.height = 300;
    
// //     context = canvas.getContext("2d");
// //     context.font = '18px sans-serif';
// //     context.strokeStyle = '#000';
// //     context.lineJoin = 'round';
    
// //     height = canvas.height;
// //     width = canvas.width;
    
// //     xAxis = Math.floor(height/2);
// //     yAxis = Math.floor(width/4);
    
// //     context.save();
// //     draw();
// // }

// // /**
// //  * Draw animation function.
// //  * 
// //  * This function draws one frame of the animation, waits 20ms, and then calls
// //  * itself again.
// //  */
// // draw = function () {
    
// //     // Clear the canvas
// //     context.clearRect(0, 0, width, height);

// //     // Draw the axes in their own path
// //     context.beginPath();
// //     drawAxes();
// //     context.stroke();
    
// //     // Set styles for animated graphics
// //     context.save();
// //     context.strokeStyle = '#00f';
// //     context.fillStyle = '#fff';
// //     context.lineWidth = 2;

// //     // Draw the sine curve at time draw.t, as well as the circle.
// //     context.beginPath();
// //     drawSine(draw.t);
// //     context.stroke();
    
// //     // Draw the arrow at time t in its own path.
// //     drawArrow(draw.t);
    
// //     // Restore original styles
// //     context.restore();
    
// //     // Draw the xAxis PI tick and the time
// //     // context.fillText("Ï�", xAxis + 59+3*unit, 18+xAxis);
// //     context.fillText("t = "+Math.floor(Math.abs(draw.seconds)), 10, 20);
    
// //     // Update the time and draw again
// //     draw.seconds = draw.seconds - .007;
// //     draw.t = draw.seconds*Math.PI;
// //     setTimeout(draw, 17);
// // };
// // draw.seconds = 0;
// // draw.t = 0;

// // /**
// //  * Function to draw axes
// //  */
// // function drawAxes() {
    
// //     // Draw X and Y axes
// //     context.moveTo(0, xAxis);
// //     context.lineTo(width, xAxis);
// //     context.moveTo(yAxis, 0);
// //     context.lineTo(yAxis, height);
    
// //     // Draw X axis tick at PI
// //     context.moveTo(yAxis+Math.PI*unit, xAxis+5);
// //     context.lineTo(yAxis+Math.PI*unit, xAxis-5);
// // }

// // /**
// //  * Function to draw sine
// //  * 
// //  * The sine curve is drawn in 10px segments starting at the origin. 
// //  */
// // function drawSine(t) {

// //     // Set the initial x and y, starting at 0,0 and translating to the origin on
// //     // the canvas.
// //     var x = t;
// //     var y = Math.sin(x);
// //     context.moveTo(yAxis, unit*y+xAxis);
    
// //     // Loop to draw segments
// //     for (i = yAxis; i <= width; i += 10) {
// //         x = t+(-yAxis+i)/unit;
// //         y = Math.sin(x*(-300*.01));
// //         context.lineTo(i, unit*y+xAxis);
// //     }
// // }

// // /*
// //  * Function to draw circle
// //  */
// // // function drawCircle() {
// // //     context.moveTo(yAxis+unit, xAxis);
// // //     context.arc(yAxis, xAxis, unit, 0, 2*Math.PI, false);
// // // }

// // /**
// //  * Function to draw arrow
// //  */
// // function drawArrow(t) {
    
// //     // Cache position of arrow on the circle
// //     var x = yAxis+unit*Math.cos(t);
// //     var y = xAxis+unit*Math.sin(t);
    
// //     // Draw the arrow line
// //     context.beginPath();
// //     context.moveTo(yAxis, xAxis);
// //     context.lineTo(x, y);
// //     context.stroke();
    
// //     // Draw the arrow bead
// //     context.beginPath();
// //     context.arc(x, y, 5, 0, 2*Math.PI, false);
// //     context.fill();
// //     context.stroke();
    
//     // Draw dashed line to yAxis
// //     context.beginPath();
// //     var direction = (Math.cos(t) < 0) ? 1 : -1;
// //     var start = (direction==-1) ? -5 : 0;
// //     for (var i = x;  direction*i < direction*yAxis-5; i = i+direction*10) {
// //         context.moveTo(i+direction*5, y);
// //         context.lineTo(i+direction*10, y);
// //     }
// //     context.stroke();
    
// //     // Draw yAxis bead
// //     context.beginPath();
// //     context.arc(yAxis, y, 5, 0, 2*Math.PI, false);
// //     context.fill();
// //     context.stroke();
// // }

// //     Humble.Trig.init();
    
// })();