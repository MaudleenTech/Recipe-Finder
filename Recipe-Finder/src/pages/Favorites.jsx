import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

const Favorites = () => {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    if (favorites.length === 0) {
      setRecipes([]);
      return;
    }

    const fetchFavorites = async () => {
      try {
        const requests = favorites.map((id) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
          ).then((res) => res.json())
        );

        const responses = await Promise.all(requests);
        const meals = responses.map((res) => res.meals[0]);
        setRecipes(meals);
      } catch (error) {
        console.error("Failed to load favorites");
      }
    };

    fetchFavorites();
  }, [favorites]);

  const toggleFavorite = (id) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter((fav) => fav !== id)
      : [...favorites, id];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">❤️ Your Favorite Recipes</h1>

      {recipes.length === 0 ? (
        <p className="text-gray-600">You have no favorite recipes yet.</p>
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
