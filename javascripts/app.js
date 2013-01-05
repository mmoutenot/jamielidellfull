$(document).ready(function (){
  var refreshID = setInterval(function(){
    var currentHoleSize = 1.9;
    var volume = 100;
    var scrollPosition = $(document).scrollTop();
    currentHoleSize = Math.max(1.9 - scrollPosition/190, 0.5);
    volume = 100 - $(document).scrollTop()/7;
    $('#page').css({'background-image':
      '-webkit-radial-gradient(rgba(10, 10, 10, .1) '+currentHoleSize+'px, #111 1px)'});
    if (window.player && $.isFunction(window.player.setVolume))
      window.player.setVolume(volume);
  }, 100);
});

$('#title').click(function (){
  event.preventDefault();
  $('html, body').animate({ scrollTop: 700 }, 1200);
});

$(document).ready(function() {
  var windowHeight = $(window).height();
  console.log(windowHeight);
  $('#page').css({'margin-top': (windowHeight-155) + 'px'});
  $('#mainVideo').tubular({videoId: '3wPK3VIeT8I', mute: false, repeat: true});// where idOfYourVideo is the YouTube ID.
});

$(function() {

  // Find all YouTube videos
  var $allVideos = $("iframe[src^='http://www.youtube.com']"),

  // The element that is fluid width
  $fluidEl = $(".six");

// Figure out and save aspect ratio for each video
$allVideos.each(function() {

  $(this)
  .data('aspectRatio', this.height / this.width)

  // and remove the hard coded width/height
  .removeAttr('height')
  .removeAttr('width');

});

// When the window is resized
// (You'll probably want to debounce this)
$(window).resize(function() {

  var newWidth = $fluidEl.width();

  // Resize all videos according to their own aspect ratio
  $allVideos.each(function() {

    var $el = $(this);
    $el
    .width(newWidth)
    .height(newWidth * $el.data('aspectRatio'));

  });

  // Kick off one resize to fix all videos on page load
}).resize();

})

$(document).ready(function(){
  var hue_val = 0;
  var iid = null;

  if ( $.browser.webkit ) {
    $('#albumcover').live('mouseenter', function() {
        this.iid = setInterval(function() {
          $("#jamieimg").css("-webkit-filter","hue-rotate("+hue_val+"deg)");
          $("#jamieimg").css("-moz-filter","hue-rotate("+hue_val+"deg)");
          $("#jamieimg").css("-o-filter","hue-rotate("+hue_val+"deg)");
          $("#jamieimg").css("-ms-filter","hue-rotate("+hue_val+"deg)");
          $("#jamieimg").css("filter","hue-rotate("+hue_val+"deg)");
          hue_val = (hue_val + 8);
          }, 10);
        }).live('mouseout', function(){
          this.iid && clearInterval(this.iid);
          });
  } else {
    $('#albumcover').live('mousemove', function() {
      Pixastic.process(document.getElementById('jamieimg'), "hsl", {
        // saturation : 0,
        // lightness : 0
      });
    });


  //
  //       $('#albumcover').live({
  //         mouseenter:
  //           function() {
  //             console.log("Mouse in");
  //             if ( !iid ){
  //               this._iid = setInterval(function() {
  //                   console.log(hue_val);
  //
  //                   Pixastic.process(document.getElementById('jamieimg'), "hsl", {
  //                     hue : 40
  //                     // saturation : 0,
  //                     // lightness : 0
  //                   });
  //
  //                   // hue_val = (hue_val + 1);
  //               }, 150);
  //
  //               iid = this._iid;
  //             }
  //           },
  //         mouseleave:
  //           function() {
  //             console.log("Mouse out");
  //             iid && clearInterval(iid);
  //             iid = null;
  //           }
  //       });

  }
});
