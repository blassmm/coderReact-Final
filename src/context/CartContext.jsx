import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProductInCart = (newProduct) => {
    setCart([...cart, newProduct]); //Agregamos al estado cart, todo lo que ya tenia mas el nuevo producto
  };

  const totalQuantity = () => {
    const quantity = cart.reduce((total, productCart) => total +  productCart.quantity, 0)
    return quantity
  }

  //precio total de la compra. Suma todos los precios parciales
  const totalPrice = () => {
    const price = cart.reduce((total, productCart) => total + (productCart.quantity * productCart.price), 0)
    return price
  }

  const deleteProductById = (idProduct) =>{
    const filterProducts = cart.filter((productCart) => productCart.id !== idProduct)
    setCart(filterProducts)
  }

  const deleteCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addProductInCart, totalQuantity, totalPrice, deleteProductById, deleteCart }}>{children}</CartContext.Provider>
  );
};

export { CartContext, CartProvider };
