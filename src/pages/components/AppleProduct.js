import React from "react";
import Check from "../../images/check.png";
// import Apple from "../../images/apple.jpg";

export const AppleProduct = ({ image, name, price }) => {
  return (
    <div className="cart">
      <img width="150px" src={image} />
      <h4>{name}</h4>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена:</span>
          <h3>{price} руб</h3>
        </div>
        <button className="button">
          <img width="20px" src={Check} />
        </button>
      </div>
    </div>
  );
};