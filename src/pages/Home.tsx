import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">🏨 Welcome to Grand Hotel</h1>
      <p className="text-lg text-gray-700 max-w-md text-center">
        Experience luxury and comfort in every stay. This is your Home page —
        everything is working perfectly! 🌟
      </p>
    </div>
  );
};

export default Home;
