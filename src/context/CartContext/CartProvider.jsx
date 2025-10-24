import { useState } from "react"
import { CartContext } from "./CartContext"

export const CartProvider = ({children}) => {
    const[cart, setCart] = useState([])

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
    alert(`${item.name} agregado`);
    
};

const clearCart = () =>{
    setCart([]) //carrito vacio
}

const getTotalItems = () => {
    if(cart.length){  //si el carrito tiene algo, que me lo retorne
        return cart.length;
    }
};
const values = {
    cart, 
    addItem,
    clearCart,
    getTotalItems,
}

    return <CartContext.Provider value ={values}>{children}</CartContext.Provider>;
};