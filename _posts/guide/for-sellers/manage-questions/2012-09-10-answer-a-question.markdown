---
layout: guides
title: Answer a question
categories: 
- Listing
- Manage Listings
- Orders
- Manage Questions
- Shipping
menu: 
- Listing &amp; Selling
tags: 
- Manage Questions
---

We also provide a way to answer a question.

First, let's check all the questions on our own item. You can do a GET request with the Item ID and an access token of the seller of that item.

<pre class="terminal">
curl 'https://api.mercadolibre.com/questions/search?item_id=ITEM_ID&amp;access_token=XXXX'
</pre>

You can check all unanswered questions about this item through the STATUS attribute.

Let's answer a question

<pre class="terminal">
curl -i -X POST -H "Content-Type: application/json" -d 
'{
	question_id: QUESTION_ID, 
	text:"Some text here..."
}'

https://api.mercadolibre.com/answers?access_token=XXXX
</pre>

We also provide a [Notifications API](/notifications). Listening to Notifications enables you to have a real-time feed of the changes that occur on the different resources of the MercadoLibre API.

##Error Codes Reference {#error-codes}

<table class="ch-datagrid errors-code" style='width: 691px'>
    <thead>
      <tr>
         <th cope="col">Error_code</th>
         <th cope="col">Error message</th>
         <th cope="col">Description</th>
         <th cope="col" style='width: 290px'>Possible solution</th>
      </tr>
    </thead>
    <tbody>
      <tr>
         <td>invalid_question</td>
         <td>The question is invalid.</td>
         <td>Cannot answer question.</td>
         <td>The parameter question_id must be a integer number. (To search your question call the resource <b><i>/questions/search</i></b>).</td>
      </tr>
      <tr>
         <td>invalid_post_body</td>
         <td>Invalid JSON. Valid attributes are: {0}.</td>
         <td>Invalid parameters.</td>
         <td>Expected parameters are <b><i>question_id</i></b> and <b><i>text</i></b>.</td>
      </tr>
   </tbody>
</table>
