import React from "react";

const FeedItem = ({ lists }) => {
  return (
    <ul className="hideContent">
      {lists.map((elements, index) => (
        <li key={index}>{elements}</li>
      ))}
    </ul>
  );
};

export default FeedItem;