import {Configs, Nutrient, Product} from './types';

export const totalPrice = (basket: Product[]) => {
     return basket.reduce((accumulator: number, currentValue: any) => {
        return accumulator + currentValue.price;
    },0);
}

export const ingredientsTotal = (product: Product, basket: any, id: string) => {
    const findProductNutrient = product.nutrients.find((nutrient) => nutrient.id === id);
    return basket.map((item) => item.nutrients).reduce((accumulator, currentValue)  => {
        if(currentValue[0].id === id) return accumulator + currentValue[0].amount + findProductNutrient?.amount;
        else return accumulator;
    }, 0);
};

export const getNutrientTUL = (tolerableUpperLimits: Configs[], id: string) => {
    return tolerableUpperLimits.find((config: any) => config.id === id);
}

export const matchedNutrientsFound = (currentBasket: any, currentProduct: any) => {

    // get all current product nutrient id => ['vitamin-b', 'vitamin-c'];
    const basketProductNutrientIDS = currentBasket
        .map((item: Product) => item.nutrients)
        .map((item: Product) => item[0].id);

    // map and find in currentBasket if nutrient.id exist in currentProductNutrientIDS
    return currentProduct.nutrients
        .map((nutrient: Nutrient) =>
            basketProductNutrientIDS.includes(nutrient.id) ? nutrient : null);
}
