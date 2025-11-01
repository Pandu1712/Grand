import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/GV PNG.png"; // 🖼️ adjust path to your logo

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* 🏨 Left Section - Logo & Description */}
        <div className="flex flex-col items-start">
          <img src={logo} alt="Hotel Grand VadhuVar" className="w-20 h-20 mb-4" />
          <h2 className="text-xl font-semibold text-white">Hotel Grand VadhuVar</h2>
          <p className="mt-3 text-gray-400 leading-relaxed text-sm">
            Experience luxury, comfort, and elegance in the heart of the city.
            Your perfect stay begins here — where every moment feels special.
          </p>
        </div>

        {/* 🧭 Middle Section - Navigation Links */}
        <div className="flex flex-col items-center sm:items-start lg:items-center">
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-yellow-400 transition duration-200 cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 transition duration-200 cursor-pointer">About</li>
            <li className="hover:text-yellow-400 transition duration-200 cursor-pointer">Accommodation</li>
            <li className="hover:text-yellow-400 transition duration-200 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* 📍 Right Section - Address & Social Icons */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">Contact Us</h3>
          <div className="flex items-start mb-2">
            <MapPin className="text-yellow-500 mr-2" size={18} />
            <p className="text-sm text-gray-300">
              Hotel Grand VadhuVar, Near RTC Complex, Eluru, Andhra Pradesh
            </p>
          </div>
          <div className="flex items-center mb-2">
            <Phone className="text-yellow-500 mr-2" size={18} />
            <p className="text-sm text-gray-300">+91 98765 43210</p>
          </div>
          <div className="flex items-center mb-4">
            <Mail className="text-yellow-500 mr-2" size={18} />
            <p className="text-sm text-gray-300">info@grandvadhuvar.com</p>
          </div>

          {/* 🌐 Social Media Icons */}
          <div className="flex space-x-4 mt-3">
            <Facebook className="text-gray-300 hover:text-yellow-500 transition duration-200 cursor-pointer" size={22} />
            <Instagram className="text-gray-300 hover:text-yellow-500 transition duration-200 cursor-pointer" size={22} />
            <Twitter className="text-gray-300 hover:text-yellow-500 transition duration-200 cursor-pointer" size={22} />
          </div>
        </div>
      </div>

      {/* 📌 Bottom line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Hotel Grand VadhuVar — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
