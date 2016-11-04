$(function(){
	
	// Initialize page
	var initPage = function() {
		$.get('/content/pages/login.html', function(data, status) {
			$('body').html(data);
		});
	}();
});