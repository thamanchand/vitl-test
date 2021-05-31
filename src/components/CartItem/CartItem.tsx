import React, { memo } from "react";

import "./styles.scss";
import ProductImage from "../ProductItem/vitl-vitamin-D.png";

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
                <div>
                    <img src={ProductImage} className="cartImage" alt="product_image" />
                </div>
                <span className="name">{name}</span>
                <span className="price">£{price}</span>
                <span className="removeLabel">X</span>
            </div>
        </div>
    );
};

// Below memo stops the component from re rendering if we add same item again.
export default memo(CartItem);
