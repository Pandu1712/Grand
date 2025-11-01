import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-800 py-10 px-6 md:px-16">
      {/* 🔹 Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-[#b48b57] mb-3">
          Contact Us
        </h2>
        <p className="text-gray-600 text-lg">
          We’d love to hear from you — reach out for bookings or inquiries.
        </p>
      </div>

      {/* 🔹 Contact Form + Map (2 Columns) */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* 📝 Left: Contact Form */}
        <form className="bg-white shadow-xl rounded-2xl p-8 space-y-5">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h3>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b48b57]"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b48b57]"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b48b57]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#b48b57] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#a17945] transition-all w-full md:w-auto"
          >
            Send Message
          </button>
        </form>

        {/* 🗺️ Right: Google Map */}
        <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] md:h-full">
          <iframe
            title="Hotel Grand VadhuVar Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.603690206045!2d80.0982708!3d16.895488099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35a900419edd85%3A0xbd1626cce20b8bc3!2sHotel%20Grand%20VadhuVar!5e0!3m2!1sen!2sin!4v1761978099433!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
