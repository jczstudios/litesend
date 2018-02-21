$(document).ready(function() {
	var url = new URL(window.location);
	var address = url.searchParams.get("address");
	var name = url.searchParams.get("name");
	var amount = url.searchParams.get("amount");

	if (name == '') {
		name = 'Someone'
	}

	$('#name').text(name);
	$('#amount').text(amount);
	$('#walletAddress').val(address);	
});