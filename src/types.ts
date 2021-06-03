
export type Nutrient = {
    id: string;
    amount: number;
};

export type Product = {
    name: string;
    price: string;
    nutrients: Nutrient[];

}

export type TUL = {
    id: string;
    amount: number;
    unit: string;
};

export type TolerableUpperLimits = {
    id: string;
    amount: number;
    unit: string;
};

export type Configs = {
    tolerableUpperLimits:TUL[],
    currency: string;
}