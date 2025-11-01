import React from "react";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import logo from "../assets/GV PNG.png"; // 🖼️ Replace with your logo path

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-16 font-[Poppins]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
        {/* 🏨 Left - Logo & Description */}
        <div className="text-center md:text-left">
          <img
            src={logo}
            alt="Hotel Grand VadhuVar"
            className="w-28 mx-auto md:mx-0 mb-4"
          />
          <p className="text-sm leading-relaxed">
            Experience unparalleled luxury and comfort at Hotel Grand VadhuVar.
            Nestled in the heart of the city, we bring together modern elegance,
            exceptional hospitality, and unforgettable experiences.
          </p>
        </div>

        {/* 🔗 Middle - Navigation Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="/rooms" className="hover:text-white transition-colors">
                Rooms
              </a>
            </li>
            <li>
              <a href="/facilities" className="hover:text-white transition-colors">
                Facilities
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* 📍 Right - Contact Info & Socials */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-center md:justify-start items-center gap-2">
              <MapPin size={16} />
              <span>Hotel Grand VadhuVar, Main Road, Andhra Pradesh</span>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <Phone size={16} />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <Mail size={16} />
              <span>info@grandvadhuvar.com</span>
            </li>
          </ul>

          {/* 🌐 Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="#" className="hover:text-blue-500 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-sky-400 transition">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* 🔻 Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Hotel Grand VadhuVar. All Rights Reserved. |
        Designed with ❤️ by YourName
      </div>
    </footer>
  );
};

export default Footer;
