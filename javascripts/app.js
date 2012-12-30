$(document).ready(function (){
  var maxHoleSize = 4;
  var currentHoleSize = maxHoleSize;
  console.log("ready");
  $('#page').on("mousewheel", function() {
    var scrollPosition = $(document).scrollTop();
    console.log(scrollPosition);
    currentHoleSize = 6 - scrollPosition/190;
    console.log(currentHoleSize);
    $('#page').css({'background-image':
      '-webkit-radial-gradient(rgba(0, 0, 0, .1) '+currentHoleSize+'px, #F1F1F1 1px)'});
    var youtubeVolume = (100 - scrollPosition/10);
    console.log(youtubeVolume);
    ytplayer.setVolume(youtubeVolume);

  });
});

// var params = { allowScriptAccess: "always", allowFullScreen: "true" };
// var atts = { id: "youtubevideo" };
// swfobject.embedSWF("http://www.youtube.com/v/3wPK3VIeT8I?enablejsapi=1&playerapiid=ytplayer&version=3",
//     "youtubevideo", "1200", "720", "8", null, null, params, atts);

function onYouTubePlayerReady(playerId) {
  console.log('player ready');
  ytplayer = document.getElementById("youtubevideo");
}

// $(function() {
//
//   // Find all YouTube videos
//   var $allVideos = $("iframe[src^='http://www.youtube.com']"),
//
//   // The element that is fluid width
//   $fluidEl = $("body");
//
// // Figure out and save aspect ratio for each video
// $allVideos.each(function() {
//
//   $(this)
//   .data('aspectRatio', this.height / this.width)
//
//   // and remove the hard coded width/height
//   .removeAttr('height')
//   .removeAttr('width');
//
// });
//
// // When the window is resized
// // (You'll probably want to debounce this)
// $(window).resize(function() {
//
//   var newWidth = $fluidEl.width();
//
//   // Resize all videos according to their own aspect ratio
//   $allVideos.each(function() {
//
//     var $el = $(this);
//     $el
//     .width(newWidth)
//     .height(newWidth * $el.data('aspectRatio'));
//
//   });
//
//   // Kick off one resize to fix all videos on page load
// }).resize();

// });
