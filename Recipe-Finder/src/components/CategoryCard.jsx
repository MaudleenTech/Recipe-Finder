import { Link } from "react-router-dom";

const CategoryCard = ({ image, title, description, id }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        <Link
          to={`/recipe/${id}`}
          className="text-blue-500 font-semibold hover:underline"
        >
          View Recipe →
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
