$(function() {
	console.log('hello');


$.get('https://colindharrington.github.io/api.json', function(data) {
  console.log(data);

  $('.adj1').html(data.adjective1);



}).fail(function() {
  console.log('Error in GET request. Handle the error gracefully.');
});



});
