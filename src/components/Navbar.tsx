import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/GV PNG.png"; // 🖼️ adjust path to your logo

interface SubmenuItem {
  name: string;
  path: string;
}

interface NavItem {
  name: string;
  path: string;
  submenu?: SubmenuItem[];
}

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const location = useLocation();
  const currentDate = new Date().toLocaleDateString();

  const navItems: NavItem[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Accommodation",
      path: "/accommodation",
      submenu: [
        { name: "Premium Rooms", path: "/accommodation/premiumrooms" },
        { name: "Twin Share Rooms", path: "/accommodation/twinshareroom" },
        { name: "Standard Rooms", path: "/accommodation/standardroom" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-[#143447] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Hotel Logo"
            className="w-16 h-16 object-cover rounded-full"
          />
          <span className="text-xl font-bold tracking-wide">
            Hotel Grand VadhuVar
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              <Link
                to={item.path}
                onClick={(e) => {
                  if (item.submenu) {
                    e.preventDefault();
                    setActiveDropdown(activeDropdown === index ? null : index);
                  }
                }}
                className={`font-semibold text-base transition duration-300 ${
                  location.pathname === item.path
                    ? "text-[#f8de71]"
                    : "hover:text-[#f8de71]"
                }`}
              >
                {item.name}
              </Link>

              {/* Dropdown Menu */}
              {item.submenu && activeDropdown === index && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-44 bg-white text-[#143447] rounded-2xl shadow-lg border border-[#f8de71]">
                  {item.submenu.map((sub, subIndex) => (
                    <Link
                      key={subIndex}
                      to={sub.path}
                      onClick={() => setActiveDropdown(null)}
                      className={`block px-4 py-3 text-center text-sm font-medium transition duration-200 hover:bg-[#f8de71] hover:text-[#143447] ${
                        location.pathname === sub.path
                          ? "bg-[#f8de71] text-[#143447]"
                          : ""
                      }`}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Date Badge */}
        <div className="hidden md:block">
          <span className="bg-[#f8de71] text-[#143447] px-3 py-1 rounded-full text-sm font-semibold shadow-md">
            {currentDate}
          </span>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#143447] border-t border-[#f8de71] pb-3">
          {navItems.map((item, index) => (
            <div key={index} className="px-4 py-2">
              <button
                onClick={() => {
                  if (item.submenu) {
                    setActiveDropdown(activeDropdown === index ? null : index);
                  } else {
                    setMenuOpen(false);
                  }
                }}
                className={`w-full text-left font-semibold py-2 rounded-md ${
                  location.pathname === item.path
                    ? "bg-[#f8de71] text-[#143447]"
                    : "hover:bg-[#f8de71] hover:text-[#143447]"
                }`}
              >
                {item.name}
              </button>

              {/* Mobile Submenu */}
              {item.submenu && activeDropdown === index && (
                <div className="pl-4 mt-1">
                  {item.submenu.map((sub, subIndex) => (
                    <Link
                      key={subIndex}
                      to={sub.path}
                      onClick={() => setMenuOpen(false)}
                      className={`block py-1 px-2 rounded text-sm ${
                        location.pathname === sub.path
                          ? "bg-[#f8de71] text-[#143447]"
                          : "text-white hover:bg-[#f8de71] hover:text-[#143447]"
                      }`}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Date */}
          <div className="text-center mt-2">
            <span className="bg-[#f8de71] text-[#143447] px-3 py-1 rounded-full text-sm font-semibold">
              {currentDate}
            </span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
