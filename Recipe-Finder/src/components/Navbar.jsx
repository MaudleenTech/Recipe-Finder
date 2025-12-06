import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-gray-800">Maudelish Guide</div>
        <div className="space-x-6">
          <a href="#about" className="text-gray-600 hover:text-gray-900">About Us</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
