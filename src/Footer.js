import React from "react";
import { Link } from "react-router-dom";
const Footer = () => (
  <footer>
    <div className="col-12 text-center border-top">
      <p>Pelajari bagaimana bekerja dengan click pada menu</p>
      <div className="row">
        <Link
          to="resto"
          className="btn btn-dark col-6 col-md-3 p-3 p-md-5 rounded shadow border border white"
        >
          Resto
        </Link>
        <Link
          to="retail"
          className="btn btn-dark col-6 col-md-3 p-3 p-md-5 rounded shadow border border white"
        >
          Retail
        </Link>
        <Link
          to="spek"
          className="btn btn-dark col-6 col-md-3 p-3 p-md-5 rounded shadow border border white"
        >
          Speck
        </Link>
        <a
          href="https://mesinkasir.github.io/e-catalog/TOUCHSCREEN%20POS.pdf"
          className="btn btn-dark col-6 col-md-3 p-3 p-md-5 rounded shadow border border white"
        >
          Download
        </a>
      </div>
      <small>copyrights mesinkasir.now.sh</small>
    </div>
  </footer>
);

export default Footer;
