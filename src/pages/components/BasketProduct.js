import React from "react";
import { MyButton } from "../../UI/MyButton";
import Apple from "../../images/apple.jpg";

export const BasketProduct = () => {
  return (
    <div className="basket__product d-flex justify-between align-center mt-40">
      <img width="60px" src={Apple} />
      <h4>Название ывапвапавпавпавпавпвапавп</h4>
      <div className="basket__cart">23 шт.</div>
      <h4>122312312руб</h4>
      <div>
        <MyButton>Удалить</MyButton>
      </div>
    </div>
  );
};
