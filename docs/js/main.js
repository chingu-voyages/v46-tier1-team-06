// DOM reference constant
const recipeList = document.querySelector(".recipes");
const searchBtn = document.querySelector(".search-form__search-button");
const searchBarInput = document.querySelector('#search-bar');
const searchForm = document.querySelector('form.search-form')

// Constants needed for fetching from the TastyAPI
const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=lettuce';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aefb749900mshc8cd7b4b9f9c201p120819jsnb5e67af174c0',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

/*const getData = async function () {
    const res = await fetch(url, options);
     const data = await res.json();
     localStorage.setItem("recipes", JSON.stringify(data.results));
};

getData();*/

// get the recipes from localStorage
const recipes = JSON.parse(localStorage.getItem("recipes")); // has to be parsed back into a js object

//event listeners
searchBtn.addEventListener('click', () => {
    console.log("You clicked")
});
searchForm.addEventListener('submit', e => {
    //prevent the normal submission of the form
    e.preventDefault();
    var recipeInput = document.getElementById("search-bar")
    console.log(recipeInput.value)
});

const showRecipes = function (recipes) {
    for (const recipe in recipes) {
        const title = recipes[recipe].name;
        const thumbnail = recipes[recipe].thumbnail_url;
        const recipeObject = document.createElement("li");
        recipeObject.classList.add("recipe");
        recipeObject.innerHTML = `
            <img class="recipe-image" src="${thumbnail}" alt="food picture">
            <p class="recipe-category">dinner</p>
            <div class="recipe-title__container">
                <h2 class="recipe-title">${title}</h2>
            </div>
            <button class="recipe-button" aria-describedby="recipe-button__desc">View Recipe</button>
        `;
        recipeList.append(recipeObject);
    }
};

showRecipes(recipes);