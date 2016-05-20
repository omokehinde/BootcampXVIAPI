// var value ;
$(document).ready(function() {
	$.ajax({
		url: "https://api.github.com/users/omokehinde"
	}).then(function(data) {
		$('.get-id').append(data.id);
		$('.get-name').append(data.name);
		$('.get-login').append(data.login);
		$('.get-avatar').append(data.avatar_url)
		// value = data.name;
	});

});