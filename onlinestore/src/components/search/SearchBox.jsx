import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchBox = () => {
  const [qs, setQs] = useSearchParams();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  return (
    <form
      className="relative text-md flex"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        className="w-fit text-zinc-900 pl-9 border border-zinc-500 p-1 rounded-md placeholder:font-light"
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
          if (search.length > 0) {
            navigate(`/search?q=${search}`);
          }
        }}
        className="bg-violet-500 block border border-violet-400 ml-2 px-4 py-2 rounded-md cursor-pointer hover:bg-violet-600 active:bg-violet-700 text-zinc-50"
      />
    </form>
  );
};

export default SearchBox;
