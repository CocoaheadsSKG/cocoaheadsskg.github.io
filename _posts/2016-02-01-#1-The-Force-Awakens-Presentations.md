---
layout: post
title:  Meetup 1 - "The Force Awakens" - Presentations
---
<script type="text/javascript">

  var presentation_1;
  var presentation_2;

  var presenter_1;
  var presenter_2;

  function initPresentation1(pres) {
    presentation_1 = pres;
    presenter_1 = new Presentz("#video-1", "460x407", "#slides-1", "460x407");
    presenter_1.init(presentation_1);
    presenter_1.changeChapter(0, 0, true, function(err) {
      if (err) {
        alert(err);
      }
    });
  }

function initPresentation2(pres) {
    presentation_2 = pres;
    presenter_2 = new Presentz("#video-2", "460x407", "#slides-2", "460x407");
    presenter_2.init(presentation_2);
    presenter_2.changeChapter(0,0, true, function(err){
        if (err) {
            alert(err);
        }
        })
}

  jQuery().ready(function() {
    jQuery.get("{{{ site.baseurl }}public/assets/presentations/Meetup-1-Presentation-1.json", function(json) {
      initPresentation1(json);
    });
    jQuery.get("{{{ site.baseurl }}public/assets/presentations/Meetup-1-Presentation-2.json", function(json) {
      initPresentation2(json);
    });
  });
</script>

We want to thank every sone of you for joining us in our first meetup; it was a blast! You can find the presented material below.

#### Introduction to Swift
<div class="clearfix">
  <div id="slides-1"></div>
  <div id="video-1"></div>
</div>

#### Testing iOS Applications
<div class="clearfix">
  <div id="slides-2"></div>
  <div id="video-2"></div>
</div>
