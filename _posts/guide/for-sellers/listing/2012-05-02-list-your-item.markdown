---
layout: guides
title: List items
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


## Overview {#overview}

The first step in selling is to list an item on MercadoLibre. Sellers can list an item through MercadoLibre's site or through an application using Listing API. They both work exactly the same.

There are a number of considerations regarding an item such as the title, category, price, currency or description. You already know what items and attributes are. If you don’t, we recommend that you read the [Listings Introduction tutorial](/listing-introduction).

Some item properties affect the appeareance of several pages where the items are viewed (the view item page, the search pages, the category browser page).

Additionally, there are mandatory attributes to list an item.


<div class="contents">
  <h5>Table of Contents</h5>
  <dl>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('list-example')">Listing example</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('best-practices')">Best Practices</a></dt>
    <dt><a href="javascript:void(0)" onClick="goToByScroll('list-defining-attributes')">Defining attributes</a></dt>
  </dl>
</div>

## Listing example{#list-example}

We're ready to list our first item. You can use the code below to create your first item:

<pre class="terminal">
curl -X POST -H "Content-Type: application/json" -d
'{
  "title":"Anteojos Ray Ban Wayfare",
  "subtitle":"Some subtitle here",
  "category_id":"MLA5529",
  "price":10,
  "currency_id":"ARS",
  "available_quantity":1,
  "buying_mode":"buy_it_now",
  "listing_type_id":"bronze",
  "condition":"new",
  "description": "Item:, {{"<strong> Ray-Ban WAYFARER Gloss Black RB2140 901 </strong>" | xml_escape }} Model: RB2140. Size: 50mm. Name: WAYFARER. Color: Gloss Black. Includes Ray-Ban Carrying Case and Cleaning Cloth. New in Box",
  "video_id": "YOUTUBE_ID_HERE",
  "warranty": "12 months by Ray Ban"
  "pictures":[
    {"source":"http://upload.wikimedia.org/wikipedia/commons/f/fd/Ray_Ban_Original_Wayfarer.jpg"},
    {"source":"http://en.wikipedia.org/wiki/File:Teashades.gif"}
  ]
}'
https://api.mercadolibre.com/items?access_token=$ACCESS_TOKEN
</pre>

Try to post a item using our SDK's

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
  title:"Anteojos Ray Ban Wayfare",
  subtitle:"Some subtitle here"
  category_id:"MLA5529",
  price:10,
  currency_id:"ARS",
  available_quantity:1,
  buying_mode:"buy_it_now",
  listing_type_id:"bronze",
  condition:"new",
  description": "Item:, <strong> Ray-Ban WAYFARER Gloss Black RB2140 901 </strong> Model: RB2140. Size: 50mm. Name: WAYFARER. Color: Gloss Black. Includes Ray-Ban Carrying Case and Cleaning Cloth. New in Box",
  "video_id": "YOUTUBE_ID_HERE",
  "warranty": "12 month by Ray Ban"
  pictures:[
    {"source":"http://upload.wikimedia.org/wikipedia/commons/f/fd/Ray_Ban_Original_Wayfarer.jpg"},
    {"source":"http://en.wikipedia.org/wiki/File:Teashades.gif"}
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
  "title" => "Anteojos Ray Ban Wayfare",
  "subtitle" => "Some subtitle here"
  "category" => "MLA5529",
  "price" => 10,
  "currency_id" => "ARS",
  "available_quantity" => 1,
  "buying_mode" => "buy_it_now",
  "listing_type_id" => "bronze",
  "condition" => "new",
  "description" => "Item:, <strong> Ray-Ban WAYFARER Gloss Black RB2140 901 </strong> Model: RB2140. Size: 50mm. Name: WAYFARER. Color: Gloss Black. Includes Ray-Ban Carrying Case and Cleaning Cloth. New in Box",
  "video_id" => "YOUTUBE_ID_HERE",
  "warranty" => "12 month by Ray Ban",
  "pictures" => array(
    "source" => "http://upload.wikimedia.org/wikipedia/commons/f/fd/Ray_Ban_Original_Wayfarer.jpg",
    "source" => "http://en.wikipedia.org/wiki/File:Teashades.gif"
  )
);
$item = $meli->postWithAccessToken("/items", $item);
{% endhighlight %}
    </div>
    <div id="java">
{% highlight java %}
FluentStringsMap params = new FluentStringsMap();
params.add("access_token", m.getAccessToken());
Response r = m.post("/items", params, "{\"title\":\"Anteojos Ray Ban Wayfare\",\"subtitle\":\"Some subtitle here\",\"category_id\":\"MLA5529\",\"price\":10,\"currency_id\":\"ARS\",\"available_quantity\":1,\"buying_mode\":\"buy_it_now\",\"listing_type_id\":\"bronze\",\"condition\":\"new\",\"description\": \"Item:, <strong> Ray-Ban WAYFARER Gloss Black RB2140 901 </strong> Model: RB2140. Size: 50mm. Name: WAYFARER. Color: Gloss Black. Includes Ray-Ban Carrying Case and Cleaning Cloth. New in Box\",\"video_id\":\"YOUTUBE_ID_HERE\",\"warranty\":\"12 month by Ray Ban\",\"pictures\":[{\"source\":\"http://upload.wikimedia.org/wikipedia/commons/f/fd/Ray_Ban_Original_Wayfarer.jpg\"},{\"source\":\"http://en.wikipedia.org/wiki/File:Teashades.gif\"}]}");
{% endhighlight %}
    </div>
    <div id="net">
{% highlight csharp %}
var p = new Parameter ();
p.Name = "access_token";
p.Value = m.AccessToken;

