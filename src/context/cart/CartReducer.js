import { ADD_TO_CART, REMOVE_ITEM, MORE_PRODUCT, SUBSTRACT_PRODUCT } from "./Types"



const CartReducer = (state, action) =>{
  
    switch (action.type) {
      case ADD_TO_CART: {
        if (state.cartItems.length == 0) {
          return {
            ...state,
            cartItems: [...state.cartItems, action.payload],
          };
        } else if (
          !state.cartItems.find(
            (product) =>
              product.product.product_id === action.payload.product.product_id
          )
        ) {
          return {
            ...state,
            cartItems: [...state.cartItems, action.payload],
          };
        }
      }
      case REMOVE_ITEM: {
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.product.product_id !== action.payload
          ),
        };
      }
      case MORE_PRODUCT: {

        function evaluateProduct() {
          product.product_id === action.payload.product_id
            ? console.log("Hola")
            : console.log("Adios");
        }
        console.log(state.cartItems)
        return {
          ...state,
          cartItems: state.cartItems.filter(product => product.product_id === action.payload.product_id
            ? product.cart_product_quantity: product.cart_product_quantity + 1)  
        }

      }
      case SUBSTRACT_PRODUCT: {
        console.log("SUBSTRACT_PRODUCT");
        return { cartItems: state.cartItems };
      }

      default:
        return state, console.log("Por defecto");
    }
}

export default CartReducer