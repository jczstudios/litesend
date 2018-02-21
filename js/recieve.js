$(document).ready(function() {
	var url = new URL(window.location);
	var address = url.searchParams.get("address");
	console.log(address);
});