import React from "react";
import { MyButton } from "../../UI/MyButton";

export const EmptyBasket = () => {
  return (
    <div>
      <h1>Корзина пустая</h1>
      <h2>Добавьте хотя бы один товар, чтобы сделать заказ</h2>
      <MyButton>Вернуться назад</MyButton>
    </div>
  );
};
