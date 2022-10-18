import React from 'react'

const Context = React.createContext([])

export default function CartContext() {
    return (
        <Context.Provider value={[]}>
            {children}
        </Context.Provider>
    )
}
