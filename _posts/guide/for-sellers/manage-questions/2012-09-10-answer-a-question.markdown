---
layout: guides
title: Answer a question
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
var uri = "/answers?access_token=" + MELI.getToken()
var param = {
  question_id:QUESTION_ID,
  text:"Some text here..."
}
MELI.post(uri, param, function(data) {
  //Your code
});
{% endhighlight %}
    </div>
    <div id="php">
{% highlight php5 %}
<?php
$answer = array(
  "question_id" => QUESTION_ID,
  "text" => "Some text here..."
);
$item = $meli->post("/answers", $answer, array('access_token' => $_SESSION['access_token']));
?>
{% endhighlight %}
    </div>
    <div id="java">
{% highlight java %}
FluentStringsMap params = new FluentStringsMap();
params.add("access_token", m.getAccessToken());
Response r = m.post("/answers", params, "{\"question_id\":QUESTION_ID,\"text\":\"Some text here...\"}");
{% endhighlight %}
    </div>
    <div id="net">
{% highlight csharp %}
var p = new Parameter ();
p.Name = "access_token";
p.Value = m.AccessToken;

var ps = new List<Parameter> ();
ps.Add (p);
IRestResponse r = m.Post ("/answers", ps, new {question_id:QUESTION_ID,text:"Some text here...."});
{% endhighlight %}
    </div>
  </div>
</div>

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

<script>

  window.onload = function() { startDrawing(); }

  function startDrawing(){
      $("#code").tabNavigator();

  }
</script>

