import React from "react";

const CategoryCard = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <button className="mt-4 text-blue-500 font-medium hover:underline">
          View Recipe →
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
