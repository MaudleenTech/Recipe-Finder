import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import { Link } from "react-router-dom";


const HomePage = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [featuredRecipes, setFeaturedRecipes] = useState([]);
  const [trendingRecipes, setTrendingRecipes] = useState([]);

  // Fetch featured recipes from TheMealDB
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => res.json())
      .then((data) => setFeaturedRecipes(data.meals.slice(0, 3))) // take first 3 meals
      .catch((err) => console.error(err));
  }, []);
  // Fetch Trending Recipes
  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const promises = [
          fetch("https://www.themealdb.com/api/json/v1/1/random.php").then((r) => r.json()),
          fetch("https://www.themealdb.com/api/json/v1/1/random.php").then((r) => r.json()),
          fetch("https://www.themealdb.com/api/json/v1/1/random.php").then((r) => r.json()),
        ];

        const results = await Promise.all(promises);

        setTrendingRecipes(results.map((meal) => meal.meals[0]));
      } catch (error) {
        console.error("Error fetching trending meals:", error);
      }
    };
    fetchTrending();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate("/search", { state: { query } });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="relative">
        <img
          src="https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg"
          alt="Hero"
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Delicious Recipes from Around the World
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-6">
            Explore thousands of recipes, get inspired by our collections, and cook like a pro!
          </p>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="flex w-full max-w-xl mx-auto"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search recipes..."
              className="flex-grow p-3 rounded-l-lg focus:outline-none text-gray-800"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 rounded-r-lg font-semibold"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Featured Recipes
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {featuredRecipes.map((recipe) => (
            <CategoryCard
              key={recipe.idMeal}
              image={recipe.strMealThumb}
              title={recipe.strMeal}
              description="Delicious meal from TheMealDB"
            />
          ))}
        </div>
      </section>

      {/* Trending Recipes Section */}
      <section className="container mx-auto pb-16 px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Trending Recipes</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {trendingRecipes.map((meal) => (
            <CategoryCard
              key={meal.idMeal}
              image={meal.strMealThumb}
              title={meal.strMeal}
              description="Currently trending recipe"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
