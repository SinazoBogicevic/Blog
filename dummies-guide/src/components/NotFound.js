import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import undraw_page_not_found from "../undraw_page_not_found.svg";

const NotFound = () => {
  const variants = {
    initial: {
      opacity: 0,
      y: "100%",
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: "-100%",
    },
  };

  const transitions = {
    duration: 2,
    type: "spring",
    stiffness: 500,
  };
  return (
    <NotFoundWrapper
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
      transition={transitions}
    >
      <div className="image-container">
        <img src={undraw_page_not_found} alt="404" />
      </div>
      <div className="heading-container">
        <h1>oopsy.. page not found</h1>
      </div>
      <div className="advice">
        <p>we suggest you go to the homepage while we fix the problem</p>
      </div>
      <Link to="/">back to home</Link>
    </NotFoundWrapper>
  );
};

const NotFoundWrapper = motion.custom(styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1,
  a {
    text-transform: uppercase;
  }

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    0verflow-y: hidden;
    img {
      width: 65%;
    }
  }

  .heading-container {
    width: 70%;
    text-align: center;
    margin: 16px 24px;
  }

  .advice {
    width: 45%;
    text-align: center;
    margin-right: 24px;
    p {
      font-size: 1.5em;
      font-weight: 300;
    }
  }

  a {
    width: 25%;
    text-align: center;
    padding: 20px 12px;
    background: var(--darker-green);
    color: white;
    font-weight: 700;
    transition: 0.4s tranform;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 20px;
    margin: 20px 0px 32px;

    &:hover {
      background: var(--lighter-green);
    }

    &:active {
      tranform: scale(0.85);
    }
  }

  @media (max-width: 800px) {
    .advice,
    .heading-container {
      margin-left: 24px;
      h1 {
        font-size: 1.3rem;
      }
    }

    .image-container {
      width: 90%;
      height: 250px;
      img {
        width: 75%;
      }
    }

    .advice {
      p {
        font-size: 0.95em;
      }
    }
    a {
      width: 50%;
    }
  }

  @media (max-width: 600px) {
    .image-container {
      width: 90%;
      height: 250px;
      img {
        width: 75%;
      }
    }

    .heading-container {
    }
  }
`);

export default NotFound;
