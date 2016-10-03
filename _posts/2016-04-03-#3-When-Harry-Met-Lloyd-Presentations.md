---
layout: post
title:  Meetup 3 - "When Harry Met Lloyd" - Presentations
---
<script type="text/javascript">
  jQuery().ready(function() {
    var presentations = [
      {
        videoElement: '#video-1', videoSize: '460x407',
        slidesElement: '#slides-1', slidesSize: '460x407',
        jsonFile: '/public/assets/presentations/Meetup-3-Presentation-1.json',
        delay: 0
      },
      {
        videoElement: '#video-2', videoSize: '460x407',
        slidesElement: '#slides-2', slidesSize: '460x407',
        jsonFile: '/public/assets/presentations/Meetup-3-Presentation-2.json',
        delay: 2000
      },
    ];
    var presentationsApp = new PresentationsApp();
    presentationsApp.init(presentations);
  });
</script>

Thank you all for coming to our latest meetup, codename *When Harry Met Lloyd*. Nice catching up with ya all! Please find the presented material <a href="{{ page.url }}">here</a>.

<!--more-->

#### iOS Link Handling by [@tsif](https://twitter.com/sprimp)
<div class="clearfix">
  <div id="slides-1"></div>
  <div id="video-1"></div>
</div>

#### Towards Continuous Delivery with Fastlane [@attheodo](https://twitter.com/attheodo)
<div class="clearfix">
  <div id="slides-2"></div>
  <div id="video-2"></div>
</div>
