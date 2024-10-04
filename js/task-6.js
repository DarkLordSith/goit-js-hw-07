function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("button[data-create]");
const destroyButton = controls.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createButton.addEventListener("click", onCreateButtonClick);
destroyButton.addEventListener("click", onDestroyButtonClick);

function onCreateButtonClick() {
  const amount = parseInt(input.value.trim());
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert("Please enter a number between 1 and 100");
  }
  input.value = "";
}

function onDestroyButtonClick() {
  destroyBoxes();
}

function createBoxes(amount) {
  destroyBoxes();
  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.margin = "10px";
    elements.push(div);
    size += 10;
  }
  boxesContainer.append(...elements);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
