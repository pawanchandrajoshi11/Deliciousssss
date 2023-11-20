import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
// import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "./Category.scss";

const Category = () => {
  return (
    <div className="list">
      <NavLink to={"/cuisine/Italian"} className="slink">
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>
      <NavLink to={"/cuisine/American"} className="slink">
        <FaHamburger />
        <h4>American</h4>
      </NavLink>
      <NavLink to={"/cuisine/Thai"} className="slink">
        <GiNoodles />
        <h4>Thai</h4>
      </NavLink>
      <NavLink to={"/cuisine/Japanese"} className="slink">
        <GiChopsticks />
        <h4>Japanese</h4>
      </NavLink>
    </div>
  );
};
export default Category;
