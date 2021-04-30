import React from "react";
import "./homepage.page.css";

import Shop from "../components/Shop/Shop.component";
import NavBar from "../components/NavBar/NavBar.component";

const HomePage = () => (
  <div className="homepage">
    <NavBar />
    <Shop />
  </div>
);

export default HomePage;
