import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setCategory, setSortBy } from "../redux/actions/filters";
import { addPizzaToCart } from "../redux/actions/cart";
import { fetchPizzas } from "../redux/actions/pizzas";

import { Categories } from "../components/Categories";
import { PizzaBlock } from "../components/PizzaBlock/PizzaBlock";
import { SortPopup } from "../components/SortPopup";
import { PizzaLoadingComponent } from "../components/PizzaBlock/PizzaLoadingComponent";

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortItems = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "name" },
];

export const Home = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(undefined);
  const dispatch = useDispatch();
  const { items, isLoaded } = useSelector(({ pizzas }) => pizzas);
  const { category, sortBy } = useSelector(({ filters }) => filters);
  const cartItems = useSelector(({ cart }) => cart.items);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
    setSelectedCategory(categoryNames[index]);
  }, []);

  const onSelectSortType = React.useCallback((name) => {
    dispatch(setSortBy(name));
  }, []);

  const onAddpizzaToCart = React.useCallback((item) => {
    dispatch(addPizzaToCart(item));
  }, []);

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClick={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">
        {selectedCategory ? selectedCategory : "Все пиццы"}
      </h2>
      <div className="content__items">
        {isLoaded
          ? items &&
            items.map((item) => (
              <PizzaBlock
                onClickAddPizza={onAddpizzaToCart}
                {...item}
                key={item.id}
                addedCount={
                  cartItems[item.id] && cartItems[item.id].items.length
                }
              />
            ))
          : Array(3)
              .fill(0)
              .map((_, index) => <PizzaLoadingComponent key={index} />)}
      </div>
    </div>
  );
};
