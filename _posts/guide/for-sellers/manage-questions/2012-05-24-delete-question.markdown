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

Deleting with our SDK's

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
var uri = "/questions/QUESTION_ID?access_token=" + MELI.getToken()
var param = {}
MELI.remove(uri, param, function(data) {
  //Your code
});
{% endhighlight %}
    </div>
    <div id="php">
{% highlight php5 %}
<?php
$question = $meli->deleteWithAccessToken("/questions/QUESTION_ID");
?>
{% endhighlight %}
    </div>
    <div id="java">
{% highlight java %}
FluentStringsMap params = new FluentStringsMap();
params.add("access_token", m.getAccessToken());
Response r = m.delete("/questions/QUESTION_ID", params);
{% endhighlight %}
    </div>
    <div id="net">
{% highlight csharp %}
var p = new Parameter ();
p.Name = "access_token";
p.Value = m.AccessToken;

var ps = new List<Parameter> ();
ps.Add (p);
IRestResponse r = m.Delete ("/questions/QUESTION_ID", ps);
{% endhighlight %}
    </div>
  </div>
</div>

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

<script>

  window.onload = function() { startDrawing(); }

  function startDrawing(){
      $("#code").tabNavigator();
  }
</script>
