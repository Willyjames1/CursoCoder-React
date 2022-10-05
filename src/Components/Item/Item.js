import React from 'react'
import "./Item.css"




const Item = ({id, precio, modelo, img}) => {
  return (
    <div className='product-card'>
        <h2 >Producto n*{id}</h2>
        <img className='product-card-img' src={img} alt='' />
        <select className='product-card-option'>
            <option>Seleccionar Modelo</option>
            <option>{modelo[0]}</option>
            <option>{modelo[1]}</option>
            <option>{modelo[2]}</option>

        </select>
        <span className='product-card-price'>${precio}</span>
        <button className='product-card-buttomAdd'>Add to cart</button>


    </div>
  )
}

export default Item;