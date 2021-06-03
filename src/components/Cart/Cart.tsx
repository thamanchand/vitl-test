import React, {useContext} from 'react';

import Button from '../Button/Button';
import CartItem from "../CartItem/CartItem";
import VitlProductContext from '../../context';
import Divider from '../Divider/Divider';

import { totalPrice } from '../../utils';

import './styles.scss';
import Label from "../Label/Label";

const Total = ({ basket }: any) => {
    return (
        <>
            <Divider isSmall={false} />
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
        <div className="cartDropdown" data-cy="dropdownCart">
            <>
                {basket.length ? (
                    basket.map((cartItem: any, index: number) => (
                        <CartItem key={index} item={cartItem} />
                        ))
                    ) : (
                        <div className="emptyMessage">
                            <Label text={"Your cart is empty"} size="16px" isBold={false} />
                        </div>
                )}
            </>
            {basket.length > 0 && <Total basket={basket} /> }
            {basket.length > 0 &&
                <Button
                    onClick={() => alert("proceed to checkout")}
                    disabled={false}
                >
                    Go To Checkout
                </Button>
            }
        </div>
    )

}

export default Cart;
