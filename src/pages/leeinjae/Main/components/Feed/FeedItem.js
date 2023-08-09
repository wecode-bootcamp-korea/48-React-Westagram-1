import React from "react";
import "./FeedItem.scss";

const FeedItem = ({ lists }) => {
  return (
    <>
      {lists.map((elements, index) => (
        <li key={index}>{elements}</li>
      ))}
    </>
  );
};

export default FeedItem;
