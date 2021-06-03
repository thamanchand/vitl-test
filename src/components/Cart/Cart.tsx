import React, {useContext} from 'react';

import Button from '../Button/Button';
import CartTotal from '../CartTotal/CartTotal';
import CartItem from '../CartItem/CartItem';
import Label from "../Label/Label";

import VitlProductContext from '../../context';

import './styles.scss';

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
            {basket.length > 0 && <CartTotal basket={basket} /> }
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
