import React, { useState } from "react";
import styled from "styled-components";
import undraw_Terms from "../undraw_Terms.svg";
import axios from "axios";
import { useDispatch } from "react-redux";
import { modalAction } from "./actions/modalAction";
import { motion } from "framer-motion";

const ContactForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mailData, setMailData] = useState({
    replyTo: "",
    text: "",
  });

  const variants = {
    initial: {
      opacity: 0,
      x: "-100%",
    },
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: "100%",
    },
  };

  const transitions = {
    dampness: 100,
  };

  const clearTextInputs = () => {
    setEmail("");
    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setMailData((prevState) => ({
      ...prevState,
      replyTo: email,
      text: message,
    }));

    axios
      .post("/api/email", mailData)
      .then((res) => {
        clearTextInputs();
        dispatch(modalAction(true));
        console.log("sent to backend");
      })
      .catch((err) => {
        console.log(`${err}`);
      });
    /**
     * shows dialog when message sent
     */
    return;
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  return (
    <FormContainer
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
      transition={transitions}
    >
      <form method="POST" onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            value={email}
            id="email"
            placeholder=""
            required
            autoComplete="off"
            onChange={handleEmail}
          />
          <label htmlFor="email">
            <span className="label-name">Email</span>
          </label>
        </div>
        <div>
          <textarea
            name="message"
            value={message}
            id="message"
            placeholder=""
            onChange={handleMessage}
            required
          />
          <label htmlFor="message">
            <span className="label-name">Message</span>
          </label>
        </div>
        <button type="submit" className="button">
          send
        </button>
      </form>
      <div className="img">
        <img src={undraw_Terms} alt="notebook" />
      </div>
    </FormContainer>
  );
};

const FormContainer = motion.custom(styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  flex: 0.5 0 auto;
  position: relative;
  margin: 25px 50px 40px;
  align-self: center;

  form {
    display: flex;
    flex-direction: column;
    height: fit-content;
    div {
      position: relative;
      width: 100%;
      height: fit-content;
      margin: 20px 0px;
      &:nth-child(1) {
        height: 20%;
      }

      label .label-name {
        position: absolute;
        top: 50%;
        left: 15px;
        transform: translateY(-50%);
        transition: all 0.6s ease;
        pointer-events: none;
      }

      input[type="email"] {
        width: 100%;
        border: 2px solid var(--darker-green);
        padding: 20px 0px 6px 15px;
        font-size: 0.85em;
        &:focus {
          outline: none;
          font-size: 1.2em;
          font-weight: 300;
          & + label .label-name {
            top: 0;
            color: var(--darker-green);
            background: white;
            font-size: 0.75em;
            padding: 3px;
          }
        }

        &:valid + label .label-name {
          top: 0;
          color: var(--darker-green);
          background: white;
          font-size: 0.75em;
          padding: 3px;
        }
      }

      textarea {
        width: 100%;
        height: 150px;
        padding: 20px 0px 6px 15px;
        border: 2px solid var(--darker-green);
        font-size: 0.95em;

        &:focus {
          outline: 0;
          font-size: 1.2em;
          font-weight: 300;

          & + label .label-name {
            top: 0;
            background: white;
            color: var(--darker-green);
            font-size: 0.75em;
          }
        }

        &:valid {
          outline: 0;
          font-size: 1.2em;
          font-weight: 300;

          & + label .label-name {
            top: 0;
            background: white;
            color: var(--darker-green);
            font-size: 0.75em;
          }
        }
      }
    }
    button {
      display: block;
      width: fit-content;
      text-transform: uppercase;
      color: white;
      font-weight: bold;
      border-radius: 20px;

      .button:hover {
        background-color: var(--lighter-green);
      }

      .button:active {
        transform: scale(1.2);
      }
    }
  }
  div {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 395px;

    img {
      width: 50%;
    }
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;

    form {
      height: 100%;

      & > div {
        width: 100%;
      }
      div:nth-child(1) {
        height: fit-content;
      }

      .img {
        z-index: -10;
        transition: 0.6s all;
      }

      .img {
        transform: translateX(-300px);
      }

      button {
      }
    }
  }
`);

export default ContactForm;
