import { useContext } from "react"
import { CartContext } from "./CartContex"

export const useCartcontext = () => {
    return  useContext(CartContext);
}