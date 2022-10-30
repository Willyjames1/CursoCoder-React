import "./CheckoutOrderSent.css"
import { Contexto } from "../../Context/CartContext"
import { useContext } from "react"


const CheckoutOrderSent = () => {
    const { Username, orderId } = useContext(Contexto)
    const loader = <div className="loader" ></div >



    return (
        <div className="CheckoutOrderSent-background">
            {orderId ?
                <div className="CheckoutOrderSent-container">

                    <h2>Gracias por tu compra {Username} !</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="CheckoutOrderSent-container-Btn" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                    <h3>Su numero de seguimiento es: {orderId} </h3>

                    <a className="CheckoutOrderSent-container-Btn1" href={"/"} >
                        Volver al inicio
                    </a>
                </div> : loader}
        </div>
    )
}

export default CheckoutOrderSent