function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

const createButtonElem = document.querySelector("[data-create]");
const destroyButtonElem = document.querySelector("[data-destroy]");
const divElem = document.querySelector("#boxes");
const inputElem = document.querySelector("input");

createButtonElem.addEventListener("click", createBox);
destroyButtonElem.addEventListener("click", destroyBox);

function createBox(param) {
  let newArray = [];
  param = inputElem.value;
  for (let i = 0; i < param; i += 1) {
    let size = 30 + i * 10;

    const divEl = document.createElement("div");
    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    newArray.push(divEl);
  }
  divElem.append(...newArray);
}

function destroyBox() {
  divElem.innerHTML = " ";
}
