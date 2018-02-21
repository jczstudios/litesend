$(document).ready(function() {
	function updateAddress() {
		var wallet = $('#walletAddressInput').val();
		var amount = $('#amountInput').val();
		var name = $('#nameInput').val();
		var reason = $('#reasonInput').val();
		var urlString = 'https://jczstudios.github.io/litesend/recieve.html?address=' + wallet + '&amount=' + amount + '&reason=' + reason;
		var url = new URL(urlString);
		$('#URL').val(url.href);
		return url;
	}
	$('input').on('input', function() {
		updateAddress();
	});
	$('#URL').on('click', function () {
	   $(this).select();
	});
	$('#shortenURL').on('click', function() {
		var url = updateAddress().href;

		var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": "https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyCeVIFX37PZh4T9y-NqlcDW5vKHB-Swfng",
		  "method": "POST",
		  "headers": {
		    "content-type": "application/json",
		    "cache-control": "no-cache",
		    "postman-token": "765faf03-d7e1-5863-1ec3-b78c153f77a3"
		  },
		  "processData": false,
		  "data": "{\"longUrl\": \"" + url + "\"}"
		}

		$.ajax(settings).done(function (response) {
		  console.log(response.longUrl);
		});
	});
});