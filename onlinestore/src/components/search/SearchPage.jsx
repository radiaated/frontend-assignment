import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { useSearchParams, useLocation } from "react-router-dom";
import Product from "../home/product/Product";
import SearchBox from "./SearchBox";

const SearchPage = () => {
  const [qs, setQs] = useSearchParams();

  const location = useLocation();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["search-product", qs.get("q")],
    queryFn: () => fetchSearchProduct(qs.get("q")),
    onSuccess: () => {
      document.title = `Search: ${
        qs.get("q") ? qs.get("q") : ""
      } - Online Store`;
    },
  });

  const fetchSearchProduct = (search) => {
    return axios.get(
      `${import.meta.env.VITE_API_URL}/products/search?q=${search}`
    );
  };

  return (
    <div className="min-h-[50vh]">
      <div className="mb-2">
        <h5 className="mb-2 font-medium">Search</h5>
        <SearchBox />
      </div>

      <h2>Search Results</h2>

      <p className="mb-2 text-sm">
        {qs.get("q")?.length > 0 ? `"${qs.get("q")}"` : "No search"}
      </p>
      <hr className="mb-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {isLoading ? (
          Array.from(Array(5).keys()).map((k) => (
            <div className="animate-pulse h-64 w-full bg-zinc-200 rounded-sm"></div>
          ))
        ) : isError ? (
          <div className="col-span-5 text-center text-red-500 h-64 w-full">
            Can't fetch data.
          </div>
        ) : data?.data.products.length === 0 ? (
          <div className="text-center col-span-5">No results found.</div>
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
    </div>
  );
};

export default SearchPage;
