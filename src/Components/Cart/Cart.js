import "./Cart.css"
import { useContext } from 'react'
import { Contexto } from '../../Context/CartContext'
import Checkout from "../Checkout/Checkout"



const Cart = () => {
    const { cart, CartStatus, setCartStatus, removeProducts, clearCart, totalPrice, CheckoutStatus, setCheckoutStatus } = useContext(Contexto)








    return (
        <>
            {CheckoutStatus && <Checkout />}
            {CartStatus && <div className='Cart-background'>
                <div className="Cart-content">
                    <div className="Cart-container-0-BtnClose">
                        <svg onClick={() => setCartStatus(false)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="Cart-svg-1" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>
                    <div className="Cart-container-1">
                        {cart.map((product) => (
                            <div key={product.id} className="Cart-products-container">
                                <img src={product.img} alt="" className="Cart-products-C1B1"></img>
                                <div className="Cart-products-C1B2"> {product.nombre} </div>
                                <div className="Cart-products-C1B3">$ {product.precio}</div>
                                <div className="Cart-products-C1B4">Iphone {product.modelo}</div>
                                <div className="Cart-products-C1B5">Qt: {product.cantidad}</div>
                                <button className="Cart-products-C1B6" onClick={() => removeProducts(product.id, product.modelo)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="Cart-products-C1B6-btn" viewBox="0 0 16 16">
                                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="Cart-container-2">
                        {cart.length >= 1 ?
                            <div className="Cart-products-C2B1">
                                <div className="Cart-products-C2B1-R1">
                                    <button onClick={() => clearCart(cart)} className="Cart-products-C2B1-R1-btnVaciar">
                                        Vaciar el carrito
                                    </button>
                                    <div className="Cart-products-C2B1-R1-total">
                                        Total: $<span className="Cart-products-C2B1-totalSpan">{totalPrice(cart)}</span>
                                    </div>
                                </div>

                                <div className="Cart-products-C2B1-R2">
                                    <button onClick={() => setCheckoutStatus(true)} className="Cart-products-C2B1-R2-btn">
                                        CHECKOUT
                                    </button>
                                </div>
                                <div className="Cart-products-C2B1-R3">
                                    <button className="Cart-products-C2B1-R3-btn">
                                        Seguir comprando
                                    </button>
                                </div> { }


                            </div>
                            : <p className="Cart-products-C2B2">Su carrito está vacío</p>
                        }
                    </div>
                </div>
            </div>
            }

        </>
    )
}

export default Cart