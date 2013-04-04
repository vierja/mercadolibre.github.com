LAGFEEDS = {
    lagFeedsStatus: function() {
        $.ajax({
            url: 'http://localhost/~mercadolivre/mockFeeds.php?',
            type: 'GET',
            dataType: 'jsonp',
            contentType: 'text/html',
            success: function(data, textStatus, xhr) {
                var status = eval(data);
                var countRed = 0;
                var countYellow = 0;
                for (var i = 0; i < status.length; i++){
                    if(status[i]['status'] == 'red') {
                        countRed++;
                    }
                    if(status[i]['status'] == 'yellow') {
                        countYellow++;
                    }
                    $('#'+status[i]['name']+'LagStatus').html('&nbsp<img src="http://feeds.mercadolibre.com/itemFeedCheckerRecursos/'+status[i]['status']+'.png"> &nbsp&nbsp'+status[i]['name']);
                    $('#'+status[i]['name']+'Lag').html(status[i]['lag']+' sec. &nbsp&nbsp');
                    $('#'+status[i]['name']+'NovedadLag').html('&nbsp&nbsp '+status[i]['lastNoticeFeed']+' &nbsp&nbsp');
                }
                if(countRed == 3) {
                    $('#feedStatus').html('<div class="tweet"><IMG src="/images/icn-red.png"/> Feeds are unstable</div>');
                } else if((countYellow > 0) || (countRed > 0)) {
                    $('#feedStatus').html('<div class="tweet"><IMG src="/images/icn-yellow.png"/> Check feeds delay</div>');
                } else {
                    $('#feedStatus').html('<div class="tweet"><IMG src="/images/icn-green.png"/> Feeds are up</div>');
                }
                // feed has some minutes of delay
            }
        });

        window.setTimeout(function() {
            LAGFEEDS.lagFeedsStatus();
        }, 30000);
    }
};
