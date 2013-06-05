---
layout: guides
title: List with variations
categories:
- listing
- manage listings
- orders
- manage questions
- shipping
menu:
- Listing &amp; Selling
tags:
- listing
---


You already know what items and attributes are. If you don't, we recommend that you read the [Listings Introduction tutorial](/listing-introduction).

To see a list of allowed attributes in a category, you can access the Categories API with the parameter /attributes.

<pre class="terminal">
curl https://api.mercadolibre.com/categories/:categID/attributes/
</pre>

Ok, now you know all the types of variations your category has. Let's create a JSON with our item and its variations.

<pre class="terminal">
curl -X POST -H "Content-Type: application/json" -d
'{
   "title":"Test Item - Nao ofertar",
   "category_id":"MLB103661",
   "price":10,
   "currency_id":"BRL",
   "buying_mode":"buy_it_now",
   "listing_type_id":"bronze",
   "condition":"new",
   "description": "<b>Item com variacao !</b>",
   "variations":[
  	{
     	"attribute_combinations":[
        	{
           	"id":"63000",
           	"value_id":"71995"
        	},
        	{
           	"id":"33000",
           	"value_id":"51993"
        	},
        	{
           	"id":"43000",
           	"value_id":"52065"
        	}
     	],
     	"available_quantity":1,
     	"price":10,
     	"picture_ids":[
        	"http://www.mundodofutebol.com.br/imagens/produto/6484_0181.jpg"
     	]
  	},
  	{
     	"attribute_combinations":[
        	{
           	"id":"63000",
           	"value_id":"71996"
        	},
        	{
           	"id":"33000",
           	"value_id":"52045"
        	},
        	{
           	"id":"43000",
           	"value_id":"52071"
        	}
     	],
     	"available_quantity":1,
     	"price":10,
     	"picture_ids":[
        	"http://www.glamour.com.br/arquivos/ids/550471_10/78911931_1.jpg"
     	]
  	}
   ]
}'

https://api.mercadolibre.com/items?access_token=$ACCESS_TOKEN
</pre>

