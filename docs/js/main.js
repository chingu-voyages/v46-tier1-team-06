//variables 

// variables that references DOM
// const apiTest = document.querySelector("#api-test");
const recipeTitle = document.querySelector(".recipe-title");
const recipeThumbnail = document.querySelector(".recipe-image-container");
const recipeCategory = document.querySelector(".recipe-category");

const allRecipesContainer = document.querySelector(".recipes");
const recipeList = document.querySelector(".recipe-list");

// gather some of the needed data from the first recipe
const title = recipes.results[0].name;
const thumbnail = recipes.results[0].thumbnail_url;
const cookTime = recipes.results[0].cook_time_minutes;

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

// get the recipes from localStorage
const recipes = JSON.parse(localStorage.getItem("recipes")); // has to be parsed back into a js object

const showRepos = function (repos) {
    for (const repo of repos) {
        const repoObject = document.createElement("li");
        repoObject.classList.add("repo");
        repoObject.innerHTML = `<h3>${repo.name}</h3>`
        repoList.append(repoObject);
    }
};