import Item from "../Item/Item";
import "./ItemList.css"
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";


const ItemList = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        const queryDB = getFirestore()
        const queryCollection = collection(queryDB, 'productos')
        getDocs(queryCollection)
            .then((res) => setData(res.docs.map((product) => ({ id: product.id, ...product.data() }))))
    }, [])


    const loader = <div className="loader" ></div>



    return (
        <div className="product-background">

            {data.length > 0 ? <div className="product-div-container">
                {data.map((product) =>

                    <div key={product.id}>

                        <Item
                            nombre={product.nombre}
                            img={product.img}
                            id={product.id}
                            precio={product.precio}
                            modelo={product.modelo}
                        />
                    </div>
                )}
            </div> : loader}

        </div>
    )
}



export default ItemList;