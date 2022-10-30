import "./MaxProtectionPage.css"
import React, { useEffect, useState } from 'react'
import Item from "../../Components/Item/Item"
import { getFirestore, collection, getDocs } from "firebase/firestore"


const MaxProtection = () => {

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
    <div className="MaxProtection-background">
      <div></div>
      {loading && <div className="MaxProtection-container">
        {data.filter((item) => item.categoria === "MaxProtection").map((item) => {
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

export default MaxProtection