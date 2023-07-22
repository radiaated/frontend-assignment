import React, { useState } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import SearchBox from "../search/SearchBox";

const Header = () => {
  const { cart } = useSelector((state) => state.app);
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-violet-900 text-zinc-50 pb-6 shadow-md z-[99]">
      <div
        className={`fixed z-50 top-0 left-0 bg-violet-800 w-full h-full p-4 md:hidden ${
          menu ? "translate-x-[0%]" : "translate-x-[100%]"
        } transition-all duration-200 ease-in-out`}
      >
        <button onClick={() => setMenu(false)}>
          <i className="fa-solid fa-arrow-left text-4xl"></i>
        </button>
        <div className="flex flex-col gap-4 divide-y divide-zinc-100 text-4xl p-4">
          <Link to="/" className="py-4" onClick={() => setMenu(false)}>
            Home
          </Link>
          <Link to="/cart" className="py-4" onClick={() => setMenu(false)}>
            Cart
          </Link>
          <Link to="/search" className="py-4" onClick={() => setMenu(false)}>
            Search
          </Link>
        </div>
      </div>

      <div className="text-right container w-[90%] mx-auto py-2 text-xs hover:text-zinc-100">
        <Link to="/cart" className="text-right">
          Cart <i className="fa-solid fa-cart-shopping"></i> ({cart.length})
        </Link>
      </div>
      <div className="flex justify-between items-center container w-[90%] mx-auto">
        <Link to="/" className="text-xl tracking-wider font-semibold ">
          Online Store
        </Link>
        <div className="hidden md:flex gap-4">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isActive ? "border-b border-zinc-50 px-4 text-center" : "px-4"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive, isPending }) =>
              isActive ? "border-b border-zinc-50 px-4 text-center" : "px-4"
            }
          >
            Search
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive, isPending }) =>
              isActive ? "border-b border-zinc-50 px-4 text-center" : "px-4"
            }
          >
            Cart
          </NavLink>
        </div>
        <button
          className="border border-zinc-50 px-2 py-1 rounded-sm md:hidden"
          onClick={() => setMenu((state) => !state)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        <div
          className={`hidden md:flex ${
            location.pathname === "/search" ? "opacity-0" : ""
          }`}
        >
          <SearchBox />
        </div>
      </div>
    </header>
  );
};

export default Header;
