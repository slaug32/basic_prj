import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearBasket } from "../redux/reducers/basket_reducer";
import { MyButton } from "../UI/MyButton";
import { BasketProduct } from "./components/BasketProduct";
import { EmptyBasket } from "./components/EmptyBasket";
import { removeBasketProduct } from "./../redux/reducers/basket_reducer";


export const Basket = () => {
  const { totalAmount, totalPrice, items } = useSelector(
    ({ basket }) => basket
  );

  const dispatch = useDispatch();

  const addProducts = Object.keys(items).map((key) => {
    console.log(items);
    return items[key].items[0];
  });

  const onClearBasket = () => {
    if (window.confirm("Вы действительно хотите очистить корзину?")) {
      dispatch(clearBasket());
    }
  };

  const removeProduct = (id) => {
    if (window.confirm("Вы действительно хотите удалить продукт из корзины?")) {
      dispatch(removeBasketProduct(id));
    }
  };

  return (
    <>
      {totalAmount ? (
        <div className="container p-20 mt-10">
          <div className="basket mt-40 p-20">
            <h1 className="d-flex align-center">
              Добавленные товары
              <MyButton
                style={{
                  marginLeft: "333px",
                  backgroundColor: "#a9a9a9",
                  borderRadius: "10px",
                  padding: "10px",
                }}
                onClick={onClearBasket}
              >
                Очистить корзину
              </MyButton>
            </h1>
            <div>
              {addProducts.map((p) => {
                return (
                  <BasketProduct
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    price={p.price}
                    image={p.image}
                    totalPriceProduct={items[p.id].totalPrice}
                    totalAmountProduct={items[p.id].items.length}
                    removeProduct={removeProduct}
                  />
                );
              })}
            </div>
            <div className="basket__total">
              <div className="d-flex">
                <div className="d-flex align-center">
                  <h3 className="pr-10">Итоговое кол-во:</h3>
                  <h3>{totalAmount} шт.</h3>
                </div>
                <div className="d-flex pl-50">
                  <h3 className="pr-10">Итоговая цена:</h3>
                  <h3>{totalPrice} руб</h3>
                </div>
              </div>
              <MyButton>Оформить заказ</MyButton>
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
