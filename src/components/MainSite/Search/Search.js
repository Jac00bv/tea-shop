import React from "react";
import searchStyles from "./search.module.scss";

const Search = ({ searchItem, searchFor }) => {
  return (
    <>
      <form className={searchStyles.form} onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search for your favorite tea"
          value={searchItem}
          onChange={(e) => searchFor(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.target.blur();
            }
          }}
        />
      </form>
    </>
  );
};

export default Search;
