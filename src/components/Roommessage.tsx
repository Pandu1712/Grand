import React from "react";

const HotelAbout: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* 🏨 Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://res.cloudinary.com/dd4oiwnep/image/upload/v1761899315/otel6_scxjbz.jpg"
            alt="Hotel Grand VadhuVar"
            className="w-full h-[350px] md:h-[500px] object-cover shadow-xl rounded-tl-[500px] rounded-br-[30px] transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* 📝 Right Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to{" "}
            <span className="text-yellow-600">Hotel Grand VadhuVar</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Experience luxury and comfort in the heart of the city. Whether
            you're here for business or leisure, our hotel offers the perfect
            blend of modern elegance, warm hospitality, and convenient
            amenities. Enjoy spacious rooms, world-class dining, and a relaxing
            ambiance designed to make every stay unforgettable.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            From our premium suites to our signature dining experiences, every
            detail is crafted with care to ensure your comfort. Book your stay
            today and indulge in true luxury at Hotel Grand VadhuVar.
          </p>

         
        </div>
      </div>
    </section>
  );
};

export default HotelAbout;
