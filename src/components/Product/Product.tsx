import React, { useContext } from 'react';

import ProductItem from "../ProductItem/ProductItem";
import VitlProductContext from '../../context';
import Label from '../../components/Label';

import { Product as ProductType} from '../../types';
import { findAllMatchedNutrients, checkNutrientsTUL } from '../../utils';

import './styles.scss';

const Product = () => {
    const { products, isLoading, onProductAdd, configs, basket } = useContext(VitlProductContext);
    const onAddProduct = (product: ProductType) => {

        // If basket is empty add new product straight to cart
       if (!basket.length) {
            onProductAdd(product);
       }
       else {
           const result = findAllMatchedNutrients(basket, product);
           // check if result first item is [null]
           const [firstResult] = result;
           if (firstResult === null) {
               onProductAdd(product);
           } else {
               const isAddNewProduct = checkNutrientsTUL(product, basket, result, configs.tolerableUpperLimits)
               if (isAddNewProduct) {
                   onProductAdd(product);
               }
           }
       }
    }

    if (isLoading) return <div className="loader">Loading...</div>;

    return (
        <>
            <Label text={"List of products"} />
            <ul className="cards">
                {products.length
                    ? (
                        products.map((cartItem: ProductType, index) => (
                            <ProductItem key={index} item={cartItem} handleAddProduct={onAddProduct} uuid={index} />
                            ))
                    ) : (
                            <span className="emptyMessage">No products</span>
                    )
                }

            </ul>
        </>
    )

}

export default Product;

