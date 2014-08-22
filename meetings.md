---
layout: page
title: Meetings
---

{% for meeting in site.data.meetings %}
  <div class="meeting">
    <h2>{{ meeting.topic }}</h2>
    <p>{{ meeting.topicSummary }}</p>
    <dl>
      <dt>Speaker</dt>
        <dd>{{ meeting.speaker }}</dd>
      <dt>When</dt>
        <dd>{{ meeting.date | date: '%B %d, %Y' }} at {{ meeting.time }}</dd>
      <dt>Where</dt>
        <dd>
          <a href="{{ meeting.map_url }}">{{ meeting.location }}</a>
        </dd>
    </dl>
  </div>
{% endfor %}
