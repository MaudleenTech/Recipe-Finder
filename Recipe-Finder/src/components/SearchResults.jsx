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

  useEffect(() => {
    if (!query && !selectedCategory) return;

    setLoading(true);
    setError("");

    const url = selectedCategory
      ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
      : `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.meals || []);
      })
      .catch(() => {
        setError("Failed to load recipes. Please try again.");
      })
      .finally(() => setLoading(false));
  }, [query, selectedCategory]);

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
            className={`px-4 py-2 rounded-full border text-sm font-medium transition
              ${
                selectedCategory === cat
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Loading */}
      {loading && <p className="text-lg">Loading recipes...</p>}

      {/* Error */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Results */}
      {!loading && results.length > 0 && (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((recipe) => (
            <Link
              key={recipe.idMeal}
              to={`/recipe/${recipe.idMeal}`}
              className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
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
          ))}
        </div>
      )}

      {!loading && results.length === 0 && !error && (
        <p className="text-gray-700 text-lg">No recipes found.</p>
      )}
    </div>
  );
};

export default SearchResults;
