# Zero-Waste Recipes

## Overview:
Reduce food waste by searching our database for an ingredient that you have getting ready to spoil in your refrigerator or pantry.  You'll get a list of delicious recipes made with that exact ingredient.

## Features:

- Design comp built on Figma, including mobile and tablet versions
    - All colors checked with [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
    - Fonts no smaller than 16px, larger readable recipe cards
- Sass: variables, partials, and nesting
- Built using Agile principles and SCRUM methodology in a series of sprints
- Our team frequently employed pair programming to teach other Sass and work on Javascript together
- Semantic Accessible layout:
    - BEM for classes for easy readbility for anyone reading the code
    - All buttons inputs and icons are labeled for screen readers
    - SVGs are used instead of fonticons to improve access for people who have adjusted their fonts in the browser
    - SVGs are coded into the HTML to decrease processing power, which is more green!
    - The "View Recipes" buttons and exit-buttons have an additional `aria-describedby`
attribute so that people who use screen readers are forewarned that a modal will be opening up then closing with each respective button
- Vanilla Javascript that prioritizes readability
    - Async fetch functions

## Running the Project:
- Deployed to: [GH-Pages](link)
- [Github Repo](https://github.com/chingu-voyages/v46-tier1-team-06)

## Dependencies:

**TastyAPI**  Our app fetches recipes from the TastyAPI found at [Rapid API: Tasty API](https://rapidapi.com/apidojo/api/tasty).  The call is made to the `recipes/list` endpoint.

**IcoMoon for SVGs** [Main website](https://icomoon.io/), and Terms of Use(https://icomoon.io/#termsofuse)

