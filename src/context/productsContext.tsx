import {createContext, useState} from 'react';

const ProductsContext =  ({ children }) =>{
    const [ products , setProducts ] = useState({});
    const [ cartIsOpened , setCartIsOpened ] = useState(false);
    const [ productsToBuy , setProductsToBuy ] = useState([]);
    
    return (            
        <AppContext.Provider 
            value={[ 
                products, setProducts,
                cartIsOpened, setCartIsOpened, 
                productsToBuy , setProductsToBuy 
            ]}>
                
            {children}
        </AppContext.Provider>  
    );
}

export default ProductsContext
export const AppContext = createContext([]);