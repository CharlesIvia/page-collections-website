//Required imports
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { HiOutlineShoppingBag } from "react-icons/hi";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="book store" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="about">About</Link>
        <Link to="shopping-cart">
          <HiOutlineShoppingBag size={32} />
        </Link>
        <Link to="register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};