Listing the same item with our SDKs

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
var uri = "/items?access_token=" + MELI.getToken()
var param = {
   title:"Test Item - Nao ofertar",
   category_id:"MLB103661",
   price:10,
   currency_id:"BRL",
   buying_mode:"buy_it_now",
   listing_type_id:"bronze",
   condition:"new",
   description:"<b>Item com variacao !</b>",
   variations:[
      {
         attribute_combinations:[
            {
               id:"63000",
               value_id:"71995"
            },
            {
               id:"33000",
               value_id:"51993"
            },
            {
               id:"43000",
               value_id:"52065"
            }
         ],
         available_quantity:1,
         price:10,
         picture_ids:[
            "http://www.mundodofutebol.com.br/imagens/produto/6484_0181.jpg"
         ]
      },
      {
         attribute_combinations":[
            {
               id:"63000",
               value_id:"71996"
            },
            {
               id:"33000",
               value_id:"52045"
            },
            {
               id:"43000",
               value_id:"52071"
            }
         ],
         available_quantity:1,
         price:10,
         picture_ids:[
            "http://www.glamour.com.br/arquivos/ids/550471_10/78911931_1.jpg"
         ]
      }
   ]
}
MELI.post(uri, param, function(data) {
  //Your code
}
{% endhighlight %}
    </div>
    <div id="php">
{% highlight php5 %}
<?php
$item = array(
  "title" => "Item de testes com variação - Não ofertar",
  "subtitle" => "Some subtitle here",
  "category_id" => "MLB103661",
  "price" => 10,
  "currency_id" => "BRL",
  "buying_mode" => "buy_it_now",
  "listing_type_id" => "bronze",
  "condition" => "new",
  "description" => "<b>Item com variacao !</b>",
  "variations" => array(
    array(
      "attribute_combinations" => array(
        array(
          "id" => "63000",
          "value_id" => "71995",
        ),
        array(
          "id" => "33000",
          "value_id" => "51993",
        ),
        array(
          "id" => "43000",
          "value_id" => "52065",
        ),
      ),
      "available_quantity" => 1,
      "price" => 10,
      "picture_ids" => array(
        "http://www.mundodofutebol.com.br/imagens/produto/6484_0181.jpg"
      ),
    ),
    array(
      "attribute_combinations" => array(
        array(
          "id" => "63000",
          "value_id" => "71996",
        ),
        array(
          "id" => "33000",
          "value_id" => "52045",
        ),
        array(
          "id" => "43000",
          "value_id" => "52071",
        ),
      ),
      "available_quantity" => 1,
      "price" => 10,
      "picture_ids" => array(
        "http://www.glamour.com.br/arquivos/ids/550471_10/78911931_1.jpg"
      )
    ),
  ),
);
$item = $meli->postWithAccessToken("/items", $item);
?>
{% endhighlight %}
    </div>
    <div id="java">
{% highlight java %}
FluentStringsMap params = new FluentStringsMap();
params.add("access_token", m.getAccessToken());
Response r = m.post("/items", params, "{\"title\":\"Item de testes com variacao - Nao ofertar\",\"subtitle\":\"Some subtitle here\",\"category_id\":\"MLB103661\",\"price\":10,\"currency_id\":\"BRL\",\"buying_mode\":\"buy_it_now\",\"listing_type_id\":\"bronze\",\"condition\":\"new\",\"description\":\"Item com variacao !<\/b>\",\"variations\":[{\"attribute_combinations\":[{\"id\":\"63000\",\"value_id\":\"71996\"},{\"id\":\"33000\",\"value_id\":\"52045\"},{\"id\":\"43000\",\"value_id\":\"52071\"}],\"available_quantity\":1,\"price\":10,\"picture_ids\":[\"http:\/\/www.glamour.com.br\/arquivos\/ids\/550471_10\/78911931_1.jpg\"]}]}");
{% endhighlight %}
    </div>
    <div id="net">
{% highlight csharp %}
var p = new Parameter ();
p.Name = "access_token";
p.Value = m.AccessToken;

var ps = new List<Parameter> ();
ps.Add (p);
IRestResponse r = m.Post ("/items", ps, new {title="Anteojos Ray Ban Wayfare",subtitle="Some subtitle here",category_id="MLA5529",price:10,currency_id="ARS",available_quantity:1,buying_mode="buy_it_now",listing_type_id="bronze",condition="new",description: "Item:, <strong> Ray-Ban WAYFARER Gloss Black RB2140 901 </strong> Model: RB2140. Size: 50mm. Name: WAYFARER. Color: Gloss Black. Includes Ray-Ban Carrying Case and Cleaning Cloth. New in Box",video_id="YOUTUBE_ID_HERE",warranty="12 months by Ray Ban",pictures:[{source="http://upload.wikimedia.org/wikipedia/commons/f/fd/Ray_Ban_Original_Wayfarer.jpg"},{source="http://en.wikipedia.org/wiki/File:Teashades.gif"}]});
{% endhighlight %}
    </div>
  </div>
</div>

**Congratulations!** You have just listed your first item with variations! You can access the item's VIP through the permalink attribute.


In this example we've created one item with two variations, each one with the respective image.

If you have questions regarding how to get your access token to list items, please refer to the [getting started](/getting-started) tutorial. In addition, if you wish to validate your item before listing, check out the [item validation](/validate-item) tutorial.

**Note:** If you get any errors trying to post your item, please refer to the [selling conditions](http://www.mercadolibre.com/jm/ml.faqs.framework.main.FaqsController?pageId=FAQ&faqId=2407&categId=COST&type=FAQ) page.

##Error Codes Reference {#error-codes}

Check <a href="/list-your-item/#error-codes">this link</a> for most common errors. For further assistance, please check our <a href='/community' target='_blank'>forums</a> or connect to our irc channel (#meli@irc.freenode.net). In case you find an issue in our API, please report it on <a href='https://github.com/mercadolibre/api/issues' target='_blank'>GitHub</a>.

<script>

  window.onload = function() { startDrawing(); }

  function startDrawing(){
      $("#code").tabNavigator();

  }
</script>
