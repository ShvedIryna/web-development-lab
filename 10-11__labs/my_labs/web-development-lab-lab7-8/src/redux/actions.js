export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const LOAD_CART_FROM_STORAGE = 'LOAD_CART_FROM_STORAGE';
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';

export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: item,
});

export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    payload: id,
});

export const updateCartItem = (id, updates) => ({
    type: UPDATE_CART_ITEM,
    payload: { id, updates },
});


export const loadCartFromStorage = (cart) => {
    return {
        type: LOAD_CART_FROM_STORAGE,
        payload: cart,
    };

};

export const CLEAR_CART = 'CLEAR_CART'; 

export const clearCart = () => ({
    type: CLEAR_CART,
});

