import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const categories = ["Seafood", "Beef", "Chicken", "Vegetarian"];

const SearchResults = () => {
  const location = useLocation();
  const query = location.state?.query || "";

  const [results, setResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    if (!query && !selectedCategory) return;

    setLoading(true);
    setError("");

    const url = selectedCategory
      ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
      : `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setResults(data.meals || []))
      .catch(() => setError("Failed to load recipes. Please try again."))
      .finally(() => setLoading(false));
  }, [query, selectedCategory]);

  const toggleFavorite = (id) => {
    let updatedFavorites;

    if (favorites.includes(id)) {
      updatedFavorites = favorites.filter((fav) => fav !== id);
    } else {
      updatedFavorites = [...favorites, id];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">
        {selectedCategory
          ? `${selectedCategory} Recipes`
          : query
          ? `Search Results for "${query}"`
          : "Browse Recipes"}
      </h1>

      {/* Category Filter */}
      <div className="flex gap-3 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full border text-sm font-medium transition-all
  ${
    selectedCategory === cat
      ? "bg-blue-500 text-white shadow"
      : "bg-white text-gray-700 hover:bg-blue-50"
  }`}

          >
            {cat}
          </button>
        ))}
      </div>

      {loading && <p>Loading recipes...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && results.length > 0 && (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((recipe) => (
            <div
  key={recipe.idMeal}
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
          ))}
        </div>
      )}

      {!loading && results.length === 0 && !error && (
        <p className="text-gray-700">No recipes found.</p>
      )}
    </div>
  );
};

export default SearchResults;
