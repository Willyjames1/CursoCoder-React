import React from 'react'
import { Link } from 'react-router-dom';
import "./Item.css"





const Item = ({ id, nombre, precio, modelo, img }) => {

  return (
    <div className='product-card'>
      <Link to={`/item/${id}`} >
        <h2 className='product-card-nombre'>{nombre}</h2>
        <img className='product-card-img' src={img} alt='' />
      </Link>
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