---
layout: apihealth
title: Platform Health
---

<div class="status_bar">
    <div id="status_color_api">
        <div id="general_status" class="status"></div>
    </div>
    <div>
        <div class="sub_status_bar left">
            <div class="inner_status_bar" id="apiStatus">
                API
            </div>
        </div>
        <div class="sub_status_bar right">
            <div class="inner_status_bar" id="feedStatus">
                Notifications
            </div>
        </div>
    </div>
</div>
<br />
<!--<h3><u>Lag Feeds</u></h3>-->

<table class="ch-datagrid">
    <thead>
        <tr>
            <th scope="col">Feed</th>
            <th scope="col">Lag</th>
            <th scope="col">Last Notification</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><div id="itemsLagStatus">&nbsp; items </div></td>
            <td><div id="itemsLag">&nbsp;</div></td>
            <td><div id="itemsNovedadLag">&nbsp;</div></td>
        </tr>
        <tr>
            <td><div id="questionsLagStatus">&nbsp; questions </div></td>
            <td><div id="questionsLag">&nbsp;</div></td>
            <td><div id="questionsNovedadLag">&nbsp;</div></td>
        </tr>
        <tr>
            <td><div id="ordersLagStatus">&nbsp; orders </div></td>
            <td><div id="ordersLag">&nbsp;</div></td>
            <td><div id="ordersNovedadLag">&nbsp;</div></td>
        </tr>
    </tbody>
</table>

<div class="ch-g1">
    <div class="SubTitles">Recent News</div>
    <div id="lastTweets"></div>
</div>
