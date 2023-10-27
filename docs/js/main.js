//variables 

// variables that references DOM
const recipeTitle = document.querySelector(".recipe-title");
const recipeThumbnail = document.querySelector(".recipe-image-container");
const recipeCategory = document.querySelector(".recipe-category");

const allRecipesContainer = document.querySelector(".recipes");
const recipeList = document.querySelector(".recipe-list");
const searchButton = document.querySelector(".search-form__search-button");
const searchInput = document.querySelector(".search-form__input");

// Constants needed for fetching 3 recipes from the TastyAPI for 'lettuce'
const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=lettuce';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aefb749900mshc8cd7b4b9f9c201p120819jsnb5e67af174c0',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

/*
const getData = async function () {
    const res = await fetch(url, options);
     const data = await res.json();
     localStorage.setItem("recipes", JSON.stringify(data.results));
     console.log(data.results);
}; 
     
getData();
*/

// get the recipes from localStorage
const recipes = JSON.parse(localStorage.getItem("recipes")); // has to be parsed back into a js object


const showRecipes = function (recipes) {
    for (const recipe in recipes) {
        const title = recipes[recipe].name;
        const thumbnail = recipes[recipe].thumbnail_url;
        const recipeObject = document.createElement("li");
        recipeObject.classList.add("recipe-card");
        recipeObject.innerHTML = `
            <div class="recipe">
                <figure>
                    <img class="recipe-image" src="${thumbnail}" alt="food picture">
                </figure>
                <p class="recipe-category">dinner</p>
                <div class="recipe-title-container">
                    <h2 class="recipe-title">${title}</h2>
                </div>
                <button class="recipe-button" aria-describedby="recipe-button__desc">View Recipe</button>
            </div>
      `;
        recipeList.append(recipeObject);
    }
};

const ingredientsArray = [];
const makeIngredientsArray = function (recipes) {
    for (let recipe in recipes) {
        const searchIngredients = recipes[recipe].sections[0].components;
        ingredientsArray.push(searchIngredients);
    }
    return ingredientsArray;
}
makeIngredientsArray(recipes);

function getRecipeList (ingredientsArray) {
    for (let ingredients of ingredientsArray) {
        for (const key in ingredients) {
            const searchText = document.getElementById('search-bar').value.trim();
            const lowerCaseSearch = searchText.toLowerCase();
            const ingredientsLowerCase = ingredients[key].innerText.toLowerCase();
            if (ingredientsLowerCase.includes(lowerCaseSearch)) {
                showRecipes(recipes);
            } else {
                recipeList.innerHTML = "Sorry, item not found!";
            }
            /*console.log(ingredient[key]);*/
        }
    }
};
searchButton.addEventListener("click", getRecipeList(ingredientsArray));
console.log(getRecipeList(ingredientsArray));