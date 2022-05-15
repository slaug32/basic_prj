import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearBasket } from "../redux/reducers/basket_reducer";
import { MyButton } from "../UI/MyButton";
import { BasketProduct } from "./components/BasketProduct";
import { EmptyBasket } from "./components/EmptyBasket";

export const Basket = () => {
  const { totalAmount, totalPrice, items } = useSelector(
    ({ basket }) => basket
  );

  const dispatch = useDispatch();

  const basketAddProducts = Object.keys(items).map((key) => {
    return items[key][0];
  });

  const onClearBasket = () => {
    if (window.confirm("Вы действительно хотите очистить корзину?")) {
      dispatch(clearBasket());
    }
  };

  return (
    <>
      {totalAmount ? (
        <div className="container p-20 mt-10">
          <div className="basket mt-40 p-20">
            <h1>Добавленные товары</h1>
            <div className="basket__products">
              {basketAddProducts.map((p) => {
                <BasketProduct
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  price={p.price}
                  image={p.image}
                />;
              })}
            </div>
            <div className="basket__total">
              <div className="d-flex align-center">
                <h3 className="pr-10">Итоговое кол-во:</h3>
                <h3>{totalAmount} шт.</h3>
              </div>
              <div className="d-flex align-center">
                <h3 className="pr-10">Итоговая цена:</h3>
                <h3>{totalPrice} руб</h3>
              </div>
              <MyButton>Оформить заказ</MyButton>
              <MyButton onClick={onClearBasket}>Очистить корзину</MyButton>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mt-40 p-20">
          <div className="p-20 mt-10">
            <EmptyBasket />
          </div>
        </div>
      )}
    </>
  );
};
