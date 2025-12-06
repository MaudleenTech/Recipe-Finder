# 🍽️ Maudelish Guide – Recipe Finder

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-v18-blue?logo=react)](https://reactjs.org/)
[![Tailwind](https://img.shields.io/badge/TailwindCSS-v3-blue?logo=tailwind-css)](https://tailwindcss.com/)

---

## **Table of Contents**

* [Project Overview](#project-overview)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Installation & Setup](#installation--setup)
* [Folder Structure](#folder-structure)
* [API Integration](#api-integration)
* [Contributing](#contributing)
* [Author](#author)
* [License](#license)

---

## **Project Overview**

**Maudelish Guide** is a modern recipe finder web application built using React and Tailwind CSS.
It allows users to:

* Explore featured meals from different cuisines
* Search for any recipe by name
* View full cooking instructions and ingredients
* Browse real meal images fetched from **TheMealDB API**

This capstone project demonstrates front-end development skills including React routing, API integration, UI design, and responsive layouts.

---

## **Features**

* **Dynamic Recipe Search:** Type a food name and instantly retrieve matching recipes.
* **Recipe Details Page:** Get full cooking instructions, ingredients, and preparation steps.
* **Featured Recipes:** Curated list of meals displayed on the homepage.
* **Real Images from API:** No placeholder images — real meal thumbnails from TheMealDB.
* **Fully Responsive:** Clean and optimized design for mobile, tablet, and desktop.
* **Modern UI:** Styled with Tailwind CSS for sleek and simple aesthetics.

---

## **Technologies Used**

* **React (Vite)**
* **React Router v6**
* **Tailwind CSS**
* **JavaScript ES6+**
* **TheMealDB API**
* **Git & GitHub**

---

## **Installation & Setup**

1. **Clone the repository**

```bash
git clone https://github.com/your-username/recipe-finder.git
cd recipe-finder
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. Open in browser:

```
http://localhost:5173
```

---

## **Folder Structure**

```
recipe-finder/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ HomePage.jsx
│  │  ├─ SearchResults.jsx
│  │  ├─ RecipeDetails.jsx
│  │  └─ CategoryCard.jsx
│  ├─ index.css
│  └─ main.jsx
├─ package.json
├─ tailwind.config.js
└─ vite.config.js
```

---

## **API Integration**

This project uses **TheMealDB free API**.

### **Endpoints Used**

* Search meals by name:

  ```
  https://www.themealdb.com/api/json/v1/1/search.php?s={query}
  ```

* Get a meal by ID:

  ```
  https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}
  ```

Each meal includes:

* `strMeal` – meal name
* `strMealThumb` – image URL
* `strInstructions` – full recipe steps
* `strIngredient#` / `strMeasure#` – up to 20 ingredients

---

## **Contributing**

Contributions are welcome!

1. Fork this repo
2. Create a new branch
3. Make your improvements
4. Submit a pull request

---

## **Author**

👩‍💻 **Maudleen Imonirioma**
Front-End Developer | ALX Software Engineering Student
🔗 GitHub: [https://github.com/MaudleenTech](https://github.com/MaudleenTech)
📧 Email: [maudleen.imoni@gmail.com](mailto:maudleen.imoni@gmail.com)

---
