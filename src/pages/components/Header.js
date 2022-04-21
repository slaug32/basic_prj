import React from "react";
import Logo from "../../images/logo.png";
import Basket from "../../images/basket.png";
import Accaunt from "../../images/accaunt.png";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="d-flex justify-between align-center pt-15">
      <div className="d-flex align-center">
        <NavLink to="/">
          <img width="30px" src={Logo} />
        </NavLink>
        <div className="header__left-content">
          <h3>Apple</h3>
          <p>Магазин товаров компании Apple</p>
        </div>
      </div>
      <div>
        <ul className="d-flex align-center">
          <div>
            <input
              className="header__left-search mr-30"
              placeholder="Поиск товаров..."
            />
          </div>
          <li className="mr-5">
            <NavLink to="/basket">
              <img width="16px" src={Basket} />
            </NavLink>
          </li>
          <span>1200руб</span>
          <li className="ml-20">
            <NavLink to="/history">
              <img width="16px" src={Accaunt} />
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};
