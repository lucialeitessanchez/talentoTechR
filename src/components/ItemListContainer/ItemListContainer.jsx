import {useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
    const [products, setProducts ] = useState([])

    useEffect(()=>{}, [])  /* una funcion que va a a desplegar el efecto segundario, y el array si se tiene que volver a disparar*/
    fetch("/data/products.json")
    .then((res) => {
        if(!res.ok){
            throw new Error("Hubo un problema al buscar productos");
        }
        return res.json(); //si todo salio bien
    })
    .then((data) =>{
        setProducts(data)
    })
    .catch((err)=>{
        console.log(err);
    })
    return (
        <section>
            <h1>Bienvenida</h1>
            <ItemList list={products}/>
        </section>
    );
};