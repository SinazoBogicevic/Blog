import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import AboutPage from "./AboutPage";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Navbar />
      <AboutPage />
      <Footer />
    </>
  );
};

export default About;
