const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//------------------------------------------------------
const listItemEl = document.querySelector("#ingredients");

const ingredientsList = () => {
  return ingredients.map((ingredient) => {
    const list = document.createElement("li");
    list.textContent = ingredient;
    list.classList.add("item");
    return list;
  });
};
listItemEl.append(...ingredientsList(ingredients));
