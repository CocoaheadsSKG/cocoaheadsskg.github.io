---
layout: post
title:  Meetup 1 - "The Force Awakens" - Presentations
---
<script type="text/javascript">
  jQuery().ready(function() {
    var presentations = [
      {
        videoElement: '#video-1', videoSize: '460x407',
        slidesElement: '#slides-1', slidesSize: '460x407',
        jsonFile: '/public/assets/presentations/Meetup-1-Presentation-1.json',
        delay: 0
      },
      {
        videoElement: '#video-2', videoSize: '460x407',
        slidesElement: '#slides-2', slidesSize: '460x407',
        jsonFile: '/public/assets/presentations/Meetup-1-Presentation-2.json',
        delay: 2000
      },
    ];
    var presentationsApp = new PresentationsApp();
    presentationsApp.init(presentations);
  });
</script>

We want to thank every sone of you for joining us in our first meetup; it was a blast! You can find the presented material <a href="{{ page.url }}">here</a>.

<!--more-->

#### Introduction to Swift by [@tsif](https://twitter.com/sprimp)
<div class="clearfix">
  <div id="slides-1"></div>
  <div id="video-1"></div>
</div>

#### Testing iOS Applications by [@attheodo](https://twitter.com/attheodo)
<div class="clearfix">
  <div id="slides-2"></div>
  <div id="video-2"></div>
</div>
