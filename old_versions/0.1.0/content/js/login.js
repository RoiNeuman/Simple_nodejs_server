$(function(){
	$('#login-btn').click(function() {
		$.get('/content/pages/home.html', function(data, status) {
			$('body').html(data).fadeIn();
		});
	});
});