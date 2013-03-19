LAGFEEDS = {
    lagFeedsStatus: function() {
        $.ajax({
            url: 'http://feeds.mercadolibre.com/itemFeedChecker/api',
            type: 'GET',
            dataType: 'json',
            success: function(data, textStatus, xhr) {
//                var status = [{"name":"items","lag":0.51,"status":"green","timeWithoutNotice":46,"lastNoticeFeed":"18-03-2013 16:38:32 ","lastPost":"18-03-2013 16:38:32"},{"name":"questions","lag":1.64,"status":"green","timeWithoutNotice":45,"lastNoticeFeed":"18-03-2013 16:38:34 ","lastPost":"18-03-2013 16:38:32"},{"name":"orders","lag":2.98,"status":"green","timeWithoutNotice":43,"lastNoticeFeed":"18-03-2013 16:38:35 ","lastPost":"18-03-2013 16:38:32"}];
                var status = data;
                for (var i = 0; i < status.length; i++){
                    $('#'+status[i]['name']+'LagStatus').html('&nbsp<img src="http://feeds.mercadolibre.com/itemFeedCheckerRecursos/'+status[i]['status']+'.png"> &nbsp&nbsp'+status[i]['name']);
                    $('#'+status[i]['name']+'Lag').html(status[i]['lag']+' sec. &nbsp&nbsp');
                    $('#'+status[i]['name']+'NovedadLag').html('&nbsp&nbsp '+status[i]['lastNoticeFeed']+' &nbsp&nbsp');
//                    $('#'+status[i]['name']+'PostLag').html('&nbsp&nbsp '+status[i]['lastPost']+' &nbsp&nbsp');
                } //for
            } //sucess
        }); //ajax
    }, //lagfeedsstatus
};


window.onload = function() {
    // start LAGFEEDS!
    LAGFEEDS.lagFeedsStatus();
};
