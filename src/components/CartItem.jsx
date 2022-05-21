import React from "react";
import { plusSvg, minusSvg, deleteFromCartSvg } from "../assets/svg";

export const CartItem = ({
  name,
  type,
  size,
  id,
  totalPrice,
  totalCount,
  onRemovePizza,
  onMinusItem,
  onPlusItem,
}) => {
  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img
          className="pizza-block__image"
          src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
          alt="Pizza"
        />
      </div>
      <div className="cart__item-info">
        <h3>{name}</h3>
        <p>
          {type} тесто, {size} см.
        </p>
      </div>
      <div className="cart__item-count">
        <div
          onClick={() => onMinusItem(id)}
          className="button button--outline button--circle cart__item-count-minus"
        >
          {minusSvg}
        </div>
        <b>{totalCount}</b>
        <div
          onClick={() => onPlusItem(id)}
          className="button button--outline button--circle cart__item-count-plus"
        >
          {plusSvg}
        </div>
      </div>
      <div className="cart__item-price">
        <b>{totalPrice} ₽</b>
      </div>
      <div onClick={() => onRemovePizza(id)} className="cart__item-remove">
        <div className="button button--outline button--circle">
          {deleteFromCartSvg}
        </div>
      </div>
    </div>
  );
};
