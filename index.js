const playButton = document.querySelector("#play");
const closeButton = document.querySelector("#close");
const firstInput = document.querySelector("input");
const body = document.querySelector("body");
const modal = document.querySelector("#modal");
let count = 0;

playButton.addEventListener("click", handlePlayClick);

function handlePlayClick() {
  if (count === 0) {
    playButton.textContent = "Are you sure?";
    count++;
  } else if (count === 1) {
    playButton.textContent = "LOL K";
    const audio = new Audio("lol.mp3");
    audio.play();
  }
}

window.setTimeout(() => {
  modal.style.opacity = 1;
}, 2000);

closeButton.addEventListener("click", () => {
  window.setTimeout(() => {
    modal.style.opacity = 0;
  }, 1000);
});
