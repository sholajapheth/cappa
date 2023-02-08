import React from "react";
import {
  Catering,
  Contact,
  Gallery,
  Map,
  Menu,
  MyMap,
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
      <MyMap />
      <OnlyFreshFood />
      <Contact />
    </div>
  );
};

export default Home;
