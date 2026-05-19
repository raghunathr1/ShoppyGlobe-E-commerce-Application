import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductItem({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} loading="lazy" width="200" />
      <h2>{product.title}</h2>
      <h3> Price: Rs. {product.price}</h3>
      <Link to={`/product/${product.id}`}> <button> View Details </button> </Link>

      <button onClick={() => dispatch(addToCart(product))}> Add To Cart </button>
    </div>
  );
}

export default ProductItem;