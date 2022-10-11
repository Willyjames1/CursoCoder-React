import React from 'react'
import { fundas } from "../Data/data"
import "./ItemDetailContainer.css"
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const {itemId} = useParams ()
  return (
    <div className='ItemDetail-Card'>
        {fundas.filter((product) => product.id === itemId).map((item) => (
        <div key={item.id}>
            <div className='ItemDetail-Card-ImgBack'><img src={item.img} className='ItemDetail-Card-Img1'></img></div>
            <div className='ItemDetail-Card-Model'>
                <option>Iphone{item.modelo[0]}</option>
                <option>Iphone{item.modelo[1]}</option>
                <option>Iphone{item.modelo[2]}</option>
            </div>
            <div className='ItemDetail-Card-Precio'>${item.precio}</div>
            <button className='ItemDetail-Card-BtnAdd'>Add to Cart</button>
        </div>) ) }
    </div>
  )
}





export default ItemDetailContainer