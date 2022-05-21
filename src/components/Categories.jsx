import React from "react";

export const Categories = React.memo(({ activeCategory, onClick, items }) => {
  const onSelectItem = (index) => {
    onClick(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onSelectItem(null)}
          className={activeCategory === null ? "active" : ""}
        >
          Все
        </li>
        {items &&
          items.map((category, index) => (
            <li
              className={index === activeCategory ? "active" : ""}
              onClick={() => onSelectItem(index)}
              key={index}
            >
              {category}
            </li>
          ))}
      </ul>
    </div>
  );
});
