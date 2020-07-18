import React from "react";
import searchStyles from "../../scss/search.module.scss";

const Search = ({ searchItem, searchFor }) => {
  return (
    <>
      <form className={searchStyles.form} onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search for your favorite tea"
          value={searchItem}
          onChange={(e) => searchFor(e.target.value)}
        />
      </form>
    </>
  );
};

export default Search;
