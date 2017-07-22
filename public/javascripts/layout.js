/**
 * Created by Kevin Han on 2017-07-22.
 */
// Request Full Screen
function requestFullscreen() {
  var de = document.documentElement;
  if (de.requestFullscreen) {
    de.requestFullscreen();
  } else if (de.mozRequestFullScreen) {
    de.mozRequestFullScreen();
  } else if (de.webkitRequestFullScreen) {
    de.webkitRequestFullScreen();
  }
}

// Exit Full Screen
function exitFullscreen() {
  var de = document;
  if (de.exitFullscreen) {
    de.exitFullscreen();
  } else if (de.mozCancelFullScreen) {
    de.mozCancelFullScreen();
  } else if (de.webkitCancelFullScreen) {
    de.webkitCancelFullScreen();
  }
}

$(function() {
  $(".btn-maximize").click(function() {
    requestFullscreen();
  });
  $(".btn-restore").click(function() {
    exitFullscreen();
  });
});
