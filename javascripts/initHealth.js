window.onload = function() {
	// start jqtweet!
	JQTWEET.loadTweets();
	JQTWEET.apiStatus(); 
	JQTWEET.feedStatus(); 
	// start LAGFEEDS!
	LAGFEEDS.lagFeedsStatus();
};