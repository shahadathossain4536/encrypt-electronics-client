import React from "react";
import Banner from "./Banner";
import Offer from "./Offer";
import Planning from "./Planning";
import Products from "./Products";
import Statistic from "./Statistic";

const Home = () => {
  return (
    <div>
      <Banner />
      <Offer />
      <Products />
      <Planning />
      <Statistic />
    </div>
  );
};

export default Home;
