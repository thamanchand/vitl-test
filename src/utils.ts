import { toast } from 'react-toastify';

import { Nutrient, Product as ProductType, Product, TolerableUpperLimits } from './types';

export const totalPrice = (basket: Product[]) => {
     return basket.reduce((accumulator: number, currentValue: any) => {
        return accumulator + currentValue.price;
    },0);
}

export const ingredientsTotal = (product: Product, basket: any, id: string) => {
    const findProductNutrient = product.nutrients.find((nutrient) => nutrient.id === id);
    return basket.map((item: Product) => item.nutrients).reduce((accumulator: number, currentValue: Nutrient[])  => {
        if(currentValue[0].id === id && findProductNutrient?.amount) return accumulator + currentValue[0].amount + findProductNutrient?.amount;
        else return accumulator;
    }, 0);
};

export const getNutrientTUL = (tolerableUpperLimits: TolerableUpperLimits[], id: string) => {
    return tolerableUpperLimits.find((config: TolerableUpperLimits) => config.id === id);
}

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