$(function() {
	if($('link').attr('href') != "/content/css/home.css") {
		$('link').attr('href','/content/css/home.css');
	}
	$('#logout-btn').click(function() {
		$.when(
			$('link').attr('href','/content/css/login.css'),
			$.get('/content/pages/login.html', function(data, status) {
				return data;
			})
		).then(function(css, data) {
			$('body').html(data[0]).fadeIn();
		});
	});
});