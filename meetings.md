---
layout: page
title: Meetings
---
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="/public/js/site.js"></script>

<p><a href="/archive/">View Past Meetings</a></p>

<div class="meetings">
{% unless site.data.meetings %}
<p>No meetings scheduled.</p>
{% endunless %}
{% for meeting in site.data.meetings %}
<div class="meeting"
     id="meeting-id-{{ meeting.id }}"
     data-meeting-id="{{ meeting.id }}"
     data-meeting-date="{{ meeting.date | date: '%Y-%m-%dT%k:%M' }}">
  <h3><a href="#meeting-id-{{ meeting.id }}">{{ meeting.topic }}</a></h3>
  <p><em>{{ meeting.date | date: '%B %d, %Y' }} at {{ meeting.time }} - {{ meeting.speaker }}</em></p>
  <p>{{ meeting.topicSummary }}</p>

  {% if meeting.video_url or meeting.code_url %}
    <h4>Media</h4>
    <ul>
      <li><a href="{{ meeting.video_url }}">Video</a></li>
      <li><a href="{{ meeting.code_url }}">Code</a></li>
    </ul>
  {% endif %}

  {% if meeting.locations %}
    <div class="locations">
    <h4>Locations</h4>
      <ul>
        {% for location in meeting.locations %}<li><a href="{{ location.map_url }}">{{ location.name }}</a></li>
        {% endfor %}</ul>
    </div>
  {% endif %}
</div>
{% endfor %}
</div>
