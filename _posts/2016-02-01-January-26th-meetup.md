---
layout: post
title:  Meetup 1 - "The Force Awakens"
---
<script type="text/javascript">
  var presentation;
  var presentz;
  function initPresentz(pres) {
    presentation = pres;
    presentz = new Presentz("#player_video", "200x280", "#slideshow_player", "200x280")
    presentz.init(presentation);
    presentz.on("slidechange", function(prevChap, prevSlide, chap, slide) {
      $("#chapter").text("At chapter " + chap + ", slide " + slide);
    });
    presentz.changeChapter(0, 0, true, function(err) {
      if (err) {
        alert(err);
      }
    });
  }
  $().ready(function() {
    $.get("{{{ site.baseurl }}public/assets/presentations/1-the-force-awakens.json", function(json) {
      initPresentz(json);
    });
  });
</script>

#### When
January 26th 2016, 19:00

#### Where
[CoHo - The Coworking space](https://www.facebook.com/coho.gr)

#### What
* **Introduction to Swift** by [@tsif](https://twitter.com/sprimp)
* **Testing on iOS (Breaking the taboos)** by [@attheodo](https://twitter.com/attheodo)

#### Description
Happy New Year everyone!

There is a disturbance in the Force coming from a forgotten region of the Galaxy; the small city of Thessaloniki. After the long and mysterious disappearance of all the iOS and MacOS developers, a small delegation of a newly founded group, known as The New Rebellion, will be dispatched to investigate the matter and hopefully restore the injustice.

Your presence is considered of outmost importance.

<a href="http://www.meetup.com/CocoaHeadsSKG/events/227989805/" data-event="227989805" class="mu-rsvp-btn">RSVP</a> or
([Check the event on meetup.com](http://www.meetup.com/CocoaHeadsSKG/events/227989805/))

<div style="display: inline-block">
  <div id="player_video"></div>
  <div id="slideshow_player"></div>
</div>
<div id="chapter" style="float:left"></div
