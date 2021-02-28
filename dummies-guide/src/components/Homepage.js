import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <Fragment>
      <Navbar />
      <Cards />
      <Footer />
    </Fragment>
  );
}
