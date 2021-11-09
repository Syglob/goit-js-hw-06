const inputElem = document.getElementById("name-input");
const outputElem = document.getElementById("name-output");

inputElem.addEventListener("input", () => {
  outputElem.textContent = inputElem.value;
  if (inputElem.value.length === 0) {
    outputElem.textContent = "Anonymous";
  }
});
