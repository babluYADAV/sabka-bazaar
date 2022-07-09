import React, { useReducer } from 'react';
import CartContext from './CartConetxt';


const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const existingcartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existingcartItem = state.items[existingcartItemIndex];
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        let updatedItems;
        if (existingcartItem) {
            const updatedItem = {
                ...existingcartItem,
                amount: existingcartItem.amount + action.item.amount

            }
            updatedItems = [...state.items];
            updatedItems[existingcartItemIndex] = updatedItem
        }
        else {
            updatedItems = state.items.concat(action.item);
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if (action.type === "REMOVE") {
        const existingcartItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingcartItem = state.items[existingcartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingcartItem.price;

        let updatedItems;
        if (existingcartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)
        } else {
            const updatedItem = { ...existingcartItem, amount: existingcartItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingcartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
}


const CartProvider = props => {
    const [cartState, dispatchToCartAction] = useReducer(cartReducer, defaultCartState)
    const addItemToCartHandler = item => {
        dispatchToCartAction({ type: "ADD", item: item })

    };

    const removeItemFromCartHandler = id => {
        dispatchToCartAction({ type: "REMOVE", id: id })
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;