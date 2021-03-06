---
layout: 2columns
title: Build your SDK!
categories:
- sdks
- more tools
- samples
menu:
- Tools
tags:
- sdks
---

## Build your SDK!

We currently have SDKs available for [Javascript](/javascript-sdk), [PHP](/php-sdk), [Java](/java-sdk), [.NET](/net-sdk), [Ruby](/ruby-sdk) and [Python](/python-sdk). Check them out and feel free to make a pull request in GitHub if you feel like suggesting some changes.

But why stop there? You can contribute to our dev community and help us grow our available SDKs list by creating one of your own in any desired programming language. It’s really easy! All we ask from you is to adapt to Meli's SDKs standards and methods lists we have established, to provide other devs seamless migration from one language to another.

Start working on your own SDK now, and remember to include documentation and tests. Let us know when you’re done at developers@mercadolibre.com. We'll check it asap and return the favor with a big fat thank you note in our dev platform.

For us to make your SDK public in our Meli SDKs list, please consider the following guide:


<br />
#### Table of contents
+ - [Configuration file](#configuration_file)

+ - [Constructor](#constructor)

+ - [Authorization methods](#authorization_methods)

+ - [Request methods](#request_methods)


## Configuration file

Your SDK must have a config file for contants, which are:


**API_ROOT_URL:** Meli API URL (eg: https://api.mercadolibre.com/)

**SDK_VERSION:** Current version of your SDK (eg: 1.0)

**AUTH_URL:** Meli Authentication URL (eg: https://auth.mercadolibre.com.ar/)

**OAUTH_URL:** Meli OAUTH URL, used to get access &amp; refresh tokens (eg: https://api.mercadolibre.com/oauth)


## Constructor


The constructor for MELI objects. Must have the following input parameters:


{:.borderOn}
| Field         | Type       | Required  | Description                             |
| ------------- |:----------:| ---------:| ---------------------------------------:|
| client_id | int | yes | ID provided when creating a MELI APP (link to create app guide) | 
| client_secret | string | yes | Hash string key provided when creating a MELI APP (link to create app guide) | 
| access_token | string | optional | Used to talk to our API resources that require credentials (eg: POST to /items). | 
| refresh_token | string | optional | Hash string provided when a user authorizes an A P. Used to get a new valid access_token (only available when offline_access scope in APP settings is checked). |


<br />
The constructor must return an Object.


<br />
Example:

{% highlight javascript %}
myMeliObject = new Meli(
	client_id=1234, 
	client_secret"my_secret_key", 
	[access_token="an_access_token"], 
	[refresh_token="a_refresh_token"]
)
{% endhighlight %}


<br />
This Meli object must contain, at least, the following methods:


<br />
**Authorization methods:** GetAuthURL, Authorize, RefreshAccessToken.

**Request methods:** GET, POST, PUT, DELETE.


<br />
<br />
## Authorization methods


<br />
Make sure you have read our Authentication &amp; Authorization section (link to that section) to fully understand what these three methods must do.

<br />
GetAuthURL(string redirect_uri)


{:.borderOn}
| Field         | Type       | Required  | Description                             |
| ------------- |:----------:| ---------:| ---------------------------------------:|
| redirect_uri | string | yes | Callback URL to which the user will be redirected after granting permission to the Meli APP. The code required to obtain the first access_token (required in Authorize method) will be appended to this URL when making this redirect. |


<br />
Example:

{% highlight ruby %}
myAuthURL = myMeliObject.getAuthURL('http://www.mydomain.com/mercadolibre')
{% endhighlight %}



<br />
<br />
Authorize(string code, string redirect_uri)


{:.borderOn}
| Field         | Type       | Required  | Description                             |
| ------------- |:----------:| ---------:| ---------------------------------------:|
|code |string |yes |Code received at redirect_uri when user granted permission to the Meli APP.|
|redirect_uri |string |yes |Callback URL to which the API will send the access &amp; refresh tokens. Must be the same as the one configured in the Meli APP settings.|


<br />
Example:

{% highlight ruby %}
myAuthorization = myMeliObject.authorize('TG-1234', 'http://www.mydomain.com/mercadolibre')
print myAuthorization.access_token
print myAuthorization.refresh_token
{% endhighlight %}


<br />
RefreshAccessToken()


This method will only be used for APPs with offline_access scope checked. It does not require input parameters and must use the refresh_token within the Meli Object created (eg: myMeliObject.refresh_token) and exchange it for a new access_token and refresh_token.


<br />
Example:

{% highlight ruby %}
myNewTokens = myMeliObject.refreshAccessToken()
print myNewTokens.access_token
print myNewTokens.refresh_token
{% endhighlight %}


<br />
<br />
## Request methods


<br />
These methods must handle the four basic HTTP verbs: GET, POST, PUT, DELETE.


<br />
GET(string path, [string params])


{:.borderOn}
| Field         | Type       | Required  | Description                             |
| ------------- |:----------:| ---------:| ---------------------------------------:|
|path |string |yes |API resource path to which the GET request will be sent to.	   |
|params|string | optional | Additional params (if required).|


<br />
Example:

{% highlight ruby %}
myResponse = myMeliObject.get('/items/MLA12345678')
print "Status code: " + myResponse.status_code
print "JSON content: " +myResponse.body
{% endhighlight %}


<br />
POST(string path, [string params], [string body])


{:.borderOn}
| Field         | Type       | Required  | Description                             |
| ------------- |:----------:| ---------:| ---------------------------------------:|
| path | string | yes | API resource path to which the POST request will be sent to. | 
| body | string | optional | Body to be sent when executing the POST request. | 
| params | string | optional | Additional params (if required). |


<br />
Example:

{% highlight ruby %}
myBody = {'foo':'bar'}
myResponse = myMeliObject.post('/items/MLA12345678', [myBody], [params])
print "Status code: " + myResponse.status_code
print "JSON content: " +myResponse.body
{% endhighlight %}


<br />
PUT(string path, [string params], [string body])


{:.borderOn}
| Field         | Type       | Required  | Description                             |
| ------------- |:----------:| ---------:| ---------------------------------------:|
| path | string | yes | API resource path to which the PUT request will be sent to. | 
| body | string | optional | Body to be sent when executing the PUT request. | 
| params | string | optional | Additional params (if required). | 


<br />
Example:

{% highlight ruby %}
myBody = {'foo':'bar'}
myResponse = myMeliObject.put('/items/MLA12345678', [myBody], [params])
print "Status code: " + myResponse.status_code
print "JSON content: " +myResponse.body
{% endhighlight %}


<br />
DELETE(string path, [string params])


{:.borderOn}
| Field         | Type       | Required  | Description                             |
| ------------- |:----------:| ---------:| ---------------------------------------:|
| path | string | yes | API resource path to which the DELETE request will be sent to. | 
| params | string | optional | Additional params (if required). | 


<br />
Example:

{% highlight ruby %}
myResponse = myMeliObject.delete('/questions/1234', [params])
print "Status code: " + myResponse.status_code
print "JSON content: " +myResponse.body
{% endhighlight %}



## Got it all? Great!


Need help? Check our [forums](/community). There’s a big chance that someone has already faced the same problem you are and there’s a big community ready to help you 24/7. Thanks so much for contributing!
