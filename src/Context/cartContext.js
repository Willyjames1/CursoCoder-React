import { createContext, useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore'


export const Contexto = createContext()

const ConstCartContext = ({ children }) => {

    const [CartStatus, setCartStatus] = useState(false)

    const [cart, setCart] = useState([])

    const [orderId, setOrderId] = useState();

    /* Boton Checkout */

    const [CheckoutStatus, setCheckoutStatus] = useState(false)

    /* Boton Checkout Sent */

    const [CheckoutOrderSentStatus, setCheckoutOrderSentStatus] = useState(false)

    /* Data Usuario  */

    const [Username, setUsername] = useState('')
    const [Surname, setSurname] = useState('')
    const [Email, setEmail] = useState('')
    const [Phone, setPhone] = useState('')
    const [Address, setAddress] = useState('')




    const addProduct = (item, count, model) => {

        if (isInCart(item.id, model, count)) {

            setCart(cart.map(product => {

                return (product.id === item.id && product.modelo === model ? { ...product, cantidad: product.cantidad + count, modelo: model } : product)

            }));
        } else if (model === "Seleccione el modelo" || model === undefined) {
            setCart([...cart])
        } else {
            setCart([...cart, { ...item, cantidad: count, modelo: model }])
        }

    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.cantidad * act.precio, 0)
    }

    const totalProducts = () => {
        return cart.reduce((acumulador, productoActual) => acumulador + productoActual.cantidad, 0)
    }


    const clearCart = () => {
        setCart([]);
    }

    const isInCart = (id, modelo) => {
        return (cart.find(product => product.id === id && product.modelo === modelo) ? true : false)

    }

    const removeProducts = (id, modelo) => {


        const item = cart.find(product => product.id === id & product.modelo === modelo)
        const indice = cart.indexOf(item)
        cart.splice(indice, 1)

        return setCart([...cart])

    }



    /* Orden de Compra */

    const orden = {
        buyer: {
            nombre: Username,
            apellido: Surname,
            email: Email,
            telefono: Phone,
            direccion: Address,
        },
        items: cart.map(product => ({ id: product.id, nombre: product.nombre, precio: product.precio, Qt: product.cantidad })),
        total: totalPrice()

    }

    /* Emitir orden */

    const EmitirOrden = () => {
        const db = getFirestore()
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, orden)
            .then(({ id }) => setOrderId(id))
    }




    return (
        <Contexto.Provider value={{
            addProduct,
            totalPrice,
            totalProducts,
            clearCart,
            isInCart,
            removeProducts,
            cart,
            CartStatus,
            setCartStatus,
            CheckoutStatus,
            setCheckoutStatus,
            orden,
            EmitirOrden,
            setUsername,
            setSurname,
            setEmail,
            setAddress,
            setPhone,
            CheckoutOrderSentStatus,
            setCheckoutOrderSentStatus,
            orderId,
            setOrderId
        }}>
            {children}
        </Contexto.Provider>
    )
}

export default ConstCartContext


