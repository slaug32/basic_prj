import React from "react";
import Logo from "../../images/logo.png";
import Social from "../../images/Group 638.png";
import AppStore from "../../images/App Store.png";
import PlayMarket from "../../images/Google Play.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo d-flex align-center pl-20">
        <img width="30px" src={Logo} />
        <h3 className="ml-10">Apple</h3>
      </div>
      <div className="frooter__social d-flex align-center pl-20">
        <img src={Social} />
        <div className="pl-10">
          <img src={AppStore} />
          <img className="pl-10" src={PlayMarket} />
        </div>
      </div>
      <div className="footer__info">
        <div>©Apple</div>
        <a className="pr-10" href="#">
          Правовая информация
        </a>
        <a href="#">Политика конфиденциальности</a>
      </div>
    </div>
  );
};
