import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../../store/slices/loginSlice";

const Search = () => {
  const isLoggedIn = useSelector((state) => {
    return state.login.isLoggedIn;
  });

  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <div className="cursor-pointer">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search"
        value={searchTerm}
        disabled={!isLoggedIn}
        className="border rounded-md bg-zinc-800 text-white p-2"
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
