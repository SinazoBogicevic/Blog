import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import FormModal from "./FormModal";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactForm />
      <Footer />
      <FormModal />
    </>
  );
};

export default Contact;
