import React from "react";
import { AppleProduct } from "./components/AppleProduct";
import axios from "axios";
import { useSelector } from "react-redux";

export const Main = () => {
  const { products } = useSelector(({ main }) => {
    return {
      products: main.products,
    };
  });

  return (
    <div className="container p-20 mt-10">
      <div className="p-20 mt-40">
        <h1>Все товары</h1>
        <div className="container__content d-flex">
          {products.map((product) => {
            <AppleProduct
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />;
          })}
        </div>
      </div>
    </div>
  );
};
