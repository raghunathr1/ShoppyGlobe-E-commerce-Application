import { useEffect, useState } from "react";

function useFetchProducts() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch Api 
  
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        console.log(data)
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return {
    products, loading, error
  };
}

export default useFetchProducts;