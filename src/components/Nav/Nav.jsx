import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext/useCartContext"


export const Nav = () => {

    const { getTotalItems } = useCartContext();

    return <nav>
        <ul>
            <li>{/* a donde se supone que va a navegar el link */}
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/category/electro"}>Electrodomesticos</Link>
            </li>
            <li>
                <Link to={"/category/belleza"}>Belleza personal</Link>
            </li>
            <li>
                <Link>Carrito</Link>
                {getTotalItems() > 0 && (
                    <span className="in-cart">{getTotalItems()}</span>
                )}
            </li>
        </ul>
    </nav>
}