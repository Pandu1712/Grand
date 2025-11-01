import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/GV PNG.png";

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
  const [activeDropdownDesktop, setActiveDropdownDesktop] = useState<number | null>(null);
  const [activeDropdownMobile, setActiveDropdownMobile] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const currentDate = new Date().toLocaleDateString();

  const toggleDropdownDesktop = (index: number) => {
    setActiveDropdownDesktop(activeDropdownDesktop === index ? null : index);
  };

  const toggleDropdownMobile = (index: number) => {
    setActiveDropdownMobile(activeDropdownMobile === index ? null : index);
  };

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
    <header className="bg-[#143447] shadow sticky top-0 z-50 text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img src={logo} alt="Logo" className="w-20 h-20 rounded-full object-cover" />
          <span className="text-xl font-bold">Hotel Grand VadhuVar</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              <Link
                to={item.path}
                onClick={(e) => {
                  if (item.submenu) {
                    e.preventDefault();
                    toggleDropdownDesktop(index);
                  }
                }}
                className={`relative font-semibold px-4 py-2 transition duration-300 group cursor-pointer ${
                  location.pathname === item.path ? "text-[#f8de71]" : "text-white"
                }`}
              >
                <span className="absolute inset-0 bg-[#143447] rounded-tl-2xl rounded-br-2xl scale-0 group-hover:scale-100 transition-transform duration-300 z-[-1]"></span>
                <span className="relative z-10">
                  {item.name}
                  <span className="block h-0.5 bg-[#f8de71] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 mt-1 ml-4 rounded-full"></span>
                </span>
              </Link>

              {/* Desktop Dropdown */}
              {activeDropdownDesktop === index && item.submenu && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-3 bg-white text-[#143447] shadow-xl rounded-2xl overflow-hidden z-30 w-44 border border-[#f8de71]">
                  {item.submenu.map((subItem, i) => (
                    <Link
                      key={i}
                      to={subItem.path}
                      onClick={() => setActiveDropdownDesktop(null)}
                      className={`block px-4 py-3 text-center text-sm font-medium transition-all duration-200 hover:bg-[#f8de71] hover:text-[#143447] ${
                        location.pathname === subItem.path
                          ? "bg-[#f8de71] text-[#143447]"
                          : ""
                      } ${i < item.submenu!.length - 1 ? "border-b border-gray-200" : ""}`}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          <span className="text-sm text-[#143447] bg-[#f8de71] px-3 py-1 rounded-full font-semibold shadow">
            {currentDate}
          </span>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#143447] px-4 pb-4">
          {navItems.map((item, index) => (
            <div key={index} className="mb-2">
              <Link
                to={item.path}
                onClick={(e) => {
                  if (item.submenu) {
                    e.preventDefault();
                    toggleDropdownMobile(index);
                  } else {
                    setMenuOpen(false);
                  }
                }}
                className={`w-full text-left font-medium py-2 px-3 rounded-md transition block cursor-pointer ${
                  location.pathname === item.path
                    ? "bg-[#f8de71] text-black"
                    : "text-white hover:bg-[#f8de71] hover:text-black"
                }`}
              >
                {item.name}
              </Link>

              {activeDropdownMobile === index && item.submenu && (
                <div className="pl-4 mt-1 space-y-1 text-sm text-white">
                  {item.submenu.map((subItem, i) => (
                    <Link
                      key={i}
                      to={subItem.path}
                      onClick={() => setMenuOpen(false)}
                      className={`block py-1 px-2 rounded transition ${
                        location.pathname === subItem.path
                          ? "bg-[#f8de71] text-black"
                          : "hover:bg-[#f8de71] hover:text-black text-white"
                      }`}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
