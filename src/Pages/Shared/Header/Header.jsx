import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";

const Header = () => {
  return (
    <div class="navbar bg-base-100 px-16">
      <div class="flex justify-between">
        <Link to="/" class="md:w-4/12 w-4/12 normal-case text-xl">
          <img src={logo} alt="" />
        </Link>
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box font-semibold uppercase"
          >
            <li>
              <Link className="focus:bg-none" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/myportfolio">My Portfolio</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
          </ul>
        </div>
      </div>
      <div class="justify-between hidden lg:flex ">
        <ul class="menu menu-horizontal p-0  font-semibold uppercase">
          <li>
            <Link className="bg-none focus:outline-none" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/myportfolio">My Portfolio</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
