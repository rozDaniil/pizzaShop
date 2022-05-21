import React, { useState } from "react";
import classNames from "classnames";
import { Button } from "../Button";
import { plusSvg } from "../../assets/svg";

const availiableTypes = ["тонкое", "традиционное"];
const availableSize = [26, 30, 40];

export const PizzaBlock = ({
  id,
  name,
  imageUrl,
  price,
  sizes,
  types,
  onClickAddPizza,
  addedCount,
}) => {
  const [activeTypes, setActiveTypes] = useState(types[0]);
  const [activeSizes, setActiveSizes] = useState(sizes[0]);

  const activeTypeHandler = (index) => {
    setActiveTypes(index);
  };

  const activeSizeHandler = (index) => {
    setActiveSizes(index);
  };

  const onAddPizza = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      type: availiableTypes[activeTypes],
      size: activeSizes,
    };
    onClickAddPizza(obj);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {availiableTypes.map((type, index) => (
            <li
              className={classNames({
                active: activeTypes === index,
                disabled: !types.includes(index),
              })}
              onClick={() => activeTypeHandler(index)}
              key={index + type}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {availableSize.map((pizzaSize, index) => (
            <li
              className={classNames({
                active: activeSizes === pizzaSize,
                disabled: !sizes.includes(pizzaSize),
              })}
              key={index + pizzaSize}
              onClick={() => activeSizeHandler(pizzaSize)}
            >
              {pizzaSize} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <Button onClick={onAddPizza} add outline>
          {plusSvg}
          <span>Добавить</span>
          {addedCount ? <i>{addedCount}</i> : null}
        </Button>
      </div>
    </div>
  );
};
