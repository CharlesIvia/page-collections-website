//Required imports
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthenticatedHeader = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();

  onAuthStateChanged(auth, (u) => {
    if (u) {
      setUser(u);
    } else {
      console.log("User not found");
    }
  });

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="book store" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="my-about">About</Link>
        <Link to="shopping-cart">
          <HiOutlineShoppingBag size={32} />
        </Link>
        <p>{user.email || "Loading..."}</p>
      </div>
    </div>
  );
};
