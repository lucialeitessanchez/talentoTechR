import { useState } from "react"
import { CartContext } from "./CartContex"

export const CartProvider = ({children}) => {
    const[cart, setCart] = useState()

    const exists = (id) => {
        const exist = cart.some((p) => p.i === id);
        return exist;
    };
    const addItem = (item) => {
        if(exists(item.id)){
            alert("Ya existe en el carrito");
            return;

        }
    setCart([...cart,item]);
    
};
    return <CartContext.Provider value ={{}}>{children}</CartContext.Provider>;
};