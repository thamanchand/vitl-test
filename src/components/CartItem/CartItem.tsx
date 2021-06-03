import React, {memo, useContext} from "react";

import ProductImage from "../ProductItem/vitl-vitamin-D.png";
import VitlProductContext from "../../context";

import "./styles.scss";

type Props = {
    item: {
        name: string;
        price: number
    }
}
const CartItem = ({ item: { name, price }}: Props) => {
    const { onProductRemove } = useContext(VitlProductContext);

    return (
        <div className="cartItem">
            <div className="itemDetails">
                <div>
                    <img src={ProductImage} className="cartImage" alt="product_image" />
                </div>
                <span className="name">{name}</span>
                <span className="price">£{price}</span>
                <span className="removeLabel" onClick={() => onProductRemove(name)}>X</span>
            </div>
        </div>
    );
};

// Below memo stops the component from re rendering if we add same item again.
export default memo(CartItem);
