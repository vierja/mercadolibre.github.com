---
layout: guides
title: Delete a question
categories: 
- listing
- manage listings
- orders
- manage questions
- shipping
menu: 
- Listing &amp; Selling
tags: 
- manage questions
---

Sometimes you may want to delete a question someone has made you.

Just do a DELETE request with the question ID and an access token of the seller of that item.

<pre class="terminal">
curl -X DELETE 'https://api.mercadolibre.com/questions/${question_id}?access_token=$ACCESS_TOKEN'
</pre>

Successful response

{% highlight javascript %}

{"message":"Question deleted."}

{% endhighlight %}

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
   </tbody>
</table>

