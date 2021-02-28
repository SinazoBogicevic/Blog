import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { searchAction } from "./actions/searchAction";

const Search = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    query: "",
  });
  const { query } = values;
  const [submit, setSubmit] = useState(false);

  const handleSearch = (queryString) => {
    setSubmit(true);

    if (query === "" || query === null) {
      document.querySelector("input").style.borderBottom = "2px solid red";
      return;
    }

    fetchData(queryString);

    return;
  };

  const handleChange = (event) => {
    //event.persist() deprecated but was same preventDefault();
    setValues((prevState) => ({
      ...values,
      query: event.target.value,
    }));
  };

  const clearSearch = () => {
    document.querySelector("input").value = "";
    console.log("clear");
  };

  const fetchData = async (queryString) => {
    const url = `http://localhost:1337/articles?title_contains=${queryString}`;
    //console.log(query);

    try {
      const result = await fetch(url);
      const data = await result.json();
      //console.log(data);
      dispatch(searchAction(data));
    } catch (error) {
      console.log(error);
    }
  };

  const queryCategory = async (queryString) => {
    const url = `http://localhost:1337/articles?_where[categories.name_in]=${queryString}`;
    //console.log(query);

    try {
      const result = await fetch(url);
      const data = await result.json();
      dispatch(searchAction(data));
    } catch (error) {
      console.log(error);
    }
  };

  const suggestions = [
    { topic: "java", color: "var(--darker-green)" },
    { topic: "kotlin", color: "var(--lighter-green)" },
    { topic: "MVVM", color: "var(--darker-green" },
    { topic: "android", color: "var(--lighter-green)" },
    { topic: "beginner", color: "var(--darker-green)" },
  ];

  const variants = {
    initial: {
      opacity: 0,
      y: "-100%",
    },
    in: {
      opacity: "1",
      y: 0,
    },
    out: {
      opacity: "0",
      y: "100%",
    },
  };

  const transitions = {
    dampness: 100,
  };

  return (
    <Wrapper
      className="search-bar"
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
      transition={transitions}
    >
      <p className="error"></p>
      <SearchWrapper className="wrapper">
        <div>
          <i className="fas fa-search" onClick={() => handleSearch(query)} />
          <input
            type="text"
            placeholder="Search"
            name="query"
            value={values.query}
            onChange={handleChange}
          />
        </div>
        <i className="fas fa-times" onClick={clearSearch} />
      </SearchWrapper>
      <p className="tip">Try some of these terms</p>
      <ul className="suggestions">
        {suggestions.map(({ topic, color }, index) => (
          <li
            key={index}
            style={{ background: color }}
            onClick={() => queryCategory(topic)}
          >
            {topic}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

const Wrapper = motion.custom(styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  width: 90%;
  height: fit-content;
  border-radius: 4px;
  box-shadow: 2px 4px 8px rgb(0, 0, 0, 0.5);
  padding: 0px 12px 8px 0px;
  margin: 0px auto 42px;
  z-index: 3;

  .error {
    margin: 0px auto 12px;
    padding-top: 5px;
    font-size: 0.85rem;
    color: red;
  }

  .tip {
    width: fit-content;
    color: black;
    font-weight: 300;
    font-size: 0.95em;
    margin: 8px 0px 8px 24px;
  }

  .suggestions {
    display: flex;
    flex-flow: wrap;
    width: fit-content;
    height: fit-content;
    cursor: pointer;
    margin-left: 24px;

    li {
      height: fit-content;
      padding: 3px 16px;
      margin: 0px 0px 6px 12px;
      background: #e5e5e5;
      color: white;
      font-size: 0.7em;
      font-weight: 300;
      list-style-type: none;

      a {
        color: black;
        font-weight: 600;
      }
      &:first-child {
        margin-left: 0;
      }
    }
  }
`);

const SearchWrapper = styled.div`
  display: flex;
  position: relative;
  width: 80%;
  height: 50px;
  margin-bottom: 12px;
  margin-left: 24px;
  background: rgb(244, 244, 244, 0.2);
  transition: 0.4s all;

  div {
    display: flex;
    align-items: flex-end;
    width: 100%;
  }

  input[type="text"] {
    align-self: flex-end;
    width: 100%;
    height: 75%;
    font-size: 1rem;
    font-weight: 550;
    outline: none;
    border-bottom: 1px solid var(--dark-gray);
    border-top: none;
    border-left: none;
    border-right: none;
  }

  input[type="text"]:focus {
    border-bottom: 2px solid var(--darker-green);
  }

  i {
    width: fit-content;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
  }

  .fa-search {
    width: fit-content;
    height: 75%;
    background: var(--dark-gray);
    color: var(--white);
    margin-left: 0px;
    padding: 8px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .fa-search:hover {
    background: #cac7c7ea;
  }

  .fa-times {
    width: fit-content;
    align-self: center;
    font-size: 1.2rem;
  }

  @media (max-width: 800px) {
    width: 80%;
  }
`;

export default Search;
