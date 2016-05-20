$(document).ready(function() {
	$.ajax({
		url: "https://api.github.com/users/+value"
	}).then(function(data) {
		$('.get-id').append(data.id);
		$('.get-name').append(data.name);
		$('.get-login').append(data.login);
		$('.get-avatar').append(data.avatar_url)
	});
});