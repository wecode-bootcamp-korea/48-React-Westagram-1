import React from "react";

const comments = [
  {
    id: 1,
    bold: "neceosecius",
    rest: "거봐 좋았잖아~~~~~~~",
  },
  {
    id: 2,
    bold: "이인재",
    rest: "베이킹 클래스 멋지다.....",
  },
  {
    id: 3,
    bold: "antonio",
    rest: "맛있겠다..!! 다음에 같이 하자!",
  },
  {
    id: 4,
    bold: "tony",
    rest: "나도 나도",
  },
];

const FeedItem = () => {
  return (
    <div className="hideContent">
      {comments.map((el) => (
        <p>
          <b>{el.bold}</b> {el.rest}
        </p>
      ))}
    </div>
  );
};

export default FeedItem;
