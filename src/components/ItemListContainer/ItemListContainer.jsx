import "./items.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.jsx";
import Loader from "../Loader/Loader.jsx";
import { getProducts } from "../../data/data.js";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idCategory } = useParams();

  const [query, setQuery] = useState("");
  const [typeOrder, setTypeOrder] = useState("");

  useEffect(() => {
    getProducts()
      .then((data) => {
        if (idCategory) {  //Si existe un idCategory, filtramos la data
          const filterProducts = data.filter((product) => product.category === idCategory)
          setProducts(filterProducts)
        } else {         //Si no existe idCategory, no filtra nada, guardamos todos los productos
          setProducts(data);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [idCategory]); //Cada vez q el user navega hacia distintas rutas ejecutamos el useEffect

  const changeInput = (event) => {
    setQuery(event.target.value.toLowerCase());
  };

  const search = () => {
    let filterProducts = products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );

    if (typeOrder === "minor") {
      filterProducts.sort(
        (prevProduct, nextProduct) => prevProduct.price - nextProduct.price
      );
    } else if (typeOrder === "major") {
      filterProducts.sort(
        (prevProduct, nextProduct) => nextProduct.price - prevProduct.price
      );
    }

    return filterProducts;
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="gap-10 wrapper-itemlistcontainer">
          <div className="flex flex-col items-center justify-center w-1/3 gap-3">
            <input
              type="text"
              placeholder="Buscar productos"
              className="w-full p-3 text-center text-lg rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:text-black"
              onChange={changeInput}
            />
            <div className="flex justify-center w-full space-x-4">
              <button
                onClick={() => setTypeOrder("minor")}
                className="w-1/2 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Menor Precio
              </button>
              <button
                onClick={() => setTypeOrder("major")}
                className="w-1/2 py-2 font-semibold text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                Mayor Precio
              </button>
            </div>
          </div>
          <ItemList products={search()} />
        </div>
      )}
    </div>
  );
};
