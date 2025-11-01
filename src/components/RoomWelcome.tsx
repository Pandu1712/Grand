import React from "react";
import { BedDouble, Users, Home } from "lucide-react"; // icons for style

const RoomIntro: React.FC = () => {
  const rooms = [
    {
      title: "Premium Rooms",
      icon: <BedDouble size={40} className="text-yellow-500 mb-4" />,
      description:
        "Enjoy a spacious, elegantly designed room with modern interiors and warm lighting. Step onto your private balcony for fresh air and beautiful views. Perfect for comfort, style, and a touch of open-air luxury.",
    },
    {
      title: "Twin Share",
      icon: <Users size={40} className="text-blue-500 mb-4" />,
      description:
        "A comfortable and stylish room designed for two guests. Features modern interiors, cozy twin beds, and a relaxing ambiance. Perfect for friends or colleagues seeking comfort and convenience.",
    },
    {
      title: "Standard Room",
      icon: <Home size={40} className="text-green-500 mb-4" />,
      description:
        "A cozy and well-furnished room designed for a comfortable stay. Features essential amenities and modern interiors for a pleasant experience. Perfect for budget-friendly travelers who value simplicity and comfort.",
    },
  ];

  return (
    <div className="text-center py-16 px-6 bg-gray-50">
      {/* 🌟 Welcome Section */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Welcome to <span className="text-yellow-600">Hotel Grand VadhuVar</span>
      </h1>
      <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
        Experience luxury and comfort in the heart of the city. Book your stay with us today!
      </p>

      {/* 🏨 Room Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex flex-col items-center text-center">
              {room.icon}
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                {room.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">{room.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomIntro;
