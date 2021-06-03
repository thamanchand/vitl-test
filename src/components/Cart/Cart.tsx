import React, {useContext} from 'react';

import Button from '../Button/Button';
import CartItem from "../CartItem/CartItem";
import VitlProductContext from '../../context';

import { totalPrice } from '../../utils';

import './styles.scss';

const Total = ({ basket }: any) => {
    return (
        <>
            <div className="totalDivider" />
            <div className="totalSum">
                <span className="totalLabel">Total</span>
                <span className="totalPrice">£{totalPrice(basket)}</span>
            </div>
        </>
    )
};

const Cart = () => {
    const { basket } = useContext(VitlProductContext);

    return (
        <div className="cartDropdown">
            <>
                {basket.length ? (
                    basket.map((cartItem: any, index: number) => (
                        <CartItem key={index} item={cartItem} />
                        ))
                    ) : (
                        <div className="emptyMessage">Your cart is empty</div>
                )}
            </>
            {basket.length > 0 && <Total basket={basket} /> }
            <Button
                onClick={() => console.log("checkout dispatched")}
                disabled={false}
            >
                Go To Checkout
            </Button>
        </div>
    )

}

export default Cart;

