import React from "react";

const Facilities: React.FC = () => {
  const facilities = [
    {
      title: "Accommodation",
      img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761897624/prebed2_fzmgv2.jpg",
      description:
        "Experience our luxurious rooms with modern amenities and elegant interiors.",
    },
    {
      title: "Events",
      img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761899315/hotel2_mfvrdz.jpg",
      description:
        "Perfect venues for weddings, conferences, and corporate meetings.",
    },
    {
      title: "Dining",
      img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761899315/otel6_scxjbz.jpg",
      description:
        "Savor gourmet dishes crafted by top chefs in our fine dining spaces.",
    },
    {
      title: "Parking",
      img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761897614/waiting_quwthc.jpg",
      description:
        "Secure and spacious parking available 24/7 for all guests.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* 🌟 Section Title */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Our <span className="text-yellow-600">Facilities</span>
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Discover comfort, convenience, and class — all in one place.
        </p>

        {/* 🏨 Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* 📸 Facility Image */}
              <div className="relative w-full h-56 md:h-64 overflow-hidden">
                <img
                  src={facility.img}
                  alt={facility.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* 📝 Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {facility.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