var ps = new List<Parameter> ();
ps.Add (p);
IRestResponse r = m.Post ("/items", ps, new {title:"Anteojos Ray Ban Wayfare",subtitle:"Some subtitle here",category_id:"MLA5529",price:10,currency_id:"ARS",available_quantity:1,buying_mode:"buy_it_now",listing_type_id:"bronze",condition:"new",description: "Item:, <strong> Ray-Ban WAYFARER Gloss Black RB2140 901 </strong> Model: RB2140. Size: 50mm. Name: WAYFARER. Color: Gloss Black. Includes Ray-Ban Carrying Case and Cleaning Cloth. New in Box",video_id:"YOUTUBE_ID_HERE",warranty:"12 months by Ray Ban",pictures:[{source:"http://upload.wikimedia.org/wikipedia/commons/f/fd/Ray_Ban_Original_Wayfarer.jpg"},{source:"http://en.wikipedia.org/wiki/File:Teashades.gif"}]});
{% endhighlight %}
    </div>
  </div>
</div>

The Items API will automatically download the provided images to MELI Storage and create a listing for your item. You will receive the following Json response:

{% highlight javascript %}
{
  "id":"MLA430387888",
  "site_id":"MLA",
  "title":"Anteojos Ray Ban Wayfare",
  "sold_quantity":0,
  "permalink":"http://articulo.mercadolibre.com.ar/MLA-430387888-anteojos-ray-ban-wayfare-_JM",
  ...
}
{% endhighlight %}

**Congratulations!** You have just listed your first item! You can access the Item’s VIP through the permalink attribute.

If you have questions regarding how to get your access token to list items, please refer to the [getting started](/first-step) tutorial. In addition, if you wish to validate your item before listing, check out the [item validation](/validate-item) tutorial.

