import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/GV PNG.png"; // 🖼️ Replace with your logo path

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dateTime, setDateTime] = useState<string>("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
      });
      setDateTime(formatted);
    };
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo + Hotel Name */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Hotel Logo" className="h-10 w-10 rounded-full" />
            <h1 className="text-lg sm:text-xl font-semibold">Grand Hotel</h1>
          </div>

          {/* Center: Nav Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-yellow-300 transition-colors duration-300">
              Home
            </a>
            <a href="#about" className="hover:text-yellow-300 transition-colors duration-300">
              About
            </a>
            <a href="#accommodation" className="hover:text-yellow-300 transition-colors duration-300">
              Accommodation
            </a>
            <a href="#contact" className="hover:text-yellow-300 transition-colors duration-300">
              Contact
            </a>
          </div>

          {/* Right: Date & Time */}
          <div className="hidden md:block text-sm font-medium">{dateTime}</div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-900 text-center pb-4">
          <a
            href="#home"
            className="block py-2 hover:bg-indigo-700 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-2 hover:bg-indigo-700 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#accommodation"
            className="block py-2 hover:bg-indigo-700 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Accommodation
          </a>
          <a
            href="#contact"
            className="block py-2 hover:bg-indigo-700 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <div className="mt-2 text-sm text-gray-200">{dateTime}</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
