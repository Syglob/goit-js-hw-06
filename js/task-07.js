const FontSizeControl = document.getElementById("font-size-control");
const textElm = document.getElementById("text");

FontSizeControl.addEventListener("input", () => {
  textElm.style.fontSize = FontSizeControl.value + "px";
});
