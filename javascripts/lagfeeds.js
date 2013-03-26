LAGFEEDS = {
    lagFeedsStatus: function() {
        $.ajax({
            url: 'http://feeds.mercadolibre.com/itemFeedChecker/api?',
            type: 'GET',
            dataType: 'jsonp',
            contentType: 'text/html',
            success: function(data, textStatus, xhr) {
                var status = eval(data);
                for (var i = 0; i < status.length; i++){
                    $('#'+status[i]['name']+'LagStatus').html('&nbsp<img src="http://feeds.mercadolibre.com/itemFeedCheckerRecursos/'+status[i]['status']+'.png"> &nbsp&nbsp'+status[i]['name']);
                    $('#'+status[i]['name']+'Lag').html(status[i]['lag']+' sec. &nbsp&nbsp');
                    $('#'+status[i]['name']+'NovedadLag').html('&nbsp&nbsp '+status[i]['lastNoticeFeed']+' &nbsp&nbsp');
                   $('#'+status[i]['name']+'PostLag').html('&nbsp&nbsp '+status[i]['lastPost']+' &nbsp&nbsp');
                }
            }
        });
    }
};
