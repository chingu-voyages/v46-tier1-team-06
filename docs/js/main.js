//variables 

// variables that references DOM
// const apiTest = document.querySelector("#api-test");
const recipeTitle = document.querySelector(".recipe-title");
const recipeThumbnail = document.querySelector(".recipe-image-container");
const recipeCategory = document.querySelector(".recipe-category");

const allRecipesContainer = document.querySelector(".recipes");
const recipeList = document.querySelector(".recipe-list");

// Constants needed for fetching 3 recipes from the TastyAPI for 'lettuce'
const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=lettuce';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aefb749900mshc8cd7b4b9f9c201p120819jsnb5e67af174c0',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

const getData = async function () {
    const res = await fetch(url, options);
     const data = await res.json();
     localStorage.setItem("recipes", JSON.stringify(data.results));
     console.log(data.results);
};
     
getData();


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
                <span id="recipe-button__desc" class="sr-only">A popout window will open with recipe details</span>
            </div>
      `;
        recipeList.append(recipeObject);
    }
};

showRecipes(recipes);