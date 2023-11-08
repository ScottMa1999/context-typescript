import React, { createContext, useReducer, useContext } from "react";
import { productReducer, cartReducer } from "./reducers/ProductContextReducer";

export type productType = {
  id: number,
  name: string,
  price: number
}

export type productContextType = {
  products: productType[],
  carts: number
}

const initialState = {
  products: [],
  carts: 0
}

export const ProductContext = createContext<{
  state: productContextType,
  dispatch: () => void
}>({
  state: initialState,
  dispatch: () => null
})

const mainReducer = ({products, carts}:productContextType, action: {type: string, payload: productType}) => ({
  products: productReducer(products, action),
  carts: cartReducer(carts, action)
})

export const ProductContextProvider = ({children}: {children: React.ReactNode}) => {
  // reducer
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <ProductContext.Provider value={{state, dispatch}}>
      { children }
    </ProductContext.Provider>
  )
}

export const useProductContext = () => {
  const productContext = useContext(ProductContext);
  if (!productContext) {
    throw new Error('Please use productContext inside the productContextProvider');
  }
  return productContext;
}