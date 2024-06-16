// import React from 'react'

// import Nav from "../../Components/Nav";
import Hero from "../../Section/Hero/Hero";
import Footer from "../../Section/Footer/Footer";
import PopularRepo from "../../Section/PopularRepo/PopularRepo";

const Home = () => {
  return (
    <div className="Home bg-[#1b1b1b] text-[#aeaeae]">
      <Hero />
      <PopularRepo />
      <Footer />
    </div>
  );
};

export default Home;
