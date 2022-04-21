import React from "react";
import { AppleProduct } from "./components/AppleProduct";
import { Slider } from "./components/Slider";
import axios from "axios";

export const Main = ({ products }) => {
  return (
    <div className="container p-20 mt-10">
      {/* <Slider /> */}
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
