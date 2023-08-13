import React, { useEffect, useState } from "react";
import Feed from "../Feed/Feed"

function Feeds() {
  const [feedsData, setFeedsDAta] = useState([]);

  useEffect(() => {
    fetch("/data/kimseulki/feedsData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setFeedsDAta(data));
  }, []);

  return
}