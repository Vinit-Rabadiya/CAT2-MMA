function toggleVideo() {
  let video = document.getElementById("video");

  if (video.style.display === "none") {
    video.style.display = "inline-block";
    video.play();
  } else {
    if (video.paused) {
      video.play();
    } else {
      video.style.display = "none";
    }
  }
}
