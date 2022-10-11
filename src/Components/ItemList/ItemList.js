import Item from "../Item/Item";
import "./ItemList.css"
import { fundas } from "../Data/data";
import { useEffect, useState } from "react";

const ItemList = () => {
    const [products, setProducts] = useState ([]);

const traerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(fundas)
    }, 0);
});

const traerProductosBD = async () => {
    try {
        const BaseDatos = await traerProductos;
        setProducts (BaseDatos);
    } catch (error) {
    console.log(error);
    }
}

useEffect(() => {
    
    traerProductosBD();
},[]); 

return (
    <div className="product-div-container">
        {products.map((producto) => {
        return (

            <div key={producto.id}>
                
                <Item            
                img={producto.img}
                id={producto.id}
                precio={producto.precio}
                modelo={producto.modelo}
                />
            </div>
        );
        })
        }
    </div>
)
}



export default ItemList;