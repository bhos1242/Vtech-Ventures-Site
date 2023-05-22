import React from "react";
// import { Link } from "react-router-dom";
import headerimg from "../logo/png/logo-no-bg.png";
import "animate.css/animate.min.css"; // Import Animate.css
import Common from "./Common";

const Home = () => {
  return (
   <Common hname=" Grow your business with" imgsrc={headerimg} visit="/service" btnname="Get Started"/>
  );
};

export default Home;
