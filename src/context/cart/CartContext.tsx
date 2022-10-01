import React from 'react'
import { createContext } from "react"
import { shoppingCartProps } from "../../interfaces/shoppingCartProps"
import { CartActions } from './Types';

interface cartContextProps{
    state: shoppingCartProps[],
    dispatch: React.Dispatch<CartActions>;
}

const CartContext = createContext<cartContextProps>( {} as cartContextProps )

export default CartContext;