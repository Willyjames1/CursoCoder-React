import "./SoftPage.css"
import React, { useEffect, useState } from 'react'
import Item from "../../Components/Item/Item"
import { getFirestore, collection, getDocs } from "firebase/firestore"

const SoftPage = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const queryDB = getFirestore()
        const queryCollection = collection(queryDB, 'productos')
        getDocs(queryCollection)
            .then((res) => setData(res.docs.map((product) => ({ id: product.id, ...product.data() }))))
    }, [])

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 1000);
    }, [])

    return (
        <div className="SoftPage-background">
            <div></div>
            {loading && <div className="SoftPage-container">
                {data.filter((item) => item.categoria === "Soft").map((item) => {
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

            </div>}
        </div>
    )
}

export default SoftPage