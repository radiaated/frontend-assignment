import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import StarRating from "../utils/StarRating";
import { appActions } from "../../features/app/appSlice";
import { Link } from "react-router-dom";
import QuantityBox from "../utils/QuantityBox";

const ProductPage = () => {
  const params = useParams();
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const [imageHover, setImageHover] = useState(0);

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", params.id],
    queryFn: () => fetchProductById(params.id),
    onSuccess: (prd) => {
      document.title = prd?.data.title + " - Online Store";
    },
  });

  const fetchProductById = (id) => {
    return axios.get(`${import.meta.env.VITE_API_URL}/products/${id}`);
  };

  return (
    <div className="grid md:grid-cols-6 md:gap-16">
      {isLoading ? (
        <>
          <div className="col-span-2 md:col-span-4">
            <h3 className="animate-pulse h-8 bg-zinc-200"></h3>
            <div className="animate-pulse h-8 bg-zinc-200"></div>

            <div className="animate-pulse h-8 bg-zinc-200"></div>
            <hr className="mb-6" />
            <div className="animate-pulse h-72 w-full bg-zinc-200"></div>
          </div>
          <div className="animate-pulse h-64 bg-zinc-200 w-full col-span-2 mt-8"></div>
        </>
      ) : isError ? (
        <div className="col-span-6 text-red-500 text-center h-[50vh]">
          Cant't fetch data
        </div>
      ) : (
        <>
          <div className="col-span-4">
            <div className="text-xs flex gap-2 items-center text-zinc-700 mb-2">
              <Link className="hover:underline" to="/">
                Online Store
              </Link>{" "}
              <i className="fa-solid fa-caret-right"></i>{" "}
              <Link
                className="hover:underline"
                to={`/product/${product?.data.id}`}
              >
                {product?.data.title}
              </Link>
            </div>
            <h3 className="mb-0">{product?.data.title}</h3>
            <div className="flex gap-2 text-sm items-center mb-2">
              <span className="hover:underline cursor-default">
                {product?.data.brand}
              </span>
              {" | "}
              <span className="hover:underline cursor-default">
                {product?.data.category[0].toUpperCase() +
                  product?.data.category.slice(1)}
              </span>
            </div>

            <div className="flex gap-2 text-sm mb-4">
              <StarRating rating={product?.data.rating} /> (
              {product?.data.rating})
            </div>
            <hr className="mb-6" />
            <div className="md:grid md:grid-cols-6 gap-8">
              <div className="flex img-scroll scroll- md:flex-col object-cover gap-4 w-full mb-2 py-2">
                {product?.data.images.map((img, ind) => (
                  <img
                    key={ind}
                    src={img}
                    className={`block h-16 w-full object-cover border border-zinc-300 rounded-md hover:outline hover:outline-1 hover:outline-zinc-800 ${
                      imageHover == ind ? "outline outline-1" : ""
                    }`}
                    onMouseOver={() => setImageHover(ind)}
                    onClick={() => setImageHover(ind)}
                    loading="lazy"
                  />
                ))}
              </div>
              <div className="col-span-5">
                <img
                  src={product?.data.images[imageHover]}
                  alt=""
                  className="block w-full h-96 object-contain rounded-sm border border-zinc-300 shadow-md"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="col-span-4 md:col-span-2 p-4 border border-zinc-400 rounded-sm h-fit space-y-4 mt-8 w-full shadow-md">
            <p>{product?.data.description}</p>

            <hr />
            <div className="space-y-2">
              <span className="text-sm">In stock: {product?.data.stock}</span>
              <h4>Quantity</h4>
              <QuantityBox
                stock={product?.data.stock}
                qty={qty}
                setQty={setQty}
              />

              <h4>Total Price</h4>
              <span className="text-3xl font-semibold">
                ${" "}
                {(
                  qty * product?.data.price -
                  product?.data.price *
                    (product?.data.discountPercentage / 100) *
                    qty
                )
                  .toFixed(2)
                  .toLocaleString()}{" "}
                <span className="text-xl font-normal">
                  - {product?.data.discountPercentage}%
                </span>
                <span className="font-normal text-sm"> off</span>
              </span>
            </div>
            <hr />
            <Link className="btn-full">Checkout</Link>
            <button
              className="border border-violet-800 text-violet-800 font-medium text-xl p-4 w-full block text-center rounded-sm hover:bg-violet-100 active:bg-violet-200"
              onClick={() => {
                dispatch(
                  appActions.addToCart({ ...product?.data, quantity: qty })
                );
              }}
            >
              Add to cart <i className="fa-solid fa-cart-plus"></i>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
