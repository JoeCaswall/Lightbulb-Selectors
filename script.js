const lightbulbs = document.querySelectorAll(".lightbulb");
const subtitle = document.querySelector(".subtitle");
let count = 0;

function changeState() {
  count++;
  this.classList.toggle("active");
  if (count === 1) {
    subtitle.innerHTML = `You've clicked the light ${count} time`;
  } else {
    subtitle.innerHTML = `You've clicked the light ${count} times`;
  }
}

for (x of lightbulbs) {
  x.addEventListener("click", changeState);
}
