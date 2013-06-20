---
layout: 2columns
title: Python SDK
categories:
- sdks
- more tools
- samples
menu:
- Tools
tags:
- sdks
---



The Python SDK enables you to access the API from a web application developed in [Pyhton](http://www.pyhton.org/).
It hides all the complexity of OAuth 2.0 and lets you focus on writing application code.

You'll find the source code in the following location: [https://github.com/mercadolibre/python-sdk](https://github.com/mercadolibre/python-sdk)

With the source code you'll find documentation on how to use the SDK.

The first thing to do is to instance a __Meli__ class. You'll need to give a __clientId__ and a __clientSecret__. You can obtain both after creating your own application. For more information on this please read: [creating an application](http://developers.mercadolibre.com/creating-your-own-application/)

### Including the Lib
Include the lib meli in your project

{% highlight python %}
import sys
sys.path.append('../lib')
from meli import Meli
{% endhighlight %}
Start the development!

### Create an instance of Meli class
Simple like this
{% highlight python %}
meli = Meli(client_id=1234, client_secret="a secret")
{% endhighlight %}
With this instance you can start working on MercadoLibre's APIs.

There are some design considerations worth to mention.

1. This SDK is just a thin layer on top of an http client to handle all the OAuth WebServer flow for you.

2. There is JSON parsing.this SDK will include [json](http://pythongems.org/gems/json) gem for internal usage.

3. If you already have the access_token and the refresh_token you can pass in the constructor

{% highlight python %}
meli = Meli(client_id=1234, client_secret"a secret", access_token="Access_Token", refresh_token="Refresh_Token")
{% endhighlight %}
#### Making GET calls

{% highlight python %}
params = {'access_token' : meli.access_token}
response = meli.get(path="/users/me", params=params)
{% endhighlight %}
#### Making POST calls

{% highlight python %}
params = {'access_token' : meli.access_token}

 #this body will be converted into json for you
body = {'foo'  : 'bar', 'bar' : 'foo'}

response = meli.post(path="/items", body=body, params=params)
{% endhighlight %}

#### Making PUT calls

{% highlight python %}
params = {'access_token' : meli.access_token}

 #this body will be converted into json for you
body = {'foo'  : 'bar', 'bar' : 'foo'}

response = meli.put(path="/items/123", body=body, params=params)
{% endhighlight %}

#### Making DELETE calls
{% highlight python %}
params = {'access_token' : meli.access_token}
response = meli.delete(path="/questions/123", params=params)
{% endhighlight %}

## Examples

Don't forget to check out our [examples](https://github.com/mercadolibre/python-sdk/tree/master/examples) codes

## I want to contribute!

That is great! Just fork the project in [GitHub](https://github.com/mercadolibre/python-sdk). Create a topic branch, write some code, and add some tests for your new code.

Thanks for helping!
