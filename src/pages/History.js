import React from "react";
import { setItems } from "../redux/reducers/main_reducer";
import { MyButton } from "../UI/MyButton";
import { HistoryProduct } from "./components/HistoryProduct";

export const History = ({ items }) => {
  return (
    <div className="container p-20 mt-10">
      <div className="history mt-40 p-20">
        <h1>Купленные товары</h1>
        <div>
          {items.map((obj) => {
            <HistoryProduct {...obj} />;
          })}
        </div>
        <MyButton>Удалить все</MyButton>
      </div>
    </div>
  );
};
