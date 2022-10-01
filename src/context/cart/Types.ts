import { shoppingCartProps } from '../../interfaces/shoppingCartProps';

export type CartActions = 
    | { type: "ADD_TO_CART", payload: shoppingCartProps }
    | { type: "REMOVE_ITEM", payload:{id: string} }
    | { type: "MORE_PRODUCT", payload:{id: string} }
    | { type: "SUBSTRACT_PRODUCT", payload:{id: string} }