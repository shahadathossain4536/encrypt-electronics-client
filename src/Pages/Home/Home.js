import React from "react";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import Faq from "./Faq";
import Offer from "./Offer";
import Planning from "./Planning";
import Products from "./Products";
import Statistic from "./Statistic";
import WorkWith from "./WorkWith";

const Home = () => {
  return (
    <div>
      <Banner />
      <Offer />
      <Products />
      <Planning />
      <Statistic />
      <WorkWith />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
