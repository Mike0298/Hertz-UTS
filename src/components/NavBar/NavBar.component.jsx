import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.component.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="company">
        <Link to="/" className="title">
          Hertz-UTS
        </Link>
      </div>
      <div className="title">Car Rental Center</div>
      <div className="reserve">
        <Link to="/cart">
          <button>Car Reservation</button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
