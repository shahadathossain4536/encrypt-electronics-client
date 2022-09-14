import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
const Navbar = ({ children }) => {
  const menuItem = (
    <>
      <li>
        <NavLink className="rounded-xl mr-3" to="/products">
          Products
        </NavLink>
      </li>
      <li>
        <NavLink className="rounded-xl mr-3" to="/about">
          About
        </NavLink>
      </li>
      <li>
        <Link to="/signin">
          <button className="btn text-white">SingIn</button>
        </Link>
      </li>
    </>
  );
  return (
    <navbar className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="w-full navbar bg-base-300 rounded-lg shadow-xl">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <Link to="/">
              <img src={logo} alt="" srcset="" />
            </Link>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* <!-- Navbar menu content here --> */}
              {menuItem}
            </ul>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          {menuItem}
        </ul>
      </div>
    </navbar>
  );
};

export default Navbar;
