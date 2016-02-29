---
layout: post
title:  Meetup 2 - "The Quickening" - Presentations
---
<script type="text/javascript">
  var presentations = [
    {
      videoElement: '#video-3', videoSize: '460x407',
      slidesElement: '#slides-3', slidesSize: '460x407',
      jsonFile: '/public/assets/presentations/Meetup-2-Presentation-1.json',
      delay: 0
    },
    {
      videoElement: '#video-4', videoSize: '460x407',
      slidesElement: '#slides-4', slidesSize: '460x407',
      jsonFile: '/public/assets/presentations/Meetup-2-Presentation-2.json',
      delay: 2000
    },
  ];

  var presenters = [{}, {}];

  function initPresentation(index, data) {
    var presentation = presentations[index];
    var presenter = presenters[index];
    presenter = new Presentz(presentation.videoElement, presentation.videoSize, presentation.slidesElement, presentation.slidesSize);
    presenter.init(data);
    presenter.changeChapter(0, 0, false, function(err) {
      if (err) {
        alert(err);
      }
    });
  }

  function fetchJson(index) {
    var presentation = presentations[index];
    jQuery.get(presentation.jsonFile, function(data) {
      setTimeout(function() { initPresentation(index, data); }, presentation.delay);
    });
  }

  jQuery().ready(function() {
    for (var i = 0; i < presentations.length; i++)
      fetchJson(i);
  });
</script>

Hey CocoaHeads! Thank you everyone for joining us at our second meetup; codename *The Quickening*. Please find the presented material below.

#### Introduction to RxSwift by [@gkravas](https://twitter.com/gkravas)
<div class="clearfix">
  <div class="slides" id="slides-3"></div>
  <div class="video" id="video-3"></div>
</div>

#### Supporting 3D Touch on the iPhone by [@tsif](https://twitter.com/sprimp)
<div class="clearfix">
  <div class="slides" id="slides-4"></div>
  <div class="video" id="video-4"></div>
</div>
