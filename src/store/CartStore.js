import { useLocalStore } from "mobx-react-lite";
import { createContext } from "react";

export const createCartStore = () => {
    return {
        count: 0,
    };
};

export const CartContext = createContext(null);

export const CartProvider = ({children}) => {
    const cartStore = useLocalStore(createCartStore);
    return (
        <CartContext.Provider value={cartStore}>{children}</CartContext.Provider>
    );
};