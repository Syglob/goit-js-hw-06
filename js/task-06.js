const inputElem = document.getElementById("validation-input");

inputElem.addEventListener("blur", () => {
  if (inputElem.value.length < 6) {
    inputElem.classList.add("invalid");
  } else {
    inputElem.classList.remove("invalid");
    inputElem.classList.add("valid");
  }
});
