const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemsList = document.querySelector("#ingredients");

const ingredientsListEl = ingredients.map(ingredient => {
  const listItemEl = document.createElement("li");
  listItemEl.classList.add("item");
  listItemEl.textContent = ingredient;

  return listItemEl;
});
  

itemsList.appendChild(ingredientsListEl);
