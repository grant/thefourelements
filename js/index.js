$(function () {
  var $swf = $('.swf');
  resizeFlash($swf);

  $(window).on('resize orientationchange', function () {
    resizeFlash($swf);
    setTimeout(function () {
      resizeFlash($swf);
    }, 1);
  });

  /**
   * Resizes the flash game to fit it (not cover) the parent area
   */
  function resizeFlash($swf) {
    if ($swf && $swf.length) {
      var $parent = $swf.parent();
      var parentWidth = $parent.width();
      var parentHeight = $parent.height();

      var swfRatio = $swf.data('aspectratio');
      swfRatio = +swfRatio.split(':')[0] / +swfRatio.split(':')[1];
      var parentRatio = parentWidth / parentHeight;

      var margin = 0;
      if (swfRatio < parentRatio) {
        // Use 100% height
        var width = parentHeight * swfRatio;
        margin = (parentWidth - width) / 2;
        $swf.css({
          'width': width + 'px',
          'height': '100%',
          'margin-top': 0,
          'margin-left': margin
        });
      } else {
        // Use 100% width
        var height = parentWidth / swfRatio;
        margin = (parentHeight - height) / 2;
        $swf.css({
          'width': '100%',
          'height': height + 'px',
          'margin-top': margin,
          'margin-left': 0
        });
      }
    }
  }
});