---
layout: page
title: Categoría Jekyll
permalink: /categories/jekyll/
---

<div class="posts">
  {% for post in site.categories.jekyll %}
    <ul>
      <li>
        <span>{{ post.date | date: "%m/%d/%Y" }}</span> » <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
        <div class="cat">Archivado en: <a href="{{ site.baseurl }}/categories/{{ post.categories}}">{{ post.categories}}</a></div>
      </li>
    </ul>
  {% endfor %}
</div>
