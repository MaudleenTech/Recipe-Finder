import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const query = location.state?.query || "";
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then((res) => res.json())
        .then((data) => {
          setResults(data.meals || []); // empty array if no results
        })
        .catch((err) => console.error(err));
    }
  }, [query]);

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">
        Search Results {query && `for "${query}"`}
      </h1>

      {results.length > 0 ? (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((recipe) => (
            <Link
              key={recipe.idMeal}
              to={`/recipe/${recipe.idMeal}`}
              className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
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
      ) : (
        <p className="text-gray-700 text-lg">
          No results found for "{query}".
        </p>
      )}
    </div>
  );
};

export default SearchResults;
