import React from "react";
import { MyButton } from "../../UI/MyButton";
import Basket from "../../images/NoBasket.jpg";
import { Link } from "react-router-dom";

export const EmptyBasket = () => {
  return (
    <div className="emptybasket">
      <h1>Корзина пустая</h1>
      <div className="emptybasket-inner mr-150 mt-40">
        <div>
          <img className="emptybasket_img" src={Basket} />
        </div>
        <h3>Добавьте хотя бы один товар, чтобы сделать заказ</h3>
        <Link to="/">
          <MyButton>Вернуться назад</MyButton>
        </Link>
      </div>
    </div>
  );
};
