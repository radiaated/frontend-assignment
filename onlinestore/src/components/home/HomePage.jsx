import React from "react";
import ProductList from "./product/ProductList";

const HomePage = () => {
  const categories = ["Smartphones", "Laptops", "Sunglasses", "Automotive"];

  document.title = "Home - Online Store";

  return (
    <div className="divide-y divide-y-zinc-500">
      {categories.map((c) => (
        <ProductList category={c} />
      ))}
      <ProductList category={null} />
    </div>
  );
};

export default HomePage;
