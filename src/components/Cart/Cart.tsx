import React, {useContext} from 'react';

import Button from '../Button/Button';
import CartItem from "../CartItem/CartItem";
import VitlProductContext from '../../context';
import { productTotal } from '../../utils';

import './styles.scss';

const Total = ({ basket }: any) => {
    return (
        <>
            <div className="totalDivider" />
            <div className="totalSum">
                <span className="totalLabel">Total</span>
                <span className="totalPrice">£{productTotal(basket)}</span>
            </div>
        </>
    )
};

const Cart = () => {
    const { basket } = useContext(VitlProductContext);

    return (
        <div className="cartDropdown">
            {basket.length ? (
                basket.map((cartItem: any, index: number) => (
                    <CartItem key={index} item={cartItem} />
                    ))
                ) : (
                    <span className="emptyMessage">Your cart is empty</span>
            )}
            {basket.length > 0 && <Total basket={basket} /> }
            <Button
                onClick={() => console.log("checkout dispatched")}
            >
                Go To Checkout
            </Button>
        </div>
    )

}

export default Cart;

