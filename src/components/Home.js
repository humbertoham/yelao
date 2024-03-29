import React from "react";
import About from "./About";
import Exa from "./Exa";
import Banner from "./Banner";
import Foot from "./Foot";
import Map from "./Map";
import Contact from "./Contact";
import Section from "./Section";
import MenuSec from "./Work";
import Examples from "./Examples";
const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Exa />
      <Section />
      <MenuSec />
      <Examples/>
      <Contact />
      <Map />
      <Foot />
    </>
  );
};

export default Home;
