import { productType } from "../ProductContext"

export const productReducer = (state: productType[], action: any) => {
  switch(action.type) {
    case "CREATE_PRODUCT":
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.name
        }
      ];
    case "DELETE_PRODUCT":
      return state.filter(product => product.id !== action.payload.id);
    default: 
      return state;
  }
}

export const cartReducer = (state: number, action: any) => {
  switch(action.type) {
    case "ADD_PRODUCT":
      return state + 1;
  }
}