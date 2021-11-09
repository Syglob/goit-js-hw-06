const btnDec = document.querySelector("[data-action=decrement]");
const btnInc = document.querySelector("[data-action=increment]");
const counterValue = document.getElementById("value");

btnDec.addEventListener("click", deBtnClick);
btnInc.addEventListener("click", inBtnClick);

function deBtnClick() {
  counterValue.textContent--;
}
function inBtnClick() {
  counterValue.textContent++;
}
