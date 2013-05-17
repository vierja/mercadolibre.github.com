---
layout: events
title: Next events
categories: 
- events
menu: 
- Events
---


<section class="main main-content">
    <h1>{{ page.title }}</h1>
    {% for category in page.categories %}
        {% for post in site.tags.new | sort:date %}
          <div class="box-event">
            <h3>{{ post.boxTitle }}</h3>
            <div class="middle">
              <div class="info-left">
                <h4>{{ post.boxText }}</h4>
                <a href="{{ post.url }}">Summary.</a>
              </div>
                <a href="{{ post.url }}" class='banner-right'><img alt="1st MercadoLibre Developers Conference - Argentina" src="../images/{{ post.imageRight }}" ></a>
            </div>
          </div>
        {% endfor %}
    {% endfor %}
</section>


{% include menu-events.html %}


