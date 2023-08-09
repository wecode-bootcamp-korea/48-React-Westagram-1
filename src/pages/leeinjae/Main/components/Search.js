import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./Search.scss";

const Search = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="searchForm">
      <input
        className="searchInput"
        type="text"
        placeholder="검색"
        value={search}
        onChange={handleChange}
      />
      <AiOutlineSearch className="searchIcon" size={15} />
    </div>
  );
};

export default Search;
