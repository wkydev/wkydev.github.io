var Meetings = function() {
  var api = {};

  api.init = function() {
    var meetingContainer = $('.meetings');
    var meetingList = $('.meeting');

    if ($('.meeting').length) {
      // Build structure for meetings list
      meetingContainer.before('<h2 class="upcoming-header">Upcoming Meetings</h2>');
      meetingContainer.after('<h2>Past Meetings</h2><div class="archived"></div>');

      // Archive meetings that are in the past
      var diffDate = $.now() - 2*60*60*1000;
      meetingList.each(function(index, meeting) {
        var date = (new Date($(meeting).data('meeting-date'))).getTime();
        if (date < diffDate) {
          $(meeting).prependTo($('.archived'));
          $(meeting).find('.locations').hide();
        };
      });

      // If we archived every meeting, it means nothing is upcoming
      if (!$('.meetings > .meeting').length) {
        $('.upcoming-header').after('<p>No meetings scheduled.</p>');
      }
    }
  }

  return api;
}

$(document).ready(Meetings().init);
