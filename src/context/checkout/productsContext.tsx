// Context to manage Open and close Cart. It also manages checkout custom page.

import {createContext, useState, SetStateAction, Dispatch,  } from 'react';
import { shoppingCartProps } from '../../interfaces/shoppingCartProps';

interface ProductsContextProps{
    products: shoppingCartProps,
    setProducts: Dispatch<SetStateAction<shoppingCartProps>>,

    cartIsOpened: boolean,
    setCartIsOpened: Dispatch<SetStateAction<boolean>>

    productsToBuy: any , 
    setProductsToBuy: any
}

const ProductsContext =  ({ children }) =>{

    const [ products , setProducts ] = useState<shoppingCartProps> ( {} as shoppingCartProps);
    const [ cartIsOpened , setCartIsOpened ] = useState<boolean>(true);
    const [ productsToBuy , setProductsToBuy ] = useState([]);
    

    return (            
        <AppContext.Provider 
            value={{
                products, setProducts,
                cartIsOpened, setCartIsOpened, 
                productsToBuy , setProductsToBuy 
            }}>
                
            {children}
        </AppContext.Provider>  
    );
}

export default ProductsContext
export const AppContext = createContext<ProductsContextProps>({} as ProductsContextProps);