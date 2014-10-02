var Meetings = function() {
  var api = {};

  api.init = function() {
    api.addElements();
    api.archivePast();
  }

  api.addElements = function() {
    $('.meetings').before('<h2>Upcoming Meetings</h2>');
    $('.meetings').after('<h2>Past Meetings</h2><div class="archived"></div>');
  }

  api.archivePast = function() {
    var now = $.now();
    $('.meeting').each(function(index, meeting) {
      var date = (new Date($(meeting).data('meeting-date'))).getTime();
      if (date < now) $(meeting).appendTo($('.archived'));
    });
  }

  return api;
}

$(document).ready(Meetings().init);