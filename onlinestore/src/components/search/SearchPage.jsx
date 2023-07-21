import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import Product from "../home/product/Product";

const SearchPage = () => {
  const [qs, setQs] = useSearchParams();

  const { data } = useQuery({
    queryKey: ["search-product", qs.get("q")],
    queryFn: () => fetchSearchProduct(qs.get("q")),
  });

  const fetchSearchProduct = (search) => {
    return axios.get(`https://dummyjson.com/products/search?q=${search}`);
  };

  return (
    <div>
      <h2>Search Result</h2>
      <hr className="mb-4" />
      <div className="grid grid-cols-5 gap-4">
        {data?.data.products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
