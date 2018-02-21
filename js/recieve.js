$(document).ready(function() {
	var url = new URL(window.location);
	var address = url.searchParams.get("address");
	var header = url.searchParams.get("name");
	var amount = url.searchParams.get("amount");
	var reason = url.searchParams.get("reason");

	if (header === null || header === '') {
		header = 'Litecoin has been requested!';
	} else {
		header += ' is requesting Litecoin.';
	}

	if (amount === null || amount === '') {
		amount = 'Please send any amount to the address below.'
	} else {
		amount = 'Please send ' + amount + ' LTC to the address below.'
	}

	if (!(reason === '' || reason === null)) {
		$('#reason-block').removeClass('d-none');
	}

	$('#reason').text(reason);
	$('#header').text(header);
	$('#amount').text(amount);
	$('#walletAddress').val(address);

	$('#walletAddress').on('click', function () {
	   $(this).select();
	});
});