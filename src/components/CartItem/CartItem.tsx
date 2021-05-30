import React, { memo } from "react";

import "./styles.scss";

type Props = {
    item: {
        name: string;
        price: number
    }
}
const CartItem = ({ item: { name, price }}: Props) => {
    return (
        <div className="cartItem">
            <div className="itemDetails">
                <span className="name">{name}</span>
                <span className="price">{price} x price</span>
            </div>
        </div>
    );
};

// Below memo stops the component from re rendering if we add same item again.
export default memo(CartItem);
