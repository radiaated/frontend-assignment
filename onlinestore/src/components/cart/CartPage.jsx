import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart } = useSelector((state) => state.app);

  return (
    <div>
      <h2>Cart</h2>
      <div className="md:grid md:grid-cols-7 gap-8">
        <div className="col-span-5 border border-zinc-500 rounded-sm px-4 divide-y divide-zinc-400  h-fit">
          {cart.map((ca, ind) => (
            <CartItem cart={ca} ind={ind} />
          ))}
        </div>
        <div className="col-span-2">
          <h4 className="text-xl font-medium mb-2">Total</h4>
          <div className="text-4xl font-bold flex">
            {"$ "}
            <span>
              {cart
                .reduce(
                  (t, c) =>
                    t +
                    (c.quantity * c.price -
                      c.price * (c.discountPercentage / 100) * c.quantity),
                  0
                )
                .toFixed(2)}
            </span>
          </div>
          <hr className="my-4" />
          <Link className="btn-full">Checkout</Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
