var PresentationsApp = function() {
  this.presentations = [];
  this.presenters = [];
};

PresentationsApp.prototype.initPresentation = function(index, data) {
  var presentation = this.presentations[index];
  var presenter = this.presenters[index];
  presenter = new Presentz(presentation.videoElement, presentation.videoSize, presentation.slidesElement, presentation.slidesSize);
  presenter.init(data);
  presenter.changeChapter(0, 0, false, function(err) {
    if (err) {
      alert(err);
    }
  });
};

PresentationsApp.prototype.fetchJson = function(index) {
  var presentation = this.presentations[index];
  var self = this;
  jQuery.get(presentation.jsonFile, function(data) {
    setTimeout(function() { self.initPresentation(index, data); }, presentation.delay);
  });
};

PresentationsApp.prototype.init = function(presentations) {
  for (var i = 0; i < presentations.length; i++) {
    this.presentations.push(presentations[i]);
    this.presenters.push({});
    this.fetchJson(i);
  }
};
