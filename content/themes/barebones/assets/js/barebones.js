;(function($, shortname, d, w, undefined) {
  "use strict";

  var DISQUS_ID = '#disqus_thread';
  var DISQUS_URL = ['//', shortname, '.disqus.com/embed.js'].join("");
  var ADD_CLASSES = {
    pre: 'prettyprint',
    blockquote: 'blockquote'
  };

  var $nav = $('.navbar-fixed-top');

  var addClasses = function() {
    for(var c in ADD_CLASSES) {
      $(c).addClass(ADD_CLASSES[c]);
    }
  };

  var loadDisqus = function() {
    return $('<script/>', {
      async: true,
      src: DISQUS_URL,
      data: { timestamp: +new Date() }
    });
  };

  var disqus_config = function () {
    this.page.url = location.href;
    this.page.identifier = location.pathname;
  };

  $(w).one('scroll', function(event) {
    $('body').has(DISQUS_ID)
      .append(loadDisqus())
      .find(DISQUS_ID)
      .delay(800)
      .fadeTo(null, 1);
  });
  
  $(w).scroll({st: 0}, function(event) {
    var sn = $(w).scrollTop();
    var x = (sn < this.st) ? $nav.slideDown() : $nav.slideUp();
    this.st = sn;
  });

  addClasses();

  $('[data-toggle="tooltip"]').tooltip({
    container: 'body',
    placement: 'top'
  });

})(jQuery, disqus_shortname, document, window, undefined);
