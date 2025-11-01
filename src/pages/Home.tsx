import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import RoomWelcome from "../components/RoomWelcome";
import Roommessage from "../components/Roommessage";
import OurFacility from "../components/OurFacility";
import Footer from "../components/Footer";
import Contact from "../components/ContInfo";
import About from "../components/About";


const Home: React.FC = () => {
  return (
   <>
   <ImageCarousel />
   <RoomWelcome/>
   <Roommessage/>
   <About/>
   <OurFacility/>
    <Contact/>  
   <Footer/>
   </>
      
    
  );
};

export default Home;
