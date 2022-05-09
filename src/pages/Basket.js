import React from "react";
import { useSelector } from "react-redux";
import { MyButton } from "../UI/MyButton";
import { BasketProduct } from "./components/BasketProduct";

export const Basket = () => {
  // const { products } = useSelector(({ main }) => main);
  return (
    <div className="container">
      <div className="basket mt-40">
        <h1>Добавленные товары</h1>
        <div className="basket__products">
          {/* {products} */}
          <BasketProduct />
        </div>
        <div className="basket__total">
          <div className="d-flex align-center">
            <h3 className="pr-10">Итоговая цена:</h3>
            <h3>122222 руб</h3>
          </div>
          <MyButton>Оформить заказ</MyButton>
        </div>
      </div>
    </div>
  );
};
