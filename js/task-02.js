const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemsList = document.querySelector("#ingredients");

const ingredientsItems = ingredients.map(ingredient => {
  const listItemEl = document.createElement("li");
  listItemEl.textContent = ingredient;
  listItemEl.classList.add("item");

  return listItemEl;
});

itemsList.append(...ingredientsItems);