**Note:** If you get any errors trying to post your item, please refer to the [selling conditions](http://www.mercadolibre.com/jm/ml.faqs.framework.main.FaqsController?pageId=FAQ&faqId=2407&categId=COST&type=FAQ) page.

## Best practices {#best-practices}

Please, don't use list operation to test the item's definition. Instead, use [validate operation](/validate-item) item before using list operation.

## Defining attributes {#list-defining-attributes}

To create your first item you need a number of attributes that can be set; some are mandatory and some are optional. They all define how the item is displayed, how buyers can purchase it and how it will be used in searching results.

### Title {#listing-title-attribute}

The title is the main descriptor of an item. This label will be used for searching purposes and it is an important component of your item's detail. It is a mandatory attribute. For more details about this attribute in MercadoLibre, you can check the [visual introduction](/listing-introduction) and the [item title section](/listing-introduction/#item-title).

You can add a subtitle attribute, which is optional and it is used in the view item page or in the search result list. Together, these parameters are very important to describe your item. If you have doubts about how to describe your item, visit [MercadoLibre site help](http://www.mercadolibre.com/jm/ml.faqs.framework.main.FaqsController?pageId=FAQ&faqId=9564&categId=MEJVT&type=FAQ).


### Description {#listing-description-attribute}

On the VIP (View Item Page), you can see the title and description. The description is displayed in an iframe. There are some considerations when working with descriptions. If you are interested in increasing your knowledge about this topic, see the [add description item](/add-description-item) section.
You can also find details about this attribute in MercadoLibre in the [visual introduction](/listing-introduction).

### Condition {#listing-condition-attribute}

When publishing an item you need to declare if the condition is <strong>new</strong>, <strong>used</strong> or <strong>not_specified</strong>. This attribute is mandatory to complete a list operation.

### Available quantity {#listing-available-quantity-attribute}

This attribute defines the number of items available for selling. The highest value is defined on the chosen listing type. See more details in the [listing type](#listing-type-attribute) section.


### Pictures {#listing-picture-attribute}

Good pictures can make an item more appealing and give buyers a better idea of the item's appearance. Basically, you should add an array of up to six URL pictures.

{% highlight javascript %}
{
 ....
 "pictures":[
	{"source":"http://yourServer/path/to/your/picture.jpg"},
	{"source":"http://yourServer/path/to/your/otherPicture.gif"},
	{"source":"http://yourServer/path/to/your/anotherPicture.png"}
 ]
 ...
}
{% endhighlight %}

You can also add or change [pictures to your item](/add-pictures-item) later on.


### Category {#listing-category-attribute}

Sellers must define a category in MercadoLibre site. This attribute is mandatory and only accepts pre-defined IDs. For more information about category details see [categories documentation](/category-introduction).

{% highlight javascript %}
{
 ....
	"category_id":"MLA12683",
 ...
}
{% endhighlight %}


### Price {#listing-price-attribute}

When you define a new item it must have a staring price. This is a mandatory attribute. Besides price, you need to define the [currency](#listing-currency-attribute).

### Currency {#listing-currency-attribute}

This attribute is mandatory too. You need to define it using a pre-defined id. If you need more help on currencies, see [currency API](/guide-appendix/#currencies-api)

### Listing type {#listing-type-attribute}

This is another case of a mandatory attribute that only accepts pre-defined values. There are different listing types availables for each site (For more details about sites, see [Site API](https://api.mercadolibre.com/sites)).

<pre class="terminal">
curl https://api.mercadolibre.com/sites/MLA/listing_types
</pre>

{% highlight javascript %}
[
  ...
  {
    "site_id": "MLA",
    "id": "silver",
    "name": "Plata",
  },
  {
    "site_id": "MLA",
    "id": "bronze",
    "name": "Bronce",
  },
  ...
]
{% endhighlight %}

You can list an item under the free, bronze, silver, gold and gold premium listing types. The fees for selling the item as well as how it is ranked in a search result will depend on the listing type you select. In order to analyze this API, we will go over a number of attributes for the “silver” ID listing type.

<pre class="terminal">
curl https://api.mercadolibre.com/sites/MLA/listing_types/silver
</pre>

{% highlight javascript %}
{
  "id": "silver",                          <-- Mandatory ID in listing operation
  "not_available_in_categories": [],
  "configuration": {
    "name": "Plata",                       <-- Human-friendly name using site language
    "listing_exposure": "mid",
    "requires_picture": false,
    "max_stock_per_item": 999,             <-- Highest value that you can define
    "duration_days": {                     <-- Indicates duration for each buying mode
      "buy_it_now": 60,
      "auction": 15,
      "classified": null,
    },
    "mercado_pago": "mandatory",
    "listing_fee_criteria": {...},         <-- Rules for publishing cost
    "sale_fee_criteria": {...},            <-- Rules for selling cost
  },
  "exceptions_by_category": [...],
}
{% endhighlight %}

For more details about listing type costs, you can visit [MercadoLibre help site](http://www.mercadolibre.com/jm/ml.faqs.framework.main.FaqsController?pageId=FAQ&faqId=2407&categId=COST&type=FAQ).

##Error Codes Reference {#error-codes}

<table class="ch-datagrid errors-code">
    <thead>
      <tr>
         <th cope="col">Error_code</th>
         <th cope="col">Error message</th>
         <th cope="col">Description</th>
         <th cope="col">Possible solution</th>
      </tr>
    </thead>
    <tbody>
      <tr>
         <td>item.start_time.invalid</td>
         <td>start time $startTime is only updateable in NOT_YET_ACTIVE items.</td>
         <td>Field start time cannot be updated.</td>
         <td>The parameter start_time can only be updated if the item status is <b><i>NOT_YET_ACTIVE</i></b>.</td>
      </tr>
      <tr>
         <td>item.category_id.invalid</td>
         <td>Category $categoryId does not exist.</td>
         <td>Category not found.</td>
         <td>To see the available categories check the page <b>https://api.mercadolibre.com/sites/$siteId</b> (<a href='https://api.mercadolibre.com/sites' target='_blank'>Check $sideId</a>).</td>
      </tr>
      <tr>
         <td>item.category_id.invalid</td>
         <td>Is not allowed to post in category $categoryId. Make sure you're posting in a leaf category</td>
         <td>$category.listing_allowed false.</td>
         <td>Before post an item, make sure it is allowed to post in the chosen category, see the parameter listing_allowed on <b>https://api.mercadolibre.com/categories/$categoryId</b>.</td>
      </tr>
      <tr>
         <td>item.buying_mode.invalid</td>
         <td>Category $categoryId only supports listing modes: $category.buyingModes.</td>
         <td>$item.buying_modes is invalid.</td>
         <td>To see the available listing modes in category check the page <b>https://api.mercadolibre.com/categories/$categoryId</b> in parameter <b><i>settings:{buying_modes:[...]}</i></b>.</td>
      </tr>
      <tr>
         <td>item.available_quantity.invalid</td>
         <td>Available quantity max. value is $itemMaxStock for category $categoryId and listing type $item.listingTypeId</td>
         <td>$item.available_quantity is bigger the maximum allowed.</td>
         <td>To see the maximum quantity allowed on category check the page <b>https://api.mercadolibre.com/categories/$categoryId/listing_types/$listing_type</b> in parameter <b><i>max_stock_per_item</i></b> (<a href='https://api.mercadolibre.com/categories/$categoryId/listing_types' target='_blank'>Check listing_type</a>)</td>
      </tr>
      <tr>
         <td>item.attributes.invalid</td>
         <td>The attributes $attributesIds are invalid for category $item.categoryId</td>
         <td>$item.attributes is invalid.</td>
         <td>See attributes allowed <b>https://api.mercadolibre.com/categories/$categoryId/attributes</b>.</td>
      </tr>
      <tr>
         <td>item.variations.attribute_combinations.invalid</td>
         <td>Variation attribute $variationAttribute.attributeId has an invalid value ($variationAttribute.valueId). Allowed values are $values.</td>
         <td>$item.attribute_combinations is invalid.</td>
         <td>To see mandatory attributes on this category check the page <b>https://api.mercadolibre.com/categories/$categoryId/attributes</b> in parameter <b><i>{values:[{...}]}</i></b>.</td>
      </tr>
      <tr>
         <td>item.attributes.missing_required</td>
         <td>The attributes $requiredAttributeIds are required for category $item.categoryId. Check the attribute is present in the attributes list or in all variation attributes combination.</td>
         <td>Category is required atribute.</td>
         <td>To see the attributes mandatory on this category check the page <b>https://api.mercadolibre.com/categories/$categoryId/attributes</b> in parameter <b><i>{tags:{required:{true}}}</i></b>.</td>
      </tr>
      <tr>
         <td>item.listing_type_id.invalid</td>
         <td>Invalid listing_type_id.</td>
         <td>$item.listing_type_id is invalid.</td>
         <td>To see the available listing types in category check the page <b>https://api.mercadolibre.com/categories/$categoryId/listing_types</b>.</td>
      </tr>
      <tr>
         <td>item.listing_type_id.requiresPictures</td>
         <td>Item pictures are mandatory for listing type $item.listingTypeId</td>
         <td>Pictures is required.</td>
         <td>To see if the pictures is mandatory in category check the page <b>https://api.mercadolibre.com/categories/$categoryId/listing_types/silver</b> in parameter <b><i>requires_picture:{}</i></b>.</td>
      </tr>
      <tr>
         <td>item.site_id.invalid</td>
         <td>Site $item.siteId doesn't exist.</td>
         <td>$item.site_id is invalid.</td>
         <td>To the available sites, see the page <b>https://api.mercadolibre.com/sites</b>.</td>
      </tr>
      <tr>
         <td>item.shipping.mode.invalid</td>
         <td>No shipping mode can be used for this item. Check /users/$item.sellerId/shipping_modes?category_id=$item.categoryId" + (item.dimensions ? "&dimensions=$item.dimensions" : "</td>
         <td>Shipping mode is invalid.</td>
         <td>To see the available shipping modes in category check the page <b>https://api.mercadolibre.com/users/$userId/shipping_modes?category_id=$categoryId</b>.</td>
      </tr>
      <tr>
         <td>item.description.max</td>
         <td>The description field is too long. More than $maxSize characters is not allowed.</td>
         <td>Number of characters exceeded.</td>
         <td>The number of characters in description must be less then 50000 characters.</td>
      </tr>
      <tr>
         <td>item.pictures.max</td>
         <td>Items in category $item.categoryId cannot exceeds $maxPicturesPerItem pictures.</td>
         <td>Number of images exceeded.</td>
         <td>To see the quantity of pictures per item in category check the page <b>https://api.mercadolibre.com/categories/$categoryId</b> in parameter <b><i>max_pictures_per_item:{}</i></b>.</td>
      </tr>
   </tbody>
</table>

<script>

  window.onload = function() { startDrawing(); }

  function startDrawing(){
      $("#code").tabNavigator();

  }
</script>
