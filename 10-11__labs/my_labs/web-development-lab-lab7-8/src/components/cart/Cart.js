import React from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart, onRemove, onUpdate, calculateTotal }) => {
    const navigate = useNavigate();

    const handleOrder = () => {

        navigate('/checkout');
    };

    return (
        <div className="cart">
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty. Add some items to it!</p>
            ) : (
                <div className="cart-items">
                    {cart.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h2>{item.name}</h2>
                                <p>Price per day per visitor: {item.price} UAH</p>
                                <label>
                                    Days:
                                    <select
                                        value={item.days}
                                        onChange={(e) =>
                                            onUpdate(item.id, { days: Number(e.target.value) })
                                        }
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </label>
                                <label>
                                    Visitors:
                                    <select
                                        value={item.visitors}
                                        onChange={(e) =>
                                            onUpdate(item.id, { visitors: Number(e.target.value) })
                                        }
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </label>
                                <p>Total Price: {item.totalPrice} UAH</p>
                                <button onClick={() => onRemove(item.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                    <div className="cart-summary">
                        <h3>Total Cost: {calculateTotal()} UAH</h3>
                        <div className="cart-actions">
                            <button
                                className="return-to-catalog"
                                onClick={() => navigate('/catalog')}
                            >
                                Return to Catalog
                            </button>
                            <button className="place-order" onClick={handleOrder}>
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
