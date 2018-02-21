$(document).ready(function() {
	function updateAddress() {
		var wallet = $('#walletAddressInput').val();
		var amount = $('#amountInput').val();
		var name = $('#nameInput').val();
		var reason = $('#reasonInput').val();
		var urlString = 'https://jczstudios.github.io/litesend/recieve.html?address=' + wallet + '&amount=' + amount + '&reason=' + reason;
		var url = new URL(urlString);
		$('#URL').val(url.href);
	}
	$('input').on('input', function() {
		updateAddress();
	});
	$('#URL').on('click', function () {
	   $(this).select();
	});
});