// Constants needed for fetching 3 recipes from the TastyAPI for 'lettuce'
const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=3&q=lettuce';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f3bd08de05mshbc74d5d0d7c6b6ep11586ejsn91973fbdea76',
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

