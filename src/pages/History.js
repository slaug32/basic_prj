import React from "react";
import { setItems } from "../redux/reducers/main_reducer";
import { MyButton } from "../UI/MyButton";
import { HistoryProduct } from "./components/HistoryProduct";
import { useSelector } from "react-redux";

export const History = () => {
  const { items } = useSelector(({ history }) => history);

  return (
    <div className="container p-20 mt-10">
      <div className="history mt-40 p-20">
        <h1>Купленные товары</h1>
        <div className="d-flex flex-wrap">
          {items.map((p) => {
            return (
              <HistoryProduct
                key={p.id}
                id={p.id}
                name={p.name}
                price={p.price}
                image={p.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
