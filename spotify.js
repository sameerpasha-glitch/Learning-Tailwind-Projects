/** @format */
/** @format */

let currentlyPlayingAudio = null;

function setupAudioPlayer(artId, arId) {
  const playButton = document.getElementById(artId);
  const audio = document.getElementById(arId);
  const playIcon = playButton.querySelector("#play");
  const pauseIcon = playButton.querySelector("#pause");

  function updateButtonState(button, isPlaying) {
    const playIcon = button.querySelector("#play");
    const pauseIcon = button.querySelector("#pause");
    if (isPlaying) {
      playIcon.classList.add("hidden");
      pauseIcon.classList.remove("hidden");
    } else {
      playIcon.classList.remove("hidden");
      pauseIcon.classList.add("hidden");
    }
  }

  function pauseCurrentlyPlaying() {
    if (currentlyPlayingAudio) {
      currentlyPlayingAudio.pause();
      updateButtonState(
        document.querySelector(`[data-audio-id="${currentlyPlayingAudio.id}"]`),
        false
      );
      currentlyPlayingAudio = null;
    }
  }

  playButton.addEventListener("click", function () {
    if (audio.paused) {
      pauseCurrentlyPlaying();
      audio.play();
      updateButtonState(playButton, true);
      currentlyPlayingAudio = audio;
    } else {
      audio.pause();
      updateButtonState(playButton, false);
      currentlyPlayingAudio = null;
    }
  });

  playButton.setAttribute("data-audio-id", arId);

  // Handle audio ending
  audio.addEventListener("ended", function () {
    updateButtonState(playButton, false);
    currentlyPlayingAudio = null;
  });
}

// Initialize audio players
setupAudioPlayer("art-1", "ar-1");
setupAudioPlayer("art-2", "ar-2");
setupAudioPlayer("art-3", "ar-3");
setupAudioPlayer("art-4", "ar-4");
setupAudioPlayer("art-5", "ar-5");
setupAudioPlayer("art-6", "ar-6");
setupAudioPlayer("art-7", "ar-7");
setupAudioPlayer("art-8", "ar-8");
setupAudioPlayer("art-9", "ar-9");
setupAudioPlayer("art-10", "ar-10");
setupAudioPlayer("art-11", "ar-11");
setupAudioPlayer("art-12", "ar-12");
setupAudioPlayer("art-13", "ar-13");
setupAudioPlayer("art-14", "ar-14");

// Get the mode and mode1 elements (buttons)
const mode = document.getElementById("mode");
const mode1 = document.getElementById("mode1");
const body = document.querySelector("body");

mode.addEventListener("click", () => {
  console.log("Mode button clicked");
  mode.classList.add("hidden");
  body.style.backgroundColor = "black";
  mode1.classList.remove("hidden");
});

mode1.addEventListener("click", () => {
  console.log("Mode1 button clicked");
  document.querySelector("body").style.backgroundColor = "white";
  mode1.classList.add("hidden");
  mode.classList.remove("hidden");
});
