import React, { useEffect } from 'react'
import { fundas } from "../Data/data"
import "./ItemDetailContainer.css"
import { useParams } from 'react-router-dom'
import { useState } from 'react'




const ItemDetailContainer = () => {
  const { itemId } = useParams()

  const [model, setModel] = useState()

  const handleChange = (e) => {
    const word = e.target.value
    setModel(word)
    setCount(1)
    setCheck(false)
  }

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
  useEffect(() => {
    fundas.filter((product) => product.id === itemId).map((item) => setData({ ...item }))
  }, [itemId]);

  const [check, setCheck] = useState(false)
  useEffect(() => {
    if (model !== undefined) {
      if (model === "11") {

        if (count >= data.stockI11) {
          setCheck(true)
        }
      } else if (model === "12") {
        if (count >= data.stockI12) {
          setCheck(true)
        }
      } else if (model === "13") {
        if (count >= data.stockI13) {
          setCheck(true)
        }
      }
    }
  }, [count, data.stockI11, data.stockI12, data.stockI13, model])


  return (
    <div className='ItemDetail-Card'>
      <div>
        <div className='ItemDetail-Card-ImgBack'>
          <img src={data.img} className='ItemDetail-Card-Img1' alt=''></img>
        </div>
      </div>
      <div className='ItemDetail-Card-Info'>
        <div className='ItemDetail-Card-ModelB'>

          {fundas.filter((product) => product.id === itemId).map((item) => (
            <select key={item.id} className='ItemDetail-Card-Model' onChange={handleChange}>
              <option>Seleccione el modelo</option>
              <option>{item.modelo[0]}</option>
              <option>{item.modelo[1]}</option>
              <option>{item.modelo[2]}</option>
            </select>
          ))}

        </div>

        {model !== undefined && <div>
          <button className='ItemDetal-Card-BtnStock-Resta' disabled={count <= 1} onClick={decrease}>-</button>
          <span className='ItemDetal-Card-Units' >{count}</span>
          <button className='ItemDetal-Card-BtnStock-Suma' disabled={check} onClick={increase}>+</button>
        </div>}

        <div className='ItemDetail-Card-Precio'>${data.precio}</div>
        <div className='ItemDetail-Card-BtnAdd0'>
          <button className='ItemDetail-Card-BtnAdd'>Add to Cart</button>
        </div>
      </div>
    </div>
  )

}





export default ItemDetailContainer