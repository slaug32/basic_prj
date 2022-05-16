import React from "react";
import { AppleProduct } from "./components/AppleProduct";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addProductBasket } from "./../redux/reducers/basket_reducer";
import { Preloader } from "./components/Preloader";

export const Main = ({ filteredName }) => {
  const isFetching = useSelector(({ main }) => main.isFetching);
  const basketItems = useSelector(({ basket }) => basket.items);

  const dispatch = useDispatch();

  const onAddProduct = (productObj) => {
    dispatch(addProductBasket(productObj));
  };

  return (
    <div className="container p-20 mt-10">
      <div className="p-20 mt-40">
        <h1>Все товары</h1>
        <div className="container__content d-flex flex-wrap">
          {isFetching ? (
            filteredName.map((p) => (
              <AppleProduct
                key={p.id}
                id={p.id}
                image={p.image}
                name={p.name}
                price={p.price}
                onAddProduct={onAddProduct}
                addCountProduct={
                  basketItems[p.id] && basketItems[p.id].items.length
                }
              />
            ))
          ) : (
            <div className="preloader">
              <Preloader />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
