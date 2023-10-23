// Constants needed for fetching 3 recipes from the TastyAPI for 'lettuce'
const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=3&q=lettuce';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aefb749900mshc8cd7b4b9f9c201p120819jsnb5e67af174c0',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

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
})
*/

// get the recipes from localStorage
const recipes = JSON.parse(localStorage.getItem("recipes")); // has to be parsed back into a js object

// variable that references DOM
const apiTest = document.querySelector("#api-test");

// gather some of the needed data from the first recipe
const title = recipes.results[0].name;
const thumbnail = recipes.results[0].thumbnail_url;
const cookTime = recipes.results[0].cook_time_minutes;

// create DOM elements for those items,
// add classnames, innerHTML,
// and append to apiTest node in index.html
const titleElement = document.createElement("h2");
titleElement.classList.add("newRecipeTitle");
titleElement.innerHTML = title;
apiTest.append(titleElement);

const thumbnailElement = document.createElement("img");
thumbnailElement.classList.add("newRecipeThumbnail");
thumbnailElement.src = thumbnail;
apiTest.append(thumbnailElement);

const cookTimeElement = document.createElement("p")
cookTimeElement.classList.add("newRecipeCookTime")
cookTimeElement.innerHTML = cookTime;
apiTest.append(cookTimeElement);

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