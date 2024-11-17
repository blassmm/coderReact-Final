import { FaShoppingCart } from 'react-icons/fa';

import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

import { Link } from 'react-router-dom';

const CartWidget = () => {

  const {totalQuantity} = useContext(CartContext) //Solo declaro la variable que quiero consumir de ese context

  return (
    <Link to="/cart" className="cartwidget">
      <FaShoppingCart className="icon-cart" size={30} />
      <p>{totalQuantity()}</p>
    </Link>
  );
};

export default CartWidget;