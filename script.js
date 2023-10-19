const lightbulb1 = document.querySelector("#lightbulb1");
const lightbulb2 = document.querySelector("#lightbulb2");
const lightbulb3 = document.querySelector("#lightbulb3");
const subtitle = document.querySelector(".subtitle");
let count = 0;

function changeState() {
  count++;
  if (count === 1) {
    subtitle.innerHTML = `You've clicked the light ${count} time`;
  } else {
    subtitle.innerHTML = `You've clicked the light ${count} times`;
    this.classList.toggle("active");
  }
}

lightbulb1.addEventListener("click", changeState);
lightbulb2.addEventListener("click", changeState);
lightbulb3.addEventListener("click", changeState);
