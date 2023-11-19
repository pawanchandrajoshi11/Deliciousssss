import { useEffect, useState } from "react";
import "./Popular.scss";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { data } from "../data";
import { motion } from "framer-motion";

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

  // const [width, setWidth] = useState(0);
  // const carousel = useRef();
  // useEffect(() => {
  //   console.log(carousel.current.scrollWidth);
  //   console.log(carousel.current.offsetWidth);
  //   setWidth(carousel.current.scrollWidth - carousel.current.clientWidth);
  // }, []);
  return (
    <motion.div className="carousel">
      <h3>Popular</h3>
      <motion.div
        className="inner-carousel"
        drag="x"
        dragConstraints={{ right: 0, left: -1900 }}
        whileTap={{ cursor: "grabbing" }}
      >
        {popular.map((recipe) => {
          return (
            <motion.div className="item" key={recipe.id}>
              <p>{recipe.title}</p>
              <img src={recipe.image} alt="" />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>

    // <div className="wrapper">
    //   <Splide
    //     options={{
    //       perPage: 4,
    //       arrows: false,
    //       pagination: false,
    //       drag: "free",
    //       gap: "5rem",
    //     }}
    //   >
    //     <h3>Popular</h3>
    //     {popular.map((recipe) => {
    //       return (
    //         <SplideSlide key={recipe.id}>
    //           <div className="card">
    //             <p>{recipe.title}</p>
    //             <img src={recipe.image} alt={recipe.title} />
    //           </div>
    //         </SplideSlide>
    //       );
    //     })}
    //   </Splide>
    // </div>
  );
};

export default Popular;
