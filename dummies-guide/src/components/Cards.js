import React, { useState, useEffect } from "react";
import Masonry from "./Masonry";
import CardSkeleton from "./CardSkeleton";
import Card from "./Card";
import "../App.css";

export default function Cards() {
  const [data, setData] = useState([]);
  const [isloading, setloading] = useState(false);
  const [skeletons] = useState(5);

  const fetchData = async (e) => {
    const url = `http://localhost:1337/articles?_limit=10`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      console.log(data);

      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * renders first time, useEffect called
   * second time only renders if data has changed
   * return is used to clean up effect before next effect is called
   */
  useEffect(() => {
    setloading(true);

    fetchData();
  }, []);

  return (
    <Masonry>
      {isloading
        ? Array(skeletons)
            .fill()
            .map((index) => {
              return <CardSkeleton key={index} />;
            })
        : data.map((article) => {
            return <Card data={article} key={article.id} />;
          })}
    </Masonry>
  );
}
