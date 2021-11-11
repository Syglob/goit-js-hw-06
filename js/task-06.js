const inputElem = document.getElementById("validation-input");
// const dataLength = document.querySelector("[data-length]");

inputElem.addEventListener("blur", () => {
  if (inputElem.value.length !== 6) {
    inputElem.classList.add("invalid");
    inputElem.classList.remove("valid");
  } else {
    inputElem.classList.add("valid");
    inputElem.classList.remove("invalid");
  }
});
