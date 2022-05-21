export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj,
})

export const clearCart = () => ({
    type: 'CLEAR_CART',
})

export const plusItem = (id) => ({
    type: 'PLUS_ITEM',
    payload: id
})

export const minusItem = (id) => ({
    type: 'MINUS_ITEM',
    payload: id
})

export const removePizza = (id) => ({
    type: 'REMOVE_PIZZA',
    payload: id,

})