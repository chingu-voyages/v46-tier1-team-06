const getMealType = function () {
    for (const recipe in recipes) {
        const recipeTags = recipes[recipe].tags[0];
        console.log(recipeTags);
        let mealType = "";
        if (recipeTags) {
            for (const key in recipeTags) {
                if (recipeTags.hasOwnProperty(key))
                mealType += `${recipeTags[key]}`;
            }
            return mealType;
        }
        console.log(mealType);
    }
    /*const nutrition = () => {
        const obj = data.results[0]?.nutrition;
        let result = "";
        if (obj) {
          for (const key in obj) {
            if (obj.hasOwnProperty(key) && key !== "updated_at") {
              result += `${capitalize_firstLetter(key)}: ${obj[key]}, `;
            }
          }
          result = result.slice(0, -2).split(',').map(item => `<li>${item}</li>`).join("");
        }
        return result;
      };*/
  };

  getMealType();