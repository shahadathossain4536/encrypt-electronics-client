import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import auth from "../../firebase.init";

const Navbar = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  console.log("navbar user clg", user);
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
      {user ? (
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </div>
      ) : (
        <li>
          <button className="btn btn-accent rounded-md">
            <Link to="signin">SingIn</Link>
          </button>
        </li>
      )}
    </>
  );
  return (
    <navbar className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="w-full navbar bg-base-300 rounded-lg shadow-2xl sticky top-0 z-50">
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
