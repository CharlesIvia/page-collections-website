import React from "react";
import { Link } from "react-router-dom";
import { RiFacebookCircleLine } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-social">
        <a href="https://www.pagecollections.co.ke">
          <RiFacebookCircleLine size={37} color="#424f5a" />
        </a>
        <a href="https://www.pagecollections.co.ke">
          <BsInstagram size={30} color="#424f5a" />
        </a>
        <a href="https://www.pagecollections.co.ke">
          <FiTwitter size={30} color="#424f5a" />
        </a>
      </div>
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/">Register</Link>
        <Link to="/">About</Link>
      </div>
      <div className="footer-terms">
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
      </div>

      <div className="footer-copy">
        <p>&copy; 2022 Page Collection Ke</p>
      </div>
    </div>
  );
};
