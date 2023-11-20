import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Searched.scss";
const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );

    const recipe = await data.json();
    setSearchedRecipes(recipe.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, []);
  return (
    <div className="grid">
      {searchedRecipes.map((item) => {
        return (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </div>
        );
      })}
    </div>
  );
};
export default Searched;
