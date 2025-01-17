import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const [qs, setQs] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (qs.get("q")) {
      setSearch(qs.get("q"));
    }
  }, []);

  return (
    <form
      className="relative text-md flex z-45"
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
        <i className="fa-solid fa-magnifying-glass text-zinc-800"></i>
      </div>
      <input
        type="submit"
        onClick={() => {
          if (search.length > 0) {
            navigate(`/search?q=${search}`);
          }
        }}
        className="bg-violet-600 block border border-violet-500 ml-2 px-4 py-2 rounded-sm cursor-pointer hover:bg-violet-700 active:bg-violet-800 text-zinc-50"
      />
    </form>
  );
};

export default SearchBox;
