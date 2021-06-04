import { toast } from 'react-toastify';

import { Nutrient, Product as ProductType, Product, TolerableUpperLimits } from './types';

/**
 *
 * @param {Object[]} basket - List of product in basket
 * @return {number} sum - sum of product ingredients in basket
 */

export const totalPrice = (basket: Product[]) => {
     return basket.reduce((accumulator: number, currentValue: any) => {
        return accumulator + currentValue.price;
    },0);
}

/**
 *
 * @param {Object[]} basket - List of product in basket
 * @param {Object[]} product - Currently added product
 * @param {string} id - Identifier of nutrient
 * @return {number} sum - Sum of ingredients
 */

export const ingredientsTotal = (product: Product, basket: any, id: string) => {
    const findProductNutrient = product.nutrients.find((nutrient) => nutrient.id === id);
    return basket.map((item: Product) => item.nutrients).reduce((accumulator: number, currentValue: Nutrient[])  => {
        if(currentValue[0].id === id && findProductNutrient?.amount) return accumulator + currentValue[0].amount + findProductNutrient?.amount;
        else return accumulator;
    }, 0);
};

/**
 *
 * @param {Object[]} tolerableUpperLimits - Suppliment configurations
 * @param {string} id - Nutrient id
 * @return {Object} {id: string, amount: number} - matched nutrient TUL configuration
 */

export const getNutrientTUL = (tolerableUpperLimits: TolerableUpperLimits[], id: string) => {
    return tolerableUpperLimits.find((config: TolerableUpperLimits) => config.id === id);
}

/**
 *
 * @param {Object[]} currentBasket - List of product in basket
 * @param {Object[]} currentProduct - Currently added product
 * @return {Object[]} [{id: string, amount: number}, null] - List of matched nutrients
 */

export const findAllMatchedNutrients = (currentBasket: any, currentProduct: any) => {
    // get all current product nutrient id => ['vitamin-b', 'vitamin-c'];
    const basketProductNutrientIDS = currentBasket
        .map((item: Product) => item.nutrients)
        .map((item: Nutrient[]) => item[0].id);

    // map and find in currentBasket if nutrient.id exist in currentProductNutrientIDS
    return currentProduct.nutrients
        .map((nutrient: Nutrient) =>
            basketProductNutrientIDS.includes(nutrient.id) ? nutrient : null);
}

/**
 *
 * @param {Object[]} product - Currently added product
 * @param {Object[]} basket - List of products in basket
 * @param {Object[]} result - List of matched nutrients result
 * @param {Object[]} configs - List of ingredients configuration
 * @return {Boolean} true | false - TUL matched nutrient
 */

export const checkNutrientsTUL = (product: ProductType, basket: Nutrient, result: any, configs: TolerableUpperLimits[]) => {
    const productNutrientsStatus: any = []; // e.g: [true, false]
    result.forEach((item: any) => {
        if (item?.id && item?.amount) {
            // get TUL config of a nutrient
            const addedProductTULConfig = getNutrientTUL(configs, item?.id);
            // calculate total sum of current nutrient amount + basket nutrient amount
            const nutrientSum = ingredientsTotal(product, basket, item?.id);

            if (addedProductTULConfig) {
                // If nutrientSum is >= then return true else false.
                if (addedProductTULConfig?.amount >= nutrientSum ) {
                    productNutrientsStatus.push(addedProductTULConfig?.amount >= nutrientSum)
                } else {
                    productNutrientsStatus.push(addedProductTULConfig?.amount >= nutrientSum)
                }
            }
        }
    })
    // Requirements: The cumulation of protein nutrients shouldn't exceed TUL
    // If product passes requirements then return true (add product to basket)
    if (productNutrientsStatus.every((status: boolean) => status)) {
        return true;
    } else {
        toast.error("One of protein supplement TUL level exceeded")
    }
}