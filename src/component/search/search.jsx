import React, { useState } from "react";

const Search = () => {
  const [cat, setCategory] = useState("c");
  const [value, setValue] = useState("");
  return (
    <div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = `/search/${
              cat === "a"
                ? "search"
                : cat === "c"
                ? "filter"
                : cat === "s"
                ? "search"
                : cat === "i"
                ? "filter"
                : ""
            }/${cat}/${value}`;
          }}
        >
          <select
            name=""
            id=""
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="c">Category</option>
            <option value="a">Origin</option>
            <option value="s">Name</option>
            <option value="i">Ingredient</option>
          </select>
          <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
            required
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
