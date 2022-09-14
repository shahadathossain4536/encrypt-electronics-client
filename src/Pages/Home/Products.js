import React from "react";
import img1 from "../../assets/harmony-2way-364x364.jpg";
import { IoPlay } from "react-icons/io5";
const Products = () => {
  // lg:h-[641px]
  return (
    <section className="w-[370px] lg:w-[1341px]  bg-[#364F6B] rounded-lg lg:mx-auto my-10">
      <div className="grid grid-cols-3">
        <div className="border-b-4 border-dotted border-white"></div>
        <h2 className="text-xl lg:text-6xl text-white py-2 uppercase">
          Products
        </h2>

        <div className="border-b-4 border-dotted border-white"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-3 py-10">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className="" src={img1} alt="Album" />
          </figure>
          <div className="card-body text-left">
            <h2 className="card-title text-2xl">Model: WHS2</h2>
            <ul className="list-disc list-inside ">
              <li>Flame Retardant,</li>
              <li>UV Light Stabilized,</li>
              <li>Unbreakable Poly Carbonate (PC),</li>
              <li>Glossy Finish,</li>
            </ul>
            <p className="text-xl">
              Quantity:{" "}
              <span className="bg-slate-500 text-white rounded-md p-1">
                50000
              </span>{" "}
            </p>
            <p className="text-xl">Price: 5usd/pc</p>
            <div className="card-actions justify-end">
              <button className="btn btn-accent text-white text-xl hover:bg-black">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/400/arch" alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/400/arch" alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/400/arch" alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary ">Listen</button>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-info w-full text-2xl text-white rounded-b-lg rounded-t-none">
        See More <IoPlay />
      </button>
    </section>
  );
};

export default Products;
