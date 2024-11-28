import { createStore } from 'redux';
import cartReducer from './reducer';


const loadCartFromLocalStorage = () => {
    try {
        const serializedCart = localStorage.getItem('cart');
        return serializedCart ? JSON.parse(serializedCart) : [];
    } catch (error) {
        console.error('Error loading cart from localStorage:', error);
        return [];
    }
};

const initialState = {
    cart: loadCartFromLocalStorage(),
};


const store = createStore(cartReducer, initialState);

export default store;
