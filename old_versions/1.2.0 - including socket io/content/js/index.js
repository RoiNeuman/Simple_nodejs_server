$(function(){
	$.get('/content/pages/login.html', function(data, status) {
		$('body').html(data);
	});
});