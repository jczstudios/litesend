$(document).ready(function() {
	function updateAddress() {
		var wallet = $('#walletAddressInput').val();
		var amount = $('#amountInput').val();
		var url = 'https://jczstudios.github.io/litesend/recieve.html?address=' + wallet + '&amount=' + amount;
		$('#URL').val(url);
	}
	$('input').on('input', function() {
		updateAddress();
	});
	$('#URL').on('click', function () {
	   $(this).select();
	});
});