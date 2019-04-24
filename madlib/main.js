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







$(function(){
	var endpoints = [
"https://kquea402.github.io/api.json"
"https://glics998.github.io/api.json"
"https://colindharrington.github.io/api.json"
"https://hoant626.github.io/api.json"
"https://karla772.github.io/api.json"
"https://leeh779.github.io/api.json"
"https://lis874.github.io/api.json"
"https://phoebechloee.github.io/api.json"
"https://luw779.github.io/api.json"
"https://mullg389.github.io/api.json"
"https://pana005.github.io/api.json"
"https://raos130.github.io/api.json"
"https://samsj948.github.io/api.json"
"https://shaha129.github.io/api.json"
"https://Mwedd9.github.io/api.json"
"https://zhenx804.github.io/api.json"
	];


		$('randomizer').click(function(){
			var randomEndpoint = endpoints[Math.floor(Math.random()*endpoints.length) ];
				console.log(randomEndpoint);
		$.get(randomEndpoint, function(data){

		

		});
});
