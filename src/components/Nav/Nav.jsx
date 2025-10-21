import { Link } from "react-router-dom"

export const Nav = () => {
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
        </ul>
    </nav>
}