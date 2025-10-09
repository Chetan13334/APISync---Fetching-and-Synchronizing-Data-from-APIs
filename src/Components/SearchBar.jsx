import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./User.css";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`search-bar ${darkMode ? "dark-search" : ""}`}>
      <input
        type="text"
        placeholder="Search by username..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={darkMode ? "dark-input" : ""}
      />
    </div>
  );
};

export default SearchBar;
