const btn = document.getElementById("btn");
const trailer = document.getElementById("trailer");

btn.addEventListener("click", function () {
  if (trailer.paused) {
    trailer.play();
    btn.innerHTML = "PAUSE";
  } else {
    trailer.pause();
    btn.innerHTML = "PLAY";
  }
});
