import { shoppingCartProps } from '../../interfaces/shoppingCartProps';
import { CartActions } from './Types';


const CartReducer = (state:shoppingCartProps[], action:CartActions): shoppingCartProps[] =>{
  
    switch (action.type) {
      case 'ADD_TO_CART': {       
        return [
          ...state, action.payload 
        ];  
      }
      case "REMOVE_ITEM": {
        return state.filter(prod => prod.product_id !== action.payload.id)
      }
      case "MORE_PRODUCT": {

        return state.map(prod => {
          if( action.payload.id === prod.product_id ) return  { ...prod, cart_product_quantity: prod.cart_product_quantity + 1 }
          else return prod
        })

      }
      case "SUBSTRACT_PRODUCT": {
        return state.map(prod => {
          if( action.payload.id === prod.product_id && prod.cart_product_quantity > 1 ) return  { ...prod, cart_product_quantity: prod.cart_product_quantity - 1 }
          else return prod
        })
      }

     
    }
}

export default CartReducer