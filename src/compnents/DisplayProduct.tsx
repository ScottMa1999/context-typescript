import { useProductContext } from "../context/ProductContext"

export const DisplayProduct = () => {
  // context
  const { state, dispatch } = useProductContext();

  // expression
  const onAddProduct = () => {
    dispatch({type: "ADD_PRODUCT"})
  }

  return (
    <section className="DisplayProduct">
      <button onClick={onAddProduct}>Add Product</button>
      <p>{state.carts}</p>
    </section>
  )
}