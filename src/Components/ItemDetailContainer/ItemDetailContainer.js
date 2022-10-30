import React, { useEffect } from 'react'

import "./ItemDetailContainer.css"
import { useParams } from 'react-router-dom'
import { useState, useContext } from 'react'
import { Contexto } from '../../Context/CartContext'
import { getFirestore, doc, getDoc } from 'firebase/firestore'


const ItemDetailContainer = () => {

  const { addProduct } = useContext(Contexto)

  const { itemId } = useParams()

  const [model, setModel] = useState()


  const handleChange = (e) => {
    const word = e.target.value
    setModel(word)
    setCount(1)
  }

  /*   --ItemCount de Stock-- */

  const [count, setCount] = useState(1)

  const decrease = () => {
    const units = count - 1
    setCount(units)
  }

  const increase = () => {
    const units = count + 1
    setCount(units)
  }







  const [data, setData] = useState({})
  const [data2, setData2] = useState([])


  useEffect(() => {
    const queryDB = getFirestore()
    const queryDoc = doc(queryDB, 'productos', itemId)
    getDoc(queryDoc)
      .then(res => setData({ id: res.id, ...res.data() }))

    getDoc(queryDoc)
      .then((res) => setData2(res.get("modelo")))

  }, [itemId]);


  const [loading, setLoading] = useState(false)
  const loader = <div className="loader" ></div >


  return (
    <div className='ItemDetail-background'>{!loading && loader}
      <div className={loading ? 'ItemDetail-Card' : 'ItemDetail-Card-notDisplayed'}>
        <div className='ItemDetail-Card-ImgBack'>
          <div >
            <img src={data.img} onLoad={() => setLoading(true)} className='ItemDetail-Card-Img1' alt=''></img>
          </div>
        </div>
        <div className='ItemDetail-Card-Info'>
          <div className='ItemDetail-Card-ModelB'>

            {
              <select className='ItemDetail-Card-Model' onChange={handleChange}>
                <option>Seleccione el modelo</option>
                <option>{data2[0]}</option>
                <option>{data2[1]}</option>
                <option>{data2[2]}</option>
              </select>
            }

          </div>

          {model !== undefined && <div className='ItemDetail-Card-Quantity'>
            <button className='ItemDetal-Card-BtnStock-Resta' disabled={count <= 1} onClick={decrease}>-</button>
            <span className='ItemDetal-Card-Units' >{count}</span>
            <button className='ItemDetal-Card-BtnStock-Suma' onClick={increase}>+</button>
          </div>}

          <div className='ItemDetail-Card-Precio'>${data.precio}</div>
          <div className='ItemDetail-Card-BtnAdd0'>
            <button className='ItemDetail-Card-BtnAdd' onClick={() => addProduct(data, count, model)}>Add to Cart</button>
          </div>
        </div>
      </div >
    </div>
  )


}





export default ItemDetailContainer