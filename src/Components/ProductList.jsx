import ProductItem from "./ProductItem";
import useFetchProducts from "../hooks/useFetchProducts";
import { useSelector } from "react-redux";

function ProductList() {
  const {products, loading, error} = useFetchProducts();
  const searchTerm = useSelector(
    (state) =>
      state.search.searchTerm
  );

  const filteredProducts =
    products.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (

    <div className="product-list">

      {/* If Product not Found by Search */}

      {
        filteredProducts.length > 0 ? (filteredProducts.map((item) => (
            <ProductItem key={item.id} product={item} />
          ))
        ) : (
          <h1> No Products Found </h1>
        )
      }

    </div>
  );
}

export default ProductList;