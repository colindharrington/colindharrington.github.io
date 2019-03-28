
$(function() {
  var $clockText = $('#clock-text');
  var $hour = $('#hour');
  var $minute = $('#minute');
  var $second = $('#second');
  
  function updateClock() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var ms = date.getMilliseconds();
    var clockUpdateSpeed = 30; // speed in milliseconds

    $clockText.html(h + ":" + m + ":" + s + ":" + ms);
    // $hour.css('transform', 'scaleY(' + (360/24 * h) + '%)');
    // $minute.css('transform', 'rotate(' + (360/60 * m) + 'deg)');
    // $second.css('transform', 'skewx(' + (360/60 * s) + 'deg)');


    $hour.css('transform', 'scaleY(' + (h));
    $minute.css('transform', 'scaleY(' + (m) );    
    $second.css('transform', 'scaleY(' + (s) );

    setTimeout(updateClock, clockUpdateSpeed);
  }

  updateClock();
});

