var loadPage = function(url, replaceMenu, replaceContent) {
  if (url) {
    $('body').addClass('is-loading');

    var header = $('#scape-header');
    var container = header.find('.content');

    $.ajax({
      type: 'GET',
      url: url,
      dataType: 'html',
      cache: false,
    }).done(function(response) {
      try {
        var html = $('<div />').html(response);

        if (replaceMenu || container.hasClass('has-no-posts')) {
          // Load a menu that has posts
          var newHeader = html.find('#scape-header');

          if (newHeader && newHeader.length > 0) {
            header.replaceWith(newHeader);
          }
        }

        if (replaceContent) {
          $('body').removeClass('show-header');
          var content = html.find('#scape-content');
          $('#scape-content').replaceWith(content);

          var title = $('head title');
          title.text(html.find('title').text());
          document.title = title.text();

          if (window.history && history.pushState) {
            history.pushState({ url: url }, document.title, url);
          }
        }
      } catch(err) { }

      $('body').removeClass('is-loading');
      initPage();
    });
  }
};

var initPage = function() {
  // Set header min height
  var header = $('#scape-header');
  var top = header.find('.top');
  var bottom = header.find('.bottom');
  var container = header.find('.content');

  container.css({
    minHeight: header.outerHeight() - top.outerHeight() - bottom.outerHeight()
  });

  // Update intro
  var content = $('#scape-content');
  var intro = content.find('#scape-header-image-wrapper');
  content.find('.post-meta').appendTo(intro.find('.container').first().empty());

  $('time').not('.initiated').each(function() {
    var time = $(this).addClass('initiated');
    time.text(moment(time.attr('datetime')).fromNow());
  });

  if ($.fn.fitVids) {
    $("#scape-content").fitVids();
  }

  if (hljs) {
    hljs.initHighlightingOnLoad();
  }
};

(function($) {
  $(function() {
    $(window).on('resize orientationchange', initPage).trigger('resize');

    $('#scape-header').on('click', 'a', function(e) {
      e.preventDefault();

      var url = $(this).attr('href');
      var isLogoButton = $(this).is('#home-url');
      var isMenuButton = $(this).hasClass('button');

      loadPage(url, isMenuButton || isLogoButton, !isMenuButton);
    });

    $('#scape-menu-toggle').on('click', function(e) {
      e.preventDefault();

      $('body').toggleClass('show-header');
    });

    // Load menu if needed
    if ($('#scape-header').find('.content').hasClass('has-no-posts')) {
      var url = $('#home-url').attr('href');
      loadPage(url, true, false);
    }

    window.onpopstate = function(e) {
      loadPage(e.state.url, false, true);
    };
  });

})(jQuery);
