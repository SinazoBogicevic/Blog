import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { searchAction } from "./actions/searchAction";
import { motion } from "framer-motion";
import { useParams, useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Article = () => {
  const [loading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const [categories, setCategories] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  //console.log(useRouteMatch());

  const fetchData = async () => {
    const url = `http://localhost:1337/articles/${id}`;

    try {
      const res = await fetch(url);

      const data = await res.json();

      console.clear();
      console.log(data);

      setData(data);
      if (data != null) {
        getCategories(data);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = (articles) => {
    const { categories } = articles;
    const names = categories.map(({ name }) => name);
    setCategories(names);
  };

  useEffect(() => {
    setIsLoading(true);

    fetchData();
  }, []);

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

  const variants = {
    initial: {
      opacity: 0,
      y: "-100%",
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: "100%",
    },
  };

  const transitions = {
    duration: 10,
  };

  const { url, title, duration, author, date, tutorial } = data;
  const mediaLinks = ["fab fa-github", "fab fa-linkedin-in", "fab fa-twitter"];
  return (
    <PageWrapper>
      <ArticleWrapper
        initial="initial"
        animate="in"
        exit="out"
        variant={variants}
        transition={transitions}
      >
        <div className="cover-container">
          <img src={url} alt="cover" />
        </div>
        <div>
          <h1>{title}</h1>
          <div className="third-section">
            <div className="article-info">
              <div className="profile-img-container">
                <img src={url} alt="cover" />
              </div>
              <div className="info-text">
                <h5>{author}</h5>
                <div>
                  <h5 style={{ marginRight: "8px" }}>{date}</h5>
                  <h5>{duration}</h5>
                </div>
              </div>
            </div>
            <ul className="social-media-links">
              {mediaLinks.map((link, index) => (
                <li key={index}>
                  <a href="" target="_blank">
                    <i className={link} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="main">{tutorial}</div>
          <div className="fifth-section">
            <ul className="categories-section">
              {categories.map((name, index) => {
                return (
                  <li className="categories" key={index}>
                    <Link to="/search" onClick={() => queryCategory(name)}>
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="social-media-links">
              {mediaLinks.map((link, index) => (
                <li key={index}>
                  <a href="" target="_blank">
                    <i class={link} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="line"></div>
          <div className="sixth-section">
            <div className="profile-img-container">
              <img src={url} alt="cover" />
            </div>
            <div className="info-text">
              <p>job title or something</p>
              <p>something quirky and where to find me</p>
            </div>
          </div>
        </div>
      </ArticleWrapper>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 32px 0px 50px;
`;

const ArticleWrapper = motion.custom(styled.article`
  display: grid;
  grid-template-rows: 400px 1fr;
  grid-row-gap: 40px;
  width: 50%;

  li {
    list-style-type: none;
  }

  .profile-img-container {
    width: 80px;
    height: 80px;
    margin-right: 12px;

    img {
      width: inherit;
      height: inherit;
      border: 1px solid var(--white);
      border-radius: 50%;
    }
  }

  .social-media-links {
    display: flex;
    align-self: flex-end;
    height: fit-content;
    list-style-type: none;

    li {
      margin: 0px 12px;
      a {
        text-decoration: none;

        i {
          color: var(--darker-green);
          font-size: 1.8em;
          cursor: pointer;
        }
      }
    }
  }

  .info-text {
    height: fit-content;
    align-self: flex-end;

    div {
      display: flex;
      flex-wrap: wrap-reverse;
    }
  }

  .cover-container {
    img {
      object-fit: cover;
      width: 100%;
      max-height: 100%;
    }
  }

  h1 {
    width: 100%;
    margin: 24px 0px;
  }

  .third-section {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 24px;

    .article-info {
      display: flex;
    }
  }

  .fifth-section {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: fit-content;
    position: relative;
    padding: 12px 0px;
    margin: 16px 0px;

    .categories-section {
      display: flex;
      flex-wrap: wrap;
      cursor: pointer;

      li {
        height: fit-content;
        padding: 6px 24px;
        margin: 8px 12px;
        background: #e5e5e5;

        a {
          color: black;
          font-weight: 600;
        }
      }
    }

    .social-media-links {
      height: fit-content;
      margin-top: 12px;
    }
  }

  .line {
    width: 100%;
    height: 2px;
    background: #e2e2e2;
    margin: 4px 0px 8px;
  }

  .sixth-section {
    display: flex;

    .info-text {
      align-self: flex-end;
      font-size: 0.75em;
    }
  }
`);

export default Article;
