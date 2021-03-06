const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imageEl = document.querySelector(".gallery");

// const imageInsert = images.forEach(({ url, alt }) => {
//   imageEl.innerHTML += `<li class = "galerry__item"><img class = "galerry__img" src="${url}" alt="${alt}"></li>`;
// });

// const imageInsert = images.forEach(({ url, alt }) => {
//   imageEl.insertAdjacentHTML(
//     "beforeend",
//     `<li class = "galerry__item">
//   <img class = "galerry__img" src = "${url}" alt = "${alt}">
//   </li>`
//   );
// });

const imageInsert = images
  .map((elem) => {
    return `<li class="galerry__item"><img class="galerry__img" src="${elem.url}" alt="${elem.alt}"></li>`;
  })
  .join("");

imageEl.insertAdjacentHTML("beforeend", imageInsert);
