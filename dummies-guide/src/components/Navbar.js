import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  const openToggle = () => {
    const toggle = document.getElementsByClassName("links-container")[0];

    toggle.classList.toggle("active");
  };

  const closeToggle = () => {
    const toggle = document.getElementsByClassName("links-container")[0];

    toggle.classList.toggle("active", false);
  };
  return (
    <Nav>
      <Logo to="/">DummiesGuide</Logo>
      <div className="links-container">
        <ol onClick={() => closeToggle()}>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <Link to="/search">search</Link>
          </li>
        </ol>
        <div className="toggle" onClick={() => openToggle()}>
          <div className="toggler top"></div>
          <div className="toggler middle"></div>
          <div className="toggler bottom"></div>
        </div>
        <ContactButton className="button contact-button" to="/contact">
          contact
        </ContactButton>
      </div>
    </Nav>
  );
}

const Nav = styled.header`
  display: flex;
  position: relative;
  width: 100%;
  margin: 25px 50px 40px;
  @media (max-width: 800px) {
    width: 90%;
    margin-right: 0px;
  }
`;

const Logo = styled(Link)`
  font-family: "Fredericka the Great", cursive;
  font-size: 4.5vw;
  cursor: pointer;
  text-decoration: none;
  color: var(--black);
  &:active {
    color: var(--black);
  }
`;

const ContactButton = styled(Link)`
  color: white;
  &:focus {
    color: white;
  }
`;
