// Toggle play/pause for the audio
function changeButton() {
  const buttonImg = document.getElementById("pause-img");

  if (currentAudio && !currentAudio.paused) {
    currentAudio.pause(); // Pause audio if playing
    buttonImg.src = "images/play.png"; // Change to play button image
  } else {
    currentAudio.play(); // Play the current audio
    buttonImg.src = "images/pause.png"; // Change to pause button image
  }
}

// Stop all audio and reset the currentAudio reference
function stopAllAudio() {
  document.querySelectorAll("audio").forEach(function (audio) {
    audio.pause();
  });
}

function section80() {
  stopAllAudio(); // Stop any currently playing audio

  document.getElementById("ch1").src = "images/Kendrick/section80_1.jpg";
  document.getElementById("ch2").src = "images/Kendrick/section80_2.jpg";
  document.getElementById("ch3").src = "images/Kendrick/section80_3.jpg";
  document.getElementById("ch4").src = "images/Kendrick/section80_4.png";

  currentAudio = document.getElementById("section80Audio"); // current audio begins to play after pausing previous audio
  currentAudio.play();
}

function gkmc() {
  stopAllAudio();
  document.getElementById("ch1").src = "images/gkmc1.jpg";
  document.getElementById("ch2").src = "images/gkmc-2.webp";
  document.getElementById("ch3").src = "images/gkmc-3.jpg";
  document.getElementById("ch4").src = "images/gkmc4.jpg";

  currentAudio = document.getElementById("gkmcAudio");
  currentAudio.play();
}

function tpab() {
  stopAllAudio();

  document.getElementById("ch1").src = "images/tpab1.jpg";
  document.getElementById("ch2").src = "images/tpab2.jpg";
  document.getElementById("ch3").src = "images/tpab3.jpg";
  document.getElementById("ch4").src = "images/tpab4.jpg";

  currentAudio = document.getElementById("tpabAudio");
  currentAudio.play();
}

function damn() {
  stopAllAudio();

  document.getElementById("ch1").src = "images/damn1x.jpg";
  document.getElementById("ch2").src = "images/damn2.webp";
  document.getElementById("ch3").src = "images/damn3.webp";
  document.getElementById("ch4").src = "images/damn4.jpg";

  currentAudio = document.getElementById("damnAudio");
  currentAudio.play();
}

function mmatbs() {
  stopAllAudio();

  document.getElementById("ch1").src = "images/mmatbs1.jpg";
  document.getElementById("ch2").src = "images/mmtbs11.webp";
  document.getElementById("ch3").src = "images/mmatbs3.jpg";
  document.getElementById("ch4").src = "images/mmatbs4.jpg";

  currentAudio = document.getElementById("mmatbsAudio");
  currentAudio.play();
}

function gnx() {
  stopAllAudio();

  document.getElementById("ch1").src = "images/gnx1.png";
  document.getElementById("ch2").src = "images/gnx2.jpg";
  document.getElementById("ch3").src = "images/gnx3.jpg";
  document.getElementById("ch4").src = "images/gnx4.png";

  currentAudio = document.getElementById("gnxAudio");
  currentAudio.play();
}

function kendrickWiki() {
  document.getElementById("top-left-img").src = "images/kendrickdescri.jpg";
}

function kendrickEras() {}
// Add event listeners for each album (keeping your original structure)
document.getElementById("album1").addEventListener("click", () => section80());
document.getElementById("album2").addEventListener("click", () => gkmc());
document.getElementById("album3").addEventListener("click", () => tpab());
document.getElementById("album4").addEventListener("click", () => damn());
document.getElementById("album5").addEventListener("click", () => mmatbs());
document.getElementById("album6").addEventListener("click", () => gnx());
