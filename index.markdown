---
title: Index
layout: default
---

<div class="container">
  <ul class="thumbnails">
    {% for project in site.pages.projects.pages %}
      {% for project in project.taxonomy.tags.featured.posts %}
      <li class="thumbnail">
        <a href="{{ project.url }}">
          {% capture img %}/assets/img{{ project.url }}/thumb/{{project.title | handleize}}-s1{% endcapture %}
          {% include img.html %}
        </a>
      </li>
      {% endfor %}
    {% endfor %}
  </ul>
</div>
