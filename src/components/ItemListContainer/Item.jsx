import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <Link to={"/detail/" + product.id} className="items">
      <div>
        <img src={product.image} className="img-item" alt="" width={100} />
        <p className="text-item">{product.name}</p>
        <p className="text-item">{product.price}</p>
      </div>
    </Link>
  );
};
export default Item;