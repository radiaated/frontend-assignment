import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchBox = () => {
  const [qs, setQs] = useSearchParams();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  return (
    <form className="relative text-md flex">
      <input
        type="text"
        className="w-fit text-zinc-900 pl-9 p-1 rounded-md placeholder:font-light"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Iphone"
      />
      <div className="absolute top-3 left-2 flex items-">
        <i class="fa-solid fa-magnifying-glass text-zinc-800"></i>
      </div>
      <input
        type="submit"
        onClick={() => {
          navigate(`/search?q=${search}`);
        }}
        className="bg-violet-500 block ml-2 px-4 py-2 rounded-md"
      />
    </form>
  );
};

export default SearchBox;
