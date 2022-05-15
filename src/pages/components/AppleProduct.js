import React from "react";
import Check from "../../images/check.png";

export const AppleProduct = ({ id, image, name, price, onAddProduct }) => {
  const onAddClickProduct = () => {
    const productObj = { id, name, price, image };
    onAddProduct(productObj);
  };

  return (
    <div className="cart">
      <img width="150px" src={image} />
      <h4>{name}</h4>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена:</span>
          <h3>{price} руб.</h3>
        </div>
        <button className="button" onClick={onAddClickProduct}>
          <img width="20px" src={Check} />
        </button>
      </div>
    </div>
  );
};
