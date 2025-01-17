import React, { useState } from "react";
import StarRating from "../utils/StarRating";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { appActions } from "../../features/app/appSlice";

const CartItem = ({ cart, ind }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [qty, setQty] = useState(cart.quantity);

  return (
    <div className="md:grid md:grid-cols-5 lg:grid-cols-7 gap-4 py-4">
      <div>
        <img
          src={cart.thumbnail}
          alt=""
          className="h-52 md:h-20 w-full object-cover rounded-sm "
          loading="lazy"
        />
      </div>
      <div className="md:col-span-2 lg:col-span-4">
        <h3 className="text-xl font-medium mb-1">{cart.title}</h3>
        <div className="flex gap-2 text-sm">
          <span className="hover:underline cursor-default">
            {cart.category[0].toUpperCase() + cart.category.slice(1)}
          </span>{" "}
          {" | "}{" "}
          <span className="hover:underline cursor-default">{cart.brand}</span>
        </div>
        <div className="text-sm flex gap-2">
          <StarRating rating={cart.rating} /> ({cart.rating})
        </div>
      </div>
      <div className="flex flex-col">
        <div className="mb-1 text-sm">Quantity: {cart.quantity}</div>

        <div className="text-xl font-semibold">
          ${" "}
          {Number(
            (
              qty * cart.price -
              cart.price * (cart.discountPercentage / 100) * qty
            ).toFixed(2)
          ).toLocaleString()}{" "}
          <br />
          <span className="text-xs font-normal">
            + {cart.discountPercentage}% off
          </span>
        </div>
      </div>
      <div className="flex flex-row md:flex-col gap-2 text-center my-auto text-sm ">
        <button
          className=" hover:underline hover:underline-offset-1"
          onClick={() => {
            navigate(`/product/${cart.id}`);
          }}
        >
          Update
        </button>
        <button
          className="hover:underline hover:underline-offset-1 text-red-500"
          onClick={() => dispatch(appActions.removeFromCart(ind))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
