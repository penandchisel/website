(function($) {
  var _ENTRY_TEMPLATE =
      '<div class="media">' +
        '<a href="{url}">' +
          '<i class="fa fa-fw fa-3x {icon} pull-left"></i>' +
          '<div class="media-body"> ' +
            '<p class="text-primary"><strong>{title}</strong></p>' +
            '<p class="text-primary">{formattedDate}</p>' +
          '</div>' +
        '</a>' +
      '</div>';
  var _ICONS = [
      'fa-asterisk',
      'fa-bell',
      'fa-book',
      'fa-coffee',
      'fa-leaf',
  ];
  var _PNC_FEED_URL = 'http://blog.penandchisel.com/feed/';

  function getDate(entry) {
    var date = new Date(entry.publishedDate);
    return (
        date.getFullYear() + '/' + (date.getMonth() + 1) +
        '/' + date.getDate());
  }

  function getIcon() {
    var i = Math.floor(Math.random() * _ICONS.length);
    var name = _ICONS[i];
    _ICONS.splice(i, 1);
    return name;
  }

  $(function($) {
    $('#blog-content').rss(_PNC_FEED_URL, {
      'entryTemplate': _ENTRY_TEMPLATE,
      'layoutTemplate': '<div>{entries}</div>',
      'limit': 5,
      'tokens': {
          'formattedDate': function(entry, tokens) { return getDate(entry); },
          'icon': function(entry, tokens) { return getIcon(); }
      }
    });
  })
})(jQuery);
