import { useReducer } from "react"
import CartContext from "./CartContext"
import CartReducer from "./CartReducer"

const CartState = ({ children }) => {

    const [ state, dispatch ] = useReducer(CartReducer, [])

    return(
        <CartContext.Provider value={{ state, dispatch }}>
          {children}  
        </CartContext.Provider>
    )
}

export default CartState;