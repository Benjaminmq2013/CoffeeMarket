// import { useReducer } from "react"
// import CheckoutContext from "./CheckoutContext"
// import CheckoutReducer from "./CheckoutReducer"
// import { GET_CLIENT_DATA } from "./Types"

// const CartState = ({ children }) => {
//     const initialState = {
//         clientData:[]
//     }

//     const [state, dispatch] = useReducer(CheckoutReducer, 
//         initialState);

//     const addToCart = item =>{
//         dispatch({type: ADD_TO_CART, payload: item})
//     }
   

//     return(
//         <CartContext.Provider 
//         value={{
//             clientData: state.clientData,            
//         }}>
//           {children}  
//         </CartContext.Provider>
//     )
// }

// export default CartState;

export {}