import React from "react";

import "./NavBar.component.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="company">Hertz-UTS</div>
      <div className="title">Car Rental Center</div>
      <div className="reserve">
        <button>Car Reservation</button>
      </div>
    </div>
  );
}

export default NavBar;
