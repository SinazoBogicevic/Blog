import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = ({
  data: { id, url, title, categories, duration, author, date },
}) => {
  const { name } = categories[0];
  return (
    <CardLink to={`/article/${title}/${id}`}>
      <CardWrapper>
        <div className="img-container">
          <img src={url} alt="illustration" />
        </div>
        <div className="text-container">
          <div className="titles">
            <p>{name}</p>
            <p>{duration}</p>
          </div>
          <div className="title-author">
            <h3 className="article-title">{title}</h3>
            <h5>{author}</h5>
          </div>
        </div>
      </CardWrapper>
    </CardLink>
  );
};

const CardLink = styled(Link)`
  height: 335px;
  border: 1px solid var(--light-gray);
  color: black;
  text-decoration: none;
  webkit-text-decoration: none;
`;

const CardWrapper = styled.div`
  height: inherit;
  cursor: pointer;
  display: grid;
  grid-template-rows: 1fr 1fr;
  .img-container {
    height: 235px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .text-container {
    height: 40%;
  }
  .title-author {
    width: 100%;
    height: fit-content;
    padding: 4px 8px 16px;
    text-transform: capitalize;
    h3 {
      margin-bottom: 4px;
      font-size: 1em;
    }
  }
`;

export default Card;
