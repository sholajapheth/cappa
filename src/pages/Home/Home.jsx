import React from "react";
import {
  Catering,
  Contact,
  Gallery,
  Menu,
  Offer,
  OnlyFreshFood,
  OurStory,
  Showcase,
} from "../../components";

const Home = () => {
  return (
    <div>
      <Showcase />
      <OurStory />
      <Menu />
      <Catering />
      <Gallery />
      <Offer />
      <OnlyFreshFood />
      <Contact />
    </div>
  );
};

export default Home;
