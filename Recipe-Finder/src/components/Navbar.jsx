import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Brand / Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-gray-800 hover:text-blue-500"
        >
          Maudelish Guide
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link
            to="/about"
            className="text-gray-600 hover:text-gray-900"
          >
            About Us
          </Link>

          <Link
            to="/contact"
            className="text-gray-600 hover:text-gray-900"
          >
            Contact
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
