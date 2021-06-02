import React, { useContext } from 'react';
import { toast } from 'react-toastify';

import ProductItem from "../ProductItem/ProductItem";
import VitlProductContext from '../../context';
import {Configs, Product as ProductType, Nutrient} from '../../types';
import { getNutrientTUL, matchedNutrientsFound, ingredientsTotal } from '../../utils';

import './styles.scss';

const checkTUL = (product: ProductType, basket: Nutrient, result: any, configs: Configs) => {
    const productNutrientsStatus: any = []; // e.g: [true, false]
    result.forEach((item: any) => {
        if (item?.id && item?.amount) {
            // get TUL config of a nutrient
            const addedProductTULConfig = getNutrientTUL(configs.tolerableUpperLimits, item?.id);
            // calculate total sum of current nutrient amount + basket nutrient amount
            const nutrientSum = ingredientsTotal(product, basket, item?.id);

            // If nutrientSum is >= then return true else false.
            if (addedProductTULConfig?.amount >= nutrientSum ) {
                productNutrientsStatus.push(addedProductTULConfig.amount >= nutrientSum)
            } else {
                productNutrientsStatus.push(addedProductTULConfig.amount >= nutrientSum)
            }
        }
    })
    // If all nutrients requirements passes then return true
    // add product to basket
    if (productNutrientsStatus.every(status => status === true)) {
        return true;
    } else {
        toast.error("One of protein supplement TUL level exceeded")
    }
}

const Product = () => {
    const { products, isLoading, onProductAdd, configs, basket } = useContext(VitlProductContext);
    const onAddProduct = (product: ProductType) => {

        // If basket is empty add new product straight
       if (!basket.length) {
            onProductAdd(product);
       } else {
           const result = matchedNutrientsFound(basket, product);

           if (result.length === 1 && result[0] === null) {
               onProductAdd(product);
           }
            else {
               const isAddNewProduct = checkTUL(product, basket, result, configs)
               if (isAddNewProduct) {
                   onProductAdd(product);
               }
            }
       }
    }

    if (isLoading) return <div className="loader">Loading...</div>;

    return (
        <ul className="cards">
            {products.length
                ? (
                    products.map((cartItem: ProductType, index) => (
                        <ProductItem key={index} item={cartItem} handleAddProduct={onAddProduct}/>
                        ))
                ) : (
                        <span className="emptyMessage">No products</span>
                )
            }

        </ul>
    )

}

export default Product;

