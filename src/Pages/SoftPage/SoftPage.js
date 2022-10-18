import "./SoftPage.css"
import { fundas } from "../../Components/Data/data"
import React, { useEffect, useState } from 'react'
import Item from "../../Components/Item/Item"



const SoftPage = () => {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 1000);
    })
    return (
        <>{loading && <div className="product-div-container">
            {fundas.filter((item) => item.categoria === "Soft").map((item) => {
                return (
                    <div key={item.id}>
                        <Item
                            nombre={item.nombre}
                            img={item.img}
                            id={item.id}
                            precio={item.precio}
                            modelo={item.modelo}
                        />
                    </div>
                )
            })}

        </div>}</>
    )
}

export default SoftPage