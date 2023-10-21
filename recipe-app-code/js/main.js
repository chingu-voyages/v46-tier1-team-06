//variables 


const searchRecipe=document.querySelector(".search-input");
const recipeList= document.querySelector(".recipe");
const allRecipes = document.querySelector(".recipes");
const searchButton=document.querySelector('.search-button')
const APP_key= 'ca0513b8f5msh784ebae5a83c946p120834jsnafdce15c50f6';

const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ca0513b8f5msh784ebae5a83c946p120834jsnafdce15c50f6',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

const getData = async function () {
const res = await fetch(url, options);
 const data = await res.json();
 console.log(data);
 };
 getData();

 


