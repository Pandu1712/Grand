import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import RoomWelcome from "../components/RoomWelcome";
import Roommessage from "../components/Roommessage";
import OurFacility from "../components/OurFacility";
import Contact from "../components/contact";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
   <>
   <ImageCarousel />
   <RoomWelcome/>
   <Roommessage/>
   <OurFacility/>
<Contact/>
   <Footer/>
   </>
      
    
  );
};

export default Home;
