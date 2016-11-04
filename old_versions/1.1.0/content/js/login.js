$(function(){
	if($('link').attr('href') != "/content/css/login.css") {
		$('link').attr('href','/content/css/login.css');
	}
	$('#login-btn').click(function() {
		$.when(
			$('link').attr('href','/content/css/home.css'),
			$.get('/content/pages/home.html', function(data, status) {
				return data;
			})
		).done(function(css, data) {
			$('body').html(data[0]).fadeIn();
		});
	});
});