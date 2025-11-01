import React from "react";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-16 font-[Poppins] w-full overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        
        {/* 🏨 Left - Logo & Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          
          <p className="text-sm leading-relaxed max-w-xs">
            Experience unparalleled luxury and comfort at Hotel Grand VadhuVar.
            Nestled in the heart of the city, we bring modern elegance,
            exceptional hospitality, and unforgettable experiences.
          </p>
        </div>

        {/* 🔗 Middle - Navigation Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "About Us", "Rooms", "Facilities", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase().replace(" ", "")}`}
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* 📍 Right - Contact Info & Socials */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-center md:justify-start items-center gap-2">
              <MapPin size={16} className="text-gray-400" />
              <span>Hotel Grand VadhuVar, Main Road, Andhra Pradesh</span>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <Phone size={16} className="text-gray-400" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <Mail size={16} className="text-gray-400" />
              <span>info@grandvadhuvar.com</span>
            </li>
          </ul>

          {/* 🌐 Social Icons */}
          <div className="flex justify-center md:justify-start gap-5 mt-4">
            <a href="#" className="hover:text-blue-500 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-pink-500 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-sky-400 transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* 🔻 Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Hotel Grand VadhuVar. All Rights Reserved. |
        Designed with ❤️ by <span className="text-white font-medium">YourName</span>
      </div>
    </footer>
  );
};

export default Footer;
