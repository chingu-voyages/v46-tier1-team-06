# Zero-Waste Recipes

## Overview:
Reduce food waste by searching our database for an ingredient that you have getting ready to spoil in your refrigerator or pantry.  You'll get a list of delicious recipes made with that exact ingredient.

## Features:

###[Design comp built on Figma](https://www.figma.com/file/JLp3V0M7hHHeFnvGYglq5Y/recipe-app?type=design&node-id=0%3A1&mode=design&t=bgoSiYiUgFwDWgln-1)
###Built using Agile principles and SCRUM methodology 
- Team of 4 Developers: [Begum](https://www.linkedin.com/in/begumvernondeveloper/), [Erica](https://www.linkedin.com/in/charwaeericachong/), [Tauri](https://www.linkedin.com/in/tauri-stclaire/), and [Terri](https://www.linkedin.com/in/terri-fricker/).
- 6 week long sprints
- Tauri operated as designer and product owner in charge of the backlog on Jira
- Our team frequently employed pair programming to teach each other Sass and work on Javascript together
###Focus on Accessibility:
- All colors checked with [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Fonts no smaller than 16px, larger readable recipe cards
- All buttons inputs and icons are labeled for screen readers
    - SVGs are used instead of fonticons to improve access for people who have adjusted their fonts in the browser
- The "View Recipes" buttons and exit-buttons have an additional `aria-describedby`
attribute so that people who use screen readers are forewarned that a modal will be opening up then closing with each respective button
###Dry Code focused on Readability:
- Sass: variables, partials, and nesting
- Semantic Accessible layout:
    - BEM for classes for easy readbility for anyone reading the code
    - SVGs are coded into the HTML to decrease processing power, which is more green!
- Vanilla Javascript that prioritizes readability
    - Async fetch functions

## Running the Project:
- Deployed to: [GH-Pages](link)
- [Github Repo](https://github.com/chingu-voyages/v46-tier1-team-06)

## Dependencies:

**TastyAPI**  Our app fetches recipes from the TastyAPI found at [Rapid API: Tasty API](https://rapidapi.com/apidojo/api/tasty).  The call is made to the `recipes/list` endpoint.

**Dart Sass** [CSS pre-processor](https://sass-lang.com/)

