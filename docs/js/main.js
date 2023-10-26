//variables 

// variables that references DOM
// const apiTest = document.querySelector("#api-test");
const recipeTitle = document.querySelector(".recipe-title");
const recipeThumbnail = document.querySelector(".recipe-image-container");
const recipeCategory = document.querySelector(".recipe-category");

// gather some of the needed data from the first recipe
const title = recipes.results[0].name;
const thumbnail = recipes.results[0].thumbnail_url;
const cookTime = recipes.results[0].cook_time_minutes;

/*
const searchRecipe=document.querySelector(".search-input");
const recipeList= document.querySelector(".recipe");
const allRecipes = document.querySelector(".recipes");
const searchButton=document.querySelector('.search-button')
const APP_key= 'ca0513b8f5msh784ebae5a83c946p120834jsnafdce15c50f6';
*/

// Constants needed for fetching 3 recipes from the TastyAPI for 'lettuce'
const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=3&q=lettuce';
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
 localStorage.setItem("recipes", JSON.stringify(data));
 console.log(data);
 };
 getData();
*/
/* To save calls to the API, this block of javascript will fetch 3 recipes
   from the API and store them to localStorage.  From then on, we can just
   use the data in localStorage to work on developing our Detailed Recipe
   Modal.

   Uncomment the fetch block and run once to save the data to localStorage,
   then comment it back out and start testing at const recipes = ...
*/

/*
fetch(url, options)
.then(response => response.json())
.then(data => {
    localStorage.setItem("recipes", JSON.stringify(data))  // has to be stringified to be in localStorage
    console.log(data);
}) */

// get the recipes from localStorage
const recipes = JSON.parse(localStorage.getItem("recipes")); // has to be parsed back into a js object

// create DOM elements for those items,
// add classnames, innerHTML,
// and append to apiTest node in index.html
/* const titleElement = document.createElement("h2");
titleElement.classList.add("newRecipeTitle");
titleElement.innerHTML = title;
titleTest.append(titleElement);

const thumbnailElement = document.createElement("img");
thumbnailElement.classList.add("recipe-image");
thumbnailElement.src = thumbnail;
thumbnailTest.append(thumbnailElement);

const cookTimeElement = document.createElement("p")
cookTimeElement.classList.add("newRecipeCookTime")
cookTimeElement.innerHTML = cookTime;
apiTest.append(cookTimeElement); */

/* const showRecipes = function (recipes) {
    for (const recipe of recipes) {
        const recipeObject = document.createElement("li");
        recipeObject.classList.add("recipes");
        repoObject.innerHTML =
            `<div class="recipe">
                <div class="recipe-image-container">
        <!-- <img class="recipe-image" src="./img/example2.png" alt="food picture"> -->
                </div>
      <p class="recipe-category">dinner</p>
      <div class="recipe-title-container">
        <h2 class="recipe-title"><!-- Recipe Title --></h2>
      </div>
      <button class="recipe-button" aria-describedby="recipe-button__desc">View Recipe</button>
      <span id="recipe-button__desc" class="sr-only">A popout window will open with recipe details</span>
    </div>`
        recipes.append(recipeObject);
    }
}; */

/* if(data.meals){
    data.meals.forEach(meal => {
        html += `
            <div class = "meal-item" data-id = "${meal.idMeal}">
            
                    <div class = "meal-img">
                        <img src = "${meal.strMealThumb}" alt = "food">
                    </div>
                    <div class = "meal-name">
                        <h3>${meal.strMeal}</h3>
                        <a href = "#" class = "recipe-btn">Get Recipe</a>
                    </div>
      
            </div>
        `;
    }); */

// create an empty ul for the list of ingredients
const ingredientList = document.createElement("ul")

// make an array of the ingredients from the searchResults stored in "recipes"
let ingredientArray = recipes.results[0].sections[0].components.map(ingredient => ingredient.raw_text)

// make new list items from the array and append each
// to the ingredient list DOM ul element
ingredientArray.forEach(ingredient => {
  let newListItem = document.createElement("li");
  newListItem.innerHTML = ingredient;
  ingredientList.appendChild(newListItem);
})

// append ingredientList to apiTest for it to show in the DOM
apiTest.appendChild(ingredientList);