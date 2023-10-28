//variables 

// variables that references DOM
const recipeTitle = document.querySelector(".recipe-title");
const recipeThumbnail = document.querySelector(".recipe-image-container");
const recipeCategory = document.querySelector(".recipe-category");

const allRecipesContainer = document.querySelector(".recipes-container");
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
                <div class="recipe-title__container">
                    <h2 class="recipe-title">${title}</h2>
                </div>
                <button class="recipe-button" aria-describedby="recipe-button__desc">View Recipe</button>
            </div>
      `;
        recipeList.append(recipeObject);
    }
};

// 'recipes' is an array of 20 recipe objects
console.log("recipes: ", recipes)
const ingredientsArray = [];
const makeIngredientsArray = function (recipes) {
    for (let recipe in recipes) {  // so each recipe

        // get the first set of ingredients from a single recipe
        // it is an array with an object for each ingredient
        const searchIngredients = recipes[recipe].sections[0].components;
        console.log("searchIngredients", searchIngredients)

        // push this recipe's array of ingredient objects
        ingredientsArray.push(searchIngredients);
    }

    // ingredientsArray is then an array of 20 recipes' ingredient lists
    // an array of arrays of ingredient objects
    console.log("ingredientsArray: ", ingredientsArray)
    return ingredientsArray; // 
}
makeIngredientsArray(recipes);

function getRecipeList (ingredientsArray) { // parameter is an array of arrays of ingredient objects

    // I haven't used the syntax of either of these loops.  I was trying to figure out what
    // I use instead.  I think I have only worked on simple projects where the data is
    // typically simple arrays, not even nested arrays.  I don't think I've ever used
    // data in the form of objects.  So, I am most familiar with .forEach() used on arrays.
    // So below, I would have used 'ingredientsArray.forEach(ingredient => { my code })'
    // But they do exactly the same thing.  You've taught me much here, especially the
    // 'for (const key in ingredients)' for objects.

    // loops through each recipe
    for (let ingredients of ingredientsArray) { // for each single array of one recipe's ingredient objects

    
        // loops through one recipe's ingredients
        for (const key in ingredients) {

            // key refers to one ingredient object
            console.log("key", key) // just to convince myself what this is again

            // the below lines could be pulled out of the loops
            const searchText = document.getElementById('search-bar').value.trim();
            console.log("searchText: ", searchText) // actually empty right now
            const lowerCaseSearch = searchText.toLowerCase();

            // the below line is giving an error of 
            // "TypeError: undefined is not an object (evaluating 'ingredients[key].innerText.toLowerCase')"
            // because .innerText is only used on DOM elements.
            // So function stops here.

// your line of code commented out -  const ingredientsLowerCase = ingredients[key].innerText.toLowerCase();

            // to convince myself of what ingredients[key] is, expecting one ingredient object
            console.log("ingredients Object: ", ingredients[key]) // one ingredient object

            // inside this object of one ingredient, we want the "raw_text"
            // this is instead of your 'innerText'
            const ingredientsLowerCase = ingredients[key].raw_text.toLowerCase()
            console.log("ingredientLowerCase", ingredientsLowerCase) // text of one ingredient

            // the above variable should be called ingredientLowerCase because it is only one
            // ingredient, then you would make the array ingredientsLowerCase by pushing the
            // single ingredient textString to the array ingredientsLowerCase
            // '  ingredientsLowerCase.push(ingredientLowerCase)  '
            // but you would need to create an empty ingredientsLowerCase variable before this
            // loop, like you did for ingredientsArray in line 62.

            // I stopped making changes in your code here, because it would mean adding code
            // and comments above the logic that got us here to see we were looking at one
            // ingredient instead of an array of ingredients....  (I didn't add an empty
            // ingredientsLowerCase array variable up above)  Comments continue...
            
            // then this code would need to be moved out of this loop and back into the 
            // let ingredients of ingredientsArray, but after this loop.  Then you would
            // be checking to see if your lowerCaseSearch was one of the ingredients of
            // this particular recipe.s
            if (ingredientsLowerCase.includes(lowerCaseSearch)) {
                showRecipes(recipes);
            } else {
                recipeList.innerHTML = "Sorry, item not found!";
            }

            // I also checked how the array method .includes() works, because I think it
            // compares your search word to each item and only returns true if it is
            // exactly the same.  So comparing 'lettuce' to 'one head of lettuce, sliced'
            // would return false.
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
        }
    }
};
searchButton.addEventListener("click", getRecipeList(ingredientsArray));
console.log(getRecipeList(ingredientsArray));