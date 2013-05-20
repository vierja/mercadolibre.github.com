---
layout: guides
title: Adding description
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


An item description is a large HTML which contains detailed information about the item you are selling. E.g.: specifications, descriptions, images, everything you find useful for buyers. The description will appear on the item’s VIP.


See [List an item](/list-your-item) for adding a description and pictures at the moment of listing.

##Why add a description after listing?

You can’t modify the item description if that listing already has bids. But, you can add information to existing descriptions. This prevents fraud mechanisms.

You can add a description to your item with the following POST, specifying the item “id” and the description HTML.


<pre class="terminal">
curl -X POST -H "Content-Type: application/json" -H "Accept: application/json" -d
'{
  "text":"Need more information, Please ask. We will be happy to answer."
}'

https://api.mercadolibre.com/items/MLA430387888/descriptions?access_token=$ACCESS_TOKEN

</pre>

That’s all!. Go to your item’s VIP (using the permalink field) and check the description.


How to add description with our SDK:

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
var uri = "items/ITEMID/descriptions?access_token=" + MELI.getToken()
var param = {
  text: "Need more information, Please ask. We will be happy to answer."
}
MELI.post(uri, param, function(data) {
  //Your code
}
{% endhighlight %}
    </div>
    <div id="php">
{% highlight php5 %}
<?php
$description = array(
  "text" => "Need more information, Please ask. We will be happy to answer."
);
$item = $meli->postWithAccessToken("items/ITEMID/descriptions", $description);
{% endhighlight %}
    </div>
    <div id="java">
{% highlight java %}
FluentStringsMap params = new FluentStringsMap();
params.add("access_token", m.getAccessToken());
Response r = m.post("items/ITEMID/descriptions", params, "{\"text\":\"Need more information, Please ask. We will be happy to answer.\"}");
{% endhighlight %}
    </div>
    <div id="net">
{% highlight csharp %}
var p = new Parameter ();
p.Name = "access_token";
p.Value = m.AccessToken;

var ps = new List<Parameter> ();
ps.Add (p);
IRestResponse r = m.Post ("items/ITEMID/descriptions", ps, new {text="Need more information, Please ask. We will be happy to answer."});
{% endhighlight %}
    </div>
  </div>
</div>


##Error Codes Reference {#error-codes}

Check <a href="/list-your-item/#error-codes">this link</a> for most common errors. For further assistance, please check our <a href='/community' target='_blank'>forums</a> or connect to our irc channel (#meli@irc.freenode.net). In case you find an issue in our API, please report it on <a href='https://github.com/mercadolibre/api/issues' target='_blank'>GitHub</a>.

<script>

  window.onload = function() { startDrawing(); }

  function startDrawing(){
      $("#code").tabNavigator();

  }
</script>
