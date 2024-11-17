import "./navbar.css";

import CartWidget from "./CartWidget";
import { BsBoxes } from "react-icons/bs";

import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <BsBoxes className="brand" size={40} />
      </Link>

      <ul className="categories">
        <li className="category">
          <NavLink to="/category/remeras/" className={ ({isActive}) => (isActive ? "active-link" : "inactive-link") }>Remeras</NavLink>
        </li>
        <li className="category">
          <NavLink to="/category/zapatillas/" className={ ({isActive}) => (isActive ? "active-link" : "inactive-link") }>Zapatillas</NavLink>
        </li>
        <li className="category">
          <NavLink to="/category/gorras/" className={ ({isActive}) => (isActive ? "active-link" : "inactive-link") }>Gorras</NavLink>
        </li>
        <li className="category">
          <NavLink to="/contador" className={ ({isActive}) => (isActive ? "active-link" : "inactive-link") }>Contador</NavLink>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;