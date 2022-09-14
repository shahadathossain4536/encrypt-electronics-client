import React from "react";
import { Link } from "react-router-dom";
import offerImg1 from "../../assets/h9-single-banner-img-1.jpg";
import offerImg2 from "../../assets/h9-single-banner-img-2.jpg";
import offerImg3 from "../../assets/h9-single-banner-img-3.jpg";
const Offer = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 w-[370px] lg:w-[1341px]">
        <Link to="/">
          {" "}
          <img
            className="hover:scale-95 transition duration-700 ease-in-out"
            src={offerImg1}
            alt=""
            srcset=""
          />
        </Link>
        <Link to="/">
          {" "}
          <img
            className="hover:scale-95 transition duration-700 ease-in-out"
            src={offerImg2}
            alt=""
            srcset=""
          />
        </Link>
        <Link to="/">
          {" "}
          <img
            className="hover:scale-95 transition duration-700 ease-in-out"
            src={offerImg3}
            alt=""
            srcset=""
          />
        </Link>
      </div>
    </div>
  );
};

export default Offer;
