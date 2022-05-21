import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { CartItem } from "../components/CartItem";
import {
  clearCart,
  removePizza,
  plusItem,
  minusItem,
} from "../redux/actions/cart";
import emptyCartImg from "../assets/img/empty-cart.png";
import { clearCartSvg, cartSvg, backArrowSvg } from "../assets/svg";

export const Cart = () => {
  const dispatch = useDispatch();
  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);

  const pizzas = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  const onClearCartHandler = () => {
    if (window.confirm("Вы действительно хотите очистить корзину?")) {
      dispatch(clearCart());
    } else return;
  };

  const onRemovePizza = (id) => {
    dispatch(removePizza(id));
  };

  const onPlusItem = (id) => {
    dispatch(plusItem(id));
  };

  const onMinusItem = (id) => {
    dispatch(minusItem(id));
  };

  return (
    <div className="container container--cart">
      {totalCount ? (
        <div className="cart">
          <div className="cart__top">
            <h2 className="content__title">
              {cartSvg}
              Корзина
            </h2>
            <div onClick={onClearCartHandler} className="cart__clear">
              {clearCartSvg}
              <span>Очистить корзину</span>
            </div>
          </div>
          <div className="content__items">
            {pizzas.map((obj) => (
              <CartItem
                key={obj.id}
                totalPrice={items[obj.id].totalPrice}
                totalCount={items[obj.id].items.length}
                onRemovePizza={onRemovePizza}
                onMinusItem={onMinusItem}
                onPlusItem={onPlusItem}
                {...obj}
              />
            ))}
          </div>
          <div className="cart__bottom">
            <div className="cart__bottom-details">
              <span>
                Всего пицц: <b>{totalCount} шт.</b>
              </span>
              <span>
                Сумма заказа: <b>{totalPrice} ₽</b>
              </span>
            </div>
            <div className="cart__bottom-buttons">
              <Link
                to="/"
                className="button button--outline button--add go-back-btn"
              >
                {backArrowSvg}

                <span>Вернуться назад</span>
              </Link>
              <div className="button pay-btn">
                <span>Оплатить сейчас</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart cart--empty">
          <h2>
            Корзина пустая <span>😕</span>
          </h2>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу.
            <br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <img src={emptyCartImg} alt="Empty cart" />
          <Link to="/" className="button button--black">
            <span>Вернуться назад</span>
          </Link>
        </div>
      )}
    </div>
  );
};
