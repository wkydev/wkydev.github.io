var Meetings = function() {
  var api = {};

  archiveMeeting = function(meeting) {
    $(meeting).prependTo($('.archived'));
    $(meeting).find('.locations').hide();
  }

  api.init = function() {
    api.addElements();
    api.archivePast();
  }

  api.addElements = function() {
    $('.meetings').before('<h2>Upcoming Meetings</h2>');
    $('.meetings').after('<h2>Past Meetings</h2><div class="archived"></div>');
  }

  api.archivePast = function() {
    var diffDate = $.now() - 2*60*60*1000;
    $('.meeting').each(function(index, meeting) {
      var date = (new Date($(meeting).data('meeting-date'))).getTime();
      if (date < diffDate) archiveMeeting(meeting);
    });
  }

  return api;
}

$(document).ready(Meetings().init);
