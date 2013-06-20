---
layout: 2columns
title: SDKs Pattern
categories:
- sdks
- more tools
- samples
menu:
- Tools
tags:
- sdks
---

The Meli SDKs attend some requirements, they all must have at least this methods bellow, of course they can have private and helpers methods for internal usage, provided that they satisfy the pattern bellow

## Configuration File
The SDk must have a config file for Constant Data

#### Constants:
**API_ROOT_URL**, the url for the api

**SDK_VERSION**, the number version for SDK

**AUTH_URL**, the url for authentication in Meli plataform 

**OAUTH_URL**, the path for get token and refresh token in Meli plataform 


## Constructor
The constructor for Objects Meli

####Receive parameters:
**client_id**, ***Required***, Int, Number given when create a new application in [creating an application](http://developers.mercadolibre.com/creating-your-own-application/)

**client_secret**, ***Required***, String, String Hash given when create a new application in [creating an application](http://developers.mercadolibre.com/creating-your-own-application/)

**access_token**, Optional, String, String Hash given when authorize a application

**refresh_token**, Optional, String, String Hash given when authorize a application


####Return:
**Object**, Meli object with at least the methods, get_auth_url, authorize, do_refresh_token, get, post, put, delete

####Example
{% highlight python %}
meli = Meli(client_id=1234, client_secret"a secret", access_token="Access_Token", refresh_token="Refresh_Token")
{% endhighlight %}


## Authentication Methods
this section explain methods that will be used in Authentication flow

### Get Auth Url
Method that return the url, based in the parameters passed when construc the meli Object

####Receive parameters:
**redirect_uri**, ***Required***, String, A Url where the authentication will send the return and **code** param to proceed


####Return:
**String**, the authentication url with the params populated with the correct values

####Example
{% highlight python %}
auth_url = meli.get_auth_url(redirect_uri="a redirect url")
{% endhighlight %}


### Authorize
This method receive the code from Meli authentication and make the Post request to get the ***Access Token*** and ***Refresh Token***

####Receive parameters:
**code**, ***Required***, String, String hash received by Query Params from the redirect from meli authentication

**redirect_uri**, ***Required***, String, Url that will be the return from the authorize to receive the ***Access Token*** and ***Refresh Token***

####Return:
The variable access_token and refresh_token from Object Meli populated and
**String**, the String Hash access_token 

####Example
{% highlight python %}
meli.authorize(code="a code from get params", redirect_uri="a redirect uri")
print "New Access Token: " + meli.access_token
print "New Refresh Token: " + meli.refresh_token #only if the app have offline access
{% endhighlight %}

### Do Refresh Token
If exists a refresh_token variable populated, this method will send a post to oauth meli authentication and receive a new ***Access Token*** and ***Refresh Token***

####Receive parameters:
**None**

####Return:
The variable access_token and refresh_token from Object Meli populated and
**String**, the String Hash for the new access_token 

####Example
{% highlight python %}
#only if the app have offline access
meli.do_refresh_token()
print "New Access Token: " + meli.access_token
print "New Refresh Token: " + meli.refresh_token 
{% endhighlight %}

## Request Methods
This section will show the methods that make the requests 

### Get
This method make a HTTP GET call to a url

####Receive parameters:
**path**, ***Required***, String, String with the path to the API that will be send the GET request

**params**, Optional, Hash, a hash with the params that will be send by GET request

####Return:
**Object**, a HTTP Response Object with at least HTTP CODE and Content(Body) Data 

####Example
{% highlight python %}
response = meli.get(path="/items/123")
print "Status Code: " + response.status_code
print "JSON content: " + response.body
{% endhighlight %}

### Post
This method make a HTTP POST call to a url

####Receive parameters:
**path**, ***Required***, String, String with the path to the API that will be send the POST request

**params**, ***Required***, Hash, a hash with the params that will be send by POST request, at least the access_token

**body**, Optional, Hash, a hash with the params that will be send by POST request
***OBS: here you can have two approaches, the Body can be a Hash for you language and in the moment of the Request that will be converted in JSON OR this body already will be a JSON***

####Return:
**Object**, a HTTP Response Object with at least HTTP CODE and Content(Body) Data 

####Example
{% highlight python %}
body = {'foo':'bar'}
response = meli.post(path="/items", body=body, params={'access_token':meli.access_token})
print "Status Code: " + response.status_code
print "JSON content: " + response.body
{% endhighlight %}

### Put
This method make a HTTP PUT call to a url

####Receive parameters:
**path**, ***Required***, String, String with the path to the API that will be send the PUT request

**params**, ***Required***, Hash, a hash with the params that will be send by PUT request, at least the access_token

**body**, Optional, Hash, a hash with the params that will be send by PUT request
***OBS: here you can have two approaches, the Body can be a Hash for you language and in the moment of the Request that be converted in JSON OR this body already will be a JSON***

####Return:
**Object**, a HTTP Response Object with at least HTTP CODE and Content(Body) Data 

####Example
{% highlight python %}
body = {'foo':'bar'}
response = meli.put(path="/items/123", body=body, params={'access_token':meli.access_token})
print "Status Code: " + response.status_code
print "JSON content: " + response.body
{% endhighlight %}

### Delete
This method make a HTTP DELETE call to a url

####Receive parameters:
**path**, ***Required***, String, String with the path to the API that will be send the DELETE request

**params**, ***Required***, Hash, a hash with the params that will be send by DELETE request, at least the access_token

####Return:
**Object**, a HTTP Response Object with at least HTTP CODE and Content(Body) Data 

####Example
{% highlight python %}
response = meli.delete(path="/questions/123", params={'access_token':meli.access_token})
print "Status Code: " + response.status_code
print "JSON content: " + response.body
{% endhighlight %}

## I want to contribute!

Excellent! Create a SDK, write some Tests and Documentation and Let us Know, maybe you can be in the Third Party SDKs Section.

Thanks for helping!
