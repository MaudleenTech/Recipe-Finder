// src/api.js
const apiKey = import.meta.env.VITE_API_KEY;

// Search meals by name
export const searchMeals = async (query) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}&apikey=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.meals || [];
};

// Get a meal by ID
export const getMealById = async (id) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}&apikey=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.meals ? data.meals[0] : null;
};

// Get random meals (for featured section)
export const getRandomMeals = async (count = 6) => {
  const meals = [];
  for (let i = 0; i < count; i++) {
    const url = `https://www.themealdb.com/api/json/v1/1/random.php?apikey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.meals) meals.push(data.meals[0]);
  }
  return meals;
};
