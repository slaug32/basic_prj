import React from "react";
import { MyButton } from "../UI/MyButton";
import { HistoryProduct } from "./components/HistoryProduct";

export const History = () => {
  return (
    <div className="container">
      <div className="history mt-40">
        <h1>Купленные товары</h1>
        <div>
          <HistoryProduct />
        </div>
      </div>
      <MyButton>Удалить все</MyButton>
    </div>
  );
};
