const cocktailDB = {
  async randomDrink() {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    const response = await fetch(url);
    const jsonResponse = await response.json();
    if (!jsonResponse) {
      alert("Failed to fetch data");
    }
    const data = await jsonResponse.drinks.map((d) => ({
      id: d.idDrink,
      name: d.strDrink,
      image: d.strDrinkThumb,
      recipe: d.strInstructions,
      ingredients: [
        d.strIngredient1,
        d.strIngredient2,
        d.strIngredient3,
        d.strIngredient4,
        d.strIngredient5,
        d.strIngredient6,
        d.strIngredient7,
        d.strIngredient8,
        d.strIngredient9,
        d.strIngredient10,
        d.strIngredient11,
        d.strIngredient12,
        d.strIngredient13,
        d.strIngredient14,
        d.strIngredient15,
      ],
      measures: [
        d.strMeasure1,
        d.strMeasure2,
        d.strMeasure3,
        d.strMeasure4,
        d.strMeasure5,
        d.strMeasure6,
        d.strMeasure7,
        d.strMeasure8,
        d.strMeasure9,
        d.strMeasure10,
        d.strMeasure11,
        d.strMeasure12,
        d.strMeasure13,
        d.strMeasure14,
        d.strMeasure15,
      ],
    }));

    return data;
  },

  async search(term) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`;
    const response = await fetch(url);
    const jsonResponse = await response.json();
    if (!jsonResponse) {
      alert("Failed to fetch data");
    }
    const data = await jsonResponse.drinks.map((d) => ({
      id: d.idDrink,
      name: d.strDrink,
      image: d.strDrinkThumb,
      recipe: d.strInstructions,
      ingredients: [
        d.strIngredient1,
        d.strIngredient2,
        d.strIngredient3,
        d.strIngredient4,
        d.strIngredient5,
        d.strIngredient6,
        d.strIngredient7,
        d.strIngredient8,
        d.strIngredient9,
        d.strIngredient10,
        d.strIngredient11,
        d.strIngredient12,
        d.strIngredient13,
        d.strIngredient14,
        d.strIngredient15,
      ],
      measures: [
        d.strMeasure1,
        d.strMeasure2,
        d.strMeasure3,
        d.strMeasure4,
        d.strMeasure5,
        d.strMeasure6,
        d.strMeasure7,
        d.strMeasure8,
        d.strMeasure9,
        d.strMeasure10,
        d.strMeasure11,
        d.strMeasure12,
        d.strMeasure13,
        d.strMeasure14,
        d.strMeasure15,
      ],
    }));

    return data;
  },
};

export default cocktailDB;
