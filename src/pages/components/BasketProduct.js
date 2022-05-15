import React from "react";
import { MyButton } from "../../UI/MyButton";

export const BasketProduct = ({ image, name, price }) => {
  return (
    <div className="basket__product d-flex justify-between align-center mt-40">
      <img width="60px" src={image} />
      <h4>{name}</h4>
      <div className="basket__cart">23 шт.</div>
      <h4>{price} руб</h4>
      <div>
        <MyButton>Удалить</MyButton>
      </div>
    </div>
  );
};
