import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-violet-200 mt-24 ">
      <div className="w-[1400px] mx-auto max-w-[90%] py-16 text-violet-950">
        <div className="grid grid-cols-5">
          <div className="col-span-2">
            <h3 className="text-3xl font-medium">Online Store</h3>
            <hr className="my-2 h-px bg-violet-400 border-0" />
            <p className="text-sm tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium eius quae sit officiis aut a odit quaerat consequatur
              vel vero magnam est, voluptates ipsa facere reprehenderit eum et
              delectus quas!
            </p>
          </div>
          <div className="col-start-4">
            <ul className="underline cursor-pointer">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </div>
          <div className="col-start-5">
            <h3 className="text-lg">Contact</h3>
            <hr className="my-2 h-px bg-violet-400 border-0" />
            <div className="flex text-2xl gap-4 mb-2">
              <Link to="#">
                <i className="fa-brands fa-facebook block"></i>
              </Link>
              <Link to="#">
                <i className="fa-brands fa-twitter block"></i>
              </Link>
              <Link to="#">
                <i className="fa-brands fa-instagram block"></i>
              </Link>
            </div>
            <div className="text-sm">
              <i className="fa-regular fa-envelope"></i> online@store.com
            </div>
          </div>
        </div>
      </div>
      <div className="bg-violet-950 text-center w-full py-6 text-zinc-100">
        Online Store | {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
