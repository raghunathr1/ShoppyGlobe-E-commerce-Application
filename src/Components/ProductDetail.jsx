import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchSingleProduct() {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error(
            "Product not found"
          );

        }

        const data = await response.json();
        setProduct(data);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }

    }

    fetchSingleProduct();

  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div id="par">
    <div className="product-details">
    <div className="product-detail">

     <h1 id="vdtit"> The Product : {product.title}</h1>
      <img src={product.thumbnail} alt={product.title} loading="lazy" width="250"  id="vdImg"/>
      <h2 id="vdPri"> Price: Rs {product.price}</h2>
      <h4>{product.description}</h4>
      <br />
      <button onClick={() => dispatch(addToCart(product))} id="vdBtn"> 🛒 Add To Cart </button>
    </div>
    </div>
    </div>
  );
}

export default ProductDetail;
