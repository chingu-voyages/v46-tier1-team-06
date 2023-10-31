// DOM reference constant
const recipeList = document.querySelector("#search-results");
const searchBtn = document.querySelector(".search-form__search-button");
const searchBarInput = document.querySelector('#search-bar');
const searchForm = document.querySelector('form.search-form');


/* from https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog */

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#this-button"); // changed to our button
const closeButton = document.querySelector(".exit-button"); // changed to our button

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

/* end of code from mozilla */



// Constants needed for fetching from the TastyAPI
let url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=blueberry`;
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
     console.log(data);
};

getData();*/

// get the recipes from localStorage
const recipes = JSON.parse(localStorage.getItem("recipes")); // has to be parsed back into a js object

//event listeners
searchBtn.addEventListener('click', () => {
    showRecipes(recipes);
});
searchForm.addEventListener('submit', e => {
    //prevent the normal submission of the form
    e.preventDefault();
    var recipeInput = document.getElementById("search-bar")
    console.log(recipeInput.value)
});

const showRecipes = function (recipes) {
    while (recipeList.hasChildNodes()) {
        recipeList.firstElementChild.remove();
    }
    for (const recipe in recipes) {
        const recipeID = recipes[recipe].id;
        const title = recipes[recipe].name;
        const thumbnail = recipes[recipe].thumbnail_url;
        const recipeObject = document.createElement("li");
        recipeObject.classList.add("recipe");
        recipeObject.innerHTML = `
            <p class="recipe-id hidden">${recipeID}</p>
            <img class="recipe-image" src="${thumbnail}" alt="food picture">
            <div class="recipe-title__container">
                <h2 class="recipe-title">${title}</h2>
            </div>
            <button class="recipe-button" aria-describedby="recipe-button__desc">View Recipe</button>
        `;
        recipeList.append(recipeObject);
    }
};
