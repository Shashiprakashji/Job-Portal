import React from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";
import CategoryCarousel from "./CategoryCarousel";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
    </>
  );
};

export default Home;
