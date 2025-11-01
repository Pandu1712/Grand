import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import RoomWelcome from "../components/RoomWelcome";
import Roommessage from "../components/Roommessage";
import OurFacility from "../components/OurFacility";
import Footer from "../components/Bottom";
import ContactPage from "../components/ConInfo";
import About from "../components/About";


const Home: React.FC = () => {
  return (
   <>
   <ImageCarousel />
   <RoomWelcome/>
   <Roommessage/>
   <About/>
   <OurFacility/>
   <ContactPage/>
<Footer/>
   </>
      
    
  );
};

export default Home;
