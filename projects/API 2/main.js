$("document").ready(function(){

	$.get('http://api.open-notify.org/iss-now.json', function(data) {
	  console.log(data);
	  console.log(data.iss_position.longitude);
	  console.log(data.iss_position.latitude);

	  var Lz = (data.iss_position.longitude);
  	  var La = (data.iss_position.latitude);

		document.getElementById("long").innerHTML = Lz;
		document.getElementById("lat").innerHTML = La;

});
    //arrange blocks in a circle
    var block = $("#rotator div").get(),
    increase = Math.PI * 2 / block.length,
    x = 0, y = 0, angle = 0;

    for (var i = 0; i < block.length; i++) {
        var elem = block[i];
        x = Lz * Math.cos(angle) + 150;
        y = La * Math.sin(angle) + 150;
        elem.style.position = 'absolute';
        elem.style.left = x + 'px';
        elem.style.top = y + 'px';
        var rot = 90 + (i * (360 / block.length));        
        angle += increase;
    }

});