import Item from "../Item/Item";
import "./ItemList.css"
import { fundas } from "../Data/data";
import { useEffect, useState } from "react";
const ItemList = () => {
    const [loading, setLoading] = useState(false)



    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 2000);
    }, [])

    return (
        <>{loading && <div className="product-div-container">
            {fundas.map((producto) => {
                return (

                    <div key={producto.id}>

                        <Item
                            nombre={producto.nombre}
                            img={producto.img}
                            id={producto.id}
                            precio={producto.precio}
                            modelo={producto.modelo}
                        />
                    </div>
                );
            })
            }
        </div>}</>
    )
}



export default ItemList;