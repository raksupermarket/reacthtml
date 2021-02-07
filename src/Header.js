import React from "react";
import { Link } from "react-router-dom";
const Header = () => (
  <header>
    <nav className="navbar bg-dark text-white p-3 p-md-3">
      <Link to="/" className="text-white">
        Home
      </Link>
      <Link to="about" className="text-white">
        Gallery
      </Link>
      <Link className="text-white" to="contact">
        Contact
      </Link>
    </nav>
  </header>
);

export default Header;
