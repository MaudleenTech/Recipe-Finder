import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const goToCategory = (category) => {
    navigate("/search", { state: { query: category } });
  };

  return (
    <footer className="bg-white border-t mt-10 py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold mb-2">Maudelish Guide</h3>
          <p className="text-gray-600 text-sm">
            Discover and share delicious recipes from around the world.
          </p>
        </div>

        {/* Recipes */}
        <div>
          <h4 className="font-semibold mb-2">Recipes</h4>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li
              className="cursor-pointer hover:text-blue-500"
              onClick={() => goToCategory("Breakfast")}
            >
              Breakfast
            </li>
            <li
              className="cursor-pointer hover:text-blue-500"
              onClick={() => goToCategory("Dinner")}
            >
              Lunch & Dinner
            </li>
            <li
              className="cursor-pointer hover:text-blue-500"
              onClick={() => goToCategory("Dessert")}
            >
              Desserts
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-semibold mb-2">Categories</h4>
          <ul className="space-y-1 text-gray-600 text-sm">
            {["Chinese", "African", "Italian", "Vegetarian"].map((cat) => (
              <li
                key={cat}
                className="cursor-pointer hover:text-blue-500"
                onClick={() => goToCategory(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li>
              <Link to="/about" className="hover:text-blue-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-blue-500">
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>

      </div>

      <p className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} Maudelish Guide. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
