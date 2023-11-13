// DOM elements to listen to
const searchForm = document.querySelector('form.search-form');
const refreshButton = document.querySelector("#refresh-button");
const modalCloseButton = document.querySelector(".recipe-details__exit-button");
const searchMessages = document.querySelector(".app-instructions");

// DOM element to listen to and receive data
const searchResults = document.querySelector("#search-results");

// DOM elements to get user input from
const searchBarInput = document.querySelector('#search-bar');

// Modal elements receiving data
const modalImage = document.querySelector("#example1");
const modalTitle = document.querySelector(".title-container h1");
const modalCategory = document.querySelector(".meal-label h2")
const modalIngredientsList = document.querySelector("#ingredients-list");
const modalInstructionsList = document.querySelector("#instructions-list");

// DOM elements to hide and unhide
const landingPage = document.querySelector("#landing-page");
const modal = document.querySelector("dialog");
const exampleRecipesDesc = document.querySelector(".example-recipes__desc");
//searchResults declared above also falls under this category

// Global Variable to hold the recipes from the getData() function
let recipes;

// Constant needed for fetching from the TastyAPI
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f3bd08de05mshbc74d5d0d7c6b6ep11586ejsn91973fbdea76',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

// Event listeners
searchForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    searchMessages.innerText = "Start decreasing your food waste by searching for recipes by ingredient!";
    let recipeInput = searchBarInput.value.trim();
    const goodSearch = validateSearch(recipeInput);
    
    if (goodSearch) {
        await getData(recipeInput)
        searchBarInput.value = "";
        showRecipes(recipes);
        // switch from landing page to search results
        landingPage.classList.add("hidden");
        exampleRecipesDesc.classList.add("hidden");
    }
    if (!searchResults.hasChildNodes()) {
        landingPage.innerHTML = `<p class="no-results">No recipes found!</p>`;
        landingPage.classList.remove("hidden");
    }
});

refreshButton.addEventListener("click", () => {
    window.location.reload("Refresh");
    landingPage.classList.remove("hidden");
    exampleRecipesDesc.classList.remove("hidden");
    searchResults.classList.add("hidden");
})

searchResults.addEventListener("click", (e) => {
    createModal(e, recipes);
})

modalCloseButton.addEventListener("click", () => {
    modal.close();
});

// Functions
async function landingPageExamples() {
    let url;
    // if mobile, show only one recipe card for lettuce
    if (window.innerWidth < 500) {
        url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=1&q=lettuce`;
    }
    // if larger, show three recipe cards for lettuce
    else {
        url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=3&q=lettuce`;
    }
    // fetch recipes
    const res = await fetch(url, options);
    const data = await res.json();
    recipes = data.results;
    exampleRecipesDesc.classList.remove("hidden");
    showRecipes(recipes);
};
landingPageExamples();

function validateSearch(recipeInput) {
    const unacceptedCharacters = /[^a-zA-Z ]/;
    if (recipeInput.length === 0) {
       searchMessages.innerText = "You didn't input anything!";
    } else if (recipeInput.match(unacceptedCharacters)) {
       searchMessages.innerText = "No numbers or special characters needed, search for a food ingredient!";
    } else {
    return recipeInput;
    };
};

async function getData(recipeInput) {
    // create fetch url with user-entered search term
    let url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=21&q=${recipeInput}`;
    // fetch recipes
    const res = await fetch(url, options);
    const data = await res.json();
    recipes = data.results;
};

function showRecipes(recipes) {
    // remove previous search results
    while (searchResults.hasChildNodes()) {
        searchResults.firstElementChild.remove();
    }
    for (const recipe in recipes) {
        // create recipe summary cards from fetched data
        const recipeID = recipes[recipe].id;
        const title = recipes[recipe].name;
        const thumbnail = recipes[recipe].thumbnail_url;
        // get meal category from first meal tag
        const tagsArray = recipes[recipe].tags
        let foundMealCategory = "";
        for (const recipe in tagsArray) {
            if (tagsArray[recipe].root_tag_type == "meal") {
                let mealCategory = tagsArray[recipe].display_name;
                foundMealCategory += mealCategory;
                break;
            };
        }
        const recipeObject = document.createElement("li");
        recipeObject.classList.add("recipe");
        recipeObject.id = `roid${recipeID}`;
        recipeObject.innerHTML = `
            <img id="imid${recipeID}" class="recipe-image" src="${thumbnail}" alt="food picture">
            <p id="rcid${recipeID}" class="recipe-category">${foundMealCategory}</p>
            <div id="tcid${recipeID}" class="recipe-title__container">
                <h2 id="rtid${recipeID}" class="recipe-title">${title}</h2>
            </div>
            <button id="btid${recipeID}" class="recipe-button" aria-describedby="recipe-button__desc">View Recipe</button>
        `;
        // add to DOM
        searchResults.append(recipeObject);
        searchResults.classList.remove("hidden");
    }
};

function createModal(e, recipes) {
    // check to see if recipe card was clicked
    if (e.target.id != "search-results") {
        // get id of recipe card clicked
        let recipeID = e.target.id.slice(4);
        for (const index in recipes) {
            // find correct recipe
            if (recipes[index].id == recipeID) {
            // create modal elements from fetched recipe data
                const thumbnail = recipes[index].thumbnail_url;
                modalImage.src = thumbnail;
                const title = recipes[index].name;
                modalTitle.innerHTML = title;
                modalImage.alt = title;
                // get meal category from first meal tag
                const tagsArray = recipes[index].tags
                for (const index in tagsArray) {
                    if (tagsArray[index].root_tag_type == "meal") {
                        const mealCategory = tagsArray[index].display_name;
                        modalCategory.innerHTML = mealCategory;
                        break;
                    }
                }
                // create ingredients list items
                // remove instructions from previously opened modal
                while (modalIngredientsList.hasChildNodes()) {
                    modalIngredientsList.firstElementChild.remove();
                }
                const ingredientArray = recipes[index].sections[0].components.map(ingredient => ingredient.raw_text)
                ingredientArray.forEach(ingredient => {
                    let nextIngredient = document.createElement("li");
                    nextIngredient.innerHTML = ingredient;
                    modalIngredientsList.appendChild(nextIngredient);
                });
                // create instruction list items
                // remove instructions from previously opened modal
                while (modalInstructionsList.hasChildNodes()) {
                    modalInstructionsList.firstElementChild.remove();
                }
                const instructionsArray = recipes[index].instructions.map(instruction => instruction.display_text)
                instructionsArray.forEach(instruction => {
                    let nextInstruction = document.createElement("li");
                    nextInstruction.innerHTML = instruction;
                    modalInstructionsList.appendChild(nextInstruction);})
                break;
            }
        }
        modal.showModal();
    }
}
