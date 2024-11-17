import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Cart = () => {
    const {cart, totalPrice, deleteProductById, deleteCart} = useContext(CartContext)

  return (
    <div>
        <h2>Productos en el Carrito</h2>
        {
            cart.map((productCart) => (
                <div key={productCart.id} className="flex justify-around">
                    <img src={productCart.image} width={100} alt="" />
                    <p>{productCart.name}</p>
                    <p>Cantidad: {productCart.quantity}</p>
                    <p>Precio c/u: {productCart.price}</p>
                    <p>Precio parcial: {productCart.quantity * productCart.price}</p>

                    <button onClick={ () => deleteProductById(productCart.id)}>Borrar Producto</button>
                </div>
            ))
        }
        <p>Precio total: {totalPrice()}</p>

        <button onClick={deleteCart}>Vaciar Carrito</button>
    </div>
  )
}
export default Cart