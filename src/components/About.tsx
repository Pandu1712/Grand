import React from "react";

// ✅ Use URLs directly instead of import
const aboutImg =
  "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761899315/hotel1_ckm1od.jpg";
const managerImg =
  "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761899315/hotel1_ckm1od.jpg";
const hospitalityImg =
  "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761899315/hotel1_ckm1od.jpg";
const chefImg =
  "https://res.cloudinary.com/dd4oiwnep/image/upload/v1761899315/hotel1_ckm1od.jpg";

interface Feature {
  title: string;
  desc: string;
}

interface Value {
  title: string;
  desc: string;
}

interface TeamMember {
  name: string;
  role: string;
  img: string;
}

const About: React.FC = () => {
  const features: Feature[] = [
    {
      title: "24/7 Service",
      desc: "Round-the-clock assistance for all your needs.",
    },
    {
      title: "Prime Location",
      desc: "Easily accessible from the airport and city attractions.",
    },
    {
      title: "Security",
      desc: "Our security ensures a safe and peaceful stay.",
    },
  ];

  const values: Value[] = [
    { title: "Hospitality", desc: "We welcome you with warmth and care." },
    { title: "Luxury", desc: "Premium services for premium guests." },
    { title: "Sustainability", desc: "Committed to an eco-friendly future." },
  ];

  const team: TeamMember[] = [
    { name: "John Doe", role: "General Manager", img: managerImg },
    { name: "Sarah Lee", role: "Head of Hospitality", img: hospitalityImg },
    { name: "Michael Chen", role: "Executive Chef", img: chefImg },
  ];

  return (
    <div className="font-[Poppins] text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={aboutImg}
            alt="Hotel Lobby"
            className="rounded-tl-[80px] rounded-br-[80px] shadow-2xl object-cover w-full md:w-[90%] h-[300px] md:h-[450px]"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            About Our Hotel
          </h1>
          <p className="text-gray-600 leading-relaxed mb-4">
            Nestled in the heart of the city,{" "}
            <b>Hotel Grand VadhuVar</b> redefines luxury, comfort, and
            hospitality. Designed for both leisure and business travelers, our
            hotel is a sanctuary where modern elegance meets timeless charm.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you're savoring gourmet dishes, relaxing in our rooftop
            lounge, or rejuvenating at our spa — every experience is curated
            with precision and care.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-6 md:px-16 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900">Our Story</h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Founded in 2005, our hotel stands as a symbol of luxury and modern
          comfort. Located at the city’s prime, we offer exceptional views,
          personalized service, and a memorable experience for both leisure and
          business travelers.
          <br />
          <br />
          Over the years, we’ve evolved with our guests' expectations —
          embracing sustainability, advancing technology, and offering curated
          experiences that blend culture, comfort, and care.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-12 px-6 md:px-16">
        <h2 className="text-3xl font-semibold text-center mb-10 text-gray-900">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section className="px-6 md:px-16 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-10 text-gray-900">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <div
              key={i}
              className="p-6 border rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="bg-gray-50 px-6 md:px-16 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-10 text-gray-900">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 md:px-16 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-10 text-gray-900">
          What Guests Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md p-6 rounded-xl">
            <p className="italic text-gray-600 mb-4">
              “Amazing stay! The staff were genuinely welcoming and helpful
              throughout. The room was spotless and comfortable. Would happily
              stay again.”
            </p>
            <h4 className="font-semibold text-gray-900">— Pabbati Dinesh</h4>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl">
            <p className="italic text-gray-600 mb-4">
              “Had a great experience! Friendly staff and neat rooms — highly
              recommend.”
            </p>
            <h4 className="font-semibold text-gray-900">— Mallikârjun Reddy</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
