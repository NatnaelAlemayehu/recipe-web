import React, { useEffect, useState } from "react";
import Search from "../../component/search/search";

const Recipes = (props) => {
  const { cat, value, file } = props.match.params;
  const [meals, setMeals] = useState({});

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/${file}.php?${cat}=${value}`)
      .then((res) => res.json())
      .then((res) => setMeals(res.meals));
  }, []);

  return (
    <div>
      Recipes
      <div>
        <Search />
        {console.log(meals)}
      </div>
    </div>
  );
};

export default Recipes;
