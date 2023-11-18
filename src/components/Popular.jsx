import { useEffect, useState } from "react";
import "./Popular.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { data } from "../data";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    // const response = await fetch(
    //   `https://api.spoonacular.com/recipes/random/?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    // );
    // const data = await response.json();
    // console.log(data);
    // setPopular(data.recipes);
    setPopular(data);
  };
  return (
    <div className="wrapper">
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        <h3>Popular</h3>
        {popular.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <div className="card">
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Popular;
