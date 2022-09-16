import React from "react";
import logoWhite from "../../assets/logo-white.svg";
import facebook from "../../assets/facebook.svg";
import instgram from "../../assets/square-instagram.svg";
import twitter from "../../assets/square-twitter.svg";
import brandLogo from "../../assets/Walton-logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="w-[370px] lg:w-[1341px] lg:h-[641px] bg-[#364F6B] rounded-t-lg lg:mx-auto ">
      <div className="flex flex-col lg:flex-row justify-start lg:justify-evenly items-center pt-10 lg:pt-20 lg:pb-10  ">
        <div>
          <img
            className="w-[360px] lg:w-[350px]  bg-white p-4 rounded-lg"
            src={brandLogo}
            alt=""
          />
        </div>
        <div className="w-[370px] lg:w-[474px] h-[173px]">
          <div className="grid grid-cols-2 gap-5">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs bg-slate-900 text-white"
            />
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full max-w-xs bg-slate-900 text-white"
            />
          </div>
          <div>
            <textarea
              className="textarea textarea-bordered w-[370px] lg:w-[470px] my-2 h-20 resize-none bg-slate-900 text-white"
              placeholder="Message"
            ></textarea>
          </div>
          <div>
            <button className="btn btn-accent btn-sm rounded-lg w-full ">
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pt-10 px-5">
        <div className=" grid grid-cols-2  lg:grid-cols-4 lg:gap-32 gap-10 sm:px-5">
          <div>
            <img
              className="w-[116px] h-[60px]"
              src={logoWhite}
              alt=""
              srcset=""
            />
            <div className="flex gap-2 pt-3">
              <img className="w-10" src={facebook} alt="" srcset="" />
              <img className="w-10" src={instgram} alt="" srcset="" />
              <img className="w-10" src={twitter} alt="" srcset="" />
            </div>
          </div>
          <div className="text-white">
            <p className="text-xl pb-5">Address</p>
            <p>
              0199 Taylor Park, <br /> North Dakota, USA
            </p>
          </div>
          <div className="text-white">
            <p className="text-xl pb-5">Call us on</p>
            <p>+1 98723 42023</p>
            <p>info@logoipsum.com</p>
          </div>
          <div className="text-white">
            <p className="text-xl pb-5">Our Policies</p>
            <Link to="/">Privacy Policy</Link>
            <br />
            <Link to="/">Terms of Use</Link>
            <br />
            <Link to="/">Refund Policy</Link>
          </div>
        </div>
      </div>
      <div className="border-b-2 py-10 mx-14"></div>
      <p className="text-center pt-10 mb-5 text-white">
        Copyright © Encrypt Electronics. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
