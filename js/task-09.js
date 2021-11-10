function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const spanColor = document.querySelector(".color");

changeColorBtnEl.addEventListener("click", changePageColor);

function changePageColor() {
  const colorNum = getRandomHexColor();
  bodyEl.setAttribute("style", `background-color:${colorNum}`);
  viewColorNumber(colorNum);
}
function viewColorNumber(color) {
  spanColor.textContent = color;
}
