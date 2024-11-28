import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartItem } from '../redux/actions';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Cart from '../components/cart/Cart';


const CartPage = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleUpdate = (id, updates) => {
        dispatch(updateCartItem(id, updates));
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.totalPrice, 0);
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <div className="cart-page">
            <Header />
            <main className="cart-content">
                <Cart
                    cart={cart}
                    onRemove={handleRemove}
                    onUpdate={handleUpdate}
                    calculateTotal={calculateTotal}
                />
            </main>
            <Footer />
        </div>
    );
};

export default CartPage;
