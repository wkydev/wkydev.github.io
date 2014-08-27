---
layout: page
title: Meetings
---

{% for meeting in site.data.meetings %}
  <div class="meeting" id="meeting-id-{{ meeting.id }}">
    <h2>{{ meeting.topic }}</h2>
    <p><em>{{ meeting.date | date: '%B %d, %Y' }} at {{ meeting.time }} - {{ meeting.speaker }}</em></p>
    <p>{{ meeting.topicSummary }}</p>
    <h3>Locations</h3>
    <ul>
      {% for location in meeting.locations %}<li><a href="{{ location.map_url }}">{{ location.name }}</a></li>
      {% endfor %}</ul>
  </div>
{% endfor %}
