import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.scss";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <div className="outer-div">
      <form onSubmit={submitHandler}>
        <div>
          <FaSearch />
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            value={input}
          />
        </div>
      </form>
    </div>
  );
};
export default Search;
