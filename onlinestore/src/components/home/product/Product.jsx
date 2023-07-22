import React from "react";
import StarRating from "../../utils/StarRating";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="space-y-1 group hover:bg-zinc-50  cursor-pointer border border-zinc-200 rounded-md shadow-sm"
    >
      <div className="bg-white w-full">
        <img
          src={product.thumbnail}
          alt=""
          className="h-64 md:h-36 object-center object-cover w-full rounded-md"
          loading="lazy"
        />
      </div>
      <div className="px-3 pb-1 space-y-1">
        <div className="font-medium text-md truncate text-lg">
          {product.title}
        </div>
        <div className="bg-zinc-100 border border-zinc-200 px-1 py-[0.5] w-fit text-xs text-zinc-700">
          {product.category[0].toUpperCase() + product.category.slice(1)}
        </div>
        <div className="flex gap-1 items-center text-sm">
          <StarRating rating={product.rating} /> ({product.rating})
        </div>
        <div className="font-medium text-lg">
          $ {product.price.toLocaleString()}
        </div>
      </div>
    </Link>
  );
};

export default Product;
