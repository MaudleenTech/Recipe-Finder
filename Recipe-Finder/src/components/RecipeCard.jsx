import { Link } from "react-router-dom";

const RecipeCard = ({ recipe, favorites, toggleFavorite }) => {
  return (
    <div
      className="relative bg-white rounded-xl shadow-md overflow-hidden
      hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Favorite Button */}
      <button
        onClick={() => toggleFavorite(recipe.idMeal)}
        className="absolute top-3 right-3 text-2xl bg-white rounded-full p-1
        shadow hover:scale-110 transition"
      >
        {favorites.includes(recipe.idMeal) ? "❤️" : "🤍"}
      </button>

      <Link to={`/recipe/${recipe.idMeal}`}>
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">
            {recipe.strMeal}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default RecipeCard;
