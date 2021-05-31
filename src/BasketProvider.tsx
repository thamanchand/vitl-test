import * as React from "react";
// import { Products } from "./products";

type SkuId = string;
type Quantity = number;
type Basket = Record<SkuId, Quantity>;

type AddItemParams = { id: SkuId; quantity?: Quantity };
type RemoveItemParams = { id: SkuId; quantity?: Quantity };
type ClearItemParams = { id: SkuId };

type BasketContextType = {
    basket: Basket;
    addItem: (params: AddItemParams) => void;
    removeItem: (params: RemoveItemParams) => void;
    clearItem: (params: ClearItemParams) => void;
    clearBasket: () => void;
};

type Actions =
    | ({ type: "ADD_ITEM" } & AddItemParams)
    | ({ type: "REMOVE_ITEM" } & RemoveItemParams)
    | ({ type: "CLEAR_ITEM" } & ClearItemParams)
    | { type: "CLEAR_BASKET" };

const BasketContext = React.createContext<BasketContextType>({
    basket: {},
    addItem: () => null,
    removeItem: () => null,
    clearItem: () => null,
    clearBasket: () => null
});

const basketReducer = (state: Basket, action: Actions): Basket => {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                [action.id]: (state[action.id] ?? 0) + (action.quantity ?? 1)
            };
        case "REMOVE_ITEM":
            const newState = {
                ...state,
                [action.id]: (state[action.id] ?? 0) - (action.quantity ?? 1)
            };
            if (newState[action.id] <= 0) {
                delete newState[action.id];
            }
            return newState;
        case "CLEAR_ITEM":
            const copy = { ...state };
            delete copy[action.id];
            return copy;
        case "CLEAR_BASKET":
            return {};
        default:
            return state;
    }
};

export function BasketProvider({
                                   children,
                                   storeKey = "@local-basket"
                               }: {
    children: React.ReactNode;
    storeKey?: string;
}) {
    const localData = React.useRef(localStorage.getItem(storeKey));

    const [basket, dispatch] = React.useReducer(
        basketReducer,
        localData.current ? JSON.parse(localData.current) : {}
    );

    const addItem = React.useCallback<BasketContextType["addItem"]>(
        (params) => {
            dispatch({ type: "ADD_ITEM", ...params });
        },
        [dispatch]
    );

    const removeItem = React.useCallback<BasketContextType["removeItem"]>(
        (params) => {
            dispatch({ type: "REMOVE_ITEM", ...params });
        },
        [dispatch]
    );

    const clearItem = React.useCallback<BasketContextType["clearItem"]>(
        (params) => {
            dispatch({ type: "CLEAR_ITEM", ...params });
        },
        [dispatch]
    );

    const clearBasket = React.useCallback<
        BasketContextType["clearBasket"]
        >(() => {
        dispatch({ type: "CLEAR_BASKET" });
    }, [dispatch]);

    React.useEffect(() => {
        localStorage.setItem(storeKey, JSON.stringify(basket));
    }, [basket, storeKey]);

    return (
        <BasketContext.Provider
            value={{ basket, addItem, removeItem, clearItem, clearBasket }}
        >
            {children}
        </BasketContext.Provider>
    );
}

export function useBasket() {
    return React.useContext(BasketContext);
}

export function useBasketProducts(products: any) {
    const { basket } = useBasket();

    const items = React.useMemo(() => {
        return Object.keys(basket).map((productId) => {
            const product = products[productId];
            const quantity = basket[productId];
            return {
                product,
                quantity,
                totalPrice: product.price * quantity
            };
        });
    }, [products, basket]);

    const quantity = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + item.totalPrice, 0);

    return { items, quantity, totalPrice };
}
