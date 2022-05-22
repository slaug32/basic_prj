import React from "react";
import { MyButton } from "../../UI/MyButton";

export const BasketProduct = ({
  id,
  image,
  name,
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
      <div className="basket__cart">{totalAmountProduct} шт.</div>
      <h4>{totalPriceProduct} руб</h4>
      <div>
        <MyButton onClick={onRemoveProduct}>Удалить</MyButton>
      </div>
    </div>
  );
};
