$(function() {

$.get('https://colindharrington.github.io/api.json', function(data) {
  console.log(data);

  $('.adj1').html(data.adjective1);
  $('.adj2').html(data.adjective2);
  $('.art').html(data.artSupply);



}).fail(function(error) {
  console.log('Error in GET request. Handle the error gracefully.');
  console.error
});


$('.button').click(function() {
	console.log($(this));
	var url = $(this.data('url');
	console.log(url)

});

});
