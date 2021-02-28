import React from "react";
import Masonry from "./Masonry";
import Card from "./Card";
import { useSelector } from "react-redux";

const MyMasonry = () => {
  const results = useSelector((state) => state.searchResults);
  //&& means both things must be true
  const hasResults = results && !null;

  return (
    <Masonry>
      {hasResults
        ? results.map((item, index) => <Card data={item} key={index} />)
        : ""}
    </Masonry>
  );
};

export default MyMasonry;
