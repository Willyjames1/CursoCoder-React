import { useContext, useEffect } from 'react'
import "./Checkout.css"
import { Contexto } from '../../Context/CartContext'
import { useState } from 'react'
import CheckoutOrderSent from './CheckoutOrderSent'

const Checkout = () => {

    const { cart, totalPrice, setUsername, setSurname, setEmail, setAddress, setPhone, EmitirOrden, setCheckoutStatus, CheckoutOrderSentStatus, setCheckoutOrderSentStatus } = useContext(Contexto)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 200);
    }, [])

    return (

        <>
            {CheckoutOrderSentStatus && <CheckoutOrderSent />}
            {loading && <div className="Checkout-background">
                < div className="Checkout-container">
                    <div className='Checkout-btnClose'>
                        <svg onClick={() => setCheckoutStatus(false)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="Checkout-btnClose1" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>
                    <h2 className='Checkout-tittle'>Formulario de compra</h2>
                    <form className="Checkout-form">
                        <div></div>
                        <label>Nombre</label>
                        <input
                            type="text"
                            required
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <label>Apellido</label>
                        <input
                            type="text"
                            required
                            onChange={(e) => setSurname(e.target.value)}
                        />

                        <label>Email</label>
                        <input
                            type="text"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />


                        <label>Telefono</label>
                        <input
                            type="text"
                            required
                            onChange={(e) => setPhone(e.target.value)}
                        />


                        <label>Direccion</label>
                        <input
                            type="text"
                            required
                            onChange={(e) => setAddress(e.target.value)}
                        />


                    </form>

                    <div className="Checkout-product-total">
                        <span >Total: ${totalPrice(cart)}</span>
                    </div>
                    <div className='Checkout-product-BackBtn'>
                        <button className="Checkout-product-Btn" onClick={() => EmitirOrden() & setCheckoutOrderSentStatus(true)}>
                            Finalizar compra
                        </button>

                    </div>
                </div>
            </div>
            }
        </>


    )
}

export default Checkout