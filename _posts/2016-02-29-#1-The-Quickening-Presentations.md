---
layout: post
title:  Meetup 2 - "The Quickening" - Presentations
---
<script type="text/javascript">
  jQuery().ready(function() {
    var presentations = [
      {
        videoElement: '#video-1', videoSize: '460x407',
        slidesElement: '#slides-1', slidesSize: '460x407',
        jsonFile: '/public/assets/presentations/Meetup-2-Presentation-1.json',
        delay: 0
      },
      {
        videoElement: '#video-2', videoSize: '460x407',
        slidesElement: '#slides-2', slidesSize: '460x407',
        jsonFile: '/public/assets/presentations/Meetup-2-Presentation-2.json',
        delay: 2000
      },
    ];
    var presentationsApp = new PresentationsApp();
    presentationsApp.init(presentations);
  });
</script>

Hey CocoaHeads! Thank you everyone for joining us at our second meetup; codename *The Quickening*. Please find the presented material <a href="{{ page.url }}">here</a>.

<!--more-->

#### Introduction to RxSwift by [@gkravas](https://twitter.com/gkravas)
<div class="clearfix">
  <div id="slides-1"></div>
  <div id="video-1"></div>
</div>

#### Supporting 3D Touch on the iPhone by [@tsif](https://twitter.com/sprimp)
<div class="clearfix">
  <div id="slides-2"></div>
  <div id="video-2"></div>
</div>

#### Laying out a view programmatically using SnapKit by [@attheodo](https://twitter.com/attheodo)
<div class="clearfix">
<iframe width="560" height="315" src="https://www.youtube.com/embed/qv233NegW_M" frameborder="0" allowfullscreen></iframe>
</div>
