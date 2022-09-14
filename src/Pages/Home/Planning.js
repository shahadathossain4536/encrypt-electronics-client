import React from "react";
import { Link } from "react-router-dom";
import cardImg1 from "../../assets/FINANCIAL PLANNING.svg";
import cardImg2 from "../../assets/noun-business-services-729771.svg";
import cardImg3 from "../../assets/noun-quality-2277894.svg";
const Planning = () => {
  return (
    <div className="flex justify-center items-center mb-10 mx-auto">
      <div className="w-[1341px] grid grid-cols-1 lg:grid-cols-3 gap-10  ">
        <div className="w-[370px] lg:w-[420px] h-[400px] bg-[#364F6B] rounded-lg hover:bg-white text-white hover:shadow-2xl duration-700 ease-in-out hover:text-[#364F6B] ">
          <p className="uppercase text-orange-600 text-2xl text-left font-semibold pl-12 py-8">
            FINANCIAL PLANNING
          </p>
          <img
            className="w-[200px] text-white pl-12"
            src={cardImg1}
            alt=""
            srcset=""
          />
          <p className="px-12 text-justify leading-8">
            Suspendisse tempus, enim at convallis maximus faucibus lorem at
            rhoncus justo tellus....{" "}
            <span>
              <button>
                <Link className="underline" to="/">
                  {" "}
                  read more
                </Link>
              </button>{" "}
            </span>
          </p>
        </div>
        <div className="w-[370px] lg:w-[420px] h-[400px] bg-[#364F6B] rounded-lg hover:bg-white text-white hover:shadow-2xl duration-700 ease-in-out hover:text-[#364F6B] ">
          <p className="uppercase text-orange-600 text-2xl text-left font-semibold pl-12 py-8">
            BUSINESS SERVICES
          </p>
          <img
            className="w-[200px] text-white pl-12"
            src={cardImg2}
            alt=""
            srcset=""
          />
          <p className="px-12 text-justify leading-8">
            Vestibulum at dolor eleifend vehicula vitae tristique nunc sed
            gravida at turpis tristique.....{" "}
            <span>
              <button>
                <Link className="underline" to="/">
                  {" "}
                  read more
                </Link>
              </button>{" "}
            </span>
          </p>
        </div>
        <div className="w-[370px] lg:w-[420px] h-[400px] bg-[#364F6B] rounded-lg hover:bg-white text-white hover:shadow-2xl duration-700 ease-in-out hover:text-[#364F6B] ">
          <p className="uppercase text-orange-600 text-2xl text-left font-semibold pl-12 py-8">
            QUALITY RESOURCING
          </p>
          <img
            className="w-[200px] text-white pl-12"
            src={cardImg3}
            alt=""
            srcset=""
          />
          <p className="px-12 text-justify leading-8">
            Gravida sodales condimentum pellentesq accumsan orci quam sagittis
            sapien.....{" "}
            <span>
              <button>
                <Link className="underline" to="/">
                  {" "}
                  read more
                </Link>
              </button>{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Planning;
