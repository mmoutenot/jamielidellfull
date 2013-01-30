// $(document).ready(function (){
//   var refreshID = setInterval(function(){
//     var currentHoleSize = 1.9;
//     var volume = 100;
//     var scrollPosition = $(document).scrollTop();
//     currentHoleSize = Math.max(1.9 - scrollPosition/190, 0.5);
//     volume = 100 - $(document).scrollTop()/7;
//     $('#page').css({'background-image':
//       '-webkit-radial-gradient(rgba(10, 10, 10, .1) '+currentHoleSize+'px, #111 1px)'});
//     if (window.player && $.isFunction(window.player.setVolume))
//       window.player.setVolume(volume);
//   }, 100);
// });

$('#title').click(function (){
  event.preventDefault();
  $('html, body').animate({ scrollTop: 700 }, 1200);
});

$(document).ready(function() {
  var windowHeight = $(window).height();
  $('#page').css({'margin-top': (windowHeight-155) + 'px'});
  $('#mainVideo').css({'height': (windowHeight-155)});
  // $('#mainVideo').tubular({videoId: 'mNY5jJv57MQ', mute: false, repeat: true, playButtonClass: 'tubular-shield'});

  var viewOnYoutubeHidden = false;
  var refreshID = setInterval(function() {
    if($(document).scrollTop() == 0){
      $('#page').animate({ 'margin-top' : (windowHeight-190) }, 400);
      $('#page').animate({ 'margin-top' : (windowHeight-145) }, 500);
      $('#page').animate({ 'margin-top' : (windowHeight-165) }, 600);
      $('#page').animate({ 'margin-top' : (windowHeight-153) }, 700);
      $('#page').animate({ 'margin-top' : (windowHeight-157) }, 800);
      $('#page').animate({ 'margin-top' : (windowHeight-155) }, 900);
      if (viewOnYoutubeHidden){
        $('#view-on-youtube-tab').animate({'top':'0px'}, 1000);
      }
    } else if (!viewOnYoutubeHidden) {
      $('#view-on-youtube-tab').animate({'top':'-100px'}, 1000);
    }
  }, 10000);

});

$(function() {

  // Find all YouTube videos
  var $allVideos = $(".youtube"),

  // The element that is fluid width
  $fluidEl = $(".sixWithLeftBorder");

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

// repeated code due to < 24 hour notice! BLAGH!
$(function() {

  // Find all YouTube videos
  var $allVideos = $(".youtubeMain"),

  // The element that is fluid width
  $fluidEl = $("#mainVideo");

  // Figure out and save aspect ratio for each video
  $allVideos.each(function() {

    $(this)
    .data('aspectRatio', this.height / this.width)

    // and remove the hard coded width/height
    .removeAttr('height')
    .removeAttr('width');

    var windowHeight = $(window).height();
    var newMargin = ((windowHeight-this.height)/4);
    var marginBound = (windowHeight-155);
    $('#mainVideo').css({'margin-top': Math.min(newMargin,marginBound)});

  });

  // When the window is resized
  // (You'll probably want to debounce this)
  $(window).resize(function() {

    var newWidth = $fluidEl.width();

    // Resize all videos according to their own aspect ratio
    $allVideos.each(function() {

      var windowHeight = $(window).height();
      var heightBound = (windowHeight-235);
      var $el = $(this);
      $el
      .width(newWidth)
      .height(Math.min(newWidth * $el.data('aspectRatio'), heightBound));
      var newMargin = ((windowHeight-$('.youtubeMain').height())/4);
      $('#mainVideo').css({'margin-top': newMargin});

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


