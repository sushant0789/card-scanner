$(window).on('load', function () {
  $('#preloader-active').delay(2000).fadeOut('slow');
  $('body').delay(2000).css({
    'overflow': 'visible'
  });
});

function openCam() {
  let All_mediaDevices = navigator.mediaDevices;
  if (!All_mediaDevices || !All_mediaDevices.getUserMedia) {
    console.log("getUserMedia() not supported.");
    return;
  }
  All_mediaDevices.getUserMedia({
    audio: true,
    video: true,
  })
    .then(function (vidStream) {
      var video = document.getElementById("videoCam");
      if ("srcObject" in video) {
        video.srcObject = vidStream;
      } else {
        video.src = window.URL.createObjectURL(vidStream);
      }
      video.onloadedmetadata = function (e) {
        video.play();
      };
    })
    .catch(function (e) {
      console.log(e.name + ": " + e.message);
    });
    switchPage(1);
}

function failCam() {
  switchPage(2);
}

function successCam() {
  switchPage(3);
}

function switchPage(index) {
  currentPageIndex = index;
  let home = document.getElementsByClassName("home")[0];
  let scanner = document.getElementsByClassName("scanner")[0];
  let scanAgain = document.getElementsByClassName("scan-again")[0];
  let resultviewer = document.getElementsByClassName("resultViewer")[0];
  let pages = [home, scanner, scanAgain, resultviewer];
  console.log(pages);
  for (let i = 0; i < pages.length; i++) {
    console.log(i);
    const page = pages[i];
    if (i === index) {
      page.style.display = "";
    } else {
      page.style.display = "none";
    }
  }
}