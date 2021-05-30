import React from 'react';

import Button from '../Button/Button';
import CartItem from "../CartItem/CartItem";

import './styles.scss';

const cartItems = [
    {
        id: 1,
        name: 'Suppliment 1',
        price: 20
    },
    {
        id: 2,
        name: 'Suppliment 2',
        price: 30
    }
]
const Cart = () => {
    // checkout logic
    return (
        <div className="cartDropdown">
            <div className="cartItems">
                {cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <span className="emptyMessage">Your cart is empty</span>
                )}
            </div>
            <Button
                onClick={() => console.log("checkout dispatched")}
            >
                Go To Checkout
            </Button>
        </div>
    )

}

export default Cart;

