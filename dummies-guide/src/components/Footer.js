import React, { useState } from "react";
import styled from "styled-components";

const Footer = () => {
  const mediaLinks = ["fab fa-github", "fab fa-linkedin-in", "fab fa-twitter"];
  return (
    <FooterWrapper>
      <div className="container">
        <ul className="media-links">
          {mediaLinks.map((link, index) => (
            <li key={index}>
              <a href="" target="_blank">
                <i className={link} />
              </a>
            </li>
          ))}
        </ul>
        <div className="tandc">
          <p>Terms and conditions | Privacy policy</p>
        </div>
      </div>
      <div className="copyright">
        <p>@ 2021 Copyright: DummiesGuide.io</p>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  height: 200px;
  background: var(--darker-green);
  opacity: 0.7;
  color: black;
  font-weight: 300;
  padding-top: 12px;
  a {
    text-decoration: none;
    color: white;
  }

  .fa-github {
    color: white;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 12px;
  }

  p {
    padding: 0px 15px;
  }

  .media-links {
    display: flex;
    list-style-type: none;
    background: var(--darker-green);
    li {
      margin: 0px 12px;

      i {
        font-size: 1.2em;
      }
    }
  }

  .tandc {
    margin-top: 8px;
    background: var(--darker-green);
  }

  .copyright {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 65%;
    color: black;
    padding-top: 10px;
    background: #1bb67d;
  }

  @media (max-width: 300px) {
    p {
      font-size: 0.85em;
    }
  }
`;

export default Footer;
