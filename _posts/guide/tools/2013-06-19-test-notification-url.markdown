---
layout: 2columns
title: Test Notification URL
categories: 
- sdks
- more tools
- samples
menu: 
- Tools
tags: 
- more tools
---

Fill out the input with your notification URL to check with can be acceded by browser.

<p>
  Enter the notification URL you've just configured in your app: <br />
  <input id="target" value="" size="50" type="text" />
  <input class="ch-btn ch-btn-small" id="show-my-info" value="Show my information" type="button" />
</p>

<div id="try-by-yourself">
  <ul>
    <li><a href="#user-info">Request Information</a></li>
    <li><a href="#response">Body Response</a></li>
  </ul>
  <div>
    <div id="user-info">
      <p class="ch-form-row ch-form-required"><label for="responseCode">HTTP Status Code:</label><span id="responseCode"></span></p>
      <p class="ch-form-row ch-form-required"><label for="responseContent">Content-type:</label><span id="responseContent"></span></p>
      <p class="ch-form-row ch-form-required"><label for="appName">App name:</label><span id="appName"></span></p>
    </div>
    <div id="response">
      <p><pre id="me">-</pre></p>
    </div>
  </div>
</div>

<script>

window.onload = function() { startDrawing(); }

function startDrawing(){
	$("#try-by-yourself").tabNavigator();

	$('#show-my-info').click(function() {

		var preLoader = "<img src='../images/ajax-loader.gif' />";
		$('#responseCode').html(preLoader);
		$('#responseCode').show();
		$('#responseContent').html(preLoader);
		$('#responseContent').show();
		$('#appName').html(preLoader);
		$('#appName').show();

		var URL = $('#target').val();

		$.ajax({
		    url: 'http://tranquil-thicket-7991.herokuapp.com/test-notification-url.php?url='+URL,
		    type: 'GET',
		    dataType: 'jsonp',
		    success: function(data, textStatus, xhr) {
		    	if(data['httpCode'] == '200') {
		    		var imgCheck = "<img class='code' src='../images/icn-green.png' />";
		    	} else {
		    		var imgCheck = "<img  class='code' src='../images/icn-red.png' />";
		    	}
		        $('#responseCode').html(data['httpCode']+imgCheck);
				$('#responseCode').show();
				$('#responseContent').html(data['contentType']);
				$('#responseContent').show();
				
				if(data['nameApp'] == '') {
					$('#appName').html('Not configured');
					$('#appName').show();
				} else {
					$('#appName').html(data['nameApp']);
					$('#appName').show();
				}
				

				$('#me').html(data['body']);
             	$('#me').show();
		    }
		});
	});
}

</script>
