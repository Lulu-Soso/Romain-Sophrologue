import React from "react";
import Header from "./components/header/Header";
import AboutUs from "./components/about/AboutUs";
import TestimonialContainer from "./components/testimonial/TestimonialContainer";
import Formations from "./components/formations/Formations";
import Partners from "./components/partners/Partners";

const Home = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <Formations />
      <TestimonialContainer />
      <Partners />
    </>
  );
};

export default Home;
