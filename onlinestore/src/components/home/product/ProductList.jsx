import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Product from "./Product";
import ReactPaginate from "react-paginate";

const ProductList = ({ category }) => {
  const [skip, setSkip] = useState(0);
  const [pages, setPages] = useState(5);

  const fetchProductByCategory = (skip, category) => {
    console.log(category);
    if (category) {
      return axios.get(
        `https://dummyjson.com/products/category/${category.toLowerCase()}?limit=5&skip=${skip}`
      );
    }
    console.log("uwu");
    return axios.get(`https://dummyjson.com/products?limit=5&skip=${skip}`);
  };

  // const { data } = useQuery(["product-category", skip], (skip) =>
  //   fetchProductByCategory(skip)
  // );
  const { data, isLoading, isError } = useQuery({
    queryKey: [
      `product-category-${category ? category : "all"}`,
      skip,
      category,
    ],
    queryFn: () => fetchProductByCategory(skip, category),
    onSuccess: (q) => {
      console.log(q);
      setPages(q.data.total / 5);
    },
  });

  const handlePageClick = (event) => {
    setSkip(event.selected * 5);
  };

  return (
    <div className="pb-8 pt-4">
      <h2>{category ? category : "All Products"}</h2>
      <div className="grid xl:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-6">
        {isLoading ? (
          Array.from(Array(5).keys()).map((k) => (
            <div className="animate-pulse h-64 w-full bg-zinc-200 rounded-sm"></div>
          ))
        ) : isError ? (
          <div className="col-span-5 text-center text-red-500 h-64 w-full">
            Can't fetch data.
          </div>
        ) : (
          data?.data.products.map((product) => (
            <Product
              product={product}
              isLoading={isLoading}
              isError={isError}
            />
          ))
        )}
      </div>

      {category === null && (
        <ReactPaginate
          // className={`${data?.data.total / 5 == 0 ? "hidden" : "flex"}`}
          containerClassName="flex gap-2 my-6 flex-wrap"
          activeLinkClassName="outline outline-1 outline-zinc-400"
          previousLinkClassName="block border border-violet-900 bg-violet-800 text-zinc-50 px-4 py-1 h-8 w-fit text-center rounded-sm hover:bg-violet-700 active:bg-violet-800"
          nextLinkClassName="block border border-violet-900 bg-violet-800 text-zinc-50 px-4 py-1 h-8 w-fit text-center rounded-sm hover:bg-violet-700 active:bg-violet-800"
          pageLinkClassName="block bg-zinc-100 border border-zinc-300 p-1 h-8 w-8 text-center rounded-sm hover:bg-zinc-200"
          disabledLinkClassName="bg-violet-300 text-violet-400 border border-violet-300"
          breakLabel=". . . . . . . ."
          breakLinkClassName="flex"
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pages}
          previousLabel="Previous"
          renderOnZeroPageCount={true}
        />
      )}
    </div>
  );
};

export default ProductList;
