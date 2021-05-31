import React, {memo, useContext} from "react";

import Button from "../Button/Button";
import ProductImage from './vitl-vitamin-D.png';
import { Product} from "../../types";

import "./styles.scss";
import VitlProductContext from "../../context";

type Props = {
    item: Product;
    handleAddProduct: (item: any) => void;
};

const ProductItem = ({ item, handleAddProduct }: Props) => {
    const { name, price} = item;
    const { basket } = useContext(VitlProductContext);

    const isProductExist = basket.filter((item: any) => item.name === name).length > 0;

    return (
        <li className="cardsItem">
            <div className="card">
                <div>
                    <img src={ProductImage} className="cardImage" alt="product_image" />
                </div>
                <div className="cardContent">
                    <h2 className="productName">{name}</h2>
                    <p className="productPrice">£{price}</p>
                    <div className="productFooter">
                        <Button
                            onClick={() => handleAddProduct(item)}
                            disabled={isProductExist}
                        >
                            Add to cart
                        </Button>
                    </div>
                </div>
            </div>
        </li>
    );
};

// Below memo stops the component from re rendering if we add same item again.
export default memo(ProductItem);
