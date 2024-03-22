import React ,{createContext} from 'react'
import ShopProducts from '../pages/items/ShopProducts'

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {

    const contextValue = {ShopProducts};
    return(
        <ShopContext.Provider value = {contextValue}>
            {props.children}
        </ShopContext.Provider>

    )
}

export default ShopContextProvider;

