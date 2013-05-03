---
layout: guides
title: Adding description
categories: 
- Listing
- Manage Listings
- Orders
- Manage Questions
- Shipping
menu: 
- Listing &amp; Selling
tags: 
- Manage Listings
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

##Error Codes Reference {#error-codes}

See <a href="/list-your-item/#error-codes">this link</a> to check for most common errors. For further assistance, please check our <a href='/community' target='_blank'>forums</a> or connect to our irc channel (#meli@irc.freenode.net). In case you find an issue in our API, please report it on <a href='https://github.com/mercadolibre/api/issues' target='_blank'>GitHub</a>.
