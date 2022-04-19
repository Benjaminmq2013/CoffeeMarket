import { useReducer } from "react"
import CartContext from "../CartContext"
import CartReducer from "./CartReducer"
import { ADD_TO_CART, REMOVE_ITEM, MORE_PRODUCT, SUBSTRACT_PRODUCT } from "./Types"

const CartState = ({ children }) => {
    const initialState = {
        cartItems:[]
    }

    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addToCart = item =>{
        dispatch({type: ADD_TO_CART, payload: item})
    }
    const removeItem = id =>{
        dispatch({type: REMOVE_ITEM, payload: id})
    }
    const moreProduct = id =>{
        dispatch({type: MORE_PRODUCT, payload: id})       
    }
    const substractProduct = id =>{
        dispatch({type: SUBSTRACT_PRODUCT, payload: id})
    }

    return(
        <CartContext.Provider 
        value={{
            cartItems: state.cartItems, 
            addToCart,
            removeItem,
            moreProduct,
            substractProduct
        }}>
          {children}  
        </CartContext.Provider>
    )
}

export default CartState;