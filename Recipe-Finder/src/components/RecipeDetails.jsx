import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data.meals[0]))
      .catch((err) => console.error(err));
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-20">Loading recipe...</p>;
  }

  // Build ingredients array
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-4">{recipe.strMeal}</h1>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />
      <p className="text-gray-700 mb-6">{recipe.strInstructions}</p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700">
          {ingredients.map((ing, idx) => (
            <li key={idx}>{ing}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetails;
