// Number of categories
const itemsEl = document.querySelectorAll(".item");
console.log("Number of categories:", itemsEl.length);

//Category
itemsEl.forEach((item) => {
  console.log("Category:", item.querySelector(".item h2").textContent);
  console.log("Elements:", item.querySelectorAll(".item li").length);
});
