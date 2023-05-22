import React from "react";
// import { Link } from "react-router-dom";
import aboutimg from "../img/About.png"
import Common from "./Common";
const About = () => {
  return (
    <>
     <Common hname="Welcome to About page" imgsrc={aboutimg} exact visit="/contact" btnname="Contact Now"/>
    </>
  );
};

export default About;
