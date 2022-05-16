import React from "react";
import { MyButton } from "../../UI/MyButton";

export const BasketProduct = ({
  id,
  image,
  name,
  price,
  totalPriceProduct,
  totalAmountProduct,
  removeProduct,
}) => {
  const onRemoveProduct = () => {
    removeProduct(id);
  };

  return (
    <div className="basket__product d-flex justify-between align-center mt-40">
      <img width="60px" src={image} />
      <h4>{name}</h4>
      <div className="basket__cart">{totalPriceProduct}23 шт.</div>
      <h4>{price} руб</h4>
      <div>
        <MyButton onClick={onRemoveProduct}>Удалить</MyButton>
      </div>
    </div>
  );
};
