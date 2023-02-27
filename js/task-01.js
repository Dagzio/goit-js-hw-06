const categoriesList = document.querySelector("#categories");
console.log("Number of categories: ", categoriesList.children.length);



const categoriesListItems = categoriesList.querySelectorAll(".item");

categoriesListItems.forEach(item => {
    console.log("Category: ", item.firstElementChild.textContent)

    console.log("Elements: ", item.querySelectorAll("li").length)
});

