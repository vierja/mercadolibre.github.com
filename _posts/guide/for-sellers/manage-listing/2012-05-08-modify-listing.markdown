---
layout: guides
title: Modify items
categories:
- listing
- manage listings
- orders
- manage questions
- shipping
menu:
- Listing &amp; Selling
tags:
- manage listings
---


<div class="contents">
  <h5>Table of Contents</h5>
  <dl>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('#update-item')">Update an Item</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('changing-status')">Changing listing status</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('changing-type')">Changing listing type</a></dt>
</dl>
</div>

## Update an Item {#update-item}

You can modify an item field after it has been listed using our API.

<pre class="terminal">
 https://api.mercadolibre.com/items/ITEM_ID
</pre>


You can modify the values for
- `pictures`
- `title`
- `available_quantity`
- `price`
- `attributes`
- `etc`


**NOTE on descriptions:** For our rules to protect buyers, descriptions cannot be modified when the item has sales.

You must send a JSON formatted body with the elements you wish to modify.


Example:
<pre class="terminal">
curl -X PUT -H "Content-Type: application/json" -H "Accept: application/json" -d
{
  "title": "Your new title",
  "price": 1000
}
https://api.mercadolibre.com/items/ITEM_ID?access_token=YOUR_ACCESS_TOKEN
</pre>

**Note:** the JSON sent must not contain the Item ID.

If your item has been successfully modified, you will receive a code "200 OK" response status. Keep in mind that it can take some time until you see the item’s information refreshed.

### Add new descriptions ### {#addtext}

To add a new description, send a POST request to the following URL:

<pre class="terminal">
 https://api.mercadolibre.com/items/ITEM_ID/descriptions?access_token=YOUR_ACCESS_TOKEN
</pre>

In the request body you must send:

{% highlight javascript %}
{
  "text": "You additional description text."
}
{% endhighlight %}

Example:
<pre class="terminal">
curl -X POST -H "Content-Type: application/json" -H "Accept: application/json" -d
{
  "text": "You additional description text."
}
https://api.mercadolibre.com/items/ITEM_ID/descriptions?access_token=YOUR_ACCESS_TOKEN
</pre>

If the description has been successfully posted, you will receive a "201 Created" status code. Keep in mind that it might take some minutes for your new description to be shown.

## Changing listing status {#changing-status}

All you have to do is send a PUT request to our Items API with a status change, to the following URL:

<pre class="terminal">
curl -X PUT -H "Content-Type: application/json" -H "Accept: application/json" -d
{
  "status":"paused"
}
https://api.mercadolibre.com/items/ITEM_ID?access_token=YOUR_ACCESS_TOKEN
</pre>

Possible values are:

- `closed` : Finalizes your publication. Once closed, it cannot be reactivated again, but it can be [relisted](/relist-item).
- `paused` : Pauses your publication. Once paused, it will not be visible by other MercadoLibre's users, but it will not be closed and it can be reactivated later on.
- `active` : Reactivates a previously paused item.

**Note:** the value passed in the `status` key is case sensitive and thus must be sent in lowercase.

## Changing listing type {#changing-type}

To change the listing type you will use a specific URL, you have to send a POST request to our Items API with a type change, to the following URL:

Example:
<pre class="terminal">
curl -X POST -H "Content-Type: application/json" -H "Accept: application/json" -d
{
  "id": "silver"
}
https://api.mercadolibre.com/items/ITEM_ID/listing_type?access_token=$ACCESS_TOKEN
</pre>
**Note:** the value passed in the `id` key is case sensitive and this must be sent in lowercase.

**Important!** You only can change the listing type of **active items.**

Let's change the status with our SDK's

<div id="code">
  <ul>
    <li><a href="#js">JavaScript</a></li>
    <li><a href="#php">PHP</a></li>
    <li><a href="#java">Java</a></li>
    <li><a href="#net">.NET</a></li>
  </ul>
  <div>
    <div id="js">
{% highlight javascript %}
var uri = "/items/ITEM_ID/listing_type?access_token=" + MELI.getToken()
var param = {
  id:"silver"
}
MELI.post(uri, param, function(data) {
  //Your code
});
{% endhighlight %}
    </div>
    <div id="php">
{% highlight php5 %}
<?php
$item = array(
  "id" => "silver"
);
$item = $meli->post("/items/ITEM_ID/listing_type", $item, array('access_token' => $_SESSION['access_token']));
?>
{% endhighlight %}
    </div>
    <div id="java">
{% highlight java %}
FluentStringsMap params = new FluentStringsMap();
params.add("access_token", m.getAccessToken());
Response r = m.post("/items/ITEM_ID/listing_type", params, "{\"id\":\"silver\"}");
{% endhighlight %}
    </div>
    <div id="net">
{% highlight csharp %}
var p = new Parameter ();
p.Name = "access_token";
p.Value = m.AccessToken;

var ps = new List<Parameter> ();
ps.Add (p);
IRestResponse r = m.Post ("/items/ITEM_ID/listing_type", ps, new {id="silver"});
{% endhighlight %}
    </div>
  </div>
</div>

To check the possible values for the listing_type_id make a GET request in this URL:
<pre class="terminal">
curl https://api.mercadolibre.com/sites/MLB/listing_types/
</pre>

##Error Codes Reference {#error-codes}

Check <a href="/list-your-item/#error-codes">this link</a> for most common errors. For further assistance, please check our <a href='/community' target='_blank'>forums</a> or connect to our irc channel (#meli@irc.freenode.net). In case you find an issue in our API, please report it on <a href='https://github.com/mercadolibre/api/issues' target='_blank'>GitHub</a>.

<script>

  window.onload = function() { startDrawing(); }

  function startDrawing(){
      $("#code").tabNavigator();

  }
</script>
