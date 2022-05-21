import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import logoSvg from "../assets/img/pizza-logo.svg";
import { headerCartSvg } from "../assets/svg";
import { Button } from "./Button";

export const Header = () => {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img width="38" src={logoSvg} alt="Pizza logo" />
          <div>
            <Link to="/">
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </Link>
          </div>
        </div>
        <div className="header__cart">
          <Link to="/cart">
            <Button cart>
              <span>{totalPrice} ₽</span>
              <div className="button__delimiter"></div>
              {headerCartSvg}
              <span>{totalCount}</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